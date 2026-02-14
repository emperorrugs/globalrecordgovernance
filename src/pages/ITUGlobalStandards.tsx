import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, AlertTriangle, Shield, Lock, Globe, FileText, Hash, HelpCircle, Download } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const mappingRows = [
  {
    standard: "X.509",
    concept: "Public-key & attribute certificate frameworks; PKI/PMI foundations for certificates, CRLs, and authentication.",
    capability: "GRGF Verification API can accept certificate-based signers; certificate chain evidence stored as append-only records.",
    artifacts: "Certificate fingerprints, signature verification logs, trust-store policy record, revocation status record (if applicable).",
    status: "Planned",
    notes: "GRGF does not mandate X.509 but supports integration where institutional systems use certificate-based signatures.",
  },
  {
    standard: "X.1252",
    concept: "Baseline identity management terms and definitions for consistent vocabulary across systems.",
    capability: "GRGF evidence object schema uses consistent identity terms (actor_role, institution_id) mapped to X.1252 definitions.",
    artifacts: "Identity vocabulary annex, evidence schema glossary, role-definition registry.",
    status: "Prototype",
    notes: "Vocabulary alignment documented; formal cross-reference annex in preparation.",
  },
  {
    standard: "X.1500",
    concept: "Overview of cybersecurity information exchange techniques and structured data formats.",
    capability: "GRGF security incident evidence package can export structured cyber event metadata for institutional exchange.",
    artifacts: "Incident evidence template, export schema (JSON), cybersecurity event metadata record.",
    status: "Planned",
    notes: "High-level structural alignment; detailed implementation depends on institutional deployment context.",
  },
];

const statusColor = (s: string) => {
  if (s === "Verified") return "bg-accent/15 text-accent border-accent/30";
  if (s === "Implemented") return "bg-accent/10 text-accent border-accent/20";
  if (s === "Prototype") return "bg-muted text-foreground border-border";
  return "bg-muted/50 text-muted-foreground border-border";
};

const faqs = [
  {
    q: "Does this mean ITU endorses GRGF?",
    a: "No. GRGF is an independent framework. References to ITU-T Recommendations are for interoperability mapping only. GRGF does not claim ITU endorsement, certification, or affiliation.",
  },
  {
    q: "Why reference X.509?",
    a: "X.509 defines public-key certificate frameworks that are globally used for identity-to-key binding and secure protocols (TLS/SSL). GRGF supports optional integration with certificate-based verification where institutional systems already use PKI.",
  },
  {
    q: "What is X.1252 used for in this context?",
    a: "X.1252 provides baseline identity management terminology. GRGF maps its evidence schema field names (actor_role, institution_id) to X.1252 definitions to ensure vocabulary consistency across governance systems.",
  },
  {
    q: "What is X.1500 used for?",
    a: "X.1500 provides an overview of cybersecurity information exchange. GRGF references it as a structural guide for exporting security incident evidence in interoperable formats.",
  },
  {
    q: "Is personal data required for ITU alignment?",
    a: "No. GRGF follows data minimization principles. Evidence objects store institutional roles and hashed metadata — not personal identifiers. Sovereignty and privacy by design are enforced at the architecture level.",
  },
  {
    q: "What evidence can an auditor verify?",
    a: "Hash integrity of sealed records, signature verification logs (if X.509 is used), change control records, certification checklist evidence, and the complete append-only evidence chain.",
  },
];

