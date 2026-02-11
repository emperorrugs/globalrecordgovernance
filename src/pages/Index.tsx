import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle, Layers, Shield, ShieldCheck,
  FileText, BarChart3, Lock, Eye, Users, Scale,
  ArrowRight, ArrowDown, Database, Cpu,
  Network, Globe, Server, Zap, TrendingUp,
  AlertTriangle,
} from "lucide-react";

/* ── Section anchors ── */
const sections = [
  { id: "hero", label: "Home" },
  { id: "category", label: "What It Is" },
  { id: "leverage", label: "Leverage" },
  { id: "architecture", label: "Architecture" },
  { id: "stakeholders", label: "Stakeholders" },
  { id: "kpis", label: "Pilot KPIs" },
  { id: "roadmap", label: "Roadmap" },
  { id: "trust", label: "Trust" },
  { id: "moat", label: "Defensibility" },
  { id: "execution", label: "Execution" },
  { id: "scaling", label: "Scale" },
  { id: "capital", label: "Capital" },
  { id: "risk", label: "Risk" },
  { id: "status", label: "Status" },
];

/* ── Sticky Nav ── */
function StickyNav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        return { id, top: el ? el.getBoundingClientRect().top : 9999 };
      });
      const current = offsets.reduce(
        (best, s) => (s.top <= 120 && s.top > best.top ? s : best),
        { id: "hero", top: -Infinity }
      );
      setActive(current.id);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm"
          : "bg-background border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12">
        <a href="#hero" className="font-serif text-sm font-semibold text-foreground tracking-wide shrink-0">
          GRGF
        </a>
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {sections.slice(1).map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`px-2.5 py-1.5 rounded-sm text-[11px] font-medium transition-colors whitespace-nowrap ${
                active === id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ── Reusable ── */
const Sec = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`scroll-mt-14 px-8 py-16 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const Title = ({ children, sub }: { children: React.ReactNode; sub?: string }) => (
  <div className="mb-8">
    <h2 className="institutional-heading text-2xl md:text-3xl font-semibold">{children}</h2>
    {sub && <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">{sub}</p>}
  </div>
);

/* ── Page ── */
const Index = () => (
  <div className="animate-fade-in">
    <StickyNav />

    {/* ─── 1. HERO ─── */}
    <header id="hero" className="scroll-mt-14 border-b border-border bg-card/50 px-8 py-20 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-accent/30 rounded-sm mb-6">
          <span className="w-2 h-2 bg-accent rounded-full" />
          <span className="text-[10px] font-mono text-accent uppercase tracking-wider">Pilot Evaluation Phase · Controlled Access</span>
        </div>
        <h1 className="institutional-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          Global Records &amp;
          <br />
          Governance Framework
        </h1>
        <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
          Deterministic governance integrity infrastructure for verifiable policy execution and cryptographic record integrity.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors">
            Request Pilot Access
          </Link>
          <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            View Architecture
          </Link>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#category" className="text-muted-foreground/40 hover:text-accent transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>

    {/* ─── 2. CATEGORY DEFINITION ─── */}
    <Sec id="category" className="border-b border-border">
      <Title>A Governance Operating Layer</Title>
      <div className="grid gap-4 sm:grid-cols-2 mb-8">
        <div className="governance-card">
          <p className="text-[10px] font-mono text-destructive/60 uppercase tracking-wider mb-3">GRGF is not</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "A transparency tool",
              "A compliance dashboard",
              "A blockchain experiment",
              "A policy platform",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="text-muted-foreground/40 mt-0.5 shrink-0">✕</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-3">GRGF is</p>
          <p className="text-sm text-foreground font-medium leading-relaxed mb-4">
            A Governance Operating Layer that enforces deterministic execution of institutional authority.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            It turns administrative action into cryptographically verifiable event. That is category creation.
          </p>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {[
          {
            icon: Cpu, title: "Deterministic Policy Enforcement",
            desc: "Encoded rules execute identically every time. No interpretation. No discretion. No override.",
          },
          {
            icon: Database, title: "Append-Only Cryptographic Ledger",
            desc: "Write-once, seal-once. SHA-256 hash chaining. No record modified after sealing — by anyone.",
          },
          {
            icon: ShieldCheck, title: "Independent Verification Layer",
            desc: "Any party verifies record existence, absence, or integrity — without system access or trust.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 3. WHY THIS MATTERS AT SCALE ─── */}
    <Sec id="leverage" className="border-b border-border bg-card/30">
      <Title sub="Infrastructure leverage — not incremental improvement.">
        Why This Matters at Scale
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { metric: "0.3%", label: "Procurement improvement offsets full deployment cost" },
          { metric: "100%", label: "Policy enforcement determinism — identical inputs, identical outputs" },
          { metric: "$18.3B", label: "Projected global net annual benefit (modeled)" },
        ].map(({ metric, label }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-3xl font-serif font-semibold text-accent mb-1">{metric}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <div className="space-y-3">
        {[
          { icon: TrendingUp, text: "Eliminates retroactive record manipulation — structurally, not procedurally" },
          { icon: BarChart3, text: "Reduces audit cycles through continuous compliance evidence" },
          { icon: Globe, text: "Enables cross-border trust validation via federation protocol" },
          { icon: Shield, text: "Reduces sovereign corruption risk premium through verifiable governance" },
          { icon: Zap, text: "Creates new trust primitives for global institutional systems" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          This is a leverage multiplier. Small integrity improvements across large institutional expenditure produce outsized returns.
        </p>
      </div>
    </Sec>

    {/* ─── 4. ARCHITECTURE ─── */}
    <Sec id="architecture" className="border-b border-border">
      <Title sub="Six layers. Unidirectional data flow. No override pathway.">
        System Architecture
      </Title>

      {/* Flow diagram */}
      <div className="mb-8 flex flex-wrap items-center gap-2 justify-center">
        {[
          { label: "Event Capture" },
          { label: "Normalization" },
          { label: "Policy Engine" },
          { label: "Evidence Store" },
          { label: "Hash Seal" },
          { label: "Verification" },
        ].map((s, i, arr) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{s.label}</span>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
          </div>
        ))}
      </div>

      {/* Architecture layers */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {[
          { num: "01", icon: Database, title: "Event Capture", desc: "Structured ingestion with mandatory context fields" },
          { num: "02", icon: Cpu, title: "Policy Engine", desc: "Deterministic logic — allow/deny with policy ID" },
          { num: "03", icon: Shield, title: "Evidence Backbone", desc: "Append-only, WORM storage, custody separation" },
          { num: "04", icon: Lock, title: "Cryptographic Seal", desc: "SHA-256/512, Merkle trees, external anchoring" },
          { num: "05", icon: Network, title: "Verification API", desc: "Proof-of-existence and proof-of-absence" },
          { num: "06", icon: Globe, title: "Federation Layer", desc: "Cross-border verification, sovereign interop" },
        ].map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="governance-card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono text-accent/60">{num}</span>
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <Link to="/architecture" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
        Full Architecture Detail <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── STAKEHOLDER TILES ─── */}
    <Sec id="stakeholders" className="border-b border-border bg-card/30">
      <Title sub="Structured evaluation pathways for each institutional role.">Who It Serves</Title>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "CIO / CTO", desc: "Technical architecture evaluation and integration assessment" },
          { title: "Treasury / Finance", desc: "Fiscal impact modeling and break-even analysis" },
          { title: "Auditor General", desc: "Audit reconstruction, determinism verification, evidence integrity" },
          { title: "Procurement Authority", desc: "Procurement leakage simulation and integrity improvement modeling" },
          { title: "Anti-Corruption Bodies", desc: "Structural integrity enforcement and omission detection" },
          { title: "Multilateral Institutions", desc: "DPI alignment, federation readiness, cross-border verification" },
          { title: "Regulators", desc: "Policy enforcement determinism and compliance monitoring" },
          { title: "Development Banks", desc: "GovTech investment thesis and sovereign risk reduction" },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── PILOT KPIs ─── */}
    <Sec id="kpis" className="border-b border-border">
      <Title sub="Measurable criteria for controlled pilot evaluation.">What You Can Evaluate</Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { kpi: "100%", label: "Policy Determinism Rate", desc: "Identical inputs produce identical outputs — every execution" },
          { kpi: "100%", label: "Integrity Verification Success", desc: "All sealed records independently verifiable by any authorized party" },
          { kpi: "<30 min", label: "Audit Reconstruction Time", desc: "Full decision-chain reconstruction from any sealed governance event" },
          { kpi: "Structured", label: "Denial Clarity Index", desc: "Machine-readable + human-readable reason for every denied action" },
          { kpi: "Complete", label: "Trace Completeness", desc: "Every action, denial, and omission captured in append-only evidence chain" },
        ].map(({ kpi, label, desc }) => (
          <div key={label} className="governance-card">
            <p className="text-2xl font-serif font-semibold text-accent mb-1">{kpi}</p>
            <h4 className="text-xs font-mono text-foreground uppercase tracking-wider mb-1">{label}</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <Link to="/pilot" className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline">
        View Pilot Evaluation Details <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── MATURITY ROADMAP ─── */}
    <Sec id="roadmap" className="border-b border-border bg-card/30">
      <Title>From Concept to Engine</Title>
      <div className="space-y-0 max-w-2xl">
        {[
          { version: "v0.1", title: "Pilot Node", status: "Current", desc: "Controlled evaluation edition — deterministic enforcement, hash chaining, audit reconstruction" },
          { version: "v1.0", title: "Hardened Pilot", status: "Planned", desc: "Independent security audit, production controls, institutional onboarding" },
          { version: "v2.0", title: "Federation-Ready", status: "Roadmap", desc: "Cross-border verification protocol, multi-node federation, sovereign interoperability" },
        ].map((s, i) => (
          <div key={s.version}>
            <div className="flex items-center gap-4 py-4">
              <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {s.version}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-serif text-sm font-semibold">{s.title}</h4>
                  <span className={`text-[9px] font-mono tracking-wider px-1.5 py-0.5 rounded-sm ${s.status === "Current" ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                    {s.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
              </div>
            </div>
            {i < 2 && <div className="ml-5 w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── TRUST SIGNALS ─── */}
    <Sec id="trust" className="border-b border-border">
      <Title>Trust Signals</Title>
      <div className="grid gap-4 sm:grid-cols-3 mb-6">
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-2">Transparent Limitations</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Pilot-stage system. Not yet independently audited. Production deployment requires third-party security review. Transparency in limitations is intentional.
          </p>
        </div>
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-2">Security Posture</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Zero-trust architecture. No administrative override. Append-only evidence backbone. Independent audit roadmap in progress.
          </p>
        </div>
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-2">Standards Alignment</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">
            World Bank DPI principles. OECD governance standards. ISO 27001 alignment. NIST framework mapping. Not certification — structured alignment.
          </p>
        </div>
      </div>
      <Link to="/security-trust" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
        View Trust Center <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── 5. STRUCTURAL MOAT ─── */}
    <Sec id="moat" className="border-b border-border bg-card/30">
      <Title sub="Once adopted at national level, switching cost is extremely high. This is infrastructure, not software.">
        Structural Defensibility
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {[
          { title: "Policy Encoding Engine", desc: "Governance rules encoded as deterministic logic — institution-specific, non-transferable." },
          { title: "Append-Only Ledger", desc: "Historical records accumulate permanent institutional value. Migration destroys integrity chain." },
          { title: "Federation Protocol", desc: "Cross-border verification creates network effects. Value scales with adoption." },
          { title: "Governance Neutrality", desc: "No commercial vendor alignment. Structural neutrality enables sovereign adoption." },
          { title: "Controlled Distribution", desc: "Institutional access framework creates structured engagement pipeline." },
          { title: "Institutional Onboarding", desc: "Deep integration with governance processes creates operational dependency." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 6. EXECUTION ROADMAP ─── */}
    <Sec id="execution" className="border-b border-border">
      <Title>12-Month Execution Plan</Title>
      <div className="space-y-3">
        {[
          { months: "Month 1–2", title: "Single Ministry Pilot", items: ["Deploy pilot node", "Encode 3–5 decision types", "Validate deterministic enforcement"] },
          { months: "Month 3–4", title: "Security Audit + Validation", items: ["Independent penetration testing", "Policy encoding review", "Hash integrity verification"] },
          { months: "Month 5–6", title: "Cross-Department Integration", items: ["Expand to 2–3 additional departments", "Cross-ministry verification testing", "Audit trail reconstruction exercise"] },
          { months: "Month 7–9", title: "National Adoption Expansion", items: ["Full ministry rollout planning", "Training program deployment", "Compliance reporting automation"] },
          { months: "Month 10–12", title: "Federation Architecture", items: ["Federation protocol implementation", "Cross-border verification testing", "Multilateral engagement preparation"] },
        ].map((p) => (
          <div key={p.months} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <p className="text-[10px] font-mono text-accent uppercase tracking-wider">{p.months}</p>
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold mb-2">{p.title}</h4>
                <ul className="space-y-1">
                  {p.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 7. GLOBAL SCALING MODEL ─── */}
    <Sec id="scaling" className="border-b border-border bg-card/30">
      <Title sub="From single node to global trust substrate.">
        Global Scaling Model
      </Title>
      <div className="space-y-0">
        {[
          { num: "1", title: "Nation-Level Node", desc: "Sovereign deployment under national governance authority" },
          { num: "2", title: "Federation Layer", desc: "Voluntary cross-nation verification and shared compliance standards" },
          { num: "3", title: "Cross-Border Verification", desc: "Independent proof validation across jurisdictional boundaries" },
          { num: "4", title: "Multilateral Integration", desc: "World Bank, OECD, and regional development bank alignment" },
          { num: "5", title: "Development Bank Alignment", desc: "DPI funding and institutional capacity building programs" },
          { num: "6", title: "Capital Markets Validation", desc: "Governance integrity as a sovereign risk metric" },
        ].map((s, i) => (
          <div key={s.num}>
            <div className="flex items-center gap-4 py-4">
              <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {s.num}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold">{s.title}</h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </div>
            </div>
            {i < 5 && <div className="ml-4 w-px h-4 bg-border" />}
          </div>
        ))}
      </div>
      <div className="mt-6 governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground font-medium">
          This becomes a new global trust substrate. Governance integrity as infrastructure — not aspiration.
        </p>
      </div>
    </Sec>

    {/* ─── 8. CAPITAL STRATEGY ─── */}
    <Sec id="capital" className="border-b border-border">
      <Title sub="Clear revenue logic. Not speculative valuation.">
        Business Model &amp; Capital Structure
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { title: "Sovereign Licensing", desc: "Nation-level deployment licenses with sovereignty-preserving terms" },
          { title: "Integration Services", desc: "Technical integration with existing national DPI and enterprise systems" },
          { title: "Certification Programs", desc: "Institutional training and governance practitioner certification" },
          { title: "Support Contracts", desc: "Ongoing operational support and policy encoding assistance" },
          { title: "API Verification", desc: "Trust-as-a-service verification endpoints for third-party validation" },
          { title: "Public-Private Partnership", desc: "Structured partnership models with development banks and multilaterals" },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Break-Even Threshold", value: "0.3% integrity improvement" },
          { label: "Modeled IRR", value: "100% (conservative)" },
          { label: "Payback Period", value: "Year 1" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-lg font-serif font-semibold text-accent">{value}</p>
          </div>
        ))}
      </div>
      <Link to="/impact" className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:underline">
        Full Financial Analysis <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── 9. RISK ─── */}
    <Sec id="risk" className="border-b border-border bg-card/30">
      <Title>What Could Fail</Title>
      <div className="space-y-3 mb-6">
        {[
          { risk: "Political Resistance", mitigation: "Non-invasive integration. Does not replace existing authority structures. Reversible deployment at every phase." },
          { risk: "Institutional Inertia", mitigation: "Pilot model with measurable KPIs. Evidence-based adoption — not mandate-driven." },
          { risk: "Misencoding Risk", mitigation: "Policy encoding validated by institutional governance authorities. Deterministic testing against known scenarios." },
          { risk: "Perception Misframing", mitigation: "Clear category definition. Not surveillance. Not AI. Not blockchain. Governance infrastructure." },
          { risk: "Security Compromise", mitigation: "Independent audit roadmap. No centralized override. Append-only architecture limits blast radius." },
        ].map(({ risk, mitigation }) => (
          <div key={risk} className="governance-card">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif text-sm font-semibold mb-1">{risk}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{mitigation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 10. STATUS ─── */}
    <Sec id="status" className="border-b border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { label: "Framework", value: "GRGF v1.0" },
          { label: "Pilot Node", value: "v0.1 — Evaluation Ready" },
          { label: "Patent", value: "CA 3,300,102 (Filed)" },
          { label: "Status", value: "Pre-Pilot" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card">
            <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-sm text-foreground font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── POSITIONING ─── */}
    <Sec id="positioning" className="border-b border-border bg-card/50">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed mb-4">
          Trust should not rely on reputation.
          <br />
          It should rely on structure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors">
            Request Pilot Access
          </Link>
          <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            View Full Architecture
          </Link>
        </div>
      </div>
    </Sec>

    {/* ─── FOOTER ─── */}
    <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-12 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Infrastructure</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Governance Operating Layer<br />
              Deterministic Policy Enforcement<br />
              Append-Only Cryptographic Ledger
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Version 1.0 · Established 2024<br />
              Pilot Node v0.1 Available<br />
              Canadian Patent CA 3,300,102
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Global Record Governance Framework —<br />
              Invented and Owned by Tarek Wahid.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <p className="text-sm text-primary-foreground/70 font-serif italic text-center">
            Trust should not rely on reputation. It should rely on structure.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-primary-foreground/30 tracking-wide uppercase">
            GRGF · Governance Integrity Infrastructure · Reference Interface
          </p>
          <div className="flex items-center gap-4">
            <Link to="/security-trust" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Trust Center</Link>
            <Link to="/sitemap" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Version Registry</Link>
            <Link to="/controlled-access" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">Controlled Access →</Link>
            <Link to="/contact" className="text-[10px] text-primary-foreground/50 hover:text-accent font-mono uppercase tracking-wider">Contact</Link>
          </div>
        </div>
        <p className="mt-4 text-[9px] text-primary-foreground/20 leading-relaxed">
          This platform provides scenario-based projections for structured pilot evaluation. Modeled projections — pilot validation required. Not independently audited. All outputs pending institutional verification.
        </p>
      </div>
    </footer>
  </div>
);

export default Index;