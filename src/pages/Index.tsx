import { Link } from "react-router-dom";
import {
  CheckCircle, XCircle, Layers, Shield, ShieldCheck,
  FileText, Play, BarChart3, AlertTriangle, Users, Monitor,
} from "lucide-react";

const SectionDivider = () => <div className="section-divider" />;

const SectionWrapper = ({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section id={id} className={`px-8 py-16 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-4xl mx-auto">{children}</div>
  </section>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="institutional-heading text-2xl md:text-3xl font-semibold mb-6">
    {children}
  </h2>
);

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* ── SECTION 1 — HERO ── */}
      <header className="border-b border-border bg-card/50 px-8 py-20 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="institutional-heading text-4xl md:text-5xl font-semibold leading-tight">
            Global Record Governance Framework
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A governance framework for verifiable, auditable, and accountable records.
          </p>
          <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            The Global Record Governance Framework (GRGF) defines how records of governance actions
            should be structured, governed, versioned, and audited. It separates authoritative
            governance from interactive simulation to ensure clarity, integrity, and institutional
            trust.
          </p>
          <p className="mt-4 text-xs text-muted-foreground italic">
            This interface is for demonstration and training only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/simulation"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Play className="h-4 w-4" />
              Launch Governance Simulation
            </Link>
            <a
              href="#source-of-truth"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors"
            >
              <FileText className="h-4 w-4" />
              View Source of Truth
            </a>
          </div>
          <SectionDivider />
        </div>
      </header>

      {/* ── SECTION 2 — WHAT THIS IS / IS NOT ── */}
      <SectionWrapper id="what-grgf-is" className="border-b border-border">
        <SectionTitle>What GRGF Is — and What It Is Not</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 mt-8">
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              What GRGF Is
            </h3>
            <ul className="space-y-2.5">
              {[
                "A governance framework",
                "A reference standard for record integrity",
                "An audit-ready institutional model",
                "A neutral, system-agnostic approach",
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
                "Not a live registry",
                "Not a database",
                "Not a decision engine",
                "Not a record-creating system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground italic">
          This distinction is intentional and foundational to governance integrity.
        </p>
      </SectionWrapper>

      {/* ── SECTION 3 — HOW IT WORKS ── */}
      <SectionWrapper id="how-it-works" className="border-b border-border bg-card/30">
        <SectionTitle>How the Framework Operates</SectionTitle>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          GRGF operates through three distinct layers, each with clearly defined authority boundaries.
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Authoritative Governance Layer",
              items: [
                "Sealed governance records",
                "Formal governance operating rules",
                "Versioning and change control",
                "Auditability by design",
              ],
              accent: true,
            },
            {
              icon: Layers,
              title: "Simulation & Demonstration Layer",
              items: [
                "Interactive workflows",
                "Training and institutional review",
                "No authoritative effect",
              ],
              accent: false,
            },
            {
              icon: BarChart3,
              title: "Transparency & Insight Layer",
              items: [
                "Dashboards and indicators",
                "Aggregate, simulated metrics",
                "No personal or sensitive data",
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
        <p className="mt-8 text-sm text-foreground font-medium">
          Authority never resides in software execution.
        </p>
      </SectionWrapper>

      {/* ── SECTION 4 — GOVERNANCE PRINCIPLES ── */}
      <SectionWrapper id="governance" className="border-b border-border">
        <SectionTitle>Governance Principles</SectionTitle>
        <div className="space-y-3 mb-8">
          {[
            "Human accountability remains central",
            "Authority derives from documented rules",
            "All changes are versioned and traceable",
            "Records are immutable once sealed",
            "Auditability is a design requirement",
          ].map((principle, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-foreground">{principle}</p>
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
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          This interactive environment demonstrates how governance records move through structured
          workflows for demonstration, training, and institutional review purposes only. All
          actions are simulated and have no authoritative impact.
        </p>
        <Link
          to="/simulation"
          className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
        >
          <Play className="h-4 w-4" />
          Launch Governance Simulation
        </Link>
      </SectionWrapper>

      {/* ── SECTION 6 — DASHBOARDS ── */}
      <SectionWrapper id="dashboards" className="border-b border-border">
        <SectionTitle>Governance Insights (Simulated)</SectionTitle>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          Dashboards visualize simulated and aggregate indicators to support understanding of
          governance operations.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Record lifecycle stages",
            "Workflow timelines",
            "Governance compliance indicators",
            "Framework version history",
          ].map((item) => (
            <div key={item} className="governance-card flex items-center gap-3">
              <Monitor className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
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
                  Permanently sealed records with cryptographic integrity proofs.
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
                  Formal rules, charters, and policies that define how governance works.
                </p>
                <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── SECTION 8 — WHO THIS IS FOR ── */}
      <SectionWrapper id="audience" className="border-b border-border">
        <SectionTitle>Intended Institutional Use</SectionTitle>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
          GRGF is designed for institutions that require structured, verifiable, and auditable
          records of governance actions.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Governments & Public Institutions",
            "Regulators & Oversight Bodies",
            "Auditors & Inspectors",
            "Multilateral & Policy Organizations",
          ].map((a) => (
            <span
              key={a}
              className="px-4 py-2 border border-border rounded-sm text-xs font-mono text-muted-foreground tracking-wider"
            >
              {a}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground italic">
          GRGF is intended to support, not replace, existing institutional systems.
        </p>
      </SectionWrapper>

      {/* ── SECTION 9 — FOOTER ── */}
      <footer className="border-t border-border bg-card/30 px-8 py-10 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Governance Framework</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Reference Website · No personal data collected
                <br />
                Simulation and explanation only
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Framework</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Version 1.0 · Established 2024
                <br />
                Sovereign-grade Digital Public Infrastructure
                <br />
                Authority resides outside this website
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold mb-2">Origin Authority</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Global Record Governance Framework —
                <br />
                Invented and Owned by Tarek Wahid.
                <br />
                No commercial affiliation. No promotional intent.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-[10px] text-muted-foreground/50 tracking-wide uppercase">
              GRGF · Governance Framework – Reference Website · No personal data collected ·
              Simulation and explanation only
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
