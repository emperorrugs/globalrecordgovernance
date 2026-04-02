/**
 * GRGF™ Core Cryptographic Module
 * Deterministic SHA-256 hashing for governance record integrity.
 * No randomness. No interpretation. Pure deterministic output.
 */

/** SHA-256 hash a string payload using Web Crypto API */
export async function generateHash(payload: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(payload);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/** Compare two hash values for integrity verification */
export function compareHash(original: string, recomputed: string): {
  match: boolean;
  original: string;
  recomputed: string;
} {
  const match = original === recomputed;
  return { match, original, recomputed };
}

/** Verify a record's hash matches its canonical payload */
export async function verifyPayloadIntegrity(
  payload: string,
  expectedHash: string
): Promise<{ valid: boolean; computedHash: string }> {
  const computedHash = await generateHash(payload);
  return {
    valid: computedHash === expectedHash,
    computedHash,
  };
}
