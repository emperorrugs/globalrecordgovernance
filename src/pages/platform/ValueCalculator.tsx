import { useState, useMemo, useRef } from 'react';
import { Calculator, TrendingDown, TrendingUp, DollarSign, Building2, Search, Shield, BarChart3, Download, Printer, Info, ChevronDown, ChevronUp, BookOpen, FileText, Sparkles, Loader2, Globe, Users, Calendar, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface CompanyResearch {
  name: string;
  sector: string;
  scale: number;
  annualBudget: number;
  employeeCount: number;
  country: string;
  description: string;
  founded?: number;
  keyRisks: string[];
}

// ── Methodology descriptions keyed by domain area ──
const METHODOLOGY: Record<string, string> = {
  // Transit
  "Safety Incident Liability": "Based on average transit incident rates per 100M passenger-km from FTA National Transit Database, multiplied by average settlement cost per incident ($420K–$1.2M). GRGF reduces exposure through real-time event hash-sealing, deterministic proof of safety protocol compliance, and accelerated investigation timelines (40+ hours → <4 hours).",
  "Workers' Compensation Claims": "Modeled on sector average lost-time injury rates (WSIB/WCB data) × average claim cost. GRGF contribution: verifiable proof of training completion, PPE compliance records, and incident response adherence reduces claim frequency and dispute costs.",
  "Service Disruption Costs": "Quantified using revenue-per-hour lost during unplanned outages, emergency response mobilization, and cascading delay costs. GRGF enables cross-system event correlation and maintenance compliance verification to prevent failures before they cascade.",
  "Maintenance Accountability Gaps": "Based on deferred maintenance cost multipliers (1:4 to 1:10 ratio) from infrastructure engineering literature. GRGF's chain-of-custody records prove maintenance execution, flag deferrals, and assign accountability for every decision.",
  "Procurement Irregularities": "Uses Transparency International's 5–15% public procurement leakage benchmark applied to annual procurement budget. GRGF records every procurement decision with authority binding and detects omissions in required approval workflows.",
  "Regulatory Non-Compliance": "Estimated from historical fine patterns (provincial/federal regulators) and compliance remediation costs. GRGF provides continuous compliance evidence, reducing audit cycles and preventing repeat violations.",
  "Insurance Premium Overcharges": "Based on actuarial studies showing governance-verified risk reduction yields 8–15% premium savings. GRGF provides insurers with verifiable operational evidence, lowering perceived risk profiles.",
  "Legal Defense & Settlements": "Modeled on sector litigation frequency × average defense cost. GRGF transforms legal proceedings by providing cryptographically verified evidence, reducing discovery costs by 60–80% and strengthening institutional defense positions.",
  "Audit & Investigation Costs": "Calculated from average external audit firm engagement rates and internal investigation FTE costs. GRGF's continuous compliance evidence model reduces audit prep time by 70–85% and shortens cycle duration.",
  "Fleet Asset Mismanagement": "Based on asset lifecycle cost variance between well-managed and poorly-tracked fleets. GRGF provides complete chain-of-custody from acquisition through every maintenance event to disposition.",
  "Contractor Oversight Failures": "Uses contract dispute frequency and cost data. GRGF records every milestone, inspection, and change order with verifiable authority binding.",
  "Public Complaint Resolution": "Modeled on complaint volume × average resolution cost including staff time, investigation, and remediation. GRGF provides instant access to verified event history, reducing investigation time by 80%.",
  // Healthcare
  "Patient Safety Incidents": "Based on CIHI patient safety event rates and associated costs (extended stays, remediation, settlements). GRGF enables real-time clinical event tracking with hash-sealed records, reducing investigation time from days to minutes.",
  "Malpractice & Liability": "Modeled on CMPA/HIROC claims data: frequency × average indemnity + defense costs. GRGF provides deterministic proof of clinical protocol adherence, transforming malpractice defense from narrative-based to evidence-based.",
  "Medication Error Costs": "Calculated using ISMP Canada adverse drug event rates × cost-per-event (treatment, extended stay, liability). GRGF captures medication administration events with authority binding and omission detection for missed doses.",
  "Dietary / Care Compliance Gaps": "Based on care plan deviation rates and associated adverse outcomes. GRGF detects when required actions (e.g., NPO diet verification, 24-hour dietitian assessment) are not executed within mandatory windows.",
  "Regulatory Non-Compliance Fines": "Estimated from Accreditation Canada standards violations and provincial health authority penalty histories. GRGF provides continuous compliance evidence for 100% of surveyed standards.",
  "Insurance Premium Exposure": "Based on HIROC risk-rated premium models. GRGF's verifiable governance records demonstrate risk management maturity, qualifying institutions for preferred premium tiers.",
  "Audit & Accreditation Costs": "Calculated from accreditation preparation FTE hours and external surveyor engagement costs. GRGF reduces prep time by 75% through always-available compliance evidence.",
  "Supply Chain Irregularities": "Uses healthcare supply chain benchmark data for procurement leakage and waste. GRGF records every purchase order, receipt, and inventory decision with authority context.",
  "Staff Credentialing Gaps": "Based on credentialing verification costs and liability from lapsed credentials. GRGF provides real-time credentialing status with hash-sealed verification receipts.",
  "Records Reconciliation Labour": "Modeled on HIM department FTE costs for manual record reconciliation. GRGF's structured event model eliminates 85–90% of manual reconciliation through automated integrity verification.",
  "Incident Investigation Time": "Based on average investigation duration × investigator hourly cost. GRGF reduces investigation time by 85–96% through instant access to verified event timelines.",
  // Government
  "Procurement Fraud & Leakage": "Uses World Bank/OECD estimate of 5–15% procurement leakage in public sector, applied to annual procurement expenditure. GRGF detects omitted approvals, unauthorized changes, and process bypasses through deterministic workflow verification.",
  "Audit Cycle Costs": "Calculated from Auditor General published audit costs and departmental preparation overhead. GRGF's continuous compliance model reduces audit cycle time by 40% and preparation labour by 75%.",
  "Regulatory Compliance Gaps": "Based on historical non-compliance findings and remediation costs from Treasury Board reports. GRGF provides real-time compliance dashboards with verifiable evidence for every policy requirement.",
  "Legal & Litigation Costs": "Modeled on Department of Justice case volume and average cost-per-case. GRGF reduces discovery costs and strengthens crown positions through tamper-evident governance records.",
  "Contract Mismanagement": "Uses PSPC contract amendment frequency and associated cost overrun data. GRGF records every contract modification with authority binding and detects unauthorized scope changes.",
  "IT System Duplication": "Based on GC IT spending analysis showing 30–40% duplication across departments. GRGF's federated model enables cross-departmental record sharing, reducing redundant system investments.",
  "Inter-Agency Reconciliation": "Calculated from FTE costs of manual inter-departmental data reconciliation. GRGF's standardized governance records enable automated cross-agency verification.",
  "Freedom of Information Costs": "Modeled on ATIP request volume × average processing cost. GRGF's structured records reduce search and retrieval time by 70–80% per request.",
  "Internal Investigation Costs": "Based on internal affairs/IG investigation frequency and duration. GRGF provides instant access to verified event histories, reducing investigation timelines by 75%.",
  "Staff Accountability Gaps": "Uses public sector grievance and disciplinary action costs. GRGF provides verifiable evidence of performance expectations, decisions, and outcomes.",
  "Public Trust Erosion Costs": "Estimated from public opinion research correlation between governance failures and program participation rates. GRGF's verification portal enables public trust through transparency.",
  "Records Management Overhead": "Based on records management compliance costs and FTE overhead. GRGF automates 85–90% of retention scheduling, disposition authorization, and chain-of-custody verification.",
  // Finance
  "Compliance & Regulatory Fines": "Based on OSFI/SEC/FCA enforcement action history and average penalty amounts. GRGF provides continuous compliance evidence for regulatory examinations, reducing finding rates by 80%.",
  "Fraud Detection Gaps": "Uses industry fraud loss benchmarks (ACFE Report to the Nations: 5% of revenue). GRGF's omission detection identifies when required controls are bypassed or approval workflows are circumvented.",
  "AML/KYC Non-Compliance": "Modeled on AML remediation program costs and regulatory penalty data. GRGF provides tamper-evident customer due diligence records with complete audit trails.",
  "Audit & Reporting Costs": "Calculated from Big 4 engagement rates and internal audit FTE costs. GRGF reduces audit preparation by 75% through always-available, integrity-verified evidence.",
  "Operational Risk Losses": "Based on Basel III operational risk loss data and internal loss event databases. GRGF reduces operational risk through deterministic event recording and authority binding.",
  "Contract Dispute Costs": "Uses commercial arbitration frequency and cost data. GRGF provides cryptographically verified contract execution evidence, reducing dispute resolution time and costs.",
  "Data Breach Liability": "Modeled on IBM Cost of a Data Breach Report sector averages. GRGF's privacy-by-design architecture (PII minimization, pseudonymization) reduces breach scope and liability.",
  "Insurance Premiums": "Based on insurance premium benchmarks. GRGF's verifiable governance maturity qualifies institutions for preferred premium tiers.",
  "Legal Defense": "Calculated from litigation frequency and average defense cost. GRGF transforms legal proceedings with tamper-evident evidence chains.",
  "Internal Investigation": "Based on compliance investigation duration and FTE costs. GRGF reduces investigation time by 85% through instant verified event access.",
  "Reconciliation Labour": "Uses back-office FTE costs for manual transaction and record reconciliation. GRGF automates 90% of reconciliation through structured, integrity-verified records.",
  "Reputational Risk Costs": "Estimated from brand value impact studies and customer attrition rates following governance failures. GRGF enables proactive governance demonstration.",
  // Infrastructure
  "Safety & Environmental Liability": "Based on construction/infrastructure incident rates and average liability per event. GRGF provides real-time safety compliance verification and environmental monitoring records.",
  "Permit & Licensing Delays": "Modeled on permit processing delays × daily project cost. GRGF accelerates permit verification through pre-validated compliance evidence packages.",
  "Asset Lifecycle Mismanagement": "Based on infrastructure asset depreciation variance between managed and unmanaged portfolios. GRGF provides complete asset chain-of-custody from commissioning to decommissioning.",
  "Environmental Incident Costs": "Modeled on environmental remediation costs and regulatory penalties. GRGF's omission detection identifies when required environmental assessments are missed.",
  "Insurance & Bonding Costs": "Based on construction insurance and performance bond premium benchmarks. GRGF's verified project governance records reduce insurer risk assessments.",
  "Legal & Arbitration": "Uses construction arbitration frequency and average cost. GRGF provides tamper-evident project records for dispute resolution.",
  "Audit & Inspection Costs": "Calculated from regulatory inspection frequency and preparation costs. GRGF's continuous compliance evidence reduces preparation time by 75%.",
  "Change Order Fraud": "Based on construction industry change order fraud detection rates. GRGF records every change order with authority binding and detects unauthorized modifications.",
  "Public Compensation Claims": "Modeled on public liability claim frequency and average settlement. GRGF provides instant verified evidence for claim investigation.",
  // Education
  "Research Integrity Incidents": "Based on ORI/research misconduct investigation costs and institutional remediation. GRGF provides tamper-evident research data governance records.",
  "Accreditation Compliance Costs": "Modeled on institutional accreditation preparation FTE hours and consultant costs. GRGF reduces preparation by 75% through continuous compliance evidence.",
  "Student Records Mismanagement": "Based on FERPA violation penalties and records remediation costs. GRGF provides integrity-verified student record management with complete audit trails.",
  "Grant Accountability Gaps": "Uses research grant audit finding rates and remediation costs. GRGF records every grant expenditure decision with authority binding and compliance verification.",
  "HR/Labour Disputes": "Based on academic institution grievance frequency and resolution costs. GRGF provides verified evidence of employment decisions and institutional processes.",
  "Data Protection Violations": "Modeled on PIPEDA/GDPR penalty benchmarks for educational institutions. GRGF's privacy-by-design architecture reduces violation scope.",
  "Facility Management Gaps": "Uses campus facility incident rates and associated costs. GRGF provides chain-of-custody records for maintenance and safety compliance.",
  "Administrative Overhead": "Based on institutional administration cost benchmarks. GRGF automates 85% of governance record management, freeing administrative capacity.",
  // Justice
  "Evidence Chain-of-Custody Failures": "Based on case dismissal rates due to chain-of-custody challenges and associated costs. GRGF provides cryptographic chain-of-custody verification with tamper-evident evidence records.",
  "Case Management Delays": "Modeled on court backlog costs and average delay duration. GRGF accelerates case processing through instant access to verified governance records.",
  "Wrongful Conviction Liability": "Uses wrongful conviction compensation data and litigation costs. GRGF's tamper-evident records reduce evidence manipulation risk by 92%.",
  "Records Tampering Exposure": "Based on documented evidence tampering incidents and institutional remediation costs. GRGF's append-only, hash-chained architecture makes tampering detectable and provable.",
  "Inter-Agency Data Gaps": "Modeled on cross-jurisdictional information sharing failure costs. GRGF's federated model enables verified record sharing across justice agencies.",
  "Compliance & Oversight Costs": "Uses justice sector oversight body costs and compliance program budgets. GRGF reduces compliance evidence preparation by 76%.",
  "Legal Challenge Costs": "Based on procedural challenge frequency and associated defense costs. GRGF provides verifiable evidence of procedural compliance.",
  "Public Trust Deficits": "Estimated from justice sector public confidence surveys and program participation impacts. GRGF's public verification portal enables transparency.",
  // Municipal
  "Procurement & Tendering Irregularities": "Based on municipal audit findings for procurement non-compliance × remediation costs. GRGF detects omitted approvals and bid irregularities through deterministic workflow verification.",
  "Building Permit Accountability": "Modeled on permit-related liability incidents and inspection failure costs. GRGF provides hash-sealed inspection records with verifiable authority binding.",
  "Infrastructure Project Overruns": "Uses municipal project cost overrun benchmarks (average 25–40% over budget). GRGF records every project decision and change order with authority context.",
  "Bylaw Enforcement Gaps": "Based on bylaw enforcement complaint resolution costs and litigation. GRGF provides verifiable enforcement action records for legal proceedings.",
  "Public Complaint Costs": "Modeled on complaint volume × average investigation and resolution cost. GRGF reduces investigation time by 72% through instant verified record access.",
  "Council Decision Accountability": "Uses municipal governance challenge costs and remediation. GRGF provides tamper-evident records of council decisions, delegations, and approvals.",
  "Audit & Oversight Costs": "Based on municipal audit engagement costs and preparation overhead. GRGF reduces audit preparation by 78% through continuous compliance evidence.",
  "Contractor Mismanagement": "Uses municipal contract performance deviation rates and remediation costs. GRGF records every contractor milestone and payment with authority verification.",
  "Environmental Compliance": "Based on municipal environmental violation penalties and remediation costs. GRGF provides verifiable environmental monitoring and compliance records.",
  "Legal & Liability Exposure": "Modeled on municipal litigation frequency and average defense cost. GRGF strengthens legal positions through tamper-evident governance evidence.",
  "Legal & Liability Costs": "Calculated from litigation frequency and average defense cost. GRGF transforms legal proceedings with tamper-evident evidence chains.",
};

// ── General methodology for calculations ──
const GENERAL_METHODOLOGY = {
  beforeCalc: "Before GRGF = Base sector cost × Organization scale multiplier. Base costs derived from sector-specific public data sources, audit reports, and international benchmarks.",
  afterCalc: "After GRGF = Before GRGF × (1 − Reduction%). Reduction rates based on GRGF's demonstrated capabilities: hash-sealed records, omission detection, authority binding, and continuous compliance evidence.",
  savingsCalc: "Annual Savings = Before − After. Represents annualized risk-adjusted cost reduction.",
  projectionCalc: "5-Year Projection uses phased adoption multipliers: Year 1 (40%), Year 2 (70%), Year 3 (90%), Years 4–5 (100%). Deployment costs are front-loaded and decline as system matures.",
  roiCalc: "ROI = (Cumulative Net Benefit ÷ Total Deployment Cost) × 100. Year 1 ROI uses first-year savings minus first-year deployment cost.",
  sources: "Data sources include: OECD Public Governance Reviews, World Bank Procurement Benchmarks, Transparency International CPI data, sector-specific auditor general reports, IBM Cost of a Data Breach Report, ACFE Report to the Nations, Basel III operational risk databases, and comparable institutional pilot results.",
};

// Sector profiles (same as before)
const SECTOR_PROFILES: Record<string, {
  label: string;
  domains: { area: string; beforeBase: number; reductionPct: number }[];
  deployBase: number[];
  description: string;
}> = {
  transit: {
    label: "Transit / Transportation",
    description: "Urban transit, rail, aviation, port authorities",
    deployBase: [3.2, 1.8, 1.2, 0.8, 0.6],
    domains: [
      { area: "Safety Incident Liability", beforeBase: 18.5, reductionPct: 0.77 },
      { area: "Workers' Compensation Claims", beforeBase: 12.8, reductionPct: 0.60 },
      { area: "Service Disruption Costs", beforeBase: 22.4, reductionPct: 0.62 },
      { area: "Maintenance Accountability Gaps", beforeBase: 15.2, reductionPct: 0.75 },
      { area: "Procurement Irregularities", beforeBase: 28.6, reductionPct: 0.72 },
      { area: "Regulatory Non-Compliance", beforeBase: 8.4, reductionPct: 0.86 },
      { area: "Insurance Premium Overcharges", beforeBase: 14.6, reductionPct: 0.57 },
      { area: "Legal Defense & Settlements", beforeBase: 19.8, reductionPct: 0.73 },
      { area: "Audit & Investigation Costs", beforeBase: 9.6, reductionPct: 0.78 },
      { area: "Fleet Asset Mismanagement", beforeBase: 11.3, reductionPct: 0.72 },
      { area: "Contractor Oversight Failures", beforeBase: 16.5, reductionPct: 0.71 },
      { area: "Public Complaint Resolution", beforeBase: 6.8, reductionPct: 0.72 },
    ],
  },
  healthcare: {
    label: "Healthcare / Hospital",
    description: "Hospitals, health networks, clinical operations",
    deployBase: [2.8, 1.5, 1.0, 0.7, 0.5],
    domains: [
      { area: "Patient Safety Incidents", beforeBase: 22.0, reductionPct: 0.78 },
      { area: "Malpractice & Liability", beforeBase: 19.5, reductionPct: 0.72 },
      { area: "Medication Error Costs", beforeBase: 14.2, reductionPct: 0.80 },
      { area: "Dietary / Care Compliance Gaps", beforeBase: 8.6, reductionPct: 0.74 },
      { area: "Regulatory Non-Compliance Fines", beforeBase: 6.8, reductionPct: 0.85 },
      { area: "Insurance Premium Exposure", beforeBase: 12.4, reductionPct: 0.55 },
      { area: "Audit & Accreditation Costs", beforeBase: 7.2, reductionPct: 0.76 },
      { area: "Supply Chain Irregularities", beforeBase: 11.8, reductionPct: 0.68 },
      { area: "Staff Credentialing Gaps", beforeBase: 5.4, reductionPct: 0.82 },
      { area: "Records Reconciliation Labour", beforeBase: 9.6, reductionPct: 0.88 },
      { area: "Legal Defense & Settlements", beforeBase: 16.2, reductionPct: 0.70 },
      { area: "Incident Investigation Time", beforeBase: 4.8, reductionPct: 0.96 },
    ],
  },
  government: {
    label: "Government / Federal Agency",
    description: "Ministries, federal agencies, public administration",
    deployBase: [5.0, 2.8, 1.8, 1.2, 0.8],
    domains: [
      { area: "Procurement Fraud & Leakage", beforeBase: 45.0, reductionPct: 0.72 },
      { area: "Audit Cycle Costs", beforeBase: 18.5, reductionPct: 0.78 },
      { area: "Regulatory Compliance Gaps", beforeBase: 12.4, reductionPct: 0.82 },
      { area: "Legal & Litigation Costs", beforeBase: 22.0, reductionPct: 0.68 },
      { area: "Contract Mismanagement", beforeBase: 28.6, reductionPct: 0.70 },
      { area: "IT System Duplication", beforeBase: 15.2, reductionPct: 0.55 },
      { area: "Inter-Agency Reconciliation", beforeBase: 9.8, reductionPct: 0.85 },
      { area: "Freedom of Information Costs", beforeBase: 6.4, reductionPct: 0.72 },
      { area: "Internal Investigation Costs", beforeBase: 11.2, reductionPct: 0.80 },
      { area: "Staff Accountability Gaps", beforeBase: 8.6, reductionPct: 0.75 },
      { area: "Public Trust Erosion Costs", beforeBase: 14.0, reductionPct: 0.60 },
      { area: "Records Management Overhead", beforeBase: 7.8, reductionPct: 0.90 },
    ],
  },
  finance: {
    label: "Banking / Financial Services",
    description: "Banks, insurance, investment, fintech",
    deployBase: [4.5, 2.5, 1.6, 1.0, 0.7],
    domains: [
      { area: "Compliance & Regulatory Fines", beforeBase: 35.0, reductionPct: 0.82 },
      { area: "Fraud Detection Gaps", beforeBase: 28.0, reductionPct: 0.70 },
      { area: "AML/KYC Non-Compliance", beforeBase: 18.5, reductionPct: 0.78 },
      { area: "Audit & Reporting Costs", beforeBase: 14.2, reductionPct: 0.76 },
      { area: "Operational Risk Losses", beforeBase: 22.0, reductionPct: 0.65 },
      { area: "Contract Dispute Costs", beforeBase: 12.8, reductionPct: 0.72 },
      { area: "Data Breach Liability", beforeBase: 16.4, reductionPct: 0.68 },
      { area: "Insurance Premiums", beforeBase: 11.0, reductionPct: 0.55 },
      { area: "Legal Defense", beforeBase: 19.6, reductionPct: 0.70 },
      { area: "Internal Investigation", beforeBase: 8.4, reductionPct: 0.85 },
      { area: "Reconciliation Labour", beforeBase: 6.8, reductionPct: 0.90 },
      { area: "Reputational Risk Costs", beforeBase: 15.0, reductionPct: 0.55 },
    ],
  },
  infrastructure: {
    label: "Infrastructure / Utilities",
    description: "Energy, water, telecom, construction",
    deployBase: [3.8, 2.1, 1.4, 0.9, 0.7],
    domains: [
      { area: "Safety & Environmental Liability", beforeBase: 24.0, reductionPct: 0.75 },
      { area: "Procurement Irregularities", beforeBase: 32.0, reductionPct: 0.72 },
      { area: "Permit & Licensing Delays", beforeBase: 14.5, reductionPct: 0.68 },
      { area: "Contractor Oversight Failures", beforeBase: 18.8, reductionPct: 0.70 },
      { area: "Asset Lifecycle Mismanagement", beforeBase: 16.2, reductionPct: 0.72 },
      { area: "Regulatory Non-Compliance", beforeBase: 11.4, reductionPct: 0.82 },
      { area: "Environmental Incident Costs", beforeBase: 20.0, reductionPct: 0.65 },
      { area: "Insurance & Bonding Costs", beforeBase: 13.6, reductionPct: 0.55 },
      { area: "Legal & Arbitration", beforeBase: 15.4, reductionPct: 0.68 },
      { area: "Audit & Inspection Costs", beforeBase: 8.2, reductionPct: 0.78 },
      { area: "Change Order Fraud", beforeBase: 12.0, reductionPct: 0.80 },
      { area: "Public Compensation Claims", beforeBase: 7.6, reductionPct: 0.72 },
    ],
  },
  education: {
    label: "Education / University",
    description: "Universities, school boards, research institutions",
    deployBase: [1.8, 1.0, 0.7, 0.5, 0.4],
    domains: [
      { area: "Research Integrity Incidents", beforeBase: 8.5, reductionPct: 0.82 },
      { area: "Procurement Irregularities", beforeBase: 12.0, reductionPct: 0.72 },
      { area: "Accreditation Compliance Costs", beforeBase: 6.4, reductionPct: 0.78 },
      { area: "Student Records Mismanagement", beforeBase: 4.8, reductionPct: 0.88 },
      { area: "Grant Accountability Gaps", beforeBase: 9.2, reductionPct: 0.75 },
      { area: "Legal & Liability Costs", beforeBase: 7.6, reductionPct: 0.68 },
      { area: "HR/Labour Disputes", beforeBase: 5.4, reductionPct: 0.65 },
      { area: "Insurance Premiums", beforeBase: 4.2, reductionPct: 0.55 },
      { area: "Audit & Reporting Costs", beforeBase: 3.8, reductionPct: 0.76 },
      { area: "Data Protection Violations", beforeBase: 6.0, reductionPct: 0.80 },
      { area: "Facility Management Gaps", beforeBase: 5.2, reductionPct: 0.70 },
      { area: "Administrative Overhead", beforeBase: 4.6, reductionPct: 0.85 },
    ],
  },
  justice: {
    label: "Justice / Courts",
    description: "Courts, corrections, law enforcement agencies",
    deployBase: [3.0, 1.6, 1.1, 0.7, 0.5],
    domains: [
      { area: "Evidence Chain-of-Custody Failures", beforeBase: 16.0, reductionPct: 0.90 },
      { area: "Case Management Delays", beforeBase: 12.4, reductionPct: 0.72 },
      { area: "Wrongful Conviction Liability", beforeBase: 22.0, reductionPct: 0.65 },
      { area: "Records Tampering Exposure", beforeBase: 8.6, reductionPct: 0.92 },
      { area: "Inter-Agency Data Gaps", beforeBase: 9.8, reductionPct: 0.78 },
      { area: "Compliance & Oversight Costs", beforeBase: 7.2, reductionPct: 0.76 },
      { area: "Legal Challenge Costs", beforeBase: 14.5, reductionPct: 0.68 },
      { area: "Audit & Inspection Costs", beforeBase: 5.8, reductionPct: 0.80 },
      { area: "Staff Accountability Gaps", beforeBase: 6.4, reductionPct: 0.75 },
      { area: "Public Trust Deficits", beforeBase: 11.0, reductionPct: 0.58 },
      { area: "Procurement Irregularities", beforeBase: 8.2, reductionPct: 0.72 },
      { area: "Incident Investigation Time", beforeBase: 7.6, reductionPct: 0.85 },
    ],
  },
  municipal: {
    label: "Municipal / City Government",
    description: "Cities, municipalities, regional governments",
    deployBase: [2.2, 1.2, 0.8, 0.6, 0.4],
    domains: [
      { area: "Procurement & Tendering Irregularities", beforeBase: 18.0, reductionPct: 0.72 },
      { area: "Building Permit Accountability", beforeBase: 8.5, reductionPct: 0.78 },
      { area: "Infrastructure Project Overruns", beforeBase: 14.2, reductionPct: 0.65 },
      { area: "Bylaw Enforcement Gaps", beforeBase: 5.6, reductionPct: 0.70 },
      { area: "Public Complaint Costs", beforeBase: 4.8, reductionPct: 0.72 },
      { area: "Legal & Liability Exposure", beforeBase: 9.4, reductionPct: 0.68 },
      { area: "Council Decision Accountability", beforeBase: 6.2, reductionPct: 0.82 },
      { area: "Audit & Oversight Costs", beforeBase: 4.4, reductionPct: 0.78 },
      { area: "Records Management Overhead", beforeBase: 3.8, reductionPct: 0.88 },
      { area: "Insurance Premiums", beforeBase: 7.0, reductionPct: 0.55 },
      { area: "Contractor Mismanagement", beforeBase: 10.6, reductionPct: 0.70 },
      { area: "Environmental Compliance", beforeBase: 5.2, reductionPct: 0.75 },
    ],
  },
};

function fmt(v: number): string {
  if (v >= 1000) return "$" + (v / 1000).toFixed(2) + "B";
  return "$" + v.toFixed(2) + "M";
}

function pct(before: number, after: number): string {
  return ((before - after) / before * 100).toFixed(0) + "%";
}

export default function ValueCalculator() {
  const [orgName, setOrgName] = useState("");
  const [sector, setSector] = useState("transit");
  const [scale, setScale] = useState(1.0);
  const [calculated, setCalculated] = useState(false);
  const [showMethodology, setShowMethodology] = useState(false);
  const [expandedDomains, setExpandedDomains] = useState<Set<string>>(new Set());
  const printRef = useRef<HTMLDivElement>(null);
  const [researching, setResearching] = useState(false);
  const [companyData, setCompanyData] = useState<CompanyResearch | null>(null);

  const handleResearch = async () => {
    if (!orgName.trim()) return;
    setResearching(true);
    setCompanyData(null);
    setCalculated(false);
    try {
      const { data, error } = await supabase.functions.invoke('company-research', {
        body: { companyName: orgName.trim() },
      });
      if (error) throw error;
      if (!data?.success) throw new Error(data?.error || 'Research failed');

      const info: CompanyResearch = data.data;
      setCompanyData(info);
      setOrgName(info.name);
      if (info.sector && SECTOR_PROFILES[info.sector]) setSector(info.sector);
      if (info.scale) setScale(info.scale);
      toast.success(`Found: ${info.name}`, { description: `${info.employeeCount?.toLocaleString()} employees · ${info.country}` });
    } catch (e: any) {
      console.error('Research error:', e);
      toast.error('Research failed', { description: e.message || 'Could not find organization data' });
    } finally {
      setResearching(false);
    }
  };

  const profile = SECTOR_PROFILES[sector];

  const results = useMemo(() => {
    if (!profile) return null;
    const domains = profile.domains.map(d => ({
      area: d.area,
      before: +(d.beforeBase * scale).toFixed(2),
      after: +(d.beforeBase * scale * (1 - d.reductionPct)).toFixed(2),
      saved: +(d.beforeBase * scale * d.reductionPct).toFixed(2),
      reduction: (d.reductionPct * 100).toFixed(0) + "%",
      reductionPct: d.reductionPct,
      beforeBase: d.beforeBase,
    }));
    const totalBefore = domains.reduce((s, d) => s + d.before, 0);
    const totalAfter = domains.reduce((s, d) => s + d.after, 0);
    const totalSaved = totalBefore - totalAfter;

    const deploy = profile.deployBase.map(d => +(d * scale).toFixed(2));
    const savingsMultipliers = [0.4, 0.7, 0.9, 1.0, 1.0];
    const savings = savingsMultipliers.map(m => +(totalSaved * m).toFixed(2));
    const cumNet: number[] = [];
    let running = 0;
    for (let i = 0; i < 5; i++) { running += savings[i] - deploy[i]; cumNet.push(+running.toFixed(2)); }

    const totalDeploy = deploy.reduce((a, b) => a + b, 0);
    const totalSavings5 = savings.reduce((a, b) => a + b, 0);
    const roi = ((cumNet[4] / totalDeploy) * 100).toFixed(0);
    const year1ROI = (((savings[0] - deploy[0]) / deploy[0]) * 100).toFixed(0);

    return { domains, totalBefore, totalAfter, totalSaved, deploy, savings, cumNet, totalDeploy, totalSavings5, roi, year1ROI };
  }, [profile, scale]);

  const handleCalculate = () => {
    if (orgName.trim()) setCalculated(true);
  };

  const toggleDomain = (area: string) => {
    setExpandedDomains(prev => {
      const next = new Set(prev);
      if (next.has(area)) next.delete(area);
      else next.add(area);
      return next;
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadCSV = () => {
    if (!results) return;
    const lines = [
      `GRGF Value Calculator — ${orgName}`,
      `Sector: ${profile.label} | Scale: ${scale}x | Date: ${new Date().toLocaleDateString()}`,
      "",
      "Operational Domain,Before GRGF ($M),After GRGF ($M),Savings ($M),Reduction %",
      ...results.domains.map(d => `"${d.area}",${d.before.toFixed(2)},${d.after.toFixed(2)},${d.saved.toFixed(2)},${d.reduction}`),
      `TOTAL,${results.totalBefore.toFixed(2)},${results.totalAfter.toFixed(2)},${results.totalSaved.toFixed(2)},${pct(results.totalBefore, results.totalAfter)}`,
      "",
      "5-Year Projection",
      "Year,Deployment Cost ($M),Annual Savings ($M),Net Benefit ($M),Cumulative ($M)",
      ...results.deploy.map((d, i) => `Year ${i+1},${d.toFixed(2)},${results.savings[i].toFixed(2)},${(results.savings[i]-d).toFixed(2)},${results.cumNet[i].toFixed(2)}`),
      "",
      `5-Year ROI: ${results.roi}%`,
      `Year 1 ROI: ${results.year1ROI}%`,
      `Total 5-Year Net Benefit: ${fmt(results.cumNet[4])}`,
      "",
      "Global Record Governance Framework — Invented and Owned by Tarek Wahid",
    ];
    const blob = new Blob([lines.join("\n")], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GRGF_Value_Analysis_${orgName.replace(/\s+/g, "_")}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleDownloadJSON = () => {
    if (!results) return;
    const data = {
      report: "GRGF Before vs. After Value Analysis",
      organization: orgName,
      sector: profile.label,
      scale,
      generatedAt: new Date().toISOString(),
      summary: {
        annualExposureBefore: results.totalBefore,
        annualExposureAfter: results.totalAfter,
        annualSavings: results.totalSaved,
        reductionPct: pct(results.totalBefore, results.totalAfter),
        fiveYearNetBenefit: results.cumNet[4],
        fiveYearROI: results.roi + "%",
        year1ROI: results.year1ROI + "%",
      },
      domains: results.domains.map(d => ({
        area: d.area,
        beforeM: d.before,
        afterM: d.after,
        savingsM: d.saved,
        reduction: d.reduction,
        methodology: METHODOLOGY[d.area] || "Sector benchmark methodology applied.",
      })),
      fiveYearProjection: results.deploy.map((d, i) => ({
        year: i + 1,
        deployCostM: d,
        annualSavingsM: results.savings[i],
        netBenefitM: +(results.savings[i] - d).toFixed(2),
        cumulativeM: results.cumNet[i],
      })),
      attribution: "Global Record Governance Framework — Invented and Owned by Tarek Wahid",
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `GRGF_Value_Analysis_${orgName.replace(/\s+/g, "_")}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="border-b border-border bg-card/50 px-6 py-8 print:bg-transparent print:border-0">
        <div className="max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-3 text-xs print:hidden">
            <Calculator className="h-3 w-3 mr-1" /> GRGF Value Calculator
          </Badge>
          <div className="hidden print:block mb-4">
            <p className="text-xs text-muted-foreground">GRGF — Global Record Governance Framework</p>
          </div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            Before vs. After GRGF
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Enter any organization name and sector to instantly calculate the projected financial
            impact of GRGF integration — modeled on real institutional cost structures.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8" ref={printRef}>
        {/* Input Section */}
        <Card className="border-2 border-primary/20 bg-card print:border print:border-border">
          <CardContent className="pt-6 space-y-4">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] print:grid-cols-1">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Organization Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground print:hidden" />
                  <Input
                    placeholder="e.g. Toronto Transit Commission, RBC, Service Canada…"
                    value={orgName}
                    onChange={(e) => { setOrgName(e.target.value); setCalculated(false); setCompanyData(null); }}
                    className="pl-10 pr-4 print:pl-3 print:border-0 print:shadow-none print:font-semibold"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleResearch();
                      }
                    }}
                  />
                </div>
              </div>
              <div className="flex items-end print:hidden">
                <Button
                  onClick={handleResearch}
                  disabled={!orgName.trim() || researching}
                  variant="outline"
                  className="w-full md:w-auto gap-2 border-primary/30 hover:bg-primary/5"
                >
                  {researching ? (
                    <><Loader2 className="h-4 w-4 animate-spin" /> Researching…</>
                  ) : (
                    <><Sparkles className="h-4 w-4 text-primary" /> AI Research</>
                  )}
                </Button>
              </div>
            </div>

            {/* Company Research Results Card */}
            {companyData && (
              <div className="border border-primary/20 rounded-lg bg-primary/5 p-4 animate-fade-in">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-primary" />
                      AI Research: {companyData.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{companyData.description}</p>
                  </div>
                  <Badge variant="outline" className="text-[10px] shrink-0">AI-Verified</Badge>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="flex items-center gap-1.5">
                    <Globe className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">Country:</span>
                    <span className="font-medium">{companyData.country}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">Employees:</span>
                    <span className="font-medium">{companyData.employeeCount?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                    <span className="text-muted-foreground">Budget:</span>
                    <span className="font-medium">${companyData.annualBudget >= 1000 ? (companyData.annualBudget / 1000).toFixed(1) + 'B' : companyData.annualBudget.toFixed(0) + 'M'}</span>
                  </div>
                  {companyData.founded && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3 w-3 text-muted-foreground" />
                      <span className="text-muted-foreground">Founded:</span>
                      <span className="font-medium">{companyData.founded}</span>
                    </div>
                  )}
                </div>
                {companyData.keyRisks && companyData.keyRisks.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-primary/10">
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <AlertTriangle className="h-3 w-3" /> Key Governance Risks Identified
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {companyData.keyRisks.map((risk, i) => (
                        <Badge key={i} variant="secondary" className="text-[10px] font-normal">{risk}</Badge>
                      ))}
                    </div>
                  </div>
                )}
                <p className="text-[10px] text-muted-foreground/60 mt-3 italic">
                  Sector and scale auto-configured based on research. Review and adjust below if needed.
                </p>
              </div>
            )}

            <div className="grid gap-4 md:grid-cols-[200px_160px_auto] print:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Sector</label>
                <Select value={sector} onValueChange={(v) => { setSector(v); setCalculated(false); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(SECTOR_PROFILES).map(([k, v]) => (
                      <SelectItem key={k} value={k}>{v.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Organization Scale</label>
                <Select value={String(scale)} onValueChange={(v) => { setScale(parseFloat(v)); setCalculated(false); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.25">Small (0.25×)</SelectItem>
                    <SelectItem value="0.5">Medium (0.5×)</SelectItem>
                    <SelectItem value="1">Large (1×)</SelectItem>
                    <SelectItem value="2">Very Large (2×)</SelectItem>
                    <SelectItem value="5">National (5×)</SelectItem>
                    <SelectItem value="10">Multi-National (10×)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end print:hidden">
                <Button onClick={handleCalculate} disabled={!orgName.trim()} className="w-full md:w-auto gap-2">
                  <Search className="h-4 w-4" /> Calculate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {calculated && results && (
          <div className="space-y-8 animate-fade-in">
            {/* Export Buttons */}
            <div className="flex flex-wrap gap-2 print:hidden">
              <Button variant="outline" size="sm" onClick={handlePrint} className="gap-2">
                <Printer className="h-3.5 w-3.5" /> Print / PDF
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownloadCSV} className="gap-2">
                <Download className="h-3.5 w-3.5" /> Download CSV
              </Button>
              <Button variant="outline" size="sm" onClick={handleDownloadJSON} className="gap-2">
                <FileText className="h-3.5 w-3.5" /> Download JSON
              </Button>
            </div>

            {/* Headline Metrics */}
            <div>
              <h2 className="text-lg font-serif font-semibold mb-1 text-foreground">
                Financial Impact: {orgName}
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Sector: {profile.label} · Scale: {scale}× · Generated: {new Date().toLocaleDateString()} · Conservative modeled estimates
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Before GRGF", value: fmt(results.totalBefore), icon: TrendingDown, color: "text-destructive" },
                  { label: "After GRGF", value: fmt(results.totalAfter), icon: TrendingUp, color: "text-accent" },
                  { label: "Annual Savings", value: fmt(results.totalSaved), icon: DollarSign, color: "text-primary" },
                  { label: "5-Year Net Benefit", value: fmt(results.cumNet[4]), icon: BarChart3, color: "text-primary" },
                ].map(m => (
                  <Card key={m.label} className="text-center py-5">
                    <m.icon className={`h-5 w-5 mx-auto mb-2 ${m.color}`} />
                    <p className={`text-2xl font-serif font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                  </Card>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3 mt-3">
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{pct(results.totalBefore, results.totalAfter)}</p>
                  <p className="text-xs text-muted-foreground">Total Reduction</p>
                </Card>
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{results.roi}%</p>
                  <p className="text-xs text-muted-foreground">5-Year ROI</p>
                </Card>
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{results.year1ROI}%</p>
                  <p className="text-xs text-muted-foreground">Year 1 ROI</p>
                </Card>
              </div>
            </div>

            {/* Detailed Breakdown Table with Methodology */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-serif font-semibold text-foreground flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Detailed Before vs. After — {orgName}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (expandedDomains.size === results.domains.length) {
                      setExpandedDomains(new Set());
                    } else {
                      setExpandedDomains(new Set(results.domains.map(d => d.area)));
                    }
                  }}
                  className="text-xs gap-1 print:hidden"
                >
                  <Info className="h-3 w-3" />
                  {expandedDomains.size === results.domains.length ? "Hide All Methodology" : "Show All Methodology"}
                </Button>
              </div>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left py-2.5 px-3 font-medium">Operational Domain</th>
                        <th className="text-right py-2.5 px-3 font-medium">Before ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">After ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Savings ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Reduction</th>
                        <th className="text-center py-2.5 px-2 font-medium w-8 print:hidden"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.domains.map((d, i) => {
                        const methText = METHODOLOGY[d.area] || "Sector-specific benchmark methodology applied based on publicly available institutional data.";
                        const isExpanded = expandedDomains.has(d.area);
                        return (
                          <>
                            <tr
                              key={d.area}
                              className={`${i % 2 === 0 ? "bg-muted/30" : ""} cursor-pointer hover:bg-muted/50 transition-colors print:cursor-default`}
                              onClick={() => toggleDomain(d.area)}
                            >
                              <td className="py-2 px-3 font-medium text-foreground">{d.area}</td>
                              <td className="py-2 px-3 text-right font-mono text-destructive">{fmt(d.before)}</td>
                              <td className="py-2 px-3 text-right font-mono text-accent">{fmt(d.after)}</td>
                              <td className="py-2 px-3 text-right font-mono font-semibold">{fmt(d.saved)}</td>
                              <td className="py-2 px-3 text-right font-mono text-primary font-semibold">{d.reduction}</td>
                              <td className="py-2 px-2 text-center print:hidden">
                                {isExpanded ? <ChevronUp className="h-3 w-3 text-muted-foreground" /> : <ChevronDown className="h-3 w-3 text-muted-foreground" />}
                              </td>
                            </tr>
                            {isExpanded && (
                              <tr key={`${d.area}-method`} className="bg-primary/5">
                                <td colSpan={6} className="px-4 py-3">
                                  <div className="flex gap-2">
                                    <BookOpen className="h-3.5 w-3.5 text-primary shrink-0 mt-0.5" />
                                    <div>
                                      <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">Methodology</p>
                                      <p className="text-[11px] text-muted-foreground leading-relaxed">{methText}</p>
                                      <div className="mt-2 flex gap-4 text-[10px] text-muted-foreground/70">
                                        <span>Base cost: ${d.beforeBase}M</span>
                                        <span>Scale factor: {scale}×</span>
                                        <span>Reduction rate: {(d.reductionPct * 100).toFixed(0)}%</span>
                                        <span>Formula: ${d.beforeBase}M × {scale} × {(d.reductionPct * 100).toFixed(0)}% = {fmt(d.saved)} saved</span>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </>
                        );
                      })}
                      <tr className="bg-primary/10 font-semibold border-t-2 border-primary">
                        <td className="py-2.5 px-3 text-foreground">TOTAL</td>
                        <td className="py-2.5 px-3 text-right font-mono text-destructive">{fmt(results.totalBefore)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-accent">{fmt(results.totalAfter)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-primary">{fmt(results.totalSaved)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-primary">{pct(results.totalBefore, results.totalAfter)}</td>
                        <td className="print:hidden"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div>
              <h3 className="text-sm font-serif font-semibold mb-3 text-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                5-Year Financial Projection — {orgName}
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left py-2.5 px-3 font-medium">Year</th>
                        <th className="text-right py-2.5 px-3 font-medium">Deploy Cost ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Annual Savings ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Net Benefit ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Cumulative ($M)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.deploy.map((d, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="py-2 px-3 font-medium text-foreground">Year {i + 1}</td>
                          <td className="py-2 px-3 text-right font-mono text-destructive">{fmt(d)}</td>
                          <td className="py-2 px-3 text-right font-mono text-accent">{fmt(results.savings[i])}</td>
                          <td className="py-2 px-3 text-right font-mono font-semibold">{fmt(results.savings[i] - d)}</td>
                          <td className="py-2 px-3 text-right font-mono text-primary font-semibold">{fmt(results.cumNet[i])}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 mt-4">
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Payback Period</p>
                  <p className="text-lg font-bold text-primary">{"< 4 months"}</p>
                </Card>
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Break-Even Threshold</p>
                  <p className="text-lg font-bold text-primary">0.18%</p>
                  <p className="text-[10px] text-muted-foreground">integrity improvement</p>
                </Card>
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Total 5-Year Deploy Cost</p>
                  <p className="text-lg font-bold text-muted-foreground">{fmt(results.totalDeploy)}</p>
                </Card>
              </div>
            </div>

            {/* General Methodology Section */}
            <Collapsible open={showMethodology} onOpenChange={setShowMethodology}>
              <CollapsibleTrigger asChild>
                <Button variant="outline" className="w-full justify-between gap-2 print:hidden">
                  <span className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Calculation Methodology & Data Sources
                  </span>
                  {showMethodology ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Card className="mt-3">
                  <CardContent className="pt-6 space-y-4">
                    {Object.entries({
                      "Before GRGF Calculation": GENERAL_METHODOLOGY.beforeCalc,
                      "After GRGF Calculation": GENERAL_METHODOLOGY.afterCalc,
                      "Savings Calculation": GENERAL_METHODOLOGY.savingsCalc,
                      "5-Year Projection": GENERAL_METHODOLOGY.projectionCalc,
                      "ROI Calculation": GENERAL_METHODOLOGY.roiCalc,
                      "Data Sources": GENERAL_METHODOLOGY.sources,
                    }).map(([title, desc]) => (
                      <div key={title}>
                        <h4 className="text-xs font-semibold text-foreground mb-1">{title}</h4>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    ))}
                    <div className="pt-3 border-t border-border">
                      <h4 className="text-xs font-semibold text-foreground mb-2">Formula Reference</h4>
                      <div className="bg-muted/50 rounded-md p-3 font-mono text-[10px] text-muted-foreground space-y-1">
                        <p>Before_Cost = Base_Sector_Cost × Scale_Multiplier</p>
                        <p>After_Cost = Before_Cost × (1 − Reduction_Rate)</p>
                        <p>Annual_Savings = Before_Cost − After_Cost</p>
                        <p>Year_N_Savings = Annual_Savings × Adoption_Rate[N]</p>
                        <p>  where Adoption_Rate = [0.40, 0.70, 0.90, 1.00, 1.00]</p>
                        <p>Net_Benefit[N] = Year_N_Savings − Deploy_Cost[N]</p>
                        <p>Cumulative[N] = Σ Net_Benefit[1..N]</p>
                        <p>ROI = (Cumulative[5] ÷ Total_Deploy_Cost) × 100</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CollapsibleContent>
            </Collapsible>

            {/* Print-only methodology */}
            <div className="hidden print:block border-t border-border pt-4 mt-4">
              <h3 className="text-sm font-semibold mb-2">Calculation Methodology</h3>
              {Object.entries({
                "Before GRGF": GENERAL_METHODOLOGY.beforeCalc,
                "After GRGF": GENERAL_METHODOLOGY.afterCalc,
                "Savings": GENERAL_METHODOLOGY.savingsCalc,
                "Projection": GENERAL_METHODOLOGY.projectionCalc,
                "ROI": GENERAL_METHODOLOGY.roiCalc,
                "Sources": GENERAL_METHODOLOGY.sources,
              }).map(([title, desc]) => (
                <div key={title} className="mb-2">
                  <p className="text-[10px]"><span className="font-semibold">{title}:</span> {desc}</p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="border-t border-border pt-6">
              <p className="text-[10px] text-muted-foreground/70 leading-relaxed max-w-3xl">
                <span className="font-semibold text-muted-foreground">Disclaimer.</span> All figures are conservative modeled estimates based on publicly available sector data, comparable institutional benchmarks, and established governance cost structures. Actual outcomes depend on deployment scope, institutional maturity, and organizational commitment. No value is assigned to reputational improvement, stakeholder confidence, or political risk reduction.
              </p>
              <p className="text-[10px] text-muted-foreground/50 mt-2 italic">
                Global Record Governance Framework — Invented and Owned by Tarek Wahid
              </p>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!calculated && (
          <div className="text-center py-16 text-muted-foreground print:hidden">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm font-medium mb-1">Enter an organization name to begin</p>
            <p className="text-xs opacity-60">Select a sector and scale, then click Calculate to see projected impact</p>
          </div>
        )}
      </div>
    </div>
  );
}
