import { Section } from "@/components/PageComponents";
import { Play, Mail, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useViewMode } from "@/contexts/ViewModeContext";

const Index = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="border-b border-border bg-card/50 px-8 py-16 md:px-12 lg:px-16">
        <div className="max-w-4xl">
          <h1 className="institutional-heading text-4xl md:text-5xl font-semibold leading-tight">
            Global Record Governance Framework
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {isPlain
              ? "A global system that records what governments did, what they decided, and what they failed to do — with proof."
              : "Sovereign-grade Digital Public Infrastructure trust layer for recording, preserving, and verifying institutional actions, decisions, and omissions over time."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/simulator"
              className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
            >
              <Play className="h-4 w-4" />
              View Live Simulator
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-medium rounded-sm hover:bg-card transition-colors"
            >
              <Mail className="h-4 w-4" />
              Request Institutional Access
            </Link>
          </div>
          <div className="section-divider mt-8" />
        </div>
      </header>

      {/* 3 Feature Cards */}
      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Record What Happened",
              plain: "Every government action, decision, and transaction is permanently recorded with a tamper-proof seal.",
              tech: "SHA-256 hash-sealed immutable records for institutional actions, decisions, and transactions with full version lineage and cryptographic integrity proofs.",
            },
            {
              title: "Prove What Did Not Happen",
              plain: "When a required action wasn't taken, GRGF records that too — creating proof of omission that can be independently verified.",
              tech: "Omission recording captures non-action events against mandated obligations, generating verifiable absence records with timestamped governance audit trails.",
            },
            {
              title: "Verify Without Authority",
              plain: "Anyone can check if a record exists and whether it's been changed — without needing special access or permission.",
              tech: "Public hash manifests enable independent verification of record integrity without requiring authorised access to underlying content or governance credentials.",
            },
          ].map((card) => (
            <div key={card.title} className="governance-card border-l-2 border-l-accent">
              <h3 className="font-serif text-base font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {isPlain ? card.plain : card.tech}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Strip */}
      <Section className="border-t border-border">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 py-4">
          {[
            "World Bank–aligned",
            "OECD Principles",
            "ISO Governance Logic",
            "Sovereign-grade DPI",
          ].map((badge) => (
            <div
              key={badge}
              className="px-4 py-2 border border-border rounded-sm text-xs font-mono text-muted-foreground tracking-wider uppercase"
            >
              {badge}
            </div>
          ))}
        </div>
      </Section>

      {/* Quick Navigation */}
      <Section title="Explore the Framework" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "How It Works", path: "/architecture", desc: "Visual system architecture" },
            { label: "Live Simulator", path: "/simulator", desc: "Interactive demo" },
            { label: "Verification", path: "/verification", desc: "Check record integrity" },
            { label: "Country Deployment", path: "/countries", desc: "Sovereign adoption model" },
            { label: "Academy", path: "/academy", desc: "Professional certification" },
            { label: "Documents", path: "/archive", desc: "Archive & governance docs" },
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
