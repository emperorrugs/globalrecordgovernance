import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, ShieldCheck, Lock, Hash, FileCheck } from "lucide-react";
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
  {
    id: "GRGF-2024-0003",
    title: "Record Classification Taxonomy v1.0",
    sealed: "2024-03-10T00:00:00Z",
    hash: "c9f5e4d3a2b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6",
    status: "SEALED",
  },
];

const ArchivePage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Archive"
        subtitle="Authoritative records, integrity proofs, and cryptographic hash verification."
      />

      {/* Integrity Declaration */}
      <Section title="Integrity Declaration">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                All records in the GRGF Archive are authoritative, hash-sealed, and immutable.
                Each record carries a SHA-256 cryptographic integrity proof generated at the point
                of finalization. Once sealed, no record may be altered, deleted, reinterpreted,
                or retroactively modified by any party, including the origin authority.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Integrity verification is performed by computing the SHA-256 hash of the record
                content and comparing it against the sealed hash. A match confirms the record
                has not been altered since sealing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Public Reference Lock */}
      <Section title="Public Reference Lock" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                This archive operates under a Public Reference Lock. All records published to this
                platform are in their final, sealed state and are available for citation, audit,
                and independent verification. No editing, annotation, or commentary is permitted
                within the archive itself.
              </p>
              <p className="hash-text mt-3">STATUS: PUBLIC REFERENCE LOCK · READ-ONLY · IMMUTABLE</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Hash Manifest */}
      <Section title="Hash Manifest" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          The hash manifest provides a complete, verifiable index of all sealed records
          and their corresponding SHA-256 integrity proofs. This manifest is itself
          subject to periodic hash-sealing.
        </p>
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-xs font-mono">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-accent/70 font-medium">RECORD ID</th>
                <th className="text-left py-2 pr-4 text-accent/70 font-medium">SEALED</th>
                <th className="text-left py-2 pr-4 text-accent/70 font-medium">STATUS</th>
                <th className="text-left py-2 text-accent/70 font-medium">SHA-256</th>
              </tr>
            </thead>
            <tbody>
              {sampleRecords.map((r) => (
                <tr key={r.id} className="border-b border-border/50 last:border-0">
                  <td className="py-2 pr-4 text-foreground">{r.id}</td>
                  <td className="py-2 pr-4 text-muted-foreground">
                    {new Date(r.sealed).toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}
                  </td>
                  <td className="py-2 pr-4">
                    <span className="bg-accent/10 text-accent px-1.5 py-0.5 rounded-sm text-[10px]">
                      {r.status}
                    </span>
                  </td>
                  <td className="py-2 text-muted-foreground break-all">{r.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Verify */}
      <Section title="Verify Record Integrity" className="border-t border-border">
        <HashVerifier records={sampleRecords} />
      </Section>

      {/* Record Detail */}
      <Section title="Sealed Records" className="border-t border-border">
        <div className="space-y-4">
          {sampleRecords.map((r) => (
            <div key={r.id} className="governance-card">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 min-w-0">
                  <FileText className="h-4 w-4 text-accent shrink-0 mt-1" />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="hash-text">{r.id}</span>
                      <span className="text-[10px] font-mono bg-accent/10 text-accent px-1.5 py-0.5 rounded-sm">
                        {r.status}
                      </span>
                    </div>
                    <h3 className="font-serif text-sm font-semibold mt-1">{r.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Sealed: {new Date(r.sealed).toLocaleDateString("en-GB", { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <p className="text-[10px] font-mono text-muted-foreground break-all">
                  <span className="text-accent/70">SHA-256:</span> {r.hash}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Versioning */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <FileCheck className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Archive Versioning.</span> All records
            carry explicit version identifiers (e.g., v1.0). When a record is superseded, the
            previous version remains sealed and accessible. The current authoritative version
            is always clearly designated. No version may be deleted or overwritten.
          </p>
        </div>
      </Section>

      {/* Origin Authority */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          <span className="font-semibold text-foreground">Origin Authority.</span> GRGF originated
          as a unified Digital Public Infrastructure architecture and governance model conceived
          and authored by Tarek Wahid. This archive preserves the authoritative record of that
          origin as an immutable governance fact.
        </p>
      </Section>
    </div>
  );
};

export default ArchivePage;
