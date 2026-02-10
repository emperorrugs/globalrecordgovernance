import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  CheckCircle, XCircle, Layers, Shield, ShieldCheck,
  FileText, Play, BarChart3, AlertTriangle, Monitor,
  ArrowDown, Globe, Lock, Eye, Users, Scale,
} from "lucide-react";

/* ── Section anchor IDs & nav labels ── */
const sections = [
  { id: "hero", label: "Home" },
  { id: "what-grgf-is", label: "What GRGF Is" },
  { id: "how-it-works", label: "How It Works" },
  { id: "governance", label: "Governance" },
  { id: "simulation", label: "Simulation" },
  { id: "dashboards", label: "Dashboards" },
  { id: "source-of-truth", label: "Source of Truth" },
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
      const current = offsets.reduce((best, s) =>
        s.top <= 120 && s.top > best.top ? s : best,
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
              className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors whitespace-nowrap ${
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

/* ── Reusable components ── */
const SectionDivider = () => <div className="section-divider mt-8" />;

const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`scroll-mt-14 px-8 py-16 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="institutional-heading text-2xl md:text-3xl font-semibold">{children}</h2>
    {subtitle && <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-3xl">{subtitle}</p>}
  </div>
);

/* ── Page ── */
const Index = () => {
  return (
    <div className="animate-fade-in">
      <StickyNav />

      {/* ── SECTION 1 — HERO ── */}
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
            The Global Record Governance Framework (GRGF) defines how records of governance
            actions should be structured, governed, versioned, and audited. It separates
            authoritative governance from interactive simulation to ensure clarity, integrity, and
            institutional trust.
          </p>

          {/* Value props */}
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
            <Link
              to="/simulation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Play className="h-4 w-4" />
              Launch Governance Simulation
            </Link>
            <a
              href="#source-of-truth"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors"
            >
              <FileText className="h-4 w-4" />
              View Source of Truth
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <a href="#what-grgf-is" className="text-muted-foreground/40 hover:text-accent transition-colors">
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </header>

      {/* ── SECTION 2 — WHAT THIS IS / IS NOT ── */}
      <SectionWrapper id="what-grgf-is" className="border-b border-border">
        <SectionTitle subtitle="Understanding the boundary between governance infrastructure and operational systems is essential for institutional trust.">
          What GRGF Is — and What It Is Not
        </SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              What GRGF Is
            </h3>
            <ul className="space-y-2.5">
              {[
                "A governance framework for institutional record integrity",
                "A reference standard for structured, versioned governance",
                "An audit-ready model built for sovereign deployment",
                "A neutral, system-agnostic approach to accountability",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="governance-card border-l-2 border-l-destructive">
            <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
              <XCircle className="h-4 w-4 text-destructive" />
              What GRGF Is Not
            </h3>
            <ul className="space-y-2.5">
              {[
                "Not a live registry or operational database",
                "Not a decision engine or enforcement tool",
                "Not a record-creating or record-modifying system",
                "Not a compliance enforcement mechanism",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-foreground font-medium italic">
          This distinction is intentional and foundational to governance integrity.
        </p>
      </SectionWrapper>

      {/* ── SECTION 3 — HOW IT WORKS ── */}
      <SectionWrapper id="how-it-works" className="border-b border-border bg-card/30">
        <SectionTitle subtitle="GRGF operates through three distinct layers, each with clearly defined authority boundaries and institutional responsibilities.">
          How the Framework Operates
        </SectionTitle>

        {/* Conceptual diagram */}
        <div className="mb-10 flex flex-col items-center gap-0">
          {[
            { label: "Authoritative Governance Layer", color: "bg-primary text-primary-foreground", sub: "Sealed Archives · Operating Rules · Versioning" },
            { label: "Simulation & Demonstration Layer", color: "bg-muted text-foreground", sub: "Workflows · Training · Institutional Review" },
            { label: "Transparency & Insight Layer", color: "bg-card text-foreground border border-border", sub: "Dashboards · Indicators · Aggregate Metrics" },
          ].map((layer, i) => (
            <div key={layer.label} className="w-full max-w-xl">
              <div className={`${layer.color} px-6 py-4 text-center rounded-sm ${i > 0 ? "" : ""}`}>
                <p className="text-sm font-semibold">{layer.label}</p>
                <p className="text-xs mt-1 opacity-70">{layer.sub}</p>
              </div>
              {i < 2 && (
                <div className="flex justify-center py-1">
                  <div className="w-px h-4 bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Authoritative Governance Layer",
              items: [
                "Sealed governance records with cryptographic integrity",
                "Formal governance operating rules and charters",
                "Versioning and immutable change control",
                "Auditability as a foundational design requirement",
              ],
              accent: true,
            },
            {
              icon: Layers,
              title: "Simulation & Demonstration Layer",
              items: [
                "Interactive governance workflow demonstrations",
                "Practitioner training and institutional review",
                "No authoritative effect on any record",
              ],
              accent: false,
            },
            {
              icon: BarChart3,
              title: "Transparency & Insight Layer",
              items: [
                "Aggregate dashboards and governance indicators",
                "Simulated metrics for framework understanding",
                "No personal, sensitive, or identifiable data",
              ],
              accent: false,
            },
          ].map((layer) => (
            <div
              key={layer.title}
              className={`governance-card ${layer.accent ? "border-l-2 border-l-accent" : ""}`}
            >
              <layer.icon
                className={`h-5 w-5 mb-3 ${layer.accent ? "text-accent" : "text-muted-foreground"}`}
              />
              <h3 className="font-serif text-sm font-semibold mb-3">{layer.title}</h3>
              <ul className="space-y-2">
                {layer.items.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground leading-relaxed flex items-start gap-2">
                    <span className="text-muted-foreground/50 mt-0.5 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground font-medium">
            Authority never resides in software execution. It resides in documented rules, sealed
            records, and human accountability.
          </p>
        </div>
      </SectionWrapper>

      {/* ── SECTION 4 — GOVERNANCE PRINCIPLES ── */}
      <SectionWrapper id="governance" className="border-b border-border">
        <SectionTitle subtitle="The framework is governed by principles that ensure institutional integrity, human oversight, and verifiable accountability.">
          Governance Principles
        </SectionTitle>
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
            Governance authority derives from documented rules, accountability, and verifiable
            records — not from software execution.
          </p>
        </div>
      </SectionWrapper>

      {/* ── SECTION 5 — SIMULATION ── */}
      <SectionWrapper id="simulation" className="border-b border-border bg-card/30">
        <SectionTitle>Governance Simulation Environment</SectionTitle>
        <div className="bg-destructive/10 border border-destructive/20 rounded-sm px-4 py-3 flex items-center gap-2 mb-8">
          <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
          <span className="text-xs font-mono text-destructive font-medium tracking-wide">
            SIMULATION ONLY — No Authoritative Records Are Created
          </span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-3xl">
          This interactive environment demonstrates how governance records move through structured
          workflows for demonstration, training, and institutional review purposes only. All
          actions are simulated and have no authoritative impact.
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
        <Link
          to="/simulation"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          <Play className="h-4 w-4" />
          Launch Governance Simulation
        </Link>
      </SectionWrapper>

      {/* ── SECTION 6 — DASHBOARDS ── */}
      <SectionWrapper id="dashboards" className="border-b border-border">
        <SectionTitle subtitle="Dashboards provide aggregate, non-authoritative visibility into governance operations for institutional review.">
          Governance Insights (Simulated)
        </SectionTitle>
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
      </SectionWrapper>

      {/* ── SECTION 7 — SOURCE OF TRUTH ── */}
      <SectionWrapper id="source-of-truth" className="border-b border-border bg-card/30">
        <SectionTitle>Source of Truth</SectionTitle>
        <div className="governance-card border-l-2 border-l-accent mb-8">
          <p className="text-sm text-foreground leading-relaxed">
            The Global Record Governance Framework operates through formally documented governance
            rules and sealed records. This website, its dashboards, and its simulation environment
            exist solely to explain, demonstrate, and support understanding of the framework and do
            not create, modify, or replace authoritative records.
          </p>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Authoritative governance resides exclusively in:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Sealed Governance Archives</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Permanently sealed records with cryptographic integrity proofs. Once sealed, they
                  cannot be changed — only verified.
                </p>
                <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Governance Operating Documents</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Formal rules, charters, and policies that define how governance works. These are
                  the source of authority.
                </p>
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
      </SectionWrapper>

      {/* ── SECTION 8 — AUDIENCE ── */}
      <SectionWrapper id="audience" className="border-b border-border">
        <SectionTitle subtitle="The framework addresses the needs of institutions that require structured, verifiable governance records across jurisdictions and time.">
          Intended Institutional Use
        </SectionTitle>
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
        <p className="text-sm text-muted-foreground italic">
          GRGF is intended to support, not replace, existing institutional systems.
        </p>
      </SectionWrapper>

      {/* ── SECTION 9 — FOOTER ── */}
      <footer className="border-t border-border bg-primary text-primary-foreground px-8 py-12 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Governance Framework</h4>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Reference Website · No personal data collected
                <br />
                Simulation and explanation only
                <br />
                Authority resides outside this website
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Version 1.0 · Established 2024
                <br />
                Sovereign-grade Digital Public Infrastructure
                <br />
                Read-Only Public Reference
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Origin Authority</h4>
              <p className="text-xs text-primary-foreground/60 leading-relaxed">
                Global Record Governance Framework —
                <br />
                Invented and Owned by Tarek Wahid.
                <br />
                No commercial affiliation. No promotional intent.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[10px] text-primary-foreground/40 tracking-wide uppercase">
              GRGF · Governance Framework – Reference Website · No personal data collected ·
              Simulation and explanation only
            </p>
            <a
              href="#source-of-truth"
              className="text-[10px] text-accent hover:underline font-mono uppercase tracking-wider"
            >
              Source of Truth ↑
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
