import { PageHeader, Section } from "@/components/PageComponents";
import { Flag, Rocket, Globe, CheckCircle, Clock, ArrowRight, Target, Shield, FileText, Users } from "lucide-react";

const phases = [
  {
    id: "I",
    title: "Publication & Validation",
    status: "Active",
    timeline: "Q1 2026 – Q3 2026",
    icon: Flag,
    objective: "Establish the framework's institutional credibility through public documentation, independent validation, and multilateral engagement.",
    milestones: [
      { label: "Publish institutional website with full documentation suite", status: "done" },
      { label: "Release Governance Charter and Anti-Capture Clauses (AC-01–05)", status: "done" },
      { label: "Publish Privacy Policy and Terms of Service (GDPR/PIPEDA-aligned)", status: "done" },
      { label: "Release Technical Architecture Specification (Six-Layer Model)", status: "done" },
      { label: "Publish Unified Compliance Cross-Reference Matrix (ISO/OECD/GDPR)", status: "done" },
      { label: "Submit to OECD Digital Government Review Panel", status: "in-progress" },
      { label: "Submit to World Bank GovTech Maturity Assessment", status: "in-progress" },
      { label: "Engage UN DPGA for Digital Public Good nomination", status: "planned" },
      { label: "Complete independent architecture security audit", status: "planned" },
      { label: "Publish Executive Whitepaper for multilateral distribution", status: "done" },
    ],
    deliverables: [
      "Institutional Portal (globalrecordgovernance.com)",
      "Governance Charter v1.0",
      "Technical Architecture Document",
      "Compliance Cross-Reference Matrix",
      "International Submission Pack",
      "Executive Whitepaper",
    ],
  },
  {
    id: "II",
    title: "Pilot & Certification Deployment",
    status: "Planned",
    timeline: "Q4 2026 – Q2 2027",
    icon: Rocket,
    objective: "Deploy controlled pilot nodes in partner jurisdictions and establish the institutional certification framework for DPI governance systems.",
    milestones: [
      { label: "Deploy GRGF Pilot Node v0.1 — Controlled Evaluation Edition", status: "planned" },
      { label: "Complete 90-day institutional pilot with measurable KPIs", status: "planned" },
      { label: "Achieve 100% policy enforcement determinism rate", status: "planned" },
      { label: "Demonstrate <30 min audit reconstruction capability", status: "planned" },
      { label: "Launch Level I Certification (Foundational DPI Compliance)", status: "planned" },
      { label: "Launch Level II Certification (Verified Governance Alignment)", status: "planned" },
      { label: "Establish Technical Review Panel with independent assessors", status: "planned" },
      { label: "Publish pilot evaluation results and independent assessment", status: "planned" },
      { label: "Onboard first Associate-tier institutional member", status: "planned" },
      { label: "Release Pilot Deployment Guide v1.0", status: "planned" },
    ],
    deliverables: [
      "Pilot Node v0.1 Deployment Package",
      "Level I & II Certification Criteria",
      "Pilot Evaluation Report",
      "Independent Assessment Framework",
      "Deployment Playbook v1.0",
    ],
  },
  {
    id: "III",
    title: "Federation & International Alignment",
    status: "Planned",
    timeline: "Q3 2027 – Q4 2028",
    icon: Globe,
    objective: "Establish multi-jurisdictional federation network, launch Level III certification, and achieve formal recognition by international standards bodies.",
    milestones: [
      { label: "Deploy federation protocol across 3+ jurisdictions", status: "planned" },
      { label: "Launch Level III Certification (Institutional-Grade Certified DPI)", status: "planned" },
      { label: "Establish cross-border governance verification capability", status: "planned" },
      { label: "Achieve OECD DPI alignment recognition", status: "planned" },
      { label: "Achieve World Bank GovTech integration pathway", status: "planned" },
      { label: "Publish Federation Interoperability Standard v1.0", status: "planned" },
      { label: "Onboard 5+ national governance nodes", status: "planned" },
      { label: "Establish Standards Committee with multi-stakeholder representation", status: "planned" },
      { label: "Launch annual Governance Transparency Report cycle", status: "planned" },
      { label: "Achieve UN Digital Public Good registration", status: "planned" },
    ],
    deliverables: [
      "Federation Protocol Specification",
      "Level III Certification Framework",
      "Cross-Border Verification API",
      "Interoperability Standard v1.0",
      "Annual Governance Transparency Report",
    ],
  },
];

