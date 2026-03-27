import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search, Filter, Download, Lock, FileText, Shield, Building2, Users,
  Briefcase, Scale, Globe, BarChart3, BookOpen, Wrench, Folder, ChevronDown,
  ChevronRight, Eye, AlertTriangle, CheckCircle, Hash, Calendar, Tag
} from "lucide-react";
import { cn } from "@/lib/utils";

type AccessLevel = "public" | "institutional" | "admin-only";

interface ArchiveDocument {
  id: string;
  title: string;
  description: string;
  department: string;
  category: string;
  access: AccessLevel;
  format: string;
  version: string;
  date: string;
  downloadUrl?: string;
  hash?: string;
  tags: string[];
}

const DEPARTMENTS = [
  { id: "all", label: "All Departments", icon: Folder },
  { id: "executive", label: "Executive Office", icon: Briefcase },
  { id: "legal", label: "Legal & IP", icon: Scale },
  { id: "governance", label: "Governance", icon: Shield },
  { id: "compliance", label: "Compliance & Standards", icon: CheckCircle },
  { id: "technical", label: "Technical & Architecture", icon: Wrench },
  { id: "operations", label: "Operations", icon: Building2 },
  { id: "communications", label: "Communications & Outreach", icon: Globe },
  { id: "finance", label: "Finance & Procurement", icon: BarChart3 },
  { id: "hr", label: "Human Resources & Training", icon: Users },
  { id: "security", label: "Security & Risk", icon: AlertTriangle },
  { id: "research", label: "Research & Academy", icon: BookOpen },
];

const CATEGORIES = [
  "All", "Contracts & Agreements", "Forms & Templates", "Plans & Strategies",
  "Reports & Studies", "Brochures & Marketing", "Policies & Procedures",
  "Technical Documentation", "Training Materials", "Digital Books",
  "Compliance Evidence", "Financial Models", "Deployment Guides"
];

