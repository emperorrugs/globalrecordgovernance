import { useState } from "react";
import { cn } from "@/lib/utils";
import { useViewMode } from "@/contexts/ViewModeContext";
import { FadeIn } from "@/components/FadeIn";
import {
  Database, Shield, Globe, Layers, ArrowRight, ArrowDown,
  Lock, Eye, Server, FileCheck, Network, Cpu, ChevronDown, ChevronUp,
  Zap, CheckCircle2, AlertTriangle,
} from "lucide-react";

/* ─── Shared node component ─── */
function DiagramNode({
  icon: Icon,
  label,
  sublabel,
  color = "accent",
  pulse = false,
  className,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sublabel?: string;
  color?: string;
  pulse?: boolean;
  className?: string;
}) {
  const colorMap: Record<string, string> = {
    accent: "border-accent/40 bg-accent/10 text-accent",
    blue: "border-blue-500/40 bg-blue-500/10 text-blue-500",
    amber: "border-amber-500/40 bg-amber-500/10 text-amber-500",
    emerald: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
    rose: "border-rose-500/40 bg-rose-500/10 text-rose-500",
    purple: "border-purple-500/40 bg-purple-500/10 text-purple-500",
  };

  return (
    <div className={cn("relative flex flex-col items-center gap-1 p-3 border rounded-lg text-center min-w-[100px]", colorMap[color] || colorMap.accent, className)}>
      {pulse && (
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
        </span>
      )}
      <Icon className="h-5 w-5" />
      <span className="text-xs font-semibold leading-tight">{label}</span>
      {sublabel && <span className="text-[10px] text-muted-foreground leading-tight">{sublabel}</span>}
    </div>
  );
}

function FlowArrow({ direction = "right", label }: { direction?: "right" | "down"; label?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-1", direction === "down" ? "flex-col py-1" : "px-1")}>
      {direction === "right" ? (
        <>
          {label && <span className="text-[9px] font-mono text-muted-foreground/60">{label}</span>}
          <ArrowRight className="h-4 w-4 text-muted-foreground/40" />
        </>
      ) : (
        <>
          <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
          {label && <span className="text-[9px] font-mono text-muted-foreground/60">{label}</span>}
        </>
      )}
    </div>
  );
}

