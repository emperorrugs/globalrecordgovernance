import { useState, useMemo } from "react";
import { SliderField } from "./InputField";

const categories = [
  { id: "policy", label: "Policy Encoding Capability", desc: "Extent to which institutional policies are encoded as machine-executable rules." },
  { id: "workflow", label: "Digital Workflow Penetration", desc: "Proportion of governance processes digitized with structured event capture." },
  { id: "audit", label: "Audit Traceability", desc: "Completeness and immutability of institutional audit trails." },
  { id: "roles", label: "Role Enforcement Discipline", desc: "Structural separation of governance, operational, and verification roles." },
  { id: "interop", label: "Inter-Ministry Data Interoperability", desc: "Standardized data exchange across institutional boundaries." },
  { id: "monitor", label: "Integrity Monitoring Infrastructure", desc: "Real-time detection of anomalies, omissions, and unauthorized modifications." },
];

const levels = [
  { min: 0, max: 20, name: "Level 1 — Fragmented", desc: "Ad-hoc governance with minimal structural controls." },
  { min: 21, max: 40, name: "Level 2 — Transitional", desc: "Partial digitization with inconsistent enforcement." },
  { min: 41, max: 60, name: "Level 3 — Structured", desc: "Documented processes with systematic controls." },
  { min: 61, max: 80, name: "Level 4 — Deterministic", desc: "Automated policy enforcement with cryptographic integrity." },
  { min: 81, max: 100, name: "Level 5 — Federated Integrity Layer", desc: "Cross-institutional deterministic governance with federation." },
];

export function Module4Maturity() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(categories.map((c) => [c.id, 50]))
  );

  const avg = useMemo(() => {
    const vals = Object.values(scores);
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }, [scores]);

  const level = levels.find((l) => avg >= l.min && avg <= l.max) || levels[0];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Institutional Governance Integrity Maturity Model</h3>
        <p className="text-xs text-muted-foreground">Assess governance maturity across six structural dimensions.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((c) => (
          <div key={c.id} className="governance-card">
            <SliderField
              label={c.label}
              value={scores[c.id]}
              onChange={(v) => setScores((prev) => ({ ...prev, [c.id]: v }))}
              min={0}
              max={100}
              step={5}
              suffix=""
            />
            <p className="text-[10px] text-muted-foreground mt-2">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* Result */}
      <div className="governance-card border-l-2 border-l-accent">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Maturity Score</p>
            <p className="text-4xl font-serif font-semibold text-accent mt-1">{avg}<span className="text-lg text-muted-foreground">/100</span></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Classification</p>
            <p className="text-base font-serif font-semibold text-foreground mt-1">{level.name}</p>
          </div>
        </div>
        <div className="w-full bg-secondary rounded-sm h-3 overflow-hidden mb-3">
          <div className="h-full bg-accent transition-all duration-500 rounded-sm" style={{ width: `${avg}%` }} />
        </div>
        <p className="text-xs text-muted-foreground">{level.desc}</p>
      </div>

      {/* Maturity ladder */}
      <div className="space-y-2">
        {levels.map((l) => (
          <div key={l.name} className={`flex items-center gap-3 px-4 py-2 rounded-sm text-xs ${avg >= l.min && avg <= l.max ? "bg-accent/10 border border-accent/30" : "border border-transparent"}`}>
            <span className={`w-2 h-2 rounded-full shrink-0 ${avg >= l.min && avg <= l.max ? "bg-accent" : "bg-muted-foreground/20"}`} />
            <span className="font-mono font-semibold">{l.name}</span>
            <span className="text-muted-foreground ml-auto">{l.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
