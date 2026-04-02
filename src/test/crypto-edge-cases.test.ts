/**
 * GRGF™ Crypto Edge Case Tests
 * Tests boundary conditions, Unicode handling, large payloads,
 * and adversarial inputs for the cryptographic module.
 */

import { describe, it, expect } from 'vitest';
import { generateHash, compareHash, verifyPayloadIntegrity } from '@/core/crypto/sha256';
import { buildRecordPayload, buildManifest } from '@/core/crypto/payload';
import { truncateHash } from '@/core/chain/chainService';

// ─── Unicode & Internationalization ─────────────────────────────────────────

describe('Crypto — Unicode & i18n Payload Handling', () => {
  it('handles Arabic text deterministically', async () => {
    const h1 = await generateHash('سجل حكومي رسمي');
    const h2 = await generateHash('سجل حكومي رسمي');
    expect(h1).toBe(h2);
    expect(h1).toMatch(/^[0-9a-f]{64}$/);
  });

  it('handles French accented characters', async () => {
    const h1 = await generateHash('Résolution approuvée par le ministère');
    const h2 = await generateHash('Résolution approuvée par le ministère');
    expect(h1).toBe(h2);
  });

  it('handles CJK characters', async () => {
    const h1 = await generateHash('政府记录管理框架');
    const h2 = await generateHash('政府记录管理框架');
    expect(h1).toBe(h2);
  });

  it('differentiates similar Unicode strings', async () => {
    const latin = await generateHash('cafe');
    const accented = await generateHash('café');
    expect(latin).not.toBe(accented);
  });

  it('handles emoji in payloads', async () => {
    const hash = await generateHash('Record approved ✅');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });
});

// ─── Boundary Conditions ────────────────────────────────────────────────────

describe('Crypto — Boundary Conditions', () => {
  it('hashes empty string', async () => {
    const hash = await generateHash('');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
    // Known SHA-256 of empty string
    expect(hash).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855');
  });

  it('hashes single character', async () => {
    const hash = await generateHash('a');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('hashes very large payload (100KB)', async () => {
    const largePayload = 'X'.repeat(100_000);
    const hash = await generateHash(largePayload);
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('hashes payload with newlines and special chars', async () => {
    const hash = await generateHash('line1\nline2\ttab\r\nwindows');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('hashes JSON with nested objects', async () => {
    const nested = JSON.stringify({ a: { b: { c: { d: 'deep' } } } });
    const hash = await generateHash(nested);
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('whitespace-only strings produce valid but distinct hashes', async () => {
    const space = await generateHash(' ');
    const tab = await generateHash('\t');
    const newline = await generateHash('\n');
    expect(space).not.toBe(tab);
    expect(tab).not.toBe(newline);
  });
});

// ─── Adversarial Inputs ─────────────────────────────────────────────────────

describe('Crypto — Adversarial Input Resilience', () => {
  it('handles SQL injection strings safely', async () => {
    const hash = await generateHash("'; DROP TABLE records; --");
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('handles XSS payloads safely', async () => {
    const hash = await generateHash('<script>alert("xss")</script>');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });

  it('handles null bytes in string', async () => {
    const hash = await generateHash('before\0after');
    expect(hash).toMatch(/^[0-9a-f]{64}$/);
  });
});

// ─── truncateHash Edge Cases ────────────────────────────────────────────────

describe('truncateHash — Edge Cases', () => {
  it('returns full hash if shorter than prefix+suffix', () => {
    expect(truncateHash('abcdef')).toBe('abcdef');
  });

  it('handles empty string (falsy → em-dash)', () => {
    expect(truncateHash('')).toBe('—');
  });

  it('custom prefix/suffix lengths', () => {
    const hash = 'a'.repeat(64);
    const result = truncateHash(hash, 4, 4);
    expect(result).toBe('aaaa…aaaa');
    expect(result.length).toBe(9);
  });
});

// ─── Manifest Edge Cases ────────────────────────────────────────────────────

describe('Manifest — Edge Cases', () => {
  it('manifest with attachment hashes', () => {
    const manifest = buildManifest(
      { id: 'rec-001', title: 'With Attachments', status: 'sealed', current_hash: 'abc123', sealed_at: '2026-01-01T00:00:00Z' },
      ['hash_file1', 'hash_file2', 'hash_file3']
    );
    const integrity = manifest.integrity as Record<string, unknown>;
    expect(integrity.attachment_hashes).toEqual(['hash_file1', 'hash_file2', 'hash_file3']);
  });

  it('manifest without sealed_at defaults to null', () => {
    const manifest = buildManifest({ id: 'rec-001', title: 'Unsealed', status: 'draft', current_hash: 'abc' });
    expect(manifest.sealed_at).toBeNull();
  });

  it('manifest generated_at is a valid ISO timestamp', () => {
    const manifest = buildManifest({ id: 'rec-001', title: 'T', status: 'sealed', current_hash: 'abc' });
    expect(() => new Date(manifest.generated_at as string)).not.toThrow();
    expect(new Date(manifest.generated_at as string).toISOString()).toBeTruthy();
  });
});
