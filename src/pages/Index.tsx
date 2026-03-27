import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText, Users,
  Award, BookOpen, Handshake, Scale, Building, Eye,
  Landmark, Network, Gavel, TrendingUp, Zap, Activity,
  AlertTriangle, Search, Layers, ClipboardCheck, Sparkles,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { FadeIn, StaggerChildren } from "@/components/FadeIn";
import { LiveTrustDashboard } from "@/components/LiveTrustDashboard";
import { GlobalFederationMap } from "@/components/GlobalFederationMap";
import { CompetitiveEdgeMatrix } from "@/components/CompetitiveEdgeMatrix";
import { useLanguage } from "@/contexts/LanguageContext";
import InstitutionalReadinessBanner from "@/components/InstitutionalReadinessBanner";

/* ── Reusable Cinematic Section ── */
const Sec = ({ id, children, className = "", dark }: { id?: string; children: React.ReactNode; className?: string; dark?: boolean }) => (
  <section id={id} className={`relative scroll-mt-14 px-6 py-32 md:px-12 lg:px-24 ${dark ? "bg-card/30" : ""} ${className}`}>
    <div className="max-w-[1200px] mx-auto relative">{children}</div>
  </section>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-overline font-mono text-accent/60 uppercase tracking-[0.2em] mb-6 flex items-center gap-3">
    <span className="w-10 h-px bg-accent/30" />
    {children}
    <span className="w-10 h-px bg-accent/30" />
  </p>
);

