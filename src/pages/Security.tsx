import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Lock, Eye, Key, UserCheck, FileText } from "lucide-react";

const Security = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Security & Confidentiality"
        subtitle="Access control, disclosure principles, and owner-controlled governance for sovereign-grade record infrastructure."
      />

      {/* Controlled Access */}
      <Section title="Controlled Access">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF implements governance-defined access control at every layer. Access is not determined
          by software permissions alone — it flows from governance documents, stewardship mandates,
          and institutional agreements.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: <Lock className="h-4 w-4" />,
              title: "Archive Access",
              desc: "Sealed records are accessible only to parties with governance-defined authorisation. Public hash manifests allow integrity verification without content access.",
            },
            {
              icon: <Key className="h-4 w-4" />,
              title: "Role-Based Authority",
              desc: "Stewards, auditors, and institutional users operate under defined access tiers. Each role's permissions are documented in the Governance Operating System.",
            },
            {
              icon: <UserCheck className="h-4 w-4" />,
              title: "Access Logging",
              desc: "All access events — including denied access attempts — are logged and sealed as governance records. Audit trails are immutable.",
            },
            {
              icon: <Eye className="h-4 w-4" />,
              title: "Separation of Access",
              desc: "Content access, metadata access, and verification access are structurally separated. Public verification does not require content access.",
            },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="text-accent shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Disclosure Principles */}
      <Section title="Disclosure Principles" className="border-t border-border">
        <div className="space-y-3">
          {[
            "Records are disclosed only in accordance with governance rules and institutional agreements.",
            "No record may be disclosed to override, circumvent, or influence an ongoing governance process.",
            "Public access is limited to hash manifests, record identifiers, and integrity verification tools.",
            "Full content disclosure requires authorised institutional request through defined channels.",
            "Disclosure events are themselves recorded and sealed as governance records.",
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Owner-Controlled Governance */}
      <Section title="Owner-Controlled Governance" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                GRGF is structurally owner-controlled. The framework's governance rules, access
                policies, and stewardship mandates are defined and maintained by the framework's
                governance authority — not by technology vendors, hosting providers, or third-party
                service operators.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This ensures that security and confidentiality decisions are made within the
                governance framework, not delegated to infrastructure suppliers. Technology
                providers operate as infrastructure suppliers under defined terms — they do not
                participate in governance decisions.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Integrity Guarantees */}
      <Section title="Integrity Guarantees" className="border-t border-border">
        <div className="governance-card">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "All records are write-once and cannot be modified after sealing by any party, including the origin authority.",
              "Cryptographic integrity proofs (SHA-256) are generated at seal time and published in the public manifest.",
              "Version control ensures no record is overwritten — superseded versions remain sealed and accessible.",
              "Archive integrity is independently verifiable without requiring trust in any single party.",
              "Emergency access procedures are governed by pre-defined protocols, not ad hoc decisions.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Footer */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <FileText className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
            Framework — Invented and Owned by Tarek Wahid.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Security;
