import { FileText, ChevronRight } from "lucide-react";

const documents = [
  { id: "GOV-001", title: "GRGF DPI Architecture (Full)", desc: "Complete Digital Public Infrastructure architecture detailing record structures, governance layers, and system boundaries.", updated: "February 2026" },
  { id: "GOV-002", title: "Governance & Authority Model", desc: "Formal documentation of how authority is distributed, delegated, and constrained within the framework.", updated: "February 2026" },
  { id: "GOV-003", title: "Decision, Action & Omission Framework", desc: "How GRGF captures decisions made, actions taken, and actions deliberately not taken — as equal governance evidence.", updated: "February 2026" },
  { id: "GOV-004", title: "Auditability & Verification Logic", desc: "The mechanisms through which every governance record can be independently verified and audited.", updated: "February 2026" },
  { id: "GOV-005", title: "Deployment Models (National / Incremental)", desc: "Sovereign deployment archetypes for countries at different maturity levels, from minimal to advanced digital states.", updated: "February 2026" },
  { id: "GOV-006", title: "Integration with Existing Systems", desc: "How GRGF complements and interoperates with existing national governance infrastructure without replacement.", updated: "February 2026" },
  { id: "GOV-007", title: "Risk, Safeguards & Oversight", desc: "Structural safeguards, anti-capture clauses, and oversight mechanisms built into the framework.", updated: "February 2026" },
  { id: "GOV-008", title: "Public Value & ROI Logic", desc: "The institutional value proposition — cost reduction, fraud prevention, and trust impact — without commercial framing.", updated: "February 2026" },
];

const ArchiveGovernment = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Government Archive</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          Governments & Multilateral Institutions
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Evaluation, adoption, and DPI alignment materials. These documents are intended for governments, the World Bank, regulators, and multilateral institutions assessing GRGF for policy alignment or sovereign adoption.
        </p>
        <p className="hash-text mt-4">ACCESS: INSTITUTIONAL · FORMAL · POLICY-GRADE</p>
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

export default ArchiveGovernment;
