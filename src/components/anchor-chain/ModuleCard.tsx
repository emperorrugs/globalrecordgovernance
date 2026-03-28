import { useState } from "react";
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { SectorModule } from "./sectorModules";

export function ModuleCard({ module, index }: { module: SectorModule; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = module.icon;

  return (
    <FadeIn delay={index * 40}>
      <div className="governance-card-elevated border-l-4 transition-all duration-300" style={{ borderLeftColor: module.color }}>
        {/* Header */}
        <button onClick={() => setExpanded(!expanded)} className="w-full text-left">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-lg border shrink-0" style={{ backgroundColor: `${module.color}10`, borderColor: `${module.color}30` }}>
              <Icon className="h-5 w-5" style={{ color: module.color }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[10px] font-mono tracking-wider uppercase" style={{ color: module.color }}>
                    MODULE {module.id.toUpperCase()} · {module.appCount} APPLICATIONS
                  </p>
                  <h3 className="font-serif text-lg font-semibold mt-0.5">{module.name}</h3>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-lg font-mono font-bold" style={{ color: module.color }}>{module.totalValue}</span>
                  {expanded ? <ChevronDown className="h-5 w-5 text-accent" /> : <ChevronRight className="h-5 w-5 text-muted-foreground/40" />}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{module.description}</p>
            </div>
          </div>
        </button>

        {/* Expanded Applications */}
        {expanded && (
          <div className="mt-6 border-t border-border pt-6 space-y-3">
            {module.applications.map((app, i) => (
              <div key={app.code} className="p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-accent/20 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border" style={{ color: module.color, borderColor: `${module.color}30`, backgroundColor: `${module.color}08` }}>
                        {app.code}
                      </span>
                      <span className="font-mono text-[10px] font-bold" style={{ color: module.color }}>{app.value}</span>
                    </div>
                    <h4 className="text-sm font-semibold">{app.name}</h4>
                    <div className="mt-2 grid md:grid-cols-2 gap-3 text-xs text-muted-foreground">
                      <div>
                        <p className="font-mono text-[10px] text-destructive/70 mb-0.5">PROBLEM</p>
                        <p>{app.problem}</p>
                      </div>
                      <div>
                        <p className="font-mono text-[10px] mb-0.5" style={{ color: module.color }}>MECHANISM</p>
                        <p>{app.mechanism}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <ArrowRight className="h-3 w-3" style={{ color: module.color }} />
                  <span className="text-[11px] font-medium" style={{ color: module.color }}>{app.impact}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
}
