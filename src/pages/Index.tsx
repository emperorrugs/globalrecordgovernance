import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle, XCircle, Layers, Shield, ShieldCheck,
  FileText, Play, BarChart3, AlertTriangle, Monitor,
  ArrowDown, Globe, Lock, Eye, Users, Scale,
  ArrowRight, HelpCircle, Info,
} from "lucide-react";

/* ── Section anchors ── */
const sections = [
  { id: "hero", label: "Home" },
  { id: "what-grgf-is", label: "What GRGF Is" },
  { id: "how-it-works", label: "How It Works" },
  { id: "governance", label: "Governance" },
  { id: "simulation", label: "Simulation" },
  { id: "dashboards", label: "Dashboards" },
  { id: "source-of-truth", label: "Source of Truth" },
  { id: "adoption", label: "Adoption" },
  { id: "status", label: "Status" },
  { id: "audience", label: "Audience" },
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
          Global Record
          <br />
          Governance Framework
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A governance framework for verifiable, auditable, and accountable records.
        </p>
        <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-3xl">
          The Global Record Governance Framework (GRGF) defines how records of governance actions should be structured, governed, versioned, and audited. It separates authoritative governance from interactive simulation to ensure clarity, integrity, and institutional trust.
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
        <p className="mt-6 text-xs text-muted-foreground italic">
          This interface is for demonstration and training only.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/simulation" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
            <Play className="h-4 w-4" />
            Launch Governance Simulation
          </Link>
          <a href="#source-of-truth" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <FileText className="h-4 w-4" />
            View Source of Truth
          </a>
          <Link to="/archive" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Info className="h-4 w-4" />
            Digital Archive
          </Link>
          <Link to="/blueprints" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Layers className="h-4 w-4" />
            Technical Blueprints
          </Link>
          <Link to="/pilot" className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors">
            <Globe className="h-4 w-4" />
            90-Day Pilot
          </Link>
        </div>
        <div className="mt-12 flex justify-center">
          <a href="#what-grgf-is" className="text-muted-foreground/40 hover:text-accent transition-colors">
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>

    {/* ─── 2. WHAT THIS IS / IS NOT ─── */}
    <Sec id="what-grgf-is" className="border-b border-border">
      <Title sub="Understanding the boundary between governance infrastructure and operational systems is essential for institutional trust.">
        What GRGF Is — and What It Is Not
      </Title>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="governance-card border-l-2 border-l-accent">
          <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-accent" /> What GRGF Is
          </h3>
          <ul className="space-y-2.5">
            {["A governance framework", "A reference standard for record integrity", "An audit-ready institutional model", "A neutral, system-agnostic approach"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-accent mt-0.5 shrink-0">·</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card border-l-2 border-l-destructive">
          <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
            <XCircle className="h-4 w-4 text-destructive" /> What GRGF Is Not
          </h3>
          <ul className="space-y-2.5">
            {["Not a live registry", "Not a database", "Not a decision engine", "Not a record-creating system"].map((t) => (
              <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground"><span className="text-destructive mt-0.5 shrink-0">·</span>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-sm text-foreground font-medium italic">
        This distinction is intentional and foundational to governance integrity.
      </p>
    </Sec>

    {/* ─── 3. HOW IT WORKS ─── */}
    <Sec id="how-it-works" className="border-b border-border bg-card/30">
      <Title sub="GRGF operates through three distinct layers, each with clearly defined authority boundaries.">
        How the Framework Operates
      </Title>

      {/* Conceptual diagram */}
      <div className="mb-10 flex flex-col items-center gap-0">
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

      <div className="grid gap-6 sm:grid-cols-3">
        {[
          { icon: ShieldCheck, title: "Authoritative Governance Layer", items: ["Sealed governance records with cryptographic integrity", "Formal governance operating rules and charters", "Versioning and immutable change control", "Auditability as a foundational design requirement"], accent: true },
          { icon: Layers, title: "Simulation & Demonstration Layer", items: ["Interactive governance workflow demonstrations", "Practitioner training and institutional review", "No authoritative effect on any record"], accent: false },
          { icon: BarChart3, title: "Transparency & Insight Layer", items: ["Aggregate dashboards and governance indicators", "Simulated metrics for framework understanding", "No personal, sensitive, or identifiable data"], accent: false },
        ].map((layer) => (
          <div key={layer.title} className={`governance-card ${layer.accent ? "border-l-2 border-l-accent" : ""}`}>
            <layer.icon className={`h-5 w-5 mb-3 ${layer.accent ? "text-accent" : "text-muted-foreground"}`} />
            <h3 className="font-serif text-sm font-semibold mb-3">{layer.title}</h3>
            <ul className="space-y-2">
              {layer.items.map((item) => (
                <li key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-muted-foreground/50 mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Lifecycle diagram */}
      <div className="mt-10">
        <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-4">Record Lifecycle</p>
        <div className="flex flex-wrap items-center gap-2 justify-center">
          {["Proposal", "Record", "Seal", "Audit", "Revision (New Version)"].map((step, i, arr) => (
            <div key={step} className="flex items-center gap-2">
              <span className="px-4 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{step}</span>
              {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground font-medium">
          Authority never resides in software execution. It resides in documented rules, sealed records, and human accountability.
        </p>
      </div>
    </Sec>

    {/* ─── 4. GOVERNANCE PRINCIPLES ─── */}
    <Sec id="governance" className="border-b border-border">
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

    {/* ─── 5. SIMULATION ─── */}
    <Sec id="simulation" className="border-b border-border bg-card/30">
      <Title>Governance Simulation Environment</Title>
      <div className="bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3 flex items-center gap-2 mb-8">
        <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
        <span className="text-xs font-mono text-destructive font-medium tracking-wide">
          SIMULATION ONLY — No Authoritative Records Are Created
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">
        This interactive environment demonstrates how governance records move through structured workflows for demonstration, training, and institutional review purposes only. All actions are simulated and have no authoritative impact.
      </p>
      <div className="space-y-2 mb-8">
        {[
          "Explore the full governance record lifecycle end-to-end",
          "Submit, review, approve, seal, and verify simulated records",
          "Inspect mock API responses for integration review",
          "Verify simulated record integrity with hash checking",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
      <Link to="/simulation" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors">
        <Play className="h-4 w-4" />
        Launch Governance Simulation
      </Link>
    </Sec>

    {/* ─── 6. DASHBOARDS ─── */}
    <Sec id="dashboards" className="border-b border-border">
      <Title sub="Dashboards provide aggregate, non-authoritative visibility into governance operations for institutional review.">
        Governance Insights (Simulated)
      </Title>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { label: "Record Lifecycle Stages", desc: "Track simulated records from submission through sealing and verification." },
          { label: "Workflow Timelines", desc: "Visualize how governance actions progress through structured review stages." },
          { label: "Governance Compliance Indicators", desc: "Aggregate metrics showing framework adherence across simulated deployments." },
          { label: "Framework Version History", desc: "Immutable version log of governance rule changes and document updates." },
        ].map((item) => (
          <div key={item.label} className="governance-card">
            <div className="flex items-start gap-3">
              <Monitor className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground italic">
        Dashboards visualize simulated or summary data only and are not authoritative.
      </p>
    </Sec>

    {/* ─── 7. SOURCE OF TRUTH ─── */}
    <Sec id="source-of-truth" className="border-b border-border bg-card/30">
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

    {/* ─── 8. INSTITUTIONAL ADOPTION ─── */}
    <Sec id="adoption" className="border-b border-border">
      <Title sub="GRGF is designed to complement and strengthen existing institutional governance without requiring system replacement.">
        How Institutions Use GRGF
      </Title>
      <div className="space-y-3 mb-8">
        {[
          "Reference GRGF as a governance standard for record integrity and auditability",
          "Align internal policies and procedures to its documented governance principles",
          "Use the simulation environment for practitioner training and institutional review",
          "Prepare for audits using the framework's structured verification methodology",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-foreground font-medium italic">
        No system replacement or technical integration is required.
      </p>
      <div className="mt-6 governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF is intended to support, not replace, existing institutional systems.
        </p>
      </div>
    </Sec>

    {/* ─── 9. STATUS & MATURITY ─── */}
    <Sec id="status" className="border-b border-border bg-card/30">
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

    {/* ─── 10. AUDIENCE ─── */}
    <Sec id="audience" className="border-b border-border">
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

    {/* ─── 11. FOOTER ─── */}
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
