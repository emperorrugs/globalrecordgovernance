import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { AlertTriangle, Layers, ArrowRight } from "lucide-react";

const MATURITY_LEVELS = [
  { value: "early", label: "Early-Stage Digitization", desc: "Paper-based processes predominate. Limited digital identity or payment infrastructure." },
  { value: "mid", label: "Mid-Level Transformation", desc: "Core DPI components partially deployed. Some digital services operational." },
  { value: "advanced", label: "Advanced Digital Government", desc: "Comprehensive DPI stack. Digital-first service delivery across multiple sectors." },
] as const;

type MaturityLevel = typeof MATURITY_LEVELS[number]["value"];

const maturityData: Record<MaturityLevel, { effort: string; prerequisites: string[]; complexity: string; startPhase: string; timeline: string }> = {
  early: {
    effort: "Significant — foundational infrastructure required",
    prerequisites: [
      "Establish digital identity framework (Layer 1 DPI)",
      "Develop basic data governance legislation",
      "Build minimum cybersecurity capacity",
      "Create inter-agency coordination mechanism",
      "Deploy sovereign cloud or hosting infrastructure",
    ],
    complexity: "High — sequential dependencies require phased foundation-building",
    startPhase: "Pre-Phase: Capacity Building → Phase 1 in 12–18 months",
    timeline: "36–48 months to Phase 3",
  },
  mid: {
    effort: "Moderate — integration with existing infrastructure",
    prerequisites: [
      "Assess existing DPI stack interoperability",
      "Align data governance policies with GRGF requirements",
      "Conduct cybersecurity gap analysis",
      "Establish governance integrity working group",
    ],
    complexity: "Medium — parallel workstreams with manageable dependencies",
    startPhase: "Phase 1: Readiness Assessment → immediate start",
    timeline: "18–24 months to Phase 3",
  },
  advanced: {
    effort: "Streamlined — leveraging existing digital maturity",
    prerequisites: [
      "Map existing governance audit systems for integration",
      "Evaluate federation protocol compatibility",
      "Assess cryptographic infrastructure readiness",
    ],
    complexity: "Low — most prerequisites already satisfied",
    startPhase: "Phase 2: Integration Nodes → accelerated pathway",
    timeline: "12–18 months to Phase 3",
  },
};

const Maturity = () => {
  const [level, setLevel] = useState<MaturityLevel>("mid");
  const data = useMemo(() => maturityData[level], [level]);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Digital Maturity Comparator — GRGF"
        description="Assess GRGF adaptation requirements based on current digital governance maturity level. Understand prerequisites, complexity, and recommended implementation phase."
      />
      <PageHeader
        title="Digital Maturity Comparator"
        subtitle="Evaluate the adaptation effort required for GRGF deployment based on your current digital governance maturity level."
      />

      <Section title="Select Maturity Level" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
            {MATURITY_LEVELS.map((m) => (
              <button key={m.value} onClick={() => setLevel(m.value)}
                className={`governance-card-elevated text-left transition-all ${level === m.value ? "border-accent shadow-md" : "opacity-70 hover:opacity-100"}`}>
                <Layers className={`h-5 w-5 mb-2 ${level === m.value ? "text-accent" : "text-muted-foreground"}`} />
                <h4 className="font-serif text-base font-semibold mb-1">{m.label}</h4>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </button>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Adaptation Assessment" className="border-t border-border">
        <FadeIn>
          <div className="max-w-3xl space-y-6">
            <div className="governance-card-elevated">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Adaptation Effort</p>
              <p className="font-serif text-lg font-semibold">{data.effort}</p>
            </div>
            <div className="governance-card-elevated">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Required Prerequisites</p>
              <ul className="space-y-2">
                {data.prerequisites.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="governance-card text-center">
                <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Complexity</p>
                <p className="text-sm font-semibold">{data.complexity}</p>
              </div>
              <div className="governance-card text-center">
                <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Starting Phase</p>
                <p className="text-sm font-semibold">{data.startPhase}</p>
              </div>
              <div className="governance-card text-center">
                <p className="text-xs font-mono text-muted-foreground uppercase mb-1">Timeline to Phase 3</p>
                <p className="text-sm font-semibold text-accent">{data.timeline}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Planning Disclaimer.</span>{" "}
            Maturity assessment is indicative. Formal readiness evaluation requires institutional assessment through the GRGF Recognition Framework.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Maturity;
