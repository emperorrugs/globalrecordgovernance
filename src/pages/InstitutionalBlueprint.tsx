import { Link } from "react-router-dom";
import {
  Shield, Users, Search, Globe, Scale, Landmark, Award,
  FileText, BarChart3, ArrowRight, CheckCircle, Building,
  BookOpen, Lock, Eye, Network, Handshake, Target,
  AlertTriangle, Briefcase, GraduationCap, TrendingUp,
  Layers, Flag, ChevronDown
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

/* ── Layout helpers ── */
const Sec = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-14 px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{children}</p>
);

const ModuleHeader = ({ number, title, subtitle, icon: Icon }: { number: string; title: string; subtitle: string; icon: any }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-3">
      <span className="w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center text-sm font-mono font-bold">{number}</span>
      <Icon className="h-5 w-5 text-accent" />
    </div>
    <h2 className="institutional-heading text-heading-1 font-semibold">{title}</h2>
    <p className="mt-2 text-body text-muted-foreground leading-relaxed max-w-3xl">{subtitle}</p>
  </div>
);

const DeliverableCard = ({ title, items }: { title: string; items: string[] }) => (
  <div className="governance-card-elevated">
    <h4 className="font-serif text-heading-3 font-semibold mb-3 flex items-center gap-2">
      <FileText className="h-4 w-4 text-accent" /> {title}
    </h4>
    <ul className="space-y-2">
      {items.map(item => (
        <li key={item} className="flex items-start gap-2 text-caption text-muted-foreground">
          <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ActionItem = ({ title, description }: { title: string; description: string }) => (
  <div className="border-l-2 border-accent/30 pl-4 py-2">
    <h5 className="font-serif text-sm font-semibold mb-1">{title}</h5>
    <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const RiskRow = ({ risk, mitigation }: { risk: string; mitigation: string }) => (
  <div className="grid md:grid-cols-2 gap-3 py-3 border-b border-border/40 last:border-0">
    <div className="flex items-start gap-2">
      <AlertTriangle className="h-3.5 w-3.5 text-destructive/70 shrink-0 mt-0.5" />
      <span className="text-xs text-muted-foreground">{risk}</span>
    </div>
    <div className="flex items-start gap-2">
      <Shield className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
      <span className="text-xs text-muted-foreground">{mitigation}</span>
    </div>
  </div>
);

/* ── Module Navigation ── */
const modules = [
  { id: "m1", num: "01", label: "Legitimacy" },
  { id: "m2", num: "02", label: "Coalition" },
  { id: "m3", num: "03", label: "Validation" },
  { id: "m4", num: "04", label: "Proof" },
  { id: "m5", num: "05", label: "Sovereignty" },
  { id: "m6", num: "06", label: "Standards" },
  { id: "m7", num: "07", label: "Signaling" },
  { id: "m8", num: "08", label: "Positioning" },
  { id: "m9", num: "09", label: "Timeline" },
  { id: "m10", num: "10", label: "Metrics" },
];

/* ── Page ── */
const InstitutionalBlueprint = () => {
  return (
    <div>
      <SEOHead
        title="Institutional Gap-Closure Blueprint — GRGF"
        description="Complete execution framework eliminating institutional credibility gaps for Global Record Governance Framework. 10-module blueprint for legitimacy, validation, coalition formation, and standards-track positioning."
      />

      {/* ═══════ HERO ═══════ */}
      <header className="relative overflow-hidden border-b border-border px-6 py-24 md:py-32 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px),
                            repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px)`
        }} />
        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-sm font-mono text-accent uppercase tracking-widest mb-4">Master Execution Framework</p>
            <h1 className="institutional-heading font-semibold text-primary-foreground max-w-5xl" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
              Institutional Gap-Closure Blueprint
            </h1>
            <p className="mt-4 text-body-lg text-primary-foreground/60 max-w-3xl leading-relaxed">
              A 10-module execution framework transforming GRGF from founder-origin initiative into a globally credible, institutionally adoptable pre-standard governance infrastructure — ready for Government of Canada and World Bank review.
            </p>
          </FadeIn>

          {/* Gap indicators */}
          <FadeIn delay={200}>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { label: "Gaps Addressed", value: "10" },
                { label: "Execution Modules", value: "10" },
                { label: "Timeline", value: "12 Mo" },
                { label: "Target Score", value: "90/100" },
                { label: "Adoption Target", value: "60%" },
              ].map(({ label, value }) => (
                <div key={label} className="border border-primary-foreground/10 p-4 bg-primary-foreground/[0.02]">
                  <p className="text-overline font-mono text-primary-foreground/40 uppercase mb-1">{label}</p>
                  <p className="text-xl font-serif font-semibold text-accent">{value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Module nav */}
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-wrap gap-2">
              {modules.map(m => (
                <a key={m.id} href={`#${m.id}`} className="px-3 py-2 border border-primary-foreground/15 text-xs font-mono text-primary-foreground/70 hover:border-accent/50 hover:text-accent transition-all">
                  {m.num} {m.label}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══════ MODULE 1 — LEGITIMACY ARCHITECTURE ═══════ */}
      <Sec id="m1" className="border-b border-border">
        <ModuleHeader number="01" title="Legitimacy Architecture" subtitle="Transition GRGF from individual initiative to institutionally governed entity with independent oversight, anti-capture governance, and decision transparency." icon={Landmark} />
        
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <ActionItem title="Independent Foundation Structure" description="Establish GRGF as a registered non-profit foundation under Canadian federal incorporation. Board composition: minimum 7 members, majority independent, geographic diversity across 3+ regions. Founder retains inventor/architect role with no Board voting majority." />
            <ActionItem title="Charter Governance Framework" description="Publish Governance Charter v3.0 with codified anti-capture clauses (AC-01 through AC-05), term limits (3-year renewable once), mandatory independence disclosures, and conflict-of-interest protocols aligned with OECD governance standards." />
            <ActionItem title="Advisory Council Architecture" description="Multi-stakeholder advisory body: 5–7 members spanning former government CDOs, ISO/W3C standards veterans, academic governance researchers, and multilateral digital policy experts. Quarterly reporting cycle with published proceedings." />
            <ActionItem title="Decision Transparency Model" description="All governance decisions published within 30 days. Board minutes (redacted for privilege) publicly accessible. Annual Governance Transparency Report with independent verification. Decision audit trail maintained in GRGF's own append-only ledger." />
            <ActionItem title="Anti-Capture Governance Mechanics" description="Five codified clauses: AC-01 (No single entity >20% Board representation), AC-02 (Vendor independence mandate), AC-03 (Government non-interference guarantee), AC-04 (Standards process separation), AC-05 (Financial independence requirement). Independent compliance audit annually." />
          </div>
          <div className="space-y-4">
            <DeliverableCard title="Governance Artifacts" items={[
              "Governance Charter v3.0 with legal review",
              "Foundation incorporation documents",
              "Board Terms of Reference",
              "Advisory Council mandate & composition",
              "Anti-Capture Compliance Protocol",
              "Decision Transparency Policy",
              "Authority Separation Matrix",
              "Annual Governance Report template"
            ]} />
            <div className="governance-card-elevated bg-muted/30">
              <h4 className="font-serif text-sm font-semibold mb-3">Institutional Psychology</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">Governments and multilateral bodies assess credibility before content. The first 90 days must signal institutional maturity through governance restructuring, advisory diversity, and messaging discipline — not through technical demonstrations. Perception of independent governance is prerequisite to any substantive evaluation.</p>
            </div>
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 2 — GLOBAL COALITION FORMATION ═══════ */}
      <Sec id="m2" className="border-b border-border bg-muted/30">
        <ModuleHeader number="02" title="Global Coalition Formation" subtitle="Build a multi-stakeholder ecosystem of academic, policy, and institutional partners that transfers legitimacy through association — not through marketing." icon={Users} />

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Academic Partners", icon: GraduationCap, items: ["Digital governance research centres (2–3 universities)", "Public administration schools with DPI programs", "Co-authored research papers program", "Joint conference presentation pipeline"] },
            { title: "Policy Institutes", icon: BookOpen, items: ["Governance think tanks (Brookings, ODI, CGD)", "Regional development policy centres", "Standards body liaison partnerships", "Policy brief co-publication program"] },
            { title: "Institutional Partners", icon: Building, items: ["Former government CDO advisory network", "Multilateral development bank liaison offices", "Regional governance innovation hubs", "Civil society governance organizations"] },
          ].map(({ title, icon: Icon, items }) => (
            <div key={title} className="governance-card-elevated">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-heading-3 font-semibold mb-3">{title}</h4>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="governance-card-elevated mb-8">
          <h4 className="font-serif text-sm font-semibold mb-4">Phased Coalition Onboarding</h4>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { phase: "Months 1–2", title: "Seed Coalition", desc: "3–5 founding academic and advisory partners. Focus on governance research alignment and MOU signing." },
              { phase: "Months 3–4", title: "Expansion", desc: "Expand to 10+ partners across 3 regions. Launch co-research programs and joint working groups." },
              { phase: "Months 5–8", title: "Institutional Integration", desc: "Formalize partnership tiers (Observer, Associate, Partner). Begin standards body liaison relationships." },
              { phase: "Months 9–12", title: "Ecosystem Maturity", desc: "20+ institutional relationships. Active working groups. Published joint research. Conference presence." },
            ].map(({ phase, title, desc }) => (
              <div key={phase} className="border-l-2 border-accent/30 pl-3">
                <p className="text-overline font-mono text-accent uppercase mb-1">{phase}</p>
                <h5 className="text-xs font-semibold mb-1">{title}</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="governance-card-elevated bg-muted/30">
          <h4 className="font-serif text-sm font-semibold mb-3">Legitimacy Transfer Mechanisms</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">Coalition partners transfer credibility through five mechanisms: (1) Co-authored publications carrying institutional affiliations, (2) Advisory role participation visible on governance documentation, (3) Joint conference presentations at established venues, (4) Standards body liaisons through member organizations, (5) Formal endorsement of methodology (not the framework itself — maintaining neutrality).</p>
        </div>
      </Sec>

      {/* ═══════ MODULE 3 — INDEPENDENT VALIDATION SYSTEM ═══════ */}
      <Sec id="m3" className="border-b border-border">
        <ModuleHeader number="03" title="Independent Validation System" subtitle="Establish validation pathways that generate institutional confidence without requiring any government to commit to adoption. All evidence must originate from independent sources." icon={Search} />

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <ActionItem title="Third-Party Technical Audit" description="Engage an independent security and architecture firm (SOC 2 equivalent scope) to audit the six-layer model. Coverage: cryptographic integrity, federation protocol security, operational resilience, data minimization compliance. Publish full results regardless of outcome." />
            <ActionItem title="Academic Peer Review" description="Submit framework architecture paper to 2–3 governance or public administration journals. Commission independent academic review of the institutional design model. Publish all review outcomes transparently." />
            <ActionItem title="Governance Stress Testing" description="Design 5 stress scenarios: (1) Political transition continuity, (2) Cross-ministry record integrity under time pressure, (3) Federation node compromise recovery, (4) Anti-capture clause enforcement, (5) Omission detection under adversarial conditions." />
            <ActionItem title="Independent Evaluation Protocol" description="Publish formal Evidence Generation Protocol defining how validation artifacts are produced, verified, and published. All evidence must meet ISO-equivalent documentation standards. Third-party attestation required for all published results." />
          </div>
          <div>
            <DeliverableCard title="Validation Artifacts" items={[
              "Independent Technical Audit Report (published)",
              "Academic Peer Review Results (2–3 journals)",
              "Stress Test Report (5 scenarios, pass/fail)",
              "Evidence Generation Protocol v1.0",
              "Simulation Methodology Documentation",
              "Independent Assessment from governance advisory firm",
              "Conformance Testing Framework",
              "Validation Lifecycle Documentation"
            ]} />
            <div className="mt-4 governance-card-elevated">
              <h4 className="font-serif text-sm font-semibold mb-3">Measurable Evaluation Criteria</h4>
              <div className="space-y-2">
                {[
                  { metric: "Policy Determinism Rate", target: "100% identical outputs" },
                  { metric: "Audit Reconstruction Time", target: "< 30 minutes" },
                  { metric: "Integrity Verification", target: "> 99.99% success rate" },
                  { metric: "Stress Test Pass Rate", target: "5/5 scenarios passed" },
                  { metric: "Peer Review Acceptance", target: "≥ 1 journal acceptance" },
                ].map(({ metric, target }) => (
                  <div key={metric} className="flex justify-between text-xs border-b border-border/30 pb-1.5">
                    <span className="text-muted-foreground">{metric}</span>
                    <span className="font-mono text-accent">{target}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 4 — PROOF-OF-OPERATION ═══════ */}
      <Sec id="m4" className="border-b border-border bg-muted/30">
        <ModuleHeader number="04" title="Proof-of-Operation Framework" subtitle="Generate demonstrable operational evidence through sandbox deployments, realistic simulations, and measurable governance outcomes — without requiring production data." icon={Target} />

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-4">
            <ActionItem title="Sandbox Deployment" description="Deploy controlled sandbox environment demonstrating core GRGF capabilities: event capture, policy enforcement, audit reconstruction, omission detection, and verification API. Enable external evaluators to interact without production data." />
            <ActionItem title="Country Simulation Models" description="Design 3 realistic national deployment simulations: (1) Mid-sized parliamentary democracy (Canadian model), (2) Federal developing nation (e.g., Nigerian model), (3) Small island developing state (SIDS model). Each includes governance context, deployment timeline, cost projections, and institutional impact analysis." />
            <ActionItem title="Verification Case Studies" description="Produce 3 detailed case studies: (1) Cross-ministry record integrity during political transition, (2) Audit reconstruction under regulatory time pressure, (3) Omission detection in policy implementation tracking. Include datasets, example records, and certification scenarios." />
          </div>
          <div className="space-y-4">
            <DeliverableCard title="Operational Evidence Package" items={[
              "Live sandbox environment (external access)",
              "3 country simulation reports with full datasets",
              "3 verification case studies (published)",
              "Institutional workflow demonstration videos",
              "Example governance records & certification scenarios",
              "Sandbox interaction logs & outcome documentation",
              "Measurable governance outcomes report"
            ]} />
            <div className="governance-card-elevated">
              <h4 className="font-serif text-sm font-semibold mb-3">Governance Outcomes Measured</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { metric: "Audit Reconstruction", value: "< 30 min" },
                  { metric: "Omission Detection", value: "Structural" },
                  { metric: "Integrity Rate", value: "99.99%+" },
                  { metric: "Policy Determinism", value: "100%" },
                ].map(({ metric, value }) => (
                  <div key={metric} className="text-center p-3 bg-muted/50 border border-border/50">
                    <p className="text-lg font-serif font-semibold text-accent">{value}</p>
                    <p className="text-overline text-muted-foreground/60">{metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 5 — SOVEREIGNTY SAFEGUARDS ═══════ */}
      <Sec id="m5" className="border-b border-border">
        <ModuleHeader number="05" title="Political & Sovereignty Safeguards" subtitle="Engineer adoption framing that eliminates political resistance through sovereignty-preserving language, voluntary architecture, and national ownership guarantees." icon={Flag} />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="governance-card-elevated">
            <h4 className="font-serif text-sm font-semibold mb-4 flex items-center gap-2">
              <Scale className="h-4 w-4 text-accent" /> Sovereignty-Preserving Design Principles
            </h4>
            <div className="space-y-3">
              {[
                { principle: "National Data Sovereignty", desc: "All governance data remains under national jurisdiction. No cross-border data transfer without explicit sovereign consent." },
                { principle: "Voluntary Adoption", desc: "No nation is evaluated, ranked, or penalised for non-adoption. Participation is entirely elective and reversible." },
                { principle: "National Ownership Guarantee", desc: "Deploying nations own their infrastructure nodes, data, and configurations. GRGF provides architecture, not operations." },
                { principle: "Opt-In Federation", desc: "International verification requires mutual consent. No nation's data is visible to federation without explicit authorization." },
                { principle: "Jurisdiction Neutrality", desc: "Framework governance is neutral to national legal systems. Compliance with local law always takes precedence." },
              ].map(({ principle, desc }) => (
                <div key={principle} className="border-l-2 border-accent/30 pl-3">
                  <h5 className="text-xs font-semibold">{principle}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="governance-card-elevated">
              <h4 className="font-serif text-sm font-semibold mb-3">Diplomatic Positioning Guide</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-overline font-mono text-destructive/70 uppercase mb-1">Avoid</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>× "Global standard that nations must adopt"</li>
                    <li>× "International oversight mechanism"</li>
                    <li>× "Accountability enforcement system"</li>
                    <li>× Language implying external authority</li>
                  </ul>
                </div>
                <div>
                  <p className="text-overline font-mono text-accent uppercase mb-1">Use Instead</p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>✓ "Sovereign-compatible governance infrastructure"</li>
                    <li>✓ "Voluntary institutional trust layer"</li>
                    <li>✓ "National governance capacity enhancement"</li>
                    <li>✓ "Interoperable verification backbone"</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="governance-card-elevated bg-muted/30">
              <h4 className="font-serif text-sm font-semibold mb-3">Risk Mitigation Messaging</h4>
              <RiskRow risk="Perceived as external oversight mechanism" mitigation="Emphasize non-enforcement mandate; publish Neutrality Declaration; ensure all comms reference 'complementary infrastructure'" />
              <RiskRow risk="Data sovereignty concerns" mitigation="All data remains under national jurisdiction; no cross-border transfer without consent; publish Data Sovereignty Guarantee" />
              <RiskRow risk="Political framing as conditionality tool" mitigation="No rankings, no evaluations, no league tables; voluntary opt-in; reversible participation" />
            </div>
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 6 — STANDARDS-FORMATION PATHWAY ═══════ */}
      <Sec id="m6" className="border-b border-border bg-muted/30">
        <ModuleHeader number="06" title="Standards-Formation Pathway" subtitle="Map GRGF's evolution into an emerging global standard based on historical patterns of successful international standards emergence (ISO, W3C, ITU-T models)." icon={Award} />

        <div className="mb-10">
          <div className="governance-card-elevated mb-8">
            <h4 className="font-serif text-sm font-semibold mb-6">Standards Evolution Lifecycle</h4>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: "Phase 1", title: "Pre-Standard", desc: "Technical specification published. Community of practice formed. Working group established.", status: "Active" },
                { phase: "Phase 2", title: "Draft Standard", desc: "Formal specification submitted to standards body. Public comment period. Technical review.", status: "Planned" },
                { phase: "Phase 3", title: "Committee Draft", desc: "Standards committee review. Cross-reference with existing standards. Conformance testing framework.", status: "Future" },
                { phase: "Phase 4", title: "Draft International Standard", desc: "International ballot. National body comments. Technical resolution of objections.", status: "Future" },
                { phase: "Phase 5", title: "Published Standard", desc: "Formal adoption. Certification ecosystem. Maintenance and revision cycle.", status: "Future" },
              ].map(({ phase, title, desc, status }) => (
                <div key={phase} className={`border-t-4 ${status === "Active" ? "border-t-accent" : "border-t-border"} pt-4`}>
                  <p className="text-overline font-mono text-accent uppercase mb-1">{phase}</p>
                  <h5 className="text-xs font-semibold mb-1">{title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  <span className={`inline-block mt-2 px-2 py-0.5 text-[10px] font-mono uppercase ${status === "Active" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="governance-card-elevated">
              <h4 className="font-serif text-sm font-semibold mb-3">Standards Body Engagement Strategy</h4>
              <div className="space-y-2">
                {[
                  { body: "ISO TC 307", focus: "Blockchain/DLT governance specifications", action: "Liaison status → Working group contribution" },
                  { body: "ITU-T SG17", focus: "Security standards for governance systems", action: "Observer → Study group participation" },
                  { body: "W3C", focus: "Verifiable credentials for governance events", action: "Community group → Working group proposal" },
                  { body: "OECD CDEP", focus: "Digital government policy alignment", action: "Technical briefing → Policy paper contribution" },
                ].map(({ body, focus, action }) => (
                  <div key={body} className="flex gap-3 text-xs border-b border-border/30 pb-2">
                    <span className="font-mono text-accent font-semibold whitespace-nowrap">{body}</span>
                    <div>
                      <p className="text-muted-foreground">{focus}</p>
                      <p className="text-muted-foreground/60 mt-0.5">{action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <DeliverableCard title="Standards Artifacts" items={[
              "Technical Specification v1.0 (public)",
              "Conformance Testing Framework",
              "Version Governance Model",
              "Working Group Charter Template",
              "Standards Proposal Document",
              "Public Comment Response Protocol",
              "Cross-Reference Matrix (ISO/ITU/W3C)"
            ]} />
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 7 — INSTITUTIONAL SIGNALING ═══════ */}
      <Sec id="m7" className="border-b border-border">
        <ModuleHeader number="07" title="Institutional Signaling System" subtitle="Design credibility indicators visible to external institutional observers — advisory board visibility, research program, transparency dashboards, and participation markers." icon={Eye} />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="governance-card-elevated">
            <h4 className="font-serif text-sm font-semibold mb-4">Credibility Signal Checklist</h4>
            <div className="space-y-2.5">
              {[
                { signal: "Independent Governance Board published", status: "In Progress", priority: "Critical" },
                { signal: "Advisory Council with named members", status: "Formation", priority: "Critical" },
                { signal: "Academic research partnership published", status: "Planned", priority: "High" },
                { signal: "Independent technical audit completed", status: "Planned", priority: "High" },
                { signal: "Annual Governance Transparency Report", status: "Planned", priority: "High" },
                { signal: "Standards body liaison/observer status", status: "Planned", priority: "Medium" },
                { signal: "Published peer-reviewed research", status: "Planned", priority: "Medium" },
                { signal: "Conference presentations (2+)", status: "Planned", priority: "Medium" },
                { signal: "Certification pilot with institutional partner", status: "Planned", priority: "Medium" },
                { signal: "Transparency dashboard (live)", status: "Active", priority: "Low" },
              ].map(({ signal, status, priority }) => (
                <div key={signal} className="flex items-center gap-3 text-xs">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${priority === "Critical" ? "bg-destructive" : priority === "High" ? "bg-accent" : priority === "Medium" ? "bg-muted-foreground/50" : "bg-muted-foreground/30"}`} />
                  <span className="text-muted-foreground flex-1">{signal}</span>
                  <span className="font-mono text-muted-foreground/50 text-[10px]">{status}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="governance-card-elevated">
              <h4 className="font-serif text-sm font-semibold mb-3">Perception Transformation Plan</h4>
              <div className="space-y-3">
                {[
                  { from: "Founder-led project", to: "Independently governed institution", mechanism: "Board publication, charter, separation of roles" },
                  { from: "Conceptual proposal", to: "Validated operational framework", mechanism: "Audit results, simulation reports, case studies" },
                  { from: "National project", to: "International governance initiative", mechanism: "Multi-regional coalition, standards body participation" },
                  { from: "New idea", to: "Emerging inevitable standard", mechanism: "Historical precedent alignment, ecosystem narrative" },
                ].map(({ from, to, mechanism }) => (
                  <div key={from} className="border-b border-border/30 pb-2.5">
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <span className="text-destructive/60 line-through">{from}</span>
                      <ArrowRight className="h-3 w-3 text-accent" />
                      <span className="text-accent font-semibold">{to}</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground/60">{mechanism}</p>
                  </div>
                ))}
              </div>
            </div>
            <DeliverableCard title="Signaling Outputs" items={[
              "Research Paper Program (2–3 papers/year)",
              "Annual Governance Report",
              "Institutional Participation Registry",
              "Advisory Board Publication Strategy",
              "Conference Presentation Calendar",
              "Transparency Dashboard (live metrics)"
            ]} />
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 8 — WEBSITE POSITIONING ═══════ */}
      <Sec id="m8" className="border-b border-border bg-muted/30">
        <ModuleHeader number="08" title="Website Positioning Framework" subtitle="Transform digital presence from 'new framework proposal' to 'emerging international governance infrastructure' — communicating institutional maturity through structure, tone, and evidence." icon={Globe} />

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="governance-card-elevated">
            <h4 className="font-serif text-sm font-semibold mb-4">Structural Content Principles</h4>
            <div className="space-y-3">
              {[
                { principle: "Evidence-First Architecture", desc: "Every claim links to a verifiable document, audit result, or tool output. No unsupported assertions." },
                { principle: "Institutional Narrative Model", desc: "Content structured as: Problem → Evidence → Architecture → Validation → Adoption Pathway. No promotional language." },
                { principle: "No Superlatives Policy", desc: "Prohibited: 'revolutionary', 'game-changing', 'first ever'. Required: 'structured', 'verified', 'independently assessed'." },
                { principle: "Measured Institutional Tone", desc: "Voice mirrors World Bank technical reports and OECD policy papers — not startup marketing or tech journalism." },
                { principle: "Legitimacy Signal Placement", desc: "Every page includes: governance stage indicator, independent audit status, responsible disclosure contact, and IP attribution." },
              ].map(({ principle, desc }) => (
                <div key={principle} className="border-l-2 border-accent/30 pl-3">
                  <h5 className="text-xs font-semibold">{principle}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="governance-card-elevated">
            <h4 className="font-serif text-sm font-semibold mb-4">Adoption Pathway Visualization</h4>
            <div className="space-y-3">
              {[
                { step: "01", title: "Discover", desc: "Institutional problem articulation → evidence of governance gaps → GRGF positioning" },
                { step: "02", title: "Evaluate", desc: "Architecture review → compliance mapping → independent validation results → risk assessment" },
                { step: "03", title: "Engage", desc: "Readiness assessment → institutional briefing → controlled access due diligence" },
                { step: "04", title: "Pilot", desc: "Sandbox deployment → controlled evaluation → measurable outcomes → certification" },
                { step: "05", title: "Adopt", desc: "National deployment → federation participation → ongoing compliance → re-certification" },
              ].map(({ step, title, desc }) => (
                <div key={step} className="flex gap-3">
                  <span className="text-accent font-mono font-bold text-sm">{step}</span>
                  <div>
                    <h5 className="text-xs font-semibold">{title}</h5>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      {/* ═══════ MODULE 9 — 12-MONTH TIMELINE ═══════ */}
      <Sec id="m9" className="border-b border-border">
        <ModuleHeader number="09" title="12-Month Execution Timeline" subtitle="Month-by-month actions with artifacts created, institutions engaged, validation milestones, perception shifts, and credibility score progression." icon={BarChart3} />

        <div className="space-y-0">
          {[
            { q: "Q1 (Months 1–3)", title: "Legitimacy Foundation", score: "15 → 35", prob: "5% → 12%", items: [
              "M1: Publish Governance Charter v2.0 · Appoint Advisory Council · Publish Neutrality Declaration",
              "M2: Sign first academic MOU · Commission independent assessment · Complete messaging audit",
              "M3: Publish assessment results · Submit architecture paper · Foundation incorporation filed"
            ]},
            { q: "Q2 (Months 4–6)", title: "Validation & Proof", score: "35 → 55", prob: "12% → 25%", items: [
              "M4: Deploy sandbox · Engage audit firm · Complete simulation design",
              "M5: Execute 3 simulations · Publish Evidence Protocol v1.0 · Launch case study program",
              "M6: Publish audit results · Release 3 case studies · Commission institutional assessment"
            ]},
            { q: "Q3 (Months 7–9)", title: "Institutional Engagement", score: "55 → 75", prob: "25% → 40%", items: [
              "M7: Complete multilateral briefing package · First World Bank GovTech briefing",
              "M8: Present at 2+ conferences · Brief governance think tanks · Submit standards contribution",
              "M9: Co-author academic paper · Complete OECD engagement sequence · Standards body liaison status"
            ]},
            { q: "Q4 (Months 10–12)", title: "Pre-Standard Positioning", score: "75 → 90", prob: "40% → 60%", items: [
              "M10: Launch certification pilot · Publish Charter v3.0 · Open Early Adopter Programme",
              "M11: Submit formal standards proposal · Onboard Observer-tier institutions",
              "M12: Publish State of Governance Infrastructure report · First Annual Transparency Report"
            ]},
          ].map(({ q, title, score, prob, items }) => (
            <div key={q} className="border-l-4 border-accent/30 pl-6 pb-10 last:pb-0 relative">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-accent rounded-full border-2 border-background" />
              <div className="flex items-center gap-4 mb-3 flex-wrap">
                <span className="font-mono text-accent text-sm font-semibold">{q}</span>
                <span className="font-serif text-sm font-semibold">{title}</span>
                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5">Score: {score}</span>
                <span className="text-[10px] font-mono text-muted-foreground bg-muted px-2 py-0.5">Adoption: {prob}</span>
              </div>
              <div className="space-y-1.5">
                {items.map(item => (
                  <p key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* ═══════ MODULE 10 — SUCCESS METRICS ═══════ */}
      <Sec id="m10" className="border-b border-border bg-primary text-primary-foreground">
        <ModuleHeader number="10" title="Success Metrics & Adoption Model" subtitle="Quantitative scoring framework tracking legitimacy index growth, institutional participation, validation completion, and adoption probability progression." icon={TrendingUp} />

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="border border-primary-foreground/10 p-6">
            <h4 className="font-serif text-sm font-semibold text-primary-foreground mb-4">Institutional Credibility Index</h4>
            <div className="space-y-4">
              {[
                { label: "Q1 End", score: 35, bar: "35%" },
                { label: "Q2 End", score: 55, bar: "55%" },
                { label: "Q3 End", score: 75, bar: "75%" },
                { label: "Q4 End", score: 90, bar: "90%" },
              ].map(({ label, score, bar }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-primary-foreground/60">{label}</span>
                    <span className="font-mono text-accent">{score}/100</span>
                  </div>
                  <div className="h-2 bg-primary-foreground/10 overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-500" style={{ width: bar }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-primary-foreground/10 p-6">
            <h4 className="font-serif text-sm font-semibold text-primary-foreground mb-4">Adoption Probability Evolution</h4>
            <div className="space-y-4">
              {[
                { label: "Q1 End", value: "12%", bar: "12%" },
                { label: "Q2 End", value: "25%", bar: "25%" },
                { label: "Q3 End", value: "40%", bar: "40%" },
                { label: "Q4 End", value: "60%", bar: "60%" },
              ].map(({ label, value, bar }) => (
                <div key={label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-primary-foreground/60">{label}</span>
                    <span className="font-mono text-accent">{value}</span>
                  </div>
                  <div className="h-2 bg-primary-foreground/10 overflow-hidden">
                    <div className="h-full bg-accent transition-all duration-500" style={{ width: bar }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { metric: "Institutional Partners", q1: "5", q2: "10+", q3: "15+", q4: "20+" },
            { metric: "Published Validations", q1: "1", q2: "4", q3: "6", q4: "8+" },
            { metric: "Standards Contributions", q1: "0", q2: "1", q3: "3", q4: "5+" },
            { metric: "Conference Presentations", q1: "0", q2: "1", q3: "3+", q4: "5+" },
          ].map(({ metric, q1, q2, q3, q4 }) => (
            <div key={metric} className="border border-primary-foreground/10 p-4">
              <p className="text-overline font-mono text-primary-foreground/40 uppercase mb-3">{metric}</p>
              <div className="grid grid-cols-4 gap-2 text-center">
                {[q1, q2, q3, q4].map((v, i) => (
                  <div key={i}>
                    <p className="text-sm font-serif font-semibold text-accent">{v}</p>
                    <p className="text-[9px] text-primary-foreground/30">Q{i+1}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border border-primary-foreground/10 p-6">
          <h4 className="font-serif text-sm font-semibold text-primary-foreground mb-4">Critical Success Dependencies</h4>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Independent governance board operational by Month 2",
              "At least one academic partnership producing published research by Month 6",
              "Technical audit completed with publishable results by Month 6",
              "Informal multilateral contact established before formal submissions",
              "Certification pilot partners identified by Month 8",
              "Standards body liaison status achieved before formal proposal submission",
              "No superlatives policy enforced across all outputs from Day 1",
              "Sovereignty-preserving language model adopted organization-wide",
            ].map(dep => (
              <p key={dep} className="flex items-start gap-2 text-xs text-primary-foreground/60">
                <Target className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <span>{dep}</span>
              </p>
            ))}
          </div>
        </div>
      </Sec>

      {/* ═══════ CTA FOOTER ═══════ */}
      <Sec className="bg-muted/40">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="institutional-heading text-heading-1 font-semibold mb-4">Ready for Institutional Review</h2>
            <p className="text-body text-muted-foreground mb-8">This blueprint is designed for presentation to the Government of Canada, World Bank GovTech, OECD CDEP, and multilateral institutional reviewers.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/submission-hub" className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide hover:shadow-lg hover:shadow-accent/20 transition-all">
                <FileText className="h-4 w-4" /> International Submission Pack
              </Link>
              <Link to="/roadmap" className="inline-flex items-center gap-2 px-7 py-4 border border-border text-sm font-medium hover:bg-muted transition-all">
                <BarChart3 className="h-4 w-4" /> View 12-Month Roadmap
              </Link>
              <Link to="/readiness" className="inline-flex items-center gap-2 px-7 py-4 border border-border text-sm font-medium hover:bg-muted transition-all">
                <Target className="h-4 w-4" /> Readiness Assessment
              </Link>
            </div>
          </div>
        </FadeIn>
      </Sec>
    </div>
  );
};

export default InstitutionalBlueprint;
