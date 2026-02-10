import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Search, Scale, Eye, CheckCircle, Clock, FileText } from "lucide-react";

const phases = [
  {
    phase: "Phase 1",
    title: "Architecture Review",
    timeline: "4–6 Weeks",
    icon: Search,
    objective: "Independent assessment of the six-layer technical architecture, data flow integrity, and system design against sovereign-grade infrastructure requirements.",
    scope: [
      "Event capture and normalization layer validation",
      "Policy decision engine determinism verification",
      "Evidence backbone integrity assessment",
      "Cryptographic anchoring standards review",
      "Verification API security evaluation",
      "Federation protocol architecture analysis",
    ],
    deliverable: "Architecture Conformance Report with findings, risk assessment, and remediation recommendations.",
  },
  {
    phase: "Phase 2",
    title: "Security Penetration Test",
    timeline: "3–4 Weeks",
    icon: Shield,
    objective: "Controlled adversarial testing of the framework's security controls, including insider threat scenarios, key management, and tamper resistance.",
    scope: [
      "External attack surface assessment",
      "Insider threat scenario testing",
      "Key management and custody evaluation",
      "Hash-chain integrity under adversarial conditions",
      "Role separation enforcement testing",
      "Incident response protocol validation",
    ],
    deliverable: "Security Assessment Report with vulnerability classification, exploitation evidence, and remediation priorities.",
  },
  {
    phase: "Phase 3",
    title: "Policy Logic Audit",
    timeline: "3–4 Weeks",
    icon: Scale,
    objective: "Independent verification that governance rules are correctly translated from legal authority into deterministic policy schemas with no unintended behavior.",
    scope: [
      "Policy encoding correctness verification",
      "Deterministic denial logic testing",
      "Edge case and boundary condition analysis",
      "Policy version control and change management review",
      "Machine-readable and human-readable output consistency",
      "Anti-capture clause enforcement verification",
    ],
    deliverable: "Policy Logic Conformance Report with test results, edge case findings, and encoding quality assessment.",
  },
  {
    phase: "Phase 4",
    title: "Governance Ethics Review",
    timeline: "2–3 Weeks",
    icon: Eye,
    objective: "Assessment of governance risk controls, political neutrality safeguards, human oversight mechanisms, and ethical positioning against international governance standards.",
    scope: [
      "Anti-capture clause structural enforcement (AC-01 through AC-05)",
      "Political neutrality safeguard evaluation",
      "Human oversight model assessment",
      "Whistleblower interaction boundary review",
      "Federation ethics constraints validation",
      "Misuse risk mitigation effectiveness",
    ],
    deliverable: "Governance Ethics Assessment Report with institutional maturity rating and sovereignty preservation evaluation.",
  },
];

const ValidationPathway = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Independent Validation Pathway"
      subtitle="Four-phase independent review roadmap for sovereign-grade infrastructure evaluation prior to national deployment."
    />

    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          GRGF is prepared for third-party audit prior to sovereign deployment. Independent validation is a prerequisite — not an afterthought.
        </p>
      </div>

      {/* Timeline Overview */}
      <div className="flex flex-wrap items-center gap-2 justify-center mb-10">
        {phases.map((p, i, arr) => (
          <div key={p.phase} className="flex items-center gap-2">
            <div className="px-4 py-3 border border-border rounded-sm bg-card text-center min-w-[160px]">
              <p className="text-[10px] font-mono text-accent/60 mb-1">{p.phase}</p>
              <p className="text-xs font-medium text-foreground">{p.title}</p>
              <p className="text-[10px] font-mono text-muted-foreground/50 mt-1 flex items-center justify-center gap-1">
                <Clock className="h-3 w-3" /> {p.timeline}
              </p>
            </div>
            {i < arr.length - 1 && <span className="text-accent text-xs">→</span>}
          </div>
        ))}
      </div>
    </Section>

    {/* Detailed Phases */}
    {phases.map((p) => (
      <Section key={p.phase} title={`${p.phase} — ${p.title}`} className="border-t border-border">
        <div className="governance-card">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
              <p.icon className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-muted-foreground/60 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> {p.timeline}
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.objective}</p>

              <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-2">SCOPE</h4>
              <ul className="space-y-1.5 mb-4">
                {p.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>

              <h4 className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">DELIVERABLE</h4>
              <p className="text-xs text-foreground font-medium">{p.deliverable}</p>
            </div>
          </div>
        </div>
      </Section>
    ))}

    {/* Post-Validation */}
    <Section title="Post-Validation Decision Framework" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          Upon completion of all four validation phases, the following decision framework applies:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { decision: "Proceed to Pilot", condition: "All four phases pass with no critical findings." },
            { decision: "Remediate & Re-Test", condition: "Critical findings identified but remediable within defined timeline." },
            { decision: "Defer Deployment", condition: "Fundamental architectural or governance concerns requiring structural revision." },
          ].map(({ decision, condition }) => (
            <div key={decision} className="bg-card border border-border rounded-sm p-3">
              <h4 className="font-serif text-xs font-semibold mb-1">{decision}</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">{condition}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default ValidationPathway;
