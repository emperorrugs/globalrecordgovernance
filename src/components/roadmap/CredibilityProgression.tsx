import { phases, strategicPrinciples, criticalDependencies } from "./roadmapData";
import { Shield, FileText, Users, Target, TrendingUp, AlertCircle } from "lucide-react";

const CredibilityProgression = () => (
  <div className="space-y-8">
    {/* Credibility Score Progression */}
    <div className="governance-card">
      <h4 className="text-xs font-serif font-semibold text-foreground mb-4">Institutional Credibility Score Progression</h4>
      <div className="space-y-3">
        {phases.map((p) => (
          <div key={p.id} className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-muted-foreground w-20 shrink-0">Phase {p.id}</span>
            <div className="flex-1 bg-muted/20 rounded-full h-3 relative">
              <div
                className="absolute left-0 top-0 h-3 rounded-full bg-accent/30"
                style={{ width: `${p.credibilityScore.end}%` }}
              />
              <div
                className="absolute top-0 h-3 rounded-l-full bg-accent/60"
                style={{ left: `${p.credibilityScore.start}%`, width: `${p.credibilityScore.end - p.credibilityScore.start}%` }}
              />
            </div>
            <span className="text-[10px] font-mono font-bold text-foreground w-12 text-right">
              {p.credibilityScore.end}/100
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Adoption Probability */}
    <div className="governance-card">
      <h4 className="text-xs font-serif font-semibold text-foreground mb-4">Adoption Probability Evolution</h4>
      <div className="flex items-end gap-2 h-32">
        {phases.map((p) => (
          <div key={p.id} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[10px] font-mono font-bold text-accent">{p.adoptionProbability.end}%</span>
            <div className="w-full bg-muted/20 rounded-sm relative" style={{ height: "100%" }}>
              <div
                className="absolute bottom-0 w-full bg-accent/40 rounded-sm transition-all"
                style={{ height: `${p.adoptionProbability.end}%` }}
              />
            </div>
            <span className="text-[9px] font-mono text-muted-foreground">Ph {p.id}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Strategic Principles */}
    <div className="governance-card">
      <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Strategic Principles Applied</h4>
      <p className="text-[11px] text-muted-foreground mb-4">Reasoning based on lessons from historical standards formation:</p>
      <div className="space-y-2">
        {strategicPrinciples.map((p) => (
          <div key={p.title} className="flex gap-3 py-2 px-3 border border-border/50 bg-card/30 rounded-sm">
            <TrendingUp className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-foreground">{p.title}</span>
              <span className="mx-2 text-muted-foreground/30">—</span>
              <span className="text-[11px] text-muted-foreground">{p.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Critical Dependencies */}
    <div className="governance-card border-l-2 border-l-accent">
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle className="h-4 w-4 text-accent" />
        <h4 className="text-xs font-serif font-semibold text-foreground">Critical Success Dependencies</h4>
      </div>
      <ul className="space-y-2">
        {criticalDependencies.map((d, i) => (
          <li key={i} className="text-[11px] text-muted-foreground leading-relaxed flex gap-2">
            <span className="text-accent font-mono text-[10px] shrink-0">{i + 1}.</span>
            {d}
          </li>
        ))}
      </ul>
    </div>

    {/* Execution Principles */}
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[
        { icon: Shield, title: "Evidence-Driven", desc: "Each phase transition requires independently verifiable evidence of milestone completion." },
        { icon: FileText, title: "Publicly Documented", desc: "All roadmap progress is reported in the Annual Governance Transparency Report." },
        { icon: Users, title: "Multi-Stakeholder", desc: "Roadmap priorities are subject to Advisory Council and Standards Committee review." },
        { icon: Target, title: "Reversible", desc: "Every deployment decision includes documented exit and reversibility procedures." },
      ].map(({ icon: Icon, title, desc }) => (
        <div key={title} className="governance-card">
          <Icon className="h-4 w-4 text-accent mb-2" />
          <h4 className="font-serif text-xs font-semibold mb-1">{title}</h4>
          <p className="text-[10px] text-muted-foreground leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CredibilityProgression;
