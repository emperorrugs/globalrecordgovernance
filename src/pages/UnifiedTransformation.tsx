import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import {
  Building, Users, Shield, Globe, Activity, Scale, BookOpen,
  Eye, Layers, Target, Award, FileText, TrendingUp, Briefcase,
  Clock, AlertTriangle, CheckCircle, ArrowRight, Landmark,
  Network, Lock, BarChart3, Cpu,
} from "lucide-react";

/* ── Types ── */
interface ModuleData {
  id: number;
  title: string;
  icon: React.ElementType;
  objective: string;
  actions: string[];
  artifacts: string[];
  stakeholders: string[];
  psychologyImpact: string;
  legitimacyContribution: string;
  ipContribution: string;
  risks: { risk: string; mitigation: string }[];
  relatedPages?: { label: string; path: string }[];
}

/* ── 16 Modules ── */
const MODULES: ModuleData[] = [
  {
    id: 1,
    title: "Legitimacy Architecture",
    icon: Building,
    objective: "Transition GRGF™ from founder-origin initiative to independently governed institutional entity with transparent authority separation and anti-capture safeguards.",
    actions: [
      "Establish independent foundation (Swiss Verein or Canadian not-for-profit)",
      "Draft and publish founding governance charter with authority separation model",
      "Constitute Advisory Council (9–15 members, 3+ regions, term limits)",
      "Create Technical Standards Committee with rotating independent chair",
      "Codify Anti-Capture Clauses (AC-01 through AC-05) in charter",
      "Implement quarterly transparency reporting with public minutes",
    ],
    artifacts: ["Foundation Charter", "Governance Structure Diagram", "Advisory Council Terms of Reference", "Anti-Capture Policy", "Transparency Reporting Template"],
    stakeholders: ["Foundation legal counsel", "Governance charter committee", "Independent compliance oversight", "Advisory Council nominees"],
    psychologyImpact: "Formally constituted entities are categorized differently from individual initiatives — regardless of technical merit.",
    legitimacyContribution: "Establishes the institutional container required for all subsequent signals. Without this, coalition and validation efforts lack a credible host.",
    ipContribution: "Foundation structure protects IP assignment, licensing authority, and certification revenue streams within a governed entity.",
    risks: [
      { risk: "Foundation perceived as shell entity", mitigation: "Active Advisory Council with published outputs and public meeting records" },
      { risk: "Founder influence persists despite separation", mitigation: "Term limits, independent chair, conflict-of-interest declarations" },
    ],
    relatedPages: [
      { label: "Institutional Blueprint", path: "/institutional-blueprint" },
      { label: "Governance Framework", path: "/governance-framework" },
      { label: "Ethics & Anti-Capture", path: "/ethics" },
    ],
  },
  {
    id: 2,
    title: "Global Coalition Formation",
    icon: Users,
    objective: "Build a diverse, multi-regional coalition of academic, policy, and civil society participants demonstrating consensus support.",
    actions: [
      "Recruit academic partners from governance faculties across 3+ regions",
      "Engage 2–3 governance think tanks as institutional review partners",
      "Formalize participation charter with role definitions and neutrality commitments",
      "Publish coalition roster with institutional affiliations",
      "Launch quarterly briefing cycle with published summaries",
      "Implement regional representation balance requirements",
    ],
    artifacts: ["Participation Charter", "Coalition Roster", "Regional Balance Matrix", "Quarterly Briefing Summaries", "Stakeholder Onboarding Guide"],
    stakeholders: ["Universities (3+ regions)", "Policy research institutes", "Public administration schools", "Civil society governance organizations", "Regional DPI experts"],
    psychologyImpact: "International reviewers assess coalition breadth as a proxy for legitimacy — diverse participation signals consensus-readiness.",
    legitimacyContribution: "Transforms 'single-founder project' perception into 'multi-institutional coalition,' the minimum threshold for multilateral engagement.",
    ipContribution: "Coalition participation creates network effects around the certification framework, increasing platform switching costs and IP defensibility.",
    risks: [
      { risk: "Coalition perceived as nominal", mitigation: "Active participation metrics; published contribution records" },
      { risk: "Regional imbalance", mitigation: "Charter-mandated minimum regional quotas" },
    ],
    relatedPages: [
      { label: "Partnerships", path: "/partnerships" },
      { label: "Membership", path: "/membership" },
      { label: "International Cooperation", path: "/international-cooperation" },
    ],
  },
  {
    id: 3,
    title: "Independent Validation System",
    icon: Shield,
    objective: "Establish external verification of GRGF™'s technical integrity through independent third-party assessment, removing reliance on self-asserted credibility.",
    actions: [
      "Commission architecture review by ISO 27001-certified firm",
      "Execute four-phase validation: Architecture → Penetration → Policy Logic → Ethics",
      "Engage academic policy laboratory for governance stress testing",
      "Publish full validation findings in open-access format",
      "Establish annual re-validation cycle with rotating evaluators",
      "Define evaluator selection criteria (independence, accreditation, COI policy)",
    ],
    artifacts: ["Validation Terms of Reference", "Architecture Conformance Report", "Security Assessment Report", "Policy Logic Conformance Report", "Governance Ethics Assessment"],
    stakeholders: ["Accredited cybersecurity firms", "Academic governance labs", "Independent policy auditors", "Standards conformance bodies"],
    psychologyImpact: "Removes the primary institutional objection — lack of external scrutiny — and positions GRGF™ alongside audited multilateral systems.",
    legitimacyContribution: "Independent validation is the single most impactful credibility accelerator. Evaluators treat audited systems fundamentally differently.",
    ipContribution: "Validated architecture documentation strengthens patent defensibility and licensing authority for certified implementations.",
    risks: [
      { risk: "Audit reveals deficiencies", mitigation: "Pre-audit internal review; treat findings as improvement roadmap" },
      { risk: "Evaluator independence questioned", mitigation: "Published COI declarations; annual evaluator rotation" },
    ],
    relatedPages: [
      { label: "Validation Pathway", path: "/validation" },
      { label: "Credibility Signals", path: "/credibility-signals" },
      { label: "Security & Trust", path: "/security-trust" },
    ],
  },
  {
    id: 4,
    title: "Global DPI Demonstration Environment",
    icon: Globe,
    objective: "Transform the platform into a live demonstration of a national DPI ecosystem — simulating identity, registries, ministries, and audit authorities.",
    actions: [
      "Deploy sandbox with simulated sovereign state profile (Kaledonia)",
      "Simulate ministry workflows: record creation, review, approval, archival",
      "Demonstrate cross-ministry governance event lifecycle",
      "Build interactive verification portal for hash-sealed record lookup",
      "Create audit authority dashboard with reconstruction capabilities",
      "Implement federation demonstration between simulated jurisdictions",
    ],
    artifacts: ["Sandbox Architecture Document", "Kaledonia Country Profile", "Ministry Workflow Demonstrations", "Verification Portal", "Federation Protocol Demo"],
    stakeholders: ["Technical review committee", "Sandbox engineering team", "Independent evaluation observers", "Institutional pilot reviewers"],
    psychologyImpact: "Eliminates the 'vaporware' objection. Live demonstrations transform abstract proposals into tangible, reviewable systems.",
    legitimacyContribution: "Operational demonstration is the prerequisite for pilot engagement discussions with national governments.",
    ipContribution: "Functional demonstration environments prove reduction-to-practice, strengthening patent claims and licensing negotiations.",
    risks: [
      { risk: "Simulation confused with production", mitigation: "Persistent simulation banners; audit-safe disclaimers on all outputs" },
      { risk: "Demo dismissed as non-authoritative", mitigation: "Label as 'demonstration environment'; never claim operational authority" },
    ],
    relatedPages: [
      { label: "Simulation Hub", path: "/simulation" },
      { label: "Workflow Demo", path: "/workflow" },
      { label: "Verification", path: "/verification" },
    ],
  },
  {
    id: 5,
    title: "Operational Proof-of-Function",
    icon: Activity,
    objective: "Generate measurable evidence that GRGF™ produces governance outputs — immutable audit chains, certification lifecycles, and verification dashboards.",
    actions: [
      "Execute full record lifecycle with measurable KPIs",
      "Generate demonstration datasets with hash-sealed records and audit trails",
      "Produce certification simulation results (determinism rate, integrity rate)",
      "Build verification dashboard showing real-time governance metrics",
      "Document case studies with measurable governance outcomes",
      "Publish KPI benchmarks: Policy Determinism Rate, Audit Reconstruction Time",
    ],
    artifacts: ["Demonstration Datasets", "Verification Case Studies (3–5)", "KPI Benchmark Report", "Certification Simulation Report", "Governance Metrics Dashboard"],
    stakeholders: ["Technical Review Committee", "Independent evaluation observers", "Pilot evaluation reviewers"],
    psychologyImpact: "Measurable outputs transform evaluator assessment from 'theoretical framework' to 'operational system with documented performance.'",
    legitimacyContribution: "Proof-of-function is required before any institution will allocate resources to pilot engagement.",
    ipContribution: "Documented operational KPIs establish quantifiable value metrics that directly support IP valuation models.",
    risks: [
      { risk: "KPI results below expectations", mitigation: "Use findings to calibrate system before formal evaluation" },
    ],
    relatedPages: [
      { label: "Records", path: "/records" },
      { label: "Data Entry", path: "/data-entry" },
      { label: "API Mock", path: "/api-mock" },
    ],
  },
  {
    id: 6,
    title: "International Standards Alignment",
    icon: Scale,
    objective: "Create explicit compliance mapping against governance, records management, cybersecurity, interoperability, and privacy standards.",
    actions: [
      "Map GRGF™ to ISO/IEC 27001 (information security), ISO 15489 (records management)",
      "Align with OECD Digital Government Policy Framework principles",
      "Document GDPR and PIPEDA privacy-by-design compliance",
      "Create ITU-T alignment matrix (X.509, X.1252, X.1500)",
      "Produce World Bank GovTech Maturity Index capability mapping",
      "Publish unified standards crosswalk document",
    ],
    artifacts: ["Standards Crosswalk Document", "ISO Alignment Matrix", "Privacy Compliance Assessment", "ITU-T Mapping Table", "GTMI Capability Map"],
    stakeholders: ["Standards conformance specialists", "Privacy compliance officers", "International standards bodies", "Multilateral evaluation teams"],
    psychologyImpact: "Standards alignment demonstrates institutional maturity. Evaluators use compliance matrices as decision-support shortcuts.",
    legitimacyContribution: "Without standards mapping, frameworks are categorized as 'non-conforming.' Alignment is a necessary condition for institutional engagement.",
    ipContribution: "Standards-aligned IP commands higher licensing premiums. Compliance mapping documentation is itself a defensible asset.",
    risks: [
      { risk: "Overclaiming alignment", mitigation: "Use 'designed to support alignment with' language; never claim certification" },
    ],
    relatedPages: [
      { label: "Standards Compliance", path: "/compliance" },
      { label: "International Compliance", path: "/international-compliance" },
      { label: "ITU Standards", path: "/itu-global-standards" },
      { label: "OECD Alignment", path: "/oecd-alignment" },
    ],
  },
  {
    id: 7,
    title: "Political & Sovereignty Safeguards",
    icon: Lock,
    objective: "Engineer adoption-safe positioning that removes political resistance through sovereignty-preserving language and voluntary participation architecture.",
    actions: [
      "Codify sovereignty-preserving language model across all materials",
      "Design voluntary opt-in adoption architecture (no mandates)",
      "Publish national ownership guarantees and jurisdiction neutrality framework",
      "Create diplomatic positioning guide for government briefings",
      "Document non-enforcement stance with explicit boundary statements",
      "Develop risk mitigation messaging for ministerial audiences",
    ],
    artifacts: ["Sovereignty Preservation Policy", "Diplomatic Positioning Guide", "National Ownership Guarantee", "Jurisdiction Neutrality Framework", "Risk Mitigation Messaging"],
    stakeholders: ["Government relations specialists", "Diplomatic communications advisors", "National sovereignty legal experts"],
    psychologyImpact: "Sovereignty concerns are the primary adoption blocker for national governments. Explicit safeguards transform political risk into manageable governance.",
    legitimacyContribution: "Sovereignty safeguards are prerequisites for any government engagement. Without them, frameworks are politically dead on arrival.",
    ipContribution: "Sovereignty-neutral IP is licensable across jurisdictions without political friction, maximizing total addressable market.",
    risks: [
      { risk: "Perceived as extraterritorial governance", mitigation: "Explicit non-enforcement language in all materials and charter" },
    ],
    relatedPages: [
      { label: "Safeguards & Trust", path: "/safeguards-trust" },
      { label: "Canada Deployment", path: "/canada" },
      { label: "Deployment Scenarios", path: "/deployment-scenarios" },
    ],
  },
  {
    id: 8,
    title: "Academic Legitimacy Program",
    icon: BookOpen,
    objective: "Establish GRGF™ within academic discourse through peer-reviewed publications, research collaborations, and conference presentations.",
    actions: [
      "Publish 2–3 governance working papers (SSRN, arXiv)",
      "Submit peer-reviewed article to governance journal (Government Information Quarterly)",
      "Establish research collaboration with 2+ university departments",
      "Present at international governance conferences (ICEGOV, OECD GovTech)",
      "Launch GRGF™ Working Paper Series with DOI registration",
      "Define research themes: governance integrity, append-only records, anti-capture",
    ],
    artifacts: ["Working Paper Series (2–3 papers)", "Journal Submission", "Conference Presentations", "Research MOUs", "Citation Guidelines"],
    stakeholders: ["University research departments", "Journal editorial boards", "Conference program committees", "Academic peer reviewers"],
    psychologyImpact: "Peer-reviewed presence signals scholarly scrutiny — a prerequisite for 'serious engagement' classification by institutional evaluators.",
    legitimacyContribution: "Academic validation creates a citation trail that due diligence teams rely on. Published research is independently discoverable.",
    ipContribution: "Academic publications establish prior art documentation, strengthen patent defensibility, and create authoritative reference materials.",
    risks: [
      { risk: "Peer review rejection", mitigation: "Target multiple journals; working papers as pre-publication credibility" },
      { risk: "Neutrality questioned", mitigation: "Co-author with independent researchers; disclose all affiliations" },
    ],
    relatedPages: [
      { label: "Research", path: "/research" },
      { label: "Insights", path: "/insights" },
      { label: "Academy", path: "/academy" },
    ],
  },
  {
    id: 9,
    title: "Institutional Signaling System",
    icon: Eye,
    objective: "Embed credibility signals throughout the platform — transparency dashboards, validation trackers, advisory indicators, and audit-readiness markers.",
    actions: [
      "Deploy institutional readiness dashboard with compliance status indicators",
      "Publish advisory council participation records",
      "Create validation progress tracker (four-phase lifecycle)",
      "Embed research publication indicators with citation counts",
      "Display audit-readiness markers on all institutional pages",
      "Implement credibility score progression visualization",
    ],
    artifacts: ["Readiness Dashboard", "Validation Tracker", "Advisory Participation Display", "Research Publication Indicators", "Credibility Score Visualization"],
    stakeholders: ["Institutional communications team", "Advisory Council members", "External evaluators"],
    psychologyImpact: "Visible credibility signals create cumulative confidence. Evaluators who encounter multiple independent indicators shift from skepticism to engagement.",
    legitimacyContribution: "Signaling amplifies the value of all other modules. Without visibility, validation and coalition efforts remain undiscoverable.",
    ipContribution: "Institutional signaling demonstrates market adoption readiness, directly supporting IP valuation multiples.",
    risks: [
      { risk: "Signals perceived as performative", mitigation: "Link every signal to verifiable evidence (reports, records, publications)" },
    ],
    relatedPages: [
      { label: "Credibility Signals", path: "/credibility-signals" },
      { label: "Readiness", path: "/readiness" },
      { label: "Transparency", path: "/transparency" },
    ],
  },
  {
    id: 10,
    title: "Website Structure Transformation",
    icon: Layers,
    objective: "Reorganize platform navigation to communicate institutional maturity: Global Overview → DPI Demonstration → Standards → Adoption → Certification → Research → Pilot.",
    actions: [
      "Restructure navigation into 7 institutional tiers",
      "Prioritize demonstration and standards pages in primary navigation",
      "Create institutional landing paths for different evaluator types",
      "Implement progressive disclosure for technical depth",
      "Ensure every page reinforces institutional positioning",
      "Add cross-referencing between related institutional modules",
    ],
    artifacts: ["Navigation Architecture Map", "Information Hierarchy Document", "Cross-Reference Matrix", "Evaluator Landing Pages"],
    stakeholders: ["UX architecture team", "Institutional communications", "External usability reviewers"],
    psychologyImpact: "Navigation structure is the first institutional signal. Organized, hierarchical sites are assessed as more credible than flat-structure sites.",
    legitimacyContribution: "Structure transformation is the delivery mechanism for all other modules. Without coherent navigation, content is undiscoverable.",
    ipContribution: "Professional platform architecture demonstrates product maturity, supporting higher IP valuation assessments.",
    risks: [
      { risk: "Navigation complexity overwhelms users", mitigation: "Progressive disclosure; stakeholder-specific entry points" },
    ],
    relatedPages: [
      { label: "Sitemap", path: "/sitemap" },
    ],
  },
  {
    id: 11,
    title: "Stakeholder Experience Design",
    icon: Briefcase,
    objective: "Create tailored demonstration journeys for Ministers, CIOs, multilateral institutions, regulators, auditors, and researchers.",
    actions: [
      "Design Minister pathway: outcomes, sovereignty safety, political value",
      "Design CIO pathway: architecture, integration, security, scalability",
      "Design Multilateral pathway: standards alignment, DPG compliance, GTMI",
      "Design Regulator pathway: privacy, audit controls, compliance mapping",
      "Design Auditor pathway: verification, hash integrity, reconstruction",
      "Design Researcher pathway: publications, methodology, data access",
    ],
    artifacts: ["6 Stakeholder Journey Maps", "Tailored Landing Pages", "Role-Specific Briefing Decks", "Outcome Visualization per Role"],
    stakeholders: ["Government decision-makers", "Technology executives", "Multilateral evaluators", "Regulatory bodies", "Academic researchers"],
    psychologyImpact: "Evaluators who encounter content tailored to their role perceive higher institutional maturity than those navigating generic content.",
    legitimacyContribution: "Stakeholder-specific pathways demonstrate understanding of institutional decision processes — a maturity signal in itself.",
    ipContribution: "Multi-stakeholder adoption pathways demonstrate broad market applicability, supporting higher IP valuation ranges.",
    risks: [
      { risk: "Pathways become siloed", mitigation: "Cross-linking between pathways; unified framework narrative throughout" },
    ],
    relatedPages: [
      { label: "Stakeholder Solutions", path: "/stakeholders" },
      { label: "Executive Brief", path: "/executive-brief" },
      { label: "Executive Dossier", path: "/dossier" },
    ],
  },
  {
    id: 12,
    title: "Certification & Ecosystem Model",
    icon: Award,
    objective: "Design a scalable certification framework with institutional tiers, validation lifecycles, audit participation, and ecosystem incentives.",
    actions: [
      "Define three-tier certification model (Observer → Associate → Certified Partner)",
      "Design certification lifecycle: application → assessment → provisional → full → renewal",
      "Create audit participation requirements per tier",
      "Define ecosystem incentives (early adopter recognition, co-development)",
      "Publish certification criteria and evaluation rubrics",
      "Establish annual renewal and re-validation cycle",
    ],
    artifacts: ["Certification Framework Document", "Three-Tier Model Diagram", "Certification Lifecycle Map", "Evaluation Rubrics", "Ecosystem Incentive Structure"],
    stakeholders: ["Certification body designers", "Standards committee", "Institutional applicants", "Audit facilitators"],
    psychologyImpact: "Certification ecosystems create institutional lock-in and demonstrate that the framework has moved beyond proposal into operational governance.",
    legitimacyContribution: "A functioning certification model is the strongest evidence of framework maturity — it implies active institutional participation.",
    ipContribution: "Certification creates recurring revenue streams and network effects. Each certified institution increases platform value exponentially.",
    risks: [
      { risk: "Certification perceived as premature", mitigation: "Frame as 'pilot certification program' with explicit provisional status" },
    ],
    relatedPages: [
      { label: "Recognition", path: "/recognition" },
      { label: "Membership", path: "/membership" },
      { label: "Pilot Evaluation", path: "/pilot" },
    ],
  },
  {
    id: 13,
    title: "IP Value Maximization",
    icon: Target,
    objective: "Engineer perception of GRGF™ as infrastructure-class intellectual property with defensible methodology, modular architecture, and certification network effects.",
    actions: [
      "Articulate proprietary methodology as defensible IP asset",
      "Map modular architecture ownership (6-layer model, policy engine, federation protocol)",
      "Document certification network effects and scaling economics",
      "Create defensibility narrative: patent, trade secret, architectural moat",
      "Develop IP asset map showing interconnected value components",
      "Publish IP positioning document for institutional and investor review",
    ],
    artifacts: ["IP Asset Map", "Defensibility Narrative", "Modular Architecture Ownership Document", "Network Effects Model", "IP Positioning Paper"],
    stakeholders: ["IP legal counsel", "Valuation specialists", "Institutional licensing team"],
    psychologyImpact: "Infrastructure-class IP is valued differently from application-level IP. Positioning GRGF™ as foundational infrastructure shifts valuation paradigms.",
    legitimacyContribution: "IP defensibility signals institutional permanence — frameworks with protected IP are perceived as more serious and sustainable.",
    ipContribution: "Direct IP valuation maximization through defensibility documentation, network effect modeling, and licensing architecture design.",
    risks: [
      { risk: "IP claims perceived as restricting adoption", mitigation: "Emphasize open standards with proprietary certification layer" },
    ],
    relatedPages: [
      { label: "IP Status", path: "/ip-status" },
      { label: "Financial Model", path: "/financial-model" },
    ],
  },
  {
    id: 14,
    title: "Demo Deployment Toolkit",
    icon: FileText,
    objective: "Generate downloadable materials for institutional engagement: pilot packages, briefing decks, technical whitepapers, and DPI integration guides.",
    actions: [
      "Compile country pilot package with deployment checklist and KPIs",
      "Create institutional briefing deck (12-page format for cabinet review)",
      "Finalize technical whitepaper for multilateral submission",
      "Draft governance charter summary (2-page executive format)",
      "Produce DPI integration guide mapping to national architecture",
      "Package all materials with SHA-256 integrity verification",
    ],
    artifacts: ["Country Pilot Package", "Institutional Briefing Deck", "Technical Whitepaper", "Charter Summary", "DPI Integration Guide", "SHA-256 Manifest"],
    stakeholders: ["Government procurement teams", "Multilateral evaluation panels", "National DPI architects", "Cabinet-level decision makers"],
    psychologyImpact: "Downloadable, professionally packaged materials signal operational readiness. Evaluators who can circulate materials internally accelerate engagement.",
    legitimacyContribution: "Submission-ready materials are the final conversion tool — they bridge interest into action.",
    ipContribution: "Professional documentation supports licensing negotiations and demonstrates commercial readiness.",
    risks: [
      { risk: "Materials outdated after framework updates", mitigation: "Version-controlled documents with automated SHA-256 re-signing" },
    ],
    relatedPages: [
      { label: "Submission Hub", path: "/submission-hub" },
      { label: "Archive Downloads", path: "/archive/downloads" },
      { label: "Whitepaper", path: "/whitepaper" },
    ],
  },
  {
    id: 15,
    title: "12-Month Institutional Ascent",
    icon: Clock,
    objective: "Execute month-by-month institutional transformation plan with artifacts, validation milestones, coalition growth, and credibility score progression.",
    actions: [
      "Months 1–3: Foundation establishment, Advisory Council, governance charter publication",
      "Months 4–6: Independent validation, sandbox deployment, first working papers",
      "Months 7–9: Coalition expansion, conference presentations, multilateral briefings",
      "Months 10–12: Certification pilot, Charter v3.0, pre-standard positioning",
      "Track credibility score progression: 15 → 45 → 70 → 90",
      "Track adoption probability evolution: 5% → 20% → 40% → 60%",
    ],
    artifacts: ["Monthly Execution Checklist", "Milestone Tracker", "Credibility Score Dashboard", "Adoption Probability Model", "Quarterly Progress Reports"],
    stakeholders: ["Executive leadership", "Advisory Council", "Standards Committee", "External evaluators"],
    psychologyImpact: "A documented execution timeline demonstrates institutional seriousness. Evaluators assess timeline discipline as a proxy for operational maturity.",
    legitimacyContribution: "The roadmap itself is a credibility signal — it demonstrates that GRGF™ has a structured path to institutional status.",
    ipContribution: "Milestone-driven execution creates documented value accretion, supporting progressive IP valuation increases.",
    risks: [
      { risk: "Timeline slippage", mitigation: "90-day review cycles with published adjustment rationale" },
    ],
    relatedPages: [
      { label: "Roadmap", path: "/roadmap" },
      { label: "Institutional Blueprint", path: "/institutional-blueprint" },
    ],
  },
  {
    id: 16,
    title: "Valuation Optimization Model",
    icon: TrendingUp,
    objective: "Position GRGF™ as infrastructure-class IP with governance layer economics, certification ecosystem revenue, and long-horizon institutional platform scaling.",
    actions: [
      "Model GRGF™ as governance infrastructure layer (not application)",
      "Quantify certification ecosystem revenue potential (per-institution licensing)",
      "Calculate network effects: each certified institution increases platform value",
      "Project 5-year scaling scenarios: conservative, base, optimistic",
      "Document comparable infrastructure valuations (identity systems, registry platforms)",
      "Create investor-ready valuation summary with defensibility rationale",
    ],
    artifacts: ["Valuation Model (3 scenarios)", "Network Effects Analysis", "Comparable Infrastructure Benchmarks", "Revenue Projection Model", "Investor Summary"],
    stakeholders: ["Valuation specialists", "IP counsel", "Strategic advisors", "Institutional investors"],
    psychologyImpact: "Infrastructure-layer positioning commands fundamentally different valuation multiples than application-layer projects.",
    legitimacyContribution: "A credible valuation model signals institutional permanence and attracts strategic partners who validate through investment.",
    ipContribution: "Direct valuation maximization through infrastructure positioning, network effect quantification, and comparable benchmarking.",
    risks: [
      { risk: "Valuation perceived as speculative", mitigation: "Ground all projections in comparable infrastructure valuations with cited sources" },
    ],
    relatedPages: [
      { label: "Financial Model", path: "/financial-model" },
      { label: "Impact Modeling", path: "/impact-modeling" },
    ],
  },
];

