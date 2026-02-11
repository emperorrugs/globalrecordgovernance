import { useState, useMemo } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const criteria = [
  { id: "policy", label: "Policy enforcement is automated (not manual)", weight: 25, desc: "Rules are encoded and executed deterministically by the policy engine." },
  { id: "ledger", label: "Ledger is immutable (append-only)", weight: 25, desc: "Records cannot be modified, deleted, or reordered after sealing." },
  { id: "roles", label: "Role separation is enforced", weight: 20, desc: "Governance, operations, and verification are structurally separated." },
  { id: "crypto", label: "Cryptographic sealing is implemented", weight: 15, desc: "SHA-256/512 hash chaining provides tamper evidence." },
  { id: "verify", label: "Independent verification capability exists", weight: 15, desc: "Third parties can verify record integrity without trusting the operator." },
];

export function Module3Determinism() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const score = useMemo(() => {
    return criteria.reduce((sum, c) => sum + (checked[c.id] ? c.weight : 0), 0);
  }, [checked]);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const level = score >= 80 ? "Deterministic" : score >= 60 ? "Structured" : score >= 40 ? "Transitional" : "Fragmented";

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Deterministic Governance Enforcement Score</h3>
        <p className="text-xs text-muted-foreground">Assess structural determinism of governance enforcement mechanisms.</p>
      </div>

      <div className="space-y-3">
        {criteria.map((c) => (
          <div key={c.id} className="governance-card">
            <div className="flex items-start gap-3">
              <Checkbox
                id={c.id}
                checked={!!checked[c.id]}
                onCheckedChange={() => toggle(c.id)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <Label htmlFor={c.id} className="text-sm font-semibold cursor-pointer">{c.label}</Label>
                <p className="text-xs text-muted-foreground mt-1">{c.desc}</p>
                <p className="text-[10px] font-mono text-accent/60 mt-1">Weight: {c.weight} points</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Score */}
      <div className="governance-card border-l-2 border-l-accent">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Determinism Score</p>
            <p className="text-4xl font-serif font-semibold text-accent mt-1">{score}<span className="text-lg text-muted-foreground">/100</span></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Classification</p>
            <p className="text-lg font-serif font-semibold text-foreground mt-1">{level}</p>
          </div>
        </div>
        <div className="mt-4 w-full bg-secondary rounded-sm h-3 overflow-hidden">
          <div className="h-full bg-accent transition-all duration-500 rounded-sm" style={{ width: `${score}%` }} />
        </div>
        <p className="text-xs text-muted-foreground mt-3">Higher determinism reduces procedural ambiguity risk and strengthens institutional accountability.</p>
      </div>
    </div>
  );
}
