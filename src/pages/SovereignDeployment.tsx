import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import {
  Building, Users, Shield, Globe, Activity, Scale, Briefcase,
  Eye, Award, FileText, TrendingUp, Clock, AlertTriangle,
  CheckCircle, ArrowRight, Target, BookOpen, Lock, GraduationCap,
  Cpu, Network, BarChart3, Layers,
} from "lucide-react";

/* ── Types ── */
interface Mod {
  id: number;
  title: string;
  icon: React.ElementType;
  objective: string;
  steps: string[];
  artifacts: string[];
  stakeholders: string[];
  perceptionShift: string;
  credibilityImpact: string;
  ipImpact: string;
  standardsAlignment: string;
  risks: { risk: string; mitigation: string }[];
  relatedPages: { label: string; path: string }[];
}

const MODULES: Mod[] = [
  {
    id: 1, title: "Legitimacy & Institutional Architecture", icon: Building,
    objective: "Establish GRGF™ as an independently governed institutional entity with transparent authority separation, advisory councils, and anti-capture safeguards — the foundation for all downstream credibility.",
    steps: [
      "Constitute independent foundation (Swiss Verein or Canadian not-for-profit) with published articles",
      "Draft governance charter with authority separation: Executive Director, Standards Committee, Advisory Council, Compliance Oversight",
      "Appoint Advisory Council (9–15 members, 3+ regions, term limits, anti-capture clauses AC-01–AC-05)",
      "Establish Technical Standards Committee with rotating independent chair and published meeting records",
      "Deploy transparency dashboard: public minutes, financial disclosure, governance decision logs",
      "Publish neutrality safeguards: non-enforcement stance, jurisdiction neutrality, sovereignty preservation",
    ],
    artifacts: ["Foundation Charter & Articles", "Governance Structure Diagram", "Advisory Council Terms of Reference", "Anti-Capture Policy (AC-01–AC-05)", "Transparency Dashboard", "Quarterly Governance Report Template"],
    stakeholders: ["Foundation legal counsel", "Governance charter committee", "Advisory Council nominees (3+ regions)", "Independent compliance oversight appointees"],
    perceptionShift: "From 'individual initiative' to 'independently governed institutional entity' — formally constituted entities are categorized fundamentally differently by multilateral evaluators.",
    credibilityImpact: "Foundation structure is the prerequisite container for all subsequent signals. Without institutional identity, coalition and validation efforts lack a credible host entity.",
    ipImpact: "Foundation protects IP assignment, licensing authority, and certification revenue streams within a governed entity with documented succession.",
    standardsAlignment: "ISO 37000 (Governance of Organizations), OECD Principles of Corporate Governance, UN System of Organizations governance standards.",
    risks: [
      { risk: "Foundation perceived as shell entity", mitigation: "Active Advisory Council with published outputs, public meeting records, annual governance report" },
      { risk: "Founder influence persists despite separation", mitigation: "Charter-mandated term limits, independent chair, published conflict-of-interest declarations" },
    ],
    relatedPages: [
      { label: "Institutional Blueprint", path: "/institutional-blueprint" },
      { label: "Governance Framework", path: "/governance-framework" },
      { label: "Ethics & Anti-Capture", path: "/ethics" },
      { label: "Transparency", path: "/transparency" },
    ],
  },
  {
    id: 2, title: "Global Coalition Formation", icon: Users,
    objective: "Build a diverse, multi-regional coalition of academic, policy, and civil society participants — transforming GRGF™ from single-origin project into consensus-backed initiative.",
    steps: [
      "Recruit academic partners from governance faculties across Americas, Europe, and Asia-Pacific",
      "Engage 2–3 governance think tanks (Chatham House, CIGI, Brookings equivalent) as review partners",
      "Formalize Participation Charter with role definitions, neutrality commitments, and representation quotas",
      "Publish coalition roster with institutional affiliations and regional balance matrix",
      "Launch quarterly Advisory Council briefing cycle with published summaries",
      "Implement stakeholder onboarding sequence with engagement scripts per category",
    ],
    artifacts: ["Participation Charter", "Coalition Membership Roster", "Regional Balance Matrix", "Quarterly Briefing Summaries", "Stakeholder Onboarding Guide", "Engagement Scripts"],
    stakeholders: ["Universities (governance, public administration)", "Policy research institutes", "Civil society governance organizations", "Regional DPI experts (Africa, Asia-Pacific, Americas, Europe)"],
    perceptionShift: "From 'single-founder project' to 'multi-institutional coalition' — evaluators assess coalition breadth as a primary proxy for institutional legitimacy.",
    credibilityImpact: "Coalition participation is the minimum threshold for multilateral engagement. Diverse representation signals consensus-readiness.",
    ipImpact: "Coalition creates network effects around the certification framework, increasing platform switching costs and IP defensibility.",
    standardsAlignment: "OECD multi-stakeholder governance principles, UN multi-stakeholder partnership frameworks, ITU-T Study Group participation models.",
    risks: [
      { risk: "Coalition perceived as nominal", mitigation: "Active participation metrics; published contribution records per member" },
      { risk: "Regional imbalance undermines credibility", mitigation: "Charter-mandated minimum regional representation quotas" },
    ],
    relatedPages: [
      { label: "Partnerships", path: "/partnerships" },
      { label: "Membership", path: "/membership" },
      { label: "International Cooperation", path: "/international-cooperation" },
    ],
  },
  {
    id: 3, title: "Independent Validation System", icon: Shield,
    objective: "Establish external verification through four-phase independent assessment — Architecture Review, Penetration Test, Policy Logic Audit, and Governance Ethics Review.",
    steps: [
      "Commission architecture review by ISO 27001-certified cybersecurity firm",
      "Execute penetration testing: external attack surface, insider threat, key management, tamper resistance",
      "Engage academic policy laboratory for deterministic policy logic verification",
      "Conduct governance ethics review: anti-capture enforcement, political neutrality, human oversight",
      "Publish full validation findings in open-access format with executive summaries",
      "Establish annual re-validation cycle with rotating independent evaluators",
    ],
    artifacts: ["Validation Terms of Reference", "Architecture Conformance Report", "Security Assessment Report", "Policy Logic Conformance Report", "Governance Ethics Assessment", "Annual Re-Validation Schedule"],
    stakeholders: ["Accredited cybersecurity assessment firms", "Academic governance labs", "Independent policy auditors", "International standards conformance bodies"],
    perceptionShift: "From 'unverified proposal' to 'independently assessed infrastructure' — removes the primary institutional objection of no external scrutiny.",
    credibilityImpact: "Independent validation is the single most impactful credibility accelerator. Audited systems are treated fundamentally differently from unaudited proposals.",
    ipImpact: "Validated architecture documentation strengthens patent defensibility and licensing authority for certified implementations.",
    standardsAlignment: "ISO/IEC 27001, ISO 19011 (Audit guidelines), NIST Cybersecurity Framework, OWASP ASVS, SOC 2 Type II equivalent.",
    risks: [
      { risk: "Audit reveals architectural deficiencies", mitigation: "Pre-audit internal review; treat findings as improvement roadmap, not failure" },
      { risk: "Evaluator independence questioned", mitigation: "Published COI declarations; annual evaluator rotation; no repeat engagements" },
    ],
    relatedPages: [
      { label: "Validation Pathway", path: "/validation" },
      { label: "Credibility Signals", path: "/credibility-signals" },
      { label: "Security & Trust", path: "/security-trust" },
    ],
  },
  {
    id: 4, title: "Global DPI Demonstration Environment", icon: Globe,
    objective: "Transform the platform into a live simulation of a national DPI ecosystem — digital identity, registries, ministries, public services, and audit authorities operating within the GRGF™ governance layer.",
    steps: [
      "Deploy sandbox with simulated sovereign state (Kaledonia) including ministry profiles",
      "Simulate full governance event lifecycle: Draft → Review → Approved → Closed with hash-sealing",
      "Demonstrate cross-ministry record flow with role-based access and dual-authority review",
      "Build interactive verification portal for hash-sealed record lookup and integrity confirmation",
      "Create audit authority dashboard with full reconstruction capabilities",
      "Implement federation demonstration between simulated jurisdictions (Kaledonia ↔ Novaland)",
    ],
    artifacts: ["Sandbox Architecture Document", "Kaledonia Country Profile", "Ministry Workflow Demonstrations", "Verification Portal", "Audit Reconstruction Dashboard", "Federation Protocol Demo"],
    stakeholders: ["Technical Review Committee", "Sandbox engineering team", "Independent evaluation observers", "Government pilot reviewers"],
    perceptionShift: "From 'documented proposal' to 'operational system with live demonstration' — eliminates the 'vaporware' objection entirely.",
    credibilityImpact: "Operational demonstration is the prerequisite for pilot engagement. Governments require live evidence before allocating resources.",
    ipImpact: "Functional demonstration proves reduction-to-practice, strengthening patent claims (Canadian Patent Application No. 3,300,102).",
    standardsAlignment: "OECD DPI Framework, World Bank GovTech Maturity Index (GTMI), UN Digital Public Goods Standard, G20 DPI Principles.",
    risks: [
      { risk: "Simulation confused with production system", mitigation: "Persistent simulation banners; audit-safe disclaimers on all outputs" },
      { risk: "Demo dismissed as non-authoritative", mitigation: "Label as 'demonstration environment'; never claim operational authority" },
    ],
    relatedPages: [
      { label: "Simulation Hub", path: "/simulation" },
      { label: "Workflow Demo", path: "/workflow" },
      { label: "Verification", path: "/verification" },
      { label: "DPI Stack", path: "/dpi-stack" },
    ],
  },
  {
    id: 5, title: "Operational Proof & Pilot Scenario", icon: Activity,
    objective: "Generate measurable governance outputs — immutable audit chains, certification lifecycle simulation, and verification dashboards with quantifiable KPIs.",
    steps: [
      "Execute full record lifecycle with measurable KPIs (100% policy determinism, <30min audit reconstruction)",
      "Generate demonstration datasets: hash-sealed records, audit trails, SHA-256 manifests",
      "Produce certification simulation: Observer → Associate → Certified Partner lifecycle",
      "Build real-time governance metrics dashboard with integrity indicators",
      "Document 3–5 verification case studies with measurable governance outcomes",
      "Publish KPI benchmarks: Policy Determinism Rate, Integrity Verification Success, Denial Clarity Index",
    ],
    artifacts: ["Demonstration Datasets", "Verification Case Studies (3–5)", "KPI Benchmark Report", "Certification Lifecycle Simulation", "Governance Metrics Dashboard", "Hash Manifest"],
    stakeholders: ["Technical Review Committee", "Pilot evaluation reviewers", "Independent evaluation observers"],
    perceptionShift: "From 'theoretical framework' to 'operational system with documented performance metrics.'",
    credibilityImpact: "Proof-of-function is required before any institution allocates resources to pilot engagement.",
    ipImpact: "Documented KPIs establish quantifiable value metrics directly supporting IP valuation and licensing negotiations.",
    standardsAlignment: "ISO 15489 (Records Management), ISO 23081 (Metadata), ISAD(G) archival standards, COBIT governance metrics.",
    risks: [
      { risk: "KPI results below expectations", mitigation: "Internal calibration before formal evaluation; iterative improvement cycle" },
    ],
    relatedPages: [
      { label: "Records", path: "/records" },
      { label: "Data Entry", path: "/data-entry" },
      { label: "API Mock", path: "/api-mock" },
      { label: "Pilot Evaluation", path: "/pilot" },
    ],
  },
  {
    id: 6, title: "International Standards Alignment", icon: Scale,
    objective: "Map GRGF™ against governance, records, cybersecurity, privacy, and interoperability standards with audit-ready crosswalk documentation.",
    steps: [
      "Map to ISO/IEC 27001, ISO 15489, ISO 37000, ISO/IEC 27701",
      "Align with OECD Digital Government Policy Framework and DPI Safeguards",
      "Document GDPR and PIPEDA privacy-by-design compliance",
      "Create ITU-T mapping (X.509, X.1252, X.1500)",
      "Produce World Bank GTMI capability matrix and UN DPG alignment",
      "Publish unified standards crosswalk with implementation status per standard",
    ],
    artifacts: ["Unified Standards Crosswalk", "ISO Alignment Matrix", "Privacy Compliance Assessment", "ITU-T Mapping Table", "GTMI Capability Map", "Compliance Dashboard"],
    stakeholders: ["Standards conformance specialists", "Privacy officers", "International standards bodies", "Multilateral evaluation teams"],
    perceptionShift: "From 'non-conforming framework' to 'standards-aligned infrastructure' — compliance matrices serve as decision-support shortcuts for evaluators.",
    credibilityImpact: "Without standards mapping, frameworks are categorized as non-conforming. Alignment is a necessary condition for institutional engagement.",
    ipImpact: "Standards-aligned IP commands higher licensing premiums. Compliance documentation is itself a defensible asset.",
    standardsAlignment: "ISO/IEC 27001, ISO 15489, ISO 37000, OECD DPI Framework, ITU-T X-series, GDPR, PIPEDA, World Bank GTMI, UN DPG.",
    risks: [
      { risk: "Overclaiming alignment", mitigation: "'Designed to support alignment with' language; never claim certification without formal audit" },
    ],
    relatedPages: [
      { label: "Standards Compliance", path: "/compliance" },
      { label: "International Compliance", path: "/international-compliance" },
      { label: "ITU Standards", path: "/itu-global-standards" },
      { label: "OECD Alignment", path: "/oecd-alignment" },
      { label: "World Bank", path: "/world-bank-alignment" },
    ],
  },
  {
    id: 7, title: "Stakeholder Experience & Engagement", icon: Briefcase,
    objective: "Create tailored demonstration journeys for six institutional personas — Ministers, CIOs, Multilateral Institutions, Regulators, Auditors, and Researchers.",
    steps: [
      "Design Minister pathway: sovereignty safety, political value, fiscal impact, deployment timeline",
      "Design CIO pathway: architecture, integration, security, scalability, operational requirements",
      "Design Multilateral pathway: standards alignment, DPG compliance, GTMI scoring, federation model",
      "Design Regulator pathway: privacy controls, audit mechanisms, compliance mapping, risk assessment",
      "Design Auditor pathway: verification, hash integrity, reconstruction time, chain-of-custody",
      "Design Researcher pathway: publications, methodology, data access, collaboration opportunities",
    ],
    artifacts: ["6 Stakeholder Journey Maps", "Role-Specific Landing Pages", "Tailored Briefing Decks", "Outcome Visualizations per Role", "Adoption Value Propositions"],
    stakeholders: ["Government decision-makers", "Technology executives", "Multilateral evaluators", "Regulatory bodies", "Academic researchers", "Audit authorities"],
    perceptionShift: "From 'generic framework site' to 'institution that understands our evaluation process' — role-tailored content signals institutional maturity.",
    credibilityImpact: "Stakeholder-specific pathways demonstrate understanding of institutional decision processes — itself a maturity signal.",
    ipImpact: "Multi-stakeholder adoption pathways demonstrate broad market applicability, supporting higher IP valuation ranges.",
    standardsAlignment: "OECD stakeholder engagement principles, World Bank citizen engagement framework, ISO 26000 (social responsibility).",
    risks: [
      { risk: "Pathways become siloed", mitigation: "Cross-linking between all pathways; unified framework narrative throughout" },
    ],
    relatedPages: [
      { label: "Stakeholder Solutions", path: "/stakeholders" },
      { label: "Executive Brief", path: "/executive-brief" },
      { label: "Executive Dossier", path: "/dossier" },
      { label: "Canada Deployment", path: "/canada" },
    ],
  },
  {
    id: 8, title: "Institutional Credibility Signals", icon: Eye,
    objective: "Embed five critical credibility signals across the platform — validation, coalition, operational proof, academic legitimacy, and neutral institutional identity.",
    steps: [
      "Deploy institutional readiness dashboard with live compliance status indicators",
      "Publish Advisory Council participation records with meeting summaries",
      "Create validation progress tracker (four-phase lifecycle with status indicators)",
      "Embed research publication indicators with citation counts and DOI links",
      "Display audit-readiness markers on all institutional-facing pages",
      "Implement credibility score progression visualization (10 → 95/100)",
    ],
    artifacts: ["Readiness Dashboard", "Validation Tracker", "Advisory Participation Display", "Research Indicators", "Credibility Score Visualization", "Audit-Readiness Markers"],
    stakeholders: ["Institutional communications team", "Advisory Council", "External evaluators", "Due diligence reviewers"],
    perceptionShift: "From 'unverified initiative' to 'platform with multiple independent credibility indicators' — cumulative signals create compounding confidence.",
    credibilityImpact: "Signaling amplifies all other modules. Without visibility, validation and coalition efforts remain undiscoverable by evaluators.",
    ipImpact: "Institutional signaling demonstrates market adoption readiness, directly supporting IP valuation multiples.",
    standardsAlignment: "GRI Transparency Standards, OECD Open Government principles, World Bank accountability frameworks.",
    risks: [
      { risk: "Signals perceived as performative", mitigation: "Every signal linked to verifiable evidence (published reports, records, publications)" },
    ],
    relatedPages: [
      { label: "Credibility Signals", path: "/credibility-signals" },
      { label: "Readiness", path: "/readiness" },
      { label: "Transparency", path: "/transparency" },
    ],
  },
  {
    id: 9, title: "Intellectual Property Maximization", icon: TrendingUp,
    objective: "Position GRGF™ as infrastructure-class IP with defensible methodology, modular architecture ownership, certification network effects, and long-horizon scaling.",
    steps: [
      "Articulate proprietary methodology: 6-layer deterministic architecture, policy engine, federation protocol",
      "Map modular architecture ownership: each layer as independently licensable component",
      "Document certification network effects: each certified institution increases platform value",
      "Create defensibility narrative: Canadian Patent Application No. 3,300,102, trade secrets, architectural moat",
      "Develop IP asset map showing interconnected value components and revenue streams",
      "Model 5-year valuation scenarios: conservative, base, optimistic with comparable benchmarks",
    ],
    artifacts: ["IP Asset Map", "Defensibility Narrative", "Architecture Ownership Document", "Network Effects Model", "5-Year Valuation Model", "Comparable Benchmarks"],
    stakeholders: ["IP legal counsel", "Valuation specialists", "Strategic advisors", "Institutional licensing team"],
    perceptionShift: "From 'governance project' to 'infrastructure-class intellectual property' — infrastructure IP is valued on fundamentally different multiples.",
    credibilityImpact: "IP defensibility signals institutional permanence and attracts strategic partners who validate through investment.",
    ipImpact: "Direct valuation maximization: infrastructure positioning, network effects, comparable benchmarking, licensing architecture.",
    standardsAlignment: "WIPO IP management standards, Canadian Patent Act, international IP valuation frameworks (ISO 10668).",
    risks: [
      { risk: "IP claims restricting adoption", mitigation: "Open standards with proprietary certification layer; clear licensing terms" },
    ],
    relatedPages: [
      { label: "IP Status", path: "/ip-status" },
      { label: "Financial Model", path: "/financial-model" },
      { label: "Impact Modeling", path: "/impact-modeling" },
    ],
  },
  {
    id: 10, title: "Training & Capacity Building", icon: GraduationCap,
    objective: "Design role-based training curriculum for ministry staff, registry operators, auditors, IT support teams, and governance officers — enabling institutional adoption readiness.",
    steps: [
      "Develop role-based training tracks: Governance Officer, Registry Operator, Auditor, IT Support",
      "Create curriculum modules: GRGF™ fundamentals, record lifecycle, verification procedures, federation",
      "Design simulation exercises: record creation, review workflows, audit reconstruction, integrity checks",
      "Build certification assessment framework with competency rubrics per role",
      "Produce training materials: instructor guides, participant workbooks, quick-reference cards",
      "Establish train-the-trainer program for institutional self-sufficiency",
    ],
    artifacts: ["Training Curriculum (4 tracks)", "Simulation Exercise Pack", "Certification Assessment Rubrics", "Instructor Guides", "Quick-Reference Cards", "Train-the-Trainer Program"],
    stakeholders: ["Ministry training departments", "Public service academies", "IT capacity building units", "Governance education providers"],
    perceptionShift: "From 'system without adoption support' to 'complete institutional deployment package with training infrastructure.'",
    credibilityImpact: "Training readiness signals operational maturity. Institutions assess training availability as a deployment prerequisite.",
    ipImpact: "Certification training creates recurring revenue streams and deepens institutional dependency on the GRGF™ ecosystem.",
    standardsAlignment: "ISO 10015 (Training guidelines), OECD Public Governance capacity building, World Bank institutional development frameworks.",
    risks: [
      { risk: "Training perceived as premature", mitigation: "Frame as 'pilot training program'; align with sandbox deployment" },
    ],
    relatedPages: [
      { label: "Academy", path: "/academy" },
      { label: "Pilot Evaluation", path: "/pilot" },
    ],
  },
  {
    id: 11, title: "12-Month Sovereign Implementation Roadmap", icon: Clock,
    objective: "Execute month-by-month institutional ascent with validation milestones, coalition growth, credibility progression, and adoption readiness evolution.",
    steps: [
      "Months 1–3: Foundation establishment, Advisory Council, governance charter, first working papers",
      "Months 4–6: Independent validation (Phase 1–2), sandbox deployment, coalition onboarding",
      "Months 7–9: Validation (Phase 3–4), conference presentations, multilateral briefings, coalition expansion",
      "Months 10–12: Certification pilot, Charter v3.0, pre-standard positioning, GTMI self-assessment",
      "Track credibility score: 15 → 45 → 70 → 90 with quarterly milestone reviews",
      "Track adoption probability: 5% → 20% → 40% → 60% with documented evidence per stage",
    ],
    artifacts: ["Monthly Execution Checklist", "Milestone Tracker", "Credibility Score Dashboard", "Adoption Probability Model", "Quarterly Progress Reports", "Stakeholder Engagement Log"],
    stakeholders: ["Executive leadership", "Advisory Council", "Standards Committee", "External evaluators", "Coalition members"],
    perceptionShift: "From 'aspirational timeline' to 'structured execution with documented milestones' — timeline discipline signals operational maturity.",
    credibilityImpact: "The roadmap itself is a credibility signal. Structured execution paths demonstrate institutional seriousness.",
    ipImpact: "Milestone-driven execution creates documented value accretion, supporting progressive IP valuation increases at each stage.",
    standardsAlignment: "PMI project governance standards, PRINCE2 stage-gate methodology, OECD reform implementation frameworks.",
    risks: [
      { risk: "Timeline slippage", mitigation: "90-day review cycles with published adjustment rationale; parallel execution tracks" },
    ],
    relatedPages: [
      { label: "Roadmap", path: "/roadmap" },
      { label: "Institutional Blueprint", path: "/institutional-blueprint" },
      { label: "Unified Transformation", path: "/unified-transformation" },
    ],
  },
  {
    id: 12, title: "Final Submission Package", icon: FileText,
    objective: "Compile all institutional deliverables into a submission-ready package — interactive demonstrations, governance documentation, compliance reports, and IP valuation materials.",
    steps: [
      "Package interactive web demonstration with guided institutional walkthrough",
      "Compile governance charter, advisory council records, and transparency reports",
      "Finalize compliance crosswalk documentation with implementation status matrix",
      "Produce certification and verification dashboards with live metrics",
      "Create stakeholder-specific briefing packs (Minister, CIO, Multilateral, Auditor, Researcher)",
      "Generate IP valuation summary with defensibility narrative and comparable benchmarks",
      "Package training curriculum and capacity building modules",
      "Seal all documents with SHA-256 integrity verification and publish manifest",
    ],
    artifacts: ["Interactive Web Demo Package", "Governance Documentation Suite", "Compliance Reports", "Certification Dashboards", "6 Stakeholder Briefing Packs", "IP Valuation Report", "Training Modules", "SHA-256 Manifest"],
    stakeholders: ["Government procurement teams", "Multilateral evaluation panels", "Cabinet-level decision makers", "Institutional investors", "National DPI architects"],
    perceptionShift: "From 'framework website' to 'complete institutional submission ready for formal review' — the culmination of all 11 preceding modules.",
    credibilityImpact: "Submission-ready materials are the final conversion tool — they bridge institutional interest into formal engagement action.",
    ipImpact: "Professional documentation suite supports licensing negotiations and demonstrates commercial and institutional readiness.",
    standardsAlignment: "World Bank procurement documentation standards, OECD institutional review requirements, ISO document management standards.",
    risks: [
      { risk: "Materials outdated after framework updates", mitigation: "Version-controlled documents with automated SHA-256 re-signing" },
    ],
    relatedPages: [
      { label: "Submission Hub", path: "/submission-hub" },
      { label: "Archive Downloads", path: "/archive/downloads" },
      { label: "Whitepaper", path: "/whitepaper" },
      { label: "Hash Verifier", path: "/verification" },
    ],
  },
];

