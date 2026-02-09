import { PageHeader, Section } from "@/components/PageComponents";
import { AlertTriangle, FileText, CheckCircle, XCircle, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

const DEMO_WORKFLOWS = [
  {
    id: "approval",
    title: "Procurement Decision — Approved",
    steps: [
      { label: "Record Created", detail: "Procurement request PR-2024-0042 submitted", status: "complete" as const },
      { label: "Classification", detail: "Category: Government Procurement · Priority: Standard", status: "complete" as const },
      { label: "Governance Review", detail: "Reviewed by designated authority per GOS Rule 4.2", status: "complete" as const },
      { label: "Decision", detail: "APPROVED — Decision recorded and hash-sealed", status: "approved" as const },
      { label: "Archive Sealed", detail: "SHA-256 integrity proof generated · Record immutable", status: "complete" as const },
    ],
  },
  {
    id: "denial",
    title: "Regulatory Action — Denied",
    steps: [
      { label: "Record Created", detail: "Licence application REG-2024-0118 submitted", status: "complete" as const },
      { label: "Classification", detail: "Category: Regulatory Licence · Priority: High", status: "complete" as const },
      { label: "Governance Review", detail: "Non-compliance with Section 7.3 identified", status: "complete" as const },
      { label: "Decision", detail: "DENIED — Grounds documented and sealed", status: "denied" as const },
      { label: "Archive Sealed", detail: "SHA-256 integrity proof generated · Record immutable", status: "complete" as const },
    ],
  },
  {
    id: "omission",
    title: "Omitted Event — Required Action Not Taken",
    steps: [
      { label: "Obligation Registered", detail: "Annual safety inspection due by 2024-03-31", status: "complete" as const },
      { label: "Monitoring Period", detail: "Deadline monitoring active per GOS Rule 6.1", status: "complete" as const },
      { label: "Deadline Expired", detail: "2024-03-31 passed — no inspection record filed", status: "complete" as const },
      { label: "Omission Recorded", detail: "OMISSION — Required action not performed within mandated timeframe", status: "omission" as const },
      { label: "Archive Sealed", detail: "Omission record hash-sealed · Available for audit", status: "complete" as const },
    ],
  },
];

const statusColors: Record<string, string> = {
  complete: "bg-muted text-muted-foreground",
  approved: "bg-accent/15 text-accent border border-accent/30",
  denied: "bg-destructive/10 text-destructive border border-destructive/30",
  omission: "bg-accent/10 text-accent-foreground border border-accent/40",
};

const statusIcons: Record<string, React.ReactNode> = {
  complete: <CheckCircle className="h-4 w-4" />,
  approved: <CheckCircle className="h-4 w-4" />,
  denied: <XCircle className="h-4 w-4" />,
  omission: <Clock className="h-4 w-4" />,
};

const Simulator = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(DEMO_WORKFLOWS[0].id);
  const workflow = DEMO_WORKFLOWS.find((w) => w.id === activeWorkflow)!;

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Live Simulator"
        subtitle="Demonstration-only governance workflow visualisation. No real data is processed or recorded."
      >
        <div className="mt-4 flex items-center gap-2 text-xs font-mono bg-destructive/10 text-destructive px-3 py-2 rounded-sm w-fit border border-destructive/20">
          <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
          <span>DEMO MODE — No live recording. No real data. For illustration only.</span>
        </div>
      </PageHeader>

      {/* Workflow Selector */}
      <Section title="Workflow Examples">
        <div className="flex flex-wrap gap-2 mb-8">
          {DEMO_WORKFLOWS.map((w) => (
            <button
              key={w.id}
              onClick={() => setActiveWorkflow(w.id)}
              className={`px-4 py-2 text-sm rounded-sm border transition-colors ${
                activeWorkflow === w.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card text-muted-foreground border-border hover:border-accent/50"
              }`}
            >
              {w.title}
            </button>
          ))}
        </div>

        {/* Workflow Visualisation */}
        <div className="governance-card">
          <h3 className="font-serif text-base font-semibold mb-6">{workflow.title}</h3>
          <div className="space-y-4">
            {workflow.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`rounded-full p-2 ${statusColors[step.status]}`}>
                    {statusIcons[step.status]}
                  </div>
                  {i < workflow.steps.length - 1 && (
                    <div className="w-px h-6 bg-border mt-1" />
                  )}
                </div>
                <div className="pt-1">
                  <p className="text-sm font-semibold text-foreground">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Sample Data Entry */}
      <Section title="Sample Data Entry" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-destructive/50">
          <div className="flex items-center gap-2 mb-4 text-xs font-mono text-destructive">
            <AlertTriangle className="h-3.5 w-3.5" />
            DEMO INTERFACE — Not connected to any archive or governance system
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">Record Type</label>
              <select className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm text-muted-foreground" disabled>
                <option>Government Decision</option>
                <option>Procurement Action</option>
                <option>Regulatory Filing</option>
                <option>Omission Event</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">Jurisdiction</label>
              <select className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm text-muted-foreground" disabled>
                <option>Select jurisdiction…</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-semibold text-foreground block mb-1.5">Description</label>
              <textarea
                className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm text-muted-foreground h-20 resize-none"
                placeholder="Describe the institutional action, decision, or omission…"
                disabled
              />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button className="px-4 py-2 bg-muted text-muted-foreground text-sm rounded-sm cursor-not-allowed" disabled>
              Submit Record (Disabled — Demo Only)
            </button>
          </div>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <FileText className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Disclaimer.</span> This simulator is
            provided for demonstration and educational purposes only. No data entered in this interface
            is recorded, transmitted, or stored. No governance action, decision, or omission visualised
            here constitutes an authoritative GRGF record. The simulator does not connect to the Digital
            Archive, Governance Operating System, or any production system.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Simulator;