const Heading = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-16">
    <h2 className="display-massive" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>{children}</h2>
    {sub && <p className="mt-5 text-body-lg text-muted-foreground leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

/* ── Page ── */
const Index = () => {
  const { t } = useLanguage();
  return (
  <div>
    <SEOHead
      title="GRGF — Global Record Governance Framework | Digital Public Infrastructure Standards Authority"
      description="Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Sovereign-grade trust layer for verifiable institutional accountability."
    />

    {/* ═══════════════ HERO — FULL VIEWPORT CINEMATIC ═══════════════ */}
    <header id="hero" className="relative min-h-[100vh] flex items-center overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background layers */}
      <div className="absolute inset-0 grain" />
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 160px),
                          repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 160px)`
      }} />
      <div className="absolute top-[-20%] right-[-10%] w-[900px] h-[900px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle at 60% 40%, hsl(var(--accent)), transparent 55%)" }}
      />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(162 65% 40%), transparent 55%)" }}
      />
      {/* Horizontal lines */}
      <div className="absolute top-[20%] left-0 right-0 h-px bg-border/20" />
      <div className="absolute top-[80%] left-0 right-0 h-px bg-border/20" />

      <div className="relative max-w-[1200px] mx-auto w-full py-20">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-destructive/15 bg-destructive/5 text-destructive text-[11px] font-mono uppercase tracking-[0.15em] mb-10">
            <AlertTriangle className="h-3.5 w-3.5" />
            The Global Governance Gap
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="display-massive max-w-[900px]" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>
            <span className="text-foreground/40">Governments lack</span>
            <br />
            <span className="text-accent">independent</span>
            <br />
            <span className="text-foreground">institutional memory</span>
            <br />
            <span className="text-foreground/40">protection.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={250}>
          <p className="mt-10 text-body-lg text-muted-foreground max-w-xl leading-relaxed">
            Political transitions erase continuity. Record tampering undermines public trust.
            There is no global neutral verification backbone.
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/the-problem" className="group inline-flex items-center gap-2.5 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:scale-[1.03]">
              <Search className="h-4 w-4" />
              Understand the Problem
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link to="/architecture" className="inline-flex items-center gap-2.5 px-8 py-4 border border-border/60 text-foreground text-sm font-medium rounded-lg transition-all duration-500 hover:bg-accent/5 hover:border-accent/30">
              <Cpu className="h-4 w-4" />
              View Architecture
            </Link>
            <Link to="/submission-hub" className="inline-flex items-center gap-2.5 px-8 py-4 border border-border/40 text-foreground/60 text-sm font-medium rounded-lg transition-all duration-500 hover:bg-accent/5 hover:text-foreground">
              <FileText className="h-4 w-4" />
              Submission Pack
            </Link>
          </div>
        </FadeIn>

        {/* ── Bento KPI Strip ── */}
        <FadeIn delay={500}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Annual Loss", value: "$2.6T", sub: "Global governance failures" },
              { label: "Integrity Threshold", value: "0.3%", sub: "ROI breakeven" },
              { label: "Maturity", value: "TRL 6", sub: "Pilot-validated" },
              { label: "Audit Reconstruction", value: "<30 min", sub: "vs. weeks" },
              { label: "Policy Determinism", value: "100%", sub: "Identical in → out" },
            ].map(({ label, value, sub }) => (
              <div key={label} className="bento-card p-5 group">
                <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.15em] mb-2">{label}</p>
                <p className="text-2xl font-serif font-bold text-accent group-hover:text-gold-light transition-colors duration-500">{value}</p>
                <p className="text-[10px] text-muted-foreground/25 mt-1 font-mono">{sub}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* ── Animated Trust Numbers ── */}
        <FadeIn delay={600}>
          <div className="mt-16 pt-12 border-t border-border/20 grid grid-cols-2 md:grid-cols-5 gap-10">
            {[
              { end: 100, suffix: "%", label: t("home.stat_determinism") },
              { prefix: "<", end: 30, suffix: " min", label: t("home.stat_audit") },
              { end: 3, suffix: "-Tier", label: t("home.stat_recognition") },
              { end: 6, suffix: "-Layer", label: t("home.stat_architecture") },
              { end: 5, suffix: "-Phase", label: t("home.stat_deployment") },
            ].map(({ end, suffix, prefix, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-serif font-bold text-accent">
                  {prefix && <span>{prefix}</span>}
                  <AnimatedCounter end={end} suffix={suffix} />
                </p>
                <p className="text-[10px] font-mono text-muted-foreground/30 mt-1.5 uppercase tracking-[0.15em]">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="mt-6 text-[10px] text-muted-foreground/20 font-mono tracking-wider">
            {t("home.patent")}
          </p>
        </FadeIn>
      </div>
    </header>

    {/* ═══════════════ SOLUTION STATEMENT ═══════════════ */}
    <Sec id="solution">
      <FadeIn>
        <div className="bento-card p-10 md:p-16 glow-accent">
          <Label>The Solution</Label>
          <p className="display-massive text-accent/90" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)" }}>
            The Global Record Governance Framework
          </p>
          <p className="mt-6 text-body-lg text-muted-foreground max-w-3xl leading-relaxed">
            An independent institutional memory and trust verification layer for sovereign digital systems.
            It records. It preserves. It verifies. — Without interpretation or enforcement.
          </p>
          <div className="mt-10 flex gap-12 flex-wrap">
            <div>
              <p className="text-3xl font-serif font-bold text-accent">$<AnimatedCounter end={18.3} suffix="B" decimals={1} /></p>
              <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.12em] mt-1">Projected annual net benefit</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-accent"><AnimatedCounter end={0.3} suffix="%" decimals={1} /></p>
              <p className="text-[10px] font-mono text-muted-foreground/35 uppercase tracking-[0.12em] mt-1">Integrity threshold</p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════ FIVE GOVERNANCE FAILURES — BENTO GRID ═══════════════ */}
    <Sec id="failures" dark>
      <FadeIn>
        <Label>Why This Matters</Label>
        <Heading sub="Five structural failures that existing DPI does not address.">
          The Governance Trust Deficit
        </Heading>
      </FadeIn>
      <div className="bento-grid">
        {[
          { icon: AlertTriangle, num: "01", title: "No Institutional Memory", desc: "Political transitions routinely erase governance continuity.", span: "bento-span-2 bento-row-2" },
          { icon: Eye, num: "02", title: "Invisible Omissions", desc: "No system records what governments didn't do.", span: "bento-span-2" },
          { icon: Shield, num: "03", title: "Tamperable Records", desc: "Existing systems allow retroactive modification.", span: "bento-span-2" },
          { icon: Globe, num: "04", title: "No Verification Backbone", desc: "No global neutral infrastructure for verifying governance events.", span: "bento-span-2" },
          { icon: Layers, num: "05", title: "Service-Layer DPI Only", desc: "Current DPI focuses on identity & payments — not institutional trust.", span: "bento-span-2" },
        ].map(({ icon: Icon, num, title, desc, span }, i) => (
          <FadeIn key={num} delay={i * 100}>
            <div className={`bento-card p-8 h-full flex flex-col justify-between group ${span}`}>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-overline font-mono text-accent/40">{num}</span>
                  <Icon className="h-5 w-5 text-accent/70 group-hover:text-accent transition-colors duration-500" />
                </div>
                <h4 className="font-serif text-heading-3 font-semibold mb-3 group-hover:text-accent transition-colors duration-500">{title}</h4>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ LIVE TRUST DASHBOARD ═══════════════ */}
    <Sec id="trust-metrics">
      <Label>{t("home.system_status")}</Label>
      <Heading sub={t("home.live_dashboard_sub")}>
        {t("home.live_dashboard")}
      </Heading>
      <LiveTrustDashboard />
    </Sec>

    {/* ═══════════════ WHAT GRGF IS — EDITORIAL SPLIT ═══════════════ */}
    <Sec id="positioning" dark>
      <FadeIn>
        <Label>What GRGF Is</Label>
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="display-massive" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}>
              An Independent Institutional Memory &amp; Trust Verification Layer
            </h2>
            <p className="mt-8 text-body text-muted-foreground leading-relaxed">
              GRGF is not a competing service layer. It is a <strong className="text-foreground">governance trust backbone</strong> — a neutral, sovereign-compatible infrastructure that records, preserves, and verifies institutional actions, decisions, and omissions.
            </p>
            <p className="mt-4 text-body text-muted-foreground leading-relaxed">
              Positioned as the <strong className="text-foreground">Governance Integrity Registry (Layer 3)</strong> within the national DPI stack. <em className="text-accent/80">It records. It preserves. It verifies.</em>
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Landmark, title: "Institutional Independence", desc: "Governed by charter with formal separation of powers. Anti-capture clauses (AC-01–05)." },
              { icon: Globe, title: "Sovereign Compatibility", desc: "Non-invasive integration strengthens existing national systems." },
              { icon: Lock, title: "Cryptographic Assurance", desc: "Every governance event becomes tamper-evident with full chain-of-custody." },
              { icon: Eye, title: "Omission Awareness", desc: "The only governance infrastructure that records inaction alongside action." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 120}>
                <div className="bento-card p-6 flex gap-5 group">
                  <Icon className="h-5 w-5 text-accent shrink-0 mt-1 group-hover:scale-110 transition-transform duration-500" />
                  <div>
                    <h4 className="font-serif text-heading-3 font-semibold mb-1.5 group-hover:text-accent transition-colors duration-500">{title}</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════ DPI COMPARATIVE TABLE ═══════════════ */}
    <Sec id="dpi-position">
      <FadeIn>
        <Label>DPI Positioning</Label>
        <Heading sub="GRGF complements — not competes with — existing DPI initiatives.">
          Global DPI Landscape
        </Heading>
        <div className="overflow-x-auto bento-card p-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/15">
                <th className="text-left py-5 px-6 font-serif font-semibold text-foreground">Dimension</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">GovStack</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">DPGA</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">UNDP DPI</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-accent">GRGF</th>
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
                <tr key={dim} className="border-b border-border/30 hover:bg-accent/[0.02] transition-colors duration-500">
                  <td className="py-4 px-6 font-medium text-foreground">{dim}</td>
                  <td className="py-4 px-6 text-muted-foreground/60">{gs}</td>
                  <td className="py-4 px-6 text-muted-foreground/60">{dp}</td>
                  <td className="py-4 px-6 text-muted-foreground/60">{un}</td>
                  <td className="py-4 px-6 text-accent font-semibold">{grgf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <Link to="/dpi-comparison" className="inline-flex items-center gap-2 text-sm text-accent/60 font-medium hover:text-accent transition-colors duration-500">
            Full 28-Point Comparison <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════ CHARTER PRINCIPLES — BENTO ═══════════════ */}
    <Sec id="principles" dark>
      <Label>Governance Principles</Label>
      <Heading sub="Six non-negotiable principles ensuring structural neutrality and institutional trust.">
        Charter Principles
      </Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { num: "I", title: "Custodial Neutrality", desc: "Records institutional reality without interpretation, evaluation, or recommendation." },
          { num: "II", title: "Structural Verifiability", desc: "Every claim independently verifiable through cryptographic proof." },
          { num: "III", title: "Sovereign Primacy", desc: "National sovereignty is absolute. No federation diminishes a state's control." },
          { num: "IV", title: "Omission Accountability", desc: "Governance silence recorded with equal structural weight as action." },
          { num: "V", title: "Anti-Capture Assurance", desc: "Formal clauses prevent any entity from acquiring undue influence." },
          { num: "VI", title: "Perpetual Transparency", desc: "All standards and criteria are publicly accessible. Authority through structure." },
        ].map(({ num, title, desc }, i) => (
          <FadeIn key={num} delay={i * 80}>
            <div className="bento-card p-8 group">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-lg bg-accent/8 border border-accent/15 text-accent flex items-center justify-center text-xs font-mono font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">{num}</span>
                <h4 className="font-serif text-heading-3 font-semibold group-hover:text-accent transition-colors duration-500">{title}</h4>
              </div>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ COMPETITIVE EDGE ═══════════════ */}
    <Sec id="edge">
      <Label>Competitive Positioning</Label>
      <Heading sub="Unified architecture for omission-awareness, deterministic enforcement, and anti-capture governance.">
        Structural Differentiation
      </Heading>
      <div className="bento-card p-6 md:p-10">
        <CompetitiveEdgeMatrix />
      </div>
    </Sec>

    {/* ═══════════════ RECOGNITION FRAMEWORK ═══════════════ */}
    <Sec id="standards" dark>
      <Label>Standards Registry</Label>
      <Heading sub="Three-tier pathway for institutional governance compliance.">
        Recognition Framework
      </Heading>
      <div className="grid gap-5 md:grid-cols-3 mb-10">
        {[
          { level: "Level I", title: "Foundational Compliance", items: ["Core record integrity", "Basic policy enforcement", "Audit trail generation", "Documentation requirements"], accent: "border-l-accent/25" },
          { level: "Level II", title: "Verified Alignment", items: ["Deterministic enforcement", "SHA-256 anchoring", "Federation-ready architecture", "Independent security audit"], accent: "border-l-accent/55" },
          { level: "Level III", title: "Institutional-Grade DPI", items: ["Full omission-awareness", "Cross-border federation", "Continuous compliance", "Re-certification cycle"], accent: "border-l-accent" },
        ].map(({ level, title, items, accent }, i) => (
          <FadeIn key={level} delay={i * 120}>
            <div className={`bento-card p-8 border-l-4 ${accent}`}>
              <span className="text-overline font-mono text-accent/50 uppercase tracking-[0.15em]">{level}</span>
              <h4 className="font-serif text-heading-3 font-semibold mt-3 mb-6">{title}</h4>
              <ul className="space-y-3">
                {items.map(item => (
                  <li key={item} className="flex items-start gap-3 text-caption text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-accent/50 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      <Link to="/recognition" className="inline-flex items-center gap-2 text-sm text-accent/60 font-medium hover:text-accent transition-colors duration-500">
        Recognition Criteria & Application <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </Sec>

    {/* ═══════════════ SIX-LAYER ARCHITECTURE ═══════════════ */}
    <Sec id="framework">
      <Label>Technical Architecture</Label>
      <Heading sub="Modular, sovereign-compatible architecture from event capture to international federation.">
        Six-Layer Governance Infrastructure
      </Heading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Cpu, title: "Event Capture", desc: "Schema-based institutional event ingestion with standardized format enforcement." },
          { icon: Gavel, title: "Policy Decision Engine", desc: "Deterministic enforcement — identical inputs always produce identical outputs." },
          { icon: Database, title: "Evidence Backbone", desc: "Append-only cryptographic ledger with SHA-256/512 anchoring and WORM storage." },
          { icon: Lock, title: "Cryptographic Anchoring", desc: "Hash-chain verification, timestamped proofs, and attestation certificates." },
          { icon: Shield, title: "Verification API", desc: "Public endpoint enabling integrity validation without exposing content." },
          { icon: Network, title: "Federation Protocol", desc: "Cross-border verification with sovereign nodes maintaining local control." },
        ].map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="bento-card p-8 group">
              <Icon className="h-5 w-5 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="font-serif text-heading-3 font-semibold mb-3 group-hover:text-accent transition-colors duration-500">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ GLOBAL FEDERATION MAP ═══════════════ */}
    <Sec id="federation" dark>
      <Label>Global Presence</Label>
      <Heading sub="Sovereign deployment worldwide. Each node operates independently within a trust-verified federation.">
        Federation Network
      </Heading>
      <GlobalFederationMap />
    </Sec>

    {/* ═══════════════ MULTILATERAL ALIGNMENT ═══════════════ */}
    <Sec id="alignment">
      <Label>International Alignment</Label>
      <Heading sub="GRGF maps directly to established multilateral governance frameworks.">
        Multilateral Institutional Matrix
      </Heading>
      <FadeIn>
        <div className="overflow-x-auto bento-card p-0">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/15">
                <th className="text-left py-5 px-6 font-serif font-semibold">GRGF Capability</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">World Bank</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">UN SDGs</th>
                <th className="text-left py-5 px-6 font-serif font-semibold text-muted-foreground">OECD</th>
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
                <tr key={cap} className="border-b border-border/30 hover:bg-accent/[0.02] transition-colors duration-500">
                  <td className="py-4 px-6 font-medium text-foreground">{cap}</td>
                  <td className="py-4 px-6 text-muted-foreground/60">{wb}</td>
                  <td className="py-4 px-6"><span className="px-2.5 py-1 rounded bg-accent/8 text-accent text-xs font-mono">{un}</span></td>
                  <td className="py-4 px-6 text-muted-foreground/60">{oecd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════ READINESS BANNER ═══════════════ */}
    <InstitutionalReadinessBanner />

    {/* ═══════════════ QUICK NAVIGATION — BENTO ═══════════════ */}
    <Sec id="navigate" dark>
      <Label>Explore</Label>
      <Heading>Quick Navigation</Heading>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
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
          <FadeIn key={path} delay={i * 60}>
            <Link to={path} className="bento-card p-6 flex items-center gap-4 group magnetic">
              <Icon className="h-5 w-5 text-accent/60 group-hover:text-accent transition-colors duration-500 shrink-0" />
              <span className="font-serif text-sm font-semibold group-hover:text-accent transition-colors duration-500">{title}</span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ FOUNDER & TRUST ═══════════════ */}
    <Sec id="trust-signals">
      <Label>Authority & Trust</Label>
      <Heading sub="Transparency builds credibility.">
        Institutional Foundations
      </Heading>
      <div className="grid md:grid-cols-2 gap-6">
        <FadeIn>
          <div className="bento-card p-8">
            <h3 className="font-serif text-lg font-semibold mb-5 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" /> Inventor & Architect
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Tarek Wahid</strong> — Creator and sole inventor of the GRGF architecture.</p>
              <p>Background in institutional systems design, governance integrity architecture, and digital public infrastructure standards.</p>
              <p className="text-xs font-mono text-muted-foreground/35">Canadian Patent No. CA 3,300,102 · Filed January 28, 2026</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="bento-card p-8">
            <h3 className="font-serif text-lg font-semibold mb-5 flex items-center gap-2">
              <Building className="h-5 w-5 text-accent" /> Governance Structure
            </h3>
            <div className="space-y-3">
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
      <FadeIn delay={200}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "Framework", value: "GRGF v1.0" },
            { label: "Recognition", value: "3-Tier" },
            { label: "Pilot Node", value: "v0.1" },
            { label: "Patent", value: "CA 3,300,102" },
            { label: "Registry", value: "GRGF-2024-001" },
          ].map(({ label, value }) => (
            <div key={label} className="bento-card p-5 text-center group">
              <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.15em] mb-2">{label}</p>
              <p className="text-sm font-serif font-semibold text-foreground group-hover:text-accent transition-colors duration-500">{value}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════ ENGAGEMENT ═══════════════ */}
    <Sec id="services" dark>
      <Label>Institutional Engagement</Label>
      <Heading sub="Structured pathways for governments, multilateral organizations, and institutional partners.">
        How GRGF Engages
      </Heading>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, title: "Recognition", desc: "Three-tier maturity assessment with independent audit validation.", cta: "Apply", path: "/recognition" },
          { icon: BookOpen, title: "Advisory", desc: "Sovereign deployment planning, architecture review, gap analysis.", cta: "Request", path: "/controlled-access" },
          { icon: Handshake, title: "Partnerships", desc: "Multilateral collaboration and federation node participation.", cta: "Partner", path: "/partnerships" },
          { icon: Users, title: "Academy", desc: "Institutional membership, certification, and governance training.", cta: "Explore", path: "/membership" },
        ].map(({ icon: Icon, title, desc, cta, path }, i) => (
          <FadeIn key={title} delay={i * 100}>
            <div className="bento-card p-8 flex flex-col group">
              <Icon className="h-5 w-5 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="font-serif text-heading-3 font-semibold mb-2 group-hover:text-accent transition-colors duration-500">{title}</h4>
              <p className="text-caption text-muted-foreground leading-relaxed flex-1 mb-6">{desc}</p>
              <Link to={path} className="inline-flex items-center gap-2 text-xs font-semibold text-accent/50 hover:text-accent transition-colors duration-500 group-hover:gap-3">
                {cta} <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ DEPLOYMENT PATHWAY ═══════════════ */}
    <Sec id="deployment">
      <Label>Implementation Pathway</Label>
      <Heading>National Pilot Model</Heading>
      <div className="space-y-0 max-w-3xl">
        {[
          { phase: "Phase 1", title: "Readiness Assessment", desc: "Maturity evaluation, stakeholder mapping, gap analysis", status: "Active" },
          { phase: "Phase 2", title: "Integration Nodes", desc: "Deploy connectors, encode policy rules, validate enforcement" },
          { phase: "Phase 3", title: "Controlled Deployment", desc: "Operational environment, security audit, audit trail exercises" },
          { phase: "Phase 4", title: "Institutional Scaling", desc: "Cross-department rollout, training, compliance automation" },
          { phase: "Phase 5", title: "International Federation", desc: "Cross-border verification, multilateral alignment, Level III" },
        ].map((s, i) => (
          <FadeIn key={s.phase} delay={i * 80}>
            <div>
              <div className="flex items-center gap-6 py-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/8 border border-accent/15 text-accent flex items-center justify-center text-sm font-mono font-bold transition-all duration-500 hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:shadow-accent/20">
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h4 className="font-serif text-heading-3 font-semibold">{s.title}</h4>
                    {s.status && (
                      <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-accent/8 text-accent/60 animate-pulse">
                        {s.status.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <p className="text-caption text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
              {i < 4 && <div className="ml-6 w-px h-5 bg-accent/10" />}
            </div>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ THOUGHT LEADERSHIP ═══════════════ */}
    <Sec id="insights" dark>
      <Label>Institutional Insights</Label>
      <Heading sub="Research and analysis from the GRGF knowledge base.">
        Thought Leadership
      </Heading>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        {[
          { title: "The Missing Trust Layer in DPI", slug: "missing-trust-layer", cat: "Architecture" },
          { title: "Why Institutional Memory Fails", slug: "institutional-memory-fails", cat: "Governance" },
          { title: "Anti-Capture Governance Mechanisms", slug: "anti-capture-mechanisms", cat: "Safeguards" },
          { title: "Append-Only Records vs Traditional DBs", slug: "append-only-records", cat: "Technology" },
          { title: "Sovereign Digital Trust Architecture", slug: "sovereign-trust-architecture", cat: "Strategy" },
        ].map(({ title, slug, cat }, i) => (
          <FadeIn key={slug} delay={i * 80}>
            <Link to={`/insights/${slug}`} className="bento-card p-6 group flex flex-col h-full magnetic">
              <span className="text-[10px] font-mono text-accent/40 uppercase tracking-[0.15em] mb-4">{cat}</span>
              <h4 className="font-serif text-sm font-semibold group-hover:text-accent transition-colors duration-500 flex-1">{title}</h4>
              <p className="mt-5 text-xs text-muted-foreground/50 flex items-center gap-1">
                Read <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform duration-500" />
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Sec>

    {/* ═══════════════ CLOSING CTA — CINEMATIC ═══════════════ */}
    <Sec className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(var(--accent)), transparent 55%)" }} />
      <FadeIn>
        <div className="relative text-center max-w-3xl mx-auto py-16">
          <p className="display-massive text-foreground/30" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t("home.closing_1")}
          </p>
          <p className="display-massive text-foreground/30 mt-2" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t("home.closing_2")}
          </p>
          <p className="display-massive text-accent mt-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            {t("home.closing_3")}
          </p>
          <p className="text-body text-muted-foreground mt-8 mb-14 max-w-xl mx-auto">
            {t("home.closing_sub")}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/submission-hub" className="group inline-flex items-center gap-2.5 px-10 py-4.5 bg-accent text-accent-foreground text-sm font-semibold tracking-wide rounded-lg transition-all duration-500 hover:shadow-2xl hover:shadow-accent/25 hover:scale-[1.03]">
              International Submission Pack
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
            <Link to="/controlled-access" className="inline-flex items-center gap-2.5 px-10 py-4.5 border border-border/60 text-foreground text-sm font-medium rounded-lg transition-all duration-500 hover:bg-accent/5 hover:border-accent/30">
              {t("home.cta_assess")}
            </Link>
            <Link to="/partnerships" className="inline-flex items-center gap-2.5 px-10 py-4.5 border border-border/40 text-foreground/60 text-sm font-medium rounded-lg transition-all duration-500 hover:bg-accent/5 hover:text-foreground">
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
