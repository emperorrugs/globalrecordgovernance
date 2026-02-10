import { PageHeader, Section } from "@/components/PageComponents";
import { CheckCircle, Shield, Globe, FileText, Scale, Eye, Lock } from "lucide-react";

const complianceMatrix = [
  {
    standard: "ISO 27001",
    title: "Information Security Management",
    mappings: [
      { control: "A.5 — Information Security Policies", alignment: "Governance Operating System encodes and enforces security policies deterministically." },
      { control: "A.8 — Asset Management", alignment: "All records classified, sealed, and tracked through immutable evidence backbone." },
      { control: "A.9 — Access Control", alignment: "Role-based access with policy-enforced authorization. No implicit trust." },
      { control: "A.10 — Cryptography", alignment: "SHA-256/512 sealing, Merkle integrity chains, key custody separation." },
      { control: "A.12 — Operations Security", alignment: "Append-only storage, tamper detection, integrity chain validation." },
      { control: "A.18 — Compliance", alignment: "Continuous compliance evidence with deterministic audit trails." },
    ],
  },
  {
    standard: "ISO 42001",
    title: "AI Management System",
    mappings: [
      { control: "4.1 — Context of the Organization", alignment: "GRGF uses no AI for governance decisions. All logic is deterministic and rule-based." },
      { control: "6.1 — Risk Assessment", alignment: "Threat model addresses six primary attack vectors with documented mitigations." },
      { control: "8.4 — AI System Operation", alignment: "Not applicable — GRGF explicitly rejects probabilistic or AI-based decision logic." },
      { control: "9.1 — Monitoring & Measurement", alignment: "Continuous integrity monitoring with hash-chain validation and anomaly detection." },
    ],
  },
  {
    standard: "ISO 37000",
    title: "Governance of Organizations",
    mappings: [
      { control: "Principle 1 — Purpose", alignment: "Governance integrity infrastructure — not service delivery or commercial product." },
      { control: "Principle 3 — Accountability", alignment: "Human accountability enforced. All decisions traceable to identifiable authority." },
      { control: "Principle 5 — Transparency", alignment: "Public verification layer enables independent audit without content exposure." },
      { control: "Principle 8 — Stakeholder Engagement", alignment: "Multi-tier federation model with voluntary, sovereignty-preserving participation." },
    ],
  },
  {
    standard: "OECD AI Principles",
    title: "Artificial Intelligence Governance",
    mappings: [
      { control: "Transparency & Explainability", alignment: "All policy decisions produce machine-readable and human-readable explanations." },
      { control: "Robustness & Security", alignment: "Zero Trust architecture with no centralized override and tamper-evident sealing." },
      { control: "Accountability", alignment: "Every action, denial, and omission is logged, sealed, and independently verifiable." },
      { control: "Human-Centred Values", alignment: "GRGF enforces human authority. No automated decision-making without human authorization." },
    ],
  },
  {
    standard: "World Bank DPI",
    title: "Digital Public Infrastructure Guidelines",
    mappings: [
      { control: "Interoperability", alignment: "Standardized event schemas, RESTful APIs, and federation protocols for cross-system integration." },
      { control: "Inclusion", alignment: "Jurisdiction-neutral design supports low-capacity through advanced digital state deployment models." },
      { control: "Trust & Safety", alignment: "Cryptographic integrity, privacy-by-design, and controlled distribution protocols." },
      { control: "Governance", alignment: "Custodial neutrality, sovereign interoperability, and anti-capture structural safeguards." },
    ],
  },
];

const privacyPrinciples = [
  "Data minimization — only governance-relevant metadata is captured",
  "Purpose limitation — records serve governance integrity only",
  "Privacy-by-design — public verification exposes no personal data",
  "Access control — content access structurally separated from verification access",
  "Retention governance — defined under institutional governance rules, not operator discretion",
  "Cross-border safeguards — federation preserves data residency requirements",
];

const StandardsCompliance = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Standards & Compliance"
      subtitle="Structured alignment mapping to international governance, security, and digital infrastructure standards."
    />

    {/* Overview */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF is designed to align with established international standards for information security, governance, AI management, and digital public infrastructure. The following mappings demonstrate conceptual alignment — not certification claims.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-5 mb-8">
        {complianceMatrix.map((s) => (
          <div key={s.standard} className="governance-card text-center">
            <p className="text-lg font-serif font-semibold text-accent">{s.standard}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{s.title}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Detailed Mapping */}
    {complianceMatrix.map((standard) => (
      <Section key={standard.standard} title={`${standard.standard} — ${standard.title}`} className="border-t border-border">
        <div className="space-y-3">
          {standard.mappings.map((m) => (
            <div key={m.control} className="governance-card">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-mono text-foreground font-medium">{m.control}</h4>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{m.alignment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    ))}

    {/* Privacy by Design */}
    <Section title="Privacy-by-Design Framework" className="border-t border-border">
      <div className="space-y-3">
        {privacyPrinciples.map((p, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm text-muted-foreground">{p}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Disclaimer */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Note.</span> These mappings represent conceptual alignment with the referenced standards. They do not constitute formal certification, accreditation, or third-party audit confirmation. Independent compliance assessment is recommended as part of any national deployment evaluation.
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default StandardsCompliance;
