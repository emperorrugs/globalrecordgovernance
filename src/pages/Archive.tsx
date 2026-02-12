import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Lock, Hash, Download, Folder } from "lucide-react";
import { Link } from "react-router-dom";

const versionRegistry = [
  { doc: "Pilot Evaluation Plan", version: "0.1", date: "2026-01-31", classification: "Public", hash: "a7f3c2d1e8b4f6a9...c0d2e4f6a8" },
  { doc: "Demo Guide", version: "0.1", date: "2026-01-31", classification: "Public", hash: "b8e4d3c2f1a5b7c9...d5e7f9a1b3" },
  { doc: "Executive Slide Deck", version: "1.0", date: "2026-01-31", classification: "Public", hash: "c9f5e4d3a2b6c8d0...e8f0a2b4c6" },
  { doc: "GRGF Master Binder", version: "1.0", date: "2026-01-30", classification: "Public", hash: "d0a6f5e4b3c7d9e1...f9a1b3c5d7" },
  { doc: "API Contract", version: "0.1", date: "2026-01-31", classification: "Restricted", hash: "e1b7a6f5c4d8e0f2...a0b2c4d6e8" },
  { doc: "Technical Walkthrough", version: "0.1", date: "2026-01-31", classification: "Restricted", hash: "f2c8b7a6d5e9f1a3...b1c3d5e7f9" },
  { doc: "System Architecture", version: "1.0", date: "2026-01-30", classification: "Public", hash: "a3d9c8b7e6f0a2b4...c2d4e6f8a0" },
  { doc: "Privacy Impact Assessment", version: "1.0", date: "2026-01-30", classification: "Institutional", hash: "b4e0d9c8f7a1b3c5...d3e5f7a9b1" },
  { doc: "Incident Response Plan", version: "1.0", date: "2026-01-30", classification: "Institutional", hash: "c5f1e0d9a8b2c4d6...e4f6a8b0c2" },
];

const folders = [
  {
    title: "Executive",
    docs: [
      { name: "Executive Slide Deck", file: "GRGF_Executive_Visual_Binder.pptx", classification: "Public" },
      { name: "Executive Decision Memo", file: "Executive_Decision_Memo.md", classification: "Public" },
      { name: "Feasibility Study", file: "Feasibility_Study.md", classification: "Public" },
      { name: "Valuation Scenarios (5yr)", file: "Valuation_5yr_Scenarios.md", classification: "Public" },
    ],
  },
  {
    title: "Pilot",
    docs: [
      { name: "Pilot Evaluation Plan (v0.1)", file: "GRGF_Pilot_Evaluation_Plan_v0.1.pdf", classification: "Public" },
      { name: "Demo Guide (v0.1)", file: "GRGF_Demo_Guide_v0.1.pdf", classification: "Public" },
      { name: "Pilot SOW & Acceptance", file: "7_Pilot_SOW_Acceptance.md", classification: "Public" },
      { name: "Optimum Backlog", file: "optimum_two_week_backlog.csv", classification: "Public" },
    ],
  },
  {
    title: "Architecture",
    docs: [
      { name: "Data Flow Architecture", file: "1_Data_Flow_Architecture.md", classification: "Public" },
      { name: "System Architecture Catalog", file: "System_Architecture_and_Catalog.pdf", classification: "Public" },
      { name: "Interoperability Profile", file: "5_Interoperability_Profile.md", classification: "Public" },
      { name: "Resilience & DR", file: "6_Resilience_RTO_RPO_DR.md", classification: "Public" },
    ],
  },
  {
    title: "Security & Trust",
    docs: [
      { name: "Threat Model (STRIDE)", file: "2_Threat_Model_STRIDE.md", classification: "Public" },
      { name: "Data Protection Policy", file: "Data_Protection_and_Access_Control_Policy.md", classification: "Public" },
      { name: "Privacy Impact Assessment", file: "Privacy_Impact_Assessment.md", classification: "Institutional" },
      { name: "Incident Response Plan", file: "Incident_Response_Plan.md", classification: "Institutional" },
      { name: "Independent Assurance Plan", file: "8_Independent_Assurance_Plan.md", classification: "Public" },
    ],
  },
];

const classificationColor = (c: string) => {
  if (c === "Public") return "text-success";
  if (c === "Institutional") return "text-accent";
  return "text-destructive";
};

