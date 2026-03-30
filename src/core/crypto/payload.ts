/**
 * GRGF Canonical Payload Builder
 * Builds deterministic, reproducible payloads for hashing.
 * Field ordering is fixed — any change in order changes the hash.
 */

export interface RecordPayloadInput {
  id: string;
  title: string;
  description?: string;
  event_type?: string;
  actor_ref?: string;
  subject_ref?: string;
  occurred_at?: string;
  recorded_at: string;
  sector_id: string;
  record_type_id: string;
  tenant_id: string;
  confidentiality_level: string;
  status: string;
  previous_hash?: string;
}

/** Build canonical JSON payload for deterministic hashing */
export function buildRecordPayload(record: RecordPayloadInput): string {
  return JSON.stringify({
    id: record.id,
    title: record.title,
    description: record.description || '',
    event_type: record.event_type || '',
    actor_ref: record.actor_ref || '',
    subject_ref: record.subject_ref || '',
    occurred_at: record.occurred_at || '',
    recorded_at: record.recorded_at,
    sector_id: record.sector_id,
    record_type_id: record.record_type_id,
    tenant_id: record.tenant_id,
    confidentiality_level: record.confidentiality_level,
    status: record.status,
    previous_hash: record.previous_hash || '',
  });
}

/** Generate a manifest object for a sealed record */
export function buildManifest(record: {
  id: string;
  title: string;
  status: string;
  current_hash: string;
  previous_hash?: string;
  sealed_at?: string;
}, attachmentHashes: string[] = []): Record<string, unknown> {
  return {
    version: '1.0',
    framework: 'GRGF',
    record_id: record.id,
    title: record.title,
    status: record.status,
    integrity: {
      algorithm: 'SHA-256',
      record_hash: record.current_hash,
      previous_hash: record.previous_hash || null,
      attachment_hashes: attachmentHashes,
    },
    sealed_at: record.sealed_at || null,
    generated_at: new Date().toISOString(),
  };
}
