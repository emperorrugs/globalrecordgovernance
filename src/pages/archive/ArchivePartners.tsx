import { FileText, ChevronRight } from "lucide-react";

const documents = [
  { id: "PTR-001", title: "Functional Modules Overview", desc: "A structured overview of the framework's logical modules and their governance responsibilities.", updated: "February 2026" },
  { id: "PTR-002", title: "System Interaction Diagrams", desc: "Conceptual diagrams showing how governance components interact across the three-layer architecture.", updated: "February 2026" },
  { id: "PTR-003", title: "Record Lifecycle Logic", desc: "Detailed documentation of the five-stage record lifecycle: Proposal → Record → Seal → Audit → Revision.", updated: "February 2026" },
  { id: "PTR-004", title: "Verification Hooks", desc: "Integration points for independent verification systems to validate governance record integrity.", updated: "February 2026" },
  { id: "PTR-005", title: "Interoperability Principles", desc: "Design principles for ensuring GRGF can operate alongside diverse national and institutional systems.", updated: "February 2026" },
  { id: "PTR-006", title: "Future API / Integration Concepts", desc: "Forward-looking integration concepts for governance-aware APIs and system interoperability.", updated: "February 2026" },
  { id: "PTR-007", title: "Sandbox & Pilot References", desc: "Reference materials for institutions running sandbox evaluations or controlled pilot deployments.", updated: "February 2026" },
];

const ArchivePartners = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Partner Archive</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          Partners & System Integrators
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Technical readiness materials for implementers, vendors, and integration partners. Documentation is abstracted to protect intellectual property while providing sufficient detail for evaluation and planning.
        </p>
        <p className="hash-text mt-4">ACCESS: PARTNER · TECHNICAL · NO SOURCE CODE OR TRADE SECRETS</p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <section className="px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {documents.map((doc) => (
          <div key={doc.id} className="governance-card">
            <div className="flex items-start gap-4">
              <FileText className="h-4 w-4 text-accent shrink-0 mt-1" />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mt-0.5" />
                </div>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{doc.desc}</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="hash-text">{doc.id}</span>
                  <span className="text-muted-foreground/30">·</span>
                  <span className="text-[10px] text-muted-foreground/60">Last updated: {doc.updated}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default ArchivePartners;
