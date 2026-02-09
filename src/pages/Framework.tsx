import { PageHeader, Section, InfoCard } from "@/components/PageComponents";
import { Target, Compass, BookOpen, Scale } from "lucide-react";

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
            { label: "Layer 1", name: "Record Capture", desc: "Structured ingestion and validation of institutional actions." },
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
