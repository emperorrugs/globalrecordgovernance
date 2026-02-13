import { Link } from "react-router-dom";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import {
  FileText, Shield, BarChart3, AlertTriangle, Scale,
  Download, Lock, BookOpen, Landmark, Globe, ArrowRight,
} from "lucide-react";

const DOCUMENTS = [
  {
    category: "Executive & Strategic",
    items: [
      { title: "Executive Brief", desc: "12-page institutional overview for senior decision-makers.", icon: FileText, path: "/briefing" },
      { title: "Executive Summary Portal", desc: "Single-scroll strategic framing for systems-level review.", icon: Landmark, path: "/executive-summary" },
      { title: "International Submission Whitepaper", desc: "Formal document structured for OECD/UN/World Bank committee review.", icon: Globe, path: "/whitepaper" },
    ],
  },
  {
    category: "Technical & Architecture",
    items: [
      { title: "System Architecture", desc: "Six-layer modular architecture with deployment topology.", icon: Shield, path: "/architecture" },
      { title: "Scalability & Performance", desc: "Engineering scaling model with throughput and cost projections.", icon: BarChart3, path: "/scalability" },
      { title: "Technical Blueprints", desc: "Detailed component specifications and integration patterns.", icon: BookOpen, path: "/blueprints" },
    ],
  },
  {
    category: "Financial & Economic",
    items: [
      { title: "Financial Evaluation Engine", desc: "Interactive NPV, ROI, and sensitivity analysis tool.", icon: BarChart3, path: "/financial-model" },
      { title: "Impact Modeling Suite", desc: "Nine-module sovereign-grade decision-support system.", icon: BarChart3, path: "/impact-modeling" },
      { title: "Valuation Scenarios", desc: "Five-year fiscal impact projections with conservative assumptions.", icon: BarChart3, path: "/impact" },
    ],
  },
  {
    category: "Governance & Compliance",
    items: [
      { title: "Governance Framework", desc: "Charter principles, anti-capture clauses, and institutional structure.", icon: Scale, path: "/governance-framework" },
      { title: "Risk Register", desc: "Categorized risk assessment with mitigation strategies.", icon: AlertTriangle, path: "/risk-register" },
      { title: "Compliance Cross-Reference", desc: "OECD, GDPR, ISO 27001, ISO 15489 alignment matrix.", icon: FileText, path: "/compliance" },
    ],
  },
  {
    category: "Legal & Intellectual Property",
    items: [
      { title: "Privacy Policy", desc: "Data protection measures and international privacy compliance.", icon: Lock, path: "/privacy-policy" },
      { title: "Terms of Service", desc: "Institutional engagement terms and usage conditions.", icon: FileText, path: "/terms-of-service" },
      { title: "Governance Ethics", desc: "Anti-capture clauses (AC-01–05) and risk controls (GRE-01–07).", icon: Shield, path: "/ethics" },
    ],
  },
  {
    category: "Deployment & Procurement",
    items: [
      { title: "Deployment Roadmap", desc: "Five-phase sovereign integration pathway.", icon: Globe, path: "/deployment-scenarios" },
      { title: "Institutional Readiness", desc: "Cost-benefit calculator and 20-objection FAQ.", icon: Landmark, path: "/readiness" },
      { title: "Archive & Downloads", desc: "Structured document packs for institutional evaluation.", icon: Download, path: "/archive" },
    ],
  },
];

const InstitutionalReview = () => (
  <div className="animate-fade-in">
    <SEOHead
      title="Institutional Due Diligence Room — GRGF"
      description="Structured repository of executive briefs, technical documentation, economic models, and compliance evidence for institutional review."
    />
    <PageHeader
      title="Institutional Due Diligence Room"
      subtitle="Consolidated access to all documentation required for institutional evaluation, technical audit, and procurement assessment."
    />

    {DOCUMENTS.map((group, gi) => (
      <Section key={group.category} title={group.category} className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {group.items.map(({ title, desc, icon: Icon, path }, i) => (
            <FadeIn key={title} delay={(gi * 3 + i) * 40}>
              <Link
                to={path}
                className="governance-card-elevated group hover:border-accent/30 transition-all duration-300 flex flex-col h-full"
              >
                <Icon className="h-5 w-5 text-accent mb-3" />
                <h4 className="font-serif text-lg font-semibold mb-1 group-hover:text-accent transition-colors">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3 group-hover:text-accent group-hover:gap-2 transition-all">
                  Review <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Section>
    ))}

    <Section className="border-t border-border bg-muted/30">
      <div className="flex items-start gap-3">
        <Lock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Access Note.</span>{" "}
          All documents listed are available through the public transparency interface. For institutional-grade document packs with hash verification,
          contact GRGF through the{" "}
          <Link to="/controlled-access" className="text-accent hover:underline">Controlled Access Protocol</Link>.
        </p>
      </div>
    </Section>
  </div>
);

export default InstitutionalReview;
