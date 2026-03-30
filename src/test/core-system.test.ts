import { describe, it, expect } from 'vitest';
import { generateHash, compareHash, verifyPayloadIntegrity } from '@/core/crypto/sha256';
import { buildRecordPayload, buildManifest } from '@/core/crypto/payload';
import { validateChain, generateAnchorBatchId, truncateHash, type ChainLink } from '@/core/chain/chainService';

describe('GRGF Core Crypto — SHA-256', () => {
  it('produces deterministic output for identical inputs', async () => {
    const hash1 = await generateHash('test payload');
    const hash2 = await generateHash('test payload');
    expect(hash1).toBe(hash2);
  });

  it('produces different output for different inputs', async () => {
    const hash1 = await generateHash('payload A');
    const hash2 = await generateHash('payload B');
    expect(hash1).not.toBe(hash2);
  });

  it('returns a 64-character hex string', async () => {
    const hash = await generateHash('hello');
    expect(hash).toHaveLength(64);
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('compareHash detects match', async () => {
    const hash = await generateHash('data');
    const result = compareHash(hash, hash);
    expect(result.match).toBe(true);
  });

  it('compareHash detects mismatch', () => {
    const result = compareHash('abc123', 'def456');
    expect(result.match).toBe(false);
  });

  it('verifyPayloadIntegrity validates correctly', async () => {
    const payload = 'governance record';
    const hash = await generateHash(payload);
    const result = await verifyPayloadIntegrity(payload, hash);
    expect(result.valid).toBe(true);
  });

  it('verifyPayloadIntegrity detects tampering', async () => {
    const payload = 'governance record';
    const hash = await generateHash(payload);
    const result = await verifyPayloadIntegrity('tampered record', hash);
    expect(result.valid).toBe(false);
  });
});

describe('GRGF Core Crypto — Canonical Payload', () => {
  const baseRecord = {
    id: 'rec-001',
    title: 'Test Record',
    recorded_at: '2026-03-30T14:00:00Z',
    sector_id: 'sec-001',
    record_type_id: 'rt-001',
    tenant_id: 'org-001',
    confidentiality_level: 'internal',
    status: 'submitted',
  };

  it('produces deterministic JSON output', () => {
    const p1 = buildRecordPayload(baseRecord);
    const p2 = buildRecordPayload(baseRecord);
    expect(p1).toBe(p2);
  });

  it('changes output when any field changes', () => {
    const p1 = buildRecordPayload(baseRecord);
    const p2 = buildRecordPayload({ ...baseRecord, title: 'Modified Title' });
    expect(p1).not.toBe(p2);
  });

  it('fills optional fields with empty strings', () => {
    const payload = JSON.parse(buildRecordPayload(baseRecord));
    expect(payload.description).toBe('');
    expect(payload.event_type).toBe('');
    expect(payload.actor_ref).toBe('');
    expect(payload.previous_hash).toBe('');
  });

  it('buildManifest includes required fields', () => {
    const manifest = buildManifest({
      id: 'rec-001',
      title: 'Test',
      status: 'sealed',
      current_hash: 'abc123',
      sealed_at: '2026-03-30T15:00:00Z',
    });
    expect(manifest.version).toBe('1.0');
    expect(manifest.framework).toBe('GRGF');
    expect(manifest.record_id).toBe('rec-001');
    expect((manifest.integrity as Record<string, unknown>).algorithm).toBe('SHA-256');
  });
});

describe('GRGF Chain Validation', () => {
  it('validates an empty chain', () => {
    const result = validateChain([]);
    expect(result.valid).toBe(true);
    expect(result.totalLinks).toBe(0);
  });

  it('validates a single-link chain', () => {
    const chain: ChainLink[] = [{
      id: '1', title: 'First', status: 'sealed',
      current_hash: 'aaa', previous_hash: null,
      recorded_at: '2026-01-01T00:00:00Z', sealed_at: null,
    }];
    const result = validateChain(chain);
    expect(result.valid).toBe(true);
    expect(result.verifiedLinks).toBe(1);
  });

  it('validates a correctly linked chain', () => {
    const chain: ChainLink[] = [
      { id: '1', title: 'R1', status: 'sealed', current_hash: 'hash_a', previous_hash: null, recorded_at: '2026-01-01T00:00:00Z', sealed_at: null },
      { id: '2', title: 'R2', status: 'sealed', current_hash: 'hash_b', previous_hash: 'hash_a', recorded_at: '2026-01-02T00:00:00Z', sealed_at: null },
      { id: '3', title: 'R3', status: 'sealed', current_hash: 'hash_c', previous_hash: 'hash_b', recorded_at: '2026-01-03T00:00:00Z', sealed_at: null },
    ];
    const result = validateChain(chain);
    expect(result.valid).toBe(true);
    expect(result.verifiedLinks).toBe(3);
  });

  it('detects a broken chain', () => {
    const chain: ChainLink[] = [
      { id: '1', title: 'R1', status: 'sealed', current_hash: 'hash_a', previous_hash: null, recorded_at: '2026-01-01T00:00:00Z', sealed_at: null },
      { id: '2', title: 'R2', status: 'sealed', current_hash: 'hash_b', previous_hash: 'WRONG_HASH', recorded_at: '2026-01-02T00:00:00Z', sealed_at: null },
    ];
    const result = validateChain(chain);
    expect(result.valid).toBe(false);
    expect(result.breakIndex).toBe(1);
    expect(result.breakDetails).toContain('Chain break');
  });

  it('generateAnchorBatchId produces valid format', () => {
    const id = generateAnchorBatchId();
    expect(id).toMatch(/^GRGF-ANCHOR-[A-Z0-9]{8}$/);
  });

  it('truncateHash handles null', () => {
    expect(truncateHash(null)).toBe('—');
  });

  it('truncateHash shortens long hashes', () => {
    const hash = 'a'.repeat(64);
    const result = truncateHash(hash);
    expect(result.length).toBeLessThan(64);
    expect(result).toContain('…');
  });
});
