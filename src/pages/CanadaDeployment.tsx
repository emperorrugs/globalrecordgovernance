import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Globe, Shield, CheckCircle, Building2, Scale, Users, ArrowRight, FileText, Lock, Eye } from "lucide-react";

const federalAlignment = [
  { standard: "GC Digital Standards", alignment: "GRGF's deterministic policy enforcement and structured event schemas align with GC's design-for-users and iterate-frequently principles." },
  { standard: "Policy on Service and Digital", alignment: "Supports digital-first governance integrity with automated compliance evidence and cross-departmental interoperability." },
  { standard: "Treasury Board Oversight", alignment: "Continuous compliance evidence model reduces Treasury reconciliation burden and provides real-time governance visibility." },
  { standard: "Zero Trust Security Model", alignment: "GRGF's zero-trust architecture enforces policy-verified access with no implicit trust between components." },
  { standard: "Enterprise Architecture (EARB)", alignment: "Modular, layered architecture integrates with existing GC enterprise systems through standardized APIs." },
  { standard: "Auditor General Requirements", alignment: "Immutable audit trails with deterministic validation support OAG verification without manual reconciliation." },
  { standard: "Open Government Transparency", alignment: "Public verification layer enables citizen-facing proof-of-governance without exposing classified operational data." },
  { standard: "GCKey / SecureKey Compatibility", alignment: "GRGF operates alongside existing identity infrastructure. No disruption to GCKey, SecureKey, or Sign-In Canada." },
];

const CanadaDeployment = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Canadian Federal Deployment"
      subtitle="Sovereign governance integrity layer tailored for Canada's federal digital modernization strategy."
    />

    {/* Federal Context */}
    <Section title="Federal Context">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          Canada has advanced digital maturity across GC Digital Ambition, Zero Trust Strategy, Digital ID programs, and Open Government initiatives. However, governance record integrity remains distributed across departmental systems with limited cross-ministry verifiability.
        </p>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
        GRGF is proposed as a cross-departmental verifiable governance integrity layer aligned with federal digital modernization strategy. It does not replace existing systems — it strengthens them.
      </p>
    </Section>

    {/* Prepared For */}
    <Section title="Prepared For" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { abbr: "TBS", name: "Treasury Board Secretariat" },
          { abbr: "SSC", name: "Shared Services Canada" },
          { abbr: "ISED", name: "Innovation, Science & Economic Development" },
          { abbr: "OCIO", name: "Office of the Chief Information Officer" },
        ].map(({ abbr, name }) => (
          <div key={abbr} className="governance-card text-center">
            <p className="text-lg font-serif font-semibold text-accent">{abbr}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{name}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Federal Alignment */}
    <Section title="Federal Policy Alignment" className="border-t border-border">
      <div className="space-y-3">
        {federalAlignment.map((a) => (
          <div key={a.standard} className="governance-card">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-mono text-foreground font-medium">{a.standard}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{a.alignment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Deployment Phases */}
    <Section title="Recommended Entry Strategy" className="border-t border-border">
      <div className="space-y-4">
        {[
          {
            phase: "Phase 1", timeline: "0–6 Months", title: "Controlled Federal Pilot",
            desc: "Single federal procurement authority or regulatory body. Read-only integration producing a cryptographically sealed decision ledger and institutional readiness validation report.",
            budget: "USD $1–2M",
          },
          {
            phase: "Phase 2", timeline: "6–12 Months", title: "Cross-Department Integration",
            desc: "Expansion to Treasury, Procurement, and Regulatory bodies. Cross-department record verification protocols and audit onboarding.",
            budget: "USD $3–8M",
          },
          {
            phase: "Phase 3", timeline: "12–24 Months", title: "National-Scale Federation",
            desc: "Full cross-ministry federation with international interoperability readiness. Treasury evaluation and Auditor General validation.",
            budget: "USD $8–15M",
          },
        ].map((p) => (
          <div key={p.phase} className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-mono text-accent/70 uppercase tracking-wider">{p.phase}</span>
              <span className="text-[10px] font-mono text-muted-foreground/50">· {p.timeline} · {p.budget}</span>
            </div>
            <h4 className="font-serif text-sm font-semibold mb-2">{p.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 governance-card">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Integration Note.</span> No disruption to GCKey, SecureKey, Sign-In Canada, or existing departmental identity services. GRGF operates as a complementary governance layer.
        </p>
      </div>
    </Section>

    {/* Federal Value */}
    <Section title="Federal Value Proposition" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Scale, title: "Stronger Treasury Oversight", desc: "Continuous compliance evidence for Treasury Board with real-time governance visibility across departments." },
          { icon: Shield, title: "Deterministic Policy Enforcement", desc: "Encoded governance rules executed without discretionary override. Every denial is explainable and auditable." },
          { icon: Users, title: "Reduced Reconciliation Workload", desc: "Pre-verified record integrity eliminates manual cross-departmental reconciliation." },
          { icon: Eye, title: "Audit Acceleration", desc: "Auditor General can validate governance integrity independently through cryptographic proof verification." },
          { icon: Globe, title: "International Leadership", desc: "Position Canada as a global leader in verifiable digital governance infrastructure." },
          { icon: Lock, title: "Patent-Protected Innovation", desc: "Canadian Patent Application No. 3,300,102 — filed January 28, 2026 (publication pending). Canadian-origin sovereign infrastructure." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* CTA */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium mb-4">
          GRGF is a Canadian-origin governance integrity infrastructure. Position it as a governance integrity enhancement — not system replacement.
        </p>
        <Link
          to="/briefing"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Request Federal Briefing Package <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default CanadaDeployment;
