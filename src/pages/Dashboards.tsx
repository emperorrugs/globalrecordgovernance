import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { BarChart3, Clock, CheckCircle, AlertTriangle } from "lucide-react";

const STATS = [
  { label: "Total Simulated Records", value: "1,247", icon: BarChart3 },
  { label: "Approved", value: "892", icon: CheckCircle },
  { label: "Pending Review", value: "203", icon: Clock },
  { label: "Denied / Omission", value: "152", icon: AlertTriangle },
];

const STATUS_BREAKDOWN = [
  { status: "Approved", count: 892, pct: 71.5, color: "bg-accent" },
  { status: "Review", count: 203, pct: 16.3, color: "bg-primary" },
  { status: "Denied", count: 89, pct: 7.1, color: "bg-destructive" },
  { status: "Omission", count: 63, pct: 5.1, color: "bg-muted-foreground" },
];

const AVG_TIMES = [
  { stage: "Draft → Review", days: "1.2 days" },
  { stage: "Review → Approved", days: "2.8 days" },
  { stage: "Approved → Closed", days: "1.5 days" },
  { stage: "Total Lifecycle", days: "5.5 days" },
];

const COMPLIANCE = [
  { indicator: "Dual-Authority Review", status: "✔ Compliant", compliant: true },
  { indicator: "Hash Integrity", status: "✔ All Records Sealed", compliant: true },
  { indicator: "Omission Detection", status: "✔ Active", compliant: true },
  { indicator: "Succession Protocol", status: "✔ Documented", compliant: true },
  { indicator: "Anti-Capture Audit", status: "✔ No Violations", compliant: true },
];

const VERSION_HISTORY = [
  { version: "v1.0.0", date: "2024-01-15", change: "Initial framework release" },
  { version: "v1.1.0", date: "2024-03-22", change: "Added omission detection protocols" },
  { version: "v1.2.0", date: "2024-06-10", change: "Anti-capture clause refinement" },
  { version: "v1.3.0", date: "2024-09-01", change: "Succession authority documentation" },
];

const Dashboards = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Dashboards"
        subtitle={
          isPlain
            ? "Visual overview of simulated governance activity — for demonstration and training only."
            : "Aggregate analytics over simulated GRGF record data. Non-authoritative. No real institutional data."
        }
      />

      {/* What is visualised */}
      <Section>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
          Dashboards provide a visual representation of simulated governance data, including record volumes, workflow distribution, compliance indicators, and version history. All data shown is for demonstration purposes only.
        </p>
      </Section>

      {/* KPI Cards */}
      <Section title="Simulated Record Volumes" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="governance-card text-center">
              <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
              <p className="font-serif text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Status Breakdown */}
      <Section title="Workflow Stage Distribution" className="border-t border-border">
        <div className="space-y-3 max-w-xl">
          {STATUS_BREAKDOWN.map((s) => (
            <div key={s.status}>
              <div className="flex justify-between text-sm mb-1">
                <span>{s.status}</span>
                <span className="font-mono text-xs text-muted-foreground">{s.count} ({s.pct}%)</span>
              </div>
              <div className="w-full bg-border rounded-sm h-2.5">
                <div className={`h-2.5 rounded-sm ${s.color}`} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Average Times */}
      <Section title="Average Time per Stage" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl">
          {AVG_TIMES.map((t) => (
            <div key={t.stage} className="governance-card text-center">
              <p className="text-xs text-muted-foreground mb-1">{t.stage}</p>
              <p className="font-serif text-lg font-semibold">{t.days}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Compliance */}
      <Section title="Governance Compliance Indicators" className="border-t border-border">
        <div className="space-y-2 max-w-lg">
          {COMPLIANCE.map((c) => (
            <div key={c.indicator} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
              <span className="text-sm">{c.indicator}</span>
              <span className={`text-xs font-mono ${c.compliant ? "text-accent" : "text-destructive"}`}>{c.status}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Version History */}
      <Section title="Version History" className="border-t border-border">
        <div className="space-y-2 max-w-lg">
          {VERSION_HISTORY.map((v) => (
            <div key={v.version} className="flex items-center justify-between py-2 border-b border-border last:border-b-0">
              <div>
                <span className="text-sm font-semibold">{v.version}</span>
                <span className="text-xs text-muted-foreground ml-3">{v.date}</span>
              </div>
              <span className="text-xs text-muted-foreground">{v.change}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Mandatory Disclaimer */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">Disclaimer.</span> Dashboards visualize simulated or summary data only and are not authoritative. No real institutional data is displayed, collected, or stored.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Dashboards;
