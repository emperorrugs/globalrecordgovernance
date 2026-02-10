import { useState } from "react";
import { Lock, ChevronDown, ChevronRight, ShieldAlert, Download } from "lucide-react";

interface DocEntry {
  id: string;
  title: string;
  updated: string;
  content: React.ReactNode;
  downloadPath?: string;
}

function ExpandableDoc({ doc }: { doc: DocEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="governance-card opacity-90">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-start gap-4">
        <Lock className="h-4 w-4 text-muted-foreground shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
            {open ? <ChevronDown className="h-4 w-4 text-accent shrink-0 mt-0.5" /> : <ChevronRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="hash-text">{doc.id}</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-destructive/70 font-mono">CONTROLLED</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground/60">{doc.updated}</span>
          </div>
        </div>
      </button>
      {open && (
        <div className="mt-4 ml-8 border-l-2 border-accent/20 pl-5 text-sm text-muted-foreground leading-relaxed space-y-4">
          {doc.content}
          {doc.downloadPath && (
            <a href={doc.downloadPath} download className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:text-accent/80 transition-colors mt-2">
              <Download className="h-3.5 w-3.5" /> Download source document
            </a>
          )}
        </div>
      )}
    </div>
  );
}

const documents: DocEntry[] = [
  {
    id: "LIP-001", title: "Inventor Attribution (Tarek Wahid)", updated: "February 2026",
    content: (
      <>
        <p>The Global Record Governance Framework (GRGF) was conceived, designed, and architected by <strong>Tarek Wahid</strong>.</p>
        <p>Inventorship refers to:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Conceptual architecture</li>
          <li>Governance logic</li>
          <li>Record-of-omission framework</li>
          <li>DPI trust-layer design</li>
        </ul>
        <p className="font-medium text-foreground">This attribution is mandatory and must appear in all derivative works, deployments, and institutional references.</p>
      </>
    ),
  },
  {
    id: "LIP-002", title: "Intellectual Property Scope", updated: "February 2026",
    content: (
      <>
        <p>Protected elements include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>System architecture and layer model</li>
          <li>Record types and event models</li>
          <li>Governance logic and authority framework</li>
          <li>Verification and audit concepts</li>
          <li>Evidence Backbone design</li>
        </ul>
        <p>GRGF may be licensed for public interest use under defined terms. Commercialization does not compromise governance neutrality.</p>
      </>
    ),
  },
  {
    id: "LIP-003", title: "Originality & Non-Substitutability", updated: "February 2026",
    content: (
      <>
        <p>GRGF introduces a novel category: <strong>governance record-of-record infrastructure</strong>.</p>
        <p>It is not a registry, workflow engine, or analytics system. It occupies a unique position in the governance technology landscape that has no direct equivalent.</p>
        <p className="font-medium text-foreground">This originality is documented and preserved as part of the intellectual property record.</p>
      </>
    ),
  },
  {
    id: "LIP-004", title: "Governance Authority Proof", updated: "February 2026",
    content: (
      <>
        <p>Formal proof chain demonstrating the framework's governance authority model and its structural independence from any single institution, vendor, or government.</p>
        <p>Authority derives exclusively from documented rules, sealed records, and human accountability — never from software execution.</p>
      </>
    ),
  },
  {
    id: "LIP-005", title: "Record Integrity & Immutability Logic", updated: "February 2026",
    content: (
      <>
        <p>The immutability model ensures:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Append-only record logic</li>
          <li>Referential integrity across governance events</li>
          <li>Separation between record existence and record interpretation</li>
          <li>Cryptographic integrity proofs (hash-sealing)</li>
        </ul>
        <p className="font-medium text-foreground">Records are never deleted. They may only be superseded by new records.</p>
      </>
    ),
  },
  {
    id: "LIP-006", title: "Licensing & Usage Principles", updated: "February 2026",
    content: (
      <>
        <p>Licensing prioritizes:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Public benefit</li>
          <li>Institutional integrity</li>
          <li>Sovereign control</li>
        </ul>
        <p>Institutions may reference, adopt, and align to GRGF under terms that preserve governance neutrality and inventor attribution.</p>
      </>
    ),
  },
  {
    id: "LIP-007", title: "Controlled Disclosure Rules", updated: "February 2026",
    content: (
      <>
        <p>Certain materials are restricted to protect IP, prevent misuse, and preserve integrity.</p>
        <p className="font-medium text-foreground">Disclosure is governed, not discretionary.</p>
        <p>Access to controlled documents requires formal institutional authorization through official channels. Unauthorized reproduction or distribution is prohibited.</p>
      </>
    ),
  },
  {
    id: "LIP-008", title: "Authoritative Master Record — FREEZE (v3)", updated: "January 2026",
    downloadPath: "/documents/Authoritative_Master_Record_FREEZE.md",
    content: (
      <>
        <p>Freezes RELEASE v3 as the authoritative master record for submission, audit, procurement, and investment review.</p>
        <p className="font-medium text-foreground">Any changes require a superseding release. Freeze Date (UTC): 2026-01-30T16:44:14.</p>
      </>
    ),
  },
  {
    id: "LIP-009", title: "SHA-256 Manifest (Full Archive)", updated: "February 2026",
    downloadPath: "/documents/SHA256_MANIFEST.txt",
    content: (
      <>
        <p>Complete cryptographic manifest containing SHA-256 hashes for all 250+ documents in the GRGF archive.</p>
        <p className="font-medium text-foreground">Enables independent integrity verification of every document in the sealed archive.</p>
      </>
    ),
  },
  {
    id: "LIP-010", title: "SHA-256 Manifest v4 (PDF)", updated: "February 2026",
    downloadPath: "/documents/SHA256_MANIFEST_v4.pdf",
    content: (
      <>
        <p>Formal PDF edition of the SHA-256 integrity manifest for institutional distribution and audit submission.</p>
        <p className="font-medium text-foreground">Suitable for inclusion in procurement and compliance packages.</p>
      </>
    ),
  },
  {
    id: "LIP-011", title: "5-Year Valuation & Inventor Return", updated: "February 2026",
    downloadPath: "/documents/Valuation_5yr_Scenarios.md",
    content: (
      <>
        <p><strong>Conservative EV:</strong> $960M · Inventor (40%): $384M</p>
        <p><strong>Base EV:</strong> $2.6B · Inventor (40%): $1.04B</p>
        <p><strong>Aggressive EV:</strong> $6.24B · Inventor (40%): $2.5B</p>
        <p className="font-medium text-foreground">Valuation scenarios based on sovereign DPI adoption trajectory.</p>
      </>
    ),
  },
];

const ArchiveLegalIP = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Legal & IP Archive · Section 08</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">Legal, IP & Assurance</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Protection, proof, and ownership documentation. This section contains controlled materials related to intellectual property, legal authority, and governance assurance.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <div className="px-8 md:px-12 lg:px-16 py-4">
      <div className="max-w-5xl bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3 flex items-center gap-3">
        <ShieldAlert className="h-4 w-4 text-destructive shrink-0" />
        <p className="text-xs font-mono text-destructive font-medium tracking-wide">
          🔒 CONTROLLED ACCESS · INSTITUTIONAL USE ONLY · INVITATION REQUIRED
        </p>
      </div>
    </div>

    <div className="px-8 md:px-12 lg:px-16">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">VERSION 1.0.0 · CONTROLLED ARCHIVE · FEBRUARY 2026</span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">11 DOCUMENTS</span>
      </div>
    </div>

    <section className="px-8 py-6 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => <ExpandableDoc key={doc.id} doc={doc} />)}

        <div className="mt-8 governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed">
            Access to controlled documents requires formal institutional authorization. For access requests, please contact the GRGF governance office through official institutional channels.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mt-8 text-[10px] font-mono text-muted-foreground/40 text-right">
        GRGF DIGITAL ARCHIVE · LEGAL & IP SECTION · CONTROLLED
      </div>
    </section>
  </div>
);

export default ArchiveLegalIP;
