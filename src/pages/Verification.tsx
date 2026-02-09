import { PageHeader, Section } from "@/components/PageComponents";
import { Search, ShieldCheck, ShieldX, AlertTriangle } from "lucide-react";
import { useState } from "react";
import { useViewMode } from "@/contexts/ViewModeContext";

const DEMO_RECORDS: Record<string, { timestamp: string; scope: string; title: string }> = {
  "GRGF-2024-0001": { timestamp: "2024-01-15T00:00:00Z", scope: "Framework Constitution", title: "Framework Constitution v1.0" },
  "GRGF-2024-0002": { timestamp: "2024-02-01T00:00:00Z", scope: "Governance Protocol", title: "Governance Protocol — Stewardship Rules" },
  "GRGF-2024-0003": { timestamp: "2024-03-10T00:00:00Z", scope: "Record Classification", title: "Record Classification Taxonomy v1.0" },
  "DEMO-001": { timestamp: "2024-06-15T14:30:00Z", scope: "Government Decision", title: "Sample Decision Record" },
};

const Verification = () => {
  const { isPlain } = useViewMode();
  const [refId, setRefId] = useState("");
  const [result, setResult] = useState<"found" | "not-found" | null>(null);
  const [matchedRecord, setMatchedRecord] = useState<typeof DEMO_RECORDS[string] | null>(null);

  const handleVerify = () => {
    const trimmed = refId.trim().toUpperCase();
    if (!trimmed) return;
    const match = DEMO_RECORDS[trimmed];
    if (match) {
      setResult("found");
      setMatchedRecord(match);
    } else {
      setResult("not-found");
      setMatchedRecord(null);
    }
  };

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Verification Portal"
        subtitle={isPlain
          ? "Check whether a governance record exists and whether it's been changed."
          : "Independent record integrity verification against the GRGF sealed archive."
        }
      />

      <Section>
        <div className="max-w-2xl mx-auto">
          <div className="governance-card">
            <h3 className="font-serif text-lg font-semibold mb-2">Verify a Record</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              {isPlain
                ? "Enter a reference ID to check if a record exists in the archive. Try GRGF-2024-0001 or DEMO-001."
                : "Enter a Record ID or SHA-256 hash to verify against the sealed manifest. Demo IDs: GRGF-2024-0001, DEMO-001."}
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Reference ID</label>
                <input
                  type="text"
                  value={refId}
                  onChange={(e) => { setRefId(e.target.value); setResult(null); }}
                  onKeyDown={(e) => e.key === "Enter" && handleVerify()}
                  placeholder="e.g. GRGF-2024-0001"
                  maxLength={128}
                  className="w-full px-3 py-2.5 text-sm font-mono bg-background border border-input rounded-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <button
                onClick={handleVerify}
                className="w-full px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Search className="h-4 w-4" />
                Verify Record
              </button>
            </div>

            {/* Result */}
            {result && (
              <div className="mt-6 pt-6 border-t border-border">
                {result === "found" && matchedRecord ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
                      <span className="font-serif text-lg font-semibold text-accent">Record Exists</span>
                    </div>
                    <div className="grid gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Record exists?</span>
                        <span className="font-semibold text-foreground">YES</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timestamp</span>
                        <span className="font-mono text-xs text-foreground">
                          {new Date(matchedRecord.timestamp).toLocaleString("en-GB")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Scope</span>
                        <span className="text-foreground">{matchedRecord.scope}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground italic mt-2">
                      No content revealed — only existence and integrity confirmed.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <ShieldX className="h-10 w-10 text-destructive mx-auto mb-3" />
                    <p className="font-serif text-xl font-bold text-destructive">
                      No verifiable record exists for this event
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      The provided ID does not match any sealed record in the archive.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            This verification portal uses demo data for illustration. In a live deployment,
            verification queries run against the sealed GRGF archive.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Verification;
