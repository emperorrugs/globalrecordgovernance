import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { useState } from "react";

const stages = [
  {
    stage: 0,
    title: "Awareness",
    plain: "The country learns about GRGF and begins exploring how it works.",
    tech: "Initial stakeholder engagement. Assessment of existing governance infrastructure, legal frameworks, and institutional readiness.",
    keeps: "Full sovereignty. No changes to existing systems.",
    deploys: "Information materials, stakeholder briefings",
    time: "1–3 months",
    depth: "Informational only",
  },
  {
    stage: 1,
    title: "Pilot",
    plain: "A small trial in one ministry or department — to see how records get created and sealed.",
    tech: "Scoped pilot deployment within a single institutional domain. Record creation, sealing, and verification workflows tested in controlled environment.",
    keeps: "All existing systems. Pilot runs alongside, not instead of.",
    deploys: "Archive instance, basic governance rules, verification tools",
    time: "3–6 months",
    depth: "Single department",
  },
  {
    stage: 2,
    title: "Institutional",
    plain: "Multiple departments start using GRGF. Governance rules are adapted to local laws.",
    tech: "Multi-departmental deployment with localized governance protocols. Integration with existing national record systems. Stewardship authority designated.",
    keeps: "Existing record systems. GRGF supplements, doesn't replace.",
    deploys: "Full archive, GOS rules, certification programme",
    time: "6–18 months",
    depth: "Cross-departmental",
  },
  {
    stage: 3,
    title: "National",
    plain: "GRGF becomes a standard part of national governance. All key institutions use it.",
    tech: "National-scale deployment with full governance operating system. Cross-institutional record integrity. Federation readiness achieved.",
    keeps: "Sovereign control. All data stays in-country.",
    deploys: "Complete GRGF infrastructure, academy, audit tools",
    time: "18–36 months",
    depth: "National infrastructure",
  },
  {
    stage: 4,
    title: "Federated",
    plain: "The country joins the global GRGF network, enabling cross-border record verification.",
    tech: "Federation-tier integration enabling cross-jurisdictional verification while maintaining sovereign data boundaries. Interoperability protocols activated.",
    keeps: "Full sovereignty. Data never leaves jurisdiction.",
    deploys: "Federation protocols, cross-border verification layer",
    time: "36+ months",
    depth: "International interoperability",
  },
];

const Countries = () => {
  const { isPlain } = useViewMode();
  const [activeStage, setActiveStage] = useState(0);
  const s = stages[activeStage];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Country Deployment"
        subtitle={isPlain
          ? "How any country can adopt GRGF — step by step, at their own pace, keeping full control."
          : "Sovereign deployment model with progressive adoption stages adapted to each jurisdiction's digital maturity."
        }
      />

      <Section>
        {/* Stage Slider */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {stages.map((st) => (
              <button
                key={st.stage}
                onClick={() => setActiveStage(st.stage)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-sm transition-colors ${
                  activeStage === st.stage
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="text-lg font-semibold">{st.stage}</span>
                <span className="text-[10px] font-mono uppercase tracking-wider hidden sm:block">{st.title}</span>
              </button>
            ))}
          </div>
          <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-accent transition-all duration-300"
              style={{ width: `${(activeStage / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Stage Detail */}
        <div className="governance-card">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
              {s.stage}
            </span>
            <h3 className="font-serif text-xl font-semibold">{s.title}</h3>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            {isPlain ? s.plain : s.tech}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-background border border-border rounded-sm p-4">
              <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">What GRGF Deploys</p>
              <p className="text-sm text-foreground">{s.deploys}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-4">
              <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">What Country Keeps</p>
              <p className="text-sm text-foreground">{s.keeps}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-4">
              <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">Time to Deploy</p>
              <p className="text-sm text-foreground">{s.time}</p>
            </div>
            <div className="bg-background border border-border rounded-sm p-4">
              <p className="text-[10px] font-mono text-accent uppercase tracking-wider mb-1">Integration Depth</p>
              <p className="text-sm text-foreground">{s.depth}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* No Fear */}
      <Section className="border-t border-border bg-card/30">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-serif text-lg font-semibold mb-3">No Fear. No Replacement.</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {isPlain
              ? "GRGF doesn't replace any existing system. Countries keep everything they have. GRGF adds a trust layer on top — and can be reversed at any time."
              : "GRGF operates as supplementary infrastructure. Sovereign exit is guaranteed at any stage without penalty, lock-in, or loss of previously sealed records."}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Countries;
