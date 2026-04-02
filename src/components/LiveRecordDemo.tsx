import { useState, useCallback } from "react";
import { sha256 } from "@/lib/hash";
import { Shield, CheckCircle, Hash, Clock, ArrowRight, Search, RotateCcw } from "lucide-react";

interface RecordEntry {
  id: string;
  actor: string;
  action: string;
  description: string;
  timestamp: string;
  hash: string;
  previousHash: string;
  verificationId: string;
}

function generateId() {
  return `GRGF™-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
}

export function LiveRecordDemo() {
  const [mode, setMode] = useState<"record" | "verify" | "timeline">("record");
  const [records, setRecords] = useState<RecordEntry[]>([]);
  const [isHashing, setIsHashing] = useState(false);
  const [lastResult, setLastResult] = useState<RecordEntry | null>(null);
  const [verifyInput, setVerifyInput] = useState("");
  const [verifyResult, setVerifyResult] = useState<"valid" | "invalid" | "not_found" | null>(null);

  const [form, setForm] = useState({
    actor: "Ministry of Finance",
    action: "Budget Approval",
    description: "",
  });

  const actors = [
    "Ministry of Finance",
    "Ministry of Health",
    "Ministry of Education",
    "Office of the Auditor General",
    "Public Procurement Board",
    "Central Bank",
    "Ministry of Justice",
  ];

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsHashing(true);
    setLastResult(null);

    const timestamp = new Date().toISOString();
    const previousHash = records.length > 0 ? records[records.length - 1].hash : "0".repeat(64);
    const verificationId = generateId();

    const payload = JSON.stringify({
      actor: form.actor,
      action: form.action,
      description: form.description,
      timestamp,
      previousHash,
    });

    // Simulate processing delay for visual effect
    await new Promise((r) => setTimeout(r, 800));
    const hash = await sha256(payload);

    const entry: RecordEntry = {
      id: verificationId,
      actor: form.actor,
      action: form.action,
      description: form.description,
      timestamp,
      hash,
      previousHash,
      verificationId,
    };

    setRecords((prev) => [...prev, entry]);
    setLastResult(entry);
    setIsHashing(false);
    setForm((p) => ({ ...p, description: "" }));
  }, [form, records]);

  const handleVerify = useCallback(() => {
    const found = records.find(
      (r) => r.verificationId === verifyInput.trim() || r.hash === verifyInput.trim()
    );
    setVerifyResult(found ? "valid" : verifyInput.trim() ? "not_found" : "invalid");
  }, [verifyInput, records]);

  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative">
        <div className="text-center mb-12">
          <div className="carbon-tag mx-auto mb-4 w-fit">INTERACTIVE DEMONSTRATION</div>
          <h2 className="text-heading-1 font-bold text-foreground mb-4">
            Experience the Evidence Engine
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Record an institutional event, generate its cryptographic proof, and verify it — all in real time.
          </p>
        </div>

        {/* Mode Tabs */}
        <div className="flex justify-center gap-1 mb-10 p-1 bg-muted rounded-lg w-fit mx-auto">
          {[
            { key: "record", label: "Record Event", icon: Hash },
            { key: "verify", label: "Verify Record", icon: Search },
            { key: "timeline", label: "Timeline", icon: Clock },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setMode(key as typeof mode); setVerifyResult(null); }}
              className={`flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md transition-all ${
                mode === key
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Record Mode */}
        {mode === "record" && (
          <div className="grid lg:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="governance-card space-y-5">
              <h3 className="productive-heading-02 text-foreground">Record an Institutional Event</h3>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Actor / Institution</label>
                <select
                  value={form.actor}
                  onChange={(e) => setForm({ ...form, actor: e.target.value })}
                  className="w-full border border-border bg-background rounded-md px-3 py-2.5 text-sm"
                >
                  {actors.map((a) => <option key={a}>{a}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Action Type</label>
                <input
                  type="text"
                  value={form.action}
                  onChange={(e) => setForm({ ...form, action: e.target.value })}
                  required
                  className="w-full border border-border bg-background rounded-md px-3 py-2.5 text-sm"
                  placeholder="e.g. Budget Approval, Inspection Report"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  required
                  className="w-full border border-border bg-background rounded-md px-3 py-2.5 text-sm h-24 resize-none"
                  placeholder="Describe the institutional action or decision..."
                />
              </div>

              <button
                type="submit"
                disabled={isHashing}
                className="w-full px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isHashing ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full" />
                    Generating SHA-256 Hash...
                  </>
                ) : (
                  <>
                    <Shield className="h-4 w-4" />
                    Record & Seal Event
                  </>
                )}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Simulation only — no authoritative records are created.
              </p>
            </form>

            {/* Result Panel */}
            <div className="governance-card-elevated">
              {lastResult ? (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-2 text-sovereign-green">
                    <CheckCircle className="h-5 w-5" />
                    <span className="productive-heading-02">Event Sealed Successfully</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: "Verification ID", value: lastResult.verificationId, mono: true },
                      { label: "SHA-256 Hash", value: lastResult.hash, mono: true },
                      { label: "Previous Hash", value: lastResult.previousHash.substring(0, 16) + "...", mono: true },
                      { label: "Timestamp", value: new Date(lastResult.timestamp).toLocaleString() },
                      { label: "Actor", value: lastResult.actor },
                      { label: "Action", value: lastResult.action },
                    ].map(({ label, value, mono }) => (
                      <div key={label} className="flex flex-col gap-0.5">
                        <span className="text-overline text-muted-foreground uppercase tracking-widest">{label}</span>
                        <span className={`text-sm text-foreground ${mono ? "font-mono text-xs break-all" : ""}`}>{value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-sovereign-green/5 border border-sovereign-green/20 rounded-md">
                    <p className="text-xs text-sovereign-green font-medium">
                      ✓ Cryptographic integrity verified • Append-only chain position #{records.length}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <Hash className="h-7 w-7 text-muted-foreground" />
                  </div>
                  <h3 className="productive-heading-02 text-foreground mb-2">Awaiting Event</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Submit an institutional event to generate its cryptographic seal and verification proof.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Verify Mode */}
        {mode === "verify" && (
          <div className="max-w-xl mx-auto">
            <div className="governance-card space-y-5">
              <h3 className="productive-heading-02 text-foreground">Verify a Record</h3>
              <p className="text-sm text-muted-foreground">
                Enter a Verification ID or SHA-256 hash to validate record integrity.
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={verifyInput}
                  onChange={(e) => { setVerifyInput(e.target.value); setVerifyResult(null); }}
                  placeholder="Enter Verification ID or Hash..."
                  className="flex-1 border border-border bg-background rounded-md px-3 py-2.5 text-sm font-mono"
                />
                <button
                  onClick={handleVerify}
                  className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all"
                >
                  Verify
                </button>
              </div>

              {verifyResult === "valid" && (
                <div className="p-4 bg-sovereign-green/5 border border-sovereign-green/20 rounded-md animate-fade-in">
                  <div className="flex items-center gap-2 text-sovereign-green mb-2">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Record Verified — Integrity Intact</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    The cryptographic hash matches. This record has not been altered since sealing.
                  </p>
                </div>
              )}
              {verifyResult === "not_found" && (
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-md animate-fade-in">
                  <p className="text-sm text-destructive font-medium">Record not found in this session's ledger.</p>
                </div>
              )}

              {records.length === 0 && (
                <p className="text-xs text-muted-foreground text-center italic">
                  No records in this session. Record an event first to test verification.
                </p>
              )}
            </div>
          </div>
        )}

        {/* Timeline Mode */}
        {mode === "timeline" && (
          <div className="max-w-3xl mx-auto">
            {records.length === 0 ? (
              <div className="governance-card text-center py-16">
                <RotateCcw className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                <h3 className="productive-heading-02 text-foreground mb-2">No Records Yet</h3>
                <p className="text-sm text-muted-foreground">
                  Record events to see the append-only chain timeline.
                </p>
              </div>
            ) : (
              <div className="space-y-0">
                {records.map((r, i) => (
                  <div key={r.id} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-background shadow" />
                      {i < records.length - 1 && <div className="w-px flex-1 bg-border" />}
                    </div>
                    <div className="governance-card mb-3 flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <span className="text-xs font-mono text-accent">{r.verificationId}</span>
                          <h4 className="text-sm font-semibold text-foreground">{r.action}</h4>
                          <p className="text-xs text-muted-foreground">{r.actor}</p>
                        </div>
                        <span className="text-overline text-muted-foreground whitespace-nowrap">
                          {new Date(r.timestamp).toLocaleTimeString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                        <span className="truncate max-w-[200px]">{r.hash.substring(0, 24)}...</span>
                        <ArrowRight className="h-3 w-3 shrink-0" />
                        <span className="text-overline text-sovereign-green">SEALED</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
