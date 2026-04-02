import { Shield, BookOpen, Globe, Award, Users, FileText, Target, CheckCircle, Building, Landmark, GraduationCap, Scale, Handshake, Lock, BarChart3, Briefcase } from "lucide-react";

export interface Milestone {
  label: string;
  month: string;
  status: "done" | "in-progress" | "planned";
}

export interface PhaseAction {
  title: string;
  description: string;
}

export interface PhaseArtifact {
  name: string;
}

export interface PhaseRisk {
  risk: string;
  mitigation: string;
}

export interface SuccessIndicator {
  metric: string;
  target: string;
}

export interface StakeholderType {
  type: string;
  role: string;
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  months: string;
  timeline: string;
  status: string;
  icon: any;
  objective: string;
  institutionalPsychology: string;
  actions: PhaseAction[];
  artifacts: PhaseArtifact[];
  stakeholders: StakeholderType[];
  risks: PhaseRisk[];
  successIndicators: SuccessIndicator[];
  milestones: Milestone[];
  credibilityScore: { start: number; end: number };
  adoptionProbability: { start: number; end: number };
}

export const phases: Phase[] = [
  {
    id: "I",
    number: 1,
    title: "Legitimacy Foundation",
    subtitle: "From Founder-Led Initiative to Institutional Initiative",
    months: "Months 1–3",
    timeline: "Q1 2026",
    status: "Active",
    icon: Shield,
    objective: "Transition GRGF™ from a conceptual governance framework into a structurally credible institutional initiative with independent governance, academic validation, and neutral positioning.",
    institutionalPsychology: "Governments and multilateral bodies assess credibility before content. The first 90 days must signal institutional maturity through governance restructuring, advisory diversity, and messaging discipline — not through technical demonstrations.",
    actions: [
      { title: "Governance Restructuring", description: "Establish a formal Governance Board with independent, non-founder majority. Appoint an interim Executive Director with public-sector or multilateral background. Separate inventor role from institutional leadership." },
      { title: "Advisory Council Formation", description: "Recruit 5–7 advisors spanning: former government CDOs, international standards veterans (ISO/W3C model), academic governance researchers, and multilateral digital policy experts. Ensure geographic and disciplinary diversity." },
      { title: "Neutral Positioning Strategy", description: "Publish a formal Neutrality Declaration codifying non-enforcement, non-evaluative, and non-ranking principles. Align all public communications with institutional vocabulary standards." },
      { title: "Academic Alignment", description: "Establish research partnerships with 2–3 universities specializing in digital governance, public administration, or institutional design. Commission an independent academic review of the framework architecture." },
      { title: "Initial External Validation", description: "Engage an independent governance assessment firm to produce a preliminary framework evaluation. Publish results transparently regardless of outcome." },
      { title: "Messaging Transformation", description: "Eliminate all startup, venture, or innovation-accelerator language. Adopt measured institutional tone across all channels. Implement the 'No Superlatives' content standard across all outputs." },
    ],
    artifacts: [
      { name: "Governance Charter v2.0" },
      { name: "Neutrality Declaration" },
      { name: "Advisory Council Terms of Reference" },
      { name: "Academic Partnership MOU" },
      { name: "Independent Preliminary Assessment" },
      { name: "Institutional Communications Guide" },
    ],
    stakeholders: [
      { type: "Governance Advisors", role: "Provide structural credibility and independent oversight" },
      { type: "Academic Partners", role: "Validate architectural principles through peer review" },
      { type: "Assessment Firms", role: "Deliver independent preliminary evaluation" },
      { type: "Communications Specialists", role: "Transform messaging to institutional standard" },
    ],
    risks: [
      { risk: "Advisory recruitment delays", mitigation: "Maintain pipeline of 15+ candidates; offer flexible engagement models (advisory vs. committee)" },
      { risk: "Perceived founder dependency", mitigation: "Publish separation-of-roles policy; ensure Board operates with documented independence" },
      { risk: "Academic skepticism toward non-peer-reviewed framework", mitigation: "Commission formal academic review; submit architecture paper to governance journals" },
    ],
    successIndicators: [
      { metric: "Independent Board members", target: "≥5 non-founder members appointed" },
      { metric: "Advisory Council diversity", target: "≥3 geographic regions represented" },
      { metric: "Academic partnerships", target: "≥2 university MOUs signed" },
      { metric: "External assessment", target: "1 independent preliminary evaluation published" },
      { metric: "Messaging compliance", target: "100% of public outputs meet institutional tone standard" },
    ],
    milestones: [
      { label: "Publish Governance Charter v2.0 with independent Board structure", month: "M1", status: "in-progress" },
      { label: "Appoint Advisory Council (5–7 members, multi-regional)", month: "M1", status: "in-progress" },
      { label: "Publish formal Neutrality Declaration", month: "M1", status: "done" },
      { label: "Sign first academic partnership MOU", month: "M2", status: "planned" },
      { label: "Commission independent framework assessment", month: "M2", status: "planned" },
      { label: "Complete messaging transformation audit", month: "M2", status: "planned" },
      { label: "Publish independent preliminary assessment results", month: "M3", status: "planned" },
      { label: "Submit architecture paper to governance journal", month: "M3", status: "planned" },
    ],
    credibilityScore: { start: 15, end: 35 },
    adoptionProbability: { start: 5, end: 12 },
  },
  {
    id: "II",
    number: 2,
    title: "Validation & Proof",
    subtitle: "Demonstrating Operational Credibility Without National Adoption",
    months: "Months 4–6",
    timeline: "Q2 2026",
    status: "Planned",
    icon: BarChart3,
    objective: "Prove GRGF™ works through controlled simulations, independent technical audits, sandbox deployments, and published case studies — without requiring any government to commit to adoption.",
    institutionalPsychology: "Multilateral organizations and governments require evidence of operational viability before engagement. This phase generates proof artifacts that reduce perceived risk. The key insight: proof must come from independent sources, not from the framework's creators.",
    actions: [
      { title: "Pilot Simulation Models", description: "Design and execute 3 governance simulation scenarios: (1) cross-ministry record integrity verification, (2) audit reconstruction under time pressure, (3) policy enforcement determinism testing. Publish all simulation methodologies and results." },
      { title: "Technical Audit Pathway", description: "Engage an independent security and architecture firm to conduct a full technical audit of the six-layer model. Audit must cover cryptographic integrity, federation protocol security, and operational resilience." },
      { title: "Sandbox Deployment", description: "Deploy a controlled sandbox environment demonstrating core GRGF™ capabilities. Enable external evaluators to interact with the system without production data. Document all sandbox interactions and outcomes." },
      { title: "Independent Assessment", description: "Commission a governance-focused assessment from a recognized public-sector advisory firm. Assessment must evaluate institutional design, not just technical architecture." },
      { title: "Case Study Creation", description: "Produce 2–3 detailed case studies modeling GRGF™ deployment in realistic national contexts. Include cost projections, timeline estimates, and institutional impact analysis." },
      { title: "Evidence Generation Standards", description: "Publish a formal Evidence Generation Protocol defining how GRGF™ validation artifacts are produced, verified, and published. Ensure all evidence meets ISO-equivalent documentation standards." },
    ],
    artifacts: [
      { name: "Simulation Report (3 scenarios)" },
      { name: "Independent Technical Audit Report" },
      { name: "Sandbox Deployment Package" },
      { name: "Institutional Assessment Report" },
      { name: "Case Studies (2–3 national models)" },
      { name: "Evidence Generation Protocol v1.0" },
    ],
    stakeholders: [
      { type: "Security Audit Firms", role: "Independent technical and cryptographic assessment" },
      { type: "Public-Sector Advisory Firms", role: "Institutional governance evaluation" },
      { type: "Academic Reviewers", role: "Peer review of simulation methodologies" },
      { type: "GovTech Evaluators", role: "Sandbox interaction and feedback" },
    ],
    risks: [
      { risk: "Audit reveals architectural weaknesses", mitigation: "Treat findings as improvement inputs; publish response plan transparently" },
      { risk: "Simulation results inconclusive", mitigation: "Design simulations with clear pass/fail criteria; iterate methodology before publication" },
      { risk: "Sandbox security concerns", mitigation: "Isolate sandbox completely from any production concepts; engage penetration testing" },
    ],
    successIndicators: [
      { metric: "Simulation completion", target: "3/3 scenarios executed with published results" },
      { metric: "Technical audit", target: "1 independent audit completed and published" },
      { metric: "Sandbox deployment", target: "Operational sandbox accessible to external evaluators" },
      { metric: "Case studies", target: "≥2 national-context case studies published" },
      { metric: "Evidence protocol", target: "v1.0 published and peer-reviewed" },
    ],
    milestones: [
      { label: "Complete governance simulation scenario design", month: "M4", status: "planned" },
      { label: "Deploy sandbox environment for external evaluation", month: "M4", status: "planned" },
      { label: "Engage independent technical audit firm", month: "M4", status: "planned" },
      { label: "Execute all 3 simulation scenarios", month: "M5", status: "planned" },
      { label: "Publish Evidence Generation Protocol v1.0", month: "M5", status: "planned" },
      { label: "Receive and publish independent audit results", month: "M6", status: "planned" },
      { label: "Publish 2–3 national-context case studies", month: "M6", status: "planned" },
      { label: "Commission institutional governance assessment", month: "M6", status: "planned" },
    ],
    credibilityScore: { start: 35, end: 55 },
    adoptionProbability: { start: 12, end: 25 },
  },
  {
    id: "III",
    number: 3,
    title: "Institutional Engagement",
    subtitle: "Structured Engagement with International Organizations",
    months: "Months 7–9",
    timeline: "Q3 2026",
    status: "Planned",
    icon: Landmark,
    objective: "Initiate structured, non-commercial engagement with multilateral development banks, academic institutions, governance think tanks, and standards communities to build institutional recognition.",
    institutionalPsychology: "International organizations operate on consensus and precedent. Engagement must follow diplomatic sequencing: informal briefings precede formal submissions, technical working groups precede policy committees. Positioning must be non-commercial — GRGF™ is infrastructure, not a product.",
    actions: [
      { title: "Multilateral Development Bank Engagement", description: "Prepare tailored briefing packages for World Bank GovTech, OECD Digital Government, and regional development banks. Follow diplomatic sequencing: informal technical briefings → working group participation → formal review submission." },
      { title: "Academic Institution Partnerships", description: "Expand academic network to 5+ institutions. Co-author research papers on governance infrastructure. Present at 2–3 academic conferences on digital governance." },
      { title: "Governance Think Tank Engagement", description: "Brief leading governance think tanks (Brookings, ODI, CGD, WEF Digital). Position GRGF™ as a case study for institutional infrastructure evolution, not as a commercial offering." },
      { title: "Standards Community Participation", description: "Attend and contribute to relevant standards body working groups (ISO TC 307, W3C, ITU-T). Begin building relationships with standards committee members." },
      { title: "Briefing Format Design", description: "Develop 3 briefing formats: (1) 15-minute executive summary, (2) 60-minute technical deep-dive, (3) half-day workshop model. Each format tailored to audience expertise level." },
      { title: "Diplomatic Sequencing", description: "Map institutional decision-making pathways for each target organization. Identify champions, gatekeepers, and decision timelines. Design engagement sequences that respect institutional culture." },
    ],
    artifacts: [
      { name: "Multilateral Briefing Package" },
      { name: "Academic Co-Authored Papers (2–3)" },
      { name: "Think Tank Briefing Deck" },
      { name: "Standards Working Group Contributions" },
      { name: "Engagement Sequence Maps" },
      { name: "Conference Presentation Materials" },
    ],
    stakeholders: [
      { type: "World Bank / OECD", role: "Primary multilateral engagement targets" },
      { type: "Academic Institutions", role: "Research validation and co-authorship" },
      { type: "Governance Think Tanks", role: "Policy discourse and positioning" },
      { type: "Standards Bodies (ISO/W3C/ITU)", role: "Standards-track relationship building" },
    ],
    risks: [
      { risk: "Multilateral engagement timelines exceed expectations", mitigation: "Begin informal contacts early; maintain parallel engagement tracks" },
      { risk: "Perceived as commercial despite non-commercial framing", mitigation: "Publish open licensing terms; emphasize public infrastructure positioning" },
      { risk: "Standards body participation requires organizational membership", mitigation: "Pursue liaison or observer status; partner with member organizations" },
    ],
    successIndicators: [
      { metric: "Multilateral briefings delivered", target: "≥3 formal briefings to MDB/IO staff" },
      { metric: "Academic partnerships", target: "≥5 institutional research relationships" },
      { metric: "Think tank engagements", target: "≥2 formal briefings or published mentions" },
      { metric: "Standards participation", target: "≥1 working group contribution submitted" },
      { metric: "Conference presentations", target: "≥2 academic/policy conference presentations" },
    ],
    milestones: [
      { label: "Complete multilateral briefing package", month: "M7", status: "planned" },
      { label: "Deliver first informal briefing to World Bank GovTech", month: "M7", status: "planned" },
      { label: "Present at first academic governance conference", month: "M8", status: "planned" },
      { label: "Brief 2+ governance think tanks", month: "M8", status: "planned" },
      { label: "Submit first standards working group contribution", month: "M8", status: "planned" },
      { label: "Co-author and submit first academic paper", month: "M9", status: "planned" },
      { label: "Complete engagement sequence for OECD formal review", month: "M9", status: "planned" },
      { label: "Achieve observer/liaison status in ≥1 standards body", month: "M9", status: "planned" },
    ],
    credibilityScore: { start: 55, end: 75 },
    adoptionProbability: { start: 25, end: 40 },
  },
  {
    id: "IV",
    number: 4,
    title: "Pre-Standard Positioning",
    subtitle: "From 'Project' to 'Emerging Framework'",
    months: "Months 10–12",
    timeline: "Q4 2026",
    status: "Planned",
    icon: Award,
    objective: "Transform GRGF™ perception from an innovative project into an emerging global governance standard with certification pathways, early adopter programs, and standards-track preparation.",
    institutionalPsychology: "Standards emerge when they become perceived as inevitable infrastructure — when the cost of non-adoption exceeds the cost of adoption. This phase builds the narrative and structural conditions for that perception shift through certification pilots, charter publication, and ecosystem development.",
    actions: [
      { title: "Certification Pilot Structure", description: "Launch Level I Certification pilot with 2–3 institutional partners. Define certification criteria, assessment methodology, and renewal requirements. Publish certification framework for public review." },
      { title: "Governance Charter Publication", description: "Publish the definitive Governance Charter v3.0 incorporating all Phase I–III learnings. Include anti-capture clauses, neutrality guarantees, and federation principles. Submit for independent legal review." },
      { title: "Early Adopter Pathway", description: "Design a structured early adopter programme with clear benefits, obligations, and transition support. Create 3 adoption tiers: Observer, Associate, Partner. Publish programme documentation." },
      { title: "Standards-Track Preparation", description: "Prepare formal standards proposal for submission to relevant standards body (ISO, ITU-T, or regional equivalent). Assemble supporting documentation including technical specification, governance model, and conformance testing framework." },
      { title: "Ecosystem Narrative", description: "Publish a comprehensive 'State of Governance Infrastructure' report positioning GRGF™ within the global DPI landscape. Include comparative analysis, adoption projections, and institutional endorsements." },
      { title: "Annual Governance Report", description: "Publish the first Annual Governance Transparency Report documenting all roadmap progress, financial transparency, governance decisions, and stakeholder engagement outcomes." },
    ],
    artifacts: [
      { name: "Level I Certification Framework" },
      { name: "Governance Charter v3.0" },
      { name: "Early Adopter Programme Guide" },
      { name: "Standards Proposal Document" },
      { name: "State of Governance Infrastructure Report" },
      { name: "Annual Governance Transparency Report" },
    ],
    stakeholders: [
      { type: "Certification Pilot Partners", role: "Validate certification framework through participation" },
      { type: "Standards Bodies", role: "Receive and evaluate standards proposal" },
      { type: "Early Adopter Institutions", role: "First structured governance framework participants" },
      { type: "Legal Reviewers", role: "Independent charter and licensing review" },
    ],
    risks: [
      { risk: "Certification pilot partners unavailable", mitigation: "Maintain pipeline of 10+ candidates; offer flexible pilot terms" },
      { risk: "Standards proposal premature without sufficient evidence", mitigation: "Frame as 'study period' proposal; include roadmap for full specification" },
      { risk: "Ecosystem narrative perceived as self-serving", mitigation: "Commission independent section contributions; include critical analysis" },
    ],
    successIndicators: [
      { metric: "Certification pilots", target: "≥2 institutional pilots initiated" },
      { metric: "Charter publication", target: "v3.0 published with independent legal review" },
      { metric: "Early adopters", target: "≥3 institutions in Observer tier or above" },
      { metric: "Standards proposal", target: "Formal proposal submitted to ≥1 standards body" },
      { metric: "Annual report", target: "First Governance Transparency Report published" },
    ],
    milestones: [
      { label: "Launch Level I Certification pilot with 2–3 partners", month: "M10", status: "planned" },
      { label: "Publish Governance Charter v3.0", month: "M10", status: "planned" },
      { label: "Open Early Adopter Programme applications", month: "M10", status: "planned" },
      { label: "Complete standards proposal draft", month: "M11", status: "planned" },
      { label: "Onboard first Observer-tier institutions", month: "M11", status: "planned" },
      { label: "Submit formal standards proposal", month: "M11", status: "planned" },
      { label: "Publish State of Governance Infrastructure report", month: "M12", status: "planned" },
      { label: "Publish first Annual Governance Transparency Report", month: "M12", status: "planned" },
    ],
    credibilityScore: { start: 75, end: 90 },
    adoptionProbability: { start: 40, end: 60 },
  },
];

export const strategicPrinciples = [
  { title: "Internet Governance Model", description: "Standards emerge through rough consensus and running code — not top-down mandates." },
  { title: "ISO/W3C Formation Pattern", description: "Successful standards begin as technical specifications, gain community adoption, then formalize." },
  { title: "Digital Identity Adoption", description: "Trust infrastructure requires years of institutional relationship-building before deployment." },
  { title: "Public-Sector Trust Frameworks", description: "Government adoption follows evidence → pilot → policy → legislation sequences." },
  { title: "Multilateral Incubation", description: "Frameworks gain legitimacy through association with recognized institutional processes." },
];

export const criticalDependencies = [
  "Independent governance board operational by Month 2",
  "At least one academic partnership producing published research by Month 6",
  "Technical audit completed with publishable results by Month 6",
  "Informal multilateral contact established before formal submissions",
  "Certification pilot partners identified by Month 8",
  "Standards body liaison status achieved before formal proposal submission",
];
