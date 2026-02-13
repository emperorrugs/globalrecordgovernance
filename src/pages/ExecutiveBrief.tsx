import { useState, useRef } from "react";
import { SEOHead } from "@/components/SEOHead";
import { FileText, Download, Globe, BarChart3, Shield, AlertTriangle, Cpu, CheckCircle } from "lucide-react";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-16 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const scenarios = [
  { id: "procurement", label: "Procurement Integrity", desc: "Reduce procurement leakage and improve authorization trails" },
  { id: "social-benefits", label: "Social Benefit Disbursement", desc: "Verify benefit distribution and detect omission gaps" },
  { id: "cross-border", label: "Cross-Border Verification", desc: "Enable federated credential verification across jurisdictions" },
  { id: "regulatory", label: "Regulatory Compliance", desc: "Automate compliance evidence generation and audit trails" },
];

const deploymentLevels = [
  { id: "pilot", label: "Pilot (1–2 Ministries)", timeline: "6–9 months", budget: "$500K–$2M" },
  { id: "ministry", label: "Ministry-Wide", timeline: "12–18 months", budget: "$2M–$8M" },
  { id: "national", label: "National Deployment", timeline: "24–36 months", budget: "$10M–$50M" },
];

function generateBriefContent(country: string, scenario: string, level: string) {
  const s = scenarios.find(sc => sc.id === scenario);
  const d = deploymentLevels.find(dl => dl.id === level);
  if (!s || !d) return null;

  const efficiencyRange = level === "pilot" ? "5–10%" : level === "ministry" ? "10–18%" : "15–25%";
  const fraudReduction = level === "pilot" ? "Low–Medium" : level === "ministry" ? "Medium" : "Medium–High";
  const roiYears = level === "pilot" ? "1–2 years" : level === "ministry" ? "2–3 years" : "3–5 years";

  return {
    country,
    scenario: s,
    deployment: d,
    efficiencyRange,
    fraudReduction,
    roiYears,
  };
}

