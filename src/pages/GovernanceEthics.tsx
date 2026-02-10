import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, AlertTriangle, Users, Eye, Scale, Lock, FileText, CheckCircle, Globe } from "lucide-react";

const riskFramework = [
  {
    id: "GRE-01",
    title: "Misuse Risk Mitigation",
    desc: "Structural safeguards preventing the framework from being used to suppress, manipulate, or selectively expose governance records for political or institutional advantage.",
    controls: [
      "Append-only storage prevents selective record deletion",
      "Proof-of-absence capability exposes suppression attempts",
      "Deterministic policy engine rejects unauthorized modifications",
      "All access events logged and sealed as governance records",
    ],
  },
  {
    id: "GRE-02",
    title: "Political Neutrality Safeguards",
    desc: "Structural separation between governance record custody and political authority, ensuring no political actor can influence sealed records.",
    controls: [
      "Record custody structurally separated from political authority",
      "No single political entity controls governance rule encoding",
      "Policy changes require multi-stakeholder validation",
      "Anti-capture clauses (AC-01 through AC-05) formally codified",
    ],
  },
  {
    id: "GRE-03",
    title: "Human Oversight Model",
    desc: "Mandatory human accountability for all governance decisions. GRGF enforces encoded rules but does not make autonomous governance decisions.",
    controls: [
      "Every governance action traceable to identifiable human authority",
      "No AI-based or probabilistic decision-making in governance logic",
      "Human review required for policy encoding and modification",
      "Override requests documented and sealed (never silently executed)",
    ],
  },
  {
    id: "GRE-04",
    title: "Policy Encoding Review Process",
    desc: "Formal validation process ensuring governance rules are correctly translated from legal authority into deterministic policy schemas.",
    controls: [
      "Dual review (legal + technical) for all policy encodings",
      "Version-controlled policy schemas with change justification",
      "Test environment validation before production deployment",
      "Periodic review cycles to verify continued legal alignment",
    ],
  },
  {
    id: "GRE-05",
    title: "Independent Audit Trigger Mechanisms",
    desc: "Pre-defined conditions that automatically trigger independent audit review without requiring administrative authorization.",
    controls: [
      "Hash-chain integrity breaks trigger automatic audit notification",
      "Anomalous policy engine behavior triggers independent review",
      "Threshold-based alerts for unusual access patterns",
      "Periodic mandatory audit cycles independent of operator request",
    ],
  },
  {
    id: "GRE-06",
    title: "Whistleblower Interaction Model",
    desc: "Structured mechanism for reporting governance integrity concerns without exposing reporter identity or compromising record integrity.",
    controls: [
      "Anonymous reporting channel for integrity concerns",
      "Sealed incident records created for all reports",
      "Independent review authority (separate from framework operator)",
      "Reporter protection through structural anonymization",
    ],
  },
  {
    id: "GRE-07",
    title: "Federation Ethics Boundaries",
    desc: "Governance rules for cross-border federation participation ensuring no participating nation's sovereignty is compromised.",
    controls: [
      "Voluntary federation participation — withdrawal permitted at any time",
      "No cross-border data sharing without explicit governance authorization",
      "National policy encoding authority retained by each sovereign node",
      "Federation ethics board with multi-national representation",
    ],
  },
];

const antiCaptureClasses = [
  { id: "AC-01", title: "No single entity may control governance rule encoding and record custody simultaneously" },
  { id: "AC-02", title: "No vendor, technology provider, or service operator may participate in governance decisions" },
  { id: "AC-03", title: "No political authority may unilaterally alter sealed governance records" },
  { id: "AC-04", title: "No administrative override exists outside pre-defined governance protocols" },
  { id: "AC-05", title: "No federation participant may impose governance rules on another sovereign node" },
];

const GovernanceEthics = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Governance Risk & Ethics Framework"
      subtitle="Structural safeguards ensuring political neutrality, human oversight, and ethical governance integrity across all deployment contexts."
    />

    {/* Critical Importance */}
    <Section>
      <div className="bg-destructive/5 border border-destructive/20 rounded-sm px-5 py-4 flex items-start gap-3 mb-8">
        <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-foreground mb-1">Essential for Sovereign-Grade Positioning</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Without a formal governance risk and ethics framework, sovereign-grade infrastructure positioning is incomplete. This document formalizes the structural safeguards that separate deployable infrastructure from conceptual vision.
          </p>
        </div>
      </div>
    </Section>

    {/* Anti-Capture Clauses */}
    <Section title="Anti-Capture Clauses" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Five formal anti-capture clauses ensure no single entity — government, vendor, or operator — can control or subvert the framework's governance integrity.
      </p>
      <div className="space-y-3">
        {antiCaptureClasses.map((ac) => (
          <div key={ac.id} className="governance-card border-l-2 border-l-accent">
            <div className="flex items-start gap-3">
              <span className="hash-text shrink-0 mt-0.5 w-12">{ac.id}</span>
              <p className="text-sm text-foreground leading-relaxed">{ac.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Risk Framework */}
    <Section title="Governance Risk Controls" className="border-t border-border">
      <div className="space-y-6">
        {riskFramework.map((risk) => (
          <div key={risk.id} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold">{risk.id}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-base font-semibold mb-2">{risk.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{risk.desc}</p>
                <ul className="space-y-1.5">
                  {risk.controls.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />{c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Ethical Positioning */}
    <Section title="Ethical Positioning Statement" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-3 font-medium">
          GRGF's governance ethics framework operates on three foundational principles:
        </p>
        <div className="space-y-3">
          {[
            { principle: "Structural Integrity", desc: "Ethics are embedded in architecture — not dependent on operator goodwill or regulatory pressure." },
            { principle: "Human Primacy", desc: "All governance authority derives from identifiable human decision-makers. No autonomous governance is permitted." },
            { principle: "Reversible Adoption", desc: "Institutions can adopt, scale, or withdraw from GRGF without data lock-in or operational dependency." },
          ].map(({ principle, desc }) => (
            <div key={principle}>
              <h4 className="text-xs font-mono text-accent/70 uppercase tracking-wider">{principle}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mt-1">{desc}</p>
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

export default GovernanceEthics;
