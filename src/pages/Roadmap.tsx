import { PageHeader, Section } from "@/components/PageComponents";
import { ArrowRight } from "lucide-react";
import { phases } from "@/components/roadmap/roadmapData";
import PhaseCard from "@/components/roadmap/PhaseCard";
import CredibilityProgression from "@/components/roadmap/CredibilityProgression";

const Roadmap = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="12-Month Institutional Ascent Roadmap"
      subtitle="A structured, evidence-driven pathway transforming GRGF from conceptual framework to globally credible pre-standard governance infrastructure."
    />

    {/* Overview */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          This roadmap reflects real-world governmental and multilateral adoption behaviour,
          not startup acceleration logic. Each phase produces measurable deliverables subject
          to independent verification. No phase proceeds without validated completion of its
          predecessor. The strategic reasoning draws on lessons from internet governance evolution,
          international standards formation, and public-sector trust framework adoption.
        </p>
      </div>

      {/* Visual Timeline Bar */}
      <div className="hidden sm:flex items-center gap-0 mb-8">
        {phases.map((p, i) => (
          <div key={p.id} className="flex items-center flex-1">
            <div className={`flex-1 rounded-sm p-4 border ${p.status === "Active" ? "bg-accent/10 border-accent" : "bg-card border-border"}`}>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-[10px] font-mono font-bold ${p.status === "Active" ? "text-accent" : "text-muted-foreground"}`}>
                  PHASE {p.id}
                </span>
                {p.status === "Active" && (
                  <span className="px-1.5 py-0.5 bg-accent/20 text-accent text-[9px] font-mono rounded-sm">ACTIVE</span>
                )}
              </div>
              <p className="text-xs font-serif font-semibold">{p.title}</p>
              <p className="text-[10px] text-muted-foreground font-mono mt-1">{p.months}</p>
              <div className="flex items-center gap-1 mt-2">
                <div className="flex-1 bg-muted/30 rounded-full h-1">
                  <div
                    className="bg-accent h-1 rounded-full"
                    style={{ width: `${Math.round((p.milestones.filter(m => m.status === "done").length / p.milestones.length) * 100)}%` }}
                  />
                </div>
                <span className="text-[8px] font-mono text-muted-foreground">
                  {p.credibilityScore.end}
                </span>
              </div>
            </div>
            {i < phases.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground/30 shrink-0 mx-1" />}
          </div>
        ))}
      </div>
    </Section>

    {/* Phase Details */}
    <Section>
      {phases.map((phase) => (
        <PhaseCard key={phase.id} phase={phase} />
      ))}
    </Section>

    {/* Credibility & Analytics */}
    <Section title="Credibility Progression & Strategic Analysis" className="border-t border-border">
      <CredibilityProgression />
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        This roadmap reflects institutional governance adoption methodology and is designed for presentation to governments and international organizations.
      </p>
    </Section>
  </div>
);

export default Roadmap;
