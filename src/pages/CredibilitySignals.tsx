import { PageHeader, Section } from "@/components/PageComponents";
import {
  Shield, Users, Activity, BookOpen, Building,
  CheckCircle, Clock, Target, AlertTriangle, TrendingUp,
  FileText, Globe, Award, Eye, Scale,
} from "lucide-react";

/* ── Types ── */
interface ModuleData {
  id: number;
  signal: string;
  icon: React.ElementType;
  objective: string;
  actions: string[];
  artifacts: string[];
  stakeholders: string[];
  psychologyImpact: string;
  risks: { risk: string; mitigation: string }[];
  credibilityIncrease: { from: number; to: number; label: string };
}

/* ── Data ── */
const MODULES: ModuleData[] = [
  {
    id: 1,
    signal: "Independent Validation Signal",
    icon: Shield,
    objective:
      "Establish external verification of GRGF™'s technical integrity and governance soundness through independent third-party assessment, eliminating reliance on self-asserted credibility.",
    actions: [
      "Commission independent architecture review by accredited cybersecurity firm (ISO 27001 certified)",
      "Engage governance stress-testing through academic policy laboratory (simulated adversarial scenarios)",
      "Publish audit scope, methodology, and evaluator credentials prior to assessment",
      "Complete four-phase validation: Architecture Review → Penetration Test → Policy Logic Audit → Ethics Review",
      "Publish full findings in an open-access Validation Report with executive summary",
      "Establish recurring annual re-validation cycle with rotating evaluators",
    ],
    artifacts: [
      "Validation Scope & Terms of Reference",
      "Evaluator Selection Criteria (independence, accreditation, conflict-of-interest policy)",
      "Architecture Conformance Report",
      "Security Assessment Report (penetration test findings)",
      "Policy Logic Conformance Report",
      "Governance Ethics Assessment Report",
      "Annual Re-Validation Schedule",
    ],
    stakeholders: [
      "Accredited cybersecurity assessment firms",
      "Academic governance research laboratories",
      "Independent policy audit specialists",
      "International standards conformance bodies",
    ],
    psychologyImpact:
      "Shifts evaluator perception from 'unverified proposal' to 'independently assessed infrastructure.' Removes the primary objection — lack of external scrutiny — and positions GRGF™ alongside audited multilateral systems.",
    risks: [
      { risk: "Audit reveals architectural deficiencies", mitigation: "Pre-audit internal review; treat findings as improvement roadmap, not failure" },
      { risk: "Evaluator independence questioned", mitigation: "Publish conflict-of-interest declarations; rotate evaluators annually" },
      { risk: "Findings delayed beyond timeline", mitigation: "Parallel evaluation tracks; interim status reports at 50% completion" },
    ],
    credibilityIncrease: { from: 10, to: 35, label: "+25 points" },
  },
  {
    id: 2,
    signal: "Multi-Stakeholder Coalition Signal",
    icon: Users,
    objective:
      "Demonstrate that GRGF™ is supported by a diverse coalition of academic, policy, and civil society participants — not a single-origin initiative.",
    actions: [
      "Establish Advisory Council with 9–15 members across governance, technology, and public administration",
      "Recruit academic partners from 3+ regions (governance faculties, public policy schools)",
      "Engage 2–3 governance think tanks as institutional review partners",
      "Formalize participation charter with role definitions, term limits, and neutrality commitments",
      "Publish coalition membership roster with institutional affiliations",
      "Launch quarterly Advisory Council briefings with published summaries",
    ],
    artifacts: [
      "Advisory Council Charter & Governance Rules",
      "Participation Invitation Framework (engagement scripts per category)",
      "Coalition Membership Roster (public-facing)",
      "Quarterly Briefing Summaries",
      "Stakeholder Onboarding Guide",
      "Regional Representation Balance Matrix",
    ],
    stakeholders: [
      "University governance departments (3+ regions)",
      "Policy research institutes (Chatham House, Brookings, CIGI equivalent)",
      "Public administration schools",
      "Civil society governance organizations",
      "Regional DPI experts (Africa, Asia-Pacific, Americas, Europe)",
    ],
    psychologyImpact:
      "Transforms perception from 'single-founder project' to 'multi-institutional coalition.' International reviewers assess coalition breadth as a proxy for legitimacy — diverse participation signals consensus-readiness.",
    risks: [
      { risk: "Coalition perceived as nominal (names without engagement)", mitigation: "Require active participation metrics; publish contribution records" },
      { risk: "Regional imbalance undermines credibility", mitigation: "Mandate minimum regional representation quotas in charter" },
      { risk: "Advisory Council captured by single interest group", mitigation: "Anti-capture clause in charter; term limits; rotation requirements" },
    ],
    credibilityIncrease: { from: 35, to: 55, label: "+20 points" },
  },
  {
    id: 3,
    signal: "Operational Proof Signal",
    icon: Activity,
    objective:
      "Provide demonstrable evidence that GRGF™ functions as designed through sandbox deployments and simulated institutional workflows — without requiring national adoption.",
    actions: [
      "Deploy sandbox environment with simulated country profile (Kaledonia — fictional sovereign state)",
      "Execute full governance record lifecycle: Draft → Review → Approved → Closed",
      "Generate verification case studies with measurable governance KPIs",
      "Produce demonstration datasets with hash-sealed records and audit trails",
      "Publish certification simulation results (policy determinism rate, integrity verification rate)",
      "Record institutional workflow demonstrations as reviewable documentation",
    ],
    artifacts: [
      "Sandbox Deployment Architecture Document",
      "Kaledonia Country Simulation Profile",
      "Governance Record Lifecycle Demonstration (end-to-end)",
      "Verification Case Studies (3–5 scenarios)",
      "Demonstration Datasets (sample records, audit trails, hash manifests)",
      "KPI Results: Policy Determinism Rate, Integrity Verification Success, Audit Reconstruction Time",
      "Certification Simulation Report",
    ],
    stakeholders: [
      "GRGF™ Technical Review Committee",
      "Sandbox deployment engineering team",
      "Independent evaluation observers",
      "Institutional pilot evaluation reviewers",
    ],
    psychologyImpact:
      "Eliminates the 'vaporware' objection. Operational evidence — even simulated — demonstrates that the system produces measurable outputs. Evaluators treat demonstrated systems differently from documented proposals.",
    risks: [
      { risk: "Simulation dismissed as non-authoritative", mitigation: "Label all outputs as 'demonstration environment'; never claim operational authority" },
      { risk: "KPI results below expectations", mitigation: "Use findings to calibrate system before formal evaluation" },
      { risk: "Sandbox confused with production system", mitigation: "Persistent simulation banners; audit-safe disclaimers on all outputs" },
    ],
    credibilityIncrease: { from: 55, to: 72, label: "+17 points" },
  },
  {
    id: 4,
    signal: "Academic Legitimacy Signal",
    icon: BookOpen,
    objective:
      "Establish GRGF™ within academic discourse through peer-reviewed publications, research collaborations, and conference presentations — building citation-based legitimacy.",
    actions: [
      "Publish 2–3 governance working papers in open-access repositories (SSRN, arXiv)",
      "Submit peer-reviewed article to governance or DPI journal (Government Information Quarterly, Digital Government)",
      "Establish research collaboration with 2+ university governance departments",
      "Present at 1–2 international governance conferences (ICEGOV, OECD GovTech, IGF)",
      "Launch 'GRGF™ Working Paper Series' with editorial governance and DOI registration",
      "Define research themes: governance integrity infrastructure, append-only institutional records, anti-capture mechanisms",
    ],
    artifacts: [
      "Working Paper #1: Governance Integrity Infrastructure — A Structural Framework",
      "Working Paper #2: Anti-Capture Mechanisms in Digital Public Infrastructure",
      "Peer-Reviewed Journal Submission (target: Government Information Quarterly)",
      "Conference Presentation Deck (ICEGOV / OECD format)",
      "Research Collaboration MOUs with university partners",
      "GRGF™ Working Paper Series Editorial Policy",
      "Citation & Attribution Guidelines",
    ],
    stakeholders: [
      "University governance research departments",
      "Journal editorial boards (DPI, public administration)",
      "International conference program committees",
      "Academic peer reviewers",
      "Open-access repository administrators",
    ],
    psychologyImpact:
      "Academic publication creates a citation trail that institutional evaluators rely on for due diligence. Peer-reviewed presence signals that the framework has survived scholarly scrutiny — a prerequisite for 'serious engagement' classification.",
    risks: [
      { risk: "Peer review rejection", mitigation: "Target multiple journals; use working papers as pre-publication credibility builder" },
      { risk: "Academic neutrality questioned", mitigation: "Co-author with independent researchers; disclose all affiliations" },
      { risk: "Research themes perceived as self-promotional", mitigation: "Frame as governance infrastructure research, not GRGF™ advocacy" },
    ],
    credibilityIncrease: { from: 72, to: 85, label: "+13 points" },
  },
  {
    id: 5,
    signal: "Neutral Institutional Identity Signal",
    icon: Building,
    objective:
      "Transform GRGF™ from a founder-identified initiative into an independent institutional entity with transparent governance, role separation, and neutrality safeguards.",
    actions: [
      "Establish independent foundation structure (Swiss Verein or Canadian not-for-profit)",
      "Publish founding governance charter with authority separation model",
      "Define role separation: Executive Director, Standards Committee, Advisory Council, Compliance Oversight",
      "Implement transparency mechanisms: public meeting minutes, annual governance report, financial disclosure",
      "Apply institutional branding principles: remove founder-centric language; position as ecosystem",
      "Publish authority minimization framework: GRGF™ verifies, does not govern; supports, does not enforce",
    ],
    artifacts: [
      "Foundation Charter & Articles of Incorporation",
      "Governance Structure Diagram (authority separation)",
      "Role Separation Model (Executive, Standards, Advisory, Compliance)",
      "Annual Governance Transparency Report Template",
      "Institutional Branding Guidelines (neutrality positioning)",
      "Authority Minimization Language Guide",
      "Anti-Capture Governance Mechanics (AC-01 through AC-05 codification)",
    ],
    stakeholders: [
      "Foundation legal counsel (international governance law)",
      "Governance charter drafting committee",
      "Independent compliance oversight appointees",
      "Institutional communications specialists",
    ],
    psychologyImpact:
      "Institutional identity is the single strongest credibility signal for multilateral evaluators. A formally constituted, transparently governed entity is categorized differently from an individual initiative — regardless of technical merit.",
    risks: [
      { risk: "Foundation perceived as shell entity", mitigation: "Publish detailed governance records; active Advisory Council with published outputs" },
      { risk: "Founder influence persists despite structural separation", mitigation: "Term limits; independent chair; published conflict-of-interest policy" },
      { risk: "Jurisdictional choice questioned", mitigation: "Select neutrality-aligned jurisdiction (Switzerland, Canada); publish rationale" },
    ],
    credibilityIncrease: { from: 85, to: 95, label: "+10 points" },
  },
];

