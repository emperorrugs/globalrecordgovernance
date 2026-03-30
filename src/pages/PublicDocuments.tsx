import { Link } from "react-router-dom";
import { FileText, Download, Globe, Shield, Layers, Database, BookOpen, ArrowRight, Briefcase, Scale, BarChart3, Landmark, GraduationCap, ClipboardList, Languages } from "lucide-react";

const documentCategories = [
  {
    title: "Sovereign Binder",
    desc: "Complete institutional framework — master edition with all volumes.",
    icon: BookOpen,
    files: [
      { name: "GRGF Master Binder v1", path: "/documents/GRGF_Master_Binder_v1.pdf" },
      { name: "Sovereign Authority Edition 2026", path: "/documents/GRGF_Sovereign_Authority_Edition_2026.pdf" },
      { name: "Complete Proposal 2026 (Expanded)", path: "/documents/GRGF_Complete_Proposal_2026_Expanded.pdf" },
      { name: "GRGF Vision and Purpose", path: "/documents/GRGF_Vision_and_Purpose.pdf" },
      { name: "Executive Decision Memo", path: "/documents/Executive_Decision_Memo.pdf" },
      { name: "Executive Summary — LinkedIn Brief", path: "/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf" },
      { name: "GRGF One Pager", path: "/documents/GRGF_One_Pager.pdf" },
      { name: "GRGF Public Overview", path: "/documents/GRGF_Public_Overview.pdf" },
      { name: "GRGF FAQ", path: "/documents/GRGF_FAQ.pdf" },
    ],
  },
  {
    title: "Volume Series",
    desc: "Four-volume sovereign publication suite — EN, FR, AR editions.",
    icon: Landmark,
    files: [
      { name: "Vol 1 — Master Complete Edition", path: "/documents/GRGF_Vol1_Master_Complete_Edition.pdf" },
      { name: "Vol 1 — Édition FR", path: "/documents/GRGF_Vol1_Master_Complete_Edition_FR.pdf" },
      { name: "Vol 1 — النسخة العربية", path: "/documents/GRGF_Vol1_Master_Complete_Edition_AR.pdf" },
      { name: "Vol 2 — Technical & Architecture Blueprints", path: "/documents/GRGF_Vol2_Technical_Architecture_Blueprints.pdf" },
      { name: "Vol 2 — Blueprints FR", path: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_FR.pdf" },
      { name: "Vol 2 — النسخة العربية", path: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_AR.pdf" },
      { name: "Vol 3 — Academy, Training & Certification", path: "/documents/GRGF_Vol3_Academy_Training_Certification.pdf" },
      { name: "Vol 3 — Formation FR", path: "/documents/GRGF_Vol3_Academy_Training_and_Certification_FR.pdf" },
      { name: "Vol 3 — النسخة العربية", path: "/documents/GRGF_Vol3_Academy_Training_and_Certification_AR.pdf" },
      { name: "Vol 4 — Standards & Compliance Reference", path: "/documents/GRGF_Vol4_Standards_Compliance_Reference.pdf" },
      { name: "Vol 4 — Normes FR", path: "/documents/GRGF_Vol4_Standards_and_Compliance_Reference_FR.pdf" },
      { name: "Vol 4 — النسخة العربية", path: "/documents/GRGF_Vol4_Standards_and_Compliance_Reference_AR.pdf" },
    ],
  },
  {
    title: "Applications Catalog",
    desc: "126 applications across 12 governance sectors with economic impact data.",
    icon: Database,
    files: [
      { name: "126 Applications Complete 2026", path: "/documents/GRGF_126_Applications_Complete_2026.pdf" },
      { name: "126 Applications — FR", path: "/documents/GRGF_126_Applications_Complete_2026_FR.pdf" },
      { name: "126 Applications — AR", path: "/documents/GRGF_126_Applications_Complete_2026_AR.pdf" },
      { name: "Value Proposition 2026", path: "/documents/GRGF_Value_Proposition_Complete_2026.pdf" },
      { name: "Value Proposition — FR", path: "/documents/GRGF_Value_Proposition_Complete_2026_FR.pdf" },
      { name: "Value Proposition — AR", path: "/documents/GRGF_Value_Proposition_Complete_2026_AR.pdf" },
      { name: "Public Use Case Narratives", path: "/documents/Public_Use_Case_Narratives.pdf" },
    ],
  },
  {
    title: "Architecture & Technical",
    desc: "Six-layer deterministic architecture, system blueprints, and DPI integration.",
    icon: Layers,
    files: [
      { name: "System Architecture & Catalog", path: "/documents/System_Architecture_and_Catalog.pdf" },
      { name: "High Level Architecture", path: "/documents/High_Level_Architecture.pdf" },
      { name: "Data Flow Architecture", path: "/documents/1_Data_Flow_Architecture.pdf" },
      { name: "Functional Modules Overview", path: "/documents/Functional_Modules_Overview.pdf" },
      { name: "Deployment Models", path: "/documents/Deployment_Models.pdf" },
      { name: "Connector Minimization Standard", path: "/documents/3_Connector_Minimization_Standard.pdf" },
      { name: "Verification Hooks", path: "/documents/Verification_Hooks.pdf" },
      { name: "Governance Record Definition", path: "/documents/Governance_Record_Definition.pdf" },
      { name: "Record Lifecycle Logic", path: "/documents/Record_Lifecycle_Logic.pdf" },
      { name: "Auditability & Verification Logic", path: "/documents/Auditability_Verification_Logic.pdf" },
      { name: "Phase 3 — Visual Operating Model", path: "/documents/GRGF_Phase_3_Visual_Operating_Model.pdf" },
    ],
  },
  {
    title: "International Alignment",
    desc: "Positioning papers for OECD, World Bank, UN, G20, and ITU standards.",
    icon: Globe,
    files: [
      { name: "DPI Integration Guide", path: "/documents/DPI_Integration_Guide.pdf" },
      { name: "Interoperability Profile", path: "/documents/5_Interoperability_Profile.pdf" },
      { name: "Feasibility Study", path: "/documents/Feasibility_Study.pdf" },
      { name: "Public Value & ROI", path: "/documents/Public_Value_ROI.pdf" },
      { name: "Valuation — 5-Year Scenarios", path: "/documents/Valuation_5yr_Scenarios.pdf" },
      { name: "Oral Defense Briefing Deck", path: "/documents/Oral_Defense_Briefing_Deck.pdf" },
    ],
  },
  {
    title: "Institutional Review — Maximum Depth",
    desc: "Comprehensive institutional review documents — EN and FR editions.",
    icon: ClipboardList,
    files: [
      { name: "Level 1 — Public Overview (Max Depth)", path: "/documents/GRGF_Level1_Public_Overview_MaxDepth.pdf" },
      { name: "Level 2 — Institutional Review (Max Depth)", path: "/documents/GRGF_Level2_Institutional_Review_MaxDepth.pdf" },
      { name: "Niveau 1 — Aperçu Public FR", path: "/documents/GRGF_Niveau1_Apercu_Public_MaxDepth_FR.pdf" },
      { name: "Niveau 2 — Examen Institutionnel FR", path: "/documents/GRGF_Niveau2_Examen_Institutionnel_MaxDepth_FR.pdf" },
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
      { name: "Risk Safeguards & Oversight", path: "/documents/Risk_Safeguards_Oversight.pdf" },
      { name: "Resilience — RTO / RPO / DR", path: "/documents/6_Resilience_RTO_RPO_DR.pdf" },
      { name: "Privacy Impact Assessment", path: "/documents/Privacy_Impact_Assessment.pdf" },
      { name: "SHA-256 Manifest", path: "/documents/SHA256_MANIFEST.txt" },
    ],
  },
  {
    title: "Governance & Policy",
    desc: "Authority models, chain of custody, anti-capture, and governance ethics.",
    icon: Scale,
    files: [
      { name: "Governance Authority Model", path: "/documents/Governance_Authority_Model.pdf" },
      { name: "Chain of Custody OPS", path: "/documents/4_Chain_of_Custody_OPS.pdf" },
      { name: "Actions & Omissions Framework", path: "/documents/Actions_and_Omissions_Framework.pdf" },
      { name: "Authoritative Master Record FREEZE", path: "/documents/Authoritative_Master_Record_FREEZE.pdf" },
      { name: "IP Scope and Attribution", path: "/documents/IP_Scope_and_Attribution.pdf" },
      { name: "Records Retention Schedule", path: "/documents/Records_Retention_Schedule.pdf" },
      { name: "Procurement Strategy (PSPC)", path: "/documents/Procurement_Strategy_PSPC.pdf" },
    ],
  },
  {
    title: "Academy & Training",
    desc: "Certification programs, training materials, and institutional capacity building.",
    icon: GraduationCap,
    files: [
      { name: "Training & Capacity Building", path: "/documents/Training_Capacity_Building.pdf" },
      { name: "Pilot SOW & Acceptance Criteria", path: "/documents/7_Pilot_SOW_Acceptance.pdf" },
      { name: "Independent Assurance Plan", path: "/documents/8_Independent_Assurance_Plan.pdf" },
    ],
  },
  {
    title: "DPI Value & Economic Data",
    desc: "Economic modeling, value breakdown, and backlog planning data.",
    icon: BarChart3,
    files: [
      { name: "DPI Value Breakdown (Expected)", path: "/documents/dpi_value_breakdown_expected.pdf" },
      { name: "DPI Value — Canada & World Totals", path: "/documents/dpi_value_canada_world_totals.pdf" },
      { name: "DPI Value — Common Breakdown", path: "/documents/dpi_value_common_breakdown_expected.pdf" },
      { name: "DPI Value — Common Totals", path: "/documents/dpi_value_common_totals.pdf" },
      { name: "Optimum Two-Week Backlog", path: "/documents/optimum_two_week_backlog.pdf" },
    ],
  },
  {
    title: "Translated Editions (FR / AR)",
    desc: "Complete French and Arabic editions of core documents.",
    icon: Languages,
    files: [
      { name: "Proposition complète 2026 — FR", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_FR.pdf" },
      { name: "الاقتراح الكامل 2026 — AR", path: "/documents/GRGF_Complete_Proposal_2026_Expanded_AR.pdf" },
      { name: "Édition Souveraine 2026 — FR", path: "/documents/GRGF_Sovereign_Authority_Edition_2026_FR.pdf" },
      { name: "النسخة السيادية 2026 — AR", path: "/documents/GRGF_Sovereign_Authority_Edition_2026_AR.pdf" },
      { name: "Résumé Exécutif LinkedIn — FR", path: "/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf" },
      { name: "Une Page — FR", path: "/documents/GRGF_Une_Page_FR.pdf" },
    ],
  },
  {
    title: "Institutional Templates",
    desc: "18 ready-to-use templates for sovereign engagement, procurement, and operations.",
    icon: Briefcase,
    files: [
      { name: "Project Charter Template", path: "/documents/templates/GRGF_Project_Charter_Template.pdf" },
      { name: "Pilot MOU Template", path: "/documents/templates/GRGF_Pilot_MOU_Template.pdf" },
      { name: "RFP Template", path: "/documents/templates/GRGF_RFP_Template.pdf" },
      { name: "Budget Template", path: "/documents/templates/GRGF_Budget_Template.pdf" },
      { name: "SLA Template", path: "/documents/templates/GRGF_SLA_Template.pdf" },
      { name: "NDA Template", path: "/documents/templates/GRGF_NDA_Template.pdf" },
      { name: "Partnership Agreement", path: "/documents/templates/GRGF_Partnership_Agreement_Template.pdf" },
      { name: "Licensing Agreement", path: "/documents/templates/GRGF_Licensing_Agreement_Template.pdf" },
      { name: "Data Processing Agreement", path: "/documents/templates/GRGF_Data_Processing_Agreement.pdf" },
      { name: "Compliance Checklist", path: "/documents/templates/GRGF_Compliance_Checklist.pdf" },
      { name: "Risk Assessment Form", path: "/documents/templates/GRGF_Risk_Assessment_Form.pdf" },
      { name: "Evaluation Scorecard", path: "/documents/templates/GRGF_Evaluation_Scorecard.pdf" },
      { name: "Incident Report Form", path: "/documents/templates/GRGF_Incident_Report_Form.pdf" },
      { name: "Communication Plan", path: "/documents/templates/GRGF_Communication_Plan.pdf" },
      { name: "Change Management Plan", path: "/documents/templates/GRGF_Change_Management_Plan.pdf" },
      { name: "Stakeholder Engagement Plan", path: "/documents/templates/GRGF_Stakeholder_Engagement_Plan.pdf" },
      { name: "Training Manual Template", path: "/documents/templates/GRGF_Training_Manual_Template.pdf" },
      { name: "Institutional Brochure", path: "/documents/templates/GRGF_Institutional_Brochure.pdf" },
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
          Access the complete institutional document library — {documentCategories.reduce((sum, cat) => sum + cat.files.length, 0)} documents
          across {documentCategories.length} categories. All files are downloadable and printable.
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
                  key={file.path}
                  href={file.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
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

      <div className="mt-6 text-center">
        <p className="text-[10px] text-muted-foreground/60">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
        </p>
      </div>
    </div>
  );
}
