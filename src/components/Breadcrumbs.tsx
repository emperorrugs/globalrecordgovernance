import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/transparency": "Transparency & Governance",
  "/membership": "Membership & Advisory",
  "/contact": "Institutional Access",
  "/recognition": "Recognition Framework",
  "/oecd-alignment": "Institutional Alignment",
  "/ethics": "Governance Ethics",
  "/compliance": "Compliance",
  "/architecture": "System Architecture",
  "/dpi-stack": "DPI Stack",
  "/safeguards-trust": "Safeguards & Trust",
  "/deployment-scenarios": "Deployment Scenarios",
  "/academy": "Academy",
  "/archive": "Digital Archive",
  "/research": "Research & Publications",
  "/partnerships": "Global Partnerships",
  "/controlled-access": "Controlled Access",
  "/the-problem": "The Problem",
  "/governance-framework": "Governance Framework",
  "/security-trust": "Security & Trust",
  "/deployment": "National Deployment",
  "/impact": "Impact & ROI",
  "/impact-modeling": "Impact Modeling",
  "/stakeholders": "Stakeholder Solutions",
  "/briefing": "Institutional Briefing",
  "/canada": "Canada Deployment",
  "/dossier": "Executive Dossier",
  "/governance-interface": "Governance Interface",
  "/critical-questions": "Critical Questions",
  "/readiness": "Institutional Readiness",
  "/validation": "Validation Pathway",
  "/pilot": "Pilot Evaluation",
  "/pilot-evaluation": "Pilot Evaluation",
  "/executive-summary": "Executive Summary",
  "/future-proofing": "Future-Proofing",
  "/outreach": "Outreach",
  "/simulation": "Simulation",
  "/simulator": "Simulator",
  "/records": "Records",
  "/data-entry": "Data Entry",
  "/workflow": "Workflow Demo",
  "/api-mock": "API Mock",
  "/verification": "Verification",
  "/systems": "Systems",
  "/processes": "Processes",
  "/blueprints": "Technical Blueprints",
  "/dpi-comparison": "DPI Comparison",
  "/sitemap": "Sitemap",
  "/strategic-governance": "Strategic Governance",
  "/operational-model": "Operational Model",
  "/risk-mitigation": "Risk Mitigation",
  "/international-cooperation": "International Cooperation",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-service": "Terms of Service",
};

export function Breadcrumbs() {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const label = routeLabels[pathname] || segments[segments.length - 1]?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "Page";

  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex items-center gap-1.5 font-mono tracking-wide">
        <li>
          <Link to="/" className="hover:text-foreground transition-colors">GRGF</Link>
        </li>
        <li><ChevronRight className="h-3 w-3" /></li>
        <li className="text-foreground font-medium truncate max-w-[200px]">{label}</li>
      </ol>
    </nav>
  );
}
