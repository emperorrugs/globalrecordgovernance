import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Hash, ShieldCheck } from "lucide-react";

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

      <Section title="Record Integrity">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          All records in the GRGF Archive are hash-sealed at the point of finalization.
          Each record carries a SHA-256 integrity proof that can be independently verified.
          Records are immutable once sealed — no modification, deletion, or reinterpretation is possible.
        </p>

        <div className="governance-card flex items-start gap-3 mb-8">
          <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Integrity verification is performed by computing the SHA-256 hash of the record
            content and comparing it against the sealed hash. A match confirms the record
            has not been altered since sealing.
          </p>
        </div>
      </Section>

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
    </div>
  );
};

export default ArchivePage;
