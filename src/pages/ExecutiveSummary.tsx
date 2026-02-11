import { Link } from "react-router-dom";
import { ArrowRight, Database, Cpu, Shield, Globe, Lock, Network, BarChart3, Zap, TrendingUp, AlertTriangle } from "lucide-react";

const ExecutiveSummary = () => (
  <div className="animate-fade-in bg-background min-h-screen">
    {/* Header */}
    <header className="border-b border-border px-8 py-4 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div>
          <h1 className="font-serif text-sm font-semibold tracking-wide text-foreground">GRGF</h1>
          <p className="text-[10px] text-muted-foreground/60">Executive Summary</p>
        </div>
        <Link to="/" className="text-xs text-accent hover:underline font-mono">
          Full Platform →
        </Link>
      </div>
    </header>

    {/* Hero */}
    <section className="px-8 py-16 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-muted-foreground mb-6">
          Modern civilization has scaled compute, payments, communication, and AI — but has not scaled verifiable institutional accountability.
        </p>
        <h2 className="institutional-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
          A Global Governance<br />Integrity Engine
        </h2>
        <p className="text-base text-foreground/80 leading-relaxed max-w-3xl mb-8">
          GRGF is a deterministic Governance Operating Layer that turns institutional action into cryptographically verifiable event. Append-only. Independently auditable. No override.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link to="/pilot" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors">
            Request Pilot Evaluation
          </Link>
          <Link to="/architecture" className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            View Architecture
          </Link>
        </div>
      </div>
    </section>

    {/* Architecture */}
    <section className="px-8 py-12 md:px-12 lg:px-20 border-b border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h3 className="institutional-heading text-xl font-semibold mb-6">Six-Layer Architecture</h3>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-6">
          {[
            { num: "01", icon: Database, title: "Event Capture", desc: "Structured ingestion, mandatory context" },
            { num: "02", icon: Cpu, title: "Policy Engine", desc: "Deterministic allow/deny with policy ID" },
            { num: "03", icon: Shield, title: "Evidence Backbone", desc: "Append-only, WORM, custody separation" },
            { num: "04", icon: Lock, title: "Cryptographic Seal", desc: "SHA-256/512, Merkle trees" },
            { num: "05", icon: Network, title: "Verification API", desc: "Proof-of-existence and absence" },
            { num: "06", icon: Globe, title: "Federation", desc: "Cross-border sovereign interop" },
          ].map(({ num, icon: Icon, title, desc }) => (
            <div key={num} className="governance-card">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-mono text-accent/60">{num}</span>
                <Icon className="h-3.5 w-3.5 text-accent" />
              </div>
              <h4 className="font-serif text-xs font-semibold mb-1">{title}</h4>
              <p className="text-[11px] text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leverage */}
    <section className="px-8 py-12 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h3 className="institutional-heading text-xl font-semibold mb-6">Why This Matters at Scale</h3>
        <div className="grid gap-4 sm:grid-cols-3 mb-6">
          {[
            { metric: "0.3%", label: "Improvement offsets full deployment" },
            { metric: "$18.3B", label: "Projected global net annual benefit" },
            { metric: "Year 1", label: "Payback period (modeled)" },
          ].map(({ metric, label }) => (
            <div key={label} className="governance-card text-center">
              <p className="text-2xl font-serif font-semibold text-accent">{metric}</p>
              <p className="text-[11px] text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            "Eliminates retroactive record manipulation — structurally",
            "Reduces audit cycles through continuous compliance evidence",
            "Enables cross-border trust validation via federation",
            "Creates new trust primitives for global systems",
          ].map((text) => (
            <div key={text} className="flex items-start gap-2">
              <Zap className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Defensibility + Execution */}
    <section className="px-8 py-12 md:px-12 lg:px-20 border-b border-border bg-card/30">
      <div className="max-w-4xl mx-auto grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="institutional-heading text-xl font-semibold mb-4">Structural Moat</h3>
          <ul className="space-y-2">
            {[
              "Policy encoding engine — institution-specific, non-transferable",
              "Append-only ledger — historical value accumulates permanently",
              "Federation protocol — network effects scale with adoption",
              "Governance neutrality — enables sovereign adoption",
              "Switching cost extremely high once deployed nationally",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{t}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="institutional-heading text-xl font-semibold mb-4">12-Month Execution</h3>
          <div className="space-y-2">
            {[
              { m: "1–2", t: "Single ministry pilot" },
              { m: "3–4", t: "Security audit + validation" },
              { m: "5–6", t: "Cross-department integration" },
              { m: "7–9", t: "National adoption expansion" },
              { m: "10–12", t: "Federation architecture" },
            ].map(({ m, t }) => (
              <div key={m} className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-accent shrink-0 w-12">M{m}</span>
                <p className="text-xs text-muted-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Risk */}
    <section className="px-8 py-12 md:px-12 lg:px-20 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <h3 className="institutional-heading text-xl font-semibold mb-6">What Could Fail</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { risk: "Political Resistance", fix: "Non-invasive. Reversible at every phase." },
            { risk: "Institutional Inertia", fix: "Pilot model with measurable KPIs." },
            { risk: "Misencoding Risk", fix: "Validated by governance authorities." },
            { risk: "Perception Misframing", fix: "Not surveillance. Not AI. Not blockchain." },
          ].map(({ risk, fix }) => (
            <div key={risk} className="governance-card">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-xs font-semibold">{risk}</h4>
                  <p className="text-[11px] text-muted-foreground">{fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Status */}
    <section className="px-8 py-12 md:px-12 lg:px-20 border-b border-border bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          {[
            { label: "Framework", value: "v1.0" },
            { label: "Pilot Node", value: "v0.1" },
            { label: "Patent", value: "CA 3,300,102" },
            { label: "Status", value: "Pre-Pilot" },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{label}</p>
              <p className="text-sm font-serif font-semibold text-foreground mt-1">{value}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-base font-serif text-foreground leading-relaxed mb-2">
            GRGF is a deterministic governance infrastructure layer that makes institutional actions structurally verifiable.
          </p>
          <p className="text-sm text-muted-foreground italic">
            This is the missing operating system for public trust.
          </p>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-primary text-primary-foreground px-8 py-10 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm font-serif italic text-primary-foreground/70 mb-4">
          Trust should not rely on reputation. It should rely on structure.
        </p>
        <p className="text-[10px] text-primary-foreground/40 tracking-wide uppercase">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid
        </p>
      </div>
    </footer>
  </div>
);

export default ExecutiveSummary;