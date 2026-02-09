import { PageHeader, Section } from "@/components/PageComponents";
import { ArrowDown, Lock, Scale, Globe } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";

const flowSteps = [
  {
    step: 1, title: "Event Occurs", icon: "🔵",
    plain: "Something happens — a decision, action, or a required action that wasn't taken.",
    tech: "Institutional event trigger: action, decision, transaction, or obligation deadline expiry detected.",
  },
  {
    step: 2, title: "Policy Check", icon: "🔍",
    plain: "GRGF checks the event against governance rules to determine how it should be recorded.",
    tech: "GOS rule engine evaluates event against classification taxonomy, authority scope, and governance protocols.",
  },
  {
    step: 3, title: "Record Allowed or Denied", icon: "📋",
    plain: "The system either creates a sealed record or documents why the event was rejected or flagged.",
    tech: "Record creation authorised or denied. Non-compliance documented. Omission events auto-generated for unmet obligations.",
  },
  {
    step: 4, title: "Evidence Status Returned", icon: "✅",
    plain: "A clear answer: the record exists (with proof), or no verifiable record exists.",
    tech: "SHA-256 integrity proof generated. Evidence status: SEALED / DENIED / OMISSION. Hash published to manifest.",
  },
  {
    step: 5, title: "Verification Possible", icon: "🔒",
    plain: "Anyone can independently check if the record exists and hasn't been changed.",
    tech: "Public hash manifest enables independent verification. Any party can recompute and compare SHA-256 hash.",
  },
];

const Architecture = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={isPlain ? "How It Works" : "System Architecture"}
        subtitle={isPlain
          ? "A simple visual guide to how GRGF processes a governance event."
          : "Three interdependent layers: Immutable Archive, Governance Operating System, and Digital Platform."
        }
      />

      <Section title={isPlain ? "Step by Step" : "Governance Event Flow"}>
        <div className="max-w-2xl mx-auto space-y-2">
          {flowSteps.map((s, i) => (
            <div key={s.step}>
              <div className="governance-card group">
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{s.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="hash-text text-accent">STEP {s.step}</span>
                      <h3 className="font-serif text-sm font-semibold">{s.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isPlain ? s.plain : s.tech}
                    </p>
                  </div>
                </div>
              </div>
              {i < flowSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-4 w-4 text-accent/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section title="Three System Layers" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="h-4 w-4 text-accent" />
              <h3 className="font-serif text-sm font-semibold">Immutable Archive</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isPlain ? "Where records are permanently stored. Once sealed, nothing can be changed." : "Hash-sealed, write-once records with cryptographic integrity proofs. Authoritative source of truth."}
            </p>
            <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Scale className="h-4 w-4 text-accent" />
              <h3 className="font-serif text-sm font-semibold">Governance OS</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isPlain ? "The rules that govern how records are created, classified, and protected." : "Document-based rules, charters, processes, and stewardship protocols. Not software — governance logic."}
            </p>
            <p className="hash-text mt-3">STATUS: AUTHORITATIVE</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-4 w-4 text-accent" />
              <h3 className="font-serif text-sm font-semibold">Digital Platform</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {isPlain ? "This website — a public reference tool. It shows information but doesn't create official records." : "Read-only public interface. References authority — never replaces it. Non-authoritative."}
            </p>
            <p className="hash-text mt-3">STATUS: REFERENCE (NON-AUTHORITATIVE)</p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Architecture;