/* ── Credibility Progression ── */
const PROGRESSION = [
  { phase: "Baseline", score: 10, label: "Monitor initiative" },
  { phase: "After Legitimacy + Coalition (M1–2)", score: 30, label: "Acknowledged infrastructure" },
  { phase: "After Validation + Demo (M3–4)", score: 50, label: "Institutional interest" },
  { phase: "After Proof + Standards (M5–6)", score: 68, label: "Technical credibility" },
  { phase: "After Safeguards + Academic (M7–8)", score: 78, label: "Scholarly recognition" },
  { phase: "After Signaling + Structure (M9–10)", score: 85, label: "Platform maturity" },
  { phase: "After Stakeholder + Certification (M11–12)", score: 90, label: "Ecosystem credibility" },
  { phase: "Full 16-Module Execution", score: 97, label: "Serious engagement candidate" },
];

/* ── Component ── */
const UnifiedTransformation = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Unified Institutional Transformation Framework"
      subtitle="16-module execution system transforming GRGF™ from governance concept into internationally credible Digital Public Infrastructure demonstration and emerging global standard initiative."
    />

    {/* Perception Shift */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <h3 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">Transformation Principle</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-sm p-4">
            <p className="text-[10px] font-mono text-destructive/60 uppercase mb-1">From</p>
            <p className="text-sm font-semibold text-foreground">"New governance concept"</p>
          </div>
          <div className="bg-card border border-accent/30 rounded-sm p-4">
            <p className="text-[10px] font-mono text-accent/70 uppercase mb-1">To</p>
            <p className="text-sm font-semibold text-foreground">"Emerging international infrastructure entering institutional validation"</p>
          </div>
        </div>
      </div>

      {/* Credibility Progression */}
      <div className="governance-card mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-accent" />
          <h3 className="text-[10px] font-mono font-semibold text-foreground uppercase tracking-wider">
            Institutional Credibility Score Progression
          </h3>
        </div>
        <div className="space-y-2">
          {PROGRESSION.map((p) => (
            <div key={p.phase} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-muted-foreground w-52 shrink-0 hidden md:block">{p.phase}</span>
              <div className="flex-1 bg-muted/20 rounded-full h-3 relative">
                <div className="absolute left-0 top-0 h-3 rounded-full bg-accent/50" style={{ width: `${p.score}%` }} />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground w-10 text-right">{p.score}</span>
              <span className="text-[10px] text-muted-foreground hidden lg:block w-44">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Module Index */}
      <div className="governance-card">
        <h3 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">16-Module Index</h3>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m) => (
            <a key={m.id} href={`#module-${m.id}`} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition-colors px-2 py-1.5 border border-border/50 rounded-sm bg-card/30">
              <span className="text-[10px] font-mono text-accent/50 w-5">{m.id}.</span>
              <m.icon className="h-3 w-3 shrink-0" />
              <span className="truncate">{m.title}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>

    {/* 16 Modules */}
    {MODULES.map((m) => (
      <Section key={m.id} id={`module-${m.id}`} title={`Module ${m.id} — ${m.title}`} className="border-t border-border scroll-mt-20">
        <div className="governance-card">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
              <m.icon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">Objective</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{m.objective}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="h-3 w-3" /> Implementation Actions
            </h4>
            <ul className="space-y-1.5">
              {m.actions.map((a) => (
                <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />{a}
                </li>
              ))}
            </ul>
          </div>

          {/* Artifacts */}
          <div className="mb-5">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="h-3 w-3" /> Required Artifacts
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {m.artifacts.map((a) => (
                <span key={a} className="text-[10px] font-mono text-muted-foreground bg-card border border-border rounded-sm px-2.5 py-1">{a}</span>
              ))}
            </div>
          </div>

          {/* Stakeholders */}
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

          {/* Psychology + Legitimacy + IP — 3-column grid */}
          <div className="grid gap-3 sm:grid-cols-3 mb-5">
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><Eye className="h-2.5 w-2.5" /> Psychology Impact</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed italic">{m.psychologyImpact}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><Shield className="h-2.5 w-2.5" /> Legitimacy Contribution</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.legitimacyContribution}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-3">
              <p className="text-[9px] font-mono text-accent/60 uppercase mb-1 flex items-center gap-1"><TrendingUp className="h-2.5 w-2.5" /> IP Valuation Contribution</p>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{m.ipContribution}</p>
            </div>
          </div>

          {/* Risks */}
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

          {/* Related Pages */}
          {m.relatedPages && m.relatedPages.length > 0 && (
            <div>
              <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ArrowRight className="h-3 w-3" /> Related Institutional Pages
              </h4>
              <div className="flex flex-wrap gap-2">
                {m.relatedPages.map((rp) => (
                  <Link key={rp.path} to={rp.path} className="text-[10px] font-mono text-accent hover:text-accent/80 border border-accent/20 rounded-sm px-3 py-1.5 transition-colors hover:bg-accent/5">
                    {rp.label} →
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    ))}

    {/* Success Condition */}
    <Section title="Success Condition" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          After full 16-module execution, an external evaluator should conclude:
        </p>
        <blockquote className="border-l-2 border-accent/50 pl-4 py-2 bg-card/50 rounded-r-sm">
          <p className="text-sm font-serif font-semibold text-foreground italic">
            "GRGF™ appears institutionally credible, operationally demonstrable, standards-aligned, and ready for pilot engagement."
          </p>
        </blockquote>
        <div className="mt-6 bg-background border border-border rounded-sm p-3">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase mb-1">Analytical Basis</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Module design derived from historical patterns of Internet governance evolution, ISO standards creation, 
            global reporting frameworks (GRI), digital identity ecosystems, and multilateral DPI programs (World Bank, OECD, UN DPGA).
          </p>
        </div>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default UnifiedTransformation;
