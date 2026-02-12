import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Users, Shield, Globe, CheckCircle, Building2, Scale } from "lucide-react";

const scenarios = [
  {
    id: "DS-01",
    title: "Procurement Approval Verification",
    actors: ["Procurement Officer", "Contracting Authority", "Audit Committee", "GRGF Policy Engine"],
    workflow: [
      "Procurement officer initiates contract award action via departmental system",
      "GRGF connector captures event with actor, scope, and legal reference",
      "Policy engine evaluates against encoded procurement rules (threshold, authority, dual sign-off)",
      "Decision recorded: ALLOW or DENY with machine-readable and human-readable justification",
      "Governance record sealed with SHA-256 hash and appended to evidence backbone",
    ],
    record: "Event ID, timestamp, actor identity, action type, legal reference, policy evaluation result, hash seal",
    verification: "Any authorized auditor can independently verify the record chain, confirm policy was correctly applied, and validate that no records were modified post-seal.",
    impact: "Eliminates post-hoc procurement disputes. Creates immutable evidence of process compliance. Reduces audit reconstruction time from weeks to minutes.",
  },
  {
    id: "DS-02",
    title: "Cross-Ministry Policy Authorization",
    actors: ["Policy Originator (Ministry A)", "Reviewing Authority (Ministry B)", "Central Policy Office", "GRGF Policy Engine"],
    workflow: [
      "Ministry A submits policy action requiring cross-ministry authorization",
      "GRGF captures submission event and routes to encoded authorization workflow",
      "Ministry B review action captured with decision and justification",
      "Central Policy Office final authorization recorded",
      "Complete authorization chain sealed as single governance evidence package",
    ],
    record: "Multi-actor authorization chain with timestamps, individual decisions, justifications, and composite hash seal",
    verification: "Full chain of authority visible to any reviewer. Missing approvals detectable via proof-of-absence. No step can be retroactively inserted or removed.",
    impact: "Prevents unauthorized policy changes. Creates verifiable cross-ministry coordination evidence. Supports accountability across institutional boundaries.",
  },
  {
    id: "DS-03",
    title: "Regulatory Compliance Audit Trail",
    actors: ["Regulated Entity", "Regulatory Authority", "Independent Auditor", "GRGF Evidence Backbone"],
    workflow: [
      "Regulated entity actions captured through source system connectors",
      "Each action evaluated against encoded compliance rules",
      "Non-compliance events flagged with specific rule reference and severity",
      "Regulatory authority receives structured compliance report",
      "Independent auditor verifies report integrity against sealed records",
    ],
    record: "Compliance evaluation records, flagged non-compliance events, regulatory notification timestamps",
    verification: "Auditor independently verifies that all events were evaluated, no records suppressed, and compliance determinations match encoded rules.",
    impact: "Transforms compliance from periodic inspection to continuous assurance. Reduces regulatory burden. Creates defensible audit evidence.",
  },
  {
    id: "DS-04",
    title: "Social Benefit Eligibility Validation",
    actors: ["Applicant (via agency)", "Eligibility Officer", "Review Authority", "GRGF Policy Engine"],
    workflow: [
      "Eligibility determination action captured (pseudonymized applicant reference)",
      "Policy engine evaluates against encoded eligibility criteria",
      "Decision recorded with full justification chain",
      "Appeal pathway preserved with original decision evidence",
      "Aggregate statistics available for transparency reporting (no personal data)",
    ],
    record: "Pseudonymized eligibility event, criteria evaluation, decision justification, appeal reference",
    verification: "Decision can be independently verified against the rules in effect at the time of determination. Historical rule changes do not retroactively alter sealed records.",
    impact: "Ensures equitable and transparent benefit determinations. Creates appealable evidence trail. Supports public accountability without exposing personal data.",
  },
  {
    id: "DS-05",
    title: "Cross-Border Institutional Recognition",
    actors: ["Issuing Authority (Country A)", "Verifying Authority (Country B)", "Federation Protocol", "GRGF Verification API"],
    workflow: [
      "Country A issues governance credential (e.g., professional license, regulatory clearance)",
      "Credential recorded and sealed in Country A's national GRGF node",
      "Country B requests verification via federation protocol",
      "GRGF Verification API confirms credential integrity and issuing authority",
      "Country B receives verified credential status without accessing Country A's raw records",
    ],
    record: "Federated verification request, credential hash, issuing authority attestation, verification result",
    verification: "Country B independently verifies credential authenticity without trusting Country A's operator. Federation protocol ensures sovereignty preservation.",
    impact: "Enables cross-border institutional recognition without bilateral treaty negotiation for each credential type. Reduces verification latency from weeks to seconds.",
  },
];

const DeploymentScenarios = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="National Deployment Scenarios"
      subtitle="Structured case studies demonstrating GRGF governance record capabilities across institutional contexts."
    />

    {scenarios.map((s) => (
      <Section key={s.id} title={`${s.id}: ${s.title}`} className="border-t border-border">
        {/* Actors */}
        <div className="mb-4">
          <h4 className="font-serif text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Actors</h4>
          <div className="flex flex-wrap gap-2">
            {s.actors.map(a => (
              <span key={a} className="px-2 py-1 border border-border rounded-sm text-xs font-mono text-foreground bg-card">{a}</span>
            ))}
          </div>
        </div>

        {/* Workflow */}
        <div className="mb-4">
          <h4 className="font-serif text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Workflow</h4>
          <div className="space-y-2">
            {s.workflow.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-sm flex items-center justify-center text-[10px] font-mono font-bold mt-0.5">{i + 1}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Record */}
        <div className="grid gap-4 sm:grid-cols-3 mb-4">
          <div className="governance-card">
            <h4 className="font-serif text-xs font-semibold mb-2">Governance Record</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.record}</p>
          </div>
          <div className="governance-card">
            <h4 className="font-serif text-xs font-semibold mb-2">Verification Logic</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.verification}</p>
          </div>
          <div className="governance-card border-l-2 border-l-accent">
            <h4 className="font-serif text-xs font-semibold mb-2">Public Value Impact</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.impact}</p>
          </div>
        </div>
      </Section>
    ))}
  </div>
);

export default DeploymentScenarios;
