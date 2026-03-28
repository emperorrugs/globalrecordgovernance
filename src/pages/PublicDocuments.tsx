import { Link } from "react-router-dom";
import { FileText, Download, Globe, Shield, Layers, Database, BookOpen, ArrowRight } from "lucide-react";

const documentCategories = [
  {
    title: "Sovereign Binder",
    desc: "Complete institutional framework — master edition with all volumes.",
    icon: BookOpen,
    files: [
      { name: "GRGF Master Binder v1", path: "/documents/GRGF_Master_Binder_v1.pdf" },
      { name: "Sovereign Authority Edition 2026", path: "/documents/GRGF_Sovereign_Authority_Edition_2026.pdf" },
      { name: "Complete Proposal 2026", path: "/documents/GRGF_Complete_Proposal_2026_Expanded.pdf" },
    ],
  },
  {
    title: "Applications Catalog",
    desc: "126 applications across 12 governance sectors with economic impact data.",
    icon: Database,
    files: [
      { name: "126 Applications Complete 2026", path: "/documents/GRGF_126_Applications_Complete_2026.pdf" },
      { name: "Value Proposition 2026", path: "/documents/GRGF_Value_Proposition_Complete_2026.pdf" },
    ],
  },
  {
    title: "Architecture & Technical",
    desc: "Six-layer deterministic architecture, system blueprints, and DPI integration.",
    icon: Layers,
    files: [
      { name: "Vol 2 — Technical & Architecture", path: "/documents/GRGF_Vol2_Technical_Architecture_Blueprints.pdf" },
      { name: "System Architecture & Catalog", path: "/documents/System_Architecture_and_Catalog.pdf" },
      { name: "High Level Architecture", path: "/documents/High_Level_Architecture.pdf" },
      { name: "Data Flow Architecture", path: "/documents/1_Data_Flow_Architecture.pdf" },
    ],
  },
  {
    title: "International Alignment",
    desc: "Positioning papers for OECD, World Bank, UN, G20, and ITU standards.",
    icon: Globe,
    files: [
      { name: "DPI Integration Guide", path: "/documents/DPI_Integration_Guide.pdf" },
      { name: "GRGF Public Overview", path: "/documents/GRGF_Public_Overview.pdf" },
      { name: "Interoperability Profile", path: "/documents/5_Interoperability_Profile.pdf" },
    ],
  },
  {
    title: "Security & Verification",
    desc: "Threat model, integrity verification, data protection, and incident response.",
    icon: Shield,
    files: [
      { name: "Threat Model (STRIDE)", path: "/documents/2_Threat_Model_STRIDE.pdf" },
      { name: "Data Protection & Access Control", path: "/documents/Data_Protection_and_Access_Control_Policy.pdf" },
      { name: "Incident Response Plan", path: "/documents/Incident_Response_Plan.pdf" },
      { name: "Verification Hooks", path: "/documents/Verification_Hooks.pdf" },
    ],
  },
  {
    title: "Academy & Training",
    desc: "Certification programs, training materials, and institutional capacity building.",
    icon: FileText,
    files: [
      { name: "Vol 3 — Academy & Certification", path: "/documents/GRGF_Vol3_Academy_Training_Certification.pdf" },
      { name: "Training & Capacity Building", path: "/documents/Training_Capacity_Building.pdf" },
    ],
  },
];

export default function PublicDocuments() {
  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-14">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Resources</p>
        <h1 className="text-display font-bold text-foreground mb-4">Official GRGF Documents</h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          Access the complete institutional document library including the sovereign binder,
          technical architecture papers, applications catalog, and compliance materials.
        </p>
      </div>

      <div className="space-y-8">
        {documentCategories.map((cat) => (
          <div key={cat.title} className="bg-card border border-border rounded-xl p-6 lg:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-heading-3 font-bold text-foreground">{cat.title}</h2>
                <p className="text-caption text-muted-foreground mt-1">{cat.desc}</p>
              </div>
            </div>
            <div className="space-y-2">
              {cat.files.map((file) => (
                <a
                  key={file.name}
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/60 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-foreground">{file.name}</span>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-muted/30 border border-border rounded-xl text-center">
        <p className="text-sm text-muted-foreground mb-4">
          Looking for restricted institutional documents? Level 2+ access requires authorization.
        </p>
        <Link
          to="/controlled-access"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Request Institutional Access
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
