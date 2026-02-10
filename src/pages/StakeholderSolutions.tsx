import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Building2, Cpu, Shield, Eye, Globe, Scale, Users, Gavel, ArrowRight } from "lucide-react";

const stakeholders = [
  {
    icon: Building2,
    role: "Ministers & Senior Officials",
    problem: "Governance decisions lack verifiable institutional memory. Actions and omissions are difficult to trace across administrations.",
    mechanism: "GRGF creates an immutable, timestamped record of every governance action and omission, providing continuous institutional accountability regardless of political transitions.",
    outcome: "Institutional credibility and measurable transparency.",
    impact: "Reduced reputational risk, defensible governance record, cross-administration continuity.",
  },
  {
    icon: Cpu,
    role: "CIO / CTO",
    problem: "Digital governance systems are fragmented, vendor-dependent, and lack interoperability standards.",
    mechanism: "GRGF provides a modular, standards-based governance layer that integrates with existing DPI infrastructure through documented APIs and standardized event schemas.",
    outcome: "Interoperable, secure, modular DPI layer.",
    impact: "Reduced integration costs, vendor independence, future-proof architecture.",
  },
  {
    icon: Eye,
    role: "Auditors & Inspectors",
    problem: "Audit evidence is manually collected, inconsistently structured, and difficult to verify independently.",
    mechanism: "GRGF provides pre-verified, cryptographically sealed audit trails with continuous compliance evidence, eliminating manual reconciliation.",
    outcome: "Tamper-evident logs and deterministic validation.",
    impact: "20–40% audit cycle reduction, 100% audit trail completeness, independent verification capability.",
  },
  {
    icon: Scale,
    role: "Regulators",
    problem: "Regulatory compliance verification relies on self-reported data and periodic inspections with limited coverage.",
    mechanism: "GRGF's continuous compliance evidence model provides real-time verification of governance rule adherence without requiring trust in the regulated entity.",
    outcome: "Continuous compliance assurance.",
    impact: "Reduced inspection costs, earlier detection of non-compliance, evidence-based enforcement.",
  },
  {
    icon: Globe,
    role: "Multilateral Institutions",
    problem: "Cross-border governance standards lack interoperability, and institutional trust is difficult to verify across jurisdictions.",
    mechanism: "GRGF's federation model enables cross-border record verification while preserving national sovereignty and legal autonomy.",
    outcome: "International trust federation capability.",
    impact: "Standardized governance verification, reduced due diligence costs, scalable trust framework.",
  },
  {
    icon: Cpu,
    role: "Engineers & Integrators",
    problem: "Governance infrastructure lacks standardized APIs, event schemas, and integration patterns.",
    mechanism: "GRGF provides documented RESTful APIs, standardized JSON event schemas, and deterministic policy engine interfaces for seamless integration.",
    outcome: "API-driven, schema-based integration.",
    impact: "Reduced development time, standardized integration patterns, clear technical documentation.",
  },
  {
    icon: Users,
    role: "Public Verification Users",
    problem: "Citizens and civil society have no independent means to verify government actions or detect omissions.",
    mechanism: "GRGF's public verification layer enables proof-of-existence and proof-of-absence checks without exposing personal or classified data.",
    outcome: "Independent, privacy-preserving public verification.",
    impact: "Increased public trust, transparent governance, verifiable accountability.",
  },
];

const StakeholderSolutions = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Stakeholder Solutions"
      subtitle="Role-specific value framing for institutional decision-makers, technical teams, oversight bodies, and public users."
    />

    <Section>
      <div className="space-y-6">
        {stakeholders.map((s) => (
          <div key={s.role} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base font-semibold mb-3">{s.role}</h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Problem</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">GRGF Mechanism</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Outcome</p>
                    <p className="text-xs text-foreground font-medium leading-relaxed">{s.outcome}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Measurable Impact</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Controlled Briefing Request */}
    <Section title="Request Controlled Institutional Briefing" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Institutional briefing packages are available under controlled distribution protocols for government agencies, multilateral institutions, and national audit offices. Access includes:
        </p>
        <ul className="space-y-2 text-xs text-muted-foreground mb-6">
          {[
            "Full architecture and security whitepaper",
            "National deployment assessment framework",
            "ROI modeling with country-specific parameters",
            "Legal compatibility assessment template",
            "NDA and controlled access documentation",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0">·</span>{item}
            </li>
          ))}
        </ul>
        <p className="text-[10px] font-mono text-muted-foreground/50 tracking-wider mb-4">
          CONFIDENTIAL RELEASE PROTOCOL · NDA REQUIRED · GOVERNANCE-CONTROLLED ACCESS
        </p>
        <Link
          to="/archive"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          View Document Archive <ArrowRight className="h-4 w-4" />
        </Link>
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

export default StakeholderSolutions;
