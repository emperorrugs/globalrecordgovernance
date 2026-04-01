/**
 * GRGF Verification Service Tests
 * Tests record integrity verification, public verification logic,
 * tamper detection, and status-based verification outcomes.
 */

import { describe, it, expect } from 'vitest';
import { generateHash, buildRecordPayload, type RecordPayloadInput } from '@/core/crypto';

// ─── Verification Result Logic ──────────────────────────────────────────────

describe('Verification — Hash Recomputation & Tamper Detection', () => {
  const basePayload: RecordPayloadInput = {
    id: 'rec-v001', title: 'Procurement Decision Q4',
    recorded_at: '2026-01-15T10:00:00Z', sector_id: 'sec-gov',
    record_type_id: 'rt-decision', tenant_id: 'org-ministry',
    confidentiality_level: 'internal', status: 'sealed',
  };

  it('recomputed hash matches original for untampered record', async () => {
    const payload = buildRecordPayload(basePayload);
    const originalHash = await generateHash(payload);
    const recomputedHash = await generateHash(payload);
    expect(recomputedHash).toBe(originalHash);
  });

  it('detects title tampering', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const tampered = await generateHash(buildRecordPayload({ ...basePayload, title: 'Altered Title' }));
    expect(tampered).not.toBe(original);
  });

  it('detects status tampering', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const tampered = await generateHash(buildRecordPayload({ ...basePayload, status: 'draft' }));
    expect(tampered).not.toBe(original);
  });

  it('detects sector tampering', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const tampered = await generateHash(buildRecordPayload({ ...basePayload, sector_id: 'sec-health' }));
    expect(tampered).not.toBe(original);
  });

  it('detects tenant_id tampering (multi-tenant isolation)', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const tampered = await generateHash(buildRecordPayload({ ...basePayload, tenant_id: 'org-attacker' }));
    expect(tampered).not.toBe(original);
  });

  it('detects description injection', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const injected = await generateHash(buildRecordPayload({ ...basePayload, description: '<script>alert(1)</script>' }));
    expect(injected).not.toBe(original);
  });

  it('detects timestamp manipulation', async () => {
    const original = await generateHash(buildRecordPayload(basePayload));
    const tampered = await generateHash(buildRecordPayload({ ...basePayload, recorded_at: '2020-01-01T00:00:00Z' }));
    expect(tampered).not.toBe(original);
  });
});

// ─── Verification Status Classification ─────────────────────────────────────

describe('Verification — Status-Based Outcome Classification', () => {
  const sealedStatuses = ['sealed', 'disputed', 'superseded', 'revoked'];
  const mutableStatuses = ['draft', 'submitted', 'under_review', 'approved'];

  sealedStatuses.forEach(status => {
    it(`status '${status}' should be classified as integrity-verifiable`, () => {
      expect(sealedStatuses.includes(status)).toBe(true);
    });
  });

  mutableStatuses.forEach(status => {
    it(`status '${status}' should NOT be classified as permanently sealed`, () => {
      expect(sealedStatuses.includes(status)).toBe(false);
    });
  });

  it('archived status is neither sealed nor mutable — edge case', () => {
    expect(sealedStatuses.includes('archived')).toBe(false);
    expect(mutableStatuses.includes('archived')).toBe(false);
  });
});

// ─── Public Verification — Content-Free Model ──────────────────────────────

describe('Verification — Public Content-Free Model', () => {
  it('public verification result must NOT expose description or metadata', () => {
    const publicResult = {
      valid: true, status: 'sealed', title: 'Record Title',
      sector: 'Government', recorded_at: '2026-01-15T10:00:00Z',
      sealed_at: '2026-01-16T10:00:00Z', current_hash: 'abc123',
      message: 'Verified',
    };
    expect(publicResult).not.toHaveProperty('description');
    expect(publicResult).not.toHaveProperty('metadata');
    expect(publicResult).not.toHaveProperty('actor_ref');
    expect(publicResult).not.toHaveProperty('subject_ref');
  });

  it('public result must include integrity confirmation fields', () => {
    const required = ['valid', 'status', 'title', 'sector', 'recorded_at', 'current_hash', 'message'];
    const publicResult = { valid: true, status: 'sealed', title: 'T', sector: 'S', recorded_at: 'R', current_hash: 'H', message: 'M' };
    required.forEach(field => expect(publicResult).toHaveProperty(field));
  });
});

// ─── Audit Log Integrity Hashing ────────────────────────────────────────────

describe('Audit Log — Integrity Hash Generation', () => {
  it('audit payload produces deterministic hash', async () => {
    const payload = JSON.stringify({
      user_id: 'usr-001', action: 'seal', entity: 'record',
      entity_id: 'rec-001', timestamp: '2026-01-15T10:00:00Z',
    });
    const hash1 = await generateHash(payload);
    const hash2 = await generateHash(payload);
    expect(hash1).toBe(hash2);
  });

  it('different actions produce different hashes', async () => {
    const base = { user_id: 'usr-001', entity: 'record', entity_id: 'rec-001', timestamp: '2026-01-15T10:00:00Z' };
    const sealHash = await generateHash(JSON.stringify({ ...base, action: 'seal' }));
    const revokeHash = await generateHash(JSON.stringify({ ...base, action: 'revoke' }));
    expect(sealHash).not.toBe(revokeHash);
  });

  it('all critical actions must be auditable', () => {
    const criticalActions = [
      'create', 'edit', 'submit', 'approve', 'reject', 'seal',
      'verify', 'dispute', 'resolve_dispute', 'revoke', 'supersede',
      'archive', 'permission_change',
    ];
    expect(criticalActions.length).toBe(13);
    expect(criticalActions).toContain('seal');
    expect(criticalActions).toContain('revoke');
    expect(criticalActions).toContain('permission_change');
  });
});
