import { PageHeader, Section } from "@/components/PageComponents";
import { useState } from "react";
import { Shield, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Is this centralized control?",
    concern: "Deploying a unified governance framework may concentrate power in a single entity or technology provider.",
    safeguard: "GRGF enforces structural separation between governance rule encoding, record custody, and verification authority. Anti-Capture Clauses AC-01 through AC-05 formally prevent any single entity from controlling the framework.",
    evidence: "No single political entity controls governance rule encoding. Record custody is structurally separated from political authority. Withdrawal is permitted at any time without data lock-in.",
    mitigation: "Federation model ensures sovereign nodes retain independent governance authority. Multi-stakeholder validation required for all policy changes.",
  },
  {
    id: 2,
    question: "Who controls policy encoding?",
    concern: "Policy encoding authority could be captured by technology vendors or political actors.",
    safeguard: "Dual review (legal + technical) required for all policy encodings. Version-controlled policy schemas with mandatory change justification. No vendor participates in governance decisions (AC-02).",
    evidence: "Policy encoding follows formal validation process with test environment verification before production deployment. Periodic review cycles verify continued legal alignment.",
    mitigation: "Independent oversight triggers activate automatically if anomalous policy engine behavior is detected. Policy changes require multi-stakeholder authorization.",
  },
  {
    id: 3,
    question: "Can it be politically misused?",
    concern: "The framework could be used to selectively expose or suppress governance records for political advantage.",
    safeguard: "Append-only storage prevents selective record deletion. Proof-of-absence capability exposes suppression attempts. All access events are logged and sealed as governance records.",
    evidence: "GRE-01 (Misuse Risk Mitigation) and GRE-02 (Political Neutrality Safeguards) formally address this risk with structural controls rather than policy commitments.",
    mitigation: "No political authority may unilaterally alter sealed governance records (AC-03). Anonymous reporting channel for integrity concerns with independent review authority.",
  },
  {
    id: 4,
    question: "What prevents override authority?",
    concern: "Administrative overrides could bypass governance controls in practice.",
    safeguard: "No administrative override exists outside pre-defined governance protocols (AC-04). Override requests are documented and sealed — never silently executed.",
    evidence: "No-backdoor policy: no emergency bypass or privileged access pathway exists. Every denied action produces machine-readable and human-readable justification.",
    mitigation: "Deterministic denial logic ensures all rejections are transparent, auditable, and independently verifiable. Hash-chain breaks trigger automatic audit notification.",
  },
  {
    id: 5,
    question: "Has it undergone third-party audit?",
    concern: "No independent security or governance audit has been completed.",
    safeguard: "GRGF is explicitly designed for third-party audit. The Independent Validation Pathway defines four phases: Architecture Review, Security Penetration Test, Policy Logic Audit, and Governance Ethics Review.",
    evidence: "Current status: pre-audit. Third-party audit is a prerequisite for sovereign deployment, not a post-deployment activity.",
    mitigation: "Pilot deployment includes mandatory independent audit checkpoint before scaling decision. Architecture is built to be audited, not to resist audit.",
  },
  {
    id: 6,
    question: "What if ROI underperforms?",
    concern: "Projected fiscal benefits may not materialize in practice.",
    safeguard: "All ROI modeling uses conservative assumptions with explicit sensitivity analysis (Low/Medium/High scenarios). Even 0.3% integrity improvement offsets full deployment cost.",
    evidence: "Results remain positive under -30% fraud detection assumption and +50% deployment cost scenarios simultaneously. NPV analysis uses 5% social discount rate.",
    mitigation: "90-day pilot produces measurable KPIs before any scaling commitment. Treasury evaluation gate required before national deployment authorization.",
  },
  {
    id: 7,
    question: "How does it integrate with ERP systems?",
    concern: "Integration complexity could exceed institutional technical capacity.",
    safeguard: "Documented RESTful APIs, standardized JSON event schemas, and deterministic policy engine interfaces. GRGF integrates as a governance layer — it does not replace existing systems.",
    evidence: "System architecture defines six integration layers with clear API boundaries. Connector minimization standard reduces integration surface.",
    mitigation: "Pilot deployment scopes integration to a single ministry and 3–5 decision types. Integration testing phase included before production deployment.",
  },
  {
    id: 8,
    question: "Does it increase bureaucracy?",
    concern: "Adding a governance layer may slow institutional decision-making.",
    safeguard: "GRGF records and verifies decisions — it does not add approval steps. Policy enforcement is deterministic and operates at machine speed (<500ms sealing latency).",
    evidence: "Audit cycle reduction of 20–40% through pre-verified compliance evidence. Eliminates manual reconciliation currently required for audit.",
    mitigation: "Process mapping during pilot validates that operational workflows are not delayed. GRGF operates alongside existing processes, not instead of them.",
  },
  {
    id: 9,
    question: "What is the smallest viable pilot?",
    concern: "Entry cost and scope may be too large for initial institutional evaluation.",
    safeguard: "Minimum viable pilot: single public institution, 3–5 decision types, 90 days, USD 1–2 million. Non-invasive, read-only engagement producing a cryptographically sealed decision ledger.",
    evidence: "Pilot produces institutional readiness validation report and measurable KPIs without requiring infrastructure replacement or organizational restructuring.",
    mitigation: "Pilot is designed as a reversible evaluation — not a deployment commitment. Go/No-Go scaling decision follows Treasury evaluation gate.",
  },
  {
    id: 10,
    question: "Can the system be reversed or removed?",
    concern: "Adoption may create dependency that is difficult to exit.",
    safeguard: "Modular architecture with exportable records, no vendor lock-in, and documented decommissioning process. Reversible Adoption is a foundational ethical principle.",
    evidence: "All records are stored in standardized formats. No proprietary encoding or data formats are used. Export capability is an architectural requirement.",
    mitigation: "Controlled decommissioning process ensures institutional records remain accessible and verifiable after framework removal.",
  },
  {
    id: 11,
    question: "Does it create vendor lock-in?",
    concern: "Dependency on a single technology provider could create strategic risk.",
    safeguard: "No vendor, technology provider, or service operator may participate in governance decisions (AC-02). Standards-based architecture uses open protocols.",
    evidence: "Standardized event schemas, RESTful APIs, and documented integration patterns enable multi-vendor implementation. No proprietary technology dependencies.",
    mitigation: "Federation model supports multiple independent node operators. Institutional authority over governance rules is retained by each sovereign participant.",
  },
  {
    id: 12,
    question: "Who governs federation rules?",
    concern: "Cross-border federation may impose governance rules on participating nations.",
    safeguard: "No federation participant may impose governance rules on another sovereign node (AC-05). Voluntary participation with withdrawal permitted at any time.",
    evidence: "GRE-07 (Federation Ethics Boundaries) ensures national policy encoding authority is retained by each sovereign node.",
    mitigation: "Federation ethics board with multi-national representation. Cross-border data sharing requires explicit governance authorization.",
  },
  {
    id: 13,
    question: "How is privacy protected?",
    concern: "Governance records may expose personal or sensitive information.",
    safeguard: "GRGF does not inherently store personal data — it stores structured governance events. Privacy-by-design: public verification exposes no personal data.",
    evidence: "Data minimization principle: only governance-relevant metadata is captured. Access control structurally separates content access from verification access.",
    mitigation: "Jurisdictional hosting preserves data residency requirements. Cross-border safeguards maintain federation data sovereignty.",
  },
  {
    id: 14,
    question: "What prevents insider abuse?",
    concern: "Privileged operators could exploit access for unauthorized purposes.",
    safeguard: "No single operator can access, modify, or suppress sealed records. Dual-authority requirement for critical operations. All administrative actions logged as governance records.",
    evidence: "Role separation enforcement ensures no single actor can bypass governance controls. Privileged access automatically produces sealed audit evidence.",
    mitigation: "Separation between infrastructure operators and governance custodians. Anomalous access patterns trigger threshold-based alerts and independent review.",
  },
  {
    id: 15,
    question: "Can it be hacked?",
    concern: "The system may be vulnerable to cyberattack.",
    safeguard: "Zero Trust architecture: no component trusts another by default. Append-only evidence backbone with cryptographic sealing. Hash-chain integrity makes tampering detectable.",
    evidence: "Six-vector threat model with documented mitigations. Key custody model with separation between signing, sealing, and verification keys.",
    mitigation: "Incident response framework with five-stage protocol. Vulnerability disclosure program with defined response timelines. Independent security audit is a pre-deployment requirement.",
  },
  {
    id: 16,
    question: "How is incident response handled?",
    concern: "Security incidents could compromise governance record integrity.",
    safeguard: "Five-stage incident response: Detection → Isolation → Audit Log Extraction → Public Transparency Protocol → Recovery & Reporting.",
    evidence: "Automated integrity monitoring detects hash-chain breaks and anomalous policy engine behavior. Affected components are isolated from the evidence backbone immediately.",
    mitigation: "Full incident report is sealed as a governance record. Affected stakeholders notified according to pre-defined disclosure rules.",
  },
  {
    id: 17,
    question: "Who owns the data?",
    concern: "Data ownership may be ambiguous or controlled by the framework operator.",
    safeguard: "Data ownership is retained by the deploying institution. GRGF provides custody infrastructure — not ownership claims. Governance rules define data retention.",
    evidence: "Retention governance is defined under institutional governance rules, not operator discretion. Exportable records ensure institutional data portability.",
    mitigation: "Controlled decommissioning process ensures complete data return. No proprietary data formats restrict institutional access.",
  },
  {
    id: 18,
    question: "Is this legally compatible with sovereignty?",
    concern: "The framework may conflict with existing national legal frameworks.",
    safeguard: "Jurisdiction-neutral design. Legal compatibility assessment is a pre-deployment requirement. GRGF strengthens existing governance systems — it does not replace them.",
    evidence: "Readiness assessment includes legal framework compatibility review, data residency requirements, and evidentiary admissibility evaluation.",
    mitigation: "National policy encoding authority is retained by each sovereign participant. Federation preserves legal autonomy.",
  },
  {
    id: 19,
    question: "What are the current limitations?",
    concern: "The framework may be presented as more mature than it actually is.",
    safeguard: "Transparent disclosure: no national deployment yet, no completed third-party audit, ROI modeling is scenario-based, pilot required for validation.",
    evidence: "Current status: Reference Governance Framework v1.0. Operational status limited to demonstration, training, and institutional policy alignment.",
    mitigation: "Independent validation pathway defined. Pilot required before national deployment. All fiscal claims are explicitly labeled as modeled scenarios.",
  },
  {
    id: 20,
    question: "What would cause deployment to fail?",
    concern: "Institutional, technical, or political factors could prevent successful deployment.",
    safeguard: "Risk register identifies five primary deployment risks: institutional resistance, policy misencoding, overcomplex rollout, political misunderstanding, and security misconfiguration.",
    evidence: "Each risk has documented likelihood, impact, mitigation strategy, and residual risk assessment.",
    mitigation: "Phased deployment model reduces exposure. Pilot produces measurable evidence before scaling. Treasury evaluation gate prevents premature national commitment.",
  },
];