const archiveDocuments: ArchiveDocument[] = [
  // === PUBLIC DOCUMENTS ===
  // Executive
  { id: "EX-001", title: "GRGF Executive Summary (LinkedIn Brief)", description: "2-page institutional executive summary for professional distribution", department: "executive", category: "Brochures & Marketing", access: "public", format: "PDF", version: "1.0", date: "2026-03-15", downloadUrl: "/documents/GRGF_Executive_Summary_LinkedIn_Brief.pdf", tags: ["executive", "outreach"] },
  { id: "EX-002", title: "GRGF Marketing One-Pager", description: "Single-page value proposition for institutional contacts", department: "executive", category: "Brochures & Marketing", access: "public", format: "PDF", version: "1.0", date: "2026-03-15", downloadUrl: "/documents/GRGF_One_Pager.pdf", tags: ["marketing", "outreach"] },
  { id: "EX-003", title: "Résumé exécutif LinkedIn (Français)", description: "Sommaire exécutif de 2 pages pour distribution professionnelle", department: "executive", category: "Brochures & Marketing", access: "public", format: "PDF", version: "1.0", date: "2026-03-15", downloadUrl: "/documents/GRGF_Resume_Executif_LinkedIn_FR.pdf", tags: ["french", "outreach"] },
  { id: "EX-004", title: "Une page GRGF (Français)", description: "Proposition de valeur d'une page pour contacts institutionnels", department: "executive", category: "Brochures & Marketing", access: "public", format: "PDF", version: "1.0", date: "2026-03-15", downloadUrl: "/documents/GRGF_Une_Page_FR.pdf", tags: ["french", "marketing"] },
  { id: "EX-005", title: "Institutional Brochure", description: "Comprehensive overview brochure for institutional audiences", department: "communications", category: "Brochures & Marketing", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Institutional_Brochure.pdf", tags: ["marketing", "brochure"] },
  { id: "EX-006", title: "Executive Decision Memo", description: "Decision support memo for institutional leadership", department: "executive", category: "Reports & Studies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Executive_Decision_Memo.md", tags: ["executive", "decision"] },

  // Digital Books (Public Levels)
  { id: "DB-001", title: "Level 1 — Public Overview Digital Book (English)", description: "Maximum-depth public overview. 438+ pages covering governance foundations, architecture, training, and toolkits.", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-20", downloadUrl: "/documents/GRGF_Level1_Public_Overview_MaxDepth.pdf", hash: "a7f3c2d1", tags: ["book", "level-1"] },
  { id: "DB-002", title: "Level 2 — Institutional Review Digital Book (English)", description: "566+ pages. Extends Level 1 with advanced governance protocols and compliance evidence workbooks.", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-20", downloadUrl: "/documents/GRGF_Level2_Institutional_Review_MaxDepth.pdf", hash: "b8e4d3c2", tags: ["book", "level-2"] },
  { id: "DB-003", title: "Niveau 1 — Aperçu public (Français)", description: "Version française du livre numérique de niveau 1", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-20", downloadUrl: "/documents/GRGF_Niveau1_Apercu_Public_MaxDepth_FR.pdf", tags: ["book", "french", "level-1"] },
  { id: "DB-004", title: "Niveau 2 — Examen institutionnel (Français)", description: "Version française du livre numérique de niveau 2", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-20", downloadUrl: "/documents/GRGF_Niveau2_Examen_Institutionnel_MaxDepth_FR.pdf", tags: ["book", "french", "level-2"] },
  { id: "DB-005", title: "Level 3 — Restricted Technical Detail Digital Book", description: "702+ pages. NDA required. Contains proprietary schemas and API specifications.", department: "technical", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-20", tags: ["book", "level-3", "restricted"] },
  { id: "DB-006", title: "Level 4 — Sovereign Deployment Digital Book", description: "878+ pages. Government authorization required. Classified protocols.", department: "technical", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-20", tags: ["book", "level-4", "sovereign"] },

  // Governance Documents
  { id: "GV-001", title: "GRGF Master Binder v1", description: "Complete institutional reference document (11 sections)", department: "governance", category: "Reports & Studies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/GRGF_Master_Binder_v1.md", tags: ["master", "reference"] },
  { id: "GV-002", title: "Governance Authority Model", description: "Authority structure and decision-making hierarchy", department: "governance", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Governance_Authority_Model.md", tags: ["authority", "governance"] },
  { id: "GV-003", title: "Governance Record Definition", description: "Definition and taxonomy of governance records", department: "governance", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Governance_Record_Definition.md", tags: ["records", "taxonomy"] },
  { id: "GV-004", title: "Record Lifecycle Logic", description: "Five-step record lifecycle: Proposal → Record → Seal → Audit → Revision", department: "governance", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Record_Lifecycle_Logic.md", tags: ["lifecycle", "records"] },
  { id: "GV-005", title: "Actions and Omissions Framework", description: "Framework for tracking governance actions and detecting omissions", department: "governance", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Actions_and_Omissions_Framework.md", tags: ["omissions", "accountability"] },

  // Technical / Architecture
  { id: "TA-001", title: "High Level Architecture", description: "Six-layer architecture overview", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/High_Level_Architecture.md", tags: ["architecture", "technical"] },
  { id: "TA-002", title: "System Architecture and Catalog", description: "Complete system architecture catalog with data flow diagrams", department: "technical", category: "Technical Documentation", access: "public", format: "PDF", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/System_Architecture_and_Catalog.pdf", tags: ["architecture", "catalog"] },
  { id: "TA-003", title: "Functional Modules Overview", description: "Overview of all functional modules in the GRGF system", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Functional_Modules_Overview.md", tags: ["modules", "technical"] },
  { id: "TA-004", title: "DPI Integration Guide", description: "Guide for integrating GRGF into national DPI stacks", department: "technical", category: "Deployment Guides", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/DPI_Integration_Guide.md", tags: ["dpi", "integration"] },
  { id: "TA-005", title: "Verification Hooks", description: "API verification endpoints and hash verification procedures", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Verification_Hooks.md", tags: ["verification", "api"] },
  { id: "TA-006", title: "Interoperability Profile", description: "Cross-system interoperability standards and connectors", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/5_Interoperability_Profile.md", tags: ["interoperability", "standards"] },
  { id: "TA-007", title: "Auditability Verification Logic", description: "Logic for verifying governance audit trails", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Auditability_Verification_Logic.md", tags: ["audit", "verification"] },
  { id: "TA-008", title: "Data Flow Architecture", description: "Detailed data flow architecture diagrams and specifications", department: "technical", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/1_Data_Flow_Architecture.md", tags: ["data-flow", "architecture"] },

  // Security & Risk
  { id: "SR-001", title: "Threat Model (STRIDE)", description: "STRIDE-based threat model for governance infrastructure", department: "security", category: "Reports & Studies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/2_Threat_Model_STRIDE.md", tags: ["stride", "threats"] },
  { id: "SR-002", title: "Incident Response Plan", description: "Evidence-preserving incident response procedures", department: "security", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Incident_Response_Plan.md", tags: ["incident", "response"] },
  { id: "SR-003", title: "Risk Safeguards and Oversight", description: "Risk management framework with safeguards and oversight procedures", department: "security", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Risk_Safeguards_Oversight.md", tags: ["risk", "safeguards"] },
  { id: "SR-004", title: "Resilience RTO/RPO/DR", description: "Business continuity and disaster recovery specifications", department: "security", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/6_Resilience_RTO_RPO_DR.md", tags: ["resilience", "disaster-recovery"] },

  // Compliance
  { id: "CO-001", title: "Privacy Impact Assessment", description: "PIA aligned with PIPEDA and GDPR principles", department: "compliance", category: "Compliance Evidence", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Privacy_Impact_Assessment.md", tags: ["privacy", "pia"] },
  { id: "CO-002", title: "Data Protection and Access Control Policy", description: "RBAC/ABAC access control and encryption policy", department: "compliance", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Data_Protection_and_Access_Control_Policy.md", tags: ["data-protection", "access-control"] },
  { id: "CO-003", title: "Records Retention Schedule", description: "Retention periods and disposal procedures for all record types", department: "compliance", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Records_Retention_Schedule.md", tags: ["retention", "records"] },
  { id: "CO-004", title: "Connector Minimization Standard", description: "Minimization standards for system connectors", department: "compliance", category: "Technical Documentation", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/3_Connector_Minimization_Standard.md", tags: ["connectors", "minimization"] },
  { id: "CO-005", title: "Independent Assurance Plan", description: "Four-phase independent validation roadmap", department: "compliance", category: "Plans & Strategies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/8_Independent_Assurance_Plan.md", tags: ["assurance", "validation"] },

  // Operations & Deployment
  { id: "OP-001", title: "Deployment Models", description: "Sovereign deployment archetypes and configuration options", department: "operations", category: "Deployment Guides", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Deployment_Models.md", tags: ["deployment", "models"] },
  { id: "OP-002", title: "Chain of Custody Operations", description: "Operational procedures for chain of custody management", department: "operations", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/4_Chain_of_Custody_OPS.md", tags: ["chain-of-custody", "operations"] },
  { id: "OP-003", title: "Pilot SOW & Acceptance", description: "Statement of work and acceptance criteria for pilot programmes", department: "operations", category: "Contracts & Agreements", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/7_Pilot_SOW_Acceptance.md", tags: ["pilot", "sow"] },

  // Communications & Outreach
  { id: "CM-001", title: "GRGF Vision and Purpose", description: "Strategic vision and purpose statement", department: "communications", category: "Brochures & Marketing", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/GRGF_Vision_and_Purpose.md", tags: ["vision", "purpose"] },
  { id: "CM-002", title: "Public Overview", description: "Public-facing overview of the framework", department: "communications", category: "Brochures & Marketing", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/GRGF_Public_Overview.md", tags: ["public", "overview"] },
  { id: "CM-003", title: "Public Use Case Narratives", description: "Real-world use case stories for public audiences", department: "communications", category: "Brochures & Marketing", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Public_Use_Case_Narratives.md", tags: ["use-cases", "narratives"] },
  { id: "CM-004", title: "FAQ Document", description: "Frequently asked questions about the GRGF", department: "communications", category: "Brochures & Marketing", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/GRGF_FAQ.md", tags: ["faq", "questions"] },

  // Finance & Procurement
  { id: "FI-001", title: "Feasibility Study", description: "Comprehensive feasibility analysis for GRGF deployment", department: "finance", category: "Reports & Studies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Feasibility_Study.md", tags: ["feasibility", "study"] },
  { id: "FI-002", title: "Public Value & ROI Analysis", description: "10-year economic value and return on investment model", department: "finance", category: "Financial Models", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Public_Value_ROI.md", tags: ["roi", "value"] },
  { id: "FI-003", title: "Valuation 5-Year Scenarios", description: "Five-year valuation scenarios for sovereign deployment", department: "finance", category: "Financial Models", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Valuation_5yr_Scenarios.md", tags: ["valuation", "scenarios"] },
  { id: "FI-004", title: "Procurement Strategy (PSPC)", description: "Procurement strategy aligned with Canadian PSPC standards", department: "finance", category: "Plans & Strategies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Procurement_Strategy_PSPC.md", tags: ["procurement", "pspc"] },

  // HR & Training
  { id: "HR-001", title: "Training and Capacity Building", description: "Comprehensive training programme and capacity building strategy", department: "hr", category: "Training Materials", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Training_Capacity_Building.md", tags: ["training", "capacity"] },

  // Legal & IP
  { id: "LG-001", title: "IP Scope and Attribution", description: "Intellectual property scope and inventor attribution", department: "legal", category: "Policies & Procedures", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/IP_Scope_and_Attribution.md", tags: ["ip", "attribution"] },
  { id: "LG-002", title: "Authoritative Master Record FREEZE", description: "Frozen master record for legal and archival purposes", department: "legal", category: "Compliance Evidence", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Authoritative_Master_Record_FREEZE.md", tags: ["freeze", "master-record"] },
  { id: "LG-003", title: "SHA-256 Manifest", description: "Cryptographic integrity manifest for all archived documents", department: "legal", category: "Compliance Evidence", access: "public", format: "TXT", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/SHA256_MANIFEST.txt", tags: ["hash", "integrity"] },

  // Research
  { id: "RS-001", title: "Oral Defense Briefing Deck", description: "Academic-style oral defense briefing for framework validation", department: "research", category: "Reports & Studies", access: "public", format: "MD", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/Oral_Defense_Briefing_Deck.md", tags: ["defense", "academic"] },

  // === TEMPLATES & FORMS (Public - downloadable tools) ===
  { id: "TF-001", title: "Non-Disclosure Agreement (NDA) Template", description: "Standard NDA for Level 3/4 document access under CRP v1.0", department: "legal", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_NDA_Template.pdf", tags: ["nda", "contract"] },
  { id: "TF-002", title: "Pilot MOU Template", description: "Memorandum of Understanding for 90-day pilot programmes", department: "legal", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Pilot_MOU_Template.pdf", tags: ["mou", "pilot"] },
  { id: "TF-003", title: "Sovereign Licensing Agreement Template", description: "Multi-tier licensing agreement for national/institutional deployment", department: "legal", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Licensing_Agreement_Template.pdf", tags: ["license", "sovereign"] },
  { id: "TF-004", title: "Strategic Partnership Agreement Template", description: "Partnership agreement for technology, knowledge, and deployment partners", department: "legal", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Partnership_Agreement_Template.pdf", tags: ["partnership", "agreement"] },
  { id: "TF-005", title: "Data Processing Agreement (DPA)", description: "GDPR/PIPEDA-compliant data processing agreement", department: "compliance", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Data_Processing_Agreement.pdf", tags: ["dpa", "gdpr"] },
  { id: "TF-006", title: "Service Level Agreement (SLA) Template", description: "Performance standards and availability targets for GRGF services", department: "operations", category: "Contracts & Agreements", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_SLA_Template.pdf", tags: ["sla", "service"] },
  { id: "TF-007", title: "Risk Assessment Form", description: "Institutional risk evaluation form with scoring matrix", department: "security", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Risk_Assessment_Form.pdf", tags: ["risk", "assessment"] },
  { id: "TF-008", title: "Standards Compliance Checklist", description: "ISO 27001, ISO 15489, OECD, GDPR compliance verification checklist", department: "compliance", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Compliance_Checklist.pdf", tags: ["compliance", "checklist"] },
  { id: "TF-009", title: "Stakeholder Engagement Plan", description: "Structured stakeholder mapping and engagement strategy", department: "communications", category: "Plans & Strategies", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Stakeholder_Engagement_Plan.pdf", tags: ["stakeholder", "engagement"] },
  { id: "TF-010", title: "Deployment Budget Template", description: "Cost estimation template for infrastructure, personnel, and licensing", department: "finance", category: "Financial Models", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Budget_Template.pdf", tags: ["budget", "finance"] },
  { id: "TF-011", title: "Change Management Plan", description: "Organizational change management strategy for GRGF deployment", department: "hr", category: "Plans & Strategies", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Change_Management_Plan.pdf", tags: ["change", "management"] },
  { id: "TF-012", title: "Request for Proposal (RFP) Template", description: "RFP template for procurement of GRGF deployment services", department: "finance", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_RFP_Template.pdf", tags: ["rfp", "procurement"] },
  { id: "TF-013", title: "Incident Report Form", description: "Standardized incident reporting with severity classification", department: "security", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Incident_Report_Form.pdf", tags: ["incident", "form"] },
  { id: "TF-014", title: "Institutional Evaluation Scorecard", description: "Post-pilot evaluation scorecard with scoring matrix", department: "operations", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Evaluation_Scorecard.pdf", tags: ["evaluation", "scorecard"] },
  { id: "TF-015", title: "Strategic Communication Plan", description: "Multi-channel communication strategy for institutional outreach", department: "communications", category: "Plans & Strategies", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Communication_Plan.pdf", tags: ["communication", "strategy"] },
  { id: "TF-016", title: "Training Manual — Reviewer Certification", description: "6-module certification programme for institutional reviewers", department: "hr", category: "Training Materials", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Training_Manual_Template.pdf", tags: ["training", "certification"] },
  { id: "TF-017", title: "Project Charter Template", description: "Project initiation charter with milestones and budget summary", department: "operations", category: "Forms & Templates", access: "public", format: "PDF", version: "1.0", date: "2026-03-26", downloadUrl: "/documents/templates/GRGF_Project_Charter_Template.pdf", tags: ["charter", "project"] },

  // === ADMIN-ONLY DOCUMENTS ===
  { id: "AD-001", title: "Internal Pricing Matrix", description: "Confidential licensing fee schedules by deployment tier and scale", department: "finance", category: "Financial Models", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["pricing", "confidential"] },
  { id: "AD-002", title: "Patent Strategy and Prosecution Timeline", description: "IP prosecution strategy, filing dates, and jurisdiction expansion plan", department: "legal", category: "Plans & Strategies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["patent", "strategy"] },
  { id: "AD-003", title: "Board Meeting Minutes — Q1 2026", description: "Confidential governance board meeting records", department: "governance", category: "Reports & Studies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["board", "minutes"] },
  { id: "AD-004", title: "Investor & Donor Prospect List", description: "Confidential pipeline of institutional and sovereign investors", department: "finance", category: "Plans & Strategies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["investors", "pipeline"] },
  { id: "AD-005", title: "Staff Compensation Framework", description: "Internal salary bands, equity allocation, and benefits structure", department: "hr", category: "Policies & Procedures", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["compensation", "hr"] },
  { id: "AD-006", title: "Security Penetration Test Results", description: "Confidential results of latest infrastructure security assessment", department: "security", category: "Reports & Studies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["pentest", "security"] },
  { id: "AD-007", title: "Level 3 Technical Schemas (Full)", description: "Complete API schemas, database models, and integration blueprints", department: "technical", category: "Technical Documentation", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["schemas", "api"] },
  { id: "AD-008", title: "Level 4 Sovereign Deployment Protocols", description: "Classified national key management and federation procedures", department: "technical", category: "Deployment Guides", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["sovereign", "classified"] },
  { id: "AD-009", title: "Partnership Revenue Projections", description: "5-year revenue forecasts by partner category and region", department: "finance", category: "Financial Models", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["revenue", "projections"] },
  { id: "AD-010", title: "Competitive Intelligence Brief", description: "Analysis of competing governance frameworks and positioning", department: "executive", category: "Reports & Studies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["competitive", "intelligence"] },
  { id: "AD-011", title: "Media Crisis Communication Playbook", description: "Internal playbook for managing negative press or institutional scrutiny", department: "communications", category: "Plans & Strategies", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["crisis", "media"] },
  { id: "AD-012", title: "Internal Audit Trail — System Operations", description: "Operational audit records for internal system administration", department: "operations", category: "Compliance Evidence", access: "admin-only", format: "INTERNAL", version: "1.0", date: "2026-03-26", tags: ["audit", "internal"] },

  // Institutional access docs
  { id: "IN-001", title: "Phase 3 Visual Operating Model", description: "Visual operating model for institutional evaluation (institutional access)", department: "executive", category: "Reports & Studies", access: "institutional", format: "PDF", version: "1.0", date: "2026-01-30", downloadUrl: "/documents/GRGF_Phase_3_Visual_Operating_Model.pdf", tags: ["operating-model", "visual"] },

  // === VOLUMES (Trilingual) ===
  { id: "VOL-001", title: "Volume I — Master Complete Edition (English)", description: "438+ page definitive consolidated reference including architecture, ROI model, anti-capture clauses, and operational toolkit", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol1_Master_Complete_Edition.pdf", tags: ["volume", "master", "english"] },
  { id: "VOL-002", title: "Volume I — Édition Maîtresse Complète (Français)", description: "Référence institutionnelle définitive — architecture, modèle de valeur, clauses anti-capture", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol1_Master_Complete_Edition_FR.pdf", tags: ["volume", "master", "french"] },
  { id: "VOL-003", title: "Volume I — Master Complete Edition (Arabic)", description: "Definitive institutional reference — architecture, value model, anti-capture clauses", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol1_Master_Complete_Edition_AR.pdf", tags: ["volume", "master", "arabic"] },
  { id: "VOL-004", title: "Volume II — Technical & Architecture Blueprints (English)", description: "566+ page deep-dive: Merkle protocols, OPA/Rego, HSM specs, API reference, federation", department: "technical", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol2_Technical_Architecture_Blueprints.pdf", tags: ["volume", "technical", "english"] },
  { id: "VOL-005", title: "Volume II — Plans Techniques et Architecture (Français)", description: "Spécifications techniques détaillées de l'architecture déterministe à six couches", department: "technical", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_FR.pdf", tags: ["volume", "technical", "french"] },
  { id: "VOL-006", title: "Volume II — Technical & Architecture Blueprints (Arabic)", description: "Detailed technical specifications of the six-layer deterministic architecture", department: "technical", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Vol2_Technical_and_Architecture_Blueprints_AR.pdf", tags: ["volume", "technical", "arabic"] },
  { id: "VOL-007", title: "Volume III — Academy, Training & Certification (English)", description: "702+ page certification programme: 4 tiers, 76+ training hours, 10 simulation labs", department: "research", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "academy", "english", "restricted"] },
  { id: "VOL-008", title: "Volume III — Académie, Formation et Certification (Français)", description: "Programme complet de développement professionnel et de certification — accès restreint", department: "research", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "academy", "french", "restricted"] },
  { id: "VOL-009", title: "Volume III — Academy, Training & Certification (Arabic)", description: "Complete professional development and certification programme — restricted access", department: "research", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "academy", "arabic", "restricted"] },
  { id: "VOL-010", title: "Volume IV — Standards & Compliance Reference (English)", description: "878+ page compliance mapping: ISO 27001, GDPR, OECD, UN SDG 16, World Bank DPI", department: "compliance", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "compliance", "english", "restricted"] },
  { id: "VOL-011", title: "Volume IV — Normes et Référence de Conformité (Français)", description: "Cartographie complète aux normes internationales ISO, OCDE, RGPD et ONU", department: "compliance", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "compliance", "french", "restricted"] },
  { id: "VOL-012", title: "Volume IV — Standards & Compliance Reference (Arabic)", description: "Complete mapping to international standards ISO, OECD, GDPR and UN", department: "compliance", category: "Digital Books", access: "admin-only", format: "PDF", version: "3.0", date: "2026-03-27", tags: ["volume", "compliance", "arabic", "restricted"] },

  // === SOVEREIGN AUTHORITY EDITION (Trilingual) ===
  { id: "SAE-001", title: "Sovereign Authority Edition 2026 (English)", description: "Definitive inventor-controlled presentation: stewardship model, anti-capture clauses, 10-year ROI, valuation scenarios", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Sovereign_Authority_Edition_2026.pdf", tags: ["sovereign", "authority", "english"] },
  { id: "SAE-002", title: "Édition Autorité Souveraine 2026 (Français)", description: "Présentation institutionnelle définitive — modèle de gestion contrôlée par l'inventeur", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Sovereign_Authority_Edition_2026_FR.pdf", tags: ["sovereign", "authority", "french"] },
  { id: "SAE-003", title: "Sovereign Authority Edition 2026 (Arabic)", description: "Definitive institutional presentation — inventor-controlled stewardship model", department: "executive", category: "Digital Books", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Sovereign_Authority_Edition_2026_AR.pdf", tags: ["sovereign", "authority", "arabic"] },

  // === VALUE PROPOSITION (Trilingual) ===
  { id: "VP-001", title: "Value Proposition Complete 2026 (English)", description: "Full maximum-depth economic analysis: 6 stakeholder categories, 120+ applications, $18.3B–$96.2B projections", department: "finance", category: "Financial Models", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Value_Proposition_Complete_2026.pdf", tags: ["value", "proposition", "english"] },
  { id: "VP-002", title: "Proposition de Valeur Complète 2026 (Français)", description: "Analyse économique approfondie : 6 catégories de parties prenantes, 120+ applications", department: "finance", category: "Financial Models", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Value_Proposition_Complete_2026_FR.pdf", tags: ["value", "proposition", "french"] },
  { id: "VP-003", title: "Value Proposition Complete 2026 (Arabic)", description: "Full economic analysis: 6 stakeholder categories, 120+ applications, all scenarios", department: "finance", category: "Financial Models", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Value_Proposition_Complete_2026_AR.pdf", tags: ["value", "proposition", "arabic"] },

  // === COMPLETE PROPOSAL (Trilingual) ===
  { id: "CP-001", title: "Complete Project Proposal — Expanded Edition (English)", description: "28-page institutional proposal with 5 case studies, sensitivity analysis, charts, and enterprise valuation", department: "executive", category: "Reports & Studies", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Complete_Proposal_2026_Expanded.pdf", tags: ["proposal", "expanded", "english"] },
  { id: "CP-002", title: "Proposition de Projet Complète — Édition Élargie (Français)", description: "Proposition institutionnelle de 28 pages avec études de cas, analyse de sensibilité et valorisation", department: "executive", category: "Reports & Studies", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Complete_Proposal_2026_Expanded_FR.pdf", tags: ["proposal", "expanded", "french"] },
  { id: "CP-003", title: "Complete Project Proposal — Expanded Edition (Arabic)", description: "28-page institutional proposal with case studies, sensitivity analysis, and valuation scenarios", department: "executive", category: "Reports & Studies", access: "public", format: "PDF", version: "3.0", date: "2026-03-27", downloadUrl: "/documents/GRGF_Complete_Proposal_2026_Expanded_AR.pdf", tags: ["proposal", "expanded", "arabic"] },
];

const accessConfig = {
  "public": { label: "PUBLIC", color: "text-accent bg-accent/10 border-accent/20", icon: Eye },
  "institutional": { label: "INSTITUTIONAL", color: "text-primary bg-primary/10 border-primary/20", icon: Building2 },
  "admin-only": { label: "ADMIN ONLY", color: "text-destructive bg-destructive/10 border-destructive/20", icon: Lock },
};

function DepartmentSidebar({ selected, onSelect, counts }: { selected: string; onSelect: (d: string) => void; counts: Record<string, number> }) {
  return (
    <div className="space-y-0.5">
      {DEPARTMENTS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={cn(
            "w-full flex items-center gap-2.5 px-3 py-2 rounded-sm text-xs transition-colors text-left",
            selected === id ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          <Icon className="h-3.5 w-3.5 shrink-0" />
          <span className="flex-1 truncate">{label}</span>
          <span className="text-[10px] font-mono opacity-60">{counts[id] || 0}</span>
        </button>
      ))}
    </div>
  );
}

const ArchiveIntelligent = () => {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("all");
  const [category, setCategory] = useState("All");
  const [accessFilter, setAccessFilter] = useState<"all" | AccessLevel>("all");
  const [expandedDepts, setExpandedDepts] = useState<Set<string>>(new Set(DEPARTMENTS.map(d => d.id)));

  const deptCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    archiveDocuments.forEach(doc => {
      counts[doc.department] = (counts[doc.department] || 0) + 1;
    });
    counts["all"] = archiveDocuments.length;
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return archiveDocuments.filter(doc => {
      const matchSearch = !search || doc.title.toLowerCase().includes(search.toLowerCase()) || doc.description.toLowerCase().includes(search.toLowerCase()) || doc.tags.some(t => t.includes(search.toLowerCase()));
      const matchDept = department === "all" || doc.department === department;
      const matchCat = category === "All" || doc.category === category;
      const matchAccess = accessFilter === "all" || doc.access === accessFilter;
      return matchSearch && matchDept && matchCat && matchAccess;
    });
  }, [search, department, category, accessFilter]);

  const grouped = useMemo(() => {
    const groups: Record<string, ArchiveDocument[]> = {};
    filtered.forEach(doc => {
      if (!groups[doc.department]) groups[doc.department] = [];
      groups[doc.department].push(doc);
    });
    return groups;
  }, [filtered]);

  const stats = useMemo(() => ({
    total: archiveDocuments.length,
    public: archiveDocuments.filter(d => d.access === "public").length,
    institutional: archiveDocuments.filter(d => d.access === "institutional").length,
    admin: archiveDocuments.filter(d => d.access === "admin-only").length,
  }), []);

  const toggleDept = (dept: string) => {
    setExpandedDepts(prev => {
      const next = new Set(prev);
      if (next.has(dept)) next.delete(dept); else next.add(dept);
      return next;
    });
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <header className="border-b border-border bg-card/50 px-8 py-10 md:px-12 lg:px-16">
        <div className="max-w-6xl">
          <p className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] mb-3">Intelligent Archive System</p>
          <h1 className="institutional-heading text-3xl md:text-4xl font-semibold">
            GRGF Institutional Archive
          </h1>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Comprehensive document management system organized by department. All documents are classified, version-controlled, and integrity-verified. Public materials are freely accessible; internal documents require administrative authorization.
          </p>
          <div className="flex flex-wrap gap-4 mt-5">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-sm border border-accent/20">
              <FileText className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-mono text-accent">{stats.total} TOTAL DOCUMENTS</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-sm border border-border">
              <Eye className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[10px] font-mono text-muted-foreground">{stats.public} PUBLIC</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-muted rounded-sm border border-border">
              <Lock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-[10px] font-mono text-muted-foreground">{stats.admin} ADMIN ONLY</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 border-r border-border bg-card/50 hidden md:block">
          <div className="sticky top-12 py-6 px-3">
            <p className="px-3 text-[10px] font-mono text-muted-foreground/60 uppercase tracking-[0.15em] mb-4">Departments</p>
            <DepartmentSidebar selected={department} onSelect={setDepartment} counts={deptCounts} />
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0 px-6 py-6 md:px-10">
          {/* Search & Filters */}
          <div className="space-y-3 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search documents, tags, descriptions..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-border rounded-sm bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <Filter className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase">Category:</span>
              </div>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={cn(
                    "px-2.5 py-1 text-[10px] font-mono tracking-wider border rounded-sm transition-colors",
                    category === cat ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:bg-card"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <Shield className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-[10px] font-mono text-muted-foreground/60 uppercase">Access:</span>
              </div>
              {(["all", "public", "institutional", "admin-only"] as const).map(level => (
                <button
                  key={level}
                  onClick={() => setAccessFilter(level)}
                  className={cn(
                    "px-2.5 py-1 text-[10px] font-mono tracking-wider border rounded-sm transition-colors",
                    accessFilter === level ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:bg-card"
                  )}
                >
                  {level === "all" ? "ALL" : level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-4">{filtered.length} document{filtered.length !== 1 ? "s" : ""} found</p>

          {/* Mobile department selector */}
          <div className="md:hidden mb-4">
            <select
              value={department}
              onChange={e => setDepartment(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-border rounded-sm bg-card text-foreground"
            >
              {DEPARTMENTS.map(d => (
                <option key={d.id} value={d.id}>{d.label} ({deptCounts[d.id] || 0})</option>
              ))}
            </select>
          </div>

          {/* Document Groups */}
          <div className="space-y-4">
            {Object.entries(grouped).map(([deptId, docs]) => {
              const dept = DEPARTMENTS.find(d => d.id === deptId);
              if (!dept) return null;
              const Icon = dept.icon;
              const isExpanded = expandedDepts.has(deptId);

              return (
                <div key={deptId} className="border border-border rounded-sm overflow-hidden">
                  <button
                    onClick={() => toggleDept(deptId)}
                    className="w-full flex items-center gap-3 px-5 py-3 bg-card hover:bg-muted/50 transition-colors text-left"
                  >
                    {isExpanded ? <ChevronDown className="h-3.5 w-3.5 text-accent shrink-0" /> : <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
                    <Icon className="h-4 w-4 text-accent/70 shrink-0" />
                    <span className="font-serif text-sm font-semibold">{dept.label}</span>
                    <span className="ml-auto text-[10px] text-muted-foreground/50 font-mono">{docs.length} DOCS</span>
                  </button>

                  {isExpanded && (
                    <div className="border-t border-border divide-y divide-border/50">
                      {docs.map(doc => {
                        const ac = accessConfig[doc.access];
                        const AcIcon = ac.icon;
                        return (
                          <div key={doc.id} className="px-5 py-3 hover:bg-muted/20 transition-colors">
                            <div className="flex items-start gap-3">
                              <FileText className="h-4 w-4 text-accent/60 shrink-0 mt-0.5" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="text-[10px] font-mono text-muted-foreground/50">{doc.id}</span>
                                  <h3 className="text-xs font-semibold">{doc.title}</h3>
                                </div>
                                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{doc.description}</p>
                                <div className="flex flex-wrap items-center gap-2 mt-2">
                                  <span className={cn("text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded-sm border inline-flex items-center gap-1", ac.color)}>
                                    <AcIcon className="h-2.5 w-2.5" /> {ac.label}
                                  </span>
                                  <span className="text-[9px] font-mono text-muted-foreground/40 bg-muted px-1.5 py-0.5 rounded-sm">{doc.category}</span>
                                  <span className="text-[9px] font-mono text-muted-foreground/40">{doc.format}</span>
                                  <span className="text-[9px] font-mono text-muted-foreground/40">v{doc.version}</span>
                                  <span className="text-[9px] font-mono text-muted-foreground/40">{doc.date}</span>
                                </div>
                                {doc.tags.length > 0 && (
                                  <div className="flex flex-wrap gap-1 mt-1.5">
                                    {doc.tags.map(tag => (
                                      <span key={tag} className="text-[8px] font-mono text-muted-foreground/40 bg-muted/50 px-1.5 py-0.5 rounded-sm">#{tag}</span>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <div className="shrink-0">
                                {doc.access === "public" && doc.downloadUrl ? (
                                  <a
                                    href={doc.downloadUrl}
                                    download
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-border text-[10px] font-medium rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                  >
                                    <Download className="h-3 w-3" /> Download
                                  </a>
                                ) : doc.access === "institutional" ? (
                                  <Link to="/controlled-access" className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-border text-[10px] font-medium rounded-sm hover:bg-card transition-colors text-muted-foreground">
                                    <Building2 className="h-3 w-3" /> Request
                                  </Link>
                                ) : (
                                  <span className="inline-flex items-center gap-1 px-2.5 py-1.5 border border-destructive/20 text-[10px] font-medium rounded-sm text-destructive/60 bg-destructive/5">
                                    <Lock className="h-3 w-3" /> Restricted
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">
                <Search className="h-8 w-8 mx-auto mb-3 opacity-30" />
                <p className="text-sm">No documents match your search criteria.</p>
                <p className="text-xs mt-1">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="governance-card border-l-2 border-l-accent">
              <p className="text-xs text-muted-foreground leading-relaxed">
                All documents follow the Controlled Distribution Protocol (CRP v1.0). Public documents are freely accessible. Institutional documents require a formal access request. Admin-only documents are restricted to authorized personnel for internal use.
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid. Canadian Patent No. CA 3,300,102.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 mt-4 text-[10px] font-mono text-muted-foreground/40">
              <span>GRGF INTELLIGENT ARCHIVE · {stats.total} DOCUMENTS · {DEPARTMENTS.length - 1} DEPARTMENTS</span>
              <span>CRP v1.0 · MARCH 2026</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArchiveIntelligent;
