import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText, Users,
  Award, BookOpen, Handshake, Scale, Building, Eye,
  Landmark, Network, Gavel, TrendingUp, Zap, Activity,
  AlertTriangle, Search, Layers, ClipboardCheck,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { LiveTrustDashboard } from "@/components/LiveTrustDashboard";
import { GlobalFederationMap } from "@/components/GlobalFederationMap";
import { CompetitiveEdgeMatrix } from "@/components/CompetitiveEdgeMatrix";
import { useLanguage } from "@/contexts/LanguageContext";
import InstitutionalReadinessBanner from "@/components/InstitutionalReadinessBanner";

/* ── Layout Primitives (Carbon 2x Grid) ── */
const Section = ({ id, children, className = "", elevated }: { id?: string; children: React.ReactNode; className?: string; elevated?: boolean }) => (
  <section id={id} className={`relative scroll-mt-14 px-5 py-24 md:px-10 lg:px-20 ${elevated ? "bg-card/20" : ""} ${className}`}>
    <div className="max-w-[1280px] mx-auto relative">{children}</div>
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <div className="carbon-tag mb-5">
    <span className="w-1 h-1 rounded-full bg-accent" />
    {children}
  </div>
);

const SectionTitle = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-14">
    <h2 className="text-heading-1 md:text-display font-extrabold tracking-tight">{children}</h2>
    {sub && <p className="mt-4 text-body-lg text-muted-foreground max-w-2xl">{sub}</p>}
  </div>
);

