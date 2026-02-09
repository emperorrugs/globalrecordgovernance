import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Target, Compass, BookOpen, Scale, AlertTriangle, Clock, ShieldAlert, Eye } from "lucide-react";

const principles = [
  {
    title: "Immutability",
    description: "Once sealed, records cannot be altered, deleted, or reinterpreted. Integrity is preserved across time and jurisdiction.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Neutrality",
    description: "GRGF does not interpret, enforce, or adjudicate. It records and preserves without bias or position.",
    icon: <Scale className="h-5 w-5" />,
  },
  {
    title: "Sovereignty",
    description: "Each deploying jurisdiction retains full sovereign control over its instance, data, and operational parameters.",
    icon: <Compass className="h-5 w-5" />,
  },
  {
    title: "Transparency",
    description: "All governance rules, processes, and stewardship structures are publicly documented and independently verifiable.",
    icon: <BookOpen className="h-5 w-5" />,
  },
];

const Framework = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Framework"
        subtitle="The architectural principles, purpose, and governing spine of the Global Record Governance Framework."
      />

      <Section title="Purpose">
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          GRGF exists to provide a durable, neutral infrastructure for the recording and preservation
          of institutional actions, decisions, and omissions. It is designed to function across
          jurisdictions, political cycles, and technological generations — serving as a trust layer
          that institutions, courts, and auditors can rely upon over decades.
        </p>
      </Section>

      {/* Why Governance Truth Fails */}
      <Section title="Why Governance Truth Fails in Digital Systems" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Most digital systems are built for transactions — not governance reality. They record
          what happened, but not what should have happened, what was delayed, or what was omitted.
          Governance truth requires a fundamentally different architecture.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Transactions vs. Governance Reality</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  Transaction systems record completed exchanges. Governance systems must also record
                  non-events: the inspection that did not occur, the decision that was deferred,
                  the authority that failed to act. GRGF captures both actions and omissions as
                  first-class governance records.
                </p>
              </div>
            </div>
          </div>
          <div className="governance-card">
            <div className="flex items-start gap-3">
              <Eye className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-sm font-semibold">Events and Omissions</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  An omission — a failure to act within mandated scope, time, or authority — is
                  as significant as an action. GRGF treats omissions as verifiable governance events,
                  each subject to the same hash-sealing and integrity preservation as affirmative records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Governance Dimensions */}
      <Section title="Governance Dimensions" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Every institutional record exists within three governance dimensions. GRGF ensures
          each dimension is captured, preserved, and independently verifiable.
        </p>
        <div className="space-y-3">
          {[
            {
              label: "Time",
              name: "Temporal Integrity",
              desc: "When did the action or omission occur? Records are sealed with immutable timestamps that cannot be retroactively altered.",
              icon: <Clock className="h-4 w-4" />,
            },
            {
              label: "Authority",
              name: "Jurisdictional Scope",
              desc: "Who held the mandate to act? GRGF records capture the authority under which actions were taken or should have been taken.",
              icon: <ShieldAlert className="h-4 w-4" />,
            },
            {
              label: "Scope",
              name: "Operational Boundary",
              desc: "What was the defined scope of responsibility? Records document the boundaries within which institutional actors operated or failed to operate.",
              icon: <Target className="h-4 w-4" />,
            },
          ].map((dim) => (
            <div key={dim.label} className="governance-card flex items-start gap-4">
              <div className="text-accent shrink-0 mt-0.5">{dim.icon}</div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="hash-text">{dim.label.toUpperCase()}</span>
                  <h4 className="font-serif text-sm font-semibold">{dim.name}</h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{dim.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Neutrality Matters */}
      <Section title="Why Neutrality Matters" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
          Neutrality is not a design preference — it is a structural requirement. A governance
          record system that carries interpretive bias, enforcement power, or political alignment
          cannot function as a trust layer across jurisdictions. Nations, courts, and auditors
          will only rely on infrastructure that demonstrably lacks agenda.
        </p>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          GRGF achieves neutrality through architecture: it records without interpreting,
          preserves without adjudicating, and verifies without enforcing. This separation
          is not aspirational — it is codified in the framework's anti-capture clauses,
          stewardship protocols, and immutable canonical definition.
        </p>
      </Section>

      <Section title="Core Principles" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map((p) => (
            <InfoCard key={p.title} title={p.title} description={p.description} icon={p.icon} />
          ))}
        </div>
      </Section>

      <Section title="System Spine" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          The framework spine consists of four interlocking layers that together form
          a complete governance and record infrastructure:
        </p>
        <div className="space-y-3">
          {[
            { label: "Layer 1", name: "Record Capture", desc: "Structured ingestion and validation of institutional actions and omissions." },
            { label: "Layer 2", name: "Hash Sealing", desc: "Cryptographic immutability applied at point of record finalization." },
            { label: "Layer 3", name: "Governance Binding", desc: "Rules and stewardship protocols attached to each record class." },
            { label: "Layer 4", name: "Public Reference", desc: "Read-only access layer for citation, audit, and verification." },
          ].map((layer) => (
            <div key={layer.label} className="governance-card flex items-start gap-4">
              <span className="text-xs font-mono text-accent font-semibold shrink-0 mt-0.5">{layer.label}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{layer.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Framework;
