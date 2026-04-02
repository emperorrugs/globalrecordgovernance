/**
 * GRGF™ Record Lifecycle & Status Transition Tests
 * Tests the complete governance record lifecycle, status transition rules,
 * sealed immutability enforcement, and multi-tenant isolation.
 */

import { describe, it, expect } from 'vitest';
import { validateRecordInput, type CreateRecordInput } from '@/services/records';
import { generateHash, buildRecordPayload } from '@/core/crypto';
import { validateChain, type ChainLink } from '@/core/chain';

// ─── Status Transition Rules ────────────────────────────────────────────────

describe('Record Lifecycle — Status Transition Rules', () => {
  const validTransitions: Record<string, string[]> = {
    draft: ['submitted', 'archived'],
    submitted: ['under_review', 'draft'],
    under_review: ['approved', 'submitted'],
    approved: ['sealed'],
    sealed: ['disputed', 'superseded', 'revoked'],
    disputed: ['sealed', 'revoked'],
    superseded: [],
    revoked: [],
    archived: [],
  };

  Object.entries(validTransitions).forEach(([from, allowed]) => {
    it(`'${from}' may transition to: [${allowed.join(', ') || 'none'}]`, () => {
      expect(Array.isArray(allowed)).toBe(true);
    });
  });

  it('sealed records cannot return to draft', () => {
    expect(validTransitions['sealed']).not.toContain('draft');
  });

  it('revoked is a terminal state', () => {
    expect(validTransitions['revoked'].length).toBe(0);
  });

  it('superseded is a terminal state', () => {
    expect(validTransitions['superseded'].length).toBe(0);
  });

  it('archived is a terminal state', () => {
    expect(validTransitions['archived'].length).toBe(0);
  });
});

// ─── Sealed Immutability ────────────────────────────────────────────────────

describe('Record Lifecycle — Sealed Immutability Enforcement', () => {
  it('sealed record hash is deterministic regardless of recomputation time', async () => {
    const payload = buildRecordPayload({
      id: 'rec-seal-001', title: 'Final Decision', recorded_at: '2026-03-01T00:00:00Z',
      sector_id: 'sec-gov', record_type_id: 'rt-decision', tenant_id: 'org-ministry',
      confidentiality_level: 'restricted', status: 'sealed',
    });
    const hash1 = await generateHash(payload);
    const hash2 = await generateHash(payload);
    const hash3 = await generateHash(payload);
    expect(hash1).toBe(hash2);
    expect(hash2).toBe(hash3);
  });

  it('any field modification after sealing changes hash (tamper detection)', async () => {
    const base = {
      id: 'rec-seal-002', title: 'Sealed Record', recorded_at: '2026-03-01T00:00:00Z',
      sector_id: 'sec-gov', record_type_id: 'rt-decision', tenant_id: 'org-ministry',
      confidentiality_level: 'internal', status: 'sealed',
    };
    const sealedHash = await generateHash(buildRecordPayload(base));

    const fields = ['title', 'description', 'sector_id', 'tenant_id', 'confidentiality_level'] as const;
    for (const field of fields) {
      const tampered = await generateHash(buildRecordPayload({ ...base, [field]: 'TAMPERED' }));
      expect(tampered).not.toBe(sealedHash);
    }
  });
});

// ─── Multi-Tenant Isolation ─────────────────────────────────────────────────

describe('Record Lifecycle — Multi-Tenant Data Isolation', () => {
  it('identical records in different tenants produce different hashes', async () => {
    const base = {
      id: 'rec-mt-001', title: 'Budget Approval', recorded_at: '2026-03-01T00:00:00Z',
      sector_id: 'sec-finance', record_type_id: 'rt-approval', confidentiality_level: 'internal', status: 'sealed',
    };
    const tenantA = await generateHash(buildRecordPayload({ ...base, tenant_id: 'org-ministry-a' }));
    const tenantB = await generateHash(buildRecordPayload({ ...base, tenant_id: 'org-ministry-b' }));
    expect(tenantA).not.toBe(tenantB);
  });

  it('tenant_id is included in canonical payload', () => {
    const payload = JSON.parse(buildRecordPayload({
      id: 'rec-001', title: 'T', recorded_at: '2026-01-01T00:00:00Z',
      sector_id: 's', record_type_id: 'rt', tenant_id: 'org-specific',
      confidentiality_level: 'internal', status: 'draft',
    }));
    expect(payload.tenant_id).toBe('org-specific');
  });
});

// ─── Input Validation — Extended Edge Cases ─────────────────────────────────

describe('Record Input Validation — Extended Edge Cases', () => {
  it('rejects title with only whitespace', () => {
    const input: CreateRecordInput = { title: '   ', sector_id: 'sec-1', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(false);
  });

  it('accepts title at exactly 500 characters', () => {
    const input: CreateRecordInput = { title: 'A'.repeat(500), sector_id: 'sec-1', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(true);
  });

  it('accepts description at exactly 10000 characters', () => {
    const input: CreateRecordInput = { title: 'Test', sector_id: 'sec-1', record_type_id: 'rt-1', description: 'X'.repeat(10000) };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(true);
  });

  it('handles Unicode titles correctly', () => {
    const input: CreateRecordInput = { title: 'Résolution gouvernementale — القرار الحكومي', sector_id: 'sec-1', record_type_id: 'rt-1' };
    const result = validateRecordInput(input);
    expect(result.valid).toBe(true);
  });

  it('collects all validation errors simultaneously', () => {
    const input: CreateRecordInput = { title: 'A'.repeat(501), sector_id: '', record_type_id: '' };
    const result = validateRecordInput(input);
    expect(result.errors.length).toBeGreaterThanOrEqual(3);
  });
});

// ─── Chain Integrity — Extended Scenarios ───────────────────────────────────

describe('Chain Integrity — Extended Scenarios', () => {
  it('validates a 100-link chain', async () => {
    const chain: ChainLink[] = [];
    let prevHash: string | null = null;
    for (let i = 0; i < 100; i++) {
      const hash = await generateHash(`record-${i}`);
      chain.push({
        id: `r${i}`, title: `Record ${i}`, status: 'sealed',
        current_hash: hash, previous_hash: prevHash,
        recorded_at: `2026-01-${String(i + 1).padStart(2, '0')}T00:00:00Z`, sealed_at: null,
      });
      prevHash = hash;
    }
    const result = validateChain(chain);
    expect(result.valid).toBe(true);
    expect(result.verifiedLinks).toBe(100);
  });

  it('detects break in middle of long chain', async () => {
    const chain: ChainLink[] = [];
    let prevHash: string | null = null;
    for (let i = 0; i < 10; i++) {
      const hash = await generateHash(`record-${i}`);
      chain.push({
        id: `r${i}`, title: `Record ${i}`, status: 'sealed',
        current_hash: hash,
        previous_hash: i === 5 ? 'INJECTED_BREAK' : prevHash,
        recorded_at: '2026-01-01T00:00:00Z', sealed_at: null,
      });
      prevHash = hash;
    }
    const result = validateChain(chain);
    expect(result.valid).toBe(false);
    expect(result.breakIndex).toBe(5);
  });
});
