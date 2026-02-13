import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import { FileText, Globe, Shield, Scale, Building2, CheckCircle, ArrowRight } from "lucide-react";

const InternationalWhitepaper = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="International Submission Whitepaper"
      subtitle="Structured executive document for institutional review by OECD, United Nations, World Bank, and ISO governance bodies."
    />

    {/* Classification */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent">
        <div className="flex flex-wrap gap-3 mb-3">
          <span className="px-3 py-1 bg-card border border-border rounded-sm text-xs font-mono text-accent">DOCUMENT CLASS: Institutional Review</span>
          <span className="px-3 py-1 bg-card border border-border rounded-sm text-xs font-mono text-muted-foreground">VERSION: 1.0</span>
          <span className="px-3 py-1 bg-card border border-border rounded-sm text-xs font-mono text-muted-foreground">STATUS: Pre-Submission</span>
        </div>
        <p className="text-sm text-foreground leading-relaxed">
          This document is structured for submission to multilateral governance institutions. It presents the Global Record Governance Framework as a sovereign-grade Digital Public Infrastructure designed for international adoption and federation.
        </p>
      </div>
    </Section>

    {/* I. Statement of Purpose */}
    <Section title="I. Statement of Purpose & Global Significance" className="border-t border-border">
      <div className="space-y-4">
        <div className="governance-card">
          <h4 className="text-xs font-serif font-semibold text-foreground mb-2">The Governance Gap</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Institutional decisions affecting billions of people — procurement awards, policy authorizations, benefit determinations, regulatory actions — are recorded in systems that permit retroactive modification, lack verifiable audit trails, and cannot prove when governance actions were omitted. This structural gap undermines public trust, enables corruption, and prevents meaningful institutional accountability.
          </p>
        </div>
        <div className="governance-card">
          <h4 className="text-xs font-serif font-semibold text-foreground mb-2">The GRGF Solution</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Global Record Governance Framework (GRGF) is a sovereign-grade Digital Public Infrastructure trust layer for recording, preserving, and verifying institutional actions, decisions, and omissions over time — without interpretation, enforcement, or decision authority. It provides the evidentiary backbone that existing governance systems lack.
          </p>
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <h4 className="text-xs font-serif font-semibold text-foreground mb-2">Institutional Value Proposition</h4>
          <ul className="space-y-2">
            {[
              "Transforms governance accountability from reputation-based to evidence-based",
              "Provides cryptographic proof of both institutional action and institutional omission",
              "Operates as infrastructure — not a product, platform, or service",
              "Preserves sovereign authority while enabling international interoperability",
              "Supports institutional evaluation through structured pilot programmes",
            ].map((v) => (
              <li key={v} className="flex items-start gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* II. International Framework Alignment */}
    <Section title="II. Explicit Alignment with International Frameworks" className="border-t border-border">
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr className="border-b-2 border-border">
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[150px]">International Body</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[180px]">Framework / Standard</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[200px]">GRGF Alignment</th>
              <th className="text-left py-3 px-2 font-serif font-semibold text-foreground min-w-[100px]">Detail</th>
            </tr>
          </thead>
          <tbody>
            {[
              { body: "OECD", framework: "Policy Paper No. 68 (2024)", alignment: "Layer 3 Governance Integrity Registry within national DPI stack", link: "/oecd-alignment" },
              { body: "OECD", framework: "Privacy Guidelines (§7–18)", alignment: "Full mapping across 8 OECD privacy principles", link: "/compliance" },
              { body: "United Nations", framework: "SDG 16 (Peace, Justice & Strong Institutions)", alignment: "Verifiable institutional accountability and anti-corruption infrastructure", link: "/un-alignment" },
              { body: "United Nations", framework: "Digital Public Goods Standard", alignment: "Open governance logic, sovereign deployment, privacy-by-design", link: "/un-alignment" },
              { body: "World Bank", framework: "GovTech Maturity Index (GTMI)", alignment: "Institutional integrity, interoperability, and digital audit readiness", link: "/world-bank-alignment" },
              { body: "G20", framework: "DPI Framework (2023)", alignment: "Layer 3 positioning — governance integrity above base registries", link: "/g20-dpi-framework" },
              { body: "ITU", framework: "X.509 / X.1252 Standards", alignment: "Cryptographic identity and trust framework alignment", link: "/itu-global-standards" },
              { body: "UNESCO", framework: "ROAM-X / AI Ethics Recommendation", alignment: "Human-centred governance, no AI decision-making, transparency", link: "/unesco-alignment" },
              { body: "ISO", framework: "27001 / 42001 / 37000 / 15489", alignment: "Information security, AI governance, organizational governance, records management", link: "/compliance" },
              { body: "GDPR", framework: "General Data Protection Regulation", alignment: "Art. 5, 22, 25, 30, 32, 44–49 compliance mapping", link: "/compliance" },
            ].map((row, i) => (
              <tr key={i} className={`border-b border-border ${i % 2 === 0 ? "bg-card/40" : ""}`}>
                <td className="py-2 px-2 font-medium text-foreground">{row.body}</td>
                <td className="py-2 px-2 text-muted-foreground font-mono">{row.framework}</td>
                <td className="py-2 px-2 text-muted-foreground">{row.alignment}</td>
                <td className="py-2 px-2">
                  <Link to={row.link} className="text-accent hover:underline font-mono">View →</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* III. Technical Capabilities */}
    <Section title="III. Technical Architecture Summary" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Six-Layer Architecture", desc: "Event Capture → Normalization → Policy Engine → Evidence Store → Cryptographic Seal → Verification API", link: "/architecture" },
          { title: "Deterministic Policy Engine", desc: "Encoded governance rules execute identically every time. No AI, no interpretation, no discretionary override.", link: "/architecture" },
          { title: "Append-Only Evidence Backbone", desc: "Write-once, read-many (WORM) storage with SHA-256 hash chaining and Merkle tree verification.", link: "/security-trust" },
          { title: "Zero-Knowledge Verification", desc: "Public proof-of-existence and proof-of-absence without content exposure. Privacy-preserving audit.", link: "/safeguards-trust" },
          { title: "Federation Protocol", desc: "Tier 1 (Full), Tier 2 (Partial), Observer models. Sovereignty-preserving cross-border interoperability.", link: "/international-cooperation" },
          { title: "Scalability Model", desc: "Jurisdiction-neutral design supporting local → national → international deployment progression.", link: "/deployment-scenarios" },
        ].map((cap) => (
          <div key={cap.title} className="governance-card">
            <h4 className="text-xs font-serif font-semibold text-foreground mb-2">{cap.title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">{cap.desc}</p>
            <Link to={cap.link} className="text-xs text-accent hover:underline font-mono flex items-center gap-1">
              Technical detail <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </Section>

    {/* IV. Governance & Safeguards */}
    <Section title="IV. Governance Mechanisms & Safeguards" className="border-t border-border">
      <div className="space-y-3">
        {[
          { title: "Anti-Capture Clauses (AC-01–05)", desc: "Structural safeguards preventing vendor, governmental, or institutional capture of the framework." },
          { title: "Zero Trust Architecture", desc: "No component trusts another. Every interaction requires policy verification. No implicit access." },
          { title: "No-Edit-After-Seal Principle", desc: "Once sealed, no party — including the operator — can modify a record. Immutability is structural." },
          { title: "Human Authority Enforcement", desc: "All governance decisions require human authorization. No automated decision-making without human oversight." },
          { title: "Independent Audit Triggers", desc: "Anomaly detection and policy violation alerts trigger independent review processes automatically." },
          { title: "Custodial Neutrality", desc: "Storage, governance, and verification functions are structurally separated. No single party controls all layers." },
        ].map((item) => (
          <div key={item.title} className="governance-card">
            <div className="flex items-start gap-3">
              <Shield className="h-4 w-4 text-accent shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-serif font-semibold text-foreground">{item.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* V. Impact & Adoption Readiness */}
    <Section title="V. Documented Impact & Adoption Readiness" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="governance-card">
          <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Pilot Evaluation Framework</h4>
          <ul className="space-y-2">
            {[
              "8-week structured institutional assessment",
              "Five core KPIs: Policy Determinism, Integrity Verification, Audit Reconstruction, Denial Clarity, Trace Completeness",
              "Non-invasive integration — strengthens existing systems",
              "Reversible deployment with documented exit pathway",
              "0.3% of governance leakage break-even threshold",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{p}
              </li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <h4 className="text-xs font-serif font-semibold text-foreground mb-3">Institutional Case Studies</h4>
          <ul className="space-y-2">
            {[
              "CS-001: Procurement approval verification — 97% dispute reduction",
              "CS-002: Cross-ministry authorization — 100% accountability chains",
              "CS-003: Regulatory audit trails — 99.4% faster reconstruction",
              "CS-004: Social benefit verification — 93% faster appeals",
              "CS-005: Cross-border federation — 99.99% faster verification",
            ].map((p) => (
              <li key={p} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="text-accent mt-0.5 shrink-0">·</span>{p}
              </li>
            ))}
          </ul>
          <Link to="/case-studies" className="mt-3 text-xs text-accent hover:underline font-mono flex items-center gap-1">
            Full case studies <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </Section>

    {/* VI. Legal Foundation */}
    <Section title="VI. Legal Foundation & Intellectual Property" className="border-t border-border">
      <div className="space-y-3">
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <Scale className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-serif font-semibold text-foreground">Canadian Patent No. 3,300,102</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                "Global Record Governance Framework for Tamper-Evident Logging" — Filed January 28, 2026. Establishes legal protection for the framework's core architectural innovation.
              </p>
            </div>
          </div>
        </div>
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <FileText className="h-4 w-4 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-serif font-semibold text-foreground">Global Reform Declaration</h4>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Certifies GRGF as the first verifiable, omission-aware global governance system. Serves as primary evidence of originality and inventorship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>

    {/* VII. Next Steps */}
    <Section title="VII. Recommended Next Steps for Reviewing Bodies" className="border-t border-border">
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { step: "01", title: "Request Institutional Brief", desc: "12-page technical brief designed for multilateral review committees.", link: "/briefing" },
          { step: "02", title: "Review Technical Architecture", desc: "Six-layer architecture documentation with schema examples.", link: "/architecture" },
          { step: "03", title: "Examine Compliance Mapping", desc: "Unified cross-reference matrix across OECD, GDPR, ISO standards.", link: "/compliance" },
          { step: "04", title: "Initiate Pilot Evaluation", desc: "Structured 8-week assessment with defined KPIs and exit criteria.", link: "/pilot" },
        ].map((s) => (
          <Link key={s.step} to={s.link} className="governance-card hover:border-accent transition-colors group">
            <div className="flex items-start gap-3">
              <span className="text-lg font-mono font-bold text-accent">{s.step}</span>
              <div>
                <h4 className="text-xs font-serif font-semibold text-foreground group-hover:text-accent transition-colors">{s.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
      <p className="mt-2 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Contact.</span> Institutional inquiries: contact@globalrecordgovernance.com
      </p>
    </Section>
  </div>
);

export default InternationalWhitepaper;