const READINESS_TIERS = [
  { tier: "Baseline", score: 10, status: "Monitor initiative", color: "bg-muted/40" },
  { tier: "Legitimacy + Coalition", score: 30, status: "Acknowledged entity", color: "bg-accent/20" },
  { tier: "Validation + Demo", score: 55, status: "Technical credibility", color: "bg-accent/30" },
  { tier: "Proof + Standards", score: 72, status: "Standards-aligned", color: "bg-accent/40" },
  { tier: "Stakeholders + Signals", score: 84, status: "Institutional maturity", color: "bg-accent/50" },
  { tier: "IP + Training + Roadmap", score: 93, status: "Deployment-ready", color: "bg-accent/60" },
  { tier: "Full Submission Package", score: 98, status: "Submission-ready", color: "bg-accent/70" },
];

const SovereignDeployment = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Sovereign Deployment Ready Package"
      subtitle="12-module execution framework producing all deliverables required for institutional submission — governance structures, operational demonstration, standards alignment, credibility signals, and IP valuation."
    />

    {/* Success Condition */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <h3 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">Success Criteria</h3>
        <blockquote className="border-l-2 border-accent/50 pl-4 py-2 bg-card/50 rounded-r-sm mb-4">
          <p className="text-sm font-serif font-semibold text-foreground italic">
            "GRGF™ is fully operational, standards-aligned, institutionally credible, sovereign-ready, and submission-ready."
          </p>
        </blockquote>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-card border border-border rounded-sm p-3">
            <p className="text-[10px] font-mono text-destructive/60 uppercase mb-1">From</p>
            <p className="text-xs font-semibold text-foreground">"New governance concept"</p>
          </div>
          <div className="bg-card border border-accent/30 rounded-sm p-3">
            <p className="text-[10px] font-mono text-accent/70 uppercase mb-1">To</p>
            <p className="text-xs font-semibold text-foreground">"Emerging international infrastructure entering institutional validation"</p>
          </div>
        </div>
      </div>

      {/* Readiness Progression */}
      <div className="governance-card mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-accent" />
          <h3 className="text-[10px] font-mono font-semibold text-foreground uppercase tracking-wider">Institutional Readiness Progression</h3>
        </div>
        <div className="space-y-2">
          {READINESS_TIERS.map((t) => (
            <div key={t.tier} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-muted-foreground w-44 shrink-0 hidden md:block">{t.tier}</span>
              <div className="flex-1 bg-muted/20 rounded-full h-3.5 relative">
                <div className={`absolute left-0 top-0 h-3.5 rounded-full bg-accent/50`} style={{ width: `${t.score}%` }} />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground w-8 text-right">{t.score}</span>
              <span className="text-[10px] text-muted-foreground hidden lg:block w-36">{t.status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Module Index */}
      <div className="governance-card">
        <h3 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">12-Module Index</h3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {MODULES.map((m) => (
            <a key={m.id} href={`#sdm-${m.id}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors px-2 py-1.5 border border-border/50 rounded-sm bg-card/30">
              <span className="text-[10px] font-mono text-accent/50 w-5">{m.id}.</span>
              <m.icon className="h-3 w-3 shrink-0" />
              <span className="truncate">{m.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>

    {/* 12 Modules */}
    {MODULES.map((m) => (
      <Section key={m.id} id={`sdm-${m.id}`} title={`Module ${m.id} — ${m.title}`} className="border-t border-border scroll-mt-20">
        <div className="governance-card">
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
              <m.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Objective</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.objective}</p>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="h-3 w-3" /> Implementation Steps
            </h4>
            <ul className="space-y-1.5">
              {m.steps.map((s) => (
                <li key={s} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />{s}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="h-3 w-3" /> Artifacts Produced
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {m.artifacts.map((a) => (
                <span key={a} className="text-[10px] font-mono text-muted-foreground bg-card border border-border rounded-sm px-2.5 py-1">{a}</span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Users className="h-3 w-3" /> Stakeholders
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {m.stakeholders.map((s) => (
                <span key={s} className="text-[10px] text-muted-foreground bg-muted/30 border border-border rounded-sm px-2.5 py-1">{s}</span>
              ))}
            </div>
          </div>

          {/* 4-column analytical grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-5">
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><Eye className="h-2.5 w-2.5" /> Perception Shift</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed italic">{m.perceptionShift}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><Shield className="h-2.5 w-2.5" /> Credibility</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.credibilityImpact}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><TrendingUp className="h-2.5 w-2.5" /> IP Valuation</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.ipImpact}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><Scale className="h-2.5 w-2.5" /> Standards</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.standardsAlignment}</p>
            </div>
          </div>

          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3" /> Risks & Mitigation
            </h4>
            <div className="space-y-2">
              {m.risks.map((r) => (
                <div key={r.risk} className="grid sm:grid-cols-2 gap-2 bg-card border border-border rounded-sm p-3">
                  <div>
                    <p className="text-[9px] font-mono text-destructive/60 uppercase mb-0.5">Risk</p>
                    <p className="text-xs text-muted-foreground">{r.risk}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-accent/60 uppercase mb-0.5">Mitigation</p>
                    <p className="text-xs text-muted-foreground">{r.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <ArrowRight className="h-3 w-3" /> Related Pages
            </h4>
            <div className="flex flex-wrap gap-2">
              {m.relatedPages.map((rp) => (
                <Link key={rp.path} to={rp.path} className="text-[10px] font-mono text-accent hover:text-accent/80 border border-accent/20 rounded-sm px-3 py-1.5 transition-colors hover:bg-accent/5">
                  {rp.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    ))}

    {/* Analytical Basis */}
    <Section title="Analytical Basis" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          Module design derived from historical patterns of global standards emergence and multilateral institutional adoption:
        </p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Internet governance evolution (ICANN, IGF, WSIS)",
            "ISO standards creation lifecycle (ISO/IEC JTC 1)",
            "Global Reporting Initiative (GRI) formation",
            "Digital identity ecosystems (eIDAS, India Stack)",
            "Multilateral DPI programs (World Bank, OECD, DPGA)",
            "UN institutional program evaluation frameworks",
          ].map((b) => (
            <div key={b} className="flex items-start gap-2 text-[11px] text-muted-foreground bg-card border border-border rounded-sm px-3 py-2">
              <CheckCircle className="h-3 w-3 text-accent/50 shrink-0 mt-0.5" />{b}
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid. Canadian Patent Application No. 3,300,102 (Filed January 28, 2026; publication pending).
      </p>
    </Section>
  </div>
);

export default SovereignDeployment;
