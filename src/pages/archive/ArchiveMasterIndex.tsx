import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface IndexItem {
  id: string;
  title: string;
  restricted?: boolean;
}

interface IndexSection {
  code: string;
  title: string;
  items: IndexItem[];
}

const masterIndex: IndexSection[] = [
  {
    code: "00", title: "Archive Control",
    items: [
      { id: "AC-001", title: "Archive Master Index" },
      { id: "AC-002", title: "Version History & Change Log" },
      { id: "AC-003", title: "Document Classification Rules" },
      { id: "AC-004", title: "Archive Integrity Statement" },
    ],
  },
  {
    code: "01", title: "Vision & Foundations",
    items: [
      { id: "VF-001", title: "GRGF Vision & Purpose" },
      { id: "VF-002", title: "Governance Philosophy" },
      { id: "VF-003", title: "DPI Trust Layer Concept" },
      { id: "VF-004", title: "Ethical & Institutional Rationale" },
    ],
  },
  {
    code: "02", title: "System Architecture",
    items: [
      { id: "SA-001", title: "Global Architecture Overview" },
      { id: "SA-002", title: "Record Types & Event Models" },
      { id: "SA-003", title: "Evidence Backbone (Conceptual)" },
      { id: "SA-004", title: "Verification & Audit Logic" },
      { id: "SA-005", title: "Record Lifecycle" },
    ],
  },
  {
    code: "03", title: "Governance & Policy",
    items: [
      { id: "GP-001", title: "Authority Model" },
      { id: "GP-002", title: "Accountability Framework" },
      { id: "GP-003", title: "Oversight & Stewardship" },
      { id: "GP-004", title: "Transparency Boundaries" },
    ],
  },
  {
    code: "04", title: "DPI & Standards Alignment",
    items: [
      { id: "DS-001", title: "DPI Principles Mapping" },
      { id: "DS-002", title: "Governance Best Practices" },
      { id: "DS-003", title: "Audit & Compliance Logic" },
      { id: "DS-004", title: "Interoperability Framework" },
    ],
  },
  {
    code: "05", title: "Deployment Models",
    items: [
      { id: "DM-001", title: "National Deployment Scenarios" },
      { id: "DM-002", title: "Incremental Adoption" },
      { id: "DM-003", title: "Low-Capacity Contexts" },
      { id: "DM-004", title: "Advanced Digital States" },
    ],
  },
  {
    code: "06", title: "Use Cases",
    items: [
      { id: "UC-001", title: "Public Procurement" },
      { id: "UC-002", title: "Regulation & Licensing" },
      { id: "UC-003", title: "Courts & Oversight" },
      { id: "UC-004", title: "Multilateral Programs" },
      { id: "UC-005", title: "Crisis Governance" },
    ],
  },
  {
    code: "07", title: "Value & Impact",
    items: [
      { id: "VI-001", title: "Public Value Creation" },
      { id: "VI-002", title: "Cost Reduction Logic" },
      { id: "VI-003", title: "Fraud Prevention" },
      { id: "VI-004", title: "Institutional Trust Impact" },
    ],
  },
  {
    code: "08", title: "Legal & IP",
    items: [
      { id: "LI-001", title: "Inventor Attribution", restricted: true },
      { id: "LI-002", title: "IP Registry", restricted: true },
      { id: "LI-003", title: "Originality Proof", restricted: true },
      { id: "LI-004", title: "Licensing Principles", restricted: true },
    ],
  },
  {
    code: "09", title: "Appendices",
    items: [
      { id: "AP-001", title: "Glossary" },
      { id: "AP-002", title: "Terminology" },
      { id: "AP-003", title: "Reference Models" },
      { id: "AP-004", title: "Roadmap" },
    ],
  },
];

function SectionBlock({ section }: { section: IndexSection }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border border-border rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-5 py-3.5 bg-card hover:bg-muted/50 transition-colors text-left"
      >
        {open ? <ChevronDown className="h-3.5 w-3.5 text-accent shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
        <span className="font-mono text-xs text-accent/70 shrink-0">SECTION {section.code}</span>
        <span className="font-serif text-sm font-semibold">{section.title}</span>
        <span className="ml-auto text-[10px] text-muted-foreground/50 font-mono">{section.items.length} DOCS</span>
      </button>
      {open && (
        <div className="border-t border-border divide-y divide-border/50">
          {section.items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 px-5 py-2.5 hover:bg-muted/30 transition-colors">
              {item.restricted ? (
                <Lock className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />
              ) : (
                <FileText className="h-3.5 w-3.5 text-accent/60 shrink-0" />
              )}
              <span className="hash-text shrink-0 w-14">{item.id}</span>
              <span className={cn("text-xs", item.restricted ? "text-muted-foreground/60" : "text-foreground")}>
                {item.title}
              </span>
              {item.restricted && (
                <span className="ml-auto text-[9px] font-mono text-destructive/60 tracking-wider">RESTRICTED</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const ArchiveMasterIndex = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Master Index</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          GRGF Digital Archive — Master Index
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Complete index of all governance documents, architectures, policies, and reference materials within the GRGF Digital Archive. Documents are organized by section and numbered for institutional reference.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <section className="px-8 py-10 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {masterIndex.map((section) => (
          <SectionBlock key={section.code} section={section} />
        ))}

        <div className="mt-8 flex items-center justify-between text-[10px] font-mono text-muted-foreground/50">
          <span>TOTAL: {masterIndex.reduce((sum, s) => sum + s.items.length, 0)} DOCUMENTS · 10 SECTIONS</span>
          <span>LAST UPDATED: FEBRUARY 2026</span>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveMasterIndex;
