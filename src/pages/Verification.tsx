import { PageHeader, Section } from "@/components/PageComponents";
import { ShieldCheck, Search, Lock, Eye, EyeOff, Hash } from "lucide-react";
import { HashVerifier } from "@/components/HashVerifier";

const sampleRecords = [
  {
    id: "GRGF-2024-0001",
    title: "Framework Constitution v1.0",
    sealed: "2024-01-15T00:00:00Z",
    hash: "a7f3c2d1e8b4f6a9c3d5e7f1a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8",
    status: "SEALED",
  },
  {
    id: "GRGF-2024-0002",
    title: "Governance Protocol — Stewardship Rules",
    sealed: "2024-02-01T00:00:00Z",
    hash: "b8e4d3c2f1a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5",
    status: "SEALED",
  },
];

const Verification = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Verification"
        subtitle="How record integrity is established, maintained, and independently verified within GRGF."
      />

      {/* How Verification Works */}
      <Section title="How Verification Works">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
          GRGF verification is based on SHA-256 cryptographic hashing. Every sealed record
          carries an integrity proof that can be independently recomputed and compared by any party.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "Record Sealed",
              desc: "The record content is finalized and a SHA-256 hash is computed over the complete archive.",
              icon: <Lock className="h-4 w-4" />,
            },
            {
              step: "02",
              title: "Hash Published",
              desc: "The hash is recorded in the public manifest alongside the record identifier and seal timestamp.",
              icon: <Hash className="h-4 w-4" />,
            },
            {
              step: "03",
              title: "Independent Verification",
              desc: "Any party can recompute the hash of the record and compare it against the published manifest entry.",
              icon: <Search className="h-4 w-4" />,
            },
          ].map((item) => (
            <div key={item.step} className="governance-card">
              <div className="flex items-center gap-3 mb-3">
                <span className="hash-text text-accent">{item.step}</span>
                <div className="text-accent shrink-0">{item.icon}</div>
              </div>
              <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What Can and Cannot Be Verified */}
      <Section title="Verification Scope" className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <Eye className="h-4 w-4 text-accent" />
              <h3 className="font-serif text-sm font-semibold">Can Be Verified</h3>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              {[
                "Record integrity — whether content has been altered since sealing",
                "Seal timestamp — when the record was finalized",
                "Version lineage — the complete version history of a record",
                "Archive completeness — whether the manifest is consistent",
                "Hash authenticity — whether the published hash matches the content",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <ShieldCheck className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="governance-card border-l-2 border-l-border">
            <div className="flex items-center gap-3 mb-3">
              <EyeOff className="h-4 w-4 text-muted-foreground" />
              <h3 className="font-serif text-sm font-semibold">Cannot Be Verified Through GRGF</h3>
            </div>
            <ul className="space-y-2 text-xs text-muted-foreground leading-relaxed">
              {[
                "Factual accuracy — GRGF records facts as stated, not truth",
                "Legal validity — evidentiary status is determined by courts",
                "Policy compliance — GRGF does not enforce or monitor compliance",
                "Institutional intent — motives behind recorded actions or omissions",
                "External system state — GRGF does not verify third-party systems",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-muted-foreground/40 shrink-0 mt-0.5">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Access Levels */}
      <Section title="Public vs Authorised Access" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Public Access</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Hash manifests, record identifiers, seal timestamps, and integrity verification
              tools are publicly available. Any party can verify record integrity without
              special access or credentials.
            </p>
            <p className="hash-text mt-3">ACCESS: OPEN · NO CREDENTIALS REQUIRED</p>
          </div>
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">Authorised Access</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Full record content, including classified or restricted materials, is available
              only to authorised parties under governance-defined access rules. Access is
              logged, auditable, and subject to stewardship review.
            </p>
            <p className="hash-text mt-3">ACCESS: CONTROLLED · GOVERNANCE-DEFINED</p>
          </div>
        </div>
      </Section>

      {/* Verify Tool */}
      <Section title="Verify Record Integrity" className="border-t border-border">
        <HashVerifier records={sampleRecords} />
      </Section>

      {/* Footer */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default Verification;
