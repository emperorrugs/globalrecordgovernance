import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { Label } from "@/components/ui/label";
import { AlertTriangle, ArrowRight, Clock, Users, DollarSign } from "lucide-react";

const SECTORS = ["Health", "Justice", "Finance", "Education", "Social Protection", "Procurement"] as const;
const SCALES = ["Pilot (1 agency)", "Ministry-level (3–5 agencies)", "National (10+ agencies)"] as const;
const TIMELINES = ["12 months", "18 months", "24 months", "36 months"] as const;

interface Scenario {
  sector: string;
  scale: string;
  timeline: string;
}

const phaseData = (s: Scenario) => {
  const isNational = s.scale.includes("National");
  const isPilot = s.scale.includes("Pilot");
  return [
    {
      phase: "Phase 1 — Foundation",
      duration: isPilot ? "2–3 months" : isNational ? "4–6 months" : "3–4 months",
      tasks: [
        "Institutional readiness assessment",
        `Stakeholder mapping for ${s.sector} sector`,
        "Policy rule scoping and integration analysis",
        "Governance working group formation",
      ],
    },
    {
      phase: "Phase 2 — Integration",
      duration: isPilot ? "3–4 months" : isNational ? "6–9 months" : "4–6 months",
      tasks: [
        `Deploy connector to ${isPilot ? "1" : isNational ? "5–10" : "2–3"} source systems`,
        "Encode initial governance policy rules",
        "Validate deterministic enforcement logic",
        "Security audit and penetration testing",
      ],
    },
    {
      phase: "Phase 3 — Operational",
      duration: isPilot ? "3–4 months" : isNational ? "6–12 months" : "4–6 months",
      tasks: [
        "Controlled operational deployment",
        "Audit trail reconstruction exercises",
        "Staff training and change management",
        isNational ? "Cross-agency coordination rollout" : "Performance monitoring and optimization",
      ],
    },
  ];
};

const budgetBand = (scale: string): string => {
  if (scale.includes("Pilot")) return "$500K – $2M";
  if (scale.includes("National")) return "$15M – $50M";
  return "$3M – $12M";
};

const stakeholders = (sector: string): string[] => {
  const base = ["Chief Information Officer", "Governance Board", "Legal & Compliance", "IT Security"];
  const map: Record<string, string[]> = {
    Health: ["Ministry of Health", "Health Information Authority", "Patient Data Custodian"],
    Justice: ["Ministry of Justice", "Judiciary Administration", "Public Prosecutor's Office"],
    Finance: ["Treasury Board", "Public Accounts Committee", "Central Audit Authority"],
    Education: ["Ministry of Education", "National Qualifications Authority", "Student Records Office"],
    "Social Protection": ["Social Services Ministry", "Benefits Administration", "Citizen Registry"],
    Procurement: ["Public Procurement Authority", "Contract Oversight Board", "Vendor Registry"],
  };
  return [...base, ...(map[sector] || [])];
};

const DeploymentPlanner = () => {
  const [scenario, setScenario] = useState<Scenario>({
    sector: "Finance",
    scale: SCALES[0],
    timeline: TIMELINES[1],
  });

  const phases = useMemo(() => phaseData(scenario), [scenario]);
  const budget = useMemo(() => budgetBand(scenario.scale), [scenario.scale]);
  const stkh = useMemo(() => stakeholders(scenario.sector), [scenario.sector]);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Deployment Scenario Builder — GRGF"
        description="Interactive deployment planning tool. Select sector, scale, and timeline to generate a phased roadmap with budget estimates and stakeholder mapping."
      />
      <PageHeader
        title="Deployment Scenario Builder"
        subtitle="Configure deployment parameters to generate a structured implementation roadmap with stakeholder mapping and budget estimates."
      />

      <Section title="Configuration" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
            <div>
              <Label className="text-xs text-muted-foreground">Sector</Label>
              <select value={scenario.sector} onChange={(e) => setScenario((p) => ({ ...p, sector: e.target.value }))}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono">
                {SECTORS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Deployment Scale</Label>
              <select value={scenario.scale} onChange={(e) => setScenario((p) => ({ ...p, scale: e.target.value }))}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono">
                {SCALES.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Timeline Preference</Label>
              <select value={scenario.timeline} onChange={(e) => setScenario((p) => ({ ...p, timeline: e.target.value }))}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono">
                {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section title="Implementation Roadmap" className="border-t border-border">
        <div className="max-w-3xl space-y-0">
          {phases.map((p, i) => (
            <FadeIn key={p.phase} delay={i * 100}>
              <div>
                <div className="flex items-start gap-5 py-5">
                  <div className="shrink-0 w-11 h-11 bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="font-serif text-lg font-semibold">{p.phase}</h4>
                      <span className="text-xs font-mono px-2 py-0.5 bg-accent/15 text-accent flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {p.duration}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1.5">
                      {p.tasks.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-3 w-3 text-accent shrink-0" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {i < phases.length - 1 && <div className="ml-[1.375rem] w-px h-4 bg-border" />}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section title="Stakeholder Map & Budget" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <div className="governance-card-elevated">
              <Users className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-lg font-semibold mb-3">Required Stakeholders</h4>
              <ul className="space-y-1.5">
                {stkh.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="governance-card-elevated">
              <DollarSign className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-lg font-semibold mb-3">Budget Band Estimate</h4>
              <p className="text-3xl font-serif font-bold text-accent mb-2">{budget}</p>
              <p className="text-xs text-muted-foreground">
                Includes integration, training, security audit, and first-year operational costs.
                Excludes sovereign cloud infrastructure if not pre-existing.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Planning Disclaimer.</span>{" "}
            All timelines, budgets, and stakeholder mappings are indicative estimates for preliminary planning. Formal deployment scoping requires institutional readiness assessment.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default DeploymentPlanner;
