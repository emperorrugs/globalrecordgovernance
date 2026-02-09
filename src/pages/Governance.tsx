import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Scale, Clock, User } from "lucide-react";

const GovernancePage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Governance"
        subtitle="Stewardship structure, neutrality principles, succession protocols, and origin authority."
      />

      <Section title="Stewardship Model">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF governance is structured to ensure long-term neutrality, institutional independence,
          and operational continuity across political, generational, and technological transitions.
          Stewardship is distributed across defined roles with clear mandates and accountability.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Framework Steward",
              desc: "Responsible for the integrity and evolution of the core framework. Ensures all changes undergo proper governance review.",
              icon: <Shield className="h-5 w-5" />,
            },
            {
              title: "Country Stewards",
              desc: "Designated authorities within each deploying jurisdiction responsible for local GRGF operations and compliance.",
              icon: <Users className="h-5 w-5" />,
            },
            {
              title: "Neutrality Council",
              desc: "Independent body ensuring the framework remains free from political, commercial, or ideological influence.",
              icon: <Scale className="h-5 w-5" />,
            },
            {
              title: "Succession Authority",
              desc: "Ensures continuity of stewardship through structured succession planning and knowledge transfer.",
              icon: <Clock className="h-5 w-5" />,
            },
          ].map((g) => (
            <div key={g.title} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="text-accent shrink-0 mt-0.5">{g.icon}</div>
                <div>
                  <h3 className="font-serif text-sm font-semibold">{g.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Neutrality Principles" className="border-t border-border">
        <div className="space-y-3">
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

      <Section title="Origin Authority" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <User className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                GRGF originated as a unified Digital Public Infrastructure architecture and
                governance model conceived and authored by <span className="font-semibold text-foreground">Tarek Wahid</span>.
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
