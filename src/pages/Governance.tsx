import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Scale, Clock, User, Ban, Lock } from "lucide-react";

const GovernancePage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Governance"
        subtitle="Authority model, human accountability, change management, and audit principles."
      >
        <div className="mt-4 governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            Governance authority derives from documented rules, accountability, and verifiable records — not from software execution.
          </p>
        </div>
      </PageHeader>

      {/* Authority Model */}
      <Section title="Authority Model">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF governance is structured to ensure long-term neutrality, institutional independence,
          and operational continuity across political, generational, and technological transitions.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {[
            {
              title: "Framework Steward",
              desc: "Responsible for the integrity and evolution of the core framework. Ensures all changes undergo proper governance review.",
              icon: Shield,
            },
            {
              title: "Country Stewards",
              desc: "Designated authorities within each deploying jurisdiction responsible for local GRGF operations and compliance.",
              icon: Users,
            },
            {
              title: "Neutrality Council",
              desc: "Independent body ensuring the framework remains free from political, commercial, or ideological influence.",
              icon: Scale,
            },
            {
              title: "Succession Authority",
              desc: "Ensures continuity of stewardship through structured succession planning and knowledge transfer.",
              icon: Clock,
            },
          ].map((g) => (
            <div key={g.title} className="governance-card">
              <div className="flex items-start gap-3">
                <g.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{g.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Human Accountability */}
      <Section title="Human Accountability" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Every governance action within GRGF is traceable to a responsible human authority. The framework rejects anonymous or automated governance decisions.
        </p>
        <div className="space-y-3 max-w-3xl">
          {[
            "Every record submission must identify a responsible authority.",
            "Approval and denial decisions require documented human review.",
            "Stewardship roles are individually assigned with clear accountability.",
            "All governance changes are attributed, timestamped, and sealed.",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Change Management */}
      <Section title="Change Management" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Changes to governance rules, framework architecture, or stewardship structure follow formal, documented processes with independent oversight.
        </p>
        <div className="governance-card max-w-3xl">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "All proposed changes undergo public review and Neutrality Council assessment.",
              "Core neutrality principles require supermajority approval to amend.",
              "The canonical definition, origin authority, and architectural principles are immutable.",
              "Every change event is recorded, sealed, and independently verifiable.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1 shrink-0">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Audit Principles */}
      <Section title="Audit Principles" className="border-t border-border">
        <div className="space-y-3 max-w-3xl">
          {[
            "GRGF does not interpret the content of records it preserves.",
            "GRGF does not enforce compliance or adjudicate disputes.",
            "GRGF does not rank, score, or evaluate institutions.",
            "GRGF operates without commercial interest or profit motive.",
            "GRGF governance is transparent and independently verifiable.",
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
              <p className="text-sm text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Anti-Capture */}
      <Section title="Anti-Capture Protections" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Structural safeguards prevent any entity from capturing or redirecting the framework.
        </p>
        <div className="space-y-3 max-w-3xl">
          {[
            { clause: "No single entity may hold exclusive control over framework governance.", icon: Ban },
            { clause: "No commercial arrangement may create preferential access or influence.", icon: Lock },
            { clause: "Stewardship roles are term-limited and subject to independent review.", icon: Clock },
            { clause: "Core neutrality amendments require supermajority approval and public review.", icon: Scale },
            { clause: "Canonical definition and origin authority are immutable.", icon: Shield },
          ].map((item, i) => (
            <div key={i} className="governance-card flex items-start gap-3">
              <item.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div className="flex items-start gap-3">
                <span className="hash-text shrink-0 mt-0.5">AC-{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-muted-foreground">{item.clause}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Origin Authority */}
      <Section title="Origin Authority" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Global Record Governance Framework — Invented and Owned by <span className="font-semibold text-foreground">Tarek Wahid</span>.
              </p>
              <p className="hash-text mt-3">ORIGIN: VERIFIED · DOCUMENTED · IMMUTABLE</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GovernancePage;
