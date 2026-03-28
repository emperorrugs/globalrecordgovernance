import {
  Building, Gavel, Heart, DollarSign, GraduationCap, TreePine,
  Construction, Ship, Users, Monitor, Zap, ShieldCheck,
} from "lucide-react";

export interface Application {
  code: string;
  name: string;
  problem: string;
  mechanism: string;
  impact: string;
  value: string;
}

export interface SectorModule {
  id: string;
  name: string;
  icon: typeof Building;
  color: string;
  appCount: number;
  totalValue: string;
  description: string;
  applications: Application[];
}

export const sectorModules: SectorModule[] = [
  {
    id: "gov", name: "Government", icon: Building, color: "#0078D4", appCount: 14, totalValue: "$8.2B",
    description: "Legislative transparency, procurement integrity, regulatory accountability, and executive decision tracking across all levels of government.",
    applications: [
      { code: "GOV-001", name: "Legislative Record Anchoring", problem: "Parliamentary decisions lack tamper-proof evidence trails", mechanism: "Captures bill readings, votes, amendments as immutable governance events", impact: "100% legislative auditability", value: "$420M" },
      { code: "GOV-002", name: "Cabinet Decision Integrity", problem: "Cabinet decisions can be retroactively altered or denied", mechanism: "Cryptographic sealing of cabinet minutes with authority attestation", impact: "Zero post-hoc alteration capability", value: "$380M" },
      { code: "GOV-003", name: "Procurement Transparency Engine", problem: "$2.6T annual governance losses from procurement fraud", mechanism: "Anchors tender issuance, bid evaluation, award decisions with full chain", impact: "40% reduction in procurement fraud", value: "$1.04B" },
      { code: "GOV-004", name: "Regulatory Decision Tracking", problem: "Regulatory capture goes undetected for years", mechanism: "Records licensing decisions, enforcement gaps, and omission timelines", impact: "65% faster regulatory audits", value: "$560M" },
      { code: "GOV-005", name: "Public Appointment Verification", problem: "Patronage appointments lack merit-based evidence", mechanism: "Anchors qualification reviews, interview panels, and selection rationale", impact: "Full appointment chain visibility", value: "$180M" },
      { code: "GOV-006", name: "Budget Allocation Anchoring", problem: "Budget allocations shift without transparent justification", mechanism: "Records appropriation decisions, reallocation events, and spending authority", impact: "Real-time fiscal accountability", value: "$920M" },
      { code: "GOV-007", name: "Intergovernmental Agreement Registry", problem: "Cross-jurisdictional agreements lack shared evidence", mechanism: "Federation protocol links multi-government commitments", impact: "Unified cross-border verification", value: "$340M" },
      { code: "GOV-008", name: "Policy Impact Assessment Archive", problem: "Impact assessments are lost or ignored post-implementation", mechanism: "Anchors assessment findings to policy decisions with temporal proof", impact: "Mandatory evidence-based policy", value: "$420M" },
      { code: "GOV-009", name: "Emergency Powers Accountability", problem: "Emergency measures lack temporal boundaries", mechanism: "Records invocation, scope, duration, and termination of emergency powers", impact: "Democratic emergency governance", value: "$290M" },
      { code: "GOV-010", name: "Official Correspondence Integrity", problem: "Ministerial correspondence can be deleted or altered", mechanism: "Hash-seals official communications with sender/recipient attestation", impact: "100% correspondence provability", value: "$210M" },
      { code: "GOV-011", name: "Ombudsman Case Anchoring", problem: "Complaint investigation records are vulnerable to institutional pressure", mechanism: "Independent omission detection for complaint handling timelines", impact: "78% faster complaint resolution", value: "$180M" },
      { code: "GOV-012", name: "Election Administration Integrity", problem: "Electoral processes need independent verification", mechanism: "Anchors ballot logistics, count certifications, and dispute records", impact: "Tamper-evident election records", value: "$850M" },
      { code: "GOV-013", name: "Diplomatic Communication Archive", problem: "Diplomatic records face classification abuse", mechanism: "Preserves existence proof without content exposure via ZKP", impact: "Sovereign diplomatic memory", value: "$420M" },
      { code: "GOV-014", name: "Municipal Governance Tracker", problem: "Local government decisions lack institutional memory", mechanism: "Lightweight event capture for municipal councils and committees", impact: "Local accountability infrastructure", value: "$290M" },
    ],
  },
  {
    id: "jus", name: "Justice", icon: Gavel, color: "#D83B01", appCount: 12, totalValue: "$6.8B",
    description: "Court decision integrity, judicial accountability, evidence chain management, and access to justice verification.",
    applications: [
      { code: "JUS-001", name: "Court Decision Registry", problem: "Court rulings can be altered after delivery", mechanism: "Immutable anchoring of judgments with judicial authority attestation", impact: "100% ruling integrity", value: "$780M" },
      { code: "JUS-002", name: "Evidence Chain of Custody", problem: "Evidence tampering undermines justice outcomes", mechanism: "Cryptographic sealing of evidence intake, transfer, and storage events", impact: "Court-admissible digital chain", value: "$920M" },
      { code: "JUS-003", name: "Judicial Appointment Transparency", problem: "Judicial selection lacks merit visibility", mechanism: "Records nomination, review, and appointment authority chains", impact: "Independent judiciary verification", value: "$340M" },
      { code: "JUS-004", name: "Sentencing Decision Anchoring", problem: "Sentencing disparities lack systematic evidence", mechanism: "Anchors sentencing rationale, precedent references, and authority scope", impact: "45% reduction in disparity detection time", value: "$560M" },
      { code: "JUS-005", name: "Legal Aid Access Monitoring", problem: "Legal aid denials go unrecorded", mechanism: "Records application, assessment, approval/denial, and omission events", impact: "Equal access verification", value: "$290M" },
      { code: "JUS-006", name: "Witness Protection Record Integrity", problem: "Witness protection decisions need tamper-proof records", mechanism: "Zero-knowledge existence proofs for sensitive protection orders", impact: "Protected record integrity", value: "$180M" },
      { code: "JUS-007", name: "Parole Decision Anchoring", problem: "Parole decisions lack transparent rationale trails", mechanism: "Records hearing outcomes, conditions, and review authority", impact: "Full parole accountability", value: "$420M" },
      { code: "JUS-008", name: "Constitutional Review Archive", problem: "Constitutional challenges need permanent historical record", mechanism: "Anchors constitutional arguments, rulings, and dissents permanently", impact: "Constitutional memory preservation", value: "$560M" },
      { code: "JUS-009", name: "Alternative Dispute Resolution Tracking", problem: "ADR outcomes lack institutional recognition", mechanism: "Records mediation/arbitration processes and agreements", impact: "Verified dispute resolution", value: "$210M" },
      { code: "JUS-010", name: "Prison Oversight Verification", problem: "Correctional facilities resist external oversight", mechanism: "Independent anchoring of inspection findings and compliance events", impact: "68% improvement in oversight compliance", value: "$340M" },
      { code: "JUS-011", name: "Cross-Border Legal Cooperation", problem: "International legal assistance requests lack tracking", mechanism: "Federation protocol for mutual legal assistance verification", impact: "Faster cross-border cooperation", value: "$920M" },
      { code: "JUS-012", name: "Victim Rights Compliance Monitor", problem: "Victim notification obligations are inconsistently met", mechanism: "Omission detection for victim rights timeline obligations", impact: "100% victim notification compliance", value: "$280M" },
    ],
  },
  {
    id: "hlt", name: "Healthcare", icon: Heart, color: "#107C10", appCount: 11, totalValue: "$5.9B",
    description: "Clinical decision accountability, pharmaceutical regulation, public health emergency governance, and patient rights verification.",
    applications: [
      { code: "HLT-001", name: "Pharmaceutical Licensing Integrity", problem: "Drug approvals face regulatory capture risk", mechanism: "Anchors application, review, testing results, and approval authority", impact: "100% pharma decision traceability", value: "$780M" },
      { code: "HLT-002", name: "Clinical Trial Governance", problem: "Trial protocols can be altered post-registration", mechanism: "Immutable anchoring of trial design, amendments, and results", impact: "Zero protocol manipulation", value: "$640M" },
      { code: "HLT-003", name: "Pandemic Response Accountability", problem: "Emergency health measures lack temporal governance trails", mechanism: "Records health emergency declarations, measure timelines, and authority scope", impact: "Democratic health governance", value: "$920M" },
      { code: "HLT-004", name: "Medical Device Certification", problem: "Device certifications lack post-market surveillance integrity", mechanism: "Anchors certification, adverse event reports, and recall decisions", impact: "Real-time safety verification", value: "$420M" },
      { code: "HLT-005", name: "Healthcare Resource Allocation", problem: "Resource allocation decisions are politically influenced", mechanism: "Records allocation criteria, decisions, and distribution outcomes", impact: "Evidence-based allocation", value: "$560M" },
      { code: "HLT-006", name: "Patient Safety Event Registry", problem: "Adverse events are underreported by 86%", mechanism: "Independent anchoring of safety events with omission detection", impact: "340% increase in event capture", value: "$420M" },
      { code: "HLT-007", name: "Health Professional Credentialing", problem: "Credential fraud affects 2.3% of practitioners", mechanism: "Verifiable credential chain with authority attestation", impact: "Near-zero credential fraud", value: "$290M" },
      { code: "HLT-008", name: "Public Health Policy Anchoring", problem: "Health policy decisions lack evidence-linking", mechanism: "Anchors policy decisions to underlying evidence and expert advice", impact: "Evidence-transparent health policy", value: "$340M" },
      { code: "HLT-009", name: "Organ Transplant Allocation Integrity", problem: "Transplant allocation faces fairness challenges", mechanism: "Immutable recording of matching criteria, decisions, and outcomes", impact: "Verifiably fair allocation", value: "$210M" },
      { code: "HLT-010", name: "Mental Health Act Compliance", problem: "Involuntary treatment orders lack oversight trails", mechanism: "Records authorization, review periods, and patient rights compliance", impact: "100% involuntary treatment accountability", value: "$180M" },
      { code: "HLT-011", name: "Vaccination Record Integrity", problem: "Vaccination records are fragmented and falsifiable", mechanism: "Cryptographic anchoring of vaccination events with issuer attestation", impact: "Universal verification capability", value: "$140M" },
    ],
  },
  {
    id: "fin", name: "Finance", icon: DollarSign, color: "#FFB900", appCount: 11, totalValue: "$7.4B",
    description: "Central bank decision transparency, anti-money laundering compliance, sovereign fund governance, and financial regulatory integrity.",
    applications: [
      { code: "FIN-001", name: "Monetary Policy Decision Anchoring", problem: "Central bank decisions lack real-time verifiable records", mechanism: "Immutable anchoring of rate decisions, voting records, and rationale", impact: "100% monetary policy transparency", value: "$1.2B" },
      { code: "FIN-002", name: "Anti-Money Laundering Compliance", problem: "AML reporting gaps enable financial crime", mechanism: "Records suspicious transaction reports, investigation timelines, and outcomes", impact: "62% faster AML investigation", value: "$920M" },
      { code: "FIN-003", name: "Sovereign Fund Governance", problem: "Sovereign wealth fund decisions lack public accountability", mechanism: "Anchors investment decisions, mandate compliance, and returns reporting", impact: "Full sovereign fund transparency", value: "$1.4B" },
      { code: "FIN-004", name: "Banking License Registry", problem: "Banking licenses are granted without transparent review", mechanism: "Records application review, prudential assessment, and authority decisions", impact: "Verifiable licensing integrity", value: "$560M" },
      { code: "FIN-005", name: "Tax Administration Integrity", problem: "Tax rulings and exemptions face corruption risk", mechanism: "Anchors ruling requests, assessments, and exemption authorities", impact: "45% reduction in tax fraud", value: "$780M" },
      { code: "FIN-006", name: "Financial Sanctions Compliance", problem: "Sanctions enforcement lacks real-time verification", mechanism: "Records screening events, match decisions, and escalation authority", impact: "Real-time sanctions verification", value: "$420M" },
      { code: "FIN-007", name: "Insurance Regulatory Oversight", problem: "Insurance claim denials lack transparent rationale", mechanism: "Anchors claim assessment, denial rationale, and appeal outcomes", impact: "78% faster claim dispute resolution", value: "$340M" },
      { code: "FIN-008", name: "Public Debt Management", problem: "Debt issuance decisions lack historical integrity", mechanism: "Records borrowing authority, issuance decisions, and maturity management", impact: "Sovereign debt accountability", value: "$640M" },
      { code: "FIN-009", name: "Financial Stability Board Compliance", problem: "Systemic risk assessments need permanent records", mechanism: "Anchors stress test results, risk assessments, and corrective actions", impact: "Verifiable systemic risk governance", value: "$420M" },
      { code: "FIN-010", name: "Cryptocurrency Regulation Registry", problem: "Digital asset regulation lacks consistent enforcement evidence", mechanism: "Records licensing, enforcement actions, and compliance assessments", impact: "Unified crypto regulatory memory", value: "$340M" },
      { code: "FIN-011", name: "Development Finance Tracking", problem: "Development loans and grants lack impact accountability", mechanism: "Anchors disbursement, milestone verification, and impact assessments", impact: "100% development finance traceability", value: "$360M" },
    ],
  },
  {
    id: "edu", name: "Education", icon: GraduationCap, color: "#5C2D91", appCount: 10, totalValue: "$3.2B",
    description: "Academic credential verification, institutional accreditation integrity, research ethics governance, and student rights protection.",
    applications: [
      { code: "EDU-001", name: "Academic Credential Anchoring", problem: "Credential fraud costs $7B+ annually worldwide", mechanism: "Cryptographic sealing of degree issuance with institutional attestation", impact: "Near-zero credential fraud", value: "$560M" },
      { code: "EDU-002", name: "Institutional Accreditation Registry", problem: "Accreditation standards are inconsistently enforced", mechanism: "Anchors accreditation reviews, decisions, and compliance milestones", impact: "Transparent accreditation governance", value: "$340M" },
      { code: "EDU-003", name: "Research Ethics Compliance", problem: "Research ethics violations are discovered years late", mechanism: "Records ethics review submissions, approvals, and compliance events", impact: "Real-time ethics governance", value: "$420M" },
      { code: "EDU-004", name: "Student Rights Protection Monitor", problem: "Student grievances lack institutional tracking", mechanism: "Omission detection for complaint handling and policy compliance", impact: "100% grievance accountability", value: "$180M" },
      { code: "EDU-005", name: "Funding Allocation Transparency", problem: "Educational funding decisions face political influence", mechanism: "Anchors allocation criteria, decisions, and distribution outcomes", impact: "Evidence-based funding", value: "$420M" },
      { code: "EDU-006", name: "Examination Integrity System", problem: "Exam fraud undermines qualification validity", mechanism: "Cryptographic anchoring of exam administration and grading events", impact: "Tamper-evident assessments", value: "$290M" },
      { code: "EDU-007", name: "Teacher Certification Registry", problem: "Teacher qualifications need cross-jurisdictional verification", mechanism: "Verifiable credential chain for teaching certifications", impact: "Cross-border credential recognition", value: "$210M" },
      { code: "EDU-008", name: "Curriculum Approval Tracking", problem: "Curriculum changes lack stakeholder accountability", mechanism: "Records proposal, review, stakeholder input, and approval authority", impact: "Democratic curriculum governance", value: "$180M" },
      { code: "EDU-009", name: "Research Output Integrity", problem: "Academic publication fraud costs $2.5B annually", mechanism: "Anchors submission, peer review, and publication events", impact: "Verifiable research provenance", value: "$340M" },
      { code: "EDU-010", name: "International Student Mobility", problem: "Cross-border credential recognition is inconsistent", mechanism: "Federation protocol for multi-jurisdiction credential verification", impact: "Universal credential portability", value: "$260M" },
    ],
  },
  {
    id: "env", name: "Environment", icon: TreePine, color: "#107C10", appCount: 10, totalValue: "$5.1B",
    description: "Carbon credit verification, environmental impact assessment integrity, biodiversity protection accountability, and climate compliance.",
    applications: [
      { code: "ENV-001", name: "Carbon Credit Verification", problem: "Carbon offset fraud exceeds $1.8B annually", mechanism: "Immutable anchoring of credit issuance, retirement, and verification", impact: "Zero double-counting capability", value: "$920M" },
      { code: "ENV-002", name: "Environmental Impact Assessment Registry", problem: "EIA findings are ignored or retroactively altered", mechanism: "Anchors assessment submissions, findings, and mitigation commitments", impact: "100% EIA accountability", value: "$560M" },
      { code: "ENV-003", name: "Biodiversity Protection Compliance", problem: "Protected species decisions lack enforcement trails", mechanism: "Records habitat assessments, protection orders, and compliance events", impact: "Real-time biodiversity governance", value: "$420M" },
      { code: "ENV-004", name: "Climate Commitment Tracking", problem: "National climate pledges lack verifiable implementation evidence", mechanism: "Anchors NDC commitments, implementation milestones, and reporting", impact: "Verifiable climate governance", value: "$780M" },
      { code: "ENV-005", name: "Water Resource Management", problem: "Water allocation decisions face corruption and inequity", mechanism: "Records allocation authority, usage permits, and compliance events", impact: "Equitable water governance", value: "$420M" },
      { code: "ENV-006", name: "Waste Management Compliance", problem: "Hazardous waste disposal violations go undetected", mechanism: "Anchors disposal permits, transport events, and treatment verification", impact: "68% improvement in waste compliance", value: "$340M" },
      { code: "ENV-007", name: "Deforestation Monitoring Integrity", problem: "Deforestation data is manipulated by stakeholders", mechanism: "Independent anchoring of satellite analysis and enforcement actions", impact: "Tamper-evident deforestation records", value: "$560M" },
      { code: "ENV-008", name: "Pollution Permit Registry", problem: "Emission permits exceed limits without accountability", mechanism: "Records permit issuance, monitoring data, and violation events", impact: "Real-time emission accountability", value: "$420M" },
      { code: "ENV-009", name: "Green Bond Verification", problem: "Green bond proceeds lack use-of-proceeds verification", mechanism: "Anchors bond issuance, expenditure allocation, and impact reporting", impact: "Verified green finance", value: "$340M" },
      { code: "ENV-010", name: "Environmental Justice Monitoring", problem: "Environmental burdens disproportionately affect marginalized communities", mechanism: "Omission detection for environmental equity compliance", impact: "Evidence-based environmental justice", value: "$340M" },
    ],
  },
  {
    id: "inf", name: "Infrastructure", icon: Construction, color: "#0078D4", appCount: 10, totalValue: "$6.2B",
    description: "Public infrastructure procurement, construction milestone verification, infrastructure safety compliance, and PPP accountability.",
    applications: [
      { code: "INF-001", name: "Infrastructure Procurement Integrity", problem: "Large infrastructure contracts face systemic corruption", mechanism: "Full procurement chain anchoring from RFP to contract award", impact: "52% reduction in procurement fraud", value: "$1.2B" },
      { code: "INF-002", name: "Construction Milestone Verification", problem: "Construction progress claims are falsified", mechanism: "Cryptographic anchoring of inspection reports and milestone certifications", impact: "Real-time construction accountability", value: "$780M" },
      { code: "INF-003", name: "Infrastructure Safety Compliance", problem: "Safety inspections are delayed or falsified", mechanism: "Records inspection events, findings, and corrective action timelines", impact: "100% safety inspection traceability", value: "$640M" },
      { code: "INF-004", name: "PPP Contract Accountability", problem: "Public-private partnerships lack ongoing oversight", mechanism: "Anchors performance metrics, payment milestones, and compliance events", impact: "Transparent PPP governance", value: "$560M" },
      { code: "INF-005", name: "Land Acquisition Record Integrity", problem: "Land acquisition decisions face corruption and dispute", mechanism: "Immutable recording of valuation, negotiation, and acquisition authority", impact: "Tamper-evident land records", value: "$780M" },
      { code: "INF-006", name: "Transportation Safety Registry", problem: "Transport safety incidents are underreported", mechanism: "Independent anchoring of safety events with omission detection", impact: "280% increase in safety event capture", value: "$420M" },
      { code: "INF-007", name: "Utility Regulation Integrity", problem: "Utility rate decisions lack transparent rationale", mechanism: "Records rate applications, analysis, and decision authority", impact: "Verifiable utility regulation", value: "$340M" },
      { code: "INF-008", name: "Smart City Governance", problem: "IoT and AI decisions in cities lack accountability", mechanism: "Anchors algorithmic decisions, data collection policies, and outcomes", impact: "Accountable smart infrastructure", value: "$420M" },
      { code: "INF-009", name: "Disaster Recovery Accountability", problem: "Post-disaster reconstruction funds face misuse", mechanism: "Records funding allocation, disbursement, and reconstruction milestones", impact: "100% reconstruction fund traceability", value: "$560M" },
      { code: "INF-010", name: "Infrastructure Maintenance Registry", problem: "Deferred maintenance creates hidden liabilities", mechanism: "Omission detection for scheduled maintenance obligations", impact: "65% reduction in deferred maintenance", value: "$500M" },
    ],
  },
  {
    id: "trd", name: "Trade", icon: Ship, color: "#D83B01", appCount: 10, totalValue: "$5.6B",
    description: "Trade agreement compliance, customs integrity, export control verification, and supply chain governance.",
    applications: [
      { code: "TRD-001", name: "Trade Agreement Compliance Tracking", problem: "FTA compliance is self-reported and unverifiable", mechanism: "Anchors tariff decisions, origin certifications, and dispute outcomes", impact: "Real-time trade compliance", value: "$780M" },
      { code: "TRD-002", name: "Customs Declaration Integrity", problem: "Customs fraud costs $4.5B+ globally per year", mechanism: "Cryptographic anchoring of declarations, inspections, and clearances", impact: "45% reduction in customs fraud", value: "$920M" },
      { code: "TRD-003", name: "Export Control Verification", problem: "Dual-use goods controls lack enforcement evidence", mechanism: "Records license applications, end-user verification, and shipment events", impact: "100% export control traceability", value: "$560M" },
      { code: "TRD-004", name: "Supply Chain Governance", problem: "Supply chain labor and environmental violations go undetected", mechanism: "Anchors supplier assessments, compliance events, and remediation actions", impact: "Transparent supply chain governance", value: "$640M" },
      { code: "TRD-005", name: "Anti-Dumping Investigation Registry", problem: "Trade remedy investigations lack transparent evidence trails", mechanism: "Records investigation initiation, evidence, and determination authority", impact: "Verifiable trade remedy governance", value: "$340M" },
      { code: "TRD-006", name: "Sanctions Evasion Detection", problem: "Trade-based sanctions evasion uses complex routing", mechanism: "Federation protocol links cross-border trade verification", impact: "68% faster evasion detection", value: "$560M" },
      { code: "TRD-007", name: "Rules of Origin Verification", problem: "Origin certificates are falsified for preferential treatment", mechanism: "Anchors production records, value-add calculations, and certifications", impact: "Verifiable origin claims", value: "$420M" },
      { code: "TRD-008", name: "Trade Finance Compliance", problem: "Trade finance instruments facilitate fraud", mechanism: "Records letter of credit events, shipping documents, and payment flows", impact: "Real-time trade finance verification", value: "$340M" },
      { code: "TRD-009", name: "Intellectual Property at Borders", problem: "Counterfeit goods detection lacks systematic evidence", mechanism: "Anchors seizure events, rights holder notifications, and disposition", impact: "78% improvement in IP enforcement", value: "$560M" },
      { code: "TRD-010", name: "Trade Facilitation Monitoring", problem: "Trade facilitation reforms lack implementation evidence", mechanism: "Records reform milestones, compliance events, and impact metrics", impact: "Verified trade facilitation progress", value: "$480M" },
    ],
  },
  {
    id: "hr", name: "Human Rights", icon: Users, color: "#E3008C", appCount: 10, totalValue: "$4.1B",
    description: "Human rights monitoring, refugee status determination, anti-torture compliance, and indigenous rights verification.",
    applications: [
      { code: "HR-001", name: "Human Rights Violation Registry", problem: "Human rights violations are denied or hidden", mechanism: "Immutable anchoring of violation reports with temporal and authority proof", impact: "Permanent violation memory", value: "$560M" },
      { code: "HR-002", name: "Refugee Status Determination Integrity", problem: "Asylum decisions lack transparent rationale", mechanism: "Records application, assessment, interview, and determination authority", impact: "100% asylum decision traceability", value: "$420M" },
      { code: "HR-003", name: "Anti-Torture Compliance Monitor", problem: "Detention conditions violate obligations without accountability", mechanism: "Independent anchoring of inspection findings and compliance events", impact: "Real-time detention oversight", value: "$340M" },
      { code: "HR-004", name: "Indigenous Rights Verification", problem: "Indigenous consultation obligations are ignored", mechanism: "Omission detection for consultation timelines and consent requirements", impact: "Verifiable FPIC compliance", value: "$420M" },
      { code: "HR-005", name: "Freedom of Expression Monitor", problem: "Press freedom violations lack systematic documentation", mechanism: "Anchors censorship events, journalist persecution, and state responses", impact: "Global press freedom accountability", value: "$290M" },
      { code: "HR-006", name: "Child Protection Compliance", problem: "Child welfare interventions lack oversight trails", mechanism: "Records assessment, intervention, and outcome events for child cases", impact: "100% child protection accountability", value: "$420M" },
      { code: "HR-007", name: "Disability Rights Compliance", problem: "Accessibility obligations are systematically ignored", mechanism: "Omission detection for accessibility compliance timelines", impact: "Evidence-based disability rights", value: "$210M" },
      { code: "HR-008", name: "Anti-Discrimination Decision Tracking", problem: "Discrimination complaint outcomes lack transparency", mechanism: "Anchors complaint, investigation, and remedy events", impact: "78% faster discrimination case resolution", value: "$340M" },
      { code: "HR-009", name: "Forced Labor Supply Chain Monitor", problem: "Forced labor in supply chains evades detection", mechanism: "Records audit findings, remediation events, and compliance status", impact: "Verified forced labor elimination", value: "$560M" },
      { code: "HR-010", name: "Transitional Justice Archive", problem: "Post-conflict justice processes face evidence destruction", mechanism: "Permanent anchoring of truth commission findings and reconciliation events", impact: "Indestructible transitional justice record", value: "$540M" },
    ],
  },
  {
    id: "dig", name: "Digital Governance", icon: Monitor, color: "#0078D4", appCount: 10, totalValue: "$4.8B",
    description: "AI governance accountability, data protection compliance, digital identity integrity, and cybersecurity incident tracking.",
    applications: [
      { code: "DIG-001", name: "AI Decision Accountability", problem: "Algorithmic decisions lack explainability trails", mechanism: "Anchors model deployment, decision events, and bias assessment records", impact: "100% AI decision traceability", value: "$780M" },
      { code: "DIG-002", name: "Data Protection Compliance Registry", problem: "GDPR/privacy compliance is self-reported", mechanism: "Records DPIAs, breach notifications, and supervisory authority decisions", impact: "Real-time privacy compliance", value: "$640M" },
      { code: "DIG-003", name: "Digital Identity Governance", problem: "Digital identity systems lack accountability oversight", mechanism: "Anchors enrollment events, credential issuance, and revocation authority", impact: "Verifiable identity governance", value: "$560M" },
      { code: "DIG-004", name: "Cybersecurity Incident Registry", problem: "Cyber incidents are underreported and mischaracterized", mechanism: "Immutable anchoring of incident detection, response, and recovery events", impact: "340% increase in incident reporting", value: "$420M" },
      { code: "DIG-005", name: "Open Data Compliance Monitor", problem: "Open data commitments lack implementation evidence", mechanism: "Records publication events, dataset updates, and access metrics", impact: "Verified open data governance", value: "$210M" },
      { code: "DIG-006", name: "Platform Governance Accountability", problem: "Content moderation decisions lack transparency", mechanism: "Anchors moderation decisions, appeal outcomes, and policy changes", impact: "Transparent platform governance", value: "$420M" },
      { code: "DIG-007", name: "Digital Public Service Delivery", problem: "e-Government services lack performance accountability", mechanism: "Records service requests, processing times, and outcome events", impact: "Evidence-based digital services", value: "$340M" },
      { code: "DIG-008", name: "Algorithmic Impact Assessment Registry", problem: "AIA requirements are implemented inconsistently", mechanism: "Anchors assessment submissions, findings, and mitigation commitments", impact: "100% AIA compliance verification", value: "$420M" },
      { code: "DIG-009", name: "Cross-Border Data Flow Governance", problem: "Data transfer decisions lack transparent rationale", mechanism: "Records adequacy decisions, transfer impact assessments, and safeguards", impact: "Verifiable data flow governance", value: "$560M" },
      { code: "DIG-010", name: "Digital Rights Compliance", problem: "Digital rights obligations are systematically ignored", mechanism: "Omission detection for digital rights compliance timelines", impact: "Evidence-based digital rights", value: "$450M" },
    ],
  },
  {
    id: "nrg", name: "Energy", icon: Zap, color: "#FFB900", appCount: 10, totalValue: "$4.8B",
    description: "Energy transition governance, nuclear safety compliance, renewable energy certification, and grid management accountability.",
    applications: [
      { code: "NRG-001", name: "Energy Transition Governance", problem: "Clean energy transition commitments lack implementation evidence", mechanism: "Anchors transition milestones, investment decisions, and phase-out events", impact: "Verifiable energy transition", value: "$780M" },
      { code: "NRG-002", name: "Nuclear Safety Compliance Registry", problem: "Nuclear safety inspections face institutional suppression", mechanism: "Independent anchoring of inspection findings and regulatory decisions", impact: "100% nuclear safety traceability", value: "$640M" },
      { code: "NRG-003", name: "Renewable Energy Certificate Integrity", problem: "REC fraud costs $1.2B annually", mechanism: "Cryptographic anchoring of generation, issuance, and retirement events", impact: "Zero REC double-counting", value: "$560M" },
      { code: "NRG-004", name: "Grid Management Accountability", problem: "Grid operation decisions lack real-time oversight", mechanism: "Records dispatch decisions, outage events, and restoration authority", impact: "Real-time grid governance", value: "$420M" },
      { code: "NRG-005", name: "Oil & Gas Licensing Integrity", problem: "Exploration licenses face corruption and environmental risk", mechanism: "Anchors application review, environmental assessment, and authority decisions", impact: "Transparent extraction governance", value: "$560M" },
      { code: "NRG-006", name: "Energy Subsidy Tracking", problem: "Energy subsidies are politically directed without evidence", mechanism: "Records allocation criteria, disbursement, and impact assessments", impact: "Evidence-based energy policy", value: "$420M" },
      { code: "NRG-007", name: "Pipeline Safety Compliance", problem: "Pipeline inspections are delayed or inadequate", mechanism: "Omission detection for inspection schedules and compliance events", impact: "68% improvement in pipeline safety", value: "$340M" },
      { code: "NRG-008", name: "Energy Market Regulation", problem: "Market manipulation in energy trading goes undetected", mechanism: "Anchors trading events, price-setting decisions, and investigation outcomes", impact: "Verifiable energy market integrity", value: "$420M" },
      { code: "NRG-009", name: "Clean Development Mechanism Integrity", problem: "CDM credits face additionality fraud", mechanism: "Records project validation, verification, and credit issuance events", impact: "Verified clean development", value: "$340M" },
      { code: "NRG-010", name: "Energy Poverty Monitoring", problem: "Energy access programs lack outcome accountability", mechanism: "Anchors program milestones, connection events, and impact metrics", impact: "Evidence-based energy access", value: "$320M" },
    ],
  },
  {
    id: "def", name: "Defense", icon: ShieldCheck, color: "#1a1f36", appCount: 8, totalValue: "$3.6B",
    description: "Defense procurement integrity, military operations accountability, arms control verification, and veteran services governance.",
    applications: [
      { code: "DEF-001", name: "Defense Procurement Integrity", problem: "Military procurement is the most corruption-prone sector", mechanism: "Full procurement chain anchoring with classified existence proofs", impact: "52% reduction in defense procurement fraud", value: "$780M" },
      { code: "DEF-002", name: "Military Operations Accountability", problem: "Rules of engagement compliance lacks verifiable evidence", mechanism: "Zero-knowledge existence proofs for operational compliance without content exposure", impact: "Verifiable operational accountability", value: "$560M" },
      { code: "DEF-003", name: "Arms Control Treaty Compliance", problem: "Treaty compliance verification relies on trust", mechanism: "Federation protocol for multi-party verification without classified disclosure", impact: "Verifiable arms control compliance", value: "$420M" },
      { code: "DEF-004", name: "Veteran Services Governance", problem: "Veteran benefit decisions lack transparent rationale", mechanism: "Records application, assessment, and benefit determination events", impact: "100% veteran decision traceability", value: "$340M" },
      { code: "DEF-005", name: "Defense R&D Accountability", problem: "Defense research spending lacks outcome tracking", mechanism: "Anchors project milestones, expenditure events, and deliverable verification", impact: "Evidence-based defense R&D", value: "$420M" },
      { code: "DEF-006", name: "Military Personnel Governance", problem: "Promotion and disciplinary decisions face bias", mechanism: "Records merit assessments, board decisions, and appeal outcomes", impact: "Transparent military personnel governance", value: "$290M" },
      { code: "DEF-007", name: "Intelligence Oversight Compliance", problem: "Intelligence activities resist democratic oversight", mechanism: "Existence proofs for oversight reviews without content exposure", impact: "Verified intelligence accountability", value: "$420M" },
      { code: "DEF-008", name: "Peacekeeping Operations Integrity", problem: "UN peacekeeping conduct violations are underreported", mechanism: "Independent anchoring of conduct reports, investigations, and outcomes", impact: "78% improvement in peacekeeping accountability", value: "$370M" },
    ],
  },
];

export const totalApplications = sectorModules.reduce((s, m) => s + m.appCount, 0);
export const totalValue = "$61.7B";
