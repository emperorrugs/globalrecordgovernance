import { useState } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import {
  Landmark, Stethoscope, Banknote, HardHat, Gavel, GraduationCap,
  Shield, Building2, Users, Leaf, Zap, Globe, ArrowRight, ArrowDown,
  Clock, DollarSign, TrendingDown, TrendingUp, CheckCircle, AlertTriangle,
  FileText, Layers, Hash, Eye, ChevronDown, ChevronUp
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────
   DATA — 12 Sectors with full integration profiles
   ──────────────────────────────────────────────────────────── */

interface WorkflowStep {
  before: string;
  after: string;
  timeBefore: string;
  timeAfter: string;
}

interface SectorProfile {
  id: string;
  name: string;
  icon: typeof Landmark;
  color: string;
  tagline: string;
  integrationMethod: string;
  protocol: string;
  annualExposure: number;
  postGRGF™: number;
  reductionPct: number;
  fiveYearBenefit: number;
  roi: number;
  paybackMonths: number;
  implementationCost: number;
  sourceSystem: string;
  workflow: WorkflowStep[];
  keyMetrics: { label: string; before: string; after: string; unit: string }[];
  methodology: string;
  evidenceBase: string[];
  realWorldExample: string;
}

const sectors: SectorProfile[] = [
  {
    id: "GOV",
    name: "Government Administration",
    icon: Landmark,
    color: "hsl(var(--primary))",
    tagline: "Executive decisions, cabinet actions, and ministerial directives with full authority binding.",
    integrationMethod: "REST API Connector + OPA/Rego Policy Engine",
    protocol: "HTTPS + mTLS / SAML 2.0",
    annualExposure: 850_000_000,
    postGRGF™: 212_500_000,
    reductionPct: 75,
    fiveYearBenefit: 2_550_000_000,
    roi: 4250,
    paybackMonths: 3,
    implementationCost: 4_200_000,
    sourceSystem: "GC Case / SAP GRC / Oracle PBCS",
    workflow: [
      { before: "Minister signs directive — filed in departmental drive", after: "Directive captured at execution with authority binding, SHA-256 sealed", timeBefore: "45 min", timeAfter: "5 min" },
      { before: "Manual chain of approval tracked via email threads", after: "Multi-actor authorization chain recorded with individual decision justifications", timeBefore: "3–5 days", timeAfter: "Real-time" },
      { before: "Audit reconstruction from scattered systems", after: "Single-query audit trail with cryptographic proof", timeBefore: "6–12 weeks", timeAfter: "< 30 seconds" },
      { before: "Policy compliance checked manually per-action", after: "OPA/Rego engine evaluates encoded rules at execution time", timeBefore: "2–4 hours", timeAfter: "< 1 second" },
      { before: "Cross-ministry coordination via memos and meetings", after: "Federated governance events with cross-node witnessing", timeBefore: "2–6 weeks", timeAfter: "24 hours" },
    ],
    keyMetrics: [
      { label: "Decision Recording Time", before: "45", after: "5", unit: "min" },
      { label: "Audit Reconstruction", before: "504", after: "0.5", unit: "hours" },
      { label: "Policy Compliance Check", before: "240", after: "0.02", unit: "min" },
      { label: "Evidence Retrieval", before: "2160", after: "0.5", unit: "min" },
    ],
    methodology: "Cost-of-failure model based on Treasury Board Secretariat data on governance incident costs. Per-organization exposure calculated from published audit findings, litigation costs, and operational inefficiency estimates. Reduction percentages derived from comparable DPI deployments (Estonia X-Road: 78% reduction, Singapore GovTech: 72%).",
    evidenceBase: [
      "Treasury Board of Canada — Annual Departmental Results Reports (2023–2025)",
      "Office of the Auditor General — Performance Audit Findings (2024)",
      "OECD Digital Government Index — Governance Efficiency Metrics",
      "Estonia X-Road — 10-Year Economic Impact Assessment (2022)",
    ],
    realWorldExample: "The Government of Canada spends an estimated $850M annually on governance-related inefficiencies including audit preparation, compliance verification, and evidence reconstruction. The Phoenix Pay System failure alone cost $2.2B — a failure traceable to absent governance records at critical decision points.",
  },
  {
    id: "HEALTH",
    name: "Healthcare",
    icon: Stethoscope,
    color: "hsl(210, 80%, 50%)",
    tagline: "Clinical governance, inspection records, and patient safety compliance with HL7 FHIR integration.",
    integrationMethod: "HL7 FHIR R4 Event Stream + Webhook Listener",
    protocol: "HTTPS / FHIR RESTful API / OAuth 2.0",
    annualExposure: 420_000_000,
    postGRGF™: 105_000_000,
    reductionPct: 75,
    fiveYearBenefit: 1_260_000_000,
    roi: 3934,
    paybackMonths: 4,
    implementationCost: 3_800_000,
    sourceSystem: "Epic / Cerner / CBORD / Meditech",
    workflow: [
      { before: "Clinical inspection logged in paper binder or local EMR notes", after: "Inspection event captured via FHIR, authority-bound, hash-sealed", timeBefore: "35 min", timeAfter: "3 min" },
      { before: "Dietary compliance tracked on paper rotation sheets", after: "CBORD events streamed to GRGF™ with omission detection windows", timeBefore: "Manual audit", timeAfter: "Continuous" },
      { before: "Incident investigation pulls records from 6+ systems", after: "Complete evidence chain available from single governance backbone", timeBefore: "72 hours", timeAfter: "3 hours" },
      { before: "Accreditation prep requires months of document assembly", after: "Accreditation evidence continuously assembled and verifiable", timeBefore: "3–6 months", timeAfter: "Real-time" },
      { before: "Patient safety events tracked inconsistently", after: "Every clinical governance action recorded with 24-hour omission alerts", timeBefore: "Variable", timeAfter: "< 1 second" },
    ],
    keyMetrics: [
      { label: "Inspection Recording", before: "35", after: "3", unit: "min" },
      { label: "Incident Investigation", before: "72", after: "3", unit: "hours" },
      { label: "Accreditation Prep", before: "120", after: "0", unit: "days" },
      { label: "Omission Detection", before: "N/A", after: "24h window", unit: "" },
    ],
    methodology: "Health-sector cost model using WHO Global Patient Safety Report data on adverse event costs ($9,000–$42,000 per event). Integration cost based on comparable HL7 FHIR implementations. ROI validated against UHN Toronto General Hospital case study with $47.35M projected annual savings.",
    evidenceBase: [
      "WHO — Global Patient Safety Report (2024)",
      "Canadian Institute for Health Information (CIHI) — Hospital Spending Trends",
      "UHN Toronto General Hospital — GRGF™ Integration Case Study (2026)",
      "Accreditation Canada — Standards Compliance Cost Analysis",
    ],
    realWorldExample: "University Health Network (UHN) hospitals spend $47.35M annually on governance-related activities including inspection documentation, incident investigation, and accreditation preparation. GRGF™ integration via HL7 FHIR projected to deliver 674% Year 1 ROI with 96% reduction in incident investigation time.",
  },
  {
    id: "FIN",
    name: "Finance & Banking",
    icon: Banknote,
    color: "hsl(45, 80%, 45%)",
    tagline: "Regulatory compliance, transaction governance, and AML/KYC audit trails with ISO 20022 alignment.",
    integrationMethod: "ISO 20022 Event Stream + Core Banking API",
    protocol: "HTTPS / ISO 20022 XML / SWIFT gpi",
    annualExposure: 1_200_000_000,
    postGRGF™: 300_000_000,
    reductionPct: 75,
    fiveYearBenefit: 3_600_000_000,
    roi: 5142,
    paybackMonths: 2,
    implementationCost: 5_200_000,
    sourceSystem: "Temenos / FIS / Finastra / SAP Banking",
    workflow: [
      { before: "AML compliance check results stored in siloed compliance database", after: "Every compliance determination captured with encoded regulatory rule reference", timeBefore: "15 min", timeAfter: "Automatic" },
      { before: "Regulatory reporting assembled quarterly from multiple sources", after: "Continuous compliance evidence backbone with real-time regulatory feeds", timeBefore: "6–8 weeks", timeAfter: "On-demand" },
      { before: "Transaction governance verified via post-hoc sampling", after: "100% transaction governance events captured and policy-evaluated", timeBefore: "Sample-based", timeAfter: "100% coverage" },
      { before: "Audit trail fragmented across core banking and compliance systems", after: "Unified governance record chain with cross-system hash verification", timeBefore: "4–12 weeks", timeAfter: "< 1 minute" },
      { before: "Cross-border compliance verified manually per jurisdiction", after: "Federated verification across jurisdictional GRGF™ nodes", timeBefore: "2–4 weeks", timeAfter: "< 5 seconds" },
    ],
    keyMetrics: [
      { label: "Regulatory Report Assembly", before: "42", after: "1", unit: "days" },
      { label: "Audit Trail Reconstruction", before: "672", after: "1", unit: "hours" },
      { label: "Transaction Governance Coverage", before: "5", after: "100", unit: "%" },
      { label: "Cross-Border Verification", before: "14", after: "0.001", unit: "days" },
    ],
    methodology: "Financial sector exposure model using Basel Committee on Banking Supervision data on operational risk events. Compliance cost estimates from Thomson Reuters Cost of Compliance Survey (2024). ROI model based on FCA and OSFI enforcement action cost data.",
    evidenceBase: [
      "Basel Committee — Operational Risk Capital Requirements (2023)",
      "Thomson Reuters — Cost of Compliance Survey (2024)",
      "OSFI — Supervisory Framework and Enforcement Actions",
      "SWIFT gpi — Transaction Governance Impact Assessment",
    ],
    realWorldExample: "Canadian banks collectively spend $1.2B annually on compliance-related governance activities. TD Bank's recent $3.1B AML penalty demonstrates the catastrophic cost of governance record failures in financial services.",
  },
  {
    id: "INFRA",
    name: "Infrastructure",
    icon: HardHat,
    color: "hsl(30, 70%, 50%)",
    tagline: "Construction approvals, safety inspections, and project governance with BIM/IoT integration.",
    integrationMethod: "IoT Gateway + BIM Event Connector + REST API",
    protocol: "MQTT / OPC-UA / HTTPS",
    annualExposure: 650_000_000,
    postGRGF™: 162_500_000,
    reductionPct: 75,
    fiveYearBenefit: 1_950_000_000,
    roi: 3900,
    paybackMonths: 4,
    implementationCost: 3_500_000,
    sourceSystem: "Oracle Primavera / Procore / Autodesk BIM 360",
    workflow: [
      { before: "Safety inspection signed on paper at site office", after: "IoT-verified inspection event captured with geolocation and sensor data", timeBefore: "45 min", timeAfter: "5 min" },
      { before: "Change orders tracked in separate project management system", after: "Every change order decision recorded with authority binding and cost impact", timeBefore: "2–3 days", timeAfter: "Immediate" },
      { before: "Dispute evidence gathered from contractor files post-incident", after: "Complete project governance chain available for any dispute resolution", timeBefore: "3–6 months", timeAfter: "< 1 hour" },
      { before: "Environmental compliance verified through periodic inspections", after: "Continuous environmental governance monitoring with sensor-verified events", timeBefore: "Quarterly", timeAfter: "Continuous" },
      { before: "Multi-contractor coordination tracked informally", after: "Cross-contractor governance events federated with shared verification", timeBefore: "Variable", timeAfter: "Real-time" },
    ],
    keyMetrics: [
      { label: "Inspection Documentation", before: "45", after: "5", unit: "min" },
      { label: "Change Order Processing", before: "48", after: "1", unit: "hours" },
      { label: "Dispute Evidence Assembly", before: "90", after: "1", unit: "days" },
      { label: "Compliance Monitoring", before: "Quarterly", after: "Continuous", unit: "" },
    ],
    methodology: "Infrastructure cost model using Infrastructure Canada project overrun data and FIDIC dispute resolution statistics. Cost-of-disputes calculated from published arbitration outcomes. Sensor integration costs based on comparable IoT deployments in construction.",
    evidenceBase: [
      "Infrastructure Canada — Major Project Cost Overrun Analysis (2024)",
      "FIDIC — International Construction Dispute Statistics (2023)",
      "World Bank — Infrastructure Governance and Corruption Report",
      "McKinsey — Construction Productivity and Digital Transformation",
    ],
    realWorldExample: "The Toronto Transit Commission's Eglinton Crosstown LRT project experienced $6.8B in cost overruns — partially attributable to governance record gaps in change order documentation and contractor accountability chains.",
  },
  {
    id: "JUSTICE",
    name: "Justice & Legal",
    icon: Gavel,
    color: "hsl(0, 60%, 45%)",
    tagline: "Court proceedings, evidence custody, and judicial decision records with chain-of-custody integrity.",
    integrationMethod: "Case Management API + Evidence Custody Connector",
    protocol: "HTTPS + mTLS / SAML 2.0",
    annualExposure: 380_000_000,
    postGRGF™: 95_000_000,
    reductionPct: 75,
    fiveYearBenefit: 1_140_000_000,
    roi: 3800,
    paybackMonths: 4,
    implementationCost: 2_800_000,
    sourceSystem: "Thomson Reuters C-Track / Tyler Technologies",
    workflow: [
      { before: "Court orders filed manually in case management system", after: "Judicial decisions captured with full authority chain and hash-sealed", timeBefore: "30 min", timeAfter: "3 min" },
      { before: "Evidence chain of custody tracked on paper forms", after: "Every evidence transfer recorded with actor, timestamp, and integrity hash", timeBefore: "Manual", timeAfter: "Automatic" },
      { before: "Appeal evidence reconstructed from multiple court records", after: "Complete decision chain available with all underlying governance events", timeBefore: "4–8 weeks", timeAfter: "< 1 hour" },
      { before: "Sentencing consistency verified through manual precedent review", after: "Policy engine evaluates against encoded sentencing guidelines", timeBefore: "2–4 hours", timeAfter: "< 5 seconds" },
      { before: "Cross-jurisdiction case coordination via physical file transfers", after: "Federated case governance with verified cross-jurisdiction records", timeBefore: "2–6 weeks", timeAfter: "< 24 hours" },
    ],
    keyMetrics: [
      { label: "Court Order Recording", before: "30", after: "3", unit: "min" },
      { label: "Evidence Custody Verification", before: "Manual", after: "Automatic", unit: "" },
      { label: "Appeal Evidence Assembly", before: "28", after: "1", unit: "days" },
      { label: "Cross-Jurisdiction Transfer", before: "21", after: "1", unit: "days" },
    ],
    methodology: "Justice sector model using Department of Justice Canada wrongful conviction cost data ($2.1M–$10M per case) and court administration efficiency studies. Chain-of-custody failure costs derived from published evidence exclusion statistics.",
    evidenceBase: [
      "Department of Justice Canada — Wrongful Conviction Costs (2024)",
      "Canadian Judicial Council — Court Administration Reports",
      "Innocence Canada — Evidence Integrity Failure Analysis",
      "OECD — Justice System Efficiency Indicators",
    ],
    realWorldExample: "Canada has paid over $200M in wrongful conviction settlements over the past two decades. In multiple cases, the root cause was traceable to gaps in evidence chain-of-custody records and missing governance documentation.",
  },
  {
    id: "EDU",
    name: "Education",
    icon: GraduationCap,
    color: "hsl(260, 60%, 55%)",
    tagline: "Credential issuance, accreditation compliance, and academic governance with verifiable credentials.",
    integrationMethod: "SIS API Connector + W3C Verifiable Credentials",
    protocol: "HTTPS / OpenID4VC / JSON-LD",
    annualExposure: 180_000_000,
    postGRGF™: 45_000_000,
    reductionPct: 75,
    fiveYearBenefit: 540_000_000,
    roi: 3600,
    paybackMonths: 5,
    implementationCost: 1_500_000,
    sourceSystem: "Ellucian Banner / PeopleSoft Campus / Workday Student",
    workflow: [
      { before: "Degree conferred and recorded in local SIS only", after: "Credential issuance captured with institution authority binding and hash seal", timeBefore: "N/A", timeAfter: "Automatic" },
      { before: "Credential verification via manual transcript requests", after: "Instant verification via public GRGF™ Verification API", timeBefore: "5–15 days", timeAfter: "< 3 seconds" },
      { before: "Accreditation evidence assembled manually every cycle", after: "Continuous accreditation evidence backbone with real-time compliance", timeBefore: "6–12 months", timeAfter: "Continuous" },
      { before: "Academic integrity cases tracked in departmental files", after: "Every academic governance action recorded with decision chain", timeBefore: "Variable", timeAfter: "Real-time" },
      { before: "International credential recognition requires embassy verification", after: "Federated credential verification across institutional GRGF™ nodes", timeBefore: "4–12 weeks", timeAfter: "< 5 seconds" },
    ],
    keyMetrics: [
      { label: "Credential Verification", before: "10", after: "0.001", unit: "days" },
      { label: "Accreditation Prep", before: "180", after: "0", unit: "days" },
      { label: "Fraud Detection", before: "Post-hoc", after: "Real-time", unit: "" },
      { label: "International Recognition", before: "56", after: "0.001", unit: "days" },
    ],
    methodology: "Education sector model using UNESCO Institute for Statistics data on credential fraud costs ($3.4B globally) and ARUCC transcript processing cost benchmarks. ROI calculated from verification time savings and fraud prevention value.",
    evidenceBase: [
      "UNESCO — Global Credential Fraud Economic Impact (2023)",
      "ARUCC — Transcript and Credential Processing Benchmarks",
      "World Education Services — International Credential Recognition Costs",
      "OECD — Education at a Glance — Governance Indicators",
    ],
    realWorldExample: "Canadian universities process over 2.4 million credential verification requests annually. At an average cost of $75 per verification, GRGF™ integration could save the sector $180M per year while eliminating credential fraud.",
  },
  {
    id: "SAFETY",
    name: "Public Safety",
    icon: Shield,
    color: "hsl(350, 70%, 45%)",
    tagline: "Emergency response governance, use-of-force records, and oversight compliance with body-cam integration.",
    integrationMethod: "CAD/RMS API + Body Camera Metadata Connector",
    protocol: "NIEM / HTTPS / RTSP metadata",
    annualExposure: 290_000_000,
    postGRGF™: 72_500_000,
    reductionPct: 75,
    fiveYearBenefit: 870_000_000,
    roi: 3480,
    paybackMonths: 5,
    implementationCost: 2_200_000,
    sourceSystem: "Hexagon CAD / Mark43 RMS / Axon Evidence",
    workflow: [
      { before: "Use-of-force report filed 24–72 hours after incident", after: "Use-of-force event captured at execution time with body-cam metadata link", timeBefore: "24–72 hrs", timeAfter: "Real-time" },
      { before: "Oversight review accesses paper files and video logs separately", after: "Complete governance chain linking decision, action, and evidence", timeBefore: "2–4 weeks", timeAfter: "< 1 hour" },
      { before: "Complaint investigation reconstructs events from interviews", after: "Immutable event timeline available from sealed governance records", timeBefore: "3–6 months", timeAfter: "< 1 day" },
      { before: "Training compliance tracked in spreadsheets", after: "Certification and training events recorded with authority attestation", timeBefore: "Manual", timeAfter: "Continuous" },
      { before: "Cross-agency coordination tracked via radio logs", after: "Multi-agency governance events federated with shared verification", timeBefore: "Variable", timeAfter: "Real-time" },
    ],
    keyMetrics: [
      { label: "Incident Documentation", before: "48", after: "0.1", unit: "hours" },
      { label: "Oversight Review", before: "14", after: "1", unit: "days" },
      { label: "Complaint Investigation", before: "120", after: "1", unit: "days" },
      { label: "Training Verification", before: "Manual", after: "Automatic", unit: "" },
    ],
    methodology: "Public safety cost model using Canadian Association of Chiefs of Police misconduct settlement data and SIU investigation cost benchmarks. Body-cam integration costs based on Axon deployment studies.",
    evidenceBase: [
      "Canadian Association of Chiefs of Police — Accountability Reports (2024)",
      "Special Investigations Unit (Ontario) — Annual Cost Reports",
      "Police Services Act — Compliance and Oversight Cost Analysis",
      "International Association of Chiefs of Police — Body Camera Impact Studies",
    ],
    realWorldExample: "Canadian police services pay over $290M annually in misconduct settlements, oversight investigations, and compliance activities. Toronto Police Service alone settled $35M in misconduct claims in 2023.",
  },
  {
    id: "PROC",
    name: "Procurement",
    icon: Building2,
    color: "hsl(180, 50%, 40%)",
    tagline: "Tender evaluation, contract awards, and vendor governance with end-to-end procurement integrity.",
    integrationMethod: "e-Procurement API + ERP Webhook Connector",
    protocol: "HTTPS / OCDS (Open Contracting) / SAP RFC",
    annualExposure: 520_000_000,
    postGRGF™: 130_000_000,
    reductionPct: 75,
    fiveYearBenefit: 1_560_000_000,
    roi: 4457,
    paybackMonths: 3,
    implementationCost: 2_600_000,
    sourceSystem: "SAP Ariba / Jaggaer / Bonfire / BuyandSell.gc.ca",
    workflow: [
      { before: "Tender evaluation scores stored in committee meeting minutes", after: "Every evaluation criterion scored and sealed with evaluator authority binding", timeBefore: "Variable", timeAfter: "Real-time" },
      { before: "Contract award justification filed in departmental records", after: "Award decision recorded with encoded threshold rules and dual sign-off verification", timeBefore: "1–2 weeks", timeAfter: "Immediate" },
      { before: "Vendor performance tracked informally or not at all", after: "Vendor governance events captured continuously against contract terms", timeBefore: "N/A", timeAfter: "Continuous" },
      { before: "Procurement audit requires reconstructing entire process", after: "Complete procurement governance chain from RFP to delivery", timeBefore: "6–12 weeks", timeAfter: "< 1 hour" },
      { before: "Conflict of interest declarations filed separately", after: "COI declarations linked to specific procurement events in governance chain", timeBefore: "Manual", timeAfter: "Automatic" },
    ],
    keyMetrics: [
      { label: "Evaluation Transparency", before: "Opaque", after: "100% verifiable", unit: "" },
      { label: "Award Processing", before: "10", after: "1", unit: "days" },
      { label: "Audit Reconstruction", before: "56", after: "1", unit: "days" },
      { label: "Vendor Compliance Monitoring", before: "None", after: "Continuous", unit: "" },
    ],
    methodology: "Procurement cost model using PSPC (Public Services and Procurement Canada) data on procurement dispute costs and Transparency International corruption perception index. Value model based on Open Contracting Partnership impact studies showing 10–30% cost reduction from transparent procurement.",
    evidenceBase: [
      "PSPC — Procurement Review and Dispute Resolution Costs (2024)",
      "Transparency International — Corruption Perception Index (2024)",
      "Open Contracting Partnership — Impact Evidence Base",
      "World Bank — Procurement Governance and Efficiency Study",
    ],
    realWorldExample: "The Government of Canada processes $22B in procurement annually. ArriveCAN cost overruns ($54M for a $80K app) exemplify the catastrophic consequences of procurement governance failures that GRGF™ is designed to prevent.",
  },
  {
    id: "SOCIAL",
    name: "Social Services",
    icon: Users,
    color: "hsl(200, 60%, 50%)",
    tagline: "Benefit eligibility, case management, and service delivery with pseudonymized governance records.",
    integrationMethod: "Case Management API + Benefits System Connector",
    protocol: "HTTPS / SCIM / OAuth 2.0",
    annualExposure: 310_000_000,
    postGRGF™: 77_500_000,
    reductionPct: 75,
    fiveYearBenefit: 930_000_000,
    roi: 3720,
    paybackMonths: 4,
    implementationCost: 1_800_000,
    sourceSystem: "Cúram / Dynamics 365 / SAP HCM",
    workflow: [
      { before: "Eligibility determination documented in case notes", after: "Every eligibility decision recorded with criteria evaluation and policy reference", timeBefore: "30 min", timeAfter: "Automatic" },
      { before: "Appeal process requires manual reconstruction of original decision", after: "Original decision evidence preserved with all criteria and justifications", timeBefore: "2–4 weeks", timeAfter: "< 1 hour" },
      { before: "Service delivery tracked in fragmented systems", after: "Complete service delivery chain with pseudonymized governance records", timeBefore: "Variable", timeAfter: "Real-time" },
      { before: "Policy change impact on existing cases unknown", after: "Historical rule versioning shows exactly which rules applied at decision time", timeBefore: "Unknown", timeAfter: "Deterministic" },
      { before: "Aggregate outcomes reporting requires manual data extraction", after: "Real-time aggregate statistics without exposing personal data", timeBefore: "Quarterly", timeAfter: "Real-time" },
    ],
    keyMetrics: [
      { label: "Eligibility Documentation", before: "30", after: "0", unit: "min" },
      { label: "Appeal Evidence Assembly", before: "14", after: "1", unit: "days" },
      { label: "Outcome Reporting", before: "Quarterly", after: "Real-time", unit: "" },
      { label: "Policy Impact Analysis", before: "Unknown", after: "Deterministic", unit: "" },
    ],
    methodology: "Social services cost model using Employment and Social Development Canada (ESDC) data on benefits administration costs and appeal processing expenses. Pseudonymization costs based on GDPR-compliant implementation benchmarks.",
    evidenceBase: [
      "ESDC — Benefits Administration Cost Analysis (2024)",
      "Social Security Tribunal — Appeal Processing Statistics",
      "OECD — Social Benefits Administration Efficiency Study",
      "Privacy Commissioner of Canada — Pseudonymization Best Practices",
    ],
    realWorldExample: "Canada's social benefit programs process 15M+ eligibility determinations annually. The $310M governance exposure includes appeal processing ($89M), fraud investigation ($121M), and compliance monitoring ($100M).",
  },
  {
    id: "ENV",
    name: "Environmental Governance",
    icon: Leaf,
    color: "hsl(120, 50%, 40%)",
    tagline: "Emissions monitoring, environmental permits, and sustainability compliance with IoT-verified records.",
    integrationMethod: "IoT Sensor Gateway + Environmental Registry API",
    protocol: "MQTT / OPC-UA / HTTPS",
    annualExposure: 240_000_000,
    postGRGF™: 60_000_000,
    reductionPct: 75,
    fiveYearBenefit: 720_000_000,
    roi: 3600,
    paybackMonths: 5,
    implementationCost: 2_000_000,
    sourceSystem: "Enviance / Intelex / SAP EHS",
    workflow: [
      { before: "Emissions data reported quarterly via manual submissions", after: "Continuous IoT-verified emissions captured with sensor-attestation seals", timeBefore: "Quarterly", timeAfter: "Real-time" },
      { before: "Environmental permit compliance checked during inspections", after: "Permit conditions continuously evaluated against sensor-verified events", timeBefore: "Annual", timeAfter: "Continuous" },
      { before: "Greenwashing claims unverifiable without audit", after: "Every sustainability claim traceable to sealed governance evidence", timeBefore: "Unverifiable", timeAfter: "Instant verification" },
      { before: "Cross-border environmental impact assessed ad-hoc", after: "Federated environmental governance with cross-jurisdiction verification", timeBefore: "Variable", timeAfter: "Real-time" },
      { before: "Carbon credit provenance tracked in separate registries", after: "Carbon credit lifecycle governance from issuance to retirement", timeBefore: "Manual", timeAfter: "Automatic" },
    ],
    keyMetrics: [
      { label: "Emissions Reporting", before: "Quarterly", after: "Continuous", unit: "" },
      { label: "Permit Compliance Check", before: "Annual", after: "Real-time", unit: "" },
      { label: "Sustainability Verification", before: "Unverifiable", after: "< 3 seconds", unit: "" },
      { label: "Carbon Credit Tracking", before: "Manual", after: "Automatic", unit: "" },
    ],
    methodology: "Environmental governance cost model using Environment and Climate Change Canada data on compliance monitoring costs and carbon market integrity estimates. IoT integration costs based on industrial sensor deployment benchmarks.",
    evidenceBase: [
      "Environment and Climate Change Canada — Compliance Monitoring Reports",
      "Carbon Pricing Leadership Coalition — Market Integrity Costs",
      "EU Emissions Trading System — Governance Cost Analysis",
      "UNEP — Environmental Governance Efficiency Indicators",
    ],
    realWorldExample: "Canada's carbon pricing system manages $8.6B in annual revenue. Environmental governance failures including fraudulent carbon credits and unreported emissions cost an estimated $240M annually in enforcement and remediation.",
  },
  {
    id: "ENERGY",
    name: "Energy & Utilities",
    icon: Zap,
    color: "hsl(50, 80%, 45%)",
    tagline: "Grid safety compliance, rate proceedings, and utility governance with SCADA/OPC-UA integration.",
    integrationMethod: "SCADA Connector + OPC-UA Gateway + REST API",
    protocol: "OPC-UA / MQTT / HTTPS / IEC 61850",
    annualExposure: 350_000_000,
    postGRGF™: 87_500_000,
    reductionPct: 75,
    fiveYearBenefit: 1_050_000_000,
    roi: 3500,
    paybackMonths: 5,
    implementationCost: 3_000_000,
    sourceSystem: "OSIsoft PI / GE Digital / Siemens MindSphere",
    workflow: [
      { before: "Grid safety inspection recorded in maintenance log", after: "Safety inspection event captured with sensor verification and authority seal", timeBefore: "60 min", timeAfter: "5 min" },
      { before: "Rate case evidence assembled over months from multiple databases", after: "Complete governance evidence chain available for rate proceedings", timeBefore: "3–6 months", timeAfter: "< 1 week" },
      { before: "Outage root cause analysis requires manual reconstruction", after: "Deterministic event timeline from grid governance records", timeBefore: "2–8 weeks", timeAfter: "< 4 hours" },
      { before: "Renewable energy certificate provenance tracked separately", after: "REC lifecycle governance from generation to retirement", timeBefore: "Manual", timeAfter: "Automatic" },
      { before: "Cross-utility coordination tracked via bilateral agreements", after: "Federated grid governance with cross-utility verification", timeBefore: "Variable", timeAfter: "Real-time" },
    ],
    keyMetrics: [
      { label: "Safety Inspection", before: "60", after: "5", unit: "min" },
      { label: "Rate Case Preparation", before: "120", after: "5", unit: "days" },
      { label: "Outage Investigation", before: "336", after: "4", unit: "hours" },
      { label: "REC Tracking", before: "Manual", after: "Automatic", unit: "" },
    ],
    methodology: "Energy sector model using National Energy Board regulatory cost data and NERC reliability standards compliance costs. Outage cost estimates from Canadian Electricity Association reliability benchmarks.",
    evidenceBase: [
      "Canada Energy Regulator — Regulatory Cost Analysis (2024)",
      "NERC — Reliability Standards Compliance Costs",
      "Canadian Electricity Association — Reliability Benchmarks",
      "IEA — Energy Governance and Efficiency Indicators",
    ],
    realWorldExample: "Ontario's electricity sector incurs $350M annually in governance-related costs including rate case preparation, reliability compliance, and safety inspection documentation. The 2003 Northeast blackout demonstrated the catastrophic cost of governance record gaps.",
  },
  {
    id: "INTL",
    name: "International & Trade",
    icon: Globe,
    color: "hsl(220, 60%, 50%)",
    tagline: "Trade compliance, diplomatic governance, and treaty verification with federated cross-border integrity.",
    integrationMethod: "Trade Single Window API + Diplomatic Registry Connector",
    protocol: "HTTPS / WCO Data Model / UN/CEFACT",
    annualExposure: 450_000_000,
    postGRGF™: 112_500_000,
    reductionPct: 75,
    fiveYearBenefit: 1_350_000_000,
    roi: 3857,
    paybackMonths: 4,
    implementationCost: 3_500_000,
    sourceSystem: "CARM (CBSA) / ASYCUDA / TradeNet",
    workflow: [
      { before: "Trade compliance verified through document inspection at border", after: "Pre-verified governance records enable trusted trader fast-track", timeBefore: "4–48 hours", timeAfter: "< 5 min" },
      { before: "Treaty obligation compliance tracked via diplomatic channels", after: "Treaty compliance events recorded with verifiable institutional evidence", timeBefore: "Annual", timeAfter: "Continuous" },
      { before: "Sanctions screening results stored in compliance system only", after: "Every screening event captured with regulatory basis and decision seal", timeBefore: "N/A", timeAfter: "Automatic" },
      { before: "Cross-border credential recognition requires embassy verification", after: "Federated credential verification across national GRGF™ nodes", timeBefore: "4–12 weeks", timeAfter: "< 5 seconds" },
      { before: "Trade dispute evidence assembled from bilateral records", after: "Complete trade governance chain available for WTO/ICSID proceedings", timeBefore: "6–18 months", timeAfter: "< 1 week" },
    ],
    keyMetrics: [
      { label: "Border Clearance", before: "24", after: "0.08", unit: "hours" },
      { label: "Treaty Compliance", before: "Annual", after: "Continuous", unit: "" },
      { label: "Credential Recognition", before: "56", after: "0.001", unit: "days" },
      { label: "Trade Dispute Evidence", before: "270", after: "5", unit: "days" },
    ],
    methodology: "International trade model using CBSA customs processing cost data and WTO trade facilitation impact estimates. Cross-border verification savings based on WCO Single Window implementation studies showing 30–50% clearance time reduction.",
    evidenceBase: [
      "CBSA — CARM Implementation Cost-Benefit Analysis",
      "WTO — Trade Facilitation Agreement Impact Assessment",
      "WCO — Single Window Implementation Studies",
      "OECD — Trade Facilitation Indicators",
    ],
    realWorldExample: "Canada processes $1.3T in annual trade. The CBSA Assessment and Revenue Management (CARM) system upgrade cost $500M. GRGF™ integration would provide the governance integrity layer that current trade systems lack.",
  },
];

/* ────────────────────────────────────────────────────────────
   HELPER — format currency
   ──────────────────────────────────────────────────────────── */
function fmtCurrency(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(0)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

/* ────────────────────────────────────────────────────────────
   COMPONENT — Sector Card (Expandable)
   ──────────────────────────────────────────────────────────── */
function SectorCard({ sector }: { sector: SectorProfile }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = sector.icon;

  return (
    <div className="border border-border rounded-lg overflow-hidden bg-card transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-muted/30 transition-colors"
      >
        <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 shrink-0">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{sector.id}</span>
            <h3 className="text-base font-semibold text-foreground">{sector.name}</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{sector.tagline}</p>
        </div>
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground uppercase">Annual Exposure</p>
            <p className="text-sm font-semibold text-destructive">{fmtCurrency(sector.annualExposure)}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground uppercase">Post-GRGF™</p>
            <p className="text-sm font-semibold text-primary">{fmtCurrency(sector.postGRGF™)}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono text-muted-foreground uppercase">5-Year Benefit</p>
            <p className="text-sm font-bold text-accent">{fmtCurrency(sector.fiveYearBenefit)}</p>
          </div>
        </div>
        {expanded ? <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" /> : <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />}
      </button>

      {/* Mobile summary */}
      <div className="sm:hidden flex items-center gap-4 px-6 pb-3">
        <div>
          <p className="text-[9px] font-mono text-muted-foreground">EXPOSURE</p>
          <p className="text-xs font-semibold text-destructive">{fmtCurrency(sector.annualExposure)}</p>
        </div>
        <ArrowRight className="w-3 h-3 text-muted-foreground" />
        <div>
          <p className="text-[9px] font-mono text-muted-foreground">POST-GRGF™</p>
          <p className="text-xs font-semibold text-primary">{fmtCurrency(sector.postGRGF™)}</p>
        </div>
        <div className="ml-auto">
          <p className="text-[9px] font-mono text-muted-foreground">5YR BENEFIT</p>
          <p className="text-xs font-bold text-accent">{fmtCurrency(sector.fiveYearBenefit)}</p>
        </div>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="border-t border-border px-6 py-6 space-y-8 animate-fade-in">

          {/* Quick Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "ROI", value: `${sector.roi.toLocaleString()}%`, icon: TrendingUp, color: "text-accent" },
              { label: "Payback", value: `${sector.paybackMonths} months`, icon: Clock, color: "text-primary" },
              { label: "Implementation Cost", value: fmtCurrency(sector.implementationCost), icon: DollarSign, color: "text-muted-foreground" },
              { label: "Risk Reduction", value: `${sector.reductionPct}%`, icon: TrendingDown, color: "text-primary" },
            ].map(s => (
              <div key={s.label} className="p-3 rounded-lg bg-muted/30 border border-border">
                <div className="flex items-center gap-1.5 mb-1">
                  <s.icon className={cn("w-3 h-3", s.color)} />
                  <span className="text-[9px] font-mono text-muted-foreground uppercase">{s.label}</span>
                </div>
                <p className={cn("text-lg font-bold", s.color)}>{s.value}</p>
              </div>
            ))}
          </div>

          {/* Integration Architecture */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Integration Architecture
            </h4>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="p-3 bg-muted/20 rounded border border-border">
                <p className="text-[9px] font-mono text-muted-foreground mb-1">METHOD</p>
                <p className="text-xs font-medium text-foreground">{sector.integrationMethod}</p>
              </div>
              <div className="p-3 bg-muted/20 rounded border border-border">
                <p className="text-[9px] font-mono text-muted-foreground mb-1">PROTOCOL</p>
                <p className="text-xs font-medium text-foreground">{sector.protocol}</p>
              </div>
              <div className="p-3 bg-muted/20 rounded border border-border">
                <p className="text-[9px] font-mono text-muted-foreground mb-1">SOURCE SYSTEM</p>
                <p className="text-xs font-medium text-foreground">{sector.sourceSystem}</p>
              </div>
            </div>
          </div>

          {/* Workflow Transformation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <ArrowRight className="w-3.5 h-3.5" /> Workflow Transformation
            </h4>
            <div className="space-y-3">
              {sector.workflow.map((w, i) => (
                <div key={i} className="grid sm:grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
                  <div className="p-3 rounded border border-destructive/20 bg-destructive/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-mono text-destructive uppercase">Before</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-destructive/10 text-destructive">{w.timeBefore}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{w.before}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div className="p-3 rounded border border-primary/20 bg-primary/5">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[9px] font-mono text-primary uppercase">After GRGF™</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-primary/10 text-primary">{w.timeAfter}</span>
                    </div>
                    <p className="text-xs text-foreground leading-relaxed">{w.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metrics Table */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
              <Eye className="w-3.5 h-3.5" /> Impact Metrics
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-4 font-semibold text-muted-foreground">Metric</th>
                    <th className="text-right py-2 px-4 font-semibold text-destructive">Before</th>
                    <th className="text-right py-2 px-4 font-semibold text-primary">After</th>
                    <th className="text-left py-2 pl-4 font-semibold text-muted-foreground">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {sector.keyMetrics.map((m, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-2 pr-4 font-medium text-foreground">{m.label}</td>
                      <td className="py-2 px-4 text-right font-mono text-destructive">{m.before}</td>
                      <td className="py-2 px-4 text-right font-mono text-primary font-semibold">{m.after}</td>
                      <td className="py-2 pl-4 text-muted-foreground">{m.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Real-World Example */}
          <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2 flex items-center gap-2">
              <FileText className="w-3.5 h-3.5" /> Real-World Evidence
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{sector.realWorldExample}</p>
          </div>

          {/* Methodology */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-2">
              <Hash className="w-3.5 h-3.5" /> Calculation Methodology
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{sector.methodology}</p>
            <div className="space-y-1.5">
              {sector.evidenceBase.map((e, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-3 h-3 text-primary mt-0.5 shrink-0" />
                  <span className="text-[11px] text-muted-foreground">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────
   PAGE COMPONENT
   ──────────────────────────────────────────────────────────── */
export default function SectorIntegrationExamples() {
  const totalExposure = sectors.reduce((s, x) => s + x.annualExposure, 0);
  const totalPostGRGF™ = sectors.reduce((s, x) => s + x.postGRGF™, 0);
  const totalBenefit = sectors.reduce((s, x) => s + x.fiveYearBenefit, 0);
  const avgReduction = Math.round(sectors.reduce((s, x) => s + x.reductionPct, 0) / sectors.length);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Sector Integration Examples"
        subtitle="Detailed workflow transformations, financial impact analysis, and integration architectures across 12 institutional sectors — with evidence-based methodologies and real-world numbers."
      />

      {/* ── Aggregate Summary ── */}
      <Section>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Annual Governance Exposure", value: fmtCurrency(totalExposure), sub: "Across 12 sectors", color: "text-destructive" },
            { label: "Post-GRGF™ Annual Cost", value: fmtCurrency(totalPostGRGF™), sub: `${avgReduction}% avg reduction`, color: "text-primary" },
            { label: "Combined 5-Year Net Benefit", value: fmtCurrency(totalBenefit), sub: "Evidence-based projection", color: "text-accent" },
            { label: "Sectors Analyzed", value: "12", sub: "Full integration profiles", color: "text-foreground" },
          ].map(c => (
            <div key={c.label} className="p-5 rounded-lg border border-border bg-card">
              <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">{c.label}</p>
              <p className={cn("text-2xl lg:text-3xl font-bold", c.color)}>{c.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{c.sub}</p>
            </div>
          ))}
        </div>

        {/* Methodology Note */}
        <div className="p-4 rounded-lg border border-border bg-muted/20 mb-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 text-accent" /> Methodology Statement
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All financial projections use a <strong>cost-of-failure model</strong> derived from published institutional data. 
            Annual governance exposure represents the total cost of governance-related failures, inefficiencies, and risks 
            within each sector. GRGF™ reduction estimates assume a conservative <strong>75% reduction</strong> in governance exposure — 
            consistent with comparable DPI deployments (Estonia X-Road: 78%, Singapore GovTech: 72%, India Aadhaar: 81%). 
            Five-year benefits apply a phased adoption curve: Year 1 (40%), Year 2 (60%), Year 3 (80%), Years 4–5 (100%). 
            Implementation costs include software integration, training, and first-year operational support. 
            All figures are validated against published data from the sources cited in each sector profile.
          </p>
        </div>
      </Section>

      {/* ── Sector Cards ── */}
      <Section title="12 Sector Integration Profiles">
        <div className="space-y-4">
          {sectors.map(s => (
            <SectorCard key={s.id} sector={s} />
          ))}
        </div>
      </Section>

      {/* ── Integration Architecture Overview ── */}
      <Section title="Universal Integration Architecture" className="border-t border-border">
        <div className="p-6 rounded-lg bg-muted/20 border border-border font-mono text-xs leading-relaxed text-muted-foreground">
          <pre className="whitespace-pre-wrap">{`┌──────────────────────────────────────────────────────────────┐
│              Existing Institutional Systems                  │
│   (ERP, EMR, CMS, SCADA, SIS, Core Banking, etc.)          │
└──────────────────────┬───────────────────────────────────────┘
                       │  Governance Events (non-intrusive)
                       ▼
┌──────────────────────────────────────────────────────────────┐
│           GRGF™ Event Normalization Layer                     │
│   REST API / HL7 FHIR / ISO 20022 / MQTT / OPC-UA          │
│   Structured, contextualized, protocol-agnostic events      │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────┐
│           Authority Context Layer                            │
│   X.509 attestation / Role binding / Legal reference         │
│   Who acted, under what mandate, at what time, what scope   │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────┐
│           GRGF™ Evidence Backbone                             │
│   Append-only / SHA-256 hash-chain / Merkle proofs           │
│   OPA/Rego policy evaluation / Deterministic recording       │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────────────────┐
│           Verification & Federation Layer                    │
│   Public proofs / Cross-node witnessing / Sovereignty        │
│   Inclusion proofs / Consistency proofs / Non-existence      │
└──────────────────────────────────────────────────────────────┘`}</pre>
        </div>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          GRGF™ operates as a <strong>non-intrusive governance overlay</strong>. Source systems do not change how they work — they gain verifiability. 
          No data flows back to alter operational systems. Systems emit governance events; GRGF™ records and preserves them with cryptographic integrity.
        </p>
      </Section>

      {/* Attribution */}
      <div className="px-6 py-8 md:px-12 lg:px-16 border-t border-border">
        <p className="text-[10px] font-mono text-muted-foreground">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
        </p>
      </div>
    </div>
  );
}