/* ─── 1. System Architecture Overview ─── */
function SystemArchitectureDiagram() {
  const { isPlain } = useViewMode();

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-foreground">System Architecture Overview</h3>
      <p className="text-xs text-muted-foreground">
        {isPlain
          ? "How the main system components connect — from data sources through governance layers to federation outputs."
          : "Layered architecture: ingestion → governance orchestration → append-only evidence backbone → federation & disclosure."}
      </p>

      {/* Layer diagram */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4 overflow-x-auto">
        {/* Layer 1: Sources */}
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest">LAYER 1 — DATA SOURCES</p>
          <div className="flex flex-wrap items-center gap-3">
            <DiagramNode icon={Database} label="Registry Systems" sublabel="National ID, Land, Tax" color="blue" />
            <DiagramNode icon={Server} label="Legacy Databases" sublabel="CSV, XML, SOAP" color="blue" />
            <DiagramNode icon={Globe} label="External APIs" sublabel="UN, World Bank" color="blue" />
          </div>
        </div>

        <FlowArrow direction="down" label="Ingest & Normalize" />

        {/* Layer 2: Governance Core */}
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest">LAYER 2 — GOVERNANCE CORE</p>
          <div className="flex flex-wrap items-center gap-3">
            <DiagramNode icon={Shield} label="Access Control" sublabel="RBAC + Classification" color="amber" pulse />
            <FlowArrow label="validate" />
            <DiagramNode icon={FileCheck} label="Evidence Backbone" sublabel="Append-Only Log" color="accent" pulse />
            <FlowArrow label="hash" />
            <DiagramNode icon={Lock} label="Integrity Engine" sublabel="SHA-256 Chain" color="accent" />
          </div>
        </div>

        <FlowArrow direction="down" label="Govern & Certify" />

        {/* Layer 3: Federation */}
        <div className="space-y-2">
          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-widest">LAYER 3 — FEDERATION & DISCLOSURE</p>
          <div className="flex flex-wrap items-center gap-3">
            <DiagramNode icon={Network} label="Federation Bus" sublabel="Interop APIs" color="emerald" pulse />
            <FlowArrow label="distribute" />
            <DiagramNode icon={Eye} label="Public Disclosure" sublabel="Transparency Portal" color="emerald" />
            <FlowArrow label="audit" />
            <DiagramNode icon={Cpu} label="Assurance Layer" sublabel="Independent Audit" color="purple" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── 2. Data Flow Diagram ─── */
function DataFlowDiagram() {
  const { isPlain } = useViewMode();
  const [expanded, setExpanded] = useState(false);

  const steps = [
    { icon: Database, label: "Source System", detail: "Raw records from national registries, municipal databases, or partner APIs.", color: "blue", status: "active" as const },
    { icon: Shield, label: "Boundary Control", detail: "Data minimization, pseudonymization, and classification tagging at ingress.", color: "amber", status: "active" as const },
    { icon: FileCheck, label: "Custody Registration", detail: "Append-only event logged with timestamp, authority scope, and SHA-256 hash.", color: "accent", status: "active" as const },
    { icon: Lock, label: "Retention & Hold", detail: "Retention schedule applied. Legal holds override disposal. Court-survivable chain maintained.", color: "rose", status: "active" as const },
    { icon: Eye, label: "Authorized Disclosure", detail: "RBAC-gated access with audit trail. Each disclosure event is itself a governed record.", color: "emerald", status: "active" as const },
    { icon: Network, label: "Federation Sync", detail: "Cross-jurisdiction sharing via canonical schemas, versioned APIs, and conformance tests.", color: "purple", status: "planned" as const },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-foreground">Data Flow Pipeline</h3>
      <p className="text-xs text-muted-foreground">
        {isPlain
          ? "How a single record moves from its source through governance controls to authorized disclosure."
          : "End-to-end data flow: ingestion → boundary control → custody registration → retention → disclosure → federation."}
      </p>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="space-y-0">
          {steps.slice(0, expanded ? steps.length : 4).map((step, i) => (
            <div key={step.label}>
              <div className="flex items-start gap-4 group">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                    step.status === "active" ? "border-accent bg-accent/10" : "border-muted-foreground/30 bg-muted/30"
                  )}>
                    <step.icon className={cn("h-4 w-4", step.status === "active" ? "text-accent" : "text-muted-foreground/50")} />
                  </div>
                  {i < (expanded ? steps.length - 1 : 3) && (
                    <div className="w-px h-8 bg-border" />
                  )}
                </div>

                <div className="pt-1.5 pb-4 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">{step.label}</span>
                    {step.status === "active" ? (
                      <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 text-amber-500" />
                    )}
                    <span className={cn("text-[9px] font-mono px-1.5 py-0.5 rounded",
                      step.status === "active" ? "bg-emerald-500/15 text-emerald-600" : "bg-amber-500/15 text-amber-600"
                    )}>
                      {step.status === "active" ? "OPERATIONAL" : "PLANNED"}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{step.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors mt-2 font-medium"
        >
          {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          {expanded ? "Show less" : `Show ${steps.length - 4} more stages`}
        </button>
      </div>
    </div>
  );
}

/* ─── 3. Six Pillars Diagram ─── */
function PillarsDiagram() {
  const { isPlain } = useViewMode();
  const [activePillar, setActivePillar] = useState<number | null>(null);

  const pillars = [
    { icon: Layers, label: "Infrastructure", sublabel: "DPI Registry Layer", detail: "Core registry infrastructure providing the foundational data layer for all governance operations.", color: "blue" },
    { icon: FileCheck, label: "Evidence", sublabel: "Append-Only Backbone", detail: "Immutable, append-only event log ensuring every governance action is permanently recorded.", color: "accent" },
    { icon: Eye, label: "Verification", sublabel: "Audit Reconstruction", detail: "Complete audit trail reconstruction capability for any record at any point in time.", color: "emerald" },
    { icon: Shield, label: "Standards", sublabel: "Policy & Certification", detail: "ISO 23081, ISO/IEC 27701, and OECD DPI principles compliance framework.", color: "amber" },
    { icon: Network, label: "Federation", sublabel: "Interoperable Trust", detail: "Cross-jurisdiction data sharing via canonical schemas and versioned conformance APIs.", color: "purple" },
    { icon: Lock, label: "Governance", sublabel: "Anti-Capture Controls", detail: "Structural safeguards preventing institutional capture, vendor lock-in, and policy drift.", color: "rose" },
  ];

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-foreground">Six Framework Pillars</h3>
      <p className="text-xs text-muted-foreground">
        {isPlain
          ? "The six foundational pillars that make up the GRGF architecture. Click any pillar for details."
          : "Structural decomposition of the GRGF into six orthogonal capability domains. Each pillar is independently auditable."}
      </p>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {pillars.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActivePillar(activePillar === i ? null : i)}
              className={cn(
                "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 text-center cursor-pointer",
                activePillar === i
                  ? "border-accent bg-accent/10 scale-105 shadow-md"
                  : "border-border hover:border-accent/30 hover:bg-accent/5"
              )}
            >
              <p.icon className={cn("h-6 w-6", activePillar === i ? "text-accent" : "text-muted-foreground")} />
              <span className="text-xs font-semibold text-foreground">{p.label}</span>
              <span className="text-[10px] text-muted-foreground leading-tight">{p.sublabel}</span>
            </button>
          ))}
        </div>

        {activePillar !== null && (
          <div className="mt-4 p-4 bg-accent/5 border border-accent/20 rounded-lg animate-fade-in">
            <div className="flex items-center gap-2 mb-2">
              {(() => { const P = pillars[activePillar]; return <P.icon className="h-4 w-4 text-accent" />; })()}
              <span className="text-sm font-semibold text-foreground">{pillars[activePillar].label}</span>
              <span className="text-[10px] font-mono text-accent">{pillars[activePillar].sublabel}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{pillars[activePillar].detail}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── 4. STRIDE Threat Model Visual ─── */
function ThreatModelDiagram() {
  const { isPlain } = useViewMode();

  const threats = [
    { letter: "S", name: "Spoofing", mitigation: "Multi-factor authentication, certificate-based identity", severity: "high" },
    { letter: "T", name: "Tampering", mitigation: "Append-only logs, SHA-256 integrity chains", severity: "critical" },
    { letter: "R", name: "Repudiation", mitigation: "Non-repudiable audit trails, timestamped events", severity: "high" },
    { letter: "I", name: "Info Disclosure", mitigation: "Classification-based access, data minimization", severity: "medium" },
    { letter: "D", name: "Denial of Service", mitigation: "Rate limiting, geo-distributed resilience", severity: "medium" },
    { letter: "E", name: "Elevation", mitigation: "RBAC, principle of least privilege, anti-capture", severity: "high" },
  ];

  const severityColors: Record<string, string> = {
    critical: "bg-rose-500/15 text-rose-600 border-rose-500/30",
    high: "bg-amber-500/15 text-amber-600 border-amber-500/30",
    medium: "bg-blue-500/15 text-blue-600 border-blue-500/30",
  };

  return (
    <div className="space-y-4">
      <h3 className="font-serif text-lg font-semibold text-foreground">STRIDE Threat Model</h3>
      <p className="text-xs text-muted-foreground">
        {isPlain
          ? "The six categories of threats analyzed and mitigated within the framework."
          : "STRIDE-based threat decomposition with mapped mitigations and residual risk classification."}
      </p>

      <div className="bg-card border border-border rounded-lg p-6">
        <div className="grid gap-2">
          {threats.map((t) => (
            <div key={t.letter} className="flex items-center gap-3 p-3 rounded border border-border hover:border-accent/30 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
                <span className="text-lg font-bold font-mono text-accent">{t.letter}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-semibold text-foreground">{t.name}</span>
                  <span className={cn("text-[9px] font-mono px-1.5 py-0.5 rounded border", severityColors[t.severity])}>
                    {t.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{t.mitigation}</p>
              </div>
              <Zap className="h-4 w-4 text-emerald-500 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Export all diagrams ─── */
export function InteractiveDiagrams() {
  return (
    <div className="space-y-10">
      <FadeIn>
        <div className="space-y-2">
          <p className="text-overline font-mono text-accent tracking-widest">INTERACTIVE DIAGRAMS</p>
          <h2 className="font-serif text-2xl font-bold text-foreground">Architecture & Data Flow Visualizations</h2>
          <p className="text-xs text-muted-foreground max-w-2xl">
            Interactive visual representations of the GRGF system architecture, data flows, and security model. Click elements to explore details.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <SystemArchitectureDiagram />
      </FadeIn>

      <FadeIn delay={200}>
        <DataFlowDiagram />
      </FadeIn>

      <FadeIn delay={300}>
        <PillarsDiagram />
      </FadeIn>

      <FadeIn delay={400}>
        <ThreatModelDiagram />
      </FadeIn>
    </div>
  );
}
