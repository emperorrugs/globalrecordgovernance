import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, Eye, Key, UserCheck, ShieldCheck, Bug, Radio, AlertTriangle, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityTrust = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Trust Center"
      subtitle="Security posture, transparency commitments, and current limitations — stated openly as a measure of institutional integrity."
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

    {/* Vulnerability Disclosure */}
    <Section title="Vulnerability Disclosure Policy" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent max-w-3xl">
        <div className="grid gap-4 sm:grid-cols-2 mb-4">
          <div className="flex items-start gap-3">
            <Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">Report To</p>
              <p className="text-sm text-foreground">security@globalrecordgovernance.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">Response SLA</p>
              <p className="text-sm text-foreground">Acknowledgment within 48 hours</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Responsible disclosure is welcomed. Security researchers and institutional auditors may report vulnerabilities through the above channel. Reports are triaged by severity and addressed according to the incident response protocol. Reporters will be credited unless anonymity is requested.
        </p>
      </div>
    </Section>

    {/* Current Limitations */}
    <Section title="Current Limitations" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-destructive/50 max-w-3xl">
        <div className="flex items-start gap-3 mb-4">
          <AlertTriangle className="h-5 w-5 text-destructive/70 shrink-0 mt-0.5" />
          <p className="text-sm text-foreground font-medium">
            Transparency in limitations is intentional. Concealing gaps contradicts the framework's integrity principles.
          </p>
        </div>
        <div className="space-y-3">
          {[
            { limitation: "Pilot scope only", detail: "The current system is a controlled evaluation edition. It is not deployed in production and does not process real institutional data." },
            { limitation: "Not yet independently audited", detail: "No third-party security audit has been completed. An independent audit roadmap is in progress with planned engagement of accredited security firms." },
            { limitation: "Production deployment requires independent review", detail: "Before any production deployment, the system requires formal penetration testing, code audit, and governance review by an independent party." },
            { limitation: "No formal certification", detail: "Standards alignment (ISO 27001, NIST, SOC 2) is documented but not certified. Certification is planned post-pilot." },
            { limitation: "Single-node architecture", detail: "Federation and multi-node verification are architecturally designed but not yet implemented. Current evaluation is single-node only." },
          ].map((item) => (
            <div key={item.limitation} className="border-l border-border pl-4">
              <p className="text-xs text-foreground font-semibold mb-0.5">{item.limitation}</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Planned Audit Roadmap */}
    <Section title="Independent Audit Roadmap" className="border-t border-border">
      <div className="space-y-3 max-w-3xl">
        {[
          { phase: "Phase 1 — Architecture Review", status: "In Progress", desc: "Independent review of system architecture, data flow, and security design by qualified security architects." },
          { phase: "Phase 2 — Penetration Testing", status: "Planned", desc: "Formal penetration testing by accredited cybersecurity firm. Scope: API, authentication, hash integrity, role separation." },
          { phase: "Phase 3 — Policy Engine Audit", status: "Planned", desc: "Independent verification of deterministic policy enforcement. Confirm identical-input/identical-output behavior." },
          { phase: "Phase 4 — Governance & Ethics Review", status: "Planned", desc: "Review of governance stewardship model, anti-capture clauses, and institutional neutrality commitments." },
        ].map((item) => (
          <div key={item.phase} className="governance-card">
            <div className="flex items-start gap-3">
              <span className={`text-[10px] font-mono tracking-wider shrink-0 mt-0.5 px-1.5 py-0.5 rounded-sm ${item.status === "In Progress" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                {item.status.toUpperCase()}
              </span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{item.phase}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
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