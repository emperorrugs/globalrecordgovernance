import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, Eye, Key, UserCheck, Globe, Accessibility, Server, RefreshCw, CheckCircle, AlertTriangle } from "lucide-react";

const SafeguardsTrust = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Safeguards & Trust Architecture"
      subtitle="Human-centred safeguards aligned with OECD DPI principles: privacy-by-design, security, inclusion, and resilience."
    />

    {/* Privacy-by-Design */}
    <Section title="Privacy-by-Design">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF enforces privacy at the architectural level. Personal data is never stored within the governance record layer. Only event metadata strictly required for evidentiary integrity is captured.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Eye, title: "Data Minimization", desc: "Only event metadata required for governance integrity is captured. No personal identifiers stored in the evidence backbone." },
          { icon: Lock, title: "Lawful Basis Enforcement", desc: "All data processing tied to explicit legal authority. Public interest, legal obligation, and consent-based models supported." },
          { icon: UserCheck, title: "Role-Based Disclosure", desc: "Access to governance records controlled via RBAC/ABAC. No blanket access. Every disclosure event is itself recorded." },
          { icon: Key, title: "Audit Logging", desc: "All access events logged immutably. Every query, view, and export action creates a sealed audit trail entry." },
          { icon: Shield, title: "Pseudonymization", desc: "Actor identifiers pseudonymized at the connector layer. Re-identification requires authorized, audited institutional action." },
          { icon: RefreshCw, title: "Consent Architecture", desc: "Where applicable, consent workflows are structurally integrated. Withdrawal triggers are deterministic and auditable." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Security Model */}
    <Section title="Security Model" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Shield, title: "Cryptographic Signing", desc: "SHA-256/512 hash chaining for all governance records. Every event cryptographically sealed upon capture." },
          { icon: Key, title: "Trust Anchor Governance", desc: "Root trust anchors managed under sovereign control. No external party holds signing authority over national records." },
          { icon: RefreshCw, title: "Key Lifecycle Management", desc: "Key rotation, versioned binding, and HSM compatibility. Compromise triggers automatic re-anchoring protocols." },
          { icon: Lock, title: "Tamper-Evident Registry", desc: "Append-only storage with hash-chain integrity. Any modification invalidates downstream verification automatically." },
          { icon: Eye, title: "Zero-Trust Verification", desc: "No component, user, or system trusted without policy-verified authorization. Every access re-validated." },
          { icon: Server, title: "Independent Auditability", desc: "Any authorized party can verify record integrity without trusting the operator or platform." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Inclusion & Accessibility */}
    <Section title="Inclusion & Accessibility" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Accessibility, title: "WCAG Alignment", desc: "Platform interfaces designed to meet WCAG 2.1 AA standards. High contrast, keyboard navigation, and screen reader compatibility." },
          { icon: Globe, title: "Multilingual Readiness", desc: "Architecture supports multilingual deployment (English, French, Arabic, Spanish). Governance records store language-neutral event metadata." },
          { icon: UserCheck, title: "Digital Literacy Considerations", desc: "Institutional interfaces designed for structured professional use. Training modules and onboarding documentation available." },
          { icon: AlertTriangle, title: "Non-Digital Fallback", desc: "Governance processes can operate with offline procedures. Record synchronization protocols handle intermittent connectivity." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Resilience */}
    <Section title="Resilience Architecture" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "High-Availability Architecture", desc: "Multi-region deployment with active-active failover. No single point of failure in the evidence backbone." },
          { title: "Disaster Recovery Model", desc: "RTO < 4 hours, RPO < 1 hour for governance records. Geographically distributed backup with sovereign data residency." },
          { title: "Offline Fallback Governance", desc: "Governance continuity maintained under connectivity loss. Local nodes operate independently and synchronize upon restoration." },
          { title: "Institutional Continuity Under Failure", desc: "System designed for multi-decade operation. No dependency on single vendor, cloud provider, or external authority." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* OECD Alignment Note */}
    <Section className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">OECD Alignment:</strong> This safeguards architecture directly implements the human-centred design principles outlined in the OECD DPI Policy Paper No. 68 (2024), including privacy-by-design, security-by-default, and inclusive digital governance infrastructure.
        </p>
      </div>
    </Section>
  </div>
);

export default SafeguardsTrust;
