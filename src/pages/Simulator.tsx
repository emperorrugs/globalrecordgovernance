import { PageHeader, Section } from "@/components/PageComponents";
import { AlertTriangle, Play, CheckCircle, XCircle, Clock, ChevronDown, Code } from "lucide-react";
import { useState } from "react";
import { useViewMode } from "@/contexts/ViewModeContext";

const EVENT_TYPES = [
  "Government Decision",
  "Procurement Action",
  "Regulatory Filing",
  "Omission Event",
  "Judicial Ruling",
  "Audit Report",
];

const DEMO_RESULTS: Record<string, {
  decision: "approved" | "denied" | "omission";
  reason: string;
  techReason: string;
  evidence: string;
  json: object;
}> = {
  "Government Decision": {
    decision: "approved",
    reason: "The action was taken within mandated authority and within the required timeframe. Record sealed.",
    techReason: "Action validated against GOS Rule 4.2. Authority scope confirmed. Record hash-sealed with SHA-256 integrity proof.",
    evidence: "Record exists — SHA-256 integrity verified",
    json: { record_id: "GRGF-SIM-0042", status: "APPROVED", hash: "a7f3c2...f6a8", sealed_at: "2024-06-15T14:30:00Z", authority: "Ministry of Finance", rule: "GOS-4.2" },
  },
  "Procurement Action": {
    decision: "approved",
    reason: "Procurement request complied with governance requirements. Record created and sealed.",
    techReason: "Procurement validated against classification taxonomy. Dual-authority sign-off confirmed. Archive entry created.",
    evidence: "Record exists — SHA-256 integrity verified",
    json: { record_id: "GRGF-SIM-0043", status: "APPROVED", hash: "b8e4d3...a3b5", sealed_at: "2024-06-15T14:32:00Z", category: "PROCUREMENT", compliance: true },
  },
  "Regulatory Filing": {
    decision: "denied",
    reason: "The filing did not meet mandatory requirements. Non-compliance documented and sealed.",
    techReason: "Filing rejected per Section 7.3 — missing mandatory disclosure fields. Non-compliance record hash-sealed.",
    evidence: "Record exists — non-compliance documented",
    json: { record_id: "GRGF-SIM-0044", status: "DENIED", hash: "c9f5e4...b4c6", sealed_at: "2024-06-15T14:35:00Z", violation: "Section 7.3", missing_fields: ["disclosure_statement", "authority_signature"] },
  },
  "Omission Event": {
    decision: "omission",
    reason: "A required action was not taken within the mandated timeframe. The absence itself has been recorded as an event.",
    techReason: "GOS Rule 6.1 deadline monitoring triggered. No action record filed by deadline. Omission event created and hash-sealed for audit trail.",
    evidence: "No verifiable action record exists — omission recorded",
    json: { record_id: "GRGF-SIM-0045", status: "OMISSION", hash: "d0a6f5...c5d7", sealed_at: "2024-06-15T14:40:00Z", obligation: "Annual safety inspection", deadline: "2024-03-31", action_taken: false },
  },
  "Judicial Ruling": {
    decision: "approved",
    reason: "Judicial ruling recorded as an institutional action. Record preserved and sealed.",
    techReason: "Judicial action classified under institutional record taxonomy. Version lineage initiated. SHA-256 sealed.",
    evidence: "Record exists — SHA-256 integrity verified",
    json: { record_id: "GRGF-SIM-0046", status: "APPROVED", hash: "e1b7g6...d6e8", sealed_at: "2024-06-15T14:45:00Z", court: "Federal Court", case_ref: "FC-2024-1182" },
  },
  "Audit Report": {
    decision: "approved",
    reason: "Audit report submitted within governance requirements. Record sealed.",
    techReason: "Audit record validated. Compliance with GOS Audit Protocol confirmed. Archive entry hash-sealed.",
    evidence: "Record exists — SHA-256 integrity verified",
    json: { record_id: "GRGF-SIM-0047", status: "APPROVED", hash: "f2c8h7...e7f9", sealed_at: "2024-06-15T14:50:00Z", auditor: "OAG-National", scope: "FY2023-Q4" },
  },
};

const decisionConfig = {
  approved: { icon: CheckCircle, label: "APPROVED", color: "text-accent" },
  denied: { icon: XCircle, label: "DENIED", color: "text-destructive" },
  omission: { icon: Clock, label: "OMISSION RECORDED", color: "text-accent-foreground" },
};

