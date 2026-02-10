import { useState } from "react";
import { FileText, ChevronDown, ChevronRight } from "lucide-react";

interface DocEntry {
  id: string;
  title: string;
  section: string;
  updated: string;
  content: React.ReactNode;
}

function ExpandableDoc({ doc }: { doc: DocEntry }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="governance-card">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-start gap-4">
        <FileText className="h-4 w-4 text-accent shrink-0 mt-1" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-mono text-accent/60 tracking-wider mb-0.5">{doc.section}</p>
              <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
            </div>
            {open ? <ChevronDown className="h-4 w-4 text-accent shrink-0 mt-0.5" /> : <ChevronRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />}
          </div>
          <div className="mt-2 flex items-center gap-3">
            <span className="hash-text">{doc.id}</span>
            <span className="text-muted-foreground/30">·</span>
            <span className="text-[10px] text-muted-foreground/60">Last updated: {doc.updated}</span>
          </div>
        </div>
      </button>
      {open && (
        <div className="mt-4 ml-8 border-l-2 border-accent/20 pl-5 text-sm text-muted-foreground leading-relaxed space-y-4">
          {doc.content}
        </div>
      )}
    </div>
  );
}

const documents: DocEntry[] = [
  {
    id: "PTR-001", title: "Functional Modules Overview", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>GRGF's architecture comprises four core functional layers, each with clearly defined governance responsibilities:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Event Normalization Layer</strong> — Translates real-world institutional actions and omissions into structured governance events.</li>
          <li><strong>Authority Context Layer</strong> — Captures who acted, under what mandate, at what time, and with what scope.</li>
          <li><strong>Record Layer</strong> — Stores immutable representations of events without interpretation or scoring.</li>
          <li><strong>Verification Layer</strong> — Enables independent confirmation that a record exists, or does not exist.</li>
        </ol>
        <p className="font-medium text-foreground">Each layer is architecturally independent and can be evaluated or audited separately.</p>
      </>
    ),
  },
  {
    id: "PTR-002", title: "System Interaction Diagrams", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>GRGF sits above operational systems, beside registries and workflows, and outside political or organizational control.</p>
        <p>Conceptual interaction model:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>External systems generate governance events</li>
          <li>GRGF normalizes and records those events</li>
          <li>Verification interfaces allow independent confirmation</li>
          <li>No data flows back to alter operational systems</li>
        </ul>
        <p className="font-medium text-foreground">GRGF is non-intrusive by design. Systems do not change how they work — they gain verifiability.</p>
      </>
    ),
  },
  {
    id: "PTR-003", title: "Record Lifecycle Logic", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>Every GRGF record follows a defined lifecycle:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Event asserted</li>
          <li>Context normalized</li>
          <li>Authority captured</li>
          <li>Record created or explicitly not created</li>
          <li>Record preserved</li>
          <li>Record verifiable indefinitely</li>
        </ol>
        <p className="font-medium text-foreground">Records are never deleted. They may only be superseded by new records.</p>
      </>
    ),
  },
  {
    id: "PTR-004", title: "Verification Hooks", section: "SECTION 02 — SYSTEM ARCHITECTURE", updated: "February 2026",
    content: (
      <>
        <p>GRGF supports both positive and negative verification:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Positive verification:</strong> confirming a record exists</li>
          <li><strong>Negative verification:</strong> confirming no record exists for a claimed event</li>
        </ul>
        <p>Verification does not expose sensitive content — only existence, scope, and integrity.</p>
        <p>Integration points allow external systems to query record existence without accessing record content.</p>
      </>
    ),
  },
  {
    id: "PTR-005", title: "Interoperability Principles", section: "SECTION 04 — DPI & STANDARDS ALIGNMENT", updated: "February 2026",
    content: (
      <>
        <p>GRGF is designed to integrate with identity systems, procurement platforms, regulatory workflows, and case management systems.</p>
        <p>Design principles:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>System-agnostic — no vendor lock-in</li>
          <li>Non-intrusive integration</li>
          <li>Standards-compatible without being standards-dependent</li>
          <li>Sovereignty-preserving</li>
        </ul>
        <p>GRGF aligns with core DPI principles: universality, interoperability, public value orientation, long-term sustainability, and institutional neutrality.</p>
      </>
    ),
  },
  {
    id: "PTR-006", title: "Future API / Integration Concepts", section: "SECTION 04 — DPI & STANDARDS ALIGNMENT", updated: "February 2026",
    content: (
      <>
        <p>Forward-looking integration concepts include:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Governance-aware event ingestion APIs</li>
          <li>Verification query endpoints</li>
          <li>Authority context attestation services</li>
          <li>Cross-jurisdiction federation protocols</li>
        </ul>
        <p>These concepts are documented for future implementation. Current focus remains on conceptual validation and institutional adoption.</p>
        <p className="font-medium text-foreground">No source code or trade secrets are disclosed in partner materials.</p>
      </>
    ),
  },
  {
    id: "PTR-007", title: "Sandbox & Pilot References", section: "SECTION 05 — DEPLOYMENT MODELS", updated: "February 2026",
    content: (
      <>
        <p>Institutions evaluating GRGF may use the simulation environment for:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Workflow demonstration and staff training</li>
          <li>Governance logic validation</li>
          <li>Integration feasibility assessment</li>
          <li>Institutional readiness evaluation</li>
        </ul>
        <p>Sandbox environments carry no authoritative effect. All simulated records are clearly marked as non-authoritative.</p>
        <p>Pilot deployments follow the incremental adoption model: foundational → expansion → federation stages.</p>
      </>
    ),
  },
];

const ArchivePartners = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Partner Archive · Sections 02, 04, 05</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">Partners & System Integrators</h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Technical readiness materials for implementers, vendors, and integration partners. Documentation is abstracted to protect intellectual property while providing sufficient detail for evaluation and planning.
        </p>
        <p className="hash-text mt-4">ACCESS: PARTNER · TECHNICAL · NO SOURCE CODE OR TRADE SECRETS</p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">VERSION 1.0.0 · AUTHORITATIVE INITIAL ARCHIVE · FEBRUARY 2026</span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">7 DOCUMENTS</span>
      </div>
    </div>

    <section className="px-8 py-6 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => <ExpandableDoc key={doc.id} doc={doc} />)}
      </div>
      <div className="max-w-5xl mt-8 text-[10px] font-mono text-muted-foreground/40 text-right">
        GRGF DIGITAL ARCHIVE · PARTNER SECTION · REFERENCE ONLY
      </div>
    </section>
  </div>
);

export default ArchivePartners;
