import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, Globe, Lock,
  Database, CheckCircle, BarChart3, FileText, Users,
  Award, BookOpen, Handshake, Scale, Building, Eye,
  Landmark, Network, Gavel, TrendingUp, Zap, Activity,
  AlertTriangle, Search, Layers,
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
      title="GRGF — Global Record Governance Framework | Digital Public Infrastructure Standards Authority"
      description="Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Sovereign-grade trust layer for verifiable institutional accountability."
    />

    {/* ═══════════════════ HERO — PROBLEM-FIRST ═══════════════════ */}
    <header id="hero" className="relative overflow-hidden border-b border-border px-6 py-28 md:py-36 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px),
                          repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 80px)`
      }} />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        {/* Problem statement lead */}
        <FadeIn delay={0}>
          <p className="text-sm font-mono text-destructive/80 uppercase tracking-widest mb-6 flex items-center gap-2">
            <AlertTriangle className="h-3.5 w-3.5" />
            The Global Governance Gap
          </p>
        </FadeIn>

        <FadeIn delay={100}>
          <h1 className="institutional-heading font-semibold leading-[0.95] text-primary-foreground max-w-5xl" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
            Governments lack independent
            <br />
            institutional memory protection.
          </h1>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-6 text-body-lg text-primary-foreground/60 max-w-2xl leading-relaxed">
            Political transitions erase continuity. Record tampering undermines public trust.
            Existing DPI focuses on services — not institutional trust layers.
            There is no global neutral verification backbone.
          </p>
        </FadeIn>

        <FadeIn delay={250}>
          <div className="mt-8 border-t border-primary-foreground/10 pt-8">
            <p className="text-overline font-mono text-accent uppercase tracking-widest mb-3">The Solution</p>
            <p className="text-xl md:text-2xl font-serif text-primary-foreground/90 max-w-3xl leading-snug">
              The <span className="text-accent font-semibold">Global Record Governance Framework (GRGF)</span> is an independent institutional memory and trust verification layer for sovereign digital systems.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="mt-4 text-caption text-primary-foreground/30 font-mono">
            {t("home.patent")}
          </div>
        </FadeIn>

        {/* KPI Panels */}
        <FadeIn delay={350}>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { label: "Annual Governance Loss", value: "$2.6T", sub: "Global estimate" },
              { label: "Integrity Threshold", value: "0.3%", sub: "To offset deployment cost" },
              { label: "Deployment Maturity", value: "TRL 6", sub: "Pilot-validated" },
              { label: "Audit Reconstruction", value: "<30 min", sub: "vs. weeks manually" },
              { label: "Policy Determinism", value: "100%", sub: "Identical inputs → outputs" },
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
            <Link to="/the-problem" className="group inline-flex items-center gap-2 px-7 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]">
              <Search className="h-4 w-4" />
              Understand the Problem
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/architecture" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:border-accent/40">
              <Cpu className="h-4 w-4" />
              View Architecture
            </Link>
            <Link to="/submission-hub" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/15 text-primary-foreground/80 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
              <FileText className="h-4 w-4" />
              International Submission Pack
            </Link>
            <Link to="/financial-model" className="inline-flex items-center gap-2 px-7 py-4 border border-primary-foreground/10 text-primary-foreground/70 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
              <BarChart3 className="h-4 w-4" />
              ROI Analysis
            </Link>
          </div>
        </FadeIn>

        {/* Trust strip */}
        <FadeIn delay={600}>
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 grid grid-cols-2 md:grid-cols-5 gap-8">
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

    {/* ═══════════════════ THE FIVE GOVERNANCE FAILURES ═══════════════════ */}
    <Sec id="failures" className="border-b border-border">
      <FadeIn>
        <SectionLabel>Why This Matters</SectionLabel>
        <Title sub="Five structural failures that existing Digital Public Infrastructure does not address.">
          The Governance Trust Deficit
        </Title>
        <div className="grid gap-4 md:grid-cols-5">
          {[
            { icon: AlertTriangle, num: "01", title: "No Institutional Memory", desc: "Political transitions routinely erase governance continuity. Institutional knowledge is lost with each administration change." },
            { icon: Eye, num: "02", title: "Invisible Omissions", desc: "No system records what governments didn't do. Delays, inaction, and silence remain structurally invisible." },
            { icon: Shield, num: "03", title: "Tamperable Records", desc: "Existing record systems allow retroactive modification. Evidence of institutional decisions can be altered or deleted." },
            { icon: Globe, num: "04", title: "No Verification Backbone", desc: "There is no global neutral infrastructure for verifying that governance events actually occurred as claimed." },
            { icon: Layers, num: "05", title: "Service-Layer DPI Only", desc: "Current DPI focuses on identity, payments, and data sharing — not on the trust layer that governs them all." },
          ].map(({ icon: Icon, num, title, desc }, i) => (
            <FadeIn key={num} delay={i * 80}>
              <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-overline font-mono text-accent">{num}</span>
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ LIVE TRUST DASHBOARD ═══════════════════ */}
    <Sec id="trust-metrics" className="border-b border-border bg-muted/30">
      <SectionLabel>{t("home.system_status")}</SectionLabel>
      <Title sub={t("home.live_dashboard_sub")}>
        {t("home.live_dashboard")}
      </Title>
      <LiveTrustDashboard />
    </Sec>

    {/* ═══════════════════ GRGF POSITIONING ═══════════════════ */}
    <Sec id="positioning" className="border-b border-border">
      <FadeIn>
        <SectionLabel>What GRGF Is</SectionLabel>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="institutional-heading text-heading-1 font-semibold mb-6">
              An Independent Institutional Memory &amp; Trust Verification Layer
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              GRGF is not a competing service layer. It is a <strong>governance trust backbone</strong> — a neutral, sovereign-compatible infrastructure that records, preserves, and verifies institutional actions, decisions, and omissions without interpretation or enforcement.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              Positioned as the <strong>Governance Integrity Registry (Layer 3)</strong> within the national DPI stack, it sits above base registries and alongside core DPI components (Identity, Payments, Data Exchange) — complementing existing building blocks rather than replacing them.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed mb-6">
              GRGF maintains strict institutional neutrality — exercising no enforcement capability, no decision authority, and no evaluative function. <em>It records. It preserves. It verifies.</em>
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-serif font-semibold text-accent">$<AnimatedCounter end={18.3} suffix="B" decimals={1} /></p>
                <p className="text-overline text-muted-foreground/50">Projected global annual net benefit</p>
              </div>
              <div>
                <p className="text-2xl font-serif font-semibold text-accent"><AnimatedCounter end={0.3} suffix="%" decimals={1} /></p>
                <p className="text-overline text-muted-foreground/50">Integrity threshold to offset cost</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { icon: Landmark, title: "Institutional Independence", desc: "Governed by charter with formal separation of powers. Anti-capture clauses (AC-01–05) prevent vendor or state control." },
              { icon: Globe, title: "Sovereign Compatibility", desc: "Non-invasive integration strengthens existing national systems without replacing operational control." },
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

    {/* ═══════════════════ DPI COMPARATIVE POSITIONING ═══════════════════ */}
    <Sec id="dpi-position" className="border-b border-border bg-muted/40">
      <FadeIn>
        <SectionLabel>DPI Positioning</SectionLabel>
        <Title sub="GRGF complements — not competes with — existing Digital Public Infrastructure initiatives.">
          Where GRGF Sits in the Global DPI Landscape
        </Title>
        <div className="overflow-x-auto governance-card-elevated">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left py-4 px-4 font-serif font-semibold">Dimension</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">GovStack</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">DPGA</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">UNDP DPI</th>
                <th className="text-left py-4 px-4 font-serif font-semibold text-accent">GRGF</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dim: "Focus", gs: "Service building blocks", dp: "Open-source goods registry", un: "Safeguards framework", grgf: "Governance trust backbone" },
                { dim: "Layer", gs: "Application (L4)", dp: "Discovery (cross-layer)", un: "Policy (cross-layer)", grgf: "Integrity Registry (L3)" },
                { dim: "Record Integrity", gs: "Not addressed", dp: "Not addressed", un: "Guidance only", grgf: "Append-only, hash-anchored" },
                { dim: "Omission Detection", gs: "No", dp: "No", un: "No", grgf: "Yes — structural" },
                { dim: "Anti-Capture", gs: "Community governance", dp: "Multi-stakeholder", un: "Advisory", grgf: "5 codified clauses (AC-01–05)" },
                { dim: "Relationship", gs: "Complementary", dp: "Complementary", un: "Complementary", grgf: "Governance layer for all" },
              ].map(({ dim, gs, dp, un, grgf }) => (
                <tr key={dim} className="border-b border-border/60 hover:bg-muted/50 transition-colors">
                  <td className="py-3 px-4 font-medium text-foreground">{dim}</td>
                  <td className="py-3 px-4 text-muted-foreground">{gs}</td>
                  <td className="py-3 px-4 text-muted-foreground">{dp}</td>
                  <td className="py-3 px-4 text-muted-foreground">{un}</td>
                  <td className="py-3 px-4 text-accent font-medium">{grgf}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <Link to="/dpi-comparison" className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:text-accent transition-colors">
            View Full 28-Point Comparison Matrix <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </FadeIn>
    </Sec>

    {/* ═══════════════════ GOVERNANCE PRINCIPLES ═══════════════════ */}
    <Sec id="principles" className="border-b border-border">
      <SectionLabel>Governance Principles</SectionLabel>
      <Title sub="GRGF's operational mandate is grounded in six non-negotiable principles that ensure structural neutrality and institutional trust.">
        Charter Principles
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { num: "I", title: "Custodial Neutrality", desc: "GRGF holds no enforcement power. It records institutional reality without interpretation, evaluation, or recommendation." },
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
      <Title sub="GRGF capabilities map directly to established multilateral governance frameworks.">
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

    {/* ═══════════════════ FOUNDER & TRUST SIGNALS ═══════════════════ */}
    <Sec id="trust-signals" className="border-b border-border">
      <SectionLabel>Authority & Trust Signals</SectionLabel>
      <Title sub="Transparency builds credibility. These are the institutional foundations underpinning GRGF.">
        Institutional Foundations
      </Title>
      <div className="grid md:grid-cols-2 gap-10">
        <FadeIn>
          <div className="governance-card-elevated">
            <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" /> Inventor & Principal Architect
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p><strong className="text-foreground">Tarek Wahid</strong> — Creator and sole inventor of the Global Record Governance Framework architecture.</p>
              <p>Background in institutional systems design, governance integrity architecture, and digital public infrastructure standards. The framework was developed through first-principles analysis of governance accountability gaps across national and multilateral institutional environments.</p>
              <p className="text-xs font-mono text-muted-foreground/60">Canadian Patent No. CA 3,300,102 · Filed January 28, 2026</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="governance-card-elevated">
            <h3 className="font-serif text-lg font-semibold mb-4 flex items-center gap-2">
              <Building className="h-5 w-5 text-accent" /> Provisional Governance Structure
            </h3>
            <div className="space-y-3">
              {[
                { role: "Governance Board", status: "Formation Stage", desc: "Strategic oversight, charter stewardship, independent membership with term limits." },
                { role: "Standards Committee", status: "Formation Stage", desc: "Technical standards development, recognition criteria maintenance." },
                { role: "Advisory Council", status: "Open for Engagement", desc: "Multi-stakeholder input from governments, academia, civil society, and multilateral bodies." },
                { role: "Technical Review Panel", status: "Formation Stage", desc: "Architecture validation, security assessment, deployment verification." },
              ].map(({ role, status, desc }) => (
                <div key={role} className="flex gap-3 text-sm">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{role} <span className="text-xs font-mono text-accent/70 ml-1">{status}</span></p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={200}>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Framework", value: "GRGF v1.0" },
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

    {/* ═══════════════════ INSTITUTIONAL SERVICES ═══════════════════ */}
    <Sec id="services" className="border-b border-border bg-muted/40">
      <SectionLabel>Institutional Engagement</SectionLabel>
      <Title sub="Structured pathways for governments, multilateral organizations, and institutional partners.">
        How GRGF Engages
      </Title>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Award, title: "Recognition & Certification", desc: "Three-tier governance maturity assessment with independent audit validation.", cta: "Apply for Recognition", path: "/recognition" },
          { icon: BookOpen, title: "Advisory Services", desc: "Sovereign deployment planning, architecture review, and compliance gap analysis.", cta: "Request Assessment", path: "/controlled-access" },
          { icon: Handshake, title: "Strategic Partnerships", desc: "Multilateral collaboration, federation node participation, and co-development.", cta: "Partner With Us", path: "/partnerships" },
          { icon: Users, title: "Membership & Academy", desc: "Institutional membership tiers, certification programs, and governance training.", cta: "Explore Membership", path: "/membership" },
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

    {/* ═══════════════════ THOUGHT LEADERSHIP ═══════════════════ */}
    <Sec id="insights" className="border-b border-border bg-muted/40">
      <SectionLabel>Institutional Insights</SectionLabel>
      <Title sub="Research and analysis from the GRGF knowledge base.">
        Thought Leadership
      </Title>
      <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-5">
        {[
          { title: "The Missing Trust Layer in DPI", slug: "missing-trust-layer", cat: "Architecture" },
          { title: "Why Institutional Memory Fails", slug: "institutional-memory-fails", cat: "Governance" },
          { title: "Anti-Capture Governance Mechanisms", slug: "anti-capture-mechanisms", cat: "Safeguards" },
          { title: "Append-Only Records vs Traditional Databases", slug: "append-only-records", cat: "Technology" },
          { title: "Sovereign Digital Trust Architecture", slug: "sovereign-trust-architecture", cat: "Strategy" },
        ].map(({ title, slug, cat }, i) => (
          <FadeIn key={slug} delay={i * 80}>
            <Link to={`/insights/${slug}`} className="governance-card-elevated group hover:border-accent/30 transition-all duration-300 flex flex-col h-full">
              <span className="text-overline font-mono text-accent uppercase mb-2">{cat}</span>
              <h4 className="font-serif text-sm font-semibold group-hover:text-accent transition-colors flex-1">{title}</h4>
              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1">
                Read analysis <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </p>
            </Link>
          </FadeIn>
        ))}
      </div>
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
            <Link to="/submission-hub" className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]">
              International Submission Pack
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:border-accent/40">
              {t("home.cta_assess")}
            </Link>
            <Link to="/recognition" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/15 text-primary-foreground/80 text-sm font-medium transition-all duration-300 hover:bg-primary-foreground/5 hover:text-primary-foreground">
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
