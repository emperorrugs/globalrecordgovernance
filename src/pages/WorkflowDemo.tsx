import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { ArrowRight, User, Clock } from "lucide-react";

const STAGES = [
  {
    name: "Draft",
    role: "Record Originator",
    plain: "An institutional actor initiates a record by documenting a decision, action, or event.",
    tech: "Record initiated by designated originator. Metadata captured: type, authority scope, timestamp, context. Status set to DRAFT.",
    rule: "All records must include originator identity, institutional scope, and event classification.",
    time: "Day 0",
  },
  {
    name: "Review",
    role: "Governance Reviewer",
    plain: "A separate reviewer checks the record for completeness, accuracy, and compliance with governance rules.",
    tech: "Dual-authority review protocol. GOS classification taxonomy applied. Mandatory fields validated. Authority scope confirmed.",
    rule: "No record may advance without independent review. Reviewer may not be the originator.",
    time: "Day 1–3",
  },
  {
    name: "Approved",
    role: "Authority Signatory",
    plain: "An authorised signatory approves the record. Once approved, it is sealed and cannot be changed.",
    tech: "Authority signatory confirms compliance. Record hash-sealed with SHA-256. Immutable archive entry created. Version lineage initiated.",
    rule: "Approval requires verified authority scope. Sealed records are immutable — corrections require new versioned entries.",
    time: "Day 3–5",
  },
  {
    name: "Closed",
    role: "Archive Steward",
    plain: "The record is archived permanently. It can be verified by anyone but never modified.",
    tech: "Record archived in immutable store. Hash published to public manifest. Audit trail finalised. Retention policy applied.",
    rule: "Closed records enter permanent retention. All verification queries return cryptographic integrity confirmation.",
    time: "Day 5+",
  },
];

const AUDIT_TRAIL = [
  { time: "2024-06-01 09:14:22", actor: "J. Okafor (Ministry of Finance)", action: "Record created — Draft", hash: "a7f3c2…" },
  { time: "2024-06-02 14:30:05", actor: "M. Chen (Governance Review Unit)", action: "Review initiated — Classification applied", hash: "b8e4d3…" },
  { time: "2024-06-03 10:12:48", actor: "M. Chen (Governance Review Unit)", action: "Review complete — Compliant", hash: "c9f5e4…" },
  { time: "2024-06-04 16:45:11", actor: "Dr. A. Nkosi (Permanent Secretary)", action: "Approved — Hash sealed", hash: "d0a6f5…" },
  { time: "2024-06-05 08:00:00", actor: "System (Archive Steward)", action: "Record closed — Archived", hash: "e1b7g6…" },
];

const WorkflowDemo = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Workflow Demonstration"
        subtitle={
          isPlain
            ? "Follow a governance record through its full lifecycle — from creation to permanent archive."
            : "Visual demonstration of the GRGF record lifecycle: Draft → Review → Approved → Closed, with role assignments and governance rules."
        }
      />

      {/* Lifecycle Flow */}
      <Section title="Record Lifecycle">
        <div className="space-y-4">
          {STAGES.map((stage, i) => (
            <div key={stage.name}>
              <div className="governance-card">
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center shrink-0">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold ${
                      i === STAGES.length - 1
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-serif text-base font-semibold">{stage.name}</h3>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground bg-card border border-border rounded-sm px-2 py-0.5">
                        <User className="h-3 w-3" />
                        {stage.role}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {stage.time}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {isPlain ? stage.plain : stage.tech}
                    </p>
                    <div className="bg-background border border-border rounded-sm px-4 py-2.5">
                      <p className="text-xs font-mono text-muted-foreground/70 uppercase tracking-wider mb-1">Governance Rule</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{stage.rule}</p>
                    </div>
                  </div>
                </div>
              </div>
              {i < STAGES.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowRight className="h-4 w-4 text-accent/50 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Simulated Audit Trail */}
      <Section title="Simulated Audit Trail" className="border-t border-border">
        <div className="overflow-x-auto border border-border rounded-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-card border-b border-border">
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">TIMESTAMP</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">ACTOR</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">ACTION</th>
                <th className="text-left px-4 py-3 font-mono text-xs text-muted-foreground tracking-wider">HASH</th>
              </tr>
            </thead>
            <tbody>
              {AUDIT_TRAIL.map((entry, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{entry.time}</td>
                  <td className="px-4 py-3 text-muted-foreground">{entry.actor}</td>
                  <td className="px-4 py-3">{entry.action}</td>
                  <td className="px-4 py-3 font-mono text-xs text-accent">{entry.hash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground italic mt-4">
          This audit trail is simulated for demonstration purposes. No authoritative records exist.
        </p>
      </Section>
    </div>
  );
};

export default WorkflowDemo;
