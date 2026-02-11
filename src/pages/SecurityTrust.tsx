import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, Eye, AlertTriangle, FileText, ShieldCheck, Key, UserCheck, Bug, Radio } from "lucide-react";

const threats = [
  { threat: "Unauthorized Action Injection", mitigation: "Policy engine validates authority context and scope before any record is created. Unauthorized actions are denied with machine-readable justification." },
  { threat: "Retroactive Record Manipulation", mitigation: "Append-only evidence backbone with cryptographic sealing. No record can be modified, deleted, or reordered after sealing." },
  { threat: "Insider Override", mitigation: "Role separation enforcement ensures no single actor can bypass governance controls. Dual-authority requirements for critical operations." },
  { threat: "Log Tampering", mitigation: "Immutable audit trails with hash-chain integrity. Tampering invalidates downstream hashes and triggers automated detection." },
  { threat: "Data Suppression", mitigation: "Proof-of-absence verification enables detection of missing records. Omission detection is a core architectural capability." },
  { threat: "Key Compromise", mitigation: "Key custody model with separation between signing, sealing, and verification keys. Key rotation protocols with versioned binding." },
];

const SecurityTrust = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Security & Trust Architecture"
      subtitle="Comprehensive threat model, integrity guarantees, and incident response protocols for sovereign-grade governance infrastructure."
    />

    {/* Threat Model */}
    <Section title="Threat Model">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        The GRGF threat model addresses six primary attack vectors identified through systematic analysis of sovereign governance infrastructure risks.
      </p>
      <div className="space-y-3">
        {threats.map((t, i) => (
          <div key={t.threat} className="governance-card">
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-1">T-{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold text-foreground">{t.threat}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t.mitigation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Key Principles */}
    <Section title="Security Principles" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Shield, title: "Zero Trust by Default", desc: "No component, user, or system is trusted without policy-verified authentication and authorization." },
          { icon: UserCheck, title: "Role Separation Enforcement", desc: "Governance, operations, and verification roles are structurally separated. No role can perform another's functions." },
          { icon: ShieldCheck, title: "Immutable Audit Trails", desc: "Every action, access event, and denial is logged, sealed, and independently verifiable." },
          { icon: Lock, title: "No Backdoor Policy", desc: "No administrative override, emergency bypass, or privileged access exists outside governance-defined protocols." },
          { icon: Eye, title: "Transparent Denial Reasoning", desc: "Every denied action produces a machine-readable reason and human-readable explanation for audit." },
          { icon: Key, title: "Independent Verification", desc: "Any authorized party can independently verify record integrity without trusting the framework operator." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Hashing & Key Management */}
    <Section title="Cryptographic Standards" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4 text-accent" /> Hashing Standards
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {[
              "SHA-256 as primary hash algorithm for record sealing",
              "SHA-512 available for enhanced-security deployments",
              "Merkle tree structure for batch integrity verification",
              "Public hash manifests enable zero-trust verification",
              "Hash anchoring to external timestamp authorities",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Key className="h-4 w-4 text-accent" /> Key Management Framework
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {[
              "Separation between signing, sealing, and verification keys",
              "Key rotation protocols with version-bound binding",
              "Hardware security module (HSM) compatibility",
              "Key escrow under governance-defined custodial rules",
              "Compromise response with automatic key invalidation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Incident Response */}
    <Section title="Incident Response Framework" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        The incident response protocol follows a five-stage process designed for sovereign governance environments.
      </p>
      <div className="space-y-3">
        {[
          { phase: "Detection", desc: "Automated integrity monitoring detects hash-chain breaks, unauthorized access patterns, and anomalous policy engine behavior." },
          { phase: "Isolation", desc: "Affected components are isolated from the evidence backbone. No new records are accepted from compromised nodes." },
          { phase: "Audit Log Extraction", desc: "Complete audit trails are extracted and sealed independently for forensic analysis." },
          { phase: "Public Transparency Protocol", desc: "Affected stakeholders and governance authorities are notified according to pre-defined disclosure rules." },
          { phase: "Recovery & Reporting", desc: "Systems are restored from verified backpoints. Full incident report is sealed as a governance record." },
        ].map((p, i) => (
          <div key={p.phase} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {i + 1}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold">{p.phase}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Insider Threat & Deterministic Denial */}
    <Section title="Insider Threat Mitigation" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <Shield className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Insider Threat Model</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "No single operator can access, modify, or suppress sealed records",
              "Dual-authority requirement for all critical governance operations",
              "All administrative actions logged as governance records themselves",
              "Privileged access produces sealed audit evidence automatically",
              "Separation between infrastructure operators and governance custodians",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <Lock className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Deterministic Denial Logic</h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Every denied action produces both a machine-readable denial code and a human-readable explanation:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "Denial reason includes specific policy rule that triggered rejection",
              "No silent failures — all denials are logged and sealed",
              "Denial evidence is independently auditable",
              "No administrative override pathway outside governance protocols",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Vulnerability Disclosure & External Audit */}
    <Section title="External Audit Readiness" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card border-l-2 border-l-accent">
          <Bug className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Vulnerability Disclosure Program</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Responsible disclosure protocol with defined response timelines. Security researchers and institutional auditors can report vulnerabilities through controlled channels with acknowledgment and remediation commitments.
          </p>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <Radio className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Controlled Distribution Mechanism</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Security architecture documentation is distributed under controlled release protocols. Institutional access requires governance-approved authorization with NDA provisions and access logging.
          </p>
        </div>
      </div>
    </Section>

    {/* Current Security Posture */}
    <Section title="Current Security Posture" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">Transparency Statement</p>
        <div className="space-y-3">
          {[
            { status: "Current", label: "Pilot evaluation stage — not production-deployed" },
            { status: "Planned", label: "Independent third-party security audit (pre-production)" },
            { status: "Planned", label: "Formal penetration testing by accredited security firm" },
            { status: "Planned", label: "SOC 2 Type II equivalent assurance engagement" },
            { status: "Active", label: "Production hardening roadmap under development" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className={`text-[10px] font-mono tracking-wider shrink-0 mt-0.5 ${item.status === "Current" || item.status === "Active" ? "text-accent" : "text-muted-foreground/60"}`}>
                [{item.status.toUpperCase()}]
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground italic">
          Transparency in security posture is an intentional design decision. Concealing limitations would contradict the framework's integrity principles.
        </p>
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

export default SecurityTrust;
