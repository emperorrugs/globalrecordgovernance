/**
 * GRGF™ Chain Validation Engine
 * Validates append-only chain integrity by verifying hash linkage.
 */

export interface ChainLink {
  id: string;
  title: string;
  status: string;
  current_hash: string | null;
  previous_hash: string | null;
  recorded_at: string;
  sealed_at: string | null;
}

export interface ChainValidationResult {
  valid: boolean;
  totalLinks: number;
  verifiedLinks: number;
  breakIndex: number | null;
  breakDetails: string | null;
}

/** Validate the integrity of a chain of records */
export function validateChain(records: ChainLink[]): ChainValidationResult {
  if (records.length === 0) {
    return { valid: true, totalLinks: 0, verifiedLinks: 0, breakIndex: null, breakDetails: null };
  }

  let verifiedLinks = 1; // First link is always valid (genesis)

  for (let i = 1; i < records.length; i++) {
    const current = records[i];
    const previous = records[i - 1];

    // If both hashes exist, they must link
    if (current.previous_hash && previous.current_hash) {
      if (current.previous_hash !== previous.current_hash) {
        return {
          valid: false,
          totalLinks: records.length,
          verifiedLinks,
          breakIndex: i,
          breakDetails: `Chain break at record ${current.id}: expected previous_hash ${previous.current_hash?.slice(0, 16)}... but found ${current.previous_hash?.slice(0, 16)}...`,
        };
      }
    }
    verifiedLinks++;
  }

  return {
    valid: true,
    totalLinks: records.length,
    verifiedLinks,
    breakIndex: null,
    breakDetails: null,
  };
}

/** Generate a Merkle-style anchor batch ID */
export function generateAnchorBatchId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'GRGF™-ANCHOR-';
  for (let i = 0; i < 8; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

/** Truncate a hash for display purposes */
export function truncateHash(hash: string | null, prefixLen = 12, suffixLen = 8): string {
  if (!hash) return '—';
  if (hash.length <= prefixLen + suffixLen) return hash;
  return `${hash.slice(0, prefixLen)}…${hash.slice(-suffixLen)}`;
}
