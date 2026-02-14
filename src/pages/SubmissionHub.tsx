import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { FadeIn } from "@/components/FadeIn";
import {
  FileText, Download, CheckCircle, Globe, Shield, BarChart3,
  ArrowRight, Building, Landmark, Lock,
} from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { num: "01", title: "Executive Brief", desc: "2-page institutional summary of the GRGF value proposition, problem statement, and strategic positioning for committee-level review.", link: "/executive-summary" },
  { num: "02", title: "Problem Statement", desc: "Structured analysis of the $2.6T annual governance loss, the absence of institutional memory protection, and the DPI trust gap.", link: "/the-problem" },
  { num: "03", title: "Architecture Overview", desc: "Six-layer deterministic architecture: Event Capture → Policy Engine → Evidence Backbone → Cryptographic Anchoring → Verification API → Federation.", link: "/architecture" },
  { num: "04", title: "Governance Framework", desc: "Charter principles, anti-capture clauses (AC-01–05), governance board structure, appeals mechanism, and accountability pathways.", link: "/governance-framework" },
  { num: "05", title: "Compliance Mapping", desc: "Cross-reference matrix covering ISO 27001, ISO 15489, ISO 37000, OECD Privacy Guidelines, GDPR, World Bank DPI Framework, and OECD AI Principles.", link: "/compliance" },
  { num: "06", title: "Risk Mitigation", desc: "GDPR erasure vs. append-only logic, sovereignty concerns, centralization fears, anti-capture enforcement, cybersecurity resilience, and political neutrality.", link: "/risk-mitigation" },
  { num: "07", title: "Impact Analysis", desc: "Conservative fiscal modeling with sensitivity analysis. Projected $18.3B global annual net benefit. 0.3% integrity improvement threshold.", link: "/impact-modeling" },
  { num: "08", title: "Deployment Roadmap", desc: "5-phase implementation pathway from readiness assessment through international federation, with 90-day pilot evaluation framework.", link: "/deployment-scenarios" },
];

const SubmissionHub = () => (
  <div className="animate-fade-in">
    <SEOHead
      title="International Submission Hub — GRGF"
      description="Complete submission pack for OECD, World Bank, and UN review of the Global Record Governance Framework. Download consolidated institutional documentation."
    />
    <PageHeader
      title="International Submission Hub"
      subtitle="Consolidated documentation for OECD, World Bank, and UN institutional review."
    >
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Submission-Pack" label="Export Full Submission PDF" />
      </div>
    </PageHeader>

    {/* Target Institutions */}
    <Section>
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          { icon: Globe, name: "OECD", desc: "Digital Governance & DPI Policy Review Committee", standards: ["OECD Policy Paper No. 68", "Privacy Guidelines", "AI Principles", "Digital Government Index"] },
          { icon: Landmark, name: "World Bank", desc: "GovTech Maturity & DPI Technical Evaluation", standards: ["GovTech Maturity Index (GTMI)", "DPI Framework", "Governance Pillars", "Digital Development"] },
          { icon: Building, name: "United Nations", desc: "SDG 16 Alignment & Digital Public Goods Assessment", standards: ["SDG 16 (Peace & Justice)", "DPG Standard", "UNDP DPI Safeguards", "UNESCO ROAM-X"] },
        ].map(({ icon: Icon, name, desc, standards }) => (
          <FadeIn key={name}>
            <div className="governance-card-elevated border-t-2 border-t-accent">
              <div className="flex items-center gap-3 mb-3">
                <Icon className="h-5 w-5 text-accent" />
                <h3 className="font-serif text-lg font-semibold">{name}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <ul className="space-y-1.5">
                {standards.map(s => (
                  <li key={s} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="h-3 w-3 text-accent shrink-0" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>

    {/* Submission Contents */}
    <Section title="Submission Pack Contents" className="bg-muted/30">
      <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
        Each section below links to the full interactive page. Use the "Export Full Submission PDF" button above to generate a consolidated print-ready document.
      </p>
      <div className="space-y-4 max-w-4xl">
        {sections.map(({ num, title, desc, link }, i) => (
          <FadeIn key={num} delay={i * 60}>
            <Link to={link} className="block governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <span className="text-xl font-mono font-bold text-accent/40 group-hover:text-accent transition-colors shrink-0 w-8">{num}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base font-semibold group-hover:text-accent transition-colors">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-1 transition-all mt-1 shrink-0" />
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </Section>

    {/* Quick Access Downloads */}
    <Section title="Supporting Documents">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: FileText, title: "Master Binder v1", desc: "Definitive institutional edition — 11 sections", file: "/documents/GRGF_Master_Binder_v1.md" },
          { icon: Shield, title: "Privacy Impact Assessment", desc: "Data minimization & residual risk analysis", file: "/documents/Privacy_Impact_Assessment.md" },
          { icon: Lock, title: "Data Protection Policy", desc: "RBAC/ABAC, HSM key management, ISO 27001", file: "/documents/Data_Protection_and_Access_Control_Policy.md" },
          { icon: BarChart3, title: "Valuation Scenarios", desc: "5-year conservative to aggressive EV model", file: "/documents/Valuation_5yr_Scenarios.md" },
        ].map(({ icon: Icon, title, desc, file }) => (
          <FadeIn key={title}>
            <a href={file} target="_blank" rel="noopener noreferrer" className="governance-card-elevated group hover:border-accent/30 transition-all duration-300 flex flex-col">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground flex-1">{desc}</p>
              <p className="mt-3 text-xs text-accent flex items-center gap-1">
                <Download className="h-3 w-3" /> View Document
              </p>
            </a>
          </FadeIn>
        ))}
      </div>
    </Section>

    {/* Disclaimer */}
    <div className="border-t border-border px-8 py-6 md:px-12">
      <p className="text-[11px] text-muted-foreground italic max-w-4xl">
        This submission pack is provided for institutional evaluation purposes. All projections are conservative estimates requiring independent validation. Technical artifacts under Controlled Distribution Protocol (CRP) Level 3+ are available upon institutional verification through the Controlled Access portal.
      </p>
      <p className="text-[10px] text-muted-foreground/60 mt-2">
        Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
      </p>
    </div>
  </div>
);

export default SubmissionHub;