const CREDIBILITY_PROGRESSION = [
  { phase: "Baseline (Pre-Signals)", score: 10, status: "Monitor initiative" },
  { phase: "After Signal 1 (Validation)", score: 35, status: "Acknowledged infrastructure" },
  { phase: "After Signal 2 (Coalition)", score: 55, status: "Institutional interest" },
  { phase: "After Signal 3 (Proof)", score: 72, status: "Technical credibility" },
  { phase: "After Signal 4 (Academic)", score: 85, status: "Scholarly recognition" },
  { phase: "After Signal 5 (Identity)", score: 95, status: "Serious engagement candidate" },
];

/* ── Component ── */
const CredibilitySignals = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Institutional Credibility Signal Generator"
      subtitle="Five measurable credibility signals designed to transition GRGF™ from 'monitor initiative' to 'serious engagement candidate' in multilateral evaluator scoring."
    />

    {/* Credibility Score Progression Summary */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="h-4 w-4 text-accent" />
          <h3 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider">
            Credibility Score Progression Model
          </h3>
        </div>
        <div className="space-y-2.5">
          {CREDIBILITY_PROGRESSION.map((p) => (
            <div key={p.phase} className="flex items-center gap-3">
              <span className="text-[10px] font-mono text-muted-foreground w-48 shrink-0 hidden sm:block">{p.phase}</span>
              <div className="flex-1 bg-muted/20 rounded-full h-3.5 relative">
                <div
                  className="absolute left-0 top-0 h-3.5 rounded-full bg-accent/50 transition-all"
                  style={{ width: `${p.score}%` }}
                />
              </div>
              <span className="text-[10px] font-mono font-bold text-foreground w-10 text-right">{p.score}/100</span>
              <span className="text-[10px] text-muted-foreground hidden md:block w-44">{p.status}</span>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-muted-foreground mt-4 italic">
          Combined signal deployment targets evaluator re-classification from "Monitor initiative" → "Serious engagement candidate."
        </p>
      </div>
    </Section>

    {/* Five Modules */}
    {MODULES.map((m) => (
      <Section
        key={m.id}
        title={`Signal ${m.id} — ${m.signal}`}
        className="border-t border-border"
      >
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
          <div className="mb-6">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Target className="h-3 w-3" /> Actions Required
            </h4>
            <ul className="space-y-1.5">
              {m.actions.map((a) => (
                <li key={a} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Artifacts */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="h-3 w-3" /> Artifacts Produced
            </h4>
            <div className="grid gap-1.5 sm:grid-cols-2">
              {m.artifacts.map((a) => (
                <div key={a} className="flex items-start gap-2 text-xs text-muted-foreground bg-card border border-border rounded-sm px-3 py-2">
                  <FileText className="h-3 w-3 text-accent/50 shrink-0 mt-0.5" />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* Stakeholders */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Globe className="h-3 w-3" /> Stakeholders Involved
            </h4>
            <div className="flex flex-wrap gap-2">
              {m.stakeholders.map((s) => (
                <span key={s} className="text-[10px] font-mono text-muted-foreground bg-muted/30 border border-border rounded-sm px-2.5 py-1">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Psychology Impact */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Eye className="h-3 w-3" /> Institutional Psychology Impact
            </h4>
            <div className="bg-background border border-border rounded-sm px-4 py-3">
              <p className="text-xs text-muted-foreground leading-relaxed italic">{m.psychologyImpact}</p>
            </div>
          </div>

          {/* Risks & Mitigation */}
          <div className="mb-6">
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <AlertTriangle className="h-3 w-3" /> Risks & Mitigation
            </h4>
            <div className="space-y-2">
              {m.risks.map((r) => (
                <div key={r.risk} className="grid sm:grid-cols-2 gap-2 bg-card border border-border rounded-sm p-3">
                  <div>
                    <p className="text-[9px] font-mono text-destructive/70 uppercase mb-0.5">Risk</p>
                    <p className="text-xs text-muted-foreground">{r.risk}</p>
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-accent/70 uppercase mb-0.5">Mitigation</p>
                    <p className="text-xs text-muted-foreground">{r.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Credibility Score Increase */}
          <div>
            <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Award className="h-3 w-3" /> Credibility Score Impact
            </h4>
            <div className="flex items-center gap-3 bg-background border border-border rounded-sm px-4 py-3">
              <div className="flex-1 bg-muted/20 rounded-full h-4 relative">
                <div
                  className="absolute left-0 top-0 h-4 rounded-full bg-muted/30"
                  style={{ width: `${m.credibilityIncrease.to}%` }}
                />
                <div
                  className="absolute top-0 h-4 rounded-full bg-accent/60"
                  style={{ left: `${m.credibilityIncrease.from}%`, width: `${m.credibilityIncrease.to - m.credibilityIncrease.from}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-accent">{m.credibilityIncrease.label}</span>
              <span className="text-[10px] font-mono text-muted-foreground">
                ({m.credibilityIncrease.from} → {m.credibilityIncrease.to}/100)
              </span>
            </div>
          </div>
        </div>
      </Section>
    ))}

    {/* Combined Impact */}
    <Section title="Combined Signal Impact Assessment" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Sequential deployment of all five credibility signals produces a cumulative shift in institutional evaluator perception:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="bg-card border border-border rounded-sm p-4">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase mb-1">Before Signals</p>
            <p className="text-sm font-semibold text-foreground">"Monitor initiative"</p>
            <p className="text-xs text-muted-foreground mt-1">Evaluator score: 10/100</p>
          </div>
          <div className="bg-card border border-accent/30 rounded-sm p-4">
            <p className="text-[10px] font-mono text-accent/70 uppercase mb-1">After All Five Signals</p>
            <p className="text-sm font-semibold text-foreground">"Serious engagement candidate"</p>
            <p className="text-xs text-accent mt-1">Evaluator score: 95/100</p>
          </div>
        </div>
        <div className="mt-4 bg-background border border-border rounded-sm p-3">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase mb-1">Analytical Basis</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Scoring methodology derived from historical patterns of global standards emergence (ISO, Internet governance, OECD frameworks) 
            and multilateral development bank evaluation criteria (World Bank GovTech Maturity Index, OECD DPI Safeguards).
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

export default CredibilitySignals;
