import { useState, useMemo } from "react";
import { SliderField } from "./InputField";

const dimensions = [
  { id: "dpi", label: "National DPI Maturity", desc: "Existing digital public infrastructure foundation." },
  { id: "digitalId", label: "Digital ID Coverage", desc: "Population coverage of verified digital identity." },
  { id: "procurement", label: "Procurement Digitization", desc: "Extent of digital procurement systems." },
  { id: "audit", label: "Audit Modernization", desc: "Digital audit trail infrastructure." },
  { id: "crossBorder", label: "Cross-border Compliance", desc: "Regulatory alignment with international frameworks." },
];

const tiers = [
  { min: 0, max: 30, name: "Observer", desc: "Participate as observer. Build foundational capacity before integration.", roadmap: ["Assess digital ID coverage", "Digitize core procurement workflows", "Establish audit trail standards"] },
  { min: 31, max: 55, name: "Tier 2 — Partial Integration", desc: "Selective integration on high-priority governance domains.", roadmap: ["Integrate 2-3 ministry workflows", "Deploy policy encoding engine", "Establish verification API"] },
  { min: 56, max: 80, name: "Tier 1 — Full Integration", desc: "Comprehensive national deployment with federation readiness.", roadmap: ["Cross-ministry deployment", "National evidence backbone", "Federation protocol activation"] },
  { min: 81, max: 100, name: "Federation Leader", desc: "Lead cross-border governance federation initiatives.", roadmap: ["Deploy federation node", "Cross-border verification", "Multilateral governance alignment"] },
];

export function Module5Federation() {
  const [scores, setScores] = useState<Record<string, number>>(
    Object.fromEntries(dimensions.map((d) => [d.id, 50]))
  );

  const avg = useMemo(() => {
    const vals = Object.values(scores);
    return Math.round(vals.reduce((a, b) => a + b, 0) / vals.length);
  }, [scores]);

  const tier = tiers.find((t) => avg >= t.min && avg <= t.max) || tiers[0];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Interoperable Governance Federation Readiness</h3>
        <p className="text-xs text-muted-foreground">Assess readiness for federation-level governance integration.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {dimensions.map((d) => (
          <div key={d.id} className="governance-card">
            <SliderField
              label={d.label}
              value={scores[d.id]}
              onChange={(v) => setScores((prev) => ({ ...prev, [d.id]: v }))}
              min={0} max={100} step={5} suffix=""
            />
            <p className="text-[10px] text-muted-foreground mt-2">{d.desc}</p>
          </div>
        ))}
      </div>

      <div className="governance-card border-l-2 border-l-accent">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Readiness Score</p>
            <p className="text-4xl font-serif font-semibold text-accent mt-1">{avg}<span className="text-lg text-muted-foreground">/100</span></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Federation Tier</p>
            <p className="text-base font-serif font-semibold text-foreground mt-1">{tier.name}</p>
          </div>
        </div>
        <div className="w-full bg-secondary rounded-sm h-3 overflow-hidden mb-3">
          <div className="h-full bg-accent transition-all duration-500 rounded-sm" style={{ width: `${avg}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mb-4">{tier.desc}</p>

        <h5 className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Recommended Roadmap</h5>
        <ul className="space-y-1">
          {tier.roadmap.map((step) => (
            <li key={step} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="text-accent mt-0.5 shrink-0">·</span>{step}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