const Simulator = () => {
  const { isPlain } = useViewMode();
  const [eventType, setEventType] = useState(EVENT_TYPES[0]);
  const [date, setDate] = useState("2024-06-15");
  const [authority, setAuthority] = useState("Ministry of Finance");
  const [context, setContext] = useState("");
  const [result, setResult] = useState<typeof DEMO_RESULTS[string] | null>(null);
  const [showJson, setShowJson] = useState(false);
  const [running, setRunning] = useState(false);

  const handleRun = () => {
    setRunning(true);
    setResult(null);
    setShowJson(false);
    setTimeout(() => {
      setResult(DEMO_RESULTS[eventType]);
      setRunning(false);
    }, 1200);
  };

  const res = result;
  const config = res ? decisionConfig[res.decision] : null;
  const Icon = config?.icon;

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Live Simulator"
        subtitle={isPlain
          ? "See how GRGF processes a governance event — try it yourself with sample data."
          : "Demonstration-only governance workflow visualisation. No real data is processed or recorded."
        }
      >
        <div className="mt-4 flex items-center gap-2 text-xs font-mono bg-destructive/10 text-destructive px-3 py-2 rounded-sm w-fit border border-destructive/20">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
          <span>DEMO MODE — No live recording. No real data. For illustration only.</span>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Panel — Input */}
          <div className="governance-card">
            <h3 className="font-serif text-base font-semibold mb-4">Input</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Event Type</label>
                <div className="relative">
                  <select
                    value={eventType}
                    onChange={(e) => { setEventType(e.target.value); setResult(null); }}
                    className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm appearance-none pr-8"
                  >
                    {EVENT_TYPES.map((t) => <option key={t}>{t}</option>)}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Date & Time</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Claimed Authority</label>
                <input
                  type="text"
                  value={authority}
                  onChange={(e) => setAuthority(e.target.value)}
                  placeholder="e.g. Ministry of Finance"
                  maxLength={100}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">Context</label>
                <textarea
                  value={context}
                  onChange={(e) => setContext(e.target.value)}
                  placeholder="Describe the institutional action, decision, or omission…"
                  maxLength={500}
                  className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm h-20 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Center — Action */}
          <div className="flex items-center justify-center lg:flex-col">
            <button
              onClick={handleRun}
              disabled={running}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              <Play className="h-4 w-4" />
              {running ? "Running…" : "Run Governance Check"}
            </button>
          </div>

          {/* Right Panel — Output */}
          <div className="governance-card">
            <h3 className="font-serif text-base font-semibold mb-4">Output</h3>
            {!res ? (
              <div className="flex items-center justify-center h-48 text-muted-foreground text-sm">
                {running ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                    Processing governance check…
                  </div>
                ) : (
                  "Run a governance check to see results"
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {/* Decision */}
                <div className="flex items-center gap-3">
                  {Icon && <Icon className={`h-6 w-6 ${config.color}`} />}
                  <span className={`font-serif text-lg font-semibold ${config.color}`}>
                    {config.label}
                  </span>
                </div>

                {/* Reason */}
                <div>
                  <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">Reason</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {isPlain ? res.reason : res.techReason}
                  </p>
                </div>

                {/* Evidence Status */}
                <div className="border-t border-border pt-3">
                  <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">Evidence Status</p>
                  <p className={`text-sm font-semibold ${res.decision === "omission" ? "text-accent-foreground" : res.decision === "denied" ? "text-destructive" : "text-accent"}`}>
                    {res.decision === "omission"
                      ? "❌ No verifiable action record exists — omission recorded"
                      : res.decision === "denied"
                        ? "❌ " + res.evidence
                        : "✔ " + res.evidence}
                  </p>
                </div>

                {/* JSON toggle */}
                <button
                  onClick={() => setShowJson(!showJson)}
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Code className="h-3.5 w-3.5" />
                  {showJson ? "Hide" : "View"} API Response (JSON)
                </button>
                {showJson && (
                  <pre className="bg-background border border-border rounded-sm p-4 text-xs font-mono text-muted-foreground overflow-x-auto">
                    {JSON.stringify(res.json, null, 2)}
                  </pre>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Disclaimer.</span> This simulator is
            provided for demonstration and educational purposes only. No data entered is
            recorded, transmitted, or stored. No governance action visualised here constitutes
            an authoritative GRGF record.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Simulator;
