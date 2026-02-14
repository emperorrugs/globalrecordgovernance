import { PageHeader, Section } from "@/components/PageComponents";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { FileText, Lock, Shield, Globe, BarChart3, CheckCircle, ArrowRight, Building2, Scale, Eye } from "lucide-react";

const binderSections = [
  { num: "I", title: "Executive Overview", route: "/", classification: "Level 1 — Public", desc: "Strategic positioning, problem statement, and GRGF solution overview for institutional decision-makers." },
  { num: "II", title: "System Architecture", route: "/architecture", classification: "Level 2 — Institutional", desc: "Six-layer architecture with event schemas, policy logic, federation model, and data flow diagrams." },
  { num: "III", title: "Security & Trust Whitepaper", route: "/security-trust", classification: "Level 2 — Institutional", desc: "Threat model, cryptographic integrity, zero-trust architecture, and incident response framework." },
  { num: "IV", title: "Governance Framework", route: "/governance-framework", classification: "Level 2 — Institutional", desc: "Custodial neutrality, sovereign interoperability, federation tiers, and oversight structure." },
  { num: "V", title: "Governance Risk & Ethics", route: "/ethics", classification: "Level 2 — Institutional", desc: "Anti-capture clauses, political neutrality safeguards, whistleblower model, and audit triggers." },
  { num: "VI", title: "National Deployment Manual", route: "/deployment", classification: "Level 2 — Institutional", desc: "24-month phased deployment with readiness assessment, team structure, and budget modeling." },
  { num: "VII", title: "Canadian Federal Deployment", route: "/canada", classification: "Level 2 — Institutional", desc: "Tailored positioning for Treasury Board, OCIO, SSC, and federal digital modernization alignment." },
  { num: "VIII", title: "Financial Impact & ROI", route: "/impact", classification: "Level 2 — Institutional", desc: "Procurement integrity modeling, audit efficiency, 10-year projection, and sensitivity analysis." },
  { num: "IX", title: "Standards & Compliance", route: "/compliance", classification: "Level 1 — Public", desc: "ISO 27001, ISO 42001, ISO 37000, OECD AI, and World Bank DPI alignment mapping." },
  { num: "X", title: "Legal & Intellectual Property", route: "/archive/legal-ip", classification: "Level 3 — NDA Required", desc: "Patent documentation, inventor attribution, licensing framework, and IP position statement." },
  { num: "XI", title: "Controlled Distribution Protocol", route: "/briefing", classification: "Level 2 — Institutional", desc: "CRP v1.0 — classification levels, access procedures, NDA framework, and distribution tracking." },
];

const revenueModel = [
  { stream: "Sovereign Licensing", desc: "National node licensing for government deployments with sovereignty-preserving terms." },
  { stream: "Professional Services", desc: "Policy encoding, integration engineering, security architecture, and deployment support." },
  { stream: "Certification & Training", desc: "GRGF Academy professional certification (Foundations, Practitioner, Steward/Architect tiers)." },
  { stream: "Federation Services", desc: "Cross-border interoperability services, trust validation, and compliance monitoring." },
  { stream: "Institutional Support", desc: "Ongoing governance oversight, security monitoring, and policy schema maintenance." },
];

