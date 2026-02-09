import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Scale, Clock, User, Ban, Lock } from "lucide-react";

const GovernancePage = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Governance"
        subtitle="Stewardship structure, neutrality principles, anti-capture protections, succession protocols, and origin authority."
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

      {/* Anti-Capture Clauses */}
      <Section title="Anti-Capture Protections" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The following structural safeguards prevent any single entity — governmental,
          commercial, political, or individual — from capturing, co-opting, or redirecting
          the framework for purposes outside its mandate.
        </p>
        <div className="space-y-3">
          {[
            {
              clause: "No single entity may hold exclusive control over framework governance, stewardship appointments, or record classification rules.",
              icon: <Ban className="h-4 w-4" />,
            },
            {
              clause: "No commercial licence, sponsorship, or funding arrangement may create preferential access, influence over governance decisions, or modification of neutrality principles.",
              icon: <Lock className="h-4 w-4" />,
            },
            {
              clause: "Stewardship roles are term-limited and subject to independent review. No steward may serve indefinitely or appoint their own successor without governance council approval.",
              icon: <Clock className="h-4 w-4" />,
            },
            {
              clause: "Any proposed amendment to core neutrality principles requires supermajority approval from the Neutrality Council and a mandatory public review period.",
              icon: <Scale className="h-4 w-4" />,
            },
            {
              clause: "The framework's canonical definition, origin authority attribution, and core architectural principles are immutable and may not be altered by any governance process.",
              icon: <Shield className="h-4 w-4" />,
            },
          ].map((item, i) => (
            <div key={i} className="governance-card flex items-start gap-3">
              <div className="text-accent shrink-0 mt-0.5">{item.icon}</div>
              <div className="flex items-start gap-3">
                <span className="hash-text shrink-0 mt-0.5">AC-{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-muted-foreground">{item.clause}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Succession Logic */}
      <Section title="Succession Logic" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Stewardship continuity is ensured through structured succession protocols
          that operate independently of any individual, government, or political cycle.
        </p>
        <div className="governance-card">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Succession plans are documented and sealed as governance records within the GRGF Archive.",
              "Successor candidates undergo independent vetting by the Neutrality Council.",
              "Knowledge transfer protocols ensure institutional memory is preserved across transitions.",
              "Emergency succession procedures activate automatically upon steward incapacity or departure.",
              "All succession events are recorded, hash-sealed, and publicly verifiable.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Separation from Vendors and Governments */}
      <Section title="Separation from Vendors & Governments" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF governance is structurally independent of any vendor, technology company,
          government, or political entity. This separation is a design requirement, not
          an aspiration.
        </p>
        <div className="governance-card">
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "No vendor may hold governance authority, stewardship roles, or influence over framework evolution.",
              "No government may unilaterally modify the global framework architecture or its canonical definition.",
              "Technology providers operate as infrastructure suppliers — not governance participants.",
              "Funding sources may not condition support on governance access, modification rights, or preferential treatment.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
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
