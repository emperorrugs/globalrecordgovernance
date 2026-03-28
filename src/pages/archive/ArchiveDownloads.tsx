import { useState } from "react";
import { Download, FileText, Printer, Eye, X, Search, BookOpen, Shield, GraduationCap, Building2, Briefcase, BarChart3, FileSpreadsheet, Globe, Landmark, PackageOpen, Loader2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import JSZip from "jszip";
import { saveAs } from "file-saver";

interface PDFDocument {
  name: string;
  path: string;
  description?: string;
}

const categories: { id: string; label: string; icon: React.ElementType; docs: PDFDocument[] }[] = [
  {
    id: "volumes",
    label: "Core Volumes",
    icon: BookOpen,
    docs: [
      { name: "Vol I — Master Complete Edition (EN)", path: "/documents/GRGF_Vol1_Master_Complete_Edition.pdf", description: "438+ pages — Definitive consolidated reference" },
      { name: "Vol I — Édition Complète (FR)", path: "/documents/GRGF_Vol1_Master_Complete_Edition_FR.pdf" },
      { name: "Vol I — الطبعة الكاملة (AR)", path: "/documents/GRGF_Vol1_Master_Complete_Edition_AR.pdf" },
      { name: "Vol II — Technical & Architecture Blueprints (EN)", path: "/documents/GRGF_Vol2_Technical_Architecture_Blueprints.pdf", description: "566+ pages — Six-Layer Deterministic Architecture" },
      { name: "Vol II — Modèles Techniques (FR)", path: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_FR.pdf" },
      { name: "Vol II — المخططات التقنية (AR)", path: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_AR.pdf" },
      { name: "Vol III — Academy, Training & Certification (EN)", path: "/documents/GRGF_Vol3_Academy_Training_Certification.pdf", description: "702+ pages — 4-Tier Certification Model" },
      { name: "Vol III — Académie et Formation (FR)", path: "/documents/GRGF_Vol3_Academy_Training_and_Certification_FR.pdf" },
      { name: "Vol III — الأكاديمية والتدريب (AR)", path: "/documents/GRGF_Vol3_Academy_Training_and_Certification_AR.pdf" },
      { name: "Vol IV — Standards & Compliance Reference (EN)", path: "/documents/GRGF_Vol4_Standards_Compliance_Reference.pdf", description: "878+ pages — 12+ International Standards" },
      { name: "Vol IV — Normes et Conformité (FR)", path: "/documents/GRGF_Vol4_Standards_and_Compliance_Reference_FR.pdf" },
      { name: "Vol IV — المعايير والامتثال (AR)", path: "/documents/GRGF_Vol4_Standards_and_Compliance_Reference_AR.pdf" },
    ],
  },
  {
    id: "sovereign",
    label: "Sovereign Editions",
    icon: Landmark,
    docs: [
      { name: "Sovereign Authority Edition 2026 (EN)", path: "/documents/GRGF_Sovereign_Authority_Edition_2026.pdf", description: "Inventor-Controlled Stewardship Model" },
      { name: "Édition Autorité Souveraine (FR)", path: "/documents/GRGF_Sovereign_Authority_Edition_2026_FR.pdf" },
      { name: "طبعة السلطة السيادية (AR)", path: "/documents/GRGF_Sovereign_Authority_Edition_2026_AR.pdf" },
      { name: "Complete Proposal 2026 Expanded (EN)", path: "/documents/GRGF_Complete_Proposal_2026_Expanded.pdf", description: "Full expanded institutional proposal" },
      { name: "Proposition Complète (FR)", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_FR.pdf" },
      { name: "الاقتراح الكامل (AR)", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_AR.pdf" },
      { name: "Value Proposition Complete 2026 (EN)", path: "/documents/GRGF_Value_Proposition_Complete_2026.pdf", description: "$18.3B–$96.2B projections across 6 stakeholder categories" },
      { name: "Proposition de Valeur (FR)", path: "/documents/GRGF_Value_Proposition_Complete_2026_FR.pdf" },
      { name: "عرض القيمة (AR)", path: "/documents/GRGF_Value_Proposition_Complete_2026_AR.pdf" },
      { name: "126 Applications Catalog (EN)", path: "/documents/GRGF_126_Applications_Complete_2026.pdf", description: "126 apps across 12 sectors — $61.7B annual value" },
      { name: "Catalogue 126 Applications (FR)", path: "/documents/GRGF_126_Applications_Complete_2026_FR.pdf" },
      { name: "كتالوج 126 تطبيق (AR)", path: "/documents/GRGF_126_Applications_Complete_2026_AR.pdf" },
    ],
  },
  {
    id: "executive",
    label: "Executive & Institutional",
    icon: Briefcase,
    docs: [
      { name: "Executive Decision Memo", path: "/documents/Executive_Decision_Memo.pdf", description: "APPROVE PILOT & PHASED SCALE recommendation" },
      { name: "Executive Summary — LinkedIn Brief", path: "/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf" },
      { name: "Résumé Exécutif LinkedIn (FR)", path: "/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf" },
      { name: "One Pager (EN)", path: "/documents/GRGF_One_Pager.pdf", description: "Single-page overview for rapid briefing" },
      { name: "Une Page (FR)", path: "/documents/GRGF_Une_Page_FR.pdf" },
      { name: "Public Overview", path: "/documents/GRGF_Public_Overview.pdf" },
      { name: "Level 1 — Public Overview (MaxDepth)", path: "/documents/GRGF_Level1_Public_Overview_MaxDepth.pdf" },
      { name: "Niveau 1 — Aperçu Public (FR)", path: "/documents/GRGF_Niveau1_Apercu_Public_MaxDepth_FR.pdf" },
      { name: "Level 2 — Institutional Review (MaxDepth)", path: "/documents/GRGF_Level2_Institutional_Review_MaxDepth.pdf" },
      { name: "Niveau 2 — Examen Institutionnel (FR)", path: "/documents/GRGF_Niveau2_Examen_Institutionnel_MaxDepth_FR.pdf" },
      { name: "Oral Defense Briefing Deck", path: "/documents/Oral_Defense_Briefing_Deck.pdf", description: "Problem → Solution → Value → Ask" },
      { name: "Phase 3 Visual Operating Model", path: "/documents/GRGF_Phase_3_Visual_Operating_Model.pdf" },
      { name: "Vision and Purpose", path: "/documents/GRGF_Vision_and_Purpose.pdf" },
      { name: "FAQ", path: "/documents/GRGF_FAQ.pdf" },
      { name: "Master Binder v1", path: "/documents/GRGF_Master_Binder_v1.pdf" },
    ],
  },
  {
    id: "technical",
    label: "Technical Architecture",
    icon: Shield,
    docs: [
      { name: "Data Flow Architecture", path: "/documents/1_Data_Flow_Architecture.pdf", description: "Core data flow and processing architecture" },
      { name: "Threat Model (STRIDE)", path: "/documents/2_Threat_Model_STRIDE.pdf", description: "Comprehensive threat modeling analysis" },
      { name: "Connector Minimization Standard", path: "/documents/3_Connector_Minimization_Standard.pdf", description: "Least-collection-by-default enforcement" },
      { name: "Chain of Custody OPS", path: "/documents/4_Chain_of_Custody_OPS.pdf", description: "Evidence custody and court survivability" },
      { name: "Interoperability Profile", path: "/documents/5_Interoperability_Profile.pdf", description: "Canonical schemas, APIs, versioning" },
      { name: "Resilience & Disaster Recovery (RTO/RPO)", path: "/documents/6_Resilience_RTO_RPO_DR.pdf", description: "Recovery time/point objectives and DR" },
      { name: "Pilot SOW & Acceptance Criteria", path: "/documents/7_Pilot_SOW_Acceptance.pdf", description: "Scope, milestones, security gates" },
      { name: "Independent Assurance Plan", path: "/documents/8_Independent_Assurance_Plan.pdf", description: "External audits and SOC-equivalent assurance" },
      { name: "High Level Architecture", path: "/documents/High_Level_Architecture.pdf" },
      { name: "System Architecture & Catalog", path: "/documents/System_Architecture_and_Catalog.pdf" },
      { name: "Verification Hooks", path: "/documents/Verification_Hooks.pdf" },
      { name: "Functional Modules Overview", path: "/documents/Functional_Modules_Overview.pdf" },
      { name: "Deployment Models", path: "/documents/Deployment_Models.pdf" },
      { name: "DPI Integration Guide", path: "/documents/DPI_Integration_Guide.pdf" },
    ],
  },
  {
    id: "governance",
    label: "Governance & Policy",
    icon: Building2,
    docs: [
      { name: "Governance Authority Model", path: "/documents/Governance_Authority_Model.pdf" },
      { name: "Governance Record Definition", path: "/documents/Governance_Record_Definition.pdf" },
      { name: "Record Lifecycle Logic", path: "/documents/Record_Lifecycle_Logic.pdf" },
      { name: "Records Retention Schedule", path: "/documents/Records_Retention_Schedule.pdf" },
      { name: "Authoritative Master Record (FREEZE)", path: "/documents/Authoritative_Master_Record_FREEZE.pdf" },
      { name: "Actions & Omissions Framework", path: "/documents/Actions_and_Omissions_Framework.pdf" },
      { name: "Auditability & Verification Logic", path: "/documents/Auditability_Verification_Logic.pdf" },
      { name: "Risk Safeguards & Oversight", path: "/documents/Risk_Safeguards_Oversight.pdf" },
      { name: "Incident Response Plan", path: "/documents/Incident_Response_Plan.pdf" },
      { name: "Data Protection & Access Control Policy", path: "/documents/Data_Protection_and_Access_Control_Policy.pdf" },
      { name: "Privacy Impact Assessment", path: "/documents/Privacy_Impact_Assessment.pdf" },
      { name: "IP Scope & Attribution", path: "/documents/IP_Scope_and_Attribution.pdf" },
    ],
  },
  {
    id: "strategy",
    label: "Strategy & Valuation",
    icon: BarChart3,
    docs: [
      { name: "Feasibility Study", path: "/documents/Feasibility_Study.pdf" },
      { name: "Public Value & ROI", path: "/documents/Public_Value_ROI.pdf" },
      { name: "Valuation — 5yr Scenarios", path: "/documents/Valuation_5yr_Scenarios.pdf" },
      { name: "Procurement Strategy (PSPC)", path: "/documents/Procurement_Strategy_PSPC.pdf" },
      { name: "Training & Capacity Building", path: "/documents/Training_Capacity_Building.pdf" },
      { name: "Public Use Case Narratives", path: "/documents/Public_Use_Case_Narratives.pdf" },
      { name: "SHA-256 Manifest", path: "/documents/SHA256_MANIFEST_v4.pdf" },
      { name: "Two-Week Backlog (Optimum)", path: "/documents/optimum_two_week_backlog.pdf" },
    ],
  },
  {
    id: "data",
    label: "Data & Analytics",
    icon: FileSpreadsheet,
    docs: [
      { name: "DPI Value Breakdown — Expected", path: "/documents/dpi_value_breakdown_expected.pdf" },
      { name: "DPI Value — Canada & World Totals", path: "/documents/dpi_value_canada_world_totals.pdf" },
      { name: "DPI Value Common Breakdown — Expected", path: "/documents/dpi_value_common_breakdown_expected.pdf" },
      { name: "DPI Value Common Totals", path: "/documents/dpi_value_common_totals.pdf" },
    ],
  },
  {
    id: "templates",
    label: "Templates",
    icon: GraduationCap,
    docs: [
      { name: "NDA Template", path: "/documents/templates/GRGF_NDA_Template.pdf" },
      { name: "Pilot MOU Template", path: "/documents/templates/GRGF_Pilot_MOU_Template.pdf" },
      { name: "Licensing Agreement Template", path: "/documents/templates/GRGF_Licensing_Agreement_Template.pdf" },
      { name: "Partnership Agreement Template", path: "/documents/templates/GRGF_Partnership_Agreement_Template.pdf" },
      { name: "Data Processing Agreement", path: "/documents/templates/GRGF_Data_Processing_Agreement.pdf" },
      { name: "SLA Template", path: "/documents/templates/GRGF_SLA_Template.pdf" },
      { name: "RFP Template", path: "/documents/templates/GRGF_RFP_Template.pdf" },
      { name: "Project Charter Template", path: "/documents/templates/GRGF_Project_Charter_Template.pdf" },
      { name: "Budget Template", path: "/documents/templates/GRGF_Budget_Template.pdf" },
      { name: "Risk Assessment Form", path: "/documents/templates/GRGF_Risk_Assessment_Form.pdf" },
      { name: "Compliance Checklist", path: "/documents/templates/GRGF_Compliance_Checklist.pdf" },
      { name: "Communication Plan", path: "/documents/templates/GRGF_Communication_Plan.pdf" },
      { name: "Change Management Plan", path: "/documents/templates/GRGF_Change_Management_Plan.pdf" },
      { name: "Stakeholder Engagement Plan", path: "/documents/templates/GRGF_Stakeholder_Engagement_Plan.pdf" },
      { name: "Evaluation Scorecard", path: "/documents/templates/GRGF_Evaluation_Scorecard.pdf" },
      { name: "Incident Report Form", path: "/documents/templates/GRGF_Incident_Report_Form.pdf" },
      { name: "Institutional Brochure", path: "/documents/templates/GRGF_Institutional_Brochure.pdf" },
      { name: "Training Manual Template", path: "/documents/templates/GRGF_Training_Manual_Template.pdf" },
    ],
  },
];

const PDFCard = ({ doc, onPreview }: { doc: PDFDocument; onPreview: (doc: PDFDocument) => void }) => (
  <div className="group flex items-center justify-between gap-3 p-3 rounded-lg border border-border/50 bg-card hover:border-primary/30 hover:shadow-sm transition-all">
    <div className="flex items-center gap-3 min-w-0 flex-1">
      <FileText className="h-5 w-5 text-[#F25022] shrink-0" />
      <div className="min-w-0">
        <p className="text-sm font-medium truncate">{doc.name}</p>
        {doc.description && <p className="text-xs text-muted-foreground truncate">{doc.description}</p>}
      </div>
    </div>
    <div className="flex items-center gap-1.5 shrink-0">
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onPreview(doc)} title="Preview">
        <Eye className="h-4 w-4 text-[#7FBA00]" />
      </Button>
      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => window.open(doc.path, '_blank')} title="Print">
        <Printer className="h-4 w-4 text-[#00A4EF]" />
      </Button>
      <a href={doc.path} download>
        <Button variant="ghost" size="icon" className="h-8 w-8" title="Download">
          <Download className="h-4 w-4 text-[#FFB900]" />
        </Button>
      </a>
    </div>
  </div>
);

const PDFViewer = ({ doc, onClose }: { doc: PDFDocument; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 bg-black/80 flex flex-col animate-fade-in">
    <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
      <div className="flex items-center gap-3 min-w-0">
        <FileText className="h-5 w-5 text-[#F25022] shrink-0" />
        <span className="text-sm font-medium truncate">{doc.name}</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <Button variant="outline" size="sm" className="gap-1.5" onClick={() => window.open(doc.path, '_blank')}>
          <Printer className="h-3.5 w-3.5" /> Print
        </Button>
        <a href={doc.path} download>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="h-3.5 w-3.5" /> Download
          </Button>
        </a>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
    <div className="flex-1">
      <iframe src={doc.path} className="w-full h-full" title={doc.name} />
    </div>
  </div>
);

const ArchiveDownloads = () => {
  const [previewDoc, setPreviewDoc] = useState<PDFDocument | null>(null);
  const [search, setSearch] = useState("");
  const [zipping, setZipping] = useState<string | null>(null);

  const handleBulkDownload = async (catId: string, label: string, docs: PDFDocument[]) => {
    setZipping(catId);
    try {
      const zip = new JSZip();
      await Promise.all(
        docs.map(async (doc) => {
          const res = await fetch(doc.path);
          const blob = await res.blob();
          const filename = doc.path.split("/").pop() || "document.pdf";
          zip.file(filename, blob);
        })
      );
      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, `GRGF_${label.replace(/[^a-zA-Z0-9]/g, "_")}.zip`);
    } catch {
      console.error("Bulk download failed");
    } finally {
      setZipping(null);
    }
  };

  const totalDocs = categories.reduce((sum, c) => sum + c.docs.length, 0);

  const filterDocs = (docs: PDFDocument[]) => {
    if (!search.trim()) return docs;
    const q = search.toLowerCase();
    return docs.filter(d => d.name.toLowerCase().includes(q) || d.description?.toLowerCase().includes(q));
  };

  return (
    <div className="animate-fade-in">
      {previewDoc && <PDFViewer doc={previewDoc} onClose={() => setPreviewDoc(null)} />}

      <header className="border-b border-border bg-card/50 px-6 py-10 md:px-12">
        <div className="max-w-6xl">
          <p className="text-[10px] font-mono text-[#00A4EF] uppercase tracking-[0.2em] mb-2">Document Library</p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Complete PDF Archive
          </h1>
          <p className="mt-3 text-sm text-muted-foreground max-w-3xl">
            {totalDocs} documents across {categories.length} categories — all viewable, printable, and downloadable. Trilingual editions (EN/FR/AR) included.
          </p>
          <div className="relative mt-5 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search documents..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </div>
      </header>

      <div className="px-6 py-6 md:px-12">
        <div className="max-w-6xl">
          <Tabs defaultValue="volumes">
            <ScrollArea className="w-full">
              <TabsList className="inline-flex h-auto p-1 bg-muted/50 flex-wrap gap-1">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const count = filterDocs(cat.docs).length;
                  return (
                    <TabsTrigger key={cat.id} value={cat.id} className="gap-1.5 text-xs px-3 py-2 data-[state=active]:bg-background">
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">{cat.label}</span>
                      <span className="text-[10px] text-muted-foreground ml-1">({count})</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </ScrollArea>

            {categories.map((cat) => {
              const filtered = filterDocs(cat.docs);
              return (
                <TabsContent key={cat.id} value={cat.id} className="mt-4">
                  <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                    <h2 className="text-lg font-semibold flex items-center gap-2">
                      <cat.icon className="h-5 w-5 text-[#00A4EF]" />
                      {cat.label}
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground font-mono">{filtered.length} documents</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1.5 text-xs"
                        disabled={zipping === cat.id || filtered.length === 0}
                        onClick={() => handleBulkDownload(cat.id, cat.label, filtered)}
                      >
                        {zipping === cat.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <PackageOpen className="h-3.5 w-3.5" />}
                        Download All (.zip)
                      </Button>
                    </div>
                  </div>
                  {filtered.length === 0 ? (
                    <p className="text-sm text-muted-foreground py-8 text-center">No documents match your search.</p>
                  ) : (
                    <div className="grid gap-2">
                      {filtered.map((doc) => (
                        <PDFCard key={doc.path} doc={doc} onPreview={setPreviewDoc} />
                      ))}
                    </div>
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ArchiveDownloads;