const ExecutiveBrief = () => {
  const [country, setCountry] = useState("");
  const [scenario, setScenario] = useState("");
  const [level, setLevel] = useState("");
  const [brief, setBrief] = useState<ReturnType<typeof generateBriefContent>>(null);
  const briefRef = useRef<HTMLDivElement>(null);

  const canGenerate = country.trim().length > 0 && scenario && level;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setBrief(generateBriefContent(country.trim(), scenario, level));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <SEOHead
        title="Executive Brief Generator — Global Record Governance Framework (GRGF)"
        description="Generate a tailored executive brief for national DPI deployment evaluation. Includes financial projections, risk overview, deployment roadmap, and compliance summary."
      />

      {/* Header */}
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Decision Support Tool</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            Executive Brief Generator
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            Generate a tailored institutional brief for the Global Record Governance Framework (GRGF) deployment evaluation. All projections are modeled estimates with transparent assumptions.
          </p>
        </div>
      </header>

      {/* Input Form */}
      <Sec className="border-b border-border">
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Configuration</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Country */}
          <div>
            <label className="block text-overline font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Country / Jurisdiction
            </label>
            <input
              type="text"
              value={country}
              onChange={e => setCountry(e.target.value)}
              placeholder="e.g., Canada"
              maxLength={100}
              className="w-full px-4 py-3 bg-card border border-border text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Scenario */}
          <div>
            <label className="block text-overline font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Deployment Scenario
            </label>
            <div className="space-y-2">
              {scenarios.map(s => (
                <button
                  key={s.id}
                  onClick={() => setScenario(s.id)}
                  className={`w-full text-left px-4 py-3 border text-sm transition-all ${
                    scenario === s.id
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  <span className="font-semibold">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Level */}
          <div>
            <label className="block text-overline font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Deployment Scale
            </label>
            <div className="space-y-2">
              {deploymentLevels.map(d => (
                <button
                  key={d.id}
                  onClick={() => setLevel(d.id)}
                  className={`w-full text-left px-4 py-3 border text-sm transition-all ${
                    level === d.id
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-accent/40"
                  }`}
                >
                  <span className="font-semibold">{d.label}</span>
                  <span className="block text-xs text-muted-foreground mt-0.5">{d.timeline} · {d.budget}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={!canGenerate}
          className={`mt-8 inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold tracking-wide transition-all ${
            canGenerate
              ? "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/20"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          <FileText className="h-4 w-4" />
          Generate Executive Brief
        </button>
      </Sec>

      {/* Generated Brief */}
      {brief && (
        <div ref={briefRef}>
          <Sec className="border-b border-border bg-card/30 print:bg-white">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-overline font-mono text-accent uppercase tracking-widest mb-1">Executive Brief</p>
                <h2 className="institutional-heading text-heading-1 font-semibold">
                  GRGF Deployment Assessment — {brief.country}
                </h2>
              </div>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors print:hidden"
              >
                <Download className="h-4 w-4" />
                Export PDF
              </button>
            </div>

            {/* Brief Content */}
            <div className="space-y-8">
              {/* Overview */}
              <div className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">1. Overview</h3>
                </div>
                <p className="text-body text-muted-foreground leading-relaxed mb-3">
                  This brief provides a preliminary assessment of the Global Record Governance Framework (GRGF) deployment for <strong className="text-foreground">{brief.country}</strong>, focused on <strong className="text-foreground">{brief.scenario.label}</strong> at <strong className="text-foreground">{brief.deployment.label}</strong> scale.
                </p>
                <p className="text-body text-muted-foreground leading-relaxed">
                  The Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public Infrastructure trust layer for recording, preserving, and verifying institutional actions, decisions, and omissions over time — without interpretation, enforcement, or decision authority.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="border border-border p-3">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase">Timeline</p>
                    <p className="text-lg font-serif font-semibold text-accent">{brief.deployment.timeline}</p>
                  </div>
                  <div className="border border-border p-3">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase">Budget Range</p>
                    <p className="text-lg font-serif font-semibold text-accent">{brief.deployment.budget}</p>
                  </div>
                  <div className="border border-border p-3">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase">Scenario</p>
                    <p className="text-lg font-serif font-semibold text-accent">{brief.scenario.label}</p>
                  </div>
                </div>
              </div>

              {/* Financial Summary */}
              <div className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">2. Financial Projection Summary</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-3 mb-4">
                  <div className="border border-border p-4">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-1">Efficiency Improvement</p>
                    <p className="text-2xl font-serif font-semibold text-accent">{brief.efficiencyRange}</p>
                    <p className="text-xs text-muted-foreground">Administrative overhead reduction (modeled)</p>
                  </div>
                  <div className="border border-border p-4">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-1">Fraud Reduction</p>
                    <p className="text-2xl font-serif font-semibold text-accent">{brief.fraudReduction}</p>
                    <p className="text-xs text-muted-foreground">Procurement irregularity exposure</p>
                  </div>
                  <div className="border border-border p-4">
                    <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-1">ROI Horizon</p>
                    <p className="text-2xl font-serif font-semibold text-accent">{brief.roiYears}</p>
                    <p className="text-xs text-muted-foreground">Projected break-even period</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground/60 italic">
                  * All projections are modeled estimates based on published governance efficiency benchmarks. Actual results depend on institutional context, implementation quality, and adoption scope.
                </p>
              </div>

              {/* Risk Overview */}
              <div className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">3. Risk Overview</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { risk: "Political Resistance", mitigation: "Non-invasive deployment model. Reversible at every phase. No enforcement capability.", severity: "Medium" },
                    { risk: "Institutional Inertia", mitigation: "Pilot model with measurable KPIs. Minimal disruption to existing workflows.", severity: "Medium" },
                    { risk: "Technical Integration", mitigation: "API-first architecture. Connector-based integration. No legacy system replacement required.", severity: "Low" },
                    { risk: "Data Sovereignty", mitigation: "Sovereign hosting. No cross-border data transfer. Full jurisdictional control maintained.", severity: "Low" },
                  ].map(({ risk, mitigation, severity }) => (
                    <div key={risk} className="flex items-start gap-3 p-3 border border-border">
                      <Shield className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-semibold">{risk}</span>
                          <span className={`text-overline font-mono px-2 py-0.5 ${severity === "Low" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                            {severity}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{mitigation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployment Roadmap */}
              <div className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-4">
                  <Cpu className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">4. Deployment Roadmap</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { phase: "Phase 1 — Assessment", duration: level === "pilot" ? "2 months" : level === "ministry" ? "3 months" : "4 months", tasks: ["Institutional readiness evaluation", "Stakeholder mapping", "Integration scoping", "Gap analysis"] },
                    { phase: "Phase 2 — Integration", duration: level === "pilot" ? "3 months" : level === "ministry" ? "6 months" : "12 months", tasks: ["Connector deployment", "Policy rule encoding", "Deterministic enforcement validation", "Security audit"] },
                    { phase: "Phase 3 — Scaling", duration: level === "pilot" ? "3 months" : level === "ministry" ? "9 months" : "18 months", tasks: ["Cross-department rollout", "Training programs", "Compliance reporting automation", "Performance monitoring"] },
                  ].map(({ phase, duration, tasks }) => (
                    <div key={phase} className="p-4 border border-border">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-serif text-sm font-semibold">{phase}</h4>
                        <span className="text-overline font-mono text-accent">{duration}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {tasks.map(task => (
                          <div key={task} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle className="h-3 w-3 text-accent shrink-0" />
                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance Summary */}
              <div className="governance-card-elevated">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="h-5 w-5 text-accent" />
                  <h3 className="font-serif text-heading-2 font-semibold">5. Compliance Alignment Summary</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { standard: "World Bank ID4D / GTMI", status: "Aligned", note: "Governance integrity layer complements identity infrastructure" },
                    { standard: "OECD Digital Government (Policy Paper 68)", status: "Aligned", note: "Trust, transparency, and data governance pillars addressed" },
                    { standard: "ISO 37000 / ISO 31000", status: "Aligned", note: "Governance and risk management framework compatibility" },
                    { standard: "UN SDGs (16, 16.5, 16.6)", status: "Aligned", note: "Institutional accountability, anti-corruption, transparency" },
                    { standard: "EU AI Act", status: "Partial", note: "GRGF is non-AI; provides governance layer for AI oversight" },
                    { standard: "ISO/IEC 42001", status: "Complementary", note: "AI management system standard — GRGF provides audit trail infrastructure" },
                  ].map(({ standard, status, note }) => (
                    <div key={standard} className="flex items-start gap-3 p-3 border border-border">
                      <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${status === "Aligned" ? "text-accent" : "text-muted-foreground"}`} />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-semibold">{standard}</span>
                          <span className={`text-overline font-mono px-2 py-0.5 ${status === "Aligned" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>
                            {status}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attribution */}
              <div className="text-center pt-8 border-t border-border">
                <p className="text-overline font-mono text-muted-foreground/40 uppercase tracking-widest mb-1">
                  Global Record Governance Framework (GRGF)
                </p>
                <p className="text-xs text-muted-foreground/30">
                  Global Record Governance Framework — Invented and Owned by Tarek Wahid
                </p>
                <p className="text-xs text-muted-foreground/30 mt-1">
                  Canadian Patent No. CA 3,300,102 · Framework v1.0 · Pre-Pilot Stage
                </p>
                <p className="text-xs text-muted-foreground/20 mt-2 italic">
                  This brief is auto-generated for evaluation purposes. All projections are modeled estimates.
                </p>
              </div>
            </div>
          </Sec>
        </div>
      )}
    </div>
  );
};

export default ExecutiveBrief;
