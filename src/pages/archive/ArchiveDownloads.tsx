import { Link } from "react-router-dom";
import { Download, FileText, Users, Building2, Handshake, Lock, CheckCircle, ArrowLeft, Globe, BookOpen, GraduationCap, ShieldCheck } from "lucide-react";

interface VolumePack {
  icon: React.ElementType;
  title: string;
  audience: string;
  access: string;
  level: number;
  pages: string;
  sections: string[];
  coverNote: string;
  contents: string[];
  downloadUrl?: string;
  frenchUrl?: string;
  arabicUrl?: string;
  restricted?: boolean;
  restrictedReason?: string;
}

const volumes: VolumePack[] = [
  {
    icon: Users,
    title: "Volume I — Master Complete Edition",
    audience: "Public, media, academia, civil society, multilateral reviewers",
    access: "OPEN",
    level: 1,
    pages: "438+ pages",
    sections: ["Vision & Mission", "Six-Layer Architecture", "Economic Value Model", "Anti-Capture Clauses", "Deployment Roadmap", "Operational Toolkit", "Risk & Security", "Appendices"],
    coverNote: "The definitive consolidated reference for the Global Record Governance Framework. Includes core framework, 10-year ROI analysis ($27.1B net benefit), anti-capture legal clauses (AC-01 to AC-05), sovereign deployment roadmap, and complete operational toolkit.",
    contents: [
      "GRGF Vision, Mission & Strategic Framework",
      "Six-Layer Deterministic Architecture (Full Deep-Dive)",
      "10-Year Economic Value & ROI Model",
      "Anti-Capture Clauses (AC-01 through AC-05)",
      "Sovereign Deployment Roadmap (4-Phase)",
      "International Standards Compliance (ISO, OECD, ITU, UN)",
      "Complete Training Manual — 6 Certification Modules",
      "Operational Toolkit — 8 Implementation Tools",
      "Glossary, Schema References & Appendices A–J",
    ],
    downloadUrl: "/documents/GRGF_Vol1_Master_Complete_Edition.pdf",
    frenchUrl: "/documents/GRGF_Vol1_Master_Complete_Edition_FR.pdf",
    arabicUrl: "/documents/GRGF_Vol1_Master_Complete_Edition_AR.pdf",
  },
  {
    icon: Building2,
    title: "Volume II — Technical & Architecture Blueprints",
    audience: "Governments, system architects, security auditors, World Bank DPI teams",
    access: "INSTITUTIONAL",
    level: 2,
    pages: "566+ pages",
    sections: ["Deterministic Architecture", "Merkle Protocols", "API Surfaces", "OPA/Rego Policies", "HSM Integration", "Federation Specs", "Cryptographic Proofs"],
    coverNote: "Deep-dive technical specifications for the Six-Layer Deterministic Architecture. Includes Merkle transparency log protocols, OPA/Rego policy samples, HSM-backed cryptographic specifications, and complete API reference (Public, Institutional, Admin).",
    contents: [
      "Six-Layer Deterministic Architecture Specifications",
      "Merkle Transparency Log Protocols (3 Proof Types)",
      "Open Policy Agent (OPA) Integration with Rego Samples",
      "HSM-Backed Cryptographic Key Management",
      "API Reference — Public, Institutional & Admin Surfaces",
      "OpenAPI 3.1 Specification Documents",
      "Federation Protocol & Inter-Jurisdictional Architecture",
      "Record Lifecycle Logic & Schema Definitions",
    ],
    downloadUrl: "/documents/GRGF_Vol2_Technical_Architecture_Blueprints.pdf",
    frenchUrl: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_FR.pdf",
    arabicUrl: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_AR.pdf",
  },
  {
    icon: GraduationCap,
    title: "Volume III — Academy, Training & Certification",
    audience: "Implementers, vendors, system integrators (NDA required)",
    access: "NDA REQUIRED",
    level: 3,
    pages: "702+ pages",
    sections: ["4-Tier Certification Syllabus", "76+ Training Hours", "10 Simulation Labs", "Professional Ethics", "Assessment Frameworks", "Exam Guides", "Governance Glossary"],
    coverNote: "Complete professional development handbook establishing a 4-tier certification model (Foundations through Architect) totaling 76+ structured training hours. Includes simulation lab exercises, professional code of ethics, and assessment frameworks. NDA required for access.",
    contents: [
      "Level 1: Foundations Certification (16 hours)",
      "Level 2: Practitioner Certification (24 hours)",
      "Level 3: Specialist Certification (20 hours)",
      "Level 4: Architect Certification (16 hours)",
      "10 Simulation Lab Exercises",
      "Professional Code of Ethics (5 Articles)",
      "Assessment & Examination Frameworks",
      "Governance Glossary (200+ Terms)",
    ],
    downloadUrl: "/documents/GRGF_Vol3_Academy_Training_Certification.pdf",
    frenchUrl: "/documents/GRGF_Vol3_Academy,_Training_and_Certification_FR.pdf",
    arabicUrl: "/documents/GRGF_Vol3_Academy,_Training_and_Certification_AR.pdf",
    restricted: true,
    restrictedReason: "This volume contains proprietary certification curricula, assessment methodologies, and professional development frameworks protected under Canadian Patent No. CA 3,300,102. Access requires a signed Non-Disclosure Agreement (NDA) to protect intellectual property and ensure responsible use by authorized training providers only.",
  },
  {
    icon: ShieldCheck,
    title: "Volume IV — Standards & Compliance Reference",
    audience: "Controlled — government authorization required",
    access: "CONTROLLED",
    level: 4,
    pages: "878+ pages",
    sections: ["ISO Standards Mapping", "GDPR & Privacy", "OECD DGPF Alignment", "EU AI Act Assessment", "Canadian Compliance", "UN SDG Alignment", "World Bank DPI"],
    coverNote: "Comprehensive mapping to 12+ international standards including ISO 15489, ISO 27001, ISO 37000, GDPR, OECD Privacy Guidelines, and the EU AI Act. Includes formal non-applicability certification for the EU AI Act due to deterministic design. Government authorization required.",
    contents: [
      "ISO 15489 (Records Management) — Full Alignment",
      "ISO 27001 (Information Security) — Certifiable Compliance",
      "ISO 37000 (Governance of Organizations) — Guiding Principles",
      "GDPR (EU) — Data Protection & Rights Mapping",
      "OECD Privacy Guidelines — Complete Compliance Matrix",
      "EU AI Act — Non-Applicability Certification",
      "Canadian PIPEDA & PSPC Federal Compliance",
      "UN SDG 16 Alignment & World Bank DPI Framework",
    ],
    restricted: true,
    restrictedReason: "This volume contains classified sovereign compliance mappings, national regulatory alignment procedures, and controlled government authorization protocols. Access is restricted to authorized government officials and accredited compliance auditors to protect sovereign deployment integrity.",
  },
];

