import { Link } from "react-router-dom";
import { Download, FileText, Users, Building2, Handshake, Lock, CheckCircle, ArrowLeft } from "lucide-react";

const packs = [
  {
    icon: Users,
    title: "Public Information Pack",
    audience: "Public, media, academia, civil society",
    access: "OPEN",
    sections: ["01 — Vision & Foundations", "02 — High-Level Architecture", "06 — Use-Case Narratives", "09 — Appendices (Glossary, Terminology)"],
    coverNote: "This pack provides a clear, non-technical overview of the Global Record Governance Framework. It is intended for general audiences seeking to understand the framework's purpose, scope, and relevance to public governance.",
    contents: [
      "GRGF Vision & Purpose",
      "DPI Trust Layer Concept (High-Level)",
      "Actions & Omissions Framework (Explainer)",
      "Architecture Overview (Non-Technical)",
      "Public Use-Case Narratives",
      "Glossary & References",
    ],
  },
  {
    icon: Building2,
    title: "Government & Multilateral Evaluation Pack",
    audience: "Governments, World Bank, regulators, oversight bodies",
    access: "INSTITUTIONAL",
    sections: ["01 — Vision & Foundations", "02 — System Architecture", "03 — Governance & Policy", "04 — DPI & Standards Alignment", "05 — Deployment Models", "06 — Use Cases", "07 — Value & Impact", "09 — Appendices"],
    coverNote: "This comprehensive evaluation pack provides all materials required for institutional assessment, policy alignment, and sovereign adoption planning. Documents are formal, neutral, and suitable for audit, judicial review, and institutional decision-making.",
    contents: [
      "Complete Vision & Foundations (5 documents)",
      "Full System Architecture (5 documents)",
      "Governance & Policy Framework (5 documents)",
      "DPI & Standards Alignment (5 documents)",
      "Deployment Models (5 documents)",
      "Use Cases (5 documents)",
      "Value & Impact Analysis (5 documents)",
      "Appendices (5 documents)",
    ],
  },
  {
    icon: Handshake,
    title: "Partner & Integrator Pack",
    audience: "Implementers, vendors, system integrators",
    access: "PARTNER",
    sections: ["02 — System Architecture", "04 — Interoperability Framework", "05 — Deployment Models", "06 — Use Cases (Technical Context)"],
    coverNote: "This pack provides abstracted technical documentation for evaluation, planning, and integration readiness. No source code or trade secrets are disclosed. Documentation is sufficient for feasibility assessment and pilot planning.",
    contents: [
      "Architecture Overview (Conceptual)",
      "Functional Modules & Interaction Diagrams",
      "Record Lifecycle Logic",
      "Verification Hooks",
      "Interoperability Principles",
      "Deployment Models",
      "Sandbox & Pilot References",
    ],
  },
  {
    icon: Lock,
    title: "Legal, IP & Assurance Pack",
    audience: "Controlled — institutional authorization required",
    access: "CONTROLLED",
    restricted: true,
    sections: ["00 — Archive Control", "08 — Legal & IP"],
    coverNote: "This controlled pack contains materials related to intellectual property, inventor attribution, governance authority proof, and controlled disclosure rules. Access requires formal institutional authorization.",
    contents: [
      "Archive Integrity Statement",
      "Version History & Change Log",
      "Inventor Attribution (Tarek Wahid)",
      "Intellectual Property Scope",
      "Originality & Non-Substitutability",
      "Licensing & Usage Principles",
      "Controlled Disclosure Policy",
    ],
  },
];

const ArchiveDownloads = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Stakeholder Packages</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          Institutional Download Packs
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Pre-assembled document bundles organized by stakeholder role. Each pack includes a cover note, contents checklist, and all relevant archive sections for the intended audience.
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
      <div className="max-w-5xl space-y-8">
        {packs.map(({ icon: Icon, title, audience, access, sections, coverNote, contents, restricted }) => (
          <div key={title} className="governance-card">
            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${restricted ? "text-muted-foreground" : "text-accent"}`} />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-lg font-semibold">{title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{audience}</p>
                <p className={`text-[10px] font-mono mt-2 tracking-wider ${restricted ? "text-destructive" : "text-accent"}`}>
                  {restricted && "🔒 "}{access} ACCESS
                </p>
              </div>
            </div>

            {/* Cover note */}
            <div className="border-l-2 border-accent/30 pl-4 mb-5">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1.5">Cover Note</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{coverNote}</p>
            </div>

            {/* Sections included */}
            <div className="mb-5">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Sections Included</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <span key={s} className="text-[10px] font-mono bg-muted px-2.5 py-1 rounded-sm text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>

            {/* Contents checklist */}
            <div className="mb-5">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Contents Checklist</p>
              <div className="grid gap-1.5 sm:grid-cols-2">
                {contents.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-accent/60 shrink-0" />
                    <span className="text-xs text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download button placeholder */}
            <div className="flex items-center gap-3 pt-3 border-t border-border/50">
              <button
                disabled
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary text-xs font-medium rounded-sm cursor-not-allowed opacity-60"
              >
                <Download className="h-3.5 w-3.5" />
                Download Pack (Coming Soon)
              </button>
              <span className="text-[10px] text-muted-foreground/50 font-mono">PDF / ZIP · HASH-SEALED</span>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed">
            Documents may be hash-sealed and time-stamped in future releases without semantic change. All packs follow major / minor / patch versioning with no silent edits.
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/40">
          <span>GRGF DIGITAL ARCHIVE · STAKEHOLDER PACKAGES · REFERENCE ONLY</span>
          <Link to="/archive" className="text-accent hover:underline flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to Archive
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveDownloads;