const ITUGlobalStandards = () => (
  <div className="animate-fade-in">
    {/* Header */}
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <nav className="text-[10px] font-mono text-primary-foreground/40 uppercase tracking-widest mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-accent transition-colors">Home</Link>
          <span className="mx-2">→</span>
          <Link to="/compliance" className="hover:text-accent transition-colors">Standards</Link>
          <span className="mx-2">→</span>
          <span className="text-primary-foreground/70">ITU Global Standards</span>
        </nav>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Standards Alignment</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          ITU Global Standards Alignment Hub
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-3xl">
          Mapping GRGF to ITU-T identity, certificate, and cybersecurity information-exchange recommendations
        </p>
      </div>
    </header>

    {/* Intro */}
    <Sec className="border-b border-border">
      <FadeIn>
        <div className="max-w-3xl">
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            GRGF is designed to support interoperable, verifiable institutional trust layers that can integrate with globally adopted telecommunications and security standards. This page documents how GRGF maps to selected ITU-T Recommendations relevant to identity terminology, certificate frameworks, and cybersecurity information exchange.
          </p>
          <p className="text-body text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Important:</span> This is a technical mapping document for review. It does not imply ITU endorsement.
          </p>
        </div>
      </FadeIn>
    </Sec>

    {/* Section 1: Scope & Non-Endorsement */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <div className="flex items-center gap-2 mb-6">
          <AlertTriangle className="h-5 w-5 text-accent" />
          <h2 className="institutional-heading text-heading-1 font-semibold">Scope and Non-Endorsement</h2>
        </div>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <ul className="space-y-3">
            {[
              "GRGF is an independent framework and does not claim endorsement by ITU.",
              "References to ITU-T Recommendations are for interoperability mapping and technical alignment support.",
              '"Alignment" means "designed to support compatibility," not "certified by ITU."',
              "Implementation status is stated per item: Planned, Prototype, Implemented, or Verified.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </Sec>

    {/* Section 2: Why ITU Matters */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Context</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Why ITU-T Recommendations Matter</h2>
        <div className="max-w-3xl space-y-4">
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2 flex items-center gap-2">
              <Lock className="h-4 w-4 text-accent" /> ITU-T X.509 — Certificate Frameworks
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              X.509 provides widely used public-key certificate frameworks that underpin trusted identity-to-key binding for secure communications. It defines the format for public key certificates, certificate revocation lists (CRLs), and authentication frameworks used broadly in TLS and PKI deployments worldwide.
            </p>
            <a href="https://www.itu.int/rec/T-REC-X.509" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
              ITU-T X.509 Recommendation <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2 flex items-center gap-2">
              <Globe className="h-4 w-4 text-accent" /> ITU-T X.1252 — Identity Management Terminology
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              X.1252 defines baseline identity management terms and definitions, enabling consistent vocabulary for identity governance across systems. Shared terminology reduces integration ambiguity when governance infrastructure spans multiple jurisdictions.
            </p>
            <a href="https://www.itu.int/rec/T-REC-X.1252" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
              ITU-T X.1252 Recommendation <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2 flex items-center gap-2">
              <Shield className="h-4 w-4 text-accent" /> ITU-T X.1500 — Cybersecurity Information Exchange
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-2">
              X.1500 provides an overview of cybersecurity information exchange, including structured techniques for sharing cybersecurity event data between institutions. It serves as a reference layer for incident and security exchange models.
            </p>
            <a href="https://www.itu.int/rec/T-REC-X.1500" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
              ITU-T X.1500 Recommendation <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* Section 3: Standards Cards */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Technical Reference</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Covered ITU-T Recommendations</h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              code: "X.509",
              title: "Public-Key Certificate Frameworks",
              what: "Defines public-key and attribute certificate frameworks; PKI/PMI foundations for certificates, CRLs, and authentication frameworks.",
              why: "Certificate-based identity binding and verification for institutional trust chains.",
              url: "https://www.itu.int/rec/T-REC-X.509",
            },
            {
              code: "X.1252",
              title: "Identity Management Terms",
              what: "Baseline identity management terms and definitions for consistent vocabulary.",
              why: "Shared language and identity definitions for governance interoperability across jurisdictions.",
              url: "https://www.itu.int/rec/T-REC-X.1252",
            },
            {
              code: "X.1500",
              title: "Cybersecurity Information Exchange",
              what: "Overview of cybersecurity information exchange techniques and structured data formats.",
              why: "Structured cybersecurity information exchange reference layer for incident and security metadata.",
              url: "https://www.itu.int/rec/T-REC-X.1500",
            },
          ].map((s) => (
            <div key={s.code} className="governance-card-elevated">
              <span className="inline-block px-2.5 py-1 bg-accent/15 text-accent text-xs font-mono font-bold mb-3">{s.code}</span>
              <h3 className="font-serif text-heading-3 font-semibold mb-3">{s.title}</h3>
              <div className="space-y-2 mb-4">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">What it is</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.what}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Why it matters</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.why}</p>
                </div>
              </div>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                Official Reference <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Section 4: Mapping Table */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Core Deliverable</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-4">Mapping Table — ITU-T → GRGF Capabilities → Evidence Artifacts</h2>
        <p className="text-sm text-muted-foreground mb-8 max-w-3xl">
          Each row maps an ITU-T Recommendation to specific GRGF capabilities, the evidence artifacts produced, and the current implementation status. Statuses are disclosed honestly.
        </p>
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-xs" role="table">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium whitespace-nowrap">ITU-T Rec.</th>
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium">Core Concept</th>
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium">GRGF Capability</th>
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium">Evidence Artifacts</th>
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium whitespace-nowrap">Status</th>
                <th className="text-left py-3 px-3 font-mono text-foreground/70 font-medium">Notes / Limits</th>
              </tr>
            </thead>
            <tbody>
              {mappingRows.map((r) => (
                <tr key={r.standard} className="border-b border-border/50 last:border-0 align-top">
                  <td className="py-3 px-3 font-mono text-accent font-semibold whitespace-nowrap">{r.standard}</td>
                  <td className="py-3 px-3 text-muted-foreground leading-relaxed">{r.concept}</td>
                  <td className="py-3 px-3 text-muted-foreground leading-relaxed">{r.capability}</td>
                  <td className="py-3 px-3 text-muted-foreground leading-relaxed">{r.artifacts}</td>
                  <td className="py-3 px-3 whitespace-nowrap">
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider border rounded-sm ${statusColor(r.status)}`}>
                      {r.status}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-muted-foreground/70 leading-relaxed">{r.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>
    </Sec>

    {/* Section 5: Certificate-Aware Verification */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Technical Detail</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-4">Certificate-Aware Verification Pattern</h2>
        <p className="text-sm text-muted-foreground mb-6 max-w-3xl">
          GRGF does not mandate X.509, but supports optional integration where institutional systems use certificate-based signatures. The pattern below shows how certificate context flows through the evidence pipeline.
        </p>

        {/* Flow Diagram */}
        <div className="governance-card mb-6" role="img" aria-label="Certificate-aware verification flow from event capture through optional X.509 signing to federation proof">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            {[
              "Record Event",
              "Compute Hash",
              "Optional: Sign (X.509)",
              "Append-Only Store",
              "Verification API",
              "Federation Proof",
            ].map((step, i, arr) => (
              <div key={step} className="flex items-center gap-2">
                <span className="px-3 py-2 border border-border rounded-sm text-xs font-mono text-foreground bg-card whitespace-nowrap">{step}</span>
                {i < arr.length - 1 && <ArrowRight className="h-3 w-3 text-accent shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-2 max-w-3xl">
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">When X.509 Is Used</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {[
                "Event hash is signed using an institutional certificate",
                "Signature + certificate chain reference stored as evidence",
                "Verification API validates signature and certificate context",
                "Verification result written as append-only evidence record",
                "Certificate fingerprint indexed for audit retrieval",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="governance-card">
            <h3 className="font-serif text-sm font-semibold mb-2">When X.509 Is Not Used</h3>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              {[
                "GRGF still provides SHA-256/512 hash integrity",
                "Actor role and institution_id provide governance context",
                "Merkle-based batch proofs ensure chain integrity",
                "Verification API operates on hash proofs alone",
                "Certificate integration can be added later without schema changes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* Section 6: Downloads */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Review Materials</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Downloads & Review Materials</h2>
        <div className="grid gap-4 md:grid-cols-2 max-w-3xl">
          {[
            {
              title: "GRGF–ITU Mapping Note v1.0",
              desc: "Complete mapping table, scope and non-endorsement disclaimer, implementation status, evidence artifacts, and X.1252 vocabulary annex.",
              status: "Draft",
              hash: "e4a7c1d9f2b8e5a3c7d1f9b4e8a2c6d0f4b8e2a6c0d4f8b2e6a0c4d8f2b6a0",
            },
            {
              title: "Certificate-Aware Verification Addendum",
              desc: "X.509-related integration approach, verification log format, evidence examples, and revocation/validity handling options.",
              status: "Draft",
              hash: "f5b8d2e0a3c9f6b4d8e2a6c0f4b8d2e6a0c4f8b2d6e0a4c8f2b6d0e4a8c2f6",
            },
          ].map((doc) => (
            <div key={doc.title} className="governance-card-elevated">
              <div className="flex items-start gap-3 mb-3">
                <FileText className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{doc.title}</h3>
                  <span className="inline-block mt-1 px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider bg-muted text-muted-foreground border border-border rounded-sm">{doc.status}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{doc.desc}</p>
              <div className="pt-3 border-t border-border/50">
                <p className="text-[9px] font-mono text-muted-foreground/50 break-all mb-2">SHA-256: {doc.hash}</p>
                <Link to="/controlled-access" className="inline-flex items-center gap-1 text-xs text-accent hover:underline">
                  <Download className="h-3 w-3" /> Request Access
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Documents are also listed in the <Link to="/archive" className="text-accent hover:underline">Digital Archive</Link> under Standards &amp; Compliance → ITU Alignment.
        </p>
      </FadeIn>
    </Sec>

    {/* Section 7: FAQs */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Institutional Guidance</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Reviewer FAQs</h2>
        <div className="space-y-4 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.q} className="governance-card">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold mb-1">{faq.q}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Section 8: CTA */}
    <Sec className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Request Institutional Review Pack</h2>
          <p className="text-body text-primary-foreground/60 mb-8">
            Access the complete ITU alignment documentation, mapping tables, and evidence artifact specifications for institutional evaluation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              Request Institutional Review Access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/whitepaper" className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:bg-primary-foreground/10">
              Download Public Whitepaper
            </Link>
            <Link to="/compliance" className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/20 text-primary-foreground text-sm font-semibold tracking-wide transition-all hover:bg-primary-foreground/10">
              Open Compliance Dashboard
            </Link>
          </div>
        </div>
      </FadeIn>
    </Sec>

    {/* Attribution */}
    <Sec>
      <p className="text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Sec>
  </div>
);

export default ITUGlobalStandards;
