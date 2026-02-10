import { FileText, ChevronRight } from "lucide-react";

const documents = [
  {
    id: "PUB-001",
    title: "GRGF Vision & Purpose",
    desc: "The foundational rationale, mission, and long-term objectives of the Global Record Governance Framework.",
    updated: "February 2026",
  },
  {
    id: "PUB-002",
    title: "What Is a Governance Record",
    desc: "A clear explanation of what constitutes a governance record, its lifecycle, and why it matters for institutional accountability.",
    updated: "February 2026",
  },
  {
    id: "PUB-003",
    title: "Why Recording Actions & Omissions Matters",
    desc: "The case for systematic recording of both actions taken and actions not taken, as evidence of governance decisions.",
    updated: "February 2026",
  },
  {
    id: "PUB-004",
    title: "High-Level Architecture (Non-Technical)",
    desc: "A simplified overview of the three-layer architecture — Authoritative, Simulation, and Transparency — designed for general audiences.",
    updated: "February 2026",
  },
  {
    id: "PUB-005",
    title: "Public Use-Case Narratives",
    desc: "Illustrative scenarios demonstrating how governance record frameworks apply to procurement, regulation, oversight, and crisis response.",
    updated: "February 2026",
  },
  {
    id: "PUB-006",
    title: "Frequently Asked Questions",
    desc: "Answers to common questions about GRGF's scope, authority, usage, and relationship to existing governance systems.",
    updated: "February 2026",
  },
];

const ArchivePublic = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">
          Public Archive
        </p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          Public & Civil Society
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Transparency and understanding. These documents are openly available to the public, media, academia, and civil society. They provide clear, non-technical explanations of the framework's purpose, structure, and relevance.
        </p>
        <p className="hash-text mt-4">ACCESS: OPEN · NO SENSITIVE OR PROPRIETARY DETAILS</p>
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

export default ArchivePublic;
