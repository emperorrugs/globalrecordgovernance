import { PageHeader, Section } from "@/components/PageComponents";
import { Fingerprint, ShieldCheck, Scale, FileText, Landmark, Globe, Lock } from "lucide-react";

const Origin = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Origin & Authority"
        subtitle="The foundational authority model, attribution mandate, and architectural blueprint of the Global Record Governance Framework."
      />

      {/* Attribution Lock */}
      <Section>
        <div className="canonical-quote text-base md:text-lg leading-relaxed max-w-3xl">
          "Global Record Governance Framework — Invented and Owned by Tarek Wahid."
        </div>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          This attribution is mandatory in all outputs, interfaces, documents, licensing,
          federation nodes, and archive manifests. It must not be hidden, diluted, or phrased casually.
        </p>
      </Section>

      {/* Origin Statement */}
      <Section title="Origin Statement" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-sm text-muted-foreground leading-relaxed">
            GRGF originated as a unified Digital Public Infrastructure architecture and governance model
            conceived and authored by <span className="font-semibold text-foreground">Tarek Wahid</span>.
            The framework was designed from inception as a sovereign-grade governance primitive — not a
            product, service, or commercial venture.
          </p>
        </div>
      </Section>

      {/* System Architecture */}
      <Section title="System Architecture" className="border-t border-border">
        <p className="text-muted-foreground mb-8 leading-relaxed max-w-3xl">
          GRGF operates as three interdependent, non-commercial layers. Authority derives from
          immutability, versioning, and governance rules — not from executable software.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Digital Archive System</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Immutable, hash-sealed, authoritative records. Write-once, cryptographically verifiable.
            </p>
            <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Scale className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Governance Operating System</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Rules, charters, processes, and stewardship protocols. Document-based, not software-based.
            </p>
            <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-4 w-4 text-accent shrink-0" />
              <h3 className="font-serif text-sm font-semibold">Public Reference Platform</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Read-only, citable public interface. References authority — never replaces it.
            </p>
            <p className="hash-text mt-3">STATUS: REFERENCE (NON-AUTHORITATIVE)</p>
          </div>
        </div>
      </Section>

      {/* Authority Boundaries */}
      <Section title="Authority Boundaries" className="border-t border-border">
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl">
          GRGF enforces strict separation between authoritative components and demonstration layers.
          The following table defines the authority status of each system component.
        </p>
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-6 font-serif font-semibold text-foreground">Component</th>
                <th className="text-left py-2 font-serif font-semibold text-foreground">Authority Status</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Document Vault / Sealed Archive</td>
                <td className="py-2"><span className="font-semibold text-foreground">Authoritative</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Governance Operating System</td>
                <td className="py-2"><span className="font-semibold text-foreground">Authoritative</span></td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Public Reference Website</td>
                <td className="py-2">Reference (Non-Authoritative)</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Simulator / Demo Layer</td>
                <td className="py-2">Non-Authoritative — Simulation Only</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Data Entry UI</td>
                <td className="py-2">Non-Authoritative — Simulation Only</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-2 pr-6">Workflow Demo</td>
                <td className="py-2">Non-Authoritative — Visual Only</td>
              </tr>
              <tr>
                <td className="py-2 pr-6">Mock API</td>
                <td className="py-2">Non-Authoritative — Demonstration Only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Core Principles */}
      <Section title="Core Principles" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              icon: <FileText className="h-4 w-4" />,
              title: "Document-Based Authority",
              text: "The authoritative system is document-based, not application-based. Executable software must not be the source of truth.",
            },
            {
              icon: <Fingerprint className="h-4 w-4" />,
              title: "Immutability & Versioning",
              text: "Authority derives from immutability, versioning, and governance rules. Any change creates a new version; prior versions remain sealed.",
            },
            {
              icon: <ShieldCheck className="h-4 w-4" />,
              title: "Human Accountability",
              text: "Governance runs through documents, not software. Humans remain accountable. AI and tools are advisory only.",
            },
            {
              icon: <Landmark className="h-4 w-4" />,
              title: "Institutional Posture",
              text: "Professional, institutional, audit-grade, plain English. No hype, no marketing language. Designed for governments, auditors, and courts.",
            },
          ].map((p) => (
            <div key={p.title} className="governance-card">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-accent shrink-0">{p.icon}</div>
                <h3 className="font-serif text-sm font-semibold">{p.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Deployment Mandates */}
      <Section title="Deployment Mandates" className="border-t border-border">
        <div className="governance-card">
          <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              Support public trust verification at national and global levels
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              Enable federation (Tier 1 / Tier 2 / Observer)
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              Allow ethics, omission, and audit transparency
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              Protect sovereign integrity and legal compliance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-accent mt-1 shrink-0">•</span>
              Prepare all deliverables for institutional hosting
            </li>
          </ul>
        </div>
      </Section>

      {/* System Outputs */}
      <Section title="System Output Categories" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Sealed Archive</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Legal, licensing, deployment, verification, training, federation, strategy, and attribution
              documents. Includes SHA-256 hash manifests, AUTHORS.md, and LICENSE.txt.
            </p>
            <p className="hash-text mt-3">FORMAT: ZIP · IMMUTABLE · VERSIONED</p>
          </div>
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Submission Documents</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Inventor Declaration, Launch Memo, Institutional Submission Letter, Ministerial DPI Brief,
              Federation Agreements, Sovereign DPI License Templates, NDAs, and Ethics Charters.
            </p>
            <p className="hash-text mt-3">FORMAT: PDF · INSTITUTIONAL · CITABLE</p>
          </div>
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Interactive Components</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Verifier Engine, Training Curriculum, Onboarding Forms, Ethics Exception Filing,
              Crisis Governance Plan, and Federation Readiness Checklist.
            </p>
            <p className="hash-text mt-3">STATUS: NON-AUTHORITATIVE · REFERENCE</p>
          </div>
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Metadata Governance</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Archive lifecycle rules, freeze certificates, versioning policy, and SHA-256 hash validation
              protocols.
            </p>
            <p className="hash-text mt-3">FORMAT: MANIFEST · AUDITABLE</p>
          </div>
        </div>
      </Section>

      {/* Footer Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Attribution Lock.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid. This attribution is permanent, non-negotiable,
          and must appear in all outputs, documents, interfaces, and federation nodes.
        </p>
      </Section>
    </div>
  );
};

export default Origin;