const Archive = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Archive & Version Registry"
      subtitle="Versioned archive of public GRGF documents and pilot evaluation materials. All records include classification level and SHA-256 integrity hash placeholders."
    />

    {/* Version Registry Table */}
    <Section title="Version Registry">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-border bg-surface2/50">
              <th className="text-left py-2.5 px-3 text-foreground/70 font-medium">Document</th>
              <th className="text-left py-2.5 px-3 text-foreground/70 font-medium">Version</th>
              <th className="text-left py-2.5 px-3 text-foreground/70 font-medium">Date</th>
              <th className="text-left py-2.5 px-3 text-foreground/70 font-medium">Classification</th>
              <th className="text-left py-2.5 px-3 text-foreground/70 font-medium">SHA-256</th>
            </tr>
          </thead>
          <tbody>
            {versionRegistry.map((r, i) => (
              <tr key={r.doc} className={`border-b border-border/50 last:border-0 ${i % 2 === 1 ? "bg-surface2/15" : ""}`}>
                <td className="py-2.5 px-3 text-foreground">{r.doc}</td>
                <td className="py-2.5 px-3 text-muted-foreground">v{r.version}</td>
                <td className="py-2.5 px-3 text-muted-foreground">{r.date}</td>
                <td className="py-2.5 px-3">
                  <span className={`text-[10px] font-mono uppercase tracking-wider ${classificationColor(r.classification)}`}>
                    {r.classification}
                  </span>
                </td>
                <td className="py-2.5 px-3 text-muted-foreground/60 break-all">{r.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Pilot v0.1 Document Library */}
    <Section title="Document Library — Pilot v0.1" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        {folders.map((folder) => (
          <div key={folder.title} className="governance-card">
            <div className="flex items-center gap-2 mb-4">
              <Folder className="h-5 w-5 text-accent" />
              <h3 className="font-serif text-sm font-semibold">{folder.title}</h3>
            </div>
            <div className="space-y-2">
              {folder.docs.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between gap-3 py-2 px-3 border border-border/50 rounded-sm bg-surface2/20">
                  <div className="min-w-0">
                    <p className="text-xs text-foreground truncate">{doc.name}</p>
                    <p className={`text-[9px] font-mono uppercase tracking-wider mt-0.5 ${classificationColor(doc.classification)}`}>
                      {doc.classification}
                    </p>
                  </div>
                  {doc.classification === "Public" ? (
                    <a
                      href={`/documents/${doc.file}`}
                      download
                      className="shrink-0 inline-flex items-center gap-1 px-2 py-1 border border-border text-[10px] font-medium rounded-sm hover:bg-surface2 transition-colors"
                    >
                      <Download className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link
                      to="/controlled-access"
                      className="shrink-0 inline-flex items-center gap-1 px-2 py-1 border border-border text-[10px] font-medium rounded-sm hover:bg-surface2 transition-colors text-muted-foreground"
                    >
                      <Lock className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Hash Manifest */}
    <Section title="Hash Manifest" className="border-t border-border bg-surface2/30">
      <p className="text-muted-foreground text-sm mb-4 max-w-3xl">
        Complete verifiable index of sealed records with corresponding SHA-256 integrity proofs.
      </p>
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs font-mono">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-foreground/70 font-medium">RECORD ID</th>
              <th className="text-left py-2 pr-4 text-foreground/70 font-medium">SEALED</th>
              <th className="text-left py-2 text-foreground/70 font-medium">SHA-256</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "GRGF-2024-0001", date: "15 Jan 2024", hash: "a7f3c2d1e8b4f6a9c3d5e7f1a2b4c6d8e0f2a4b6c8d0e2f4a6b8c0d2e4f6a8" },
              { id: "GRGF-2024-0002", date: "01 Feb 2024", hash: "b8e4d3c2f1a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9a1b3c5d7e9f1a3b5" },
              { id: "GRGF-2024-0003", date: "10 Mar 2024", hash: "c9f5e4d3a2b6c8d0e2f4a6b8c0d2e4f6a8b0c2d4e6f8a0b2c4d6e8f0a2b4c6" },
            ].map((r) => (
              <tr key={r.id} className="border-b border-border/50 last:border-0">
                <td className="py-2 pr-4 text-foreground">{r.id}</td>
                <td className="py-2 pr-4 text-muted-foreground">{r.date}</td>
                <td className="py-2 text-muted-foreground/60 break-all">{r.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Footer */}
    <Section className="border-t border-border">
      <p className="text-xs text-muted-foreground/60 italic leading-relaxed max-w-3xl">
        This archive provides versioned reference materials for institutional evaluation. All documents are subject to the Controlled Distribution Protocol.
      </p>
      <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default Archive;
