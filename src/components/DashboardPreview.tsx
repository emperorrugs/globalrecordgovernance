import { Shield, FileCheck, AlertTriangle, Activity, TrendingUp, Eye, Scale, Clock } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";
import { FadeIn } from "./FadeIn";

function StatCard({ icon: Icon, label, value, suffix, trend, color }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  suffix?: string;
  trend?: string;
  color?: string;
}) {
  return (
    <div className="governance-card group">
      <div className="flex items-center justify-between mb-3">
        <Icon className={`h-5 w-5 ${color || "text-accent"}`} />
        {trend && <span className="text-overline text-sovereign-green">{trend}</span>}
      </div>
      <div className="text-2xl md:text-3xl font-bold text-foreground tabular-nums">
        <AnimatedCounter end={value} suffix={suffix || ""} />
      </div>
      <p className="text-caption text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 relative">
        <FadeIn>
          <div className="text-center mb-14">
            <div className="carbon-tag mx-auto mb-4 w-fit">OPERATIONAL INTELLIGENCE</div>
            <h2 className="text-heading-1 font-bold text-foreground mb-4">
              System Command Center
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time oversight of governance integrity across institutions, jurisdictions, and sectors.
            </p>
          </div>
        </FadeIn>

        {/* Stats Grid */}
        <FadeIn delay={100}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon={FileCheck} label="Records Sealed" value={2847} trend="+12.4%" />
            <StatCard icon={Shield} label="Integrity Score" value={100} suffix="%" color="text-sovereign-green" />
            <StatCard icon={Eye} label="Active Institutions" value={24} trend="+3" />
            <StatCard icon={AlertTriangle} label="Omission Alerts" value={7} color="text-warning" />
          </div>
        </FadeIn>

        {/* Dashboard Panels */}
        <FadeIn delay={200}>
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Risk Signals */}
            <div className="governance-card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-4 w-4 text-warning" />
                <h3 className="productive-heading-01">Risk Signals</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Delayed procurement approval", severity: "Medium", time: "2h ago" },
                  { label: "Missing inspection report", severity: "High", time: "4h ago" },
                  { label: "Authority delegation expired", severity: "Low", time: "1d ago" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-between gap-2 p-2.5 rounded-md bg-background border border-border">
                    <div>
                      <p className="text-xs font-medium text-foreground">{item.label}</p>
                      <span className="text-overline text-muted-foreground">{item.time}</span>
                    </div>
                    <span className={`text-overline font-semibold px-2 py-0.5 rounded-full ${
                      item.severity === "High" ? "bg-destructive/10 text-destructive" :
                      item.severity === "Medium" ? "bg-warning/10 text-warning" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      {item.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="governance-card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-4 w-4 text-accent" />
                <h3 className="productive-heading-01">Recent Activity</h3>
              </div>
              <div className="space-y-3">
                {[
                  { action: "Record sealed", entity: "GOV-2024-0847", actor: "Ministry of Finance", time: "3m" },
                  { action: "Approval granted", entity: "GOV-2024-0846", actor: "Auditor General", time: "18m" },
                  { action: "Dispute opened", entity: "GOV-2024-0839", actor: "Public Review Board", time: "1h" },
                  { action: "Verification passed", entity: "GOV-2024-0835", actor: "External Verifier", time: "2h" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-2 rounded-md hover:bg-muted/50 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-foreground">{item.action}</p>
                      <p className="text-overline text-muted-foreground truncate">
                        {item.entity} • {item.actor} • {item.time} ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sector Coverage */}
            <div className="governance-card-elevated">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-sovereign-green" />
                <h3 className="productive-heading-01">Sector Coverage</h3>
              </div>
              <div className="space-y-2.5">
                {[
                  { name: "Government", pct: 94 },
                  { name: "Healthcare", pct: 78 },
                  { name: "Finance", pct: 85 },
                  { name: "Infrastructure", pct: 62 },
                  { name: "Justice", pct: 71 },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-foreground font-medium">{s.name}</span>
                      <span className="text-muted-foreground tabular-nums">{s.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000"
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
