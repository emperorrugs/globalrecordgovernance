import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Shield, CheckCircle } from "lucide-react";

type Level = 1 | 2 | 3 | 4;
const LEVELS: { value: Level; label: string }[] = [
  { value: 1, label: "Initial / Ad-hoc" },
  { value: 2, label: "Developing" },
  { value: 3, label: "Established" },
  { value: 4, label: "Advanced" },
];

const DIMENSIONS = [
  { key: "legal", label: "Legal & Regulatory Readiness", desc: "Data protection laws, digital governance legislation, procurement regulation clarity." },
  { key: "dataGov", label: "Data Governance Maturity", desc: "Data classification standards, retention policies, cross-agency data sharing agreements." },
  { key: "cyber", label: "Cybersecurity Capacity", desc: "Encryption adoption, identity & access management, incident response capability." },
  { key: "interAgency", label: "Inter-Agency Coordination", desc: "Cross-ministry data exchange, shared standards adoption, coordinated procurement." },
  { key: "digital", label: "Digital Infrastructure", desc: "Cloud readiness, API adoption, existing DPI stack maturity (identity, payments)." },
  { key: "workforce", label: "Institutional Workforce Capacity", desc: "Technical staff availability, governance training programs, change management readiness." },
] as const;

type DimKey = typeof DIMENSIONS[number]["key"];

const riskColor = (score: number) => {
  if (score >= 3.5) return "bg-accent/20 text-accent";
  if (score >= 2.5) return "bg-primary/10 text-primary";
  if (score >= 1.5) return "bg-warning/20 text-warning";
  return "bg-destructive/15 text-destructive";
};

const riskLabel = (score: number) => {
  if (score >= 3.5) return "Low Risk";
  if (score >= 2.5) return "Moderate Risk";
  if (score >= 1.5) return "Elevated Risk";
  return "High Risk";
};

const mitigations: Record<string, string[]> = {
  "High Risk": [
    "Conduct foundational governance capacity assessment before deployment.",
    "Engage multilateral technical assistance for legal and regulatory gap analysis.",
    "Begin with single-agency proof-of-concept limited to non-sensitive records.",
    "Establish dedicated governance reform coordination unit.",
  ],
  "Elevated Risk": [
    "Prioritize data governance framework development in parallel with pilot.",
    "Deploy cybersecurity capacity building program alongside integration.",
    "Start with Phase 1–2 deployment limited to one ministry.",
    "Establish inter-agency working group for coordination alignment.",
  ],
  "Moderate Risk": [
    "Proceed with structured pilot deployment across 2–3 ministries.",
    "Conduct security audit and address identified gaps within Phase 2.",
    "Develop workforce training program aligned with deployment timeline.",
    "Engage Standards Committee for recognition pathway planning.",
  ],
  "Low Risk": [
    "Proceed with accelerated national deployment pathway.",
    "Target Phase 3–4 integration within 12–18 months.",
    "Apply for Level II recognition assessment.",
    "Initiate federation protocol evaluation for cross-border readiness.",
  ],
};

const RiskAssessment = () => {
  const [scores, setScores] = useState<Record<DimKey, Level>>({
    legal: 2, dataGov: 2, cyber: 2, interAgency: 2, digital: 2, workforce: 2,
  });

  const avg = useMemo(() => {
    const vals = Object.values(scores);
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }, [scores]);

  const category = riskLabel(avg);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="National Risk Assessment Tool — GRGF"
        description="Interactive governance deployment risk evaluation tool. Assess legal, cyber, data governance, and institutional readiness for DPI integration."
      />
      <PageHeader
        title="National Risk Assessment Tool"
        subtitle="Evaluate institutional readiness across six governance dimensions. Generates risk category, heatmap, and phased mitigation recommendations."
      />

      <Section title="Readiness Assessment" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl">
            {DIMENSIONS.map(({ key, label, desc }) => (
              <div key={key} className="governance-card-elevated">
                <Label className="font-serif text-base font-semibold">{label}</Label>
                <p className="text-xs text-muted-foreground mt-1 mb-3">{desc}</p>
                <select
                  value={scores[key]}
                  onChange={(e) => setScores((p) => ({ ...p, [key]: Number(e.target.value) as Level }))}
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono"
                >
                  {LEVELS.map((l) => (
                    <option key={l.value} value={l.value}>{l.value} — {l.label}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Risk Heatmap" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mb-6">
            {DIMENSIONS.map(({ key, label }) => (
              <div key={key} className={`governance-card flex items-center justify-between ${riskColor(scores[key])}`}>
                <span className="text-sm font-medium">{label}</span>
                <span className="font-mono text-sm font-bold">{scores[key]}/4</span>
              </div>
            ))}
          </div>
          <div className={`governance-card-elevated max-w-md text-center ${riskColor(avg)}`}>
            <p className="text-xs font-mono uppercase tracking-widest mb-1">Overall Deployment Risk</p>
            <p className="text-3xl font-serif font-bold">{category}</p>
            <p className="text-sm mt-1 font-mono">{avg.toFixed(1)} / 4.0</p>
          </div>
        </FadeIn>
      </Section>

      <Section title="Mitigation Recommendations" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-3xl">
            <h4 className="font-serif text-lg font-semibold mb-4">
              Recommended Actions — {category}
            </h4>
            <ul className="space-y-3">
              {(mitigations[category] || mitigations["Moderate Risk"]).map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section title="Suggested Deployment Phase" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-3xl">
            <div className="flex items-center gap-4">
              <Shield className="h-8 w-8 text-accent" />
              <div>
                <p className="font-serif text-lg font-semibold">
                  {avg >= 3.5 ? "Phase 3–4: National Scaling" :
                   avg >= 2.5 ? "Phase 2: Controlled Pilot" :
                   avg >= 1.5 ? "Phase 1: Readiness Assessment" :
                   "Pre-Phase: Capacity Building Required"}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Based on aggregate readiness score of {avg.toFixed(1)}/4.0 across six governance dimensions.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Assessment Disclaimer.</span>{" "}
            This is a self-assessment tool for preliminary planning. Formal deployment readiness requires independent institutional evaluation through the GRGF Recognition Framework.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default RiskAssessment;
