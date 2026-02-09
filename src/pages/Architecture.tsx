import { PageHeader, Section } from "@/components/PageComponents";
import { Database, Cpu, Monitor, Hash, FileText, Lock, Cog, Globe } from "lucide-react";

const Architecture = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="System Architecture"
        subtitle="Three interdependent layers — Immutable Digital Archive, Governance Operating System, and Digital Platform."
      />

      <Section>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF operates as three interdependent, non-commercial layers. Authority derives from
          immutability, versioning, and governance rules — not from executable software.
          Each layer serves a distinct function while maintaining strict separation of concerns.
        </p>
      </Section>

      {/* Layer A: Immutable Digital Archive */}
      <Section title="A. Immutable Digital Archive" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The foundational layer. All institutional actions, decisions, transactions, and omissions
          are captured, hash-sealed, and preserved with full cryptographic integrity.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: <Database className="h-4 w-4" />,
              title: "Hash-Sealed ZIP Archives",
              desc: "Every record is packaged as an immutable ZIP archive with SHA-256 integrity proof. Once sealed, no modification is possible by any party.",
            },
            {
              icon: <Hash className="h-4 w-4" />,
              title: "Versioning",
              desc: "All records carry explicit version identifiers. When superseded, prior versions remain sealed and accessible. No version may be deleted or overwritten.",
            },
            {
              icon: <Lock className="h-4 w-4" />,
              title: "Integrity Proof",
              desc: "SHA-256 cryptographic hashes are generated at the point of finalization. Verification is performed by recomputing and comparing the hash against the sealed manifest.",
            },
            {
              icon: <FileText className="h-4 w-4" />,
              title: "Priority Proof",
              desc: "Timestamps and hash chains establish priority — proving when a record was created, sealed, and made available. This supports legal and regulatory proceedings.",
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
        <p className="hash-text mt-4">LAYER STATUS: AUTHORITATIVE · IMMUTABLE · WRITE-ONCE</p>
      </Section>

      {/* Layer B: Governance Operating System */}
      <Section title="B. Governance Operating System" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The rule engine that defines how records are classified, sealed, governed, and stewarded.
          It codifies institutional processes into verifiable, version-controlled governance protocols.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: <FileText className="h-4 w-4" />,
              title: "Charters",
              desc: "Constitutional documents that define the framework's mandate, boundaries, and principles. Immutable once ratified.",
            },
            {
              icon: <Cpu className="h-4 w-4" />,
              title: "Rules & Policies",
              desc: "Operational governance rules covering record classification, access control, retention, and stewardship succession.",
            },
            {
              icon: <Cog className="h-4 w-4" />,
              title: "Decision Authority Logic",
              desc: "Codified rules that define who may seal, classify, or release records. All authority flows from governance documents, not software permissions.",
            },
            {
              icon: <Globe className="h-4 w-4" />,
              title: "Country Adaptation",
              desc: "Sovereign deployment archetypes that allow each country to adapt operational processes while maintaining architectural consistency.",
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
        <p className="hash-text mt-4">LAYER STATUS: AUTHORITATIVE · VERSION-CONTROLLED · AUDITABLE</p>
      </Section>

      {/* Layer C: Digital Platform */}
      <Section title="C. Digital Platform" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The access layer through which governments, courts, auditors, and professionals can
          reference, cite, and verify authoritative records. No write access is provided through
          this interface.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Monitor className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">User Interface</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Read-only, citable public interface for browsing and referencing authoritative records.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Hash className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Verification Tools</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  SHA-256 hash lookup and comparison tools for independent integrity verification.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Cog className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Simulators</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Demo-only tools for understanding governance workflows. Clearly labelled as non-authoritative.
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="hash-text mt-4">LAYER STATUS: REFERENCE · NON-AUTHORITATIVE · READ-ONLY</p>
      </Section>

      {/* Footer */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Design Note.</span> GRGF systems are governance
          infrastructure — not software products. They are described in terms of institutional function,
          not commercial capability. The value of this architecture derives from governance integrity,
          not software features.
        </p>
      </Section>
    </div>
  );
};

export default Architecture;
