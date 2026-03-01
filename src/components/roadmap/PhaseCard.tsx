import { CheckCircle, Clock, Target, ChevronDown, ChevronUp, AlertTriangle } from "lucide-react";
import { useState } from "react";
import type { Phase } from "./roadmapData";

const statusIcon = (s: string) => {
  if (s === "done") return <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />;
  if (s === "in-progress") return <Clock className="h-3.5 w-3.5 text-accent shrink-0 animate-pulse" />;
  return <Target className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />;
};

const statusLabel = (s: string) => {
  if (s === "done") return "COMPLETE";
  if (s === "in-progress") return "IN PROGRESS";
  return "PLANNED";
};

const PhaseCard = ({ phase }: { phase: Phase }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    actions: false,
    artifacts: true,
    stakeholders: false,
    risks: false,
    indicators: false,
  });

  const toggle = (key: string) =>
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));

  const Icon = phase.icon;
  const done = phase.milestones.filter((m) => m.status === "done").length;
  const inProgress = phase.milestones.filter((m) => m.status === "in-progress").length;
  const total = phase.milestones.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="border-t border-border pt-8 pb-4" id={`phase-${phase.id}`}>
      {/* Phase Header */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="governance-card flex-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-accent/10 rounded-sm">
              <Icon className="h-5 w-5 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-wider">
                  Phase {phase.id} — {phase.months}
                </span>
                {phase.status === "Active" && (
                  <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-[9px] font-mono rounded-sm">
                    ACTIVE
                  </span>
                )}
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{phase.title}</h3>
              <p className="text-xs text-muted-foreground">{phase.subtitle}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">{phase.objective}</p>
          <div className="p-3 bg-muted/20 border border-border/50 rounded-sm">
            <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">Institutional Psychology</p>
            <p className="text-xs text-muted-foreground leading-relaxed italic">{phase.institutionalPsychology}</p>
          </div>
        </div>

        {/* Progress & Scores */}
        <div className="sm:w-56 space-y-3">
          <div className="governance-card flex flex-col items-center justify-center">
            <p className="text-2xl font-serif font-bold text-accent">{pct}%</p>
            <p className="text-[10px] font-mono text-muted-foreground mt-1">
              {done}/{total} MILESTONES
            </p>
            <div className="w-full bg-muted/30 rounded-full h-1.5 mt-2">
              <div className="bg-accent h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
            </div>
            {inProgress > 0 && (
              <p className="text-[9px] font-mono text-accent/70 mt-1">{inProgress} in progress</p>
            )}
          </div>
          <div className="governance-card">
            <p className="text-[9px] font-mono text-muted-foreground mb-1">CREDIBILITY SCORE</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">{phase.credibilityScore.start}</span>
              <div className="flex-1 bg-muted/30 rounded-full h-1.5">
                <div
                  className="bg-accent/60 h-1.5 rounded-full"
                  style={{ width: `${phase.credibilityScore.end}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-foreground">{phase.credibilityScore.end}</span>
            </div>
          </div>
          <div className="governance-card">
            <p className="text-[9px] font-mono text-muted-foreground mb-1">ADOPTION PROBABILITY</p>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-muted-foreground">{phase.adoptionProbability.start}%</span>
              <div className="flex-1 bg-muted/30 rounded-full h-1.5">
                <div
                  className="bg-accent/40 h-1.5 rounded-full"
                  style={{ width: `${phase.adoptionProbability.end}%` }}
                />
              </div>
              <span className="text-xs font-mono font-bold text-foreground">{phase.adoptionProbability.end}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones */}
      <div className="space-y-2 mb-6">
        <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Month-by-Month Milestones</h4>
        {phase.milestones.map((m, i) => (
          <div key={i} className="flex items-start gap-3 py-2 px-3 rounded-sm border border-border/50 bg-card/30">
            {statusIcon(m.status)}
            <span className="text-[9px] font-mono text-accent/60 shrink-0 w-6">{m.month}</span>
            <span className={`text-xs leading-relaxed flex-1 ${m.status === "done" ? "text-foreground" : "text-muted-foreground"}`}>
              {m.label}
            </span>
            <span className={`text-[9px] font-mono shrink-0 ${m.status === "done" ? "text-accent" : m.status === "in-progress" ? "text-accent" : "text-muted-foreground/50"}`}>
              {statusLabel(m.status)}
            </span>
          </div>
        ))}
      </div>

      {/* Collapsible Sections */}
      <div className="space-y-3">
        {/* Actions */}
        <CollapsibleSection
          title="Concrete Actions"
          count={phase.actions.length}
          isOpen={expandedSections.actions}
          onToggle={() => toggle("actions")}
        >
          <div className="space-y-3">
            {phase.actions.map((a, i) => (
              <div key={i} className="p-3 border border-border/50 bg-card/30 rounded-sm">
                <h5 className="text-xs font-serif font-semibold text-foreground mb-1">{a.title}</h5>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Artifacts */}
        <CollapsibleSection
          title="Required Artifacts"
          count={phase.artifacts.length}
          isOpen={expandedSections.artifacts}
          onToggle={() => toggle("artifacts")}
        >
          <div className="flex flex-wrap gap-2">
            {phase.artifacts.map((a) => (
              <span key={a.name} className="px-2.5 py-1 bg-muted/30 border border-border rounded-sm text-[10px] font-mono text-muted-foreground">
                {a.name}
              </span>
            ))}
          </div>
        </CollapsibleSection>

        {/* Stakeholders */}
        <CollapsibleSection
          title="Stakeholder Engagement"
          count={phase.stakeholders.length}
          isOpen={expandedSections.stakeholders}
          onToggle={() => toggle("stakeholders")}
        >
          <div className="space-y-2">
            {phase.stakeholders.map((s, i) => (
              <div key={i} className="flex gap-3 py-2 px-3 border border-border/50 bg-card/30 rounded-sm">
                <span className="text-xs font-semibold text-foreground shrink-0 w-40">{s.type}</span>
                <span className="text-[11px] text-muted-foreground">{s.role}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Risks */}
        <CollapsibleSection
          title="Risks & Mitigation"
          count={phase.risks.length}
          isOpen={expandedSections.risks}
          onToggle={() => toggle("risks")}
        >
          <div className="space-y-2">
            {phase.risks.map((r, i) => (
              <div key={i} className="p-3 border border-border/50 bg-card/30 rounded-sm">
                <div className="flex items-start gap-2 mb-1">
                  <AlertTriangle className="h-3 w-3 text-accent/60 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-foreground">{r.risk}</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed ml-5">{r.mitigation}</p>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* Success Indicators */}
        <CollapsibleSection
          title="Measurable Success Indicators"
          count={phase.successIndicators.length}
          isOpen={expandedSections.indicators}
          onToggle={() => toggle("indicators")}
        >
          <div className="space-y-2">
            {phase.successIndicators.map((s, i) => (
              <div key={i} className="flex items-center gap-3 py-2 px-3 border border-border/50 bg-card/30 rounded-sm">
                <span className="text-xs text-muted-foreground flex-1">{s.metric}</span>
                <span className="text-[10px] font-mono font-semibold text-accent">{s.target}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

const CollapsibleSection = ({
  title,
  count,
  isOpen,
  onToggle,
  children,
}: {
  title: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) => (
  <div className="governance-card">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-left">
      <div className="flex items-center gap-2">
        <h4 className="text-xs font-serif font-semibold text-foreground">{title}</h4>
        <span className="text-[9px] font-mono text-muted-foreground bg-muted/30 px-1.5 py-0.5 rounded-sm">{count}</span>
      </div>
      {isOpen ? <ChevronUp className="h-3.5 w-3.5 text-muted-foreground" /> : <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />}
    </button>
    {isOpen && <div className="mt-3">{children}</div>}
  </div>
);

export default PhaseCard;
