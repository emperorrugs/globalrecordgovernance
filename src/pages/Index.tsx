import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText, Users,
  Award, BookOpen, Handshake, Scale, Building, Eye,
  Landmark, Network, Gavel, TrendingUp, Zap, Activity,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { LiveTrustDashboard } from "@/components/LiveTrustDashboard";
import { GlobalFederationMap } from "@/components/GlobalFederationMap";
import { CompetitiveEdgeMatrix } from "@/components/CompetitiveEdgeMatrix";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Reusable ── */
const Sec = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-14 px-6 py-24 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{children}</p>
);

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-12">
    <h2 className="institutional-heading text-heading-1 font-semibold">{children}</h2>
    {sub && <p className="mt-3 text-body text-muted-foreground leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

/* ── Page ── */
const Index = () => {
  const { t } = useLanguage();
  return (
  <div>
    <SEOHead
      title="GRGF — Global Record Governance Foundation | Digital Public Infrastructure Standards Authority"
      description="Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Sovereign-grade trust layer for verifiable institutional accountability."
    />

    {/* ═══════════════════ HERO ═══════════════════ */}
     <header id="hero" className="relative overflow-hidden border-b border-border px-6 py-32 md:py-40 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px),
                          repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px)`
      }} />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-primary-foreground/15 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <span className="text-overline font-mono text-accent uppercase">{t("home.badge")}</span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="institutional-heading font-semibold leading-[0.9] text-primary-foreground max-w-5xl" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
            Federated Digital
            <br />
            Public Infrastructure
            <br />
            <span className="text-accent relative">
              Governance Platform
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/20" viewBox="0 0 400 12" preserveAspectRatio="none">
                <path d="M0,8 Q100,0 200,8 Q300,16 400,8" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-8 text-body-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            GRGF is a federated digital public infrastructure designed to strengthen institutional trust,
            reduce systemic inefficiency, and enable secure cross-border interoperability.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-6 text-caption text-primary-foreground/35 font-mono">
            {t("home.patent")}
          </div>
        </FadeIn>

        {/* ── Executive KPI Panels ── */}
        <FadeIn delay={350}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Institutional Efficiency", value: "15–20%", sub: "Administrative gain (modeled)" },
              { label: "Interoperability", value: "Level 3", sub: "Federation-ready" },
              { label: "Deployment Maturity", value: "TRL 6", sub: "Pilot-validated" },
              { label: "Investment Readiness", value: "Active", sub: "Evaluation stage" },
              { label: "Implementation", value: "18 mo", sub: "Pilot to production" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="border border-primary-foreground/10 p-4 bg-primary-foreground/[0.02]">
                <p className="text-overline font-mono text-primary-foreground/40 uppercase mb-1">{label}</p>
                <p className="text-xl font-serif font-semibold text-accent">{value}</p>
                <p className="text-overline text-primary-foreground/30 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/architecture" className="group inline-flex items-center gap-2 px-7 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]">
              <Cpu className="h-4 w-4" />
              View Architecture
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/financial-model" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:border-accent/40">
              <BarChart3 className="h-4 w-4" />
              Explore Financial Model
            </Link>
            <Link to="/simulator" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/15 text-primary-foreground/80 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
              Run Country Simulation <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link to="/institutional-review" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/10 text-primary-foreground/70 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
              Access Institutional Review <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>

        {/* Animated trust strip */}
        <FadeIn delay={600}>
          <div className="mt-20 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { end: 100, suffix: "%", label: t("home.stat_determinism") },
              { prefix: "<", end: 30, suffix: " min", label: t("home.stat_audit") },
              { prefix: "", end: 3, suffix: "-Tier", label: t("home.stat_recognition") },
              { prefix: "", end: 6, suffix: "-Layer", label: t("home.stat_architecture") },
              { prefix: "", end: 5, suffix: "-Phase", label: t("home.stat_deployment") },
            ].map(({ end, suffix, prefix, label }) => (
              <div key={label}>
                <p className="text-xl md:text-2xl font-serif font-semibold text-accent">
                  {prefix && <span>{prefix}</span>}
                  <AnimatedCounter end={end} suffix={suffix} />
                </p>
                <p className="text-overline text-primary-foreground/40 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </header>

    {/* ═══════════════════ LIVE TRUST DASHBOARD ═══════════════════ */}
    <Sec id="trust-metrics" className="border-b border-border bg-muted/30">
      <SectionLabel>{t("home.system_status")}</SectionLabel>
      <Title sub={t("home.live_dashboard_sub")}>
        {t("home.live_dashboard")}
      </Title>
      <LiveTrustDashboard />
    </Sec>

    {/* ═══════════════════ THE PROBLEM ═══════════════════ */}
    <Sec id="problem" className="border-b border-border">
      <FadeIn>
        <SectionLabel>{t("home.problem")}</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="institutional-heading text-heading-1 font-semibold mb-6">
              Estimated $2.6 trillion in annual governance inefficiency
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              International estimates suggest that governments lose up to $2.6 trillion annually through procurement irregularities, administrative inefficiency, and institutional opacity. The structural root cause is the absence of verifiable accountability infrastructure.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-6">
              Current governance systems do not record what institutions <em>didn't</em> do. GRGF introduces a unified architecture that makes institutional silence — omissions, delays, and inaction — structurally visible and independently verifiable.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-serif font-semibold text-accent">
                  <AnimatedCounter end={0.3} suffix="%" decimals={1} />
                </p>
                <p className="text-overline text-muted-foreground/50">Integrity improvement needed to offset deployment cost</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-semibold text-accent">$<AnimatedCounter end={18.3} suffix="B" decimals={1} /></p>
                <p className="text-overline text-muted-foreground/50">Projected global annual net benefit</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: Eye, stat: "67%", title: "of institutional decisions lack audit trails", desc: "Governance actions are routinely executed without verifiable evidence of authorization, creating accountability gaps." },
              { icon: Shield, stat: "0", title: "existing DPIs record omissions", desc: "No current Digital Public Infrastructure makes institutional silence — things not done — independently verifiable." },
              { icon: Zap, stat: "100×", title: "faster audit reconstruction with GRGF", desc: "From weeks of manual document assembly to under 30 minutes of automated cryptographic reconstruction." },
            ].map(({ icon: Icon, stat, title, desc }) => (
              <FadeIn key={title}>
                <div className="governance-card-elevated flex gap-4 group hover:border-accent/30 transition-all duration-300">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-primary flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-serif font-semibold text-accent">{stat} <span className="text-sm font-sans text-foreground font-medium">{title}</span></p>
                    <p className="text-caption text-muted-foreground leading-relaxed mt-1">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ INSTITUTIONAL MANDATE ═══════════════════ */}
    <Sec id="mandate" className="border-b border-border bg-muted/40">
      <SectionLabel>Our Mandate</SectionLabel>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
           <h2 className="institutional-heading text-heading-1 font-semibold mb-6">
              Federated governance interoperability model for scalable national integration
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              The Global Record Governance Foundation is an independent standards-setting authority that establishes, maintains, and governs the structural framework for institutional record integrity across public and private sectors worldwide.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              Positioned as the Governance Integrity Registry (Layer 3) within the national Digital Public Infrastructure stack, the Foundation ensures that governance decisions, institutional actions, and administrative omissions become cryptographically verifiable, independently auditable records.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              The Foundation maintains strict institutional neutrality — exercising no enforcement capability, no decision authority, and no evaluative function. It records. It preserves. It verifies.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Landmark, title: "Institutional Independence", desc: "Governed by charter with formal separation of powers. Anti-capture clauses (AC-01–05) prevent vendor or state control." },
              { icon: Globe, title: "Sovereign Compatibility", desc: "Non-invasive integration that strengthens existing national systems without replacing operational control." },
              { icon: Lock, title: "Cryptographic Assurance", desc: "Every governance event becomes a tamper-evident, independently verifiable record with full chain-of-custody." },
              { icon: Eye, title: "Omission Awareness", desc: "The only governance infrastructure that records inaction alongside action — making institutional silence visible." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 100}>
                <div className="governance-card-elevated flex gap-4 group hover:border-accent/30 transition-all duration-300">
                  <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-heading-3 font-semibold mb-1">{title}</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ GOVERNANCE PRINCIPLES ═══════════════════ */}
    <Sec id="principles" className="border-b border-border">
      <SectionLabel>Governance Principles</SectionLabel>
      <Title sub="The Foundation's operational mandate is grounded in six non-negotiable principles that ensure structural neutrality and institutional trust.">
        Charter Principles
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { num: "I", title: "Custodial Neutrality", desc: "The Foundation holds no enforcement power. It records institutional reality without interpretation, evaluation, or recommendation." },
          { num: "II", title: "Structural Verifiability", desc: "Every governance claim must be independently verifiable through cryptographic proof, not institutional reputation." },
          { num: "III", title: "Sovereign Primacy", desc: "National sovereignty is absolute. No federation participation diminishes a state's control over its governance data." },
          { num: "IV", title: "Omission Accountability", desc: "Governance silence is as significant as governance action. The architecture records both with equal structural weight." },
          { num: "V", title: "Anti-Capture Assurance", desc: "Formal clauses prevent any vendor, government, or interest group from acquiring undue influence over standards." },
          { num: "VI", title: "Perpetual Transparency", desc: "All standards, methodologies, and assessment criteria are publicly accessible. Authority is demonstrated through structure." },
        ].map(({ num, title, desc }, i) => (
          <FadeIn key={num} delay={i * 80}>
            <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center text-xs font-mono font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">{num}</span>
                <h4 className="font-serif text-heading-3 font-semibold">{title}</h4>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ COMPETITIVE EDGE ═══════════════════ */}
    <Sec id="edge" className="border-b border-border bg-primary text-primary-foreground">
      <SectionLabel>Competitive Positioning</SectionLabel>
      <div className="mb-12">
        <h2 className="institutional-heading text-heading-1 font-semibold text-primary-foreground">
          Structural Differentiation
        </h2>
        <p className="mt-3 text-body text-primary-foreground/60 leading-relaxed max-w-3xl">
          Unified architecture for omission-awareness, deterministic policy enforcement, and anti-capture governance in a single sovereign-compatible layer.
        </p>
      </div>
      <div className="bg-card/5 border border-primary-foreground/10 p-6 md:p-8">
        <CompetitiveEdgeMatrix />
      </div>
    </Sec>

    {/* ═══════════════════ STANDARDS REGISTRY ═══════════════════ */}
    <Sec id="standards" className="border-b border-border">
      <SectionLabel>Standards Registry</SectionLabel>
      <Title sub="The GRGF DPI Recognition Framework™ establishes a structured, tiered pathway for institutional governance compliance assessment.">
        Recognition Framework
      </Title>
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {[
          { level: "Level I", title: "Foundational DPI Compliance", items: ["Core record integrity verification", "Basic policy enforcement capability", "Audit trail generation", "Documentation requirements met"], color: "border-l-4 border-l-accent/40" },
          { level: "Level II", title: "Verified Governance Alignment", items: ["Deterministic policy enforcement", "SHA-256 cryptographic anchoring", "Federation-ready architecture", "Independent security audit passed"], color: "border-l-4 border-l-accent/70" },
          { level: "Level III", title: "Institutional-Grade Certified DPI", items: ["Full omission-awareness capability", "Cross-border federation operational", "Continuous compliance monitoring", "Re-certification cycle established"], color: "border-l-4 border-l-accent" },
        ].map(({ level, title, items, color }, i) => (
          <FadeIn key={level} delay={i * 120}>
            <div className={`governance-card-elevated ${color} hover:shadow-lg transition-all duration-300`}>
              <span className="text-overline font-mono text-accent uppercase tracking-widest">{level}</span>
              <h4 className="font-serif text-heading-3 font-semibold mt-2 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-caption text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <Link to="/recognition" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
        View Recognition Criteria & Application <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Sec>

    {/* ═══════════════════ FRAMEWORK PILLARS ═══════════════════ */}
    <Sec id="framework" className="border-b border-border bg-primary text-primary-foreground">
      <SectionLabel>Technical Architecture</SectionLabel>
      <div className="mb-12">
        <h2 className="institutional-heading text-heading-1 font-semibold text-primary-foreground">
          Six-Layer Governance Infrastructure
        </h2>
        <p className="mt-3 text-body text-primary-foreground/60 leading-relaxed max-w-3xl">
          A modular, sovereign-compatible architecture ensuring verifiable institutional integrity from event capture to international federation.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Cpu, title: "Event Capture & Normalization", desc: "Schema-based institutional event ingestion with standardized format enforcement across heterogeneous source systems." },
          { icon: Gavel, title: "Policy Decision Engine", desc: "Deterministic enforcement layer — identical inputs always produce identical outputs. No discretionary interpretation." },
          { icon: Database, title: "Evidence Backbone", desc: "Append-only cryptographic ledger with SHA-256/512 anchoring, WORM storage, and tamper-evident sealing." },
          { icon: Lock, title: "Cryptographic Anchoring", desc: "Hash-chain verification, timestamped proofs, and independent attestation certificates (CICE) for every governance event." },
          { icon: Shield, title: "Verification API", desc: "Public-facing verification endpoint enabling any authorized party to validate record integrity without exposing content." },
          { icon: Network, title: "Federation & Interoperability", desc: "Cross-border verification protocol. Sovereign nodes maintain local control while enabling multilateral trust verification." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="border border-primary-foreground/10 p-8 transition-all duration-300 hover:border-accent/30 hover:bg-primary-foreground/[0.02] group">
              <Icon className="h-5 w-5 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h4 className="font-serif text-heading-3 font-semibold text-primary-foreground mb-2">{title}</h4>
              <p className="text-caption text-primary-foreground/50 leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ GLOBAL FEDERATION MAP ═══════════════════ */}
    <Sec id="federation" className="border-b border-border">
      <SectionLabel>Global Presence</SectionLabel>
      <Title sub="GRGF is designed for sovereign deployment worldwide. Each node operates independently while participating in a trust-verified federation network.">
        Federation Network
      </Title>
      <GlobalFederationMap />
    </Sec>

    {/* ═══════════════════ INSTITUTIONAL ALIGNMENT ═══════════════════ */}
    <Sec id="alignment" className="border-b border-border bg-muted/40">
      <SectionLabel>International Alignment</SectionLabel>
      <Title sub="The Foundation's capabilities map directly to established multilateral governance frameworks.">
        Multilateral Institutional Matrix
      </Title>
      <FadeIn>
        <div className="overflow-x-auto governance-card-elevated">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left py-4 px-4 font-serif font-semibold text-foreground text-heading-3">GRGF Capability</th>
                <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">World Bank</th>
                <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">UN SDGs</th>
                <th className="text-left py-4 px-4 font-serif font-semibold text-foreground">OECD</th>
              </tr>
            </thead>
            <tbody>
              {[
                { cap: "Immutable Record Layer", wb: "Institutional Integrity", un: "SDG 16", oecd: "Trust & Transparency" },
                { cap: "Audit Trails", wb: "Anti-Corruption", un: "SDG 16.5", oecd: "Accountability" },
                { cap: "Interoperability", wb: "Digital Gov Reform", un: "SDG 9", oecd: "Data Governance" },
                { cap: "Policy Enforcement", wb: "Rule of Law", un: "SDG 16.3", oecd: "Regulatory Quality" },
                { cap: "Federation Protocol", wb: "Cross-Border Trust", un: "SDG 17", oecd: "Int'l Cooperation" },
                { cap: "Omission Detection", wb: "Accountability Gap", un: "SDG 16.6", oecd: "Institutional Oversight" },
              ].map(({ cap, wb, un, oecd }) => (
                <tr key={cap} className="border-b border-border/60 hover:bg-muted/50 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-foreground">{cap}</td>
                  <td className="py-3.5 px-4 text-muted-foreground">{wb}</td>
                  <td className="py-3.5 px-4"><span className="px-2.5 py-1 bg-primary/8 text-primary text-xs font-mono">{un}</span></td>
                  <td className="py-3.5 px-4 text-muted-foreground">{oecd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ INSTITUTIONAL SERVICES ═══════════════════ */}
    <Sec id="services" className="border-b border-border">
      <SectionLabel>Institutional Engagement</SectionLabel>
      <Title sub="Structured pathways for governments, multilateral organizations, and institutional partners seeking governance integrity infrastructure.">
        How the Foundation Engages
      </Title>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, title: "Recognition & Certification", desc: "Three-tier governance maturity assessment. Structured accreditation pathway with independent audit validation.", cta: "Apply for Recognition", path: "/recognition" },
          { icon: BookOpen, title: "Advisory Services", desc: "Sovereign deployment planning, architecture review, integration scoping, and compliance gap analysis.", cta: "Request Assessment", path: "/controlled-access" },
          { icon: Handshake, title: "Strategic Partnerships", desc: "Multilateral collaboration framework, federation node participation, joint research, and co-development.", cta: "Partner With Us", path: "/partnerships" },
          { icon: Users, title: "Membership & Academy", desc: "Institutional membership tiers, professional certification programs, and governance integrity training.", cta: "Explore Membership", path: "/membership" },
        ].map(({ icon: Icon, title, desc, cta, path }, i) => (
          <FadeIn key={title} delay={i * 100}>
            <div className="governance-card-elevated flex flex-col group hover:border-accent/30 transition-all duration-300">
              <Icon className="h-5 w-5 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed flex-1 mb-4">{desc}</p>
              <Link to={path} className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors group-hover:gap-2.5">
                {cta} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ GOVERNANCE MODEL ═══════════════════ */}
    <Sec id="governance" className="border-b border-border bg-muted/40">
      <SectionLabel>Governance Model</SectionLabel>
      <Title sub="The Foundation operates under a formal governance structure designed for institutional independence and perpetual neutrality.">
        Institutional Governance Architecture
      </Title>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-10">
        {[
          { icon: Building, title: "Governance Board", desc: "Strategic oversight, charter stewardship, and institutional direction. Independent membership with term limits." },
          { icon: Users, title: "Standards Committee", desc: "Technical standards development, recognition criteria maintenance, and compliance methodology governance." },
          { icon: Shield, title: "Technical Review Panel", desc: "Architecture validation, security assessment, and deployment verification for recognition applicants." },
          { icon: Gavel, title: "Compliance Oversight", desc: "Appeals mechanism, transparency reporting, re-certification management, and ethics enforcement." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 100}>
            <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <Icon className="h-5 w-5 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
      <Link to="/transparency" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
        View Transparency & Governance Documentation <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Sec>

    {/* ═══════════════════ DEPLOYMENT PATHWAY ═══════════════════ */}
    <Sec id="deployment" className="border-b border-border">
      <SectionLabel>Implementation Pathway</SectionLabel>
      <Title>National Pilot Implementation Model</Title>
      <div className="space-y-0 max-w-3xl">
        {[
          { phase: "Phase 1", title: "Readiness Assessment", desc: "Institutional governance maturity evaluation, stakeholder mapping, integration scoping, gap analysis", status: "Active" },
          { phase: "Phase 2", title: "Integration Nodes", desc: "Deploy connector to 1–3 source systems, encode initial policy rules, validate deterministic enforcement" },
          { phase: "Phase 3", title: "Controlled Deployment", desc: "Expand to operational environment, independent security audit, audit trail reconstruction exercises" },
          { phase: "Phase 4", title: "Institutional Scaling", desc: "Cross-department rollout, training programs, compliance reporting automation, recognition application" },
          { phase: "Phase 5", title: "International Federation", desc: "Federation protocol activation, cross-border verification, multilateral alignment, Level III certification" },
        ].map((s, i) => (
          <FadeIn key={s.phase} delay={i * 80}>
            <div>
              <div className="flex items-center gap-5 py-5">
                <div className="shrink-0 w-11 h-11 bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-serif text-heading-3 font-semibold">{s.title}</h4>
                    {s.status && (
                      <span className="text-overline font-mono px-2 py-0.5 bg-accent/15 text-accent animate-pulse">
                        {s.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-caption text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
              {i < 4 && <div className="ml-[1.375rem] w-px h-4 bg-border" />}
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ GLOBAL IMPACT ═══════════════════ */}
    <Sec id="impact" className="border-b border-border bg-muted/40">
      <SectionLabel>Global Relevance</SectionLabel>
      <Title sub="Governance integrity infrastructure for every level of institutional operation.">
        Sectors &amp; Regions
      </Title>
      <div className="grid gap-5 md:grid-cols-3 mb-8">
        {[
          { title: "Government & Public Sector", items: ["Procurement verification & authorization trails", "Cross-ministry governance coordination", "Regulatory compliance reconstruction", "Social benefit disbursement validation"] },
          { title: "International Organizations", items: ["Multilateral governance reform infrastructure", "Cross-border recognition & federation", "Development programme oversight", "Anti-corruption structural assurance"] },
          { title: "Institutional Partners", items: ["Governance maturity assessment", "Compliance certification pathway", "Federation node deployment", "Research collaboration & co-development"] },
        ].map(({ title, items }, i) => (
          <FadeIn key={title} delay={i * 100}>
            <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <h4 className="font-serif text-heading-3 font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2.5 text-caption text-muted-foreground">
                    <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════════ AUTHORITY SIGNALS ═══════════════════ */}
    <Sec id="authority" className="border-b border-border">
      <FadeIn>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-6">
          {[
            { label: "Foundation", value: "GRGF v1.0" },
            { label: "Recognition Model", value: "3-Tier Active" },
            { label: "Pilot Node", value: "v0.1 Evaluation" },
            { label: "Patent", value: "CA 3,300,102" },
            { label: "Registry", value: "GRGF-2024-001" },
          ].map(({ label, value }) => (
            <div key={label} className="governance-card-elevated text-center group hover:border-accent/30 transition-all duration-300">
              <p className="text-overline font-mono text-muted-foreground/60 uppercase mb-2">{label}</p>
              <p className="text-body font-serif font-semibold text-foreground group-hover:text-accent transition-colors">{value}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ CLOSING CTA ═══════════════════ */}
    <Sec className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="text-center max-w-3xl mx-auto py-12">
          <p className="font-serif text-primary-foreground leading-tight mb-3" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t("home.closing_1")}
            <br />
            {t("home.closing_2")}
          </p>
          <p className="text-heading-2 font-serif text-accent mb-4">
            {t("home.closing_3")}
          </p>
          <p className="text-body text-primary-foreground/50 mb-10 max-w-xl mx-auto">
            {t("home.closing_sub")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/controlled-access" className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]">
              {t("home.cta_assess")}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/recognition" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:border-accent/40">
              {t("home.cta_recognition")}
            </Link>
            <Link to="/partnerships" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/10 text-primary-foreground/70 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
              Partner With Us
            </Link>
          </div>
        </div>
      </FadeIn>
    </Sec>
  </div>
  );
};

export default Index;
