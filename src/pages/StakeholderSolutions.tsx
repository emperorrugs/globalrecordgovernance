import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Building2, Cpu, Shield, Eye, Globe, Scale, Users, Landmark, ArrowRight } from "lucide-react";

const stakeholders = [
  {
    icon: Building2,
    role: "Ministers & Senior Officials",
    challenge: "Governance decisions lack verifiable institutional memory. Actions and omissions are difficult to trace across administrations.",
    riskExposure: "Reputational and legal liability from undocumented governance decisions. Loss of institutional continuity during political transitions.",
    mechanism: "Immutable, timestamped record of every governance action and omission, providing continuous institutional accountability regardless of political transitions.",
    outcome: "Institutional credibility and measurable transparency with defensible governance record.",
    entryAction: "Authorize a 90-day pilot recording 3–5 decision types within a single ministry. No infrastructure replacement required.",
  },
  {
    icon: Cpu,
    role: "CIO / CTO",
    challenge: "Digital governance systems are fragmented, vendor-dependent, and lack interoperability standards.",
    riskExposure: "Vendor lock-in, integration failure risk, and inability to produce verifiable audit evidence from existing systems.",
    mechanism: "Modular, standards-based governance layer that integrates with existing DPI infrastructure through documented APIs and standardized event schemas.",
    outcome: "Interoperable, secure, modular DPI layer with reduced integration costs and vendor independence.",
    entryAction: "Request technical architecture review and API integration assessment against existing national systems.",
  },
  {
    icon: Eye,
    role: "Auditors & Inspectors",
    challenge: "Audit evidence is manually collected, inconsistently structured, and difficult to verify independently.",
    riskExposure: "Incomplete audit coverage, undetectable record gaps, and inability to verify evidence integrity without trusting the audited entity.",
    mechanism: "Pre-verified, cryptographically sealed audit trails with continuous compliance evidence, eliminating manual reconciliation.",
    outcome: "20–40% audit cycle reduction, 100% audit trail completeness, independent verification capability.",
    entryAction: "Conduct parallel audit trial: verify one governance process through both traditional and GRGF-assisted methods.",
  },
  {
    icon: Landmark,
    role: "Treasury & Fiscal Authorities",
    challenge: "Procurement leakage and governance integrity failures create fiscal exposure that is difficult to quantify or detect.",
    riskExposure: "5–15% systemic procurement leakage. Inability to detect omissions in financial governance processes.",
    mechanism: "Continuous omission detection and deterministic policy enforcement across procurement and financial governance workflows.",
    outcome: "Quantifiable fiscal risk mitigation. Even 0.3% integrity improvement offsets deployment cost.",
    entryAction: "Commission fiscal impact assessment using national procurement expenditure data and GRGF mitigation modeling.",
  },
  {
    icon: Scale,
    role: "Regulators",
    challenge: "Regulatory compliance verification relies on self-reported data and periodic inspections with limited coverage.",
    riskExposure: "Delayed non-compliance detection, reliance on regulated entity self-reporting, and insufficient enforcement evidence.",
    mechanism: "Continuous compliance evidence model provides real-time verification of governance rule adherence without requiring trust in the regulated entity.",
    outcome: "Reduced inspection costs, earlier non-compliance detection, evidence-based enforcement.",
    entryAction: "Pilot continuous compliance monitoring for one regulatory domain with existing inspection data as baseline.",
  },
  {
    icon: Globe,
    role: "Multilateral Institutions",
    challenge: "Cross-border governance standards lack interoperability, and institutional trust is difficult to verify across jurisdictions.",
    riskExposure: "Inability to verify governance integrity of partner nations. Due diligence costs scale with each bilateral engagement.",
    mechanism: "Federation model enables cross-border record verification while preserving national sovereignty and legal autonomy.",
    outcome: "Standardized governance verification, reduced due diligence costs, scalable trust framework.",
    entryAction: "Engage with federation readiness assessment for 2–3 pilot nations under existing multilateral governance programs.",
  },
  {
    icon: Cpu,
    role: "Engineers & Integrators",
    challenge: "Governance infrastructure lacks standardized APIs, event schemas, and integration patterns.",
    riskExposure: "Custom integration overhead, inconsistent data formats, and absence of deterministic testing environments.",
    mechanism: "Documented RESTful APIs, standardized JSON event schemas, and deterministic policy engine interfaces for seamless integration.",
    outcome: "Reduced development time, standardized integration patterns, clear technical documentation.",
    entryAction: "Access API specification and deploy sandbox environment for integration testing.",
  },
  {
    icon: Users,
    role: "Public Verification Users",
    challenge: "Citizens and civil society have no independent means to verify government actions or detect omissions.",
    riskExposure: "Erosion of public trust due to inability to independently verify governance claims.",
    mechanism: "Public verification layer enables proof-of-existence and proof-of-absence checks without exposing personal or classified data.",
    outcome: "Independent, privacy-preserving public verification and increased institutional trust.",
    entryAction: "Deploy public verification portal with anonymized governance record lookup capability.",
  },
];

const StakeholderSolutions = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Stakeholder Solutions"
      subtitle="Decision briefing format: institutional challenge, risk exposure, structural mechanism, measurable outcome, and deployment entry action for each stakeholder."
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
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  <div>
                    <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">Institutional Challenge</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-destructive/60 uppercase tracking-wider mb-1">Risk Exposure</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.riskExposure}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">GRGF Mechanism</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.mechanism}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Measurable Outcome</p>
                    <p className="text-xs text-foreground font-medium leading-relaxed">{s.outcome}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Entry Action</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.entryAction}</p>
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
