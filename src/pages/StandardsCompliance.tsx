import { PageHeader, Section } from "@/components/PageComponents";
import { CheckCircle, Shield, Globe, FileText, Scale, Eye, Lock, Table } from "lucide-react";

/* ── Unified Cross-Reference Matrix (OECD + GDPR + ISO 27001 + ISO 15489) ── */
const crossReferenceMatrix = [
  {
    feature: "Immutable record archival (append-only, WORM)",
    oecdPrinciple: "Security Safeguards (§11)",
    gdprArticle: "Art. 32 — Security of Processing",
    iso27001: "A.12.3 — Backup / A.12.4 — Logging",
    iso15489: "§8.3 — Integrity & Authenticity",
    riskAddressed: "Unauthorized alteration or deletion of governance records",
  },
  {
    feature: "Privacy-preserving metadata capture",
    oecdPrinciple: "Purpose Limitation (§9)",
    gdprArticle: "Art. 5(1)(b) — Purpose Limitation",
    iso27001: "A.8.2 — Information Classification",
    iso15489: "§6.3 — Privacy & Confidentiality",
    riskAddressed: "Collection of excessive personal data beyond governance need",
  },
  {
    feature: "Deterministic policy enforcement engine",
    oecdPrinciple: "Accountability (§14)",
    gdprArticle: "Art. 22 — Automated Decision-Making Safeguards",
    iso27001: "A.14.2 — Security in Development",
    iso15489: "§8.1 — Creation & Capture Rules",
    riskAddressed: "Arbitrary discretionary override of governance rules",
  },
  {
    feature: "Institutional audit trails & denial logging",
    oecdPrinciple: "Openness & Transparency (§12)",
    gdprArticle: "Art. 30 — Records of Processing Activities",
    iso27001: "A.12.4 — Logging & Monitoring",
    iso15489: "§9.8 — Audit Trail Requirements",
    riskAddressed: "Lack of institutional transparency and accountability gaps",
  },
  {
    feature: "SHA-256 cryptographic sealing & Merkle chains",
    oecdPrinciple: "Security Safeguards (§11)",
    gdprArticle: "Art. 32(1)(a) — Pseudonymisation & Encryption",
    iso27001: "A.10.1 — Cryptographic Controls",
    iso15489: "§8.3.1 — Integrity Verification",
    riskAddressed: "Retroactive tampering or evidence manipulation",
  },
  {
    feature: "Role-based access control (RBAC/ABAC)",
    oecdPrinciple: "Use Limitation (§10)",
    gdprArticle: "Art. 25 — Data Protection by Design",
    iso27001: "A.9.1 — Access Control Policy",
    iso15489: "§8.5 — Access & Permissions",
    riskAddressed: "Unauthorized access to restricted governance records",
  },
  {
    feature: "Cross-border federation protocols",
    oecdPrinciple: "Transborder Data Flows (§15–18)",
    gdprArticle: "Art. 44–49 — International Transfers",
    iso27001: "A.13.2 — Information Transfer",
    iso15489: "§6.2 — Jurisdictional Requirements",
    riskAddressed: "Data sovereignty violations in cross-border governance",
  },
  {
    feature: "Controlled retention & disposition schedules",
    oecdPrinciple: "Collection Limitation (§7)",
    gdprArticle: "Art. 5(1)(e) — Storage Limitation",
    iso27001: "A.8.3 — Media Handling",
    iso15489: "§9.9 — Disposition Authority",
    riskAddressed: "Indefinite retention without governance justification",
  },
  {
    feature: "Public verification without content exposure",
    oecdPrinciple: "Individual Participation (§13)",
    gdprArticle: "Art. 15 — Right of Access",
    iso27001: "A.18.1 — Legal Compliance",
    iso15489: "§8.4 — Availability & Access",
    riskAddressed: "Inability to verify governance actions independently",
  },
];

