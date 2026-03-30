/**
 * GRGF Verification Service
 * Independent record verification — both internal and public.
 */

import { supabase } from '@/integrations/supabase/client';
import { generateHash, buildRecordPayload, type RecordPayloadInput } from '@/core/crypto';
import type { RecordStatus } from '@/lib/types';

export interface VerificationResult {
  valid: boolean;
  status: RecordStatus;
  hashMatch: boolean;
  computedHash: string;
  storedHash: string;
  message: string;
}

export interface PublicVerificationResult {
  valid: boolean;
  status: RecordStatus;
  title: string;
  sector: string;
  recorded_at: string;
  sealed_at: string | null;
  current_hash: string;
  message: string;
  authority?: string;
  jurisdiction?: string;
}

/** Verify a record's integrity by recomputing its hash */
export async function verifyRecordIntegrity(record: Record<string, unknown>): Promise<VerificationResult> {
  const storedHash = (record.current_hash as string) || '';

  const payloadInput: RecordPayloadInput = {
    id: record.id as string,
    title: record.title as string,
    description: record.description as string | undefined,
    event_type: record.event_type as string | undefined,
    actor_ref: record.actor_ref as string | undefined,
    subject_ref: record.subject_ref as string | undefined,
    occurred_at: record.occurred_at as string | undefined,
    recorded_at: record.recorded_at as string,
    sector_id: record.sector_id as string,
    record_type_id: record.record_type_id as string,
    tenant_id: record.tenant_id as string,
    confidentiality_level: record.confidentiality_level as string,
    status: record.status as string,
    previous_hash: record.previous_hash as string | undefined,
  };

  const computedHash = await generateHash(buildRecordPayload(payloadInput));
  const hashMatch = computedHash === storedHash;
  const status = record.status as RecordStatus;

  const sealedStatuses: RecordStatus[] = ['sealed', 'disputed', 'superseded', 'revoked'];
  const valid = hashMatch && sealedStatuses.includes(status);

  let message = '';
  if (!hashMatch) {
    message = 'TAMPERING DETECTED — Hash mismatch. Record integrity has been compromised.';
  } else if (status === 'sealed') {
    message = 'Record integrity verified. Cryptographic hash matches stored value. Record is permanently sealed.';
  } else if (sealedStatuses.includes(status)) {
    message = `Record integrity verified. Current status: ${status}.`;
  } else {
    message = 'Record has not yet been sealed. Integrity hash matches but record is still mutable.';
  }

  return { valid, status, hashMatch, computedHash, storedHash, message };
}

/** Verify a record publicly by verification token */
export async function verifyByToken(token: string): Promise<PublicVerificationResult | null> {
  const { data, error } = await supabase
    .from('records')
    .select('id, title, status, current_hash, sealed_at, recorded_at, verification_token, public_verifiable, sectors(name), jurisdictions(name)')
    .eq('verification_token', token)
    .eq('public_verifiable', true)
    .single();

  if (error || !data) return null;

  const rec = data as Record<string, unknown>;
  const status = rec.status as RecordStatus;
  const sealedStatuses: RecordStatus[] = ['sealed', 'disputed', 'superseded', 'revoked'];
  const valid = sealedStatuses.includes(status) && !!(rec.current_hash);

  let message = '';
  if (status === 'sealed') message = 'This record has been permanently sealed and its cryptographic integrity is verified.';
  else if (status === 'disputed') message = 'This record is sealed but currently under dispute. Original integrity is maintained.';
  else if (status === 'superseded') message = 'This record has been superseded by a newer version.';
  else if (status === 'revoked') message = 'This record has been revoked. Integrity of the original is maintained for audit purposes.';
  else message = 'This record has not yet been sealed.';

  return {
    valid,
    status,
    title: rec.title as string,
    sector: (rec.sectors as { name: string })?.name || 'Unknown',
    recorded_at: rec.recorded_at as string,
    sealed_at: rec.sealed_at as string | null,
    current_hash: rec.current_hash as string,
    message,
    jurisdiction: (rec.jurisdictions as { name: string })?.name || undefined,
  };
}

/** Log a verification attempt */
export async function logVerification(
  recordId: string,
  result: string,
  metadata?: Record<string, unknown>
): Promise<void> {
  await (supabase.from('verification_logs').insert as Function)({
    record_id: recordId,
    verification_result: result,
    metadata: metadata || {},
  });
}
