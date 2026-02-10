import { PageHeader, Section } from "@/components/PageComponents";
import { BookOpen, AlertTriangle, Scale, ShieldCheck, Users, FileSearch } from "lucide-react";

const About = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="About GRGF"
        subtitle="Why record governance matters — and what GRGF is designed to solve."
      />

      {/* Why Record Governance Matters */}
      <Section title="Why Record Governance Matters">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Institutional trust depends on verifiable records. When governance actions are not properly recorded, versioned, and audited, accountability gaps emerge. Decisions go undocumented. Omissions go unnoticed. Public oversight becomes impossible.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          GRGF addresses this by defining a universal governance standard for how institutional records should be created, preserved, and independently verified — across jurisdictions, political cycles, and technological platforms.
        </p>
      </Section>

      {/* Problems Addressed */}
      <Section title="Problems GRGF Addresses" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {[
            {
              title: "Record Fragmentation",
              desc: "Governance records scattered across incompatible systems, formats, and jurisdictions — making audit and verification difficult or impossible.",
              icon: FileSearch,
            },
            {
              title: "Institutional Opacity",
              desc: "Decisions made without verifiable documentation. Actions taken — or not taken — with no permanent, tamper-proof record.",
              icon: AlertTriangle,
            },
            {
              title: "Audit Gaps",
              desc: "Absence of standardised governance records prevents auditors and oversight bodies from performing comprehensive institutional reviews.",
              icon: Scale,
            },
            {
              title: "Omission Blindness",
              desc: "Most governance systems record only what happened. Required actions that were never taken remain invisible to public accountability.",
              icon: ShieldCheck,
            },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <div className="flex items-start gap-3">
                <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Who GRGF Is For */}
      <Section title="Who GRGF Is Designed For" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {[
            { title: "Governments", desc: "National and subnational administrations seeking auditable governance infrastructure." },
            { title: "Auditors & Regulators", desc: "Independent oversight bodies requiring verifiable, standardised institutional records." },
            { title: "Multilateral Institutions", desc: "International bodies evaluating governance maturity and institutional accountability across jurisdictions." },
            { title: "Policy Reviewers", desc: "Researchers, analysts, and governance professionals assessing institutional performance through verifiable evidence." },
          ].map((item) => (
            <div key={item.title} className="governance-card">
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Scope & Neutrality */}
      <Section title="Scope and Neutrality" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            GRGF is designed to support, not replace, existing institutional systems.
          </p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            The framework operates as neutral governance infrastructure. It does not interpret record content, enforce compliance, evaluate institutional performance, or rank jurisdictions. Its value derives from structural integrity, not from features or enforcement capabilities.
          </p>
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance
          Framework — Invented and Owned by Tarek Wahid.
        </p>
      </Section>
    </div>
  );
};

export default About;