/* ══════════════════════════════════════════ PAGE ══════════════════════════════════════════ */
const Index = () => {
  const { t } = useLanguage();

  return (
    <div>
      <SEOHead
        title="GRGF — Global Record Governance Framework | Digital Public Infrastructure Standards Authority"
        description="Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Sovereign-grade trust layer for verifiable institutional accountability."
      />

      {/* ═══════════════ HERO — FLUENT DEPTH LAYER ═══════════════ */}
      <header id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden px-5 md:px-10 lg:px-20">
        {/* Fluent depth layers */}
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 200px),
                            repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 200px)`
        }} />
        {/* Fluent Acrylic radial */}
        <div className="absolute top-[-15%] right-[-8%] w-[800px] h-[800px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle at 60% 40%, hsl(var(--accent)), transparent 50%)" }} />
        <div className="absolute bottom-[-5%] left-[-3%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(var(--sovereign-green)), transparent 50%)" }} />

        <div className="relative max-w-[1280px] mx-auto w-full py-20">
          <FadeIn delay={0}>
            <div className="carbon-tag mb-8">
              <AlertTriangle className="h-3 w-3" />
              <span>The Global Governance Gap</span>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="display-massive max-w-[900px]" style={{ fontSize: "clamp(2.2rem, 6.5vw, 5rem)" }}>
              <span className="text-foreground/35">Governments lack</span>
              <br />
              <span className="text-accent">independent</span>
              <br />
              <span className="text-foreground">institutional memory</span>
              <br />
              <span className="text-foreground/35">protection.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-8 text-body-lg text-muted-foreground max-w-xl leading-relaxed">
              Political transitions erase continuity. Record tampering undermines public trust.
              There is no global neutral verification backbone.
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="mt-10 flex flex-wrap gap-2.5">
              <Link to="/the-problem" className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:brightness-110">
                <Search className="h-4 w-4" />
                Understand the Problem
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3 border border-border/60 text-foreground text-sm font-medium rounded-md transition-all duration-300 hover:bg-accent/5 hover:border-accent/30">
                <Cpu className="h-4 w-4" />
                View Architecture
              </Link>
              <Link to="/submission-hub" className="inline-flex items-center gap-2 px-6 py-3 border border-border/40 text-foreground/60 text-sm font-medium rounded-md transition-all duration-300 hover:bg-accent/5 hover:text-foreground">
                <FileText className="h-4 w-4" />
                Submission Pack
              </Link>
            </div>
          </FadeIn>

          {/* ── KPI Strip — Carbon Data Tiles ── */}
          <FadeIn delay={350}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-px bg-border/30 rounded-lg overflow-hidden">
              {[
                { label: "Annual Loss", value: "$2.6T", sub: "Global governance failures" },
                { label: "Integrity Threshold", value: "0.3%", sub: "ROI breakeven" },
                { label: "Maturity", value: "TRL 6", sub: "Pilot-validated" },
                { label: "Audit Speed", value: "<30min", sub: "vs. weeks" },
                { label: "Determinism", value: "100%", sub: "Identical in → out" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="bg-card p-5 group hover:bg-card/80 transition-colors duration-200">
                  <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.08em] mb-2">{label}</p>
                  <p className="text-2xl font-extrabold text-accent group-hover:text-foreground transition-colors duration-200">{value}</p>
                  <p className="text-[10px] text-muted-foreground/25 mt-1 font-mono">{sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* ── Animated Trust Numbers ── */}
          <FadeIn delay={450}>
            <div className="mt-14 pt-10 border-t border-border/15 grid grid-cols-2 md:grid-cols-5 gap-8">
              {[
                { end: 100, suffix: "%", label: t("home.stat_determinism") },
                { prefix: "<", end: 30, suffix: " min", label: t("home.stat_audit") },
                { end: 3, suffix: "-Tier", label: t("home.stat_recognition") },
                { end: 6, suffix: "-Layer", label: t("home.stat_architecture") },
                { end: 5, suffix: "-Phase", label: t("home.stat_deployment") },
              ].map(({ end, suffix, prefix, label }) => (
                <div key={label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-accent">
                    {prefix && <span>{prefix}</span>}
                    <AnimatedCounter end={end} suffix={suffix} />
                  </p>
                  <p className="text-[10px] font-mono text-muted-foreground/30 mt-1.5 uppercase tracking-[0.08em]">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={250}>
            <p className="mt-5 text-[10px] text-muted-foreground/20 font-mono tracking-wider">
              {t("home.patent")}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ═══════════════ SOLUTION ═══════════════ */}
      <Section id="solution">
        <FadeIn>
          <div className="fluent-card p-8 md:p-14 glow-accent">
            <Tag>The Solution</Tag>
            <h2 className="text-heading-1 md:text-display font-extrabold tracking-tight text-accent/90">
              The Global Record Governance Framework
            </h2>
            <p className="mt-5 text-body-lg text-muted-foreground max-w-3xl">
              An independent institutional memory and trust verification layer for sovereign digital systems.
              It records. It preserves. It verifies. — Without interpretation or enforcement.
            </p>
            <div className="mt-8 flex gap-10 flex-wrap">
              <div>
                <p className="text-3xl font-extrabold text-accent">$<AnimatedCounter end={18.3} suffix="B" decimals={1} /></p>
                <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.08em] mt-1">Projected annual net benefit</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-accent"><AnimatedCounter end={0.3} suffix="%" decimals={1} /></p>
                <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.08em] mt-1">Integrity threshold</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════ GOVERNANCE FAILURES — Carbon Tile Grid ═══════════════ */}
      <Section id="failures" elevated>
        <FadeIn>
          <Tag>Why This Matters</Tag>
          <SectionTitle sub="Five structural failures that existing DPI does not address.">
            The Governance Trust Deficit
          </SectionTitle>
        </FadeIn>
        <div className="grid gap-px bg-border/20 sm:grid-cols-2 lg:grid-cols-3 rounded-lg overflow-hidden">
          {[
            { icon: AlertTriangle, num: "01", title: "No Institutional Memory", desc: "Political transitions routinely erase governance continuity." },
            { icon: Eye, num: "02", title: "Invisible Omissions", desc: "No system records what governments didn't do." },
            { icon: Shield, num: "03", title: "Tamperable Records", desc: "Existing systems allow retroactive modification." },
            { icon: Globe, num: "04", title: "No Verification Backbone", desc: "No global neutral infrastructure for verifying governance events." },
            { icon: Layers, num: "05", title: "Service-Layer DPI Only", desc: "Current DPI focuses on identity & payments — not institutional trust." },
            { icon: Lock, num: "06", title: "No Anti-Capture Assurance", desc: "No structural safeguards against institutional control capture." },
          ].map(({ icon: Icon, num, title, desc }, i) => (
            <FadeIn key={num} delay={i * 60}>
              <div className="bg-card p-7 h-full group hover:bg-card/80 transition-colors duration-200 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-mono text-accent/50 font-semibold">{num}</span>
                  <Icon className="h-4 w-4 text-accent/60 group-hover:text-accent transition-colors duration-200" />
                </div>
                <h4 className="text-heading-3 font-bold mb-2 group-hover:text-accent transition-colors duration-200">{title}</h4>
                <p className="text-caption text-muted-foreground">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ LIVE TRUST DASHBOARD ═══════════════ */}
      <Section id="trust-metrics">
        <Tag>{t("home.system_status")}</Tag>
        <SectionTitle sub={t("home.live_dashboard_sub")}>
          {t("home.live_dashboard")}
        </SectionTitle>
        <LiveTrustDashboard />
      </Section>

      {/* ═══════════════ WHAT GRGF IS — Split Layout ═══════════════ */}
      <Section id="positioning" elevated>
        <FadeIn>
          <Tag>What GRGF Is</Tag>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-heading-1 font-extrabold tracking-tight">
                An Independent Institutional Memory & Trust Verification Layer
              </h2>
              <p className="mt-6 text-body text-muted-foreground">
                GRGF is not a competing service layer. It is a <strong className="text-foreground">governance trust backbone</strong> — a neutral, sovereign-compatible infrastructure that records, preserves, and verifies institutional actions, decisions, and omissions.
              </p>
              <p className="mt-3 text-body text-muted-foreground">
                Positioned as the <strong className="text-foreground">Governance Integrity Registry (Layer 3)</strong> within the national DPI stack. <em className="text-accent/80">It records. It preserves. It verifies.</em>
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: Landmark, title: "Institutional Independence", desc: "Governed by charter with formal separation of powers. Anti-capture clauses (AC-01–05)." },
                { icon: Globe, title: "Sovereign Compatibility", desc: "Non-invasive integration strengthens existing national systems." },
                { icon: Lock, title: "Cryptographic Assurance", desc: "Every governance event becomes tamper-evident with full chain-of-custody." },
                { icon: Eye, title: "Omission Awareness", desc: "The only governance infrastructure that records inaction alongside action." },
              ].map(({ icon: Icon, title, desc }, i) => (
                <FadeIn key={title} delay={i * 80}>
                  <div className="fluent-card p-5 flex gap-4 group">
                    <Icon className="h-4 w-4 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <h4 className="text-heading-3 font-bold mb-1 group-hover:text-accent transition-colors duration-200">{title}</h4>
                      <p className="text-caption text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════ DPI TABLE — Carbon Data Table ═══════════════ */}
      <Section id="dpi-position">
        <FadeIn>
          <Tag>DPI Positioning</Tag>
          <SectionTitle sub="GRGF complements — not competes with — existing DPI initiatives.">
            Global DPI Landscape
          </SectionTitle>
          <div className="overflow-x-auto rounded-lg border border-border/40">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>GovStack</th>
                  <th>DPGA</th>
                  <th>UNDP DPI</th>
                  <th className="text-accent">GRGF</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "Focus", gs: "Service building blocks", dp: "Open-source registry", un: "Safeguards framework", grgf: "Governance trust backbone" },
                  { dim: "Layer", gs: "Application (L4)", dp: "Discovery", un: "Policy", grgf: "Integrity Registry (L3)" },
                  { dim: "Record Integrity", gs: "Not addressed", dp: "Not addressed", un: "Guidance only", grgf: "Append-only, hash-anchored" },
                  { dim: "Omission Detection", gs: "No", dp: "No", un: "No", grgf: "Yes — structural" },
                  { dim: "Anti-Capture", gs: "Community", dp: "Multi-stakeholder", un: "Advisory", grgf: "5 codified clauses" },
                ].map(({ dim, gs, dp, un, grgf }) => (
                  <tr key={dim}>
                    <td className="font-medium text-foreground">{dim}</td>
                    <td className="text-muted-foreground/60">{gs}</td>
                    <td className="text-muted-foreground/60">{dp}</td>
                    <td className="text-muted-foreground/60">{un}</td>
                    <td className="text-accent font-semibold">{grgf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5">
            <Link to="/dpi-comparison" className="inline-flex items-center gap-2 text-sm text-accent/60 font-medium hover:text-accent transition-colors">
              Full 28-Point Comparison <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════ CHARTER PRINCIPLES ═══════════════ */}
      <Section id="principles" elevated>
        <Tag>Governance Principles</Tag>
        <SectionTitle sub="Six non-negotiable principles ensuring structural neutrality and institutional trust.">
          Charter Principles
        </SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { num: "I", title: "Custodial Neutrality", desc: "Records institutional reality without interpretation, evaluation, or recommendation." },
            { num: "II", title: "Structural Verifiability", desc: "Every claim independently verifiable through cryptographic proof." },
            { num: "III", title: "Sovereign Primacy", desc: "National sovereignty is absolute. No federation diminishes a state's control." },
            { num: "IV", title: "Omission Accountability", desc: "Governance silence recorded with equal structural weight as action." },
            { num: "V", title: "Anti-Capture Assurance", desc: "Formal clauses prevent any entity from acquiring undue influence." },
            { num: "VI", title: "Perpetual Transparency", desc: "All standards and criteria are publicly accessible. Authority through structure." },
          ].map(({ num, title, desc }, i) => (
            <FadeIn key={num} delay={i * 60}>
              <div className="fluent-card p-7 group">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 text-accent flex items-center justify-center text-xs font-mono font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">{num}</span>
                  <h4 className="text-heading-3 font-bold group-hover:text-accent transition-colors duration-200">{title}</h4>
                </div>
                <p className="text-caption text-muted-foreground">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ COMPETITIVE EDGE ═══════════════ */}
      <Section id="edge">
        <Tag>Competitive Positioning</Tag>
        <SectionTitle sub="Unified architecture for omission-awareness, deterministic enforcement, and anti-capture governance.">
          Structural Differentiation
        </SectionTitle>
        <div className="fluent-card p-5 md:p-8">
          <CompetitiveEdgeMatrix />
        </div>
      </Section>

      {/* ═══════════════ RECOGNITION FRAMEWORK ═══════════════ */}
      <Section id="standards" elevated>
        <Tag>Standards Registry</Tag>
        <SectionTitle sub="Three-tier pathway for institutional governance compliance.">
          Recognition Framework
        </SectionTitle>
        <div className="grid gap-3 md:grid-cols-3 mb-8">
          {[
            { level: "Level I", title: "Foundational Compliance", items: ["Core record integrity", "Basic policy enforcement", "Audit trail generation", "Documentation requirements"], border: "border-l-accent/25" },
            { level: "Level II", title: "Verified Alignment", items: ["Deterministic enforcement", "SHA-256 anchoring", "Federation-ready architecture", "Independent security audit"], border: "border-l-accent/55" },
            { level: "Level III", title: "Institutional-Grade DPI", items: ["Full omission-awareness", "Cross-border federation", "Continuous compliance", "Re-certification cycle"], border: "border-l-accent" },
          ].map(({ level, title, items, border }, i) => (
            <FadeIn key={level} delay={i * 80}>
              <div className={`fluent-card p-7 border-l-4 ${border}`}>
                <span className="text-[10px] font-mono text-accent/50 uppercase tracking-[0.08em]">{level}</span>
                <h4 className="text-heading-3 font-bold mt-2 mb-5">{title}</h4>
                <ul className="space-y-2.5">
                  {items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-caption text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-accent/50 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
        <Link to="/recognition" className="inline-flex items-center gap-2 text-sm text-accent/60 font-medium hover:text-accent transition-colors">
          Recognition Criteria & Application <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </Section>

      {/* ═══════════════ SIX-LAYER ARCHITECTURE ═══════════════ */}
      <Section id="framework">
        <Tag>Technical Architecture</Tag>
        <SectionTitle sub="Modular, sovereign-compatible architecture from event capture to international federation.">
          Six-Layer Governance Infrastructure
        </SectionTitle>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Cpu, title: "Event Capture", desc: "Schema-based institutional event ingestion with standardized format enforcement." },
            { icon: Gavel, title: "Policy Decision Engine", desc: "Deterministic enforcement — identical inputs always produce identical outputs." },
            { icon: Database, title: "Evidence Backbone", desc: "Append-only cryptographic ledger with SHA-256/512 anchoring and WORM storage." },
            { icon: Lock, title: "Cryptographic Anchoring", desc: "Hash-chain verification, timestamped proofs, and attestation certificates." },
            { icon: Shield, title: "Verification API", desc: "Public endpoint enabling integrity validation without exposing content." },
            { icon: Network, title: "Federation Protocol", desc: "Cross-border verification with sovereign nodes maintaining local control." },
          ].map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 60}>
              <div className="fluent-card p-7 group">
                <Icon className="h-4 w-4 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-heading-3 font-bold mb-2 group-hover:text-accent transition-colors duration-200">{title}</h4>
                <p className="text-caption text-muted-foreground">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ GLOBAL FEDERATION MAP ═══════════════ */}
      <Section id="federation" elevated>
        <Tag>Global Presence</Tag>
        <SectionTitle sub="Sovereign deployment worldwide. Each node operates independently within a trust-verified federation.">
          Federation Network
        </SectionTitle>
        <GlobalFederationMap />
      </Section>

      {/* ═══════════════ MULTILATERAL ALIGNMENT — Carbon Data Table ═══════════════ */}
      <Section id="alignment">
        <FadeIn>
          <Tag>International Alignment</Tag>
          <SectionTitle sub="GRGF maps directly to established multilateral governance frameworks.">
            Multilateral Institutional Matrix
          </SectionTitle>
          <div className="overflow-x-auto rounded-lg border border-border/40">
            <table className="data-table">
              <thead>
                <tr>
                  <th>GRGF Capability</th>
                  <th>World Bank</th>
                  <th>UN SDGs</th>
                  <th>OECD</th>
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
                  <tr key={cap}>
                    <td className="font-medium text-foreground">{cap}</td>
                    <td className="text-muted-foreground/60">{wb}</td>
                    <td><span className="carbon-tag text-[10px]">{un}</span></td>
                    <td className="text-muted-foreground/60">{oecd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════ READINESS BANNER ═══════════════ */}
      <InstitutionalReadinessBanner />

      {/* ═══════════════ QUICK NAVIGATION ═══════════════ */}
      <Section id="navigate" elevated>
        <Tag>Explore</Tag>
        <SectionTitle>Quick Navigation</SectionTitle>
        <div className="grid gap-px bg-border/20 grid-cols-2 md:grid-cols-4 rounded-lg overflow-hidden">
          {[
            { icon: Landmark, title: "Institutional Blueprint", path: "/institutional-blueprint" },
            { icon: Award, title: "Credibility Signals", path: "/credibility-signals" },
            { icon: Globe, title: "Sovereign Deployment", path: "/sovereign-deployment" },
            { icon: Shield, title: "Canada DPI", path: "/canada" },
            { icon: ClipboardCheck, title: "Submission-Ready", path: "/submission-ready" },
            { icon: BarChart3, title: "Financial Model", path: "/financial-model" },
            { icon: Handshake, title: "Partnerships", path: "/partnerships" },
            { icon: BookOpen, title: "Academy", path: "/academy" },
          ].map(({ icon: Icon, title, path }, i) => (
            <FadeIn key={path} delay={i * 40}>
              <Link to={path} className="bg-card p-5 flex items-center gap-3 group hover:bg-card/70 transition-colors duration-200 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                <Icon className="h-4 w-4 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
                <span className="text-sm font-semibold group-hover:text-accent transition-colors">{title}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ FOUNDER & TRUST ═══════════════ */}
      <Section id="trust-signals">
        <Tag>Authority & Trust</Tag>
        <SectionTitle sub="Transparency builds credibility.">
          Institutional Foundations
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-4">
          <FadeIn>
            <div className="fluent-card p-7">
              <h3 className="text-heading-3 font-bold mb-4 flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" /> Inventor & Architect
              </h3>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <p><strong className="text-foreground">Tarek Wahid</strong> — Creator and sole inventor of the GRGF architecture.</p>
                <p>Background in institutional systems design, governance integrity architecture, and digital public infrastructure standards.</p>
                <p className="text-xs font-mono text-muted-foreground/35">Canadian Patent No. CA 3,300,102 · Filed January 28, 2026</p>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="fluent-card p-7">
              <h3 className="text-heading-3 font-bold mb-4 flex items-center gap-2">
                <Building className="h-4 w-4 text-accent" /> Governance Structure
              </h3>
              <div className="space-y-2.5">
                {[
                  { role: "Governance Board", status: "Formation" },
                  { role: "Standards Committee", status: "Formation" },
                  { role: "Advisory Council", status: "Open" },
                  { role: "Technical Review Panel", status: "Formation" },
                ].map(({ role, status }) => (
                  <div key={role} className="flex items-center gap-3 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    <span className="text-foreground">{role}</span>
                    <span className="text-[10px] font-mono text-accent/40 ml-auto">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={150}>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-px bg-border/20 rounded-lg overflow-hidden">
            {[
              { label: "Framework", value: "GRGF v1.0" },
              { label: "Recognition", value: "3-Tier" },
              { label: "Pilot Node", value: "v0.1" },
              { label: "Patent", value: "CA 3,300,102" },
              { label: "Registry", value: "GRGF-2024-001" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-card p-4 text-center group hover:bg-card/70 transition-colors">
                <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.08em] mb-1.5">{label}</p>
                <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{value}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ═══════════════ ENGAGEMENT ═══════════════ */}
      <Section id="services" elevated>
        <Tag>Institutional Engagement</Tag>
        <SectionTitle sub="Structured pathways for governments, multilateral organizations, and institutional partners.">
          How GRGF Engages
        </SectionTitle>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Award, title: "Recognition", desc: "Three-tier maturity assessment with independent audit validation.", cta: "Apply", path: "/recognition" },
            { icon: BookOpen, title: "Advisory", desc: "Sovereign deployment planning, architecture review, gap analysis.", cta: "Request", path: "/controlled-access" },
            { icon: Handshake, title: "Partnerships", desc: "Multilateral collaboration and federation node participation.", cta: "Partner", path: "/partnerships" },
            { icon: Users, title: "Academy", desc: "Institutional membership, certification, and governance training.", cta: "Explore", path: "/membership" },
          ].map(({ icon: Icon, title, desc, cta, path }, i) => (
            <FadeIn key={title} delay={i * 70}>
              <div className="fluent-card p-7 flex flex-col group">
                <Icon className="h-4 w-4 text-accent mb-5 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-heading-3 font-bold mb-2 group-hover:text-accent transition-colors duration-200">{title}</h4>
                <p className="text-caption text-muted-foreground flex-1 mb-5">{desc}</p>
                <Link to={path} className="inline-flex items-center gap-2 text-xs font-semibold text-accent/50 hover:text-accent transition-colors group-hover:gap-3">
                  {cta} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ DEPLOYMENT ═══════════════ */}
      <Section id="deployment">
        <Tag>Implementation Pathway</Tag>
        <SectionTitle>National Pilot Model</SectionTitle>
        <div className="space-y-0 max-w-3xl">
          {[
            { phase: "Phase 1", title: "Readiness Assessment", desc: "Maturity evaluation, stakeholder mapping, gap analysis", status: "Active" },
            { phase: "Phase 2", title: "Integration Nodes", desc: "Deploy connectors, encode policy rules, validate enforcement" },
            { phase: "Phase 3", title: "Controlled Deployment", desc: "Operational environment, security audit, audit trail exercises" },
            { phase: "Phase 4", title: "Institutional Scaling", desc: "Cross-department rollout, training, compliance automation" },
            { phase: "Phase 5", title: "International Federation", desc: "Cross-border verification, multilateral alignment, Level III" },
          ].map((s, i) => (
            <FadeIn key={s.phase} delay={i * 60}>
              <div>
                <div className="flex items-center gap-5 py-5">
                  <div className="shrink-0 w-10 h-10 rounded-md bg-accent/10 border border-accent/20 text-accent flex items-center justify-center text-sm font-mono font-bold transition-all duration-300 hover:bg-accent hover:text-accent-foreground">
                    {i + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h4 className="text-heading-3 font-bold">{s.title}</h4>
                      {s.status && (
                        <span className="carbon-tag text-[9px] animate-pulse">{s.status.toUpperCase()}</span>
                      )}
                    </div>
                    <p className="text-caption text-muted-foreground mt-0.5">{s.desc}</p>
                  </div>
                </div>
                {i < 4 && <div className="ml-5 w-px h-4 bg-accent/10" />}
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ THOUGHT LEADERSHIP ═══════════════ */}
      <Section id="insights" elevated>
        <Tag>Institutional Insights</Tag>
        <SectionTitle sub="Research and analysis from the GRGF knowledge base.">
          Thought Leadership
        </SectionTitle>
        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-5">
          {[
            { title: "The Missing Trust Layer in DPI", slug: "missing-trust-layer", cat: "Architecture" },
            { title: "Why Institutional Memory Fails", slug: "institutional-memory-fails", cat: "Governance" },
            { title: "Anti-Capture Governance Mechanisms", slug: "anti-capture-mechanisms", cat: "Safeguards" },
            { title: "Append-Only Records vs Traditional DBs", slug: "append-only-records", cat: "Technology" },
            { title: "Sovereign Digital Trust Architecture", slug: "sovereign-trust-architecture", cat: "Strategy" },
          ].map(({ title, slug, cat }, i) => (
            <FadeIn key={slug} delay={i * 50}>
              <Link to={`/insights/${slug}`} className="fluent-card p-5 group flex flex-col h-full">
                <span className="text-[10px] font-mono text-accent/40 uppercase tracking-[0.08em] mb-3">{cat}</span>
                <h4 className="text-sm font-bold group-hover:text-accent transition-colors flex-1">{title}</h4>
                <p className="mt-4 text-xs text-muted-foreground/50 flex items-center gap-1">
                  Read <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ═══════════════ CLOSING CTA ═══════════════ */}
      <Section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(var(--accent)), transparent 50%)" }} />
        <FadeIn>
          <div className="relative text-center max-w-3xl mx-auto py-12">
            <p className="display-massive text-foreground/25" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}>
              {t("home.closing_1")}
            </p>
            <p className="display-massive text-foreground/25 mt-1.5" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}>
              {t("home.closing_2")}
            </p>
            <p className="display-massive text-accent mt-3" style={{ fontSize: "clamp(1.8rem, 4.5vw, 3.2rem)" }}>
              {t("home.closing_3")}
            </p>
            <p className="text-body text-muted-foreground mt-6 mb-12 max-w-xl mx-auto">
              {t("home.closing_sub")}
            </p>
            <div className="flex flex-wrap gap-2.5 justify-center">
              <Link to="/submission-hub" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:brightness-110">
                International Submission Pack
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-3.5 border border-border/60 text-foreground text-sm font-medium rounded-md transition-all duration-300 hover:bg-accent/5 hover:border-accent/30">
                {t("home.cta_assess")}
              </Link>
              <Link to="/partnerships" className="inline-flex items-center gap-2 px-8 py-3.5 border border-border/40 text-foreground/60 text-sm font-medium rounded-md transition-all duration-300 hover:bg-accent/5 hover:text-foreground">
                Partner With Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
};

export default Index;