/* ── Per-Standard Detailed Mappings ── */
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
    standard: "ISO 15489",
    title: "Records Management",
    mappings: [
      { control: "§5 — Concepts & Principles", alignment: "Records are authoritative, authentic, reliable, and useable — enforced structurally, not by policy alone." },
      { control: "§6.2 — Policies & Responsibilities", alignment: "Governance Operating System encodes retention, access, and disposition rules as executable policy." },
      { control: "§8.1 — Creation & Capture", alignment: "Structured event schemas capture mandatory context: actor, scope, legal reference, timestamp." },
      { control: "§8.3 — Integrity & Authenticity", alignment: "SHA-256 hash sealing and Merkle chains ensure records cannot be altered post-capture." },
      { control: "§9.8 — Audit Trail", alignment: "Every action, denial, and omission generates an append-only, verifiable audit record." },
      { control: "§9.9 — Disposition", alignment: "Controlled disposition with governance-defined retention schedules and logged destruction." },
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
  {
    standard: "ISO 31000",
    title: "Risk Management",
    mappings: [
      { control: "Clause 5.1 — Communication & Consultation", alignment: "Multi-stakeholder governance model with formal consultation mechanisms and transparency reporting." },
      { control: "Clause 5.3 — Risk Identification", alignment: "Threat model identifies six primary attack vectors. Risk register tracks likelihood and mitigation strategies." },
      { control: "Clause 5.4 — Risk Analysis", alignment: "Deterministic policy engine enables structured analysis of governance decision risks with audit evidence." },
      { control: "Clause 5.5 — Risk Evaluation", alignment: "Compliance mapping and maturity indicators provide systematic risk evaluation against international standards." },
      { control: "Clause 5.6 — Risk Treatment", alignment: "Anti-capture clauses, cryptographic sealing, and no-override principle as structural risk treatments." },
    ],
  },
  {
    standard: "EU AI Act",
    title: "Artificial Intelligence Regulation",
    mappings: [
      { control: "Art. 6 — Risk Classification", alignment: "GRGF uses no AI for governance decisions. Deterministic logic eliminates high-risk AI classification concerns." },
      { control: "Art. 13 — Transparency", alignment: "All policy decisions produce machine-readable explanations. No opaque algorithmic decision-making." },
      { control: "Art. 14 — Human Oversight", alignment: "Human authority required for all governance actions. No automated override capability." },
      { control: "Art. 15 — Accuracy & Robustness", alignment: "Deterministic enforcement ensures identical inputs always produce identical outputs. Cryptographically verifiable." },
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
      subtitle="Structured alignment mapping to international governance, security, records management, and digital infrastructure standards."
    />

    {/* Overview */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF is designed to align with established international standards for information security, records management, governance, AI management, and digital public infrastructure. The following mappings demonstrate conceptual alignment — not certification claims.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6 mb-8">
        {complianceMatrix.map((s) => (
          <div key={s.standard} className="governance-card text-center">
            <p className="text-lg font-serif font-semibold text-accent">{s.standard}</p>
            <p className="text-[10px] text-muted-foreground mt-1">{s.title}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* ── Unified Cross-Reference Matrix ── */}
    <Section title="Unified Compliance Cross-Reference Matrix" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Table className="h-4 w-4 text-accent" />
          <span className="text-xs font-mono font-semibold text-foreground">OECD Privacy Guidelines × GDPR × ISO/IEC 27001 × ISO 15489</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          This matrix maps each GRGF capability to four international regulatory and standards frameworks simultaneously, identifying the specific governance risk each alignment addresses.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[180px]">GRGF Feature</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[140px]">OECD Principle</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[160px]">GDPR Article</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[140px]">ISO/IEC 27001</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[140px]">ISO 15489</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[200px]">Risk Addressed</th>
            </tr>
          </thead>
          <tbody>
            {crossReferenceMatrix.map((row, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-card/40" : ""}`}>
                <td className="py-3 px-2 font-medium text-foreground">{row.feature}</td>
                <td className="py-3 px-2 text-muted-foreground font-mono">{row.oecdPrinciple}</td>
                <td className="py-3 px-2 text-muted-foreground font-mono">{row.gdprArticle}</td>
                <td className="py-3 px-2 text-muted-foreground font-mono">{row.iso27001}</td>
                <td className="py-3 px-2 text-muted-foreground font-mono">{row.iso15489}</td>
                <td className="py-3 px-2 text-muted-foreground">{row.riskAddressed}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
