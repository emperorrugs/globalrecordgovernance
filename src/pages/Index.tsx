import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle, XCircle, Layers, Shield, ShieldCheck,
  FileText, Play, BarChart3, AlertTriangle, Monitor,
  ArrowDown, Globe, Lock, Eye, Users, Scale,
  ArrowRight, HelpCircle, Info, Database, Cpu,
  Network, Gavel, Building2, Landmark, Workflow,
} from "lucide-react";

/* ── Section anchors ── */
const sections = [
  { id: "hero", label: "Home" },
  { id: "pillars", label: "Core Pillars" },
  { id: "how-it-works", label: "How It Works" },
  { id: "integration", label: "Integration" },
  { id: "security", label: "Security" },
  { id: "value", label: "Value" },
  { id: "governance", label: "Governance" },
  { id: "source-of-truth", label: "Source of Truth" },
  { id: "audience", label: "Audience" },
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
        <p className="text-xs font-mono text-accent uppercase tracking-[0.2em] mb-4">
          Sovereign-Grade Digital Public Infrastructure
        </p>
        <h1 className="institutional-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
          A Verifiable Governance
          <br />
          Infrastructure for the
          <br />
          Digital State
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          The Global Records & Governance Framework (GRGF) is a sovereign-grade Digital Public Infrastructure designed to provide neutral, policy-enforced, and cryptographically verifiable institutional records.
        </p>
        <p className="mt-4 text-sm text-foreground/80 leading-relaxed max-w-3xl">
          GRGF integrates with existing national systems to ensure that what occurred — and what did not occur — can be independently verified without political or administrative interference.
        </p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: "Audit-Ready" },
            { icon: Lock, label: "Tamper-Proof" },
            { icon: Globe, label: "Jurisdiction-Neutral" },
            { icon: Eye, label: "Fully Transparent" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Icon className="h-4 w-4 text-accent shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/architecture" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            <Layers className="h-4 w-4" />
            Explore System Architecture
          </Link>
          <Link to="/deployment" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Globe className="h-4 w-4" />
            National Deployment Model
          </Link>
          <Link to="/archive" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <FileText className="h-4 w-4" />
            Technical Documentation
          </Link>
          <Link to="/stakeholders" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Building2 className="h-4 w-4" />
            Request Institutional Briefing
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted-foreground italic">
          This interface is for demonstration and training only.
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#pillars" className="text-muted-foreground/40 hover:text-accent transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>

    {/* ─── 2. CORE PILLARS ─── */}
    <Sec id="pillars" className="border-b border-border">
      <Title sub="Three foundational technical pillars ensure institutional integrity, policy enforcement, and public trust.">
        Core Infrastructure Pillars
      </Title>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Evidence Backbone */}
        <div className="governance-card border-l-2 border-l-accent">
          <Database className="h-5 w-5 text-accent mb-3" />
          <h3 className="font-serif text-base font-semibold mb-3">Evidence Backbone</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            GRGF establishes an append-only, structured event record system.
          </p>
          <ul className="space-y-2">
            {[
              "Normalized into a standardized event schema",
              "Time-bound and context-bound",
              "Cryptographically sealed at creation",
              "Stored under strict custody separation",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-mono text-accent/70 tracking-wider">NO RECORD CAN BE EDITED ONCE SEALED</p>
          <Link to="/architecture" className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline">
            View Architecture <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Policy Enforcement Engine */}
        <div className="governance-card border-l-2 border-l-accent">
          <Cpu className="h-5 w-5 text-accent mb-3" />
          <h3 className="font-serif text-base font-semibold mb-3">Policy Enforcement Engine</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            GRGF does not interpret governance — it enforces encoded rules.
          </p>
          <ul className="space-y-2">
            {[
              "Validates authority context",
              "Applies deterministic policy logic",
              "Produces explainable outcomes",
              "Denies unauthorized actions with machine-readable justification",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-mono text-accent/70 tracking-wider">GOVERNANCE BY DESIGN</p>
          <Link to="/governance-framework" className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline">
            View Governance <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        {/* Public Verification Layer */}
        <div className="governance-card border-l-2 border-l-accent">
          <ShieldCheck className="h-5 w-5 text-accent mb-3" />
          <h3 className="font-serif text-base font-semibold mb-3">Public Verification Layer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            GRGF enables independent, zero-knowledge verification.
          </p>
          <ul className="space-y-2">
            {[
              "Independent verification without intermediaries",
              "Proof-of-record existence and non-existence",
              "API-based validation endpoints",
              "Validation without exposure of personal data",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{t}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs font-mono text-accent/70 tracking-wider">TRUST IS VERIFIABLE, NOT ASSUMED</p>
          <Link to="/security-trust" className="mt-3 inline-flex items-center gap-1 text-xs text-accent hover:underline">
            View Security <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </Sec>

    {/* ─── 3. HOW IT WORKS ─── */}
    <Sec id="how-it-works" className="border-b border-border bg-card/30">
      <Title sub="Five deterministic stages ensure integrity from capture to audit.">
        How the Framework Operates
      </Title>

      {/* Flow diagram */}
      <div className="mb-10 flex flex-wrap items-center gap-2 justify-center">
        {[
          { step: "01", label: "Event Occurs" },
          { step: "02", label: "Event Normalized" },
          { step: "03", label: "Policy Engine Executes" },
          { step: "04", label: "Cryptographic Sealing" },
          { step: "05", label: "Verification Available" },
        ].map((s, i, arr) => (
          <div key={s.step} className="flex items-center gap-2">
            <div className="px-4 py-3 border border-border rounded-sm bg-card text-center min-w-[140px]">
              <p className="text-[10px] font-mono text-accent/60 mb-1">STEP {s.step}</p>
              <p className="text-xs font-medium text-foreground">{s.label}</p>
            </div>
            {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
          </div>
        ))}
      </div>

      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed">
          This process ensures integrity from capture to audit. Each stage is deterministic, auditable, and produces cryptographic evidence of execution.
        </p>
      </div>

      {/* Conceptual layers */}
      <div className="mt-10 flex flex-col items-center gap-0">
        {[
          { label: "Authoritative Governance Layer", color: "bg-primary text-primary-foreground", sub: "Sealed Archives · Operating Rules · Versioning" },
          { label: "Simulation & Demonstration Layer", color: "bg-muted text-foreground", sub: "Workflows · Training · Institutional Review" },
          { label: "Transparency & Insight Layer", color: "bg-card text-foreground border border-border", sub: "Dashboards · Indicators · Aggregate Metrics" },
        ].map((l, i) => (
          <div key={l.label} className="w-full max-w-xl">
            <div className={`${l.color} px-6 py-4 text-center rounded-sm`}>
              <p className="text-sm font-semibold">{l.label}</p>
              <p className="text-xs mt-1 opacity-70">{l.sub}</p>
            </div>
            {i < 2 && <div className="flex justify-center py-1"><div className="w-px h-4 bg-border" /></div>}
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 4. INTEGRATION ECOSYSTEM ─── */}
    <Sec id="integration" className="border-b border-border">
      <Title sub="GRGF integrates with existing national systems. It does not replace them.">
        Integration Ecosystem
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {[
          { icon: Users, label: "National Digital ID" },
          { icon: FileText, label: "Civil Registry" },
          { icon: Scale, label: "Procurement Systems" },
          { icon: Gavel, label: "Courts & Judiciary" },
          { icon: Landmark, label: "Treasury Systems" },
          { icon: Eye, label: "Audit Offices" },
          { icon: Shield, label: "Regulatory Agencies" },
          { icon: Cpu, label: "Existing ERP Platforms" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="governance-card flex items-center gap-3">
            <Icon className="h-4 w-4 text-accent shrink-0" />
            <span className="text-sm text-foreground font-medium">{label}</span>
          </div>
        ))}
      </div>
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          GRGF does not replace national DPI systems — it strengthens them by providing a verifiable governance trust layer across all integrated infrastructure.
        </p>
      </div>
    </Sec>

    {/* ─── 5. SECURITY PRINCIPLES ─── */}
    <Sec id="security" className="border-b border-border bg-card/30">
      <Title sub="Structural security measures ensure integrity without centralized trust.">
        Security & Trust Snapshot
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
        {[
          { icon: Shield, title: "Zero Trust Architecture", desc: "No component trusts another by default. Every interaction is verified against governance policy." },
          { icon: Lock, title: "No Centralized Override", desc: "No single entity — including the framework operator — can unilaterally alter sealed records." },
          { icon: ShieldCheck, title: "Tamper-Evident Sealing", desc: "Every record produces a cryptographic hash at seal time. Any modification invalidates the proof." },
          { icon: Cpu, title: "Policy-Enforced Governance", desc: "Access, modification, and disclosure are controlled by encoded governance rules, not manual decisions." },
          { icon: Eye, title: "Independent Audit Compatibility", desc: "The framework is built to be audited by external parties without requiring trust in the operator." },
          { icon: FileText, title: "Controlled Distribution", desc: "Institutional documents follow a controlled release protocol with NDA options and access logging." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <Link to="/security-trust" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
        Read Full Security & Trust Whitepaper <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── 6. VALUE SNAPSHOT ─── */}
    <Sec id="value" className="border-b border-border">
      <Title sub="Modeled scenarios demonstrating quantifiable institutional value across governance operations.">
        Quantified Public Value
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { metric: "5–15%", label: "Procurement leakage mitigation scenario" },
          { metric: "20–40%", label: "Audit cycle time reduction (modeled)" },
          { metric: "$1.5B", label: "Projected net annual benefit (Canada archetype)" },
          { metric: "100%", label: "Internal Rate of Return (modeled)" },
          { metric: "Year 1", label: "Payback period" },
          { metric: "$18.3B", label: "Projected global net annual benefit" },
        ].map(({ metric, label }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-2xl font-serif font-semibold text-accent mb-1">{metric}</p>
            <p className="text-xs text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground italic mb-4">
        All figures represent conservative modeled scenarios. Actual outcomes depend on deployment context and institutional maturity.
      </p>
      <Link to="/impact" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
        View Full Impact & ROI Analysis <ArrowRight className="h-3 w-3" />
      </Link>
    </Sec>

    {/* ─── 7. GOVERNANCE PRINCIPLES ─── */}
    <Sec id="governance" className="border-b border-border bg-card/30">
      <Title sub="The framework is governed by principles that ensure institutional integrity, human oversight, and verifiable accountability.">
        Governance Principles
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { icon: Users, title: "Human Accountability", desc: "Governance decisions require identifiable human authority. No automated decision-making." },
          { icon: FileText, title: "Documented Authority", desc: "All authority derives from formally documented and versioned governance rules." },
          { icon: Scale, title: "Versioned Traceability", desc: "Every change is versioned, timestamped, and traceable to its source of authority." },
          { icon: Lock, title: "Record Immutability", desc: "Once sealed, governance records cannot be altered — only verified against their original hash." },
          { icon: Eye, title: "Auditability by Design", desc: "The framework is built to be audited. Every component supports independent verification." },
          { icon: Shield, title: "Anti-Capture Protection", desc: "Structural safeguards prevent any single entity from controlling or subverting the framework." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h3 className="font-serif text-sm font-semibold mb-2">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          Governance authority derives from documented rules, accountability, and verifiable records — not from software execution.
        </p>
      </div>
    </Sec>

    {/* ─── 8. SOURCE OF TRUTH ─── */}
    <Sec id="source-of-truth" className="border-b border-border">
      <Title>Source of Truth</Title>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          The Global Record Governance Framework operates through formally documented governance rules and sealed records. This website, its dashboards, and its simulation environment exist solely to explain, demonstrate, and support understanding of the framework and do not create, modify, or replace authoritative records.
        </p>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Authoritative governance resides exclusively in:</p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-sm font-semibold">Sealed Governance Archives</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Permanently sealed records with cryptographic integrity proofs. Once sealed, they cannot be changed — only verified.</p>
              <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
            </div>
          </div>
        </div>
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-sm font-semibold">Governance Operating Documents</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">Formal rules, charters, and policies that define how governance works. These are the source of authority.</p>
              <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { title: "This Website", status: "NON-AUTHORITATIVE" },
          { title: "Simulation System", status: "NON-AUTHORITATIVE" },
          { title: "Dashboards & APIs", status: "NON-AUTHORITATIVE" },
        ].map((item) => (
          <div key={item.title} className="governance-card text-center">
            <Monitor className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
            <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
            <p className="hash-text mt-2 text-destructive">STATUS: {item.status}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── 9. AUDIENCE ─── */}
    <Sec id="audience" className="border-b border-border bg-card/30">
      <Title sub="The framework addresses the needs of institutions that require structured, verifiable governance records across jurisdictions and time.">
        Intended Institutional Use
      </Title>
      <div className="grid gap-4 sm:grid-cols-2 mb-6">
        {[
          { label: "Governments & Public Institutions", desc: "Structure and preserve records of governance actions for long-term institutional accountability." },
          { label: "Regulators & Oversight Bodies", desc: "Verify compliance through auditable, versioned, and tamper-evident governance records." },
          { label: "Auditors & Inspectors", desc: "Independently verify the integrity and completeness of governance archives." },
          { label: "Multilateral & Policy Organizations", desc: "Evaluate and adopt governance standards that are jurisdiction-neutral and interoperable." },
        ].map(({ label, desc }) => (
          <div key={label} className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">{label}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        <Link to="/stakeholders" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
          View Stakeholder Solutions <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
    </Sec>

    {/* ─── 10. STATUS ─── */}
    <Sec id="status" className="border-b border-border">
      <Title>Framework Status</Title>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Status", value: "Reference Governance Framework" },
          { label: "Version", value: "v1.0" },
          { label: "Use", value: "Demonstration, training, policy alignment" },
          { label: "Authority", value: "Document-based, sealed, versioned" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card">
            <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-sm text-foreground font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── FAQ ─── */}
    <Sec id="faq" className="border-b border-border bg-card/30">
      <Title>Frequently Asked Questions</Title>
      <div className="space-y-4 max-w-3xl">
        {[
          { q: "Is this a live system?", a: "No. This website and its simulation are reference and demonstration tools only. No live governance records are created, stored, or modified." },
          { q: "Does it store records?", a: "No. The website does not store any governance records. Authoritative records exist only in sealed governance archives maintained outside this platform." },
          { q: "Can governments use it?", a: "Yes. Governments and institutions may reference GRGF as a governance standard, align policies to its principles, and use the simulation for training and review." },
          { q: "Is it auditable?", a: "Yes, by design. The framework is built to support independent audit and verification at every level — from record integrity to governance rule compliance." },
        ].map(({ q, a }) => (
          <div key={q} className="governance-card">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">{q}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Sec>

    {/* ─── FOOTER ─── */}
    <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-12 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Governance Framework</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Reference Website · No personal data collected<br />
              Simulation and explanation only<br />
              Authority resides outside this website
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Version 1.0 · Established 2024<br />
              Sovereign-grade Digital Public Infrastructure<br />
              Read-Only Public Reference
            </p>
          </div>
          <div>
            <h4 className="font-serif text-sm font-semibold mb-2">Origin Authority</h4>
            <p className="text-xs text-primary-foreground/60 leading-relaxed">
              Global Record Governance Framework —<br />
              Invented and Owned by Tarek Wahid.<br />
              No commercial affiliation. No promotional intent.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] text-primary-foreground/40 tracking-wide uppercase">
            GRGF · Governance Framework – Reference Website · No personal data collected · Simulation and explanation only
          </p>
          <a href="#source-of-truth" className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider">
            Source of Truth ↑
          </a>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
