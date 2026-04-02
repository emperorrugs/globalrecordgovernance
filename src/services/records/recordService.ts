/**
 * GRGF™ Record Service
 * Core business logic for governance record lifecycle management.
 * Enforces: create → validate → hash → commit → seal → supersede
 */

import { supabase } from '@/integrations/supabase/client';
import { generateHash, buildRecordPayload, buildManifest, type RecordPayloadInput } from '@/core/crypto';
import { generateAnchorBatchId } from '@/core/chain';
import { createAuditLog } from '@/services/audit/auditService';
import type { RecordStatus } from '@/lib/types';

export interface CreateRecordInput {
  title: string;
  description?: string;
  sector_id: string;
  record_type_id: string;
  jurisdiction_id?: string;
  event_type?: string;
  actor_ref?: string;
  subject_ref?: string;
  occurred_at?: string;
  timezone?: string;
  confidentiality_level?: string;
  retention_class?: string;
  public_verifiable?: boolean;
}

export interface RecordCommitResult {
  recordId: string;
  hash: string;
  previousHash: string | null;
  anchorBatchId: string;
  timestamp: string;
  title: string;
  status: RecordStatus;
}

/** Validate required fields before record creation */
export function validateRecordInput(input: CreateRecordInput): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  if (!input.title?.trim()) errors.push('Title is required');
  if (!input.sector_id) errors.push('Sector is required');
  if (!input.record_type_id) errors.push('Record type is required');
  if (input.title && input.title.length > 500) errors.push('Title must be under 500 characters');
  if (input.description && input.description.length > 10000) errors.push('Description must be under 10,000 characters');
  return { valid: errors.length === 0, errors };
}

/** Create and commit a governance record with deterministic hashing */
export async function createRecord(
  input: CreateRecordInput,
  userId: string,
  tenantId: string,
  submitAfterCreate = false
): Promise<RecordCommitResult> {
  const status: RecordStatus = submitAfterCreate ? 'submitted' : 'draft';

  // 1. Fetch previous hash for chain linkage
  const { data: lastRecord } = await supabase
    .from('records')
    .select('current_hash')
    .eq('tenant_id', tenantId)
    .order('recorded_at', { ascending: false })
    .limit(1)
    .single();
  
  const previousHash = (lastRecord as Record<string, unknown>)?.current_hash as string | null;

  // 2. Insert record to get server-assigned ID and timestamp
  const insertPayload = {
    title: input.title.trim(),
    description: input.description?.trim() || null,
    sector_id: input.sector_id,
    record_type_id: input.record_type_id,
    jurisdiction_id: input.jurisdiction_id || null,
    event_type: input.event_type || null,
    actor_ref: input.actor_ref || null,
    subject_ref: input.subject_ref || null,
    occurred_at: input.occurred_at || null,
    timezone: input.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
    confidentiality_level: input.confidentiality_level || 'internal',
    retention_class: input.retention_class || 'medium_term',
    public_verifiable: input.public_verifiable || false,
    tenant_id: tenantId,
    created_by: userId,
    status,
    previous_hash: previousHash,
  };

  const { data: newRecord, error: insertError } = await (supabase.from('records').insert as Function)(insertPayload).select('id, recorded_at, title').single();

  if (insertError || !newRecord) {
    throw new Error(insertError?.message || 'Failed to create record');
  }

  const rec = newRecord as { id: string; recorded_at: string; title: string };

  // 3. Build canonical payload and compute hash
  const payloadInput: RecordPayloadInput = {
    id: rec.id,
    title: input.title.trim(),
    description: input.description?.trim(),
    event_type: input.event_type,
    actor_ref: input.actor_ref,
    subject_ref: input.subject_ref,
    occurred_at: input.occurred_at,
    recorded_at: rec.recorded_at,
    sector_id: input.sector_id,
    record_type_id: input.record_type_id,
    tenant_id: tenantId,
    confidentiality_level: input.confidentiality_level || 'internal',
    status,
    previous_hash: previousHash || undefined,
  };

  const hash = await generateHash(buildRecordPayload(payloadInput));
  const anchorBatchId = generateAnchorBatchId();

  // 4. Update record with computed hash
  await (supabase.from('records').update as Function)({
    current_hash: hash,
  }).eq('id', rec.id);

  // 5. Store hash in record_hashes table
  await (supabase.from('record_hashes').insert as Function)({
    record_id: rec.id,
    hash_value: hash,
    previous_hash: previousHash,
    payload_snapshot: payloadInput,
  });

  // 6. Create record event
  await (supabase.from('record_events').insert as Function)({
    record_id: rec.id,
    event_type: 'created',
    actor_id: userId,
    description: `Record created with status: ${status}`,
    metadata: { anchor_batch_id: anchorBatchId },
  });

  // 7. Audit log
  await createAuditLog({
    tenantId,
    actionType: 'create',
    entityType: 'record',
    entityId: rec.id,
    afterJson: { title: input.title, status, hash },
  });

  return {
    recordId: rec.id,
    hash,
    previousHash,
    anchorBatchId,
    timestamp: rec.recorded_at,
    title: rec.title,
    status,
  };
}

/** Seal a record — permanently freeze it and generate verification artifacts */
export async function sealRecord(
  recordId: string,
  record: Record<string, unknown>,
  userId: string
): Promise<void> {
  const sealedAt = new Date().toISOString();

  const manifest = buildManifest({
    id: recordId,
    title: record.title as string,
    status: 'sealed',
    current_hash: record.current_hash as string,
    previous_hash: record.previous_hash as string | undefined,
    sealed_at: sealedAt,
  });

  // 1. Update record to sealed
  await (supabase.from('records').update as Function)({
    status: 'sealed',
    sealed_at: sealedAt,
    manifest_json: manifest,
    updated_by: userId,
  }).eq('id', recordId);

  // 2. Create verification receipt
  await (supabase.from('verification_receipts').insert as Function)({
    record_id: recordId,
    hash_at_seal: record.current_hash,
    manifest_at_seal: manifest,
    issued_by: userId,
  });

  // 3. Record event
  await (supabase.from('record_events').insert as Function)({
    record_id: recordId,
    event_type: 'sealed',
    actor_id: userId,
    description: 'Record permanently sealed — immutable state achieved',
  });

  // 4. Audit log
  await createAuditLog({
    tenantId: record.tenant_id as string,
    actionType: 'seal',
    entityType: 'record',
    entityId: recordId,
    beforeJson: { status: record.status },
    afterJson: { status: 'sealed', sealed_at: sealedAt },
  });
}

/** Update a record's status with full audit trail */
export async function updateRecordStatus(
  recordId: string,
  record: Record<string, unknown>,
  newStatus: RecordStatus,
  userId: string,
  note?: string
): Promise<void> {
  if (record.status === 'sealed') {
    throw new Error('Sealed records cannot be modified. Create a superseding record instead.');
  }

  if (newStatus === 'sealed') {
    return sealRecord(recordId, record, userId);
  }

  const updates: Record<string, unknown> = {
    status: newStatus,
    updated_by: userId,
  };

  await (supabase.from('records').update as Function)(updates).eq('id', recordId);

  await (supabase.from('record_events').insert as Function)({
    record_id: recordId,
    event_type: newStatus,
    actor_id: userId,
    description: `Status changed from ${record.status} to ${newStatus}${note ? ': ' + note : ''}`,
  });

  await createAuditLog({
    tenantId: record.tenant_id as string,
    actionType: newStatus === 'approved' ? 'approve' : newStatus,
    entityType: 'record',
    entityId: recordId,
    beforeJson: { status: record.status },
    afterJson: { status: newStatus },
  });
}
