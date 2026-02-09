import { useState } from "react";
import { Search, ShieldCheck, ShieldX } from "lucide-react";

interface Record {
  id: string;
  title: string;
  hash: string;
  sealed: string;
  status: string;
}

interface HashVerifierProps {
  records: Record[];
}

export function HashVerifier({ records }: HashVerifierProps) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<
    { found: true; record: Record } | { found: false } | null
  >(null);

  const handleVerify = () => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return;

    const match = records.find(
      (r) =>
        r.hash.toLowerCase() === trimmed ||
        r.id.toLowerCase() === trimmed
    );

    setResult(match ? { found: true, record: match } : { found: false });
  };

  return (
    <div className="governance-card">
      <h3 className="font-serif text-base font-semibold mb-1">
        Hash Verification Tool
      </h3>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        Enter a SHA-256 hash or Record ID to verify integrity against sealed records.
      </p>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setResult(null);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleVerify()}
          placeholder="Enter hash or record ID (e.g. GRGF-2024-0001)"
          maxLength={128}
          className="flex-1 min-w-0 px-3 py-2 text-sm font-mono bg-background border border-input rounded-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button
          onClick={handleVerify}
          className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors shrink-0 flex items-center gap-2"
        >
          <Search className="h-3.5 w-3.5" />
          Verify
        </button>
      </div>

      {result && (
        <div className="mt-4 pt-4 border-t border-border">
          {result.found ? (
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-accent-foreground">
                  Record Verified — Integrity Confirmed
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  <span className="font-mono">{result.record.id}</span> · {result.record.title}
                </p>
                <p className="text-[10px] font-mono text-muted-foreground/70 mt-1 break-all">
                  SHA-256: {result.record.hash}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3">
              <ShieldX className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-destructive">
                  No Match Found
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  The provided hash or ID does not match any sealed record in the archive.
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
