import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, Eye, Key, UserCheck, ShieldCheck, Bug, Radio } from "lucide-react";

const SecurityTrust = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Security & Trust Architecture"
      subtitle="Structural security. No centralized override. No backdoor. No trust assumptions."
    />

    {/* Threat Model */}
    <Section title="Threat Model">
      <div className="space-y-3">
        {[
          { id: "T-01", threat: "Unauthorized Action Injection", mitigation: "Policy engine validates authority context and scope. Unauthorized actions denied with machine-readable justification." },
          { id: "T-02", threat: "Retroactive Record Manipulation", mitigation: "Append-only backbone with cryptographic sealing. No modification, deletion, or reordering after seal." },
          { id: "T-03", threat: "Insider Override", mitigation: "Role separation enforcement. Dual-authority for critical operations. No single actor bypasses controls." },
          { id: "T-04", threat: "Log Tampering", mitigation: "Immutable audit trails with hash-chain integrity. Tampering invalidates downstream hashes automatically." },
          { id: "T-05", threat: "Data Suppression", mitigation: "Proof-of-absence verification. Omission detection is a core architectural capability." },
          { id: "T-06", threat: "Key Compromise", mitigation: "Key custody separation. Rotation protocols with versioned binding. HSM compatibility." },
        ].map((t) => (
          <div key={t.id} className="governance-card">
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-1 text-accent">{t.id}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{t.threat}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{t.mitigation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Security Principles */}
    <Section title="Security Principles" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Shield, title: "Zero Trust", desc: "No component, user, or system trusted without policy-verified authorization." },
          { icon: UserCheck, title: "Role Separation", desc: "Governance, operations, and verification structurally separated. No role performs another's functions." },
          { icon: ShieldCheck, title: "Immutable Audit Trails", desc: "Every action, access event, and denial logged, sealed, and independently verifiable." },
          { icon: Lock, title: "No Backdoor", desc: "No administrative override. No emergency bypass. No privileged access outside governance protocols." },
          { icon: Eye, title: "Transparent Denials", desc: "Every denied action produces machine-readable reason and human-readable explanation." },
          { icon: Key, title: "Independent Verification", desc: "Any authorized party verifies record integrity without trusting the operator." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Cryptographic Standards */}
    <Section title="Cryptographic Standards" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Lock className="h-4 w-4 text-accent" /> Hashing
          </h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "SHA-256 primary. SHA-512 for enhanced-security deployments.",
              "Merkle tree structure for batch integrity verification.",
              "Public hash manifests enable zero-trust verification.",
              "Hash anchoring to external timestamp authorities.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <Key className="h-4 w-4 text-accent" /> Key Management
          </h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "Separation: signing, sealing, and verification keys.",
              "Key rotation with version-bound binding.",
              "HSM compatibility. Key escrow under governance rules.",
              "Compromise response with automatic invalidation.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
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
              "No single operator accesses, modifies, or suppresses sealed records",
              "Dual-authority for all critical governance operations",
              "All admin actions logged as governance records",
              "Infrastructure operators separated from governance custodians",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <Lock className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Deterministic Denial Logic</h4>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "Denial includes specific policy rule that triggered rejection",
              "No silent failures — all denials logged and sealed",
              "Denial evidence independently auditable",
              "No override pathway outside governance protocols",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Incident Response */}
    <Section title="Incident Response" className="border-t border-border">
      <div className="space-y-3">
        {[
          { phase: "Detection", desc: "Automated integrity monitoring. Hash-chain breaks, unauthorized access patterns, anomalous policy engine behavior." },
          { phase: "Isolation", desc: "Affected components isolated from evidence backbone. No new records from compromised nodes." },
          { phase: "Audit Extraction", desc: "Complete audit trails extracted and sealed independently for forensic analysis." },
          { phase: "Transparency", desc: "Affected stakeholders notified according to pre-defined disclosure rules." },
          { phase: "Recovery", desc: "Systems restored from verified backpoints. Full incident report sealed as governance record." },
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

    {/* Current Security Posture */}
    <Section title="Current Security Posture" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <div className="space-y-3">
          {[
            { status: "Current", label: "Pilot evaluation stage — not production-deployed" },
            { status: "Planned", label: "Independent third-party security audit" },
            { status: "Planned", label: "Formal penetration testing by accredited firm" },
            { status: "Active", label: "Production hardening roadmap under development" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <span className={`text-[10px] font-mono tracking-wider shrink-0 mt-0.5 ${item.status !== "Planned" ? "text-accent" : "text-muted-foreground/60"}`}>
                [{item.status.toUpperCase()}]
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground italic">
          Transparency in security posture is intentional. Concealing limitations contradicts the framework's integrity principles.
        </p>
      </div>
    </Section>

    {/* External Audit Readiness */}
    <Section title="External Audit Readiness" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card border-l-2 border-l-accent">
          <Bug className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Vulnerability Disclosure</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Responsible disclosure protocol with defined response timelines. Security researchers and auditors can report through controlled channels.
          </p>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <Radio className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Controlled Distribution</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Security architecture documentation distributed under controlled release protocols. NDA provisions and access logging enforced.
          </p>
        </div>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default SecurityTrust;