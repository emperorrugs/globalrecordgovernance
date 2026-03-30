/**
 * GRGF Service Layer Integration Tests
 * Tests the complete record lifecycle through service APIs.
 */

import { describe, it, expect } from 'vitest';
import { generateHash, compareHash, verifyPayloadIntegrity, buildRecordPayload, buildManifest } from '@/core/crypto';
import { validateChain, generateAnchorBatchId, type ChainLink } from '@/core/chain';
import { validateRecordInput, type CreateRecordInput } from '@/services/records';

// ─── Record Input Validation ────────────────────────────────────────────────

describe('Record Input Validation', () => {
  it('rejects empty title', () => {
    const input: CreateRecordInput = { title: '', sector_id: 'sec-1', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Title is required');
  });

  it('rejects missing sector', () => {
    const input: CreateRecordInput = { title: 'Test', sector_id: '', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Sector is required');
  });

  it('rejects missing record type', () => {
    const input: CreateRecordInput = { title: 'Test', sector_id: 'sec-1', record_type_id: '' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Record type is required');
  });

  it('rejects title over 500 characters', () => {
    const input: CreateRecordInput = { title: 'A'.repeat(501), sector_id: 'sec-1', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Title must be under 500 characters');
  });

  it('rejects description over 10000 characters', () => {
    const input: CreateRecordInput = { title: 'Test', sector_id: 'sec-1', record_type_id: 'rt-1', description: 'X'.repeat(10001) };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
  });

  it('accepts valid input', () => {
    const input: CreateRecordInput = { title: 'Procurement Approval Q4', sector_id: 'sec-1', record_type_id: 'rt-1', description: 'Valid record' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});

// ─── Deterministic Hashing ──────────────────────────────────────────────────

describe('Deterministic Record Hashing', () => {
  it('produces identical hash for identical payload', async () => {
    const payload = buildRecordPayload({
      id: 'rec-001', title: 'Test Record', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'draft',
    });
    const hash1 = await generateHash(payload);
    const hash2 = await generateHash(payload);
    expect(hash1).toBe(hash2);
  });

  it('produces different hash when title changes (tamper detection)', async () => {
    const base = {
      id: 'rec-001', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'sealed',
    };
    const original = await generateHash(buildRecordPayload({ ...base, title: 'Original Title' }));
    const tampered = await generateHash(buildRecordPayload({ ...base, title: 'Tampered Title' }));
    expect(original).not.toBe(tampered);
  });

  it('detects tampering via compareHash', async () => {
    const original = await generateHash('original payload');
    const tampered = await generateHash('tampered payload');
    const comparison = compareHash(original, tampered);
    expect(comparison.match).toBe(false);
  });

  it('verifies payload integrity when valid', async () => {
    const payload = 'test payload';
    const hash = await generateHash(payload);
    const result = await verifyPayloadIntegrity(payload, hash);
    expect(result.valid).toBe(true);
    expect(result.computedHash).toBe(hash);
  });

  it('detects payload integrity failure', async () => {
    const hash = await generateHash('original');
    const result = await verifyPayloadIntegrity('tampered', hash);
    expect(result.valid).toBe(false);
  });
});

// ─── Chain Integrity ────────────────────────────────────────────────────────

describe('Chain Integrity Validation', () => {
  it('validates a correct chain', async () => {
    const hash1 = await generateHash('record-1');
    const hash2 = await generateHash('record-2');
    const chain: ChainLink[] = [
      { id: 'r1', hash: hash1, previousHash: null },
      { id: 'r2', hash: hash2, previousHash: hash1 },
    ];
    const result = validateChain(chain);
    expect(result.valid).toBe(true);
    expect(result.brokenLinks).toHaveLength(0);
  });

  it('detects broken chain link', async () => {
    const hash1 = await generateHash('record-1');
    const chain: ChainLink[] = [
      { id: 'r1', hash: hash1, previousHash: null },
      { id: 'r2', hash: 'abc123', previousHash: 'wrong-hash' },
    ];
    const result = validateChain(chain);
    expect(result.valid).toBe(false);
    expect(result.brokenLinks.length).toBeGreaterThan(0);
  });

  it('validates single-record chain (genesis)', async () => {
    const hash = await generateHash('genesis');
    const chain: ChainLink[] = [{ id: 'r1', hash, previousHash: null }];
    const result = validateChain(chain);
    expect(result.valid).toBe(true);
  });

  it('validates empty chain', () => {
    const result = validateChain([]);
    expect(result.valid).toBe(true);
  });
});

// ─── Sealed Record Immutability ─────────────────────────────────────────────

describe('Sealed Record Immutability', () => {
  it('manifest captures seal state', () => {
    const manifest = buildManifest({
      id: 'rec-001', title: 'Sealed Record', status: 'sealed',
      current_hash: 'abc123def456', sealed_at: '2024-06-15T00:00:00Z',
    });
    const parsed = JSON.parse(manifest);
    expect(parsed.status).toBe('sealed');
    expect(parsed.sealed_at).toBe('2024-06-15T00:00:00Z');
    expect(parsed.current_hash).toBe('abc123def456');
    expect(parsed.framework).toBe('GRGF');
  });

  it('manifest includes previous_hash when present', () => {
    const manifest = buildManifest({
      id: 'rec-002', title: 'Linked Record', status: 'sealed',
      current_hash: 'hash2', previous_hash: 'hash1', sealed_at: '2024-06-15T00:00:00Z',
    });
    const parsed = JSON.parse(manifest);
    expect(parsed.previous_hash).toBe('hash1');
  });
});

// ─── Anchor Batch Generation ────────────────────────────────────────────────

describe('Anchor Batch Generation', () => {
  it('generates unique batch IDs', () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateAnchorBatchId()));
    expect(ids.size).toBe(100);
  });

  it('follows GRGF-ANCHOR prefix convention', () => {
    const id = generateAnchorBatchId();
    expect(id).toMatch(/^GRGF-ANCHOR-/);
  });
});

// ─── Payload Canonicalization ───────────────────────────────────────────────

describe('Payload Canonicalization', () => {
  it('produces valid JSON', () => {
    const payload = buildRecordPayload({
      id: 'rec-001', title: 'Test', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'draft',
    });
    expect(() => JSON.parse(payload)).not.toThrow();
  });

  it('excludes undefined optional fields', () => {
    const payload = buildRecordPayload({
      id: 'rec-001', title: 'Test', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'draft',
    });
    const parsed = JSON.parse(payload);
    expect(parsed.description).toBeUndefined();
    expect(parsed.event_type).toBeUndefined();
  });

  it('includes optional fields when provided', () => {
    const payload = buildRecordPayload({
      id: 'rec-001', title: 'Test', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'draft',
      description: 'A description', event_type: 'approval',
    });
    const parsed = JSON.parse(payload);
    expect(parsed.description).toBe('A description');
    expect(parsed.event_type).toBe('approval');
  });
});

// ─── Supersession Logic ─────────────────────────────────────────────────────

describe('Supersession via Chain Linkage', () => {
  it('superseding record links to original via previous_hash', async () => {
    const originalHash = await generateHash(buildRecordPayload({
      id: 'rec-001', title: 'Original', recorded_at: '2024-01-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'sealed',
    }));

    const supersedingPayload = buildRecordPayload({
      id: 'rec-002', title: 'Corrected Version', recorded_at: '2024-02-01T00:00:00Z',
      sector_id: 'sec-1', record_type_id: 'rt-1', tenant_id: 'org-1',
      confidentiality_level: 'internal', status: 'draft',
      previous_hash: originalHash,
    });

    const parsed = JSON.parse(supersedingPayload);
    expect(parsed.previous_hash).toBe(originalHash);

    const supersedingHash = await generateHash(supersedingPayload);
    expect(supersedingHash).not.toBe(originalHash);
  });
});