const statusIcon = (s: string) => {
  if (s === "done") return <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />;
  if (s === "in-progress") return <Clock className="h-3.5 w-3.5 text-accent shrink-0 animate-pulse" />;
  return <Target className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />;
};

const Roadmap = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Strategic Roadmap"
      subtitle="Three-phase deployment pathway from institutional publication through pilot certification to international federation."
    />

    {/* Timeline Overview */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          The GRGF deployment roadmap follows a structured, evidence-driven pathway designed
          to build institutional credibility before operational scale. Each phase produces
          measurable deliverables subject to independent verification. No phase proceeds
          without validated completion of its predecessor.
        </p>
      </div>

      {/* Visual Timeline Bar */}
      <div className="hidden sm:flex items-center gap-0 mb-8">
        {phases.map((p, i) => (
          <div key={p.id} className="flex items-center flex-1">
            <div className={`flex-1 rounded-sm p-4 border ${p.status === "Active" ? "bg-accent/10 border-accent" : "bg-card border-border"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold ${p.status === "Active" ? "text-accent" : "text-muted-foreground"}`}>
                  PHASE {p.id}
                </span>
                {p.status === "Active" && (
                  <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-[9px] font-mono rounded-sm">ACTIVE</span>
                )}
              </div>
              <p className="text-xs font-serif font-semibold">{p.title}</p>
              <p className="text-[10px] text-muted-foreground font-mono mt-1">{p.timeline}</p>
            </div>
            {i < phases.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mx-1" />}
          </div>
        ))}
      </div>
    </Section>

    {/* Phase Detail Sections */}
    {phases.map((phase) => {
      const Icon = phase.icon;
      const done = phase.milestones.filter(m => m.status === "done").length;
      const total = phase.milestones.length;
      const pct = Math.round((done / total) * 100);

      return (
        <Section key={phase.id} title={`Phase ${phase.id} — ${phase.title}`} className="border-t border-border">
          {/* Phase Header */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="governance-card flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-[10px] font-mono text-accent uppercase tracking-wider">{phase.timeline}</p>
                  <p className="text-xs text-muted-foreground">Status: <span className="font-semibold text-foreground">{phase.status}</span></p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{phase.objective}</p>
            </div>
            <div className="governance-card sm:w-48 flex flex-col items-center justify-center">
              <p className="text-2xl font-serif font-bold text-accent">{pct}%</p>
              <p className="text-[10px] font-mono text-muted-foreground mt-1">{done}/{total} MILESTONES</p>
              <div className="w-full bg-muted/30 rounded-full h-1.5 mt-2">
                <div className="bg-accent h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
              </div>
            </div>
          </div>

          {/* Milestones */}
          <div className="space-y-2 mb-6">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Milestones</h4>
            {phase.milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-3 py-2 px-3 rounded-sm border border-border/50 bg-card/30">
                {statusIcon(m.status)}
                <span className={`text-xs leading-relaxed ${m.status === "done" ? "text-foreground" : "text-muted-foreground"}`}>
                  {m.label}
                </span>
                <span className={`ml-auto text-[9px] font-mono shrink-0 ${
                  m.status === "done" ? "text-accent" : m.status === "in-progress" ? "text-accent" : "text-muted-foreground/50"
                }`}>
                  {m.status === "done" ? "COMPLETE" : m.status === "in-progress" ? "IN PROGRESS" : "PLANNED"}
                </span>
              </div>
            ))}
          </div>

          {/* Deliverables */}
          <div className="governance-card">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Phase Deliverables</h4>
            <div className="flex flex-wrap gap-2">
              {phase.deliverables.map((d) => (
                <span key={d} className="px-2.5 py-1 bg-muted/30 border border-border rounded-sm text-[10px] font-mono text-muted-foreground">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Section>
      );
    })}

    {/* Governance Principles for Roadmap Execution */}
    <Section title="Execution Principles" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Shield, title: "Evidence-Driven", desc: "Each phase transition requires independently verifiable evidence of milestone completion." },
          { icon: FileText, title: "Publicly Documented", desc: "All roadmap progress is reported in the Annual Governance Transparency Report." },
          { icon: Users, title: "Multi-Stakeholder", desc: "Roadmap priorities are subject to Advisory Council and Standards Committee review." },
          { icon: Target, title: "Reversible", desc: "Every deployment decision includes documented exit and reversibility procedures." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-4 w-4 text-accent mb-2" />
            <h4 className="font-serif text-xs font-semibold mb-1">{title}</h4>
            <p className="text-[10px] text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default Roadmap;