const VolumeCard = ({ pack }: { pack: VolumePack }) => {
  const { icon: Icon, title, audience, access, level, pages, sections, coverNote, contents, restricted, restrictedReason, downloadUrl, frenchUrl, arabicUrl } = pack;

  return (
    <div className="governance-card">
      <div className="flex items-start gap-4 mb-5">
        <Icon className={`h-6 w-6 shrink-0 mt-0.5 ${restricted ? "text-muted-foreground" : "text-accent"}`} />
        <div className="flex-1 min-w-0">
          <h2 className="font-serif text-lg font-semibold">{title}</h2>
          <p className="text-xs text-muted-foreground mt-1">{audience}</p>
          <div className="flex items-center gap-3 mt-2">
            <p className={`text-[10px] font-mono tracking-wider ${restricted ? "text-destructive" : "text-accent"}`}>
              {restricted && "🔒 "}{access} ACCESS
            </p>
            <span className="text-[10px] font-mono text-muted-foreground/50 bg-muted px-2 py-0.5 rounded-sm">{pages}</span>
            <span className="text-[10px] font-mono text-muted-foreground/50 bg-muted px-2 py-0.5 rounded-sm">LEVEL {level}</span>
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

      {restricted && restrictedReason && (
        <div className="bg-destructive/5 border border-destructive/20 rounded-sm px-4 py-3 mb-1">
          <div className="flex items-start gap-2">
            <Lock className="h-3.5 w-3.5 text-destructive mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] font-mono text-destructive uppercase tracking-wider mb-1">Access Restricted</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{restrictedReason}</p>
            </div>
          </div>
        </div>
      )}

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
            <a href={downloadUrl} download className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
              <Download className="h-3.5 w-3.5" />
              Download (English)
            </a>
            {frenchUrl && (
              <a href={frenchUrl} download className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border">
                <Globe className="h-3.5 w-3.5" />
                Français
              </a>
            )}
            {arabicUrl && (
              <a href={arabicUrl} download className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border">
                <Globe className="h-3.5 w-3.5" />
                العربية
              </a>
            )}
          </>
        )}
        <span className="text-[10px] text-muted-foreground/50 font-mono">PDF · CRP v1.0 · HASH-SEALED</span>
      </div>
    </div>
  );
};

const ArchiveDownloads = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border bg-card/50 px-8 py-12 md:px-12 lg:px-16">
      <div className="max-w-4xl">
        <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Sovereign Publication Suite</p>
        <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
          GRGF Digital Book Collection
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Four-volume institutional publication suite with trilingual editions (English, French, Arabic). Volumes I–II are publicly accessible. Volumes III–IV require institutional authorization per the Controlled Distribution Protocol (CRP v1.0).
        </p>
        <div className="section-divider mt-6" />
      </div>
    </header>

    <div className="px-8 md:px-12 lg:px-16 pt-6">
      <div className="max-w-5xl bg-muted/50 border border-border rounded-sm px-4 py-2.5 flex items-center justify-between flex-wrap gap-2">
        <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider">
          AWARD EDITION · TRILINGUAL (EN/FR/AR) · EVIDENCE-FIRST · CRP v1.0
        </span>
        <span className="text-[10px] font-mono text-accent/60 tracking-wider">v3.0 · MARCH 2026</span>
      </div>
    </div>

    <section className="px-8 py-8 md:px-12 lg:px-16">
      <div className="max-w-5xl space-y-8">
        {volumes.map((pack) => (
          <VolumeCard key={pack.title} pack={pack} />
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
            <a href="/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
              <Download className="h-3.5 w-3.5" />
              Executive Summary (LinkedIn Brief)
            </a>
            <a href="/documents/GRGF_One_Pager.pdf" download className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
              <Download className="h-3.5 w-3.5" />
              Marketing One-Pager
            </a>
            <a href="/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf" download className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border">
              <Globe className="h-3.5 w-3.5" />
              Résumé exécutif (Français)
            </a>
            <a href="/documents/GRGF_Une_Page_FR.pdf" download className="inline-flex items-center gap-2 px-4 py-2.5 bg-muted text-muted-foreground text-xs font-medium rounded-sm hover:bg-muted/80 transition-colors border border-border">
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
          <span>GRGF SOVEREIGN PUBLICATION SUITE · TRILINGUAL · v3.0</span>
          <Link to="/archive" className="text-accent hover:underline flex items-center gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to Archive
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default ArchiveDownloads;