const ExecutiveDossier = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Executive Dossier"
      subtitle="Investor-grade institutional positioning with master binder structure, revenue model, and strategic roadmap."
    >
      <div className="mt-4">
        <PDFExportButton filename="GRGF_Executive_Dossier" label="Export Dossier as PDF" />
      </div>
    </PageHeader>

    {/* Positioning */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-8">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF is positioned as a sovereign-grade governance integrity infrastructure layer — not a startup product, blockchain experiment, or political transparency tool. Its value derives from structural governance integrity through deterministic enforcement, cryptographic sealing, and independent verification.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Category", value: "Infrastructure Category Creation" },
          { label: "Revenue Model", value: "Sovereign Licensing + Services" },
          { label: "IP Protection", value: "Canadian Patent Application No. 3,300,102 (Filed)" },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-sm font-serif font-semibold text-foreground">{value}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Master Binder */}
    <Section title="Master Binder — Authoritative Structure" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        The GRGF Master Binder is the frozen authoritative edition containing all governance, architecture, security, deployment, and legal documentation. Each section is versioned, dated, classified, and hash-sealed.
      </p>
      <div className="space-y-2">
        {binderSections.map((s) => (
          <Link
            key={s.num}
            to={s.route}
            className="governance-card flex items-start gap-4 group hover:border-accent/50"
          >
            <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
              <span className="text-xs font-serif font-bold">{s.num}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-serif text-sm font-semibold group-hover:text-accent transition-colors">{s.title}</h4>
                <ArrowRight className="h-3 w-3 text-muted-foreground/30 group-hover:text-accent transition-colors" />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              <p className="text-[10px] font-mono text-muted-foreground/40 mt-1 tracking-wider">{s.classification} · v1.0.0 · FEB 2026</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-6 text-[10px] font-mono text-muted-foreground/40 flex items-center justify-between">
        <span>TOTAL: {binderSections.length} SECTIONS · FROZEN AUTHORITATIVE EDITION</span>
        <span>SHA-256 HASH-SEALED · VERSIONED</span>
      </div>
    </Section>

    {/* Revenue Model */}
    <Section title="Revenue Model (Sovereign Licensing)" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {revenueModel.map(({ stream, desc }) => (
          <div key={stream} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{stream}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Valuation Discipline.</span> Infrastructure-grade, long-horizon value creation through sovereign adoption cycles. Revenue projections are structured around confirmed pilot engagements and institutional licensing agreements — not speculative market sizing.
        </p>
      </div>
    </Section>

    {/* 10-Year Roadmap */}
    <Section title="10-Year Strategic Roadmap" className="border-t border-border">
      <div className="space-y-3">
        {[
          { year: "Year 1", milestone: "Controlled federal pilot (Canada) — single ministry, 3–5 decision types" },
          { year: "Year 2", milestone: "Cross-department expansion — Treasury, Procurement, Regulatory" },
          { year: "Year 3", milestone: "National-scale federation — cross-ministry integration, audit validation" },
          { year: "Year 4–5", milestone: "International pilot — 2–3 mid-size digitally mature nations" },
          { year: "Year 5–7", milestone: "Multilateral endorsement — World Bank, OECD technical validation" },
          { year: "Year 7–10", milestone: "Global federation — 10+ sovereign nodes, cross-border verification" },
        ].map((m) => (
          <div key={m.year} className="governance-card">
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-0.5 w-16">{m.year}</span>
              <p className="text-sm text-muted-foreground">{m.milestone}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Outreach Strategy */}
    <Section title="Institutional Outreach Sequence" className="border-t border-border">
      <div className="space-y-3">
        {[
          { step: "01", action: "Refine Executive Summary (2–3 pages)", detail: "Send as initial outreach. No full technical schema." },
          { step: "02", action: "Identify 5 institutional targets", detail: "Canada federal + World Bank + 2–3 additional sovereign prospects." },
          { step: "03", action: "Send controlled introduction", detail: "Executive summary only. Offer structured technical review session." },
          { step: "04", action: "Conduct technical briefing", detail: "Architecture, security, and deployment overview under CRP Level 2." },
          { step: "05", action: "Release Level 2 documentation", detail: "Full whitepaper package upon confirmation of institutional interest." },
        ].map((s) => (
          <div key={s.step} className="flex items-start gap-4">
            <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
              {s.step}
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground">{s.action}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid. Canadian Patent Application No. 3,300,102 — "Global Record Governance Framework for Tamper-Evident Logging" — Filed January 28, 2026 (publication pending).
      </p>
    </Section>
  </div>
);

export default ExecutiveDossier;
