import { Section } from "@/components/PageComponents";
import { Play, FileText, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="border-b border-border bg-card/50 px-8 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="institutional-heading text-4xl md:text-5xl font-semibold leading-tight">
            Global Record Governance Framework
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A governance framework for verifiable, auditable, and accountable records.
          </p>
          <p className="mt-6 text-sm text-foreground/80 leading-relaxed max-w-3xl">
            The Global Record Governance Framework (GRGF) defines how records of governance actions should be structured, governed, versioned, and audited. It separates authoritative governance from interactive simulation to ensure clarity, integrity, and institutional trust.
          </p>
          <p className="mt-4 text-xs text-muted-foreground italic">
            This interface is for demonstration and training only.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <FileText className="h-4 w-4" />
              Explore the Framework
            </Link>
            <Link
              to="/simulation"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors"
            >
              <Play className="h-4 w-4" />
              Launch Governance Simulation
            </Link>
          </div>
          <div className="section-divider mt-8" />
        </div>
      </header>

      {/* What This Is / What This Is Not */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
          <div className="governance-card border-l-2 border-l-accent">
            <h3 className="font-serif text-base font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              What This Is
            </h3>
            <ul className="space-y-2.5">
              {[
                "A governance framework",
                "A reference standard",
                "An audit-ready model",
                "A verifiable record architecture",
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
              What This Is Not
            </h3>
            <ul className="space-y-2.5">
              {[
                "Not a live registry",
                "Not a database",
                "Not a decision engine",
                "Not a compliance enforcement tool",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-destructive mt-0.5 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Who it's for */}
      <Section className="border-t border-border">
        <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-4">Designed for</p>
        <div className="flex flex-wrap gap-3">
          {["Governments", "Regulators", "Auditors", "Multilateral Institutions", "Policy Reviewers"].map((a) => (
            <span key={a} className="px-4 py-2 border border-border rounded-sm text-xs font-mono text-muted-foreground tracking-wider">
              {a}
            </span>
          ))}
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section title="Explore" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          {[
            { label: "About GRGF", path: "/about", desc: "Positioning, scope, and legitimacy" },
            { label: "How It Works", path: "/how-it-works", desc: "Three-layer architecture" },
            { label: "Governance", path: "/governance", desc: "Authority model and controls" },
            { label: "Simulation", path: "/simulation", desc: "Interactive governance demo" },
            { label: "Dashboards", path: "/dashboards", desc: "Simulated analytics" },
            { label: "Source of Truth", path: "/source-of-truth", desc: "Authority boundaries" },
          ].map((item) => (
            <Link key={item.path} to={item.path} className="group governance-card flex items-center justify-between">
              <div>
                <h3 className="font-serif text-sm font-semibold">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default Index;
