import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronDown, ChevronUp, Clock, TrendingUp,
  Layers, Eye, DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  sectorApplications, getTotalApplications, getTotalAnnualValue,
  type ApplicationDetail, type SectorData
} from "@/data/applicationWorkflows";

/* ── Helpers ── */
function fmtCurrency(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n}`;
}

/* ── Application Card (Expandable) ── */
function AppCard({ app }: { app: ApplicationDetail }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg bg-card overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted/20 transition-colors"
      >
        <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary shrink-0">
          {app.code}
        </span>
        <span className="text-sm font-medium text-foreground flex-1 min-w-0">{app.name}</span>
        <span className="hidden sm:block text-xs font-semibold text-accent shrink-0">
          {fmtCurrency(app.annualValue)}/yr
        </span>
        {open ? (
          <ChevronUp className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
        )}
      </button>

      {open && (
        <div className="border-t border-border px-4 py-5 space-y-5 animate-fade-in">
          {/* Problem & Mechanism */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-3 rounded-lg bg-destructive/5 border border-destructive/15">
              <p className="text-[9px] font-mono text-destructive uppercase mb-1.5">Problem</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{app.problem}</p>
            </div>
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/15">
              <p className="text-[9px] font-mono text-primary uppercase mb-1.5">GRGF™ Mechanism</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{app.mechanism}</p>
            </div>
          </div>

          {/* Integration Architecture */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <Layers className="w-3 h-3" /> Integration
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="p-2.5 bg-muted/20 rounded border border-border">
                <p className="text-[8px] font-mono text-muted-foreground mb-0.5">METHOD</p>
                <p className="text-[11px] font-medium text-foreground">{app.integration}</p>
              </div>
              <div className="p-2.5 bg-muted/20 rounded border border-border">
                <p className="text-[8px] font-mono text-muted-foreground mb-0.5">PROTOCOL</p>
                <p className="text-[11px] font-medium text-foreground">{app.protocol}</p>
              </div>
              <div className="p-2.5 bg-muted/20 rounded border border-border">
                <p className="text-[8px] font-mono text-muted-foreground mb-0.5">SOURCE SYSTEM</p>
                <p className="text-[11px] font-medium text-foreground">{app.sourceSystem}</p>
              </div>
            </div>
          </div>

          {/* Workflow Transformation */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <ArrowRight className="w-3 h-3" /> Workflow Transformation
            </h4>
            <div className="space-y-2">
              {app.workflow.map((w, i) => (
                <div key={i} className="grid sm:grid-cols-[1fr_auto_1fr] gap-2 items-stretch">
                  <div className="p-2.5 rounded border border-destructive/15 bg-destructive/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[8px] font-mono text-destructive uppercase">Before</span>
                      <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-destructive/10 text-destructive">{w.timeBefore}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{w.before}</p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-primary" />
                    </div>
                  </div>
                  <div className="p-2.5 rounded border border-primary/15 bg-primary/5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[8px] font-mono text-primary uppercase">After GRGF™</span>
                      <span className="text-[8px] font-mono px-1 py-0.5 rounded bg-primary/10 text-primary">{w.timeAfter}</span>
                    </div>
                    <p className="text-[11px] text-foreground leading-relaxed">{w.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
              <Eye className="w-3 h-3" /> Impact Metrics
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[11px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-1.5 pr-3 font-semibold text-muted-foreground">Metric</th>
                    <th className="text-right py-1.5 px-3 font-semibold text-destructive">Before</th>
                    <th className="text-right py-1.5 px-3 font-semibold text-primary">After</th>
                    <th className="text-left py-1.5 pl-3 font-semibold text-muted-foreground">Unit</th>
                  </tr>
                </thead>
                <tbody>
                  {app.metrics.map((m, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-1.5 pr-3 font-medium text-foreground">{m.label}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-destructive">{m.before}</td>
                      <td className="py-1.5 px-3 text-right font-mono text-primary font-semibold">{m.after}</td>
                      <td className="py-1.5 pl-3 text-muted-foreground">{m.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-3 rounded-lg bg-accent/5 border border-accent/20">
            <div className="flex items-start gap-2">
              <DollarSign className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] font-mono text-accent uppercase mb-1">Financial Impact</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{app.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Sector Section ── */
function SectorSection({ sector }: { sector: SectorData }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = sector.icon;
  const sectorValue = sector.applications.reduce((s, a) => s + a.annualValue, 0);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-3 px-6 py-5 text-left hover:bg-muted/20 transition-colors"
      >
        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
          <Icon className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">{sector.sectorCode}</span>
            <h2 className="text-base font-bold text-foreground">{sector.name}</h2>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <div className="text-right">
            <p className="text-[9px] font-mono text-muted-foreground">APPLICATIONS</p>
            <p className="text-sm font-semibold text-foreground">{sector.applications.length}</p>
          </div>
          <div className="text-right">
            <p className="text-[9px] font-mono text-muted-foreground">ANNUAL VALUE</p>
            <p className="text-sm font-bold text-accent">{fmtCurrency(sectorValue)}</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
        )}
      </button>

      {/* Mobile stats */}
      <div className="sm:hidden flex items-center gap-4 px-6 pb-3">
        <span className="text-[10px] text-muted-foreground">{sector.applications.length} apps</span>
        <span className="text-[10px] font-semibold text-accent">{fmtCurrency(sectorValue)}/yr</span>
      </div>

      {expanded && (
        <div className="border-t border-border px-4 sm:px-6 py-4 space-y-3 animate-fade-in">
          {sector.applications.map((app) => (
            <AppCard key={app.code} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Page ── */
export default function PublicApplications() {
  const totalApps = getTotalApplications();
  const totalValue = getTotalAnnualValue();

  return (
    <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="max-w-2xl mb-10">
        <p className="text-overline font-semibold text-primary tracking-widest uppercase mb-4">Applications</p>
        <h1 className="text-display font-bold text-foreground mb-4">
          {totalApps} Applications Across {sectorApplications.length} Sectors
        </h1>
        <p className="text-body-lg text-muted-foreground leading-relaxed">
          Each application includes detailed workflow transformations, integration architecture,
          impact metrics, and financial value — all powered by the same GRGF™ core engine.
        </p>
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-[9px] font-mono text-muted-foreground uppercase mb-1">Total Applications</p>
          <p className="text-2xl font-bold text-foreground">{totalApps}</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card">
          <p className="text-[9px] font-mono text-muted-foreground uppercase mb-1">Sectors Covered</p>
          <p className="text-2xl font-bold text-foreground">{sectorApplications.length}</p>
        </div>
        <div className="p-4 rounded-lg border border-border bg-card col-span-2 sm:col-span-1">
          <p className="text-[9px] font-mono text-muted-foreground uppercase mb-1">Total Annual Value</p>
          <p className="text-2xl font-bold text-accent">{fmtCurrency(totalValue)}</p>
        </div>
      </div>

      {/* Sector sections */}
      <div className="space-y-4">
        {sectorApplications.map((sector) => (
          <SectorSection key={sector.sectorCode} sector={sector} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/documents"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all"
        >
          Download Full Catalog
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Attribution */}
      <div className="mt-8 text-center">
        <p className="text-[10px] font-mono text-muted-foreground">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
        </p>
      </div>
    </div>
  );
}
