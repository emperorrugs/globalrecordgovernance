import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Lock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface IndexItem {
  id: string;
  title: string;
  restricted?: boolean;
}

interface IndexSection {
  code: string;
  title: string;
  link: string;
  items: IndexItem[];
}

const masterIndex: IndexSection[] = [
  {
    code: "00", title: "Archive Control", link: "/archive",
    items: [
      { id: "AC-001", title: "Archive Master Index" },
      { id: "AC-002", title: "Version History & Change Log" },
      { id: "AC-003", title: "Document Classification Rules" },
      { id: "AC-004", title: "Archive Integrity Statement" },
    ],
  },
  {
    code: "01", title: "Vision & Foundations", link: "/archive/public",
    items: [
      { id: "VF-001", title: "GRGF Vision & Purpose" },
      { id: "VF-002", title: "Governance Philosophy" },
      { id: "VF-003", title: "DPI Trust Layer Concept" },
      { id: "VF-004", title: "Actions & Omissions Framework" },
      { id: "VF-005", title: "Ethical & Institutional Rationale" },
    ],
  },
  {
    code: "02", title: "System Architecture", link: "/archive/government",
    items: [
      { id: "SA-001", title: "Global Architecture Overview" },
      { id: "SA-002", title: "Record Types & Event Models" },
      { id: "SA-003", title: "Evidence Backbone (Conceptual)" },
      { id: "SA-004", title: "Verification & Audit Logic" },
      { id: "SA-005", title: "Record Lifecycle" },
    ],
  },
  {
    code: "03", title: "Governance & Policy", link: "/archive/government",
    items: [
      { id: "GP-001", title: "Governance Authority Model" },
      { id: "GP-002", title: "Decision, Action & Omission Framework" },
      { id: "GP-003", title: "Accountability Mapping" },
      { id: "GP-004", title: "Oversight & Stewardship" },
      { id: "GP-005", title: "Transparency Boundaries" },
    ],
  },
  {
    code: "04", title: "DPI & Standards Alignment", link: "/archive/government",
    items: [
      { id: "DS-001", title: "DPI Principles Alignment" },
      { id: "DS-002", title: "Governance & Standards Mapping" },
      { id: "DS-003", title: "Audit & Compliance Framework" },
      { id: "DS-004", title: "Interoperability Framework" },
      { id: "DS-005", title: "Risk & Safeguards" },
    ],
  },
  {
    code: "05", title: "Deployment Models", link: "/archive/government",
    items: [
      { id: "DM-001", title: "National Deployment Scenarios" },
      { id: "DM-002", title: "Incremental Adoption" },
      { id: "DM-003", title: "Low-Capacity Country Model" },
      { id: "DM-004", title: "Advanced Digital State Model" },
      { id: "DM-005", title: "Cross-Border & Multilateral Integration" },
    ],
  },
  {
    code: "06", title: "Use Cases", link: "/archive/government",
    items: [
      { id: "UC-001", title: "Public Procurement" },
      { id: "UC-002", title: "Regulatory Decisions" },
      { id: "UC-003", title: "Courts & Oversight" },
      { id: "UC-004", title: "Multilateral Programs" },
      { id: "UC-005", title: "Crisis Governance" },
    ],
  },
  {
    code: "07", title: "Value & Impact", link: "/archive/government",
    items: [
      { id: "VI-001", title: "Public Value Creation" },
      { id: "VI-002", title: "Fraud Reduction & Efficiency" },
      { id: "VI-003", title: "Cost–Benefit Logic" },
      { id: "VI-004", title: "Institutional Trust Impact" },
      { id: "VI-005", title: "Long-Term Societal Impact" },
    ],
  },
  {
    code: "08", title: "Legal & IP", link: "/archive/legal-ip",
    items: [
      { id: "LI-001", title: "Inventor Attribution (Tarek Wahid)", restricted: true },
      { id: "LI-002", title: "Intellectual Property Scope", restricted: true },
      { id: "LI-003", title: "Originality & Non-Substitutability", restricted: true },
      { id: "LI-004", title: "Licensing Principles", restricted: true },
      { id: "LI-005", title: "Controlled Disclosure", restricted: true },
    ],
  },
  {
    code: "09", title: "Appendices", link: "/archive/public",
    items: [
      { id: "AP-001", title: "Glossary" },
      { id: "AP-002", title: "Terminology" },
      { id: "AP-003", title: "Reference Models" },
      { id: "AP-004", title: "Future Roadmap" },
      { id: "AP-005", title: "Contact & Institutional Access" },
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
            <Link
              key={item.id}
              to={section.link}
              className="flex items-center gap-3 px-5 py-2.5 hover:bg-muted/30 transition-colors group"
            >
              {item.restricted ? (
                <Lock className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />
              ) : (
                <FileText className="h-3.5 w-3.5 text-accent/60 shrink-0" />
              )}
              <span className="hash-text shrink-0 w-14">{item.id}</span>
              <span className={cn("text-xs group-hover:text-accent transition-colors", item.restricted ? "text-muted-foreground/60" : "text-foreground")}>
                {item.title}
              </span>
              <ExternalLink className="h-3 w-3 text-muted-foreground/30 group-hover:text-accent/60 transition-colors ml-1 shrink-0 hidden sm:block" />
              <span className="ml-auto text-[9px] font-mono text-muted-foreground/40 tracking-wider hidden sm:block">v1.0.0</span>
              {item.restricted && (
                <span className="text-[9px] font-mono text-destructive/60 tracking-wider">RESTRICTED</span>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

const totalDocs = masterIndex.reduce((sum, s) => sum + s.items.length, 0);

const ArchiveMasterIndex = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Master Index</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          GRGF Digital Archive — Master Index
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Complete index of all governance documents, architectures, policies, and reference materials within the GRGF Digital Archive. Click any document to view its full content in the relevant stakeholder section.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    {/* Global banner */}
    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">
          AUTHORITATIVE ARCHIVE · EVIDENCE-FIRST · NEUTRAL · VERSIONED
        </span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">v1.0.0 · FEB 2026</span>
      </div>
    </div>

    <section className="px-8 py-8 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-3">
        {masterIndex.map((section) => (
          <SectionBlock key={section.code} section={section} />
        ))}

        {/* Integrity footer */}
        <div className="mt-8 governance-card border-l-2 border-l-accent">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Documents may be hash-sealed and time-stamped in future releases without altering their semantic meaning. No document may be modified without version increment, change description, and date of revision.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-muted-foreground/50">
          <span>TOTAL: {totalDocs} DOCUMENTS · 10 SECTIONS</span>
          <span>LAST UPDATED: FEBRUARY 2026</span>
        </div>

        <div className="mt-2 flex justify-end">
          <Link to="/archive/downloads" className="text-[10px] font-mono text-accent hover:underline">
            View Stakeholder Download Packs →
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveMasterIndex;
