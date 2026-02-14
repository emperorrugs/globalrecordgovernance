import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { FileText, Globe, Building2 } from "lucide-react";

const outreachMessages = [
  {
    target: "Canada Treasury Board Secretariat",
    icon: Building2,
    subject: "GRGF — Governance Integrity Infrastructure: Structured Pilot Evaluation Proposal",
    body: `To the Office of the Chief Information Officer,

I am writing to introduce the Global Record Governance Framework (GRGF) — a deterministic governance infrastructure layer designed to enforce policy compliance and cryptographic record integrity across institutional systems.

GRGF addresses a structural gap in current governance infrastructure: the absence of a deterministic, verifiable mechanism for recording institutional actions, decisions, and omissions. It is not a transparency tool, compliance dashboard, or blockchain experiment. It is a Governance Operating Layer.

Relevance to GC priorities:
· Aligns with GC Digital Standards and Zero Trust Architecture Strategy
· Supports Treasury Board Policy on Service and Digital
· Integrates non-invasively with existing GC Enterprise Architecture
· Pilot-ready for single ministry evaluation within 60 days

Technical capabilities:
· Deterministic policy enforcement engine (100% consistency rate)
· Append-only cryptographic ledger with SHA-256 hash chaining
· Independent verification API (proof-of-existence and proof-of-absence)
· Role-based access with cryptographic separation
· Full audit trail reconstruction in under 30 minutes

Economic rationale:
· 0.3% procurement integrity improvement offsets full deployment cost
· Modeled net annual benefit: $1.51B CAD (conservative scenario)
· Year 1 payback period with 100% IRR (modeled)

GRGF is protected under Canadian Patent Application No. 3,300,102 (filed January 28, 2026; publication pending).

I am requesting a structured 30-minute briefing to present the technical architecture, pilot evaluation framework, and deployment model. All materials are available under the GRGF Controlled Distribution Protocol.

Respectfully,
Tarek Wahid
Inventor and Principal Architect
Global Record Governance Framework`,
  },
  {
    target: "World Bank — Digital Development Global Practice",
    icon: Globe,
    subject: "GRGF — Sovereign Governance Infrastructure for Digital Public Infrastructure Programs",
    body: `To the Digital Development Practice Lead,

The Global Record Governance Framework (GRGF) is a sovereign-grade Governance Operating Layer designed to provide deterministic policy enforcement, cryptographic record integrity, and independent verification for national governance systems.

GRGF addresses a gap in current DPI stack architectures: while digital ID, payments, and data exchange layers exist, no equivalent infrastructure exists for governance integrity — the verifiable recording of institutional actions and omissions.

Alignment with World Bank DPI principles:
· Interoperability — standardized event schemas and RESTful APIs
· Inclusion — jurisdiction-neutral design supports all digital maturity levels
· Trust & Safety — cryptographic integrity with privacy-by-design
· Governance — custodial neutrality with anti-capture structural safeguards

Technical architecture:
· Six-layer model: Event Capture → Policy Engine → Evidence Backbone → Cryptographic Seal → Verification API → Federation
· Deterministic execution — identical inputs produce identical outputs
· No AI, no probabilistic logic, no interpretation
· Federation protocol enables cross-border verification

Scaling model:
· Nation-level node deployment (sovereign, reversible)
· Voluntary federation with shared compliance standards
· Cross-border verification capability
· Multilateral integration readiness

Global impact potential:
· Projected net annual benefit: $18.3B USD across participating nations
· Reduces sovereign corruption risk premium through structural verification
· Creates new trust primitives for development finance

GRGF Pilot Node v0.1 is available for controlled institutional evaluation. I am requesting a 30-minute technical briefing with the appropriate practice team.

Respectfully,
Tarek Wahid
Inventor and Principal Architect
Global Record Governance Framework`,
  },
  {
    target: "OECD — Directorate for Public Governance",
    icon: FileText,
    subject: "GRGF — Governance Integrity Infrastructure: Alignment with OECD Public Governance Standards",
    body: `To the Public Governance Directorate,

The Global Record Governance Framework (GRGF) is a deterministic governance infrastructure layer that structurally enforces institutional accountability through policy-driven record creation, cryptographic sealing, and independent verification.

GRGF directly addresses challenges identified in OECD governance frameworks — specifically the gap between policy intent and verifiable institutional execution.

OECD alignment:
· Transparency & Explainability — all policy decisions produce machine-readable and human-readable explanations
· Robustness & Security — Zero Trust architecture with no centralized override
· Accountability — every action, denial, and omission logged, sealed, and verifiable
· Human-Centred Values — enforces human authority; no automated decision-making

Structural characteristics:
· Deterministic policy enforcement (no AI, no probabilistic logic)
· Append-only cryptographic ledger (SHA-256 hash chaining)
· Proof-of-existence and proof-of-absence verification
· Federation model for cross-border governance validation
· Sovereign deployment with full reversibility

GRGF is positioned as a Governance Operating Layer — a new category of digital public infrastructure that operates alongside existing governance systems without replacing them.

The framework is available for structured institutional review. I am requesting a technical briefing to discuss alignment with OECD governance modernization objectives.

Respectfully,
Tarek Wahid
Inventor and Principal Architect
Global Record Governance Framework
Canadian Patent Application No. 3,300,102 (Filed)`,
  },
];

const OutreachMessages = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Institutional Outreach Templates"
      subtitle="Ready-to-send institutional engagement messages for primary and multilateral targets."
    />

    {outreachMessages.map((msg) => (
      <Section key={msg.target} title={msg.target} className="border-t border-border">
        <div className="governance-card">
          <div className="flex items-center gap-2 mb-4">
            <msg.icon className="h-4 w-4 text-accent" />
            <p className="text-xs font-mono text-accent/70 tracking-wider">SUBJECT: {msg.subject}</p>
          </div>
          <pre className="text-xs text-muted-foreground leading-relaxed whitespace-pre-wrap font-sans">
            {msg.body}
          </pre>
        </div>
      </Section>
    ))}

    {/* Usage Notes */}
    <Section title="Engagement Protocol" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <div className="space-y-3">
          {[
            "Send from professional email with institutional-grade signature",
            "Attach: 1-page Executive Summary (PDF), System Architecture overview",
            "Follow up within 7 business days if no response",
            "Offer 30-minute structured briefing — not a sales pitch",
            "Reference patent number and pilot availability in all communications",
            "Materials distributed under Controlled Distribution Protocol (CRP)",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="text-accent mt-0.5 shrink-0 text-xs">·</span>
              <p className="text-xs text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default OutreachMessages;