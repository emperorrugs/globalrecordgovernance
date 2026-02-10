import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Calendar, DollarSign, Target, FileCheck, Users, Shield,
  ArrowRight, CheckCircle, HelpCircle, BarChart3, Globe,
  TrendingUp, Clock, Building2,
} from "lucide-react";

const PilotProgramme = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="90-Day Pilot Programme"
        subtitle="A structured institutional engagement to validate GRGF deployment readiness with one public institution and 3–5 decision types."
      />

      {/* Overview */}
      <Section title="Pilot Overview" className="border-b border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            The 90-day pilot is a read-only, non-invasive engagement designed to validate institutional readiness for GRGF adoption. It produces a cryptographically sealed decision ledger, policy-aligned evidence models, an audit simulation, and a final validation report.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { icon: Calendar, label: "Duration", value: "90 Days" },
            { icon: Target, label: "Scope", value: "1 Institution, 3–5 Decision Types" },
            { icon: DollarSign, label: "Indicative Budget", value: "CAD/USD 1–2M" },
            { icon: FileCheck, label: "Outcome", value: "Go/No-Go Readiness Decision" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="governance-card text-center">
              <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
              <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-sm text-foreground font-semibold">{value}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Pilot Timeline" className="border-b border-border bg-card/30">
        <div className="space-y-4">
          {[
            { week: "Weeks 1–2", title: "Discovery & Scoping", items: ["Map institutional decision workflows", "Identify 3–5 governance decision types", "Define evidence models and policy rules", "Establish baseline audit posture"] },
            { week: "Weeks 3–6", title: "System Configuration & Integration", items: ["Deploy System A (Evidence Backbone) in read-only mode", "Configure policy engine for selected decision types", "Establish proof publication endpoints", "Begin event ingestion from existing systems"] },
            { week: "Weeks 7–10", title: "Evidence Collection & Validation", items: ["Capture governance events and generate proofs", "Run omission detection against expected actions", "Produce Continuous Compliance Evidence attestations", "Validate cryptographic integrity of sealed records"] },
            { week: "Weeks 11–12", title: "Audit Simulation & Report", items: ["Conduct full audit simulation against sealed ledger", "Produce validation report with findings and recommendations", "Present go/no-go institutional readiness decision", "Deliver sealed pilot archive for institutional records"] },
          ].map((phase, i) => (
            <div key={phase.week} className="governance-card">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <span className="hash-text">{phase.week}</span>
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold mb-2">{phase.title}</h4>
                  <ul className="space-y-1.5">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pilot Deliverables */}
      <Section title="Pilot Deliverables" className="border-b border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Shield, title: "Sealed Decision Ledger", desc: "Cryptographically sealed record of all governance decisions captured during the pilot period." },
            { icon: FileCheck, title: "Policy-Aligned Evidence Models", desc: "Governance event schemas mapped to institutional policy requirements and audit standards." },
            { icon: BarChart3, title: "Audit Simulation Report", desc: "Full audit simulation demonstrating verifiability, completeness, and omission detection capabilities." },
            { icon: Building2, title: "Institutional Readiness Assessment", desc: "Go/no-go recommendation with detailed findings, risk assessment, and next-steps roadmap." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-2" />
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Economic Case */}
      <Section title="Economic Case" className="border-b border-border bg-card/30">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            Based on World Bank–style economic analysis, GRGF deployment as Digital Public Infrastructure is projected to deliver significant measurable returns through reduced improper payments, lower audit costs, and improved institutional accountability.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { icon: TrendingUp, label: "Net Benefits (10yr)", value: "≈ US$4.53B", sub: "Canada archetype" },
            { icon: BarChart3, label: "Internal Rate of Return", value: "100% IRR", sub: "Investment analysis" },
            { icon: Clock, label: "Payback Period", value: "Year 1", sub: "Rapid return" },
            { icon: Globe, label: "Applicability", value: "Multi-Country", sub: "Jurisdiction-neutral" },
          ].map(({ icon: Icon, label, value, sub }) => (
            <div key={label} className="governance-card text-center">
              <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
              <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-sm text-foreground font-semibold">{value}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{sub}</p>
            </div>
          ))}
        </div>

        <h3 className="institutional-heading text-lg font-semibold mb-4">Value Drivers</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Reduced improper payments through omission detection",
            "Lower audit costs via continuous compliance evidence (CICE)",
            "Improved institutional accountability and transparency",
            "Fraud prevention through tamper-evident governance records",
            "Efficiency gains from automated policy evaluation",
            "Long-term societal trust through verifiable governance",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <span className="text-xs">{item}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Anticipated Objections */}
      <Section title="Addressing Common Questions" className="border-b border-border">
        <div className="space-y-4 max-w-3xl">
          {[
            { q: "Does GRGF override existing legal authorities?", a: "No. GRGF operates read-only and does not override, replace, or interfere with existing legal frameworks, institutional mandates, or decision-making authority. It records and preserves — it does not govern." },
            { q: "Does it expose personal data?", a: "No. The system pseudonymises identifiers and operates with data minimisation by design. No personal, sensitive, or identifiable data is stored or transmitted." },
            { q: "Are sealed logs legally admissible?", a: "Sealed logs produce cryptographic integrity proofs (SHA-256, Merkle trees) that support admissibility under digital evidence standards. Independent verification requires no access to GRGF systems." },
            { q: "Is the integration invasive?", a: "No. The pilot operates in read-only mode, observing existing decision workflows without modifying institutional systems. No write access to existing systems is required." },
            { q: "Can GRGF reduce accountability?", a: "The opposite. GRGF increases accountability by making governance gaps (omissions) visible and verifiable — a capability absent from conventional record systems." },
          ].map(({ q, a }) => (
            <div key={q} className="governance-card">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-sm font-semibold">{q}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Target Institutions */}
      <Section title="Target Institutions" className="border-b border-border bg-card/30">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { org: "Government of Canada", role: "Treasury Board Secretariat — Audit & Accountability" },
            { org: "World Bank", role: "Digital Public Infrastructure — Governance Programs" },
            { org: "Egypt Ministry of Finance", role: "Public Financial Management — Reform Programs" },
            { org: "African Development Bank", role: "Governance & Institutional Development" },
            { org: "Inter-American Development Bank", role: "Transparency & Anti-Corruption Programs" },
            { org: "UNDP", role: "Digital Governance & Rule of Law Programs" },
          ].map(({ org, role }) => (
            <div key={org} className="governance-card">
              <h4 className="font-serif text-sm font-semibold">{org}</h4>
              <p className="text-xs text-muted-foreground mt-1">{role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section title="Express Interest">
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed mb-4">
            Institutional inquiries regarding the 90-Day Pilot Programme, partnerships, or GRGF adoption can be directed through formal institutional channels.
          </p>
          <p className="text-xs text-muted-foreground">
            For pilot sponsorship, audit executive engagement, or DPI program alignment, please reference the GRGF Digital Archive for comprehensive documentation.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link to="/archive" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
              <FileCheck className="h-4 w-4" /> Access Digital Archive
            </Link>
            <Link to="/blueprints" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
              <Shield className="h-4 w-4" /> Technical Blueprints
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PilotProgramme;
