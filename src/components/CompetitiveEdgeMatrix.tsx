import { FadeIn } from "./FadeIn";
import { CheckCircle, X } from "lucide-react";

const features = [
  { feature: "Omission-Aware Recording", grgf: true, traditional: false, others: false },
  { feature: "Deterministic Policy Enforcement", grgf: true, traditional: false, others: false },
  { feature: "Append-Only Cryptographic Ledger", grgf: true, traditional: false, others: "Partial" },
  { feature: "Sovereign Non-Invasive Architecture", grgf: true, traditional: false, others: false },
  { feature: "Federation Protocol (Cross-Border)", grgf: true, traditional: false, others: false },
  { feature: "Anti-Capture Governance Clauses", grgf: true, traditional: false, others: false },
  { feature: "Independent Audit Reconstruction", grgf: true, traditional: "Manual", others: "Partial" },
  { feature: "Post-Quantum Readiness Roadmap", grgf: true, traditional: false, others: false },
  { feature: "3-Tier Recognition Framework", grgf: true, traditional: false, others: false },
  { feature: "OECD DPI Standards Alignment", grgf: true, traditional: false, others: "Partial" },
];

function StatusCell({ value }: { value: boolean | string }) {
  if (value === true) return <CheckCircle className="h-4 w-4 text-accent mx-auto" />;
  if (value === false) return <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />;
  return <span className="text-overline text-muted-foreground/50 font-mono">{value}</span>;
}

export function CompetitiveEdgeMatrix() {
  return (
    <FadeIn>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-accent/30">
              <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">Capability</th>
              <th className="text-center py-4 px-4 font-serif font-semibold text-accent">GRGF</th>
              <th className="text-center py-4 px-4 font-serif font-semibold text-muted-foreground/60">Traditional GovTech</th>
              <th className="text-center py-4 px-4 font-serif font-semibold text-muted-foreground/60">Other DPI Layers</th>
            </tr>
          </thead>
          <tbody>
            {features.map(({ feature, grgf, traditional, others }, i) => (
              <tr key={feature} className="border-b border-border/40 hover:bg-card transition-colors">
                <td className="py-3 px-4 font-medium text-foreground text-caption">{feature}</td>
                <td className="py-3 px-4 text-center"><StatusCell value={grgf} /></td>
                <td className="py-3 px-4 text-center"><StatusCell value={traditional} /></td>
                <td className="py-3 px-4 text-center"><StatusCell value={others} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-overline text-muted-foreground/40 mt-4 text-center">
        Based on publicly available capabilities. Assessment current as of Q1 2026.
      </p>
    </FadeIn>
  );
}
