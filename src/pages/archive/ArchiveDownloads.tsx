import { Link } from "react-router-dom";
import { Download, FileText, Users, Building2, Handshake, Lock, CheckCircle, ArrowLeft, Globe } from "lucide-react";

const packs = [
  {
    icon: Users,
    title: "Level 1 — Public Overview Digital Book",
    audience: "Public, media, academia, civil society",
    access: "OPEN",
    level: 1,
    pages: "438 pages",
    sections: ["01 — Governance Foundations", "02 — Six-Layer Architecture", "03 — Standards Compliance", "04 — Deployment Models", "05 — Training Manual", "06 — Operational Toolkit", "07 — Risk & Security", "08 — Value Analysis", "09 — Appendices"],
    coverNote: "Maximum depth public overview of the Global Record Governance Framework. Includes complete training manual, operational toolkit, risk management framework, and all reference appendices. Suitable for general audiences, academic researchers, and civil society organizations.",
    contents: [
      "GRGF Vision, Mission & Strategic Framework (Ch. 1–3)",
      "Six-Layer Deterministic Architecture (Full Deep-Dive)",
      "International Standards Compliance (ISO, OECD, ITU, UN)",
      "Deployment Models & Configuration Guide",
      "Complete Training Manual — 6 Certification Modules",
      "Operational Toolkit — 8 Implementation Tools",
      "Risk Management & Security Framework",
      "Economic Value & ROI Analysis (10-Year Model)",
      "Glossary, Schema References & Appendices A–J",
    ],
    downloadUrl: "/documents/GRGF_Level1_Public_Overview_MaxDepth.pdf",
    frenchUrl: "/documents/GRGF_Niveau1_Apercu_Public_MaxDepth_FR.pdf",
  },
  {
    icon: Building2,
    title: "Level 2 — Institutional Review Digital Book",
    audience: "Governments, World Bank, regulators, oversight bodies",
    access: "INSTITUTIONAL",
    level: 2,
    pages: "566 pages",
    sections: ["Parts I–IX (Public Foundations)", "Part X — Advanced Governance Protocols", "Part XI — Institutional Implementation Guide", "Part XII — Compliance Evidence Workbook"],
    coverNote: "Comprehensive institutional evaluation pack with all materials required for sovereign adoption planning, policy alignment, and institutional decision-making. Extends Level 1 with advanced governance protocols, institutional implementation guides, and compliance evidence workbooks.",
    contents: [
      "All Level 1 Content (438 pages)",
      "Advanced Governance Protocols — 7 Chapters",
      "Institutional Implementation Guide — 10 Chapters",
      "Compliance Evidence Workbook — 10 Frameworks",
      "Training Manual — Institutional Reviewer Certification",
      "Standards Compliance Toolkit (ISO 27001, 15489, 16175)",
      "OECD & World Bank DPI Alignment Matrices",
      "Procurement Strategy (PSPC-aligned)",
    ],
    downloadUrl: "/documents/GRGF_Level2_Institutional_Review_MaxDepth.pdf",
    frenchUrl: "/documents/GRGF_Niveau2_Examen_Institutionnel_MaxDepth_FR.pdf",
  },
  {
    icon: Handshake,
    title: "Level 3 — Restricted Technical Detail Digital Book",
    audience: "Implementers, vendors, system integrators (NDA required)",
    access: "NDA REQUIRED",
    level: 3,
    pages: "702 pages",
    sections: ["Parts I–XII (Institutional Foundations)", "Part XIII — Technical Schema & API", "Part XIV — Integration & Interoperability", "Part XV — Developer Operations Handbook"],
    coverNote: "Restricted technical documentation for evaluation, integration planning, and pilot preparation. Extends Level 2 with complete schema definitions, API references, integration guides, and developer operations handbooks. NDA required.",
    contents: [
      "All Level 2 Content (566 pages)",
      "Technical Schema & API Reference — 9 Schema Types",
      "Integration & Interoperability Guide — 10 Chapters",
      "Developer Operations Handbook — 10 Chapters",
      "Record Lifecycle Logic & Schema Definitions",
      "Verification Hooks & API Endpoints",
      "Pilot Operations Handbook",
      "Sandbox Configuration References",
    ],
    restricted: true,
    restrictedReason: "This document contains proprietary technical schemas, API specifications, and integration blueprints protected under Canadian Patent No. CA 3,300,102. Access requires a signed Non-Disclosure Agreement (NDA) to protect intellectual property and ensure responsible use by authorized implementers only.",
  },
  {
    icon: Lock,
    title: "Level 4 — Sovereign Deployment Digital Book",
    audience: "Controlled — government authorization required",
    access: "CONTROLLED",
    level: 4,
    pages: "878 pages",
    restricted: true,
    restrictedReason: "This document contains classified sovereign deployment protocols, national key management procedures, and federation architecture specifications. Access is restricted to authorized government officials to protect national security infrastructure and ensure sovereign control over deployment configurations.",
    sections: ["Parts I–XV (Technical Foundations)", "Part XVI — Sovereign Configuration", "Part XVII — National Federation", "Part XVIII — Classified Protocols", "Part XIX — Exit & Continuity"],
    coverNote: "Maximum-depth controlled deployment documentation with sovereign configuration manuals, national federation architecture, classified operational protocols, and continuity procedures. Requires formal government authorization.",
    contents: [
      "All Level 3 Content (702 pages)",
      "Sovereign Configuration Manual — 7 National Modules",
      "National Federation Architecture — 12 Chapters",
      "Classified Operational Protocols — 10 Sections",
      "Continuity & Exit Procedures — 8 Chapters",
      "Key Management & HSM Integration",
      "Federal–Provincial Federation Architecture",
      "IP Attribution (Tarek Wahid, CA 3,300,102)",
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
          Pre-assembled document bundles organized by classification level. Each digital book includes training manuals, operational toolkits, implementation guides, assessment frameworks, templates, and reference appendices.
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">
          MAXIMUM DEPTH EDITION · EVIDENCE-FIRST · NEUTRAL · CRP v1.0
        </span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">v3.0 · MARCH 2026</span>
      </div>
    </div>

    <section className="px-8 py-8 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-8">
        {packs.map(({ icon: Icon, title, audience, access, level, pages, sections, coverNote, contents, restricted, downloadUrl, frenchUrl }) => (
          <div key={title} className="governance-card">
            <div className="flex items-start gap-4 mb-5">
              <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${restricted ? "text-muted-foreground" : "text-accent"}`} />
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-lg font-semibold">{title}</h2>
                <p className="text-xs text-muted-foreground mt-1">{audience}</p>
                <div className="flex items-center gap-3 mt-2">
                  <p className={`text-[10px] font-mono tracking-wider ${restricted ? "text-destructive" : "text-accent"}`}>
                    {restricted && "🔒 "}{access} ACCESS
                  </p>
                  {pages && (
                    <span className="text-[10px] font-mono text-muted-foreground/50 bg-muted px-2 py-0.5 rounded-sm">{pages}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="border-l-2 border-accent/30 pl-4 mb-5">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1.5">Cover Note</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{coverNote}</p>
            </div>

            <div className="mb-5">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Sections Included</p>
              <div className="flex flex-wrap gap-2">
                {sections.map((s) => (
                  <span key={s} className="text-[10px] font-mono bg-muted px-2.5 py-1 rounded-sm text-muted-foreground">{s}</span>
                ))}
              </div>
            </div>

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

            <div className="flex items-center gap-3 pt-3 border-t border-border/50 flex-wrap">
              {restricted ? (
                <Link
                  to="/controlled-access"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary text-xs font-medium rounded-sm hover:bg-primary/20 transition-colors"
                >
                  <Lock className="h-3.5 w-3.5" />
                  Request Controlled Access
                </Link>
              ) : (
                <>
                  <a
                    href={downloadUrl}
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download (English)
                  </a>
                  {frenchUrl && (
                    <a
                      href={frenchUrl}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      Télécharger (Français)
                    </a>
                  )}
                </>
              )}
              <span className="text-[10px] text-muted-foreground/50 font-mono">PDF · CRP v1.0 · HASH-SEALED</span>
            </div>
          </div>
        ))}

        <div className="governance-card">
          <div className="flex items-start gap-4 mb-4">
            <FileText className="h-6 w-6 shrink-0 mt-0.5 text-accent" />
            <div>
              <h2 className="font-serif text-lg font-semibold">Quick Reference Materials</h2>
              <p className="text-xs text-muted-foreground mt-1">Executive summaries for institutional distribution and outreach</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Executive Summary (LinkedIn Brief)
            </a>
            <a
              href="/documents/GRGF_One_Pager.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              Marketing One-Pager
            </a>
            <a
              href="/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border"
            >
              <Globe className="h-3.5 w-3.5" />
              Résumé exécutif (Français)
            </a>
            <a
              href="/documents/GRGF_Une_Page_FR.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border"
            >
              <Globe className="h-3.5 w-3.5" />
              Une page (Français)
            </a>
          </div>
        </div>

        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed">
            All digital books follow the Controlled Distribution Protocol (CRP v1.0). Documents are hash-sealed, version-controlled, and subject to no silent edits. Canadian Patent No. CA 3,300,102 — Invented and Owned by Tarek Wahid.
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/40">
          <span>GRGF DIGITAL ARCHIVE · MAXIMUM DEPTH EDITION · v3.0</span>
          <Link to="/archive" className="text-accent hover:underline flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to Archive
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveDownloads;