const CriticalQuestions = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Critical Questions & Direct Responses"
        subtitle="Structured responses to the 20 hardest institutional objections. Each answer follows: Concern → Structural Safeguard → Evidence → Mitigation Strategy."
      />

      <Section>
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <p className="text-sm text-foreground leading-relaxed">
            These responses address the most challenging institutional objections raised during sovereign-grade infrastructure evaluation. Each response is structured to support formal review by CIOs, Treasury officials, auditors, and multilateral reviewers.
          </p>
        </div>

        <div className="space-y-2">
          {questions.map((q) => {
            const isOpen = expanded === q.id;
            return (
              <div key={q.id} className="governance-card">
                <button
                  onClick={() => setExpanded(isOpen ? null : q.id)}
                  className="w-full flex items-start gap-3 text-left"
                >
                  <span className="hash-text shrink-0 mt-0.5 w-8">{String(q.id).padStart(2, "0")}</span>
                  <h3 className="font-serif text-sm font-semibold text-foreground flex-1">{q.question}</h3>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  ) : (
                    <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                </button>

                {isOpen && (
                  <div className="mt-4 ml-11 space-y-3 animate-fade-in">
                    {[
                      { label: "CONCERN", value: q.concern, color: "text-destructive/60" },
                      { label: "STRUCTURAL SAFEGUARD", value: q.safeguard, color: "text-accent/70" },
                      { label: "EVIDENCE", value: q.evidence, color: "text-muted-foreground/60" },
                      { label: "MITIGATION STRATEGY", value: q.mitigation, color: "text-accent/70" },
                    ].map((field) => (
                      <div key={field.label}>
                        <p className={`text-[10px] font-mono ${field.color} uppercase tracking-wider mb-1`}>{field.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{field.value}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
};

export default CriticalQuestions;
