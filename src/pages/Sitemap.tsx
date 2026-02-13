import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Home, Layers, Shield, GitBranch, AlertTriangle, Globe, Building2,
  BarChart3, Users, CheckCircle, FileText, Lock, Play, Cpu, GraduationCap,
  Archive, ArrowRight, Scale,
} from "lucide-react";

interface RouteEntry {
  path: string;
  title: string;
  description: string;
  classification: string;
  icon: React.ElementType;
  group: string;
}

const routes: RouteEntry[] = [
  // Primary Navigation (11 items)
  { group: "Primary Navigation", path: "/", title: "Home", description: "Executive overview, infrastructure pillars, stakeholder tiles, pilot KPIs, and trust signals.", classification: "Level 1 — Public", icon: Home },
  { group: "Primary Navigation", path: "/the-problem", title: "The Problem", description: "First-principles explanation of governance integrity failures with real scenarios.", classification: "Level 1 — Public", icon: AlertTriangle },
  { group: "Primary Navigation", path: "/architecture", title: "Architecture", description: "Six-layer architecture with event capture, policy engine, and federation layers.", classification: "Level 2 — Institutional", icon: Layers },
  { group: "Primary Navigation", path: "/security-trust", title: "Trust Center", description: "Security posture, current limitations, vulnerability disclosure, and audit roadmap.", classification: "Level 2 — Institutional", icon: Shield },
  { group: "Primary Navigation", path: "/governance-framework", title: "Governance Framework", description: "Custodial neutrality, sovereign interoperability, and federation rules.", classification: "Level 2 — Institutional", icon: GitBranch },
  { group: "Primary Navigation", path: "/deployment", title: "Deployment Model", description: "Phased deployment with readiness assessment and budget modeling.", classification: "Level 2 — Institutional", icon: Globe },
  { group: "Primary Navigation", path: "/impact-modeling", title: "Impact & ROI Tools", description: "9-module sovereign-grade decision-support system with Treasury-grade modeling.", classification: "Level 2 — Institutional", icon: BarChart3 },
  { group: "Primary Navigation", path: "/pilot", title: "Pilot Evaluation", description: "Controlled evaluation edition — minimal viable governance engine for institutional assessment.", classification: "Level 3 — NDA Required", icon: Globe },
  { group: "Primary Navigation", path: "/controlled-access", title: "Controlled Access", description: "Classification levels, CRP workflow, and institutional access request.", classification: "Level 1 — Public", icon: Lock },
  { group: "Primary Navigation", path: "/archive", title: "Archive", description: "Central document archive organized by stakeholder roles with hash verification.", classification: "Level 1 — Public", icon: Archive },
  { group: "Primary Navigation", path: "/contact", title: "Contact", description: "Institutional inquiry channel for governments and qualified institutional parties.", classification: "Level 1 — Public", icon: Users },

  // Extended Navigation
  { group: "Extended Navigation", path: "/canada", title: "Canada Federal", description: "Tailored positioning for Treasury Board, OCIO, SSC, and EARB alignment.", classification: "Level 2 — Institutional", icon: Building2 },
  { group: "Extended Navigation", path: "/ethics", title: "Risk & Ethics", description: "Anti-capture clauses, political neutrality safeguards, and whistleblower model.", classification: "Level 2 — Institutional", icon: AlertTriangle },
  { group: "Extended Navigation", path: "/stakeholders", title: "Stakeholder Solutions", description: "Role-specific value framing for Ministers, CIOs, Auditors, and Regulators.", classification: "Level 1 — Public", icon: Users },
  { group: "Extended Navigation", path: "/compliance", title: "Standards & Compliance", description: "ISO 27001, ISO 42001, ISO 37000, OECD AI, and World Bank DPI mapping.", classification: "Level 1 — Public", icon: CheckCircle },
  { group: "Extended Navigation", path: "/dossier", title: "Executive Dossier", description: "Master binder structure, revenue model, and strategic roadmap.", classification: "Level 2 — Institutional", icon: FileText },
  { group: "Extended Navigation", path: "/future-proofing", title: "Future-Proofing & Evolution", description: "Cryptographic agility, post-quantum readiness, federation model, and long-term stewardship.", classification: "Level 2 — Institutional", icon: Shield },
  { group: "Extended Navigation", path: "/governance-interface", title: "Governance Interface", description: "Structured institutional navigation console with document, stakeholder, compliance, and simulation modes.", classification: "Level 2 — Institutional", icon: Cpu },
  { group: "Extended Navigation", path: "/readiness", title: "Institutional Readiness", description: "Pilot proposal, cost calculator, risk register, exit policy, and version registry.", classification: "Level 2 — Institutional", icon: CheckCircle },

  // Simulation & Demo
  { group: "Simulation & Demo", path: "/simulation", title: "Simulation Hub", description: "Interactive governance workflow demonstrations and mock environments.", classification: "Non-Authoritative", icon: Play },
  { group: "Simulation & Demo", path: "/systems", title: "Systems", description: "Governance Operating System component documentation.", classification: "Level 1 — Public", icon: Cpu },
  { group: "Simulation & Demo", path: "/blueprints", title: "Technical Blueprints", description: "Detailed technical specifications and deployment blueprints.", classification: "Level 2 — Institutional", icon: Layers },
  { group: "Simulation & Demo", path: "/academy", title: "Academy", description: "Professional certification: Foundations, Practitioner, Steward/Architect.", classification: "Level 1 — Public", icon: GraduationCap },
  { group: "Simulation & Demo", path: "/dpi-comparison", title: "DPI Comparison", description: "28-capability matrix comparing GRGF to traditional DPI systems.", classification: "Level 1 — Public", icon: BarChart3 },

  // Decision Tools
  { group: "Decision Tools", path: "/financial-model", title: "Financial Model", description: "Interactive fiscal modeling engine with GDP, population, and fraud exposure inputs.", classification: "Level 2 — Institutional", icon: BarChart3 },
  { group: "Decision Tools", path: "/risk-assessment", title: "Risk Assessment", description: "National risk evaluation across legal, cyber, data governance, and coordination dimensions.", classification: "Level 2 — Institutional", icon: AlertTriangle },
  { group: "Decision Tools", path: "/deployment-planner", title: "Deployment Planner", description: "Sector-based deployment scenario builder with 3-phase roadmap generation.", classification: "Level 2 — Institutional", icon: Globe },
  { group: "Decision Tools", path: "/interoperability", title: "Interoperability", description: "Cross-ministry interoperability impact simulator with efficiency projections.", classification: "Level 2 — Institutional", icon: Cpu },
  { group: "Decision Tools", path: "/procurement", title: "Procurement Readiness", description: "Interactive procurement checklist for open standards, vendor neutrality, and data portability.", classification: "Level 1 — Public", icon: CheckCircle },
  { group: "Decision Tools", path: "/maturity", title: "Digital Maturity", description: "Digital maturity comparator for deployment complexity and prerequisites assessment.", classification: "Level 1 — Public", icon: BarChart3 },
  { group: "Decision Tools", path: "/stress-test", title: "Stress Test", description: "Governance stress-test simulator for crisis scenarios and institutional resilience.", classification: "Level 2 — Institutional", icon: AlertTriangle },
  { group: "Decision Tools", path: "/executive-brief", title: "Executive Brief Generator", description: "Auto-generate tailored institutional briefs with financial projections and compliance summary.", classification: "Level 2 — Institutional", icon: FileText },
  // Digital Archive
  { group: "Digital Archive", path: "/archive", title: "Archive Overview", description: "Central document archive organized by stakeholder roles.", classification: "Level 1 — Public", icon: Archive },
  { group: "Digital Archive", path: "/archive/public", title: "Public Archive", description: "Publicly accessible governance documents and summaries.", classification: "Level 1 — Public", icon: Archive },
  { group: "Digital Archive", path: "/archive/government", title: "Government Archive", description: "Policy-grade documents for government and multilateral review.", classification: "Level 2 — Institutional", icon: Building2 },
  { group: "Digital Archive", path: "/archive/partners", title: "Partner Archive", description: "Technical integration packages for partners and integrators.", classification: "Level 2 — Institutional", icon: Users },
  { group: "Digital Archive", path: "/archive/legal-ip", title: "Legal & IP Archive", description: "Patent documentation, licensing, and IP materials.", classification: "Level 3 — NDA Required", icon: Scale },
  { group: "Digital Archive", path: "/archive/master-index", title: "Master Index", description: "68+ document authoritative index across 10 sections.", classification: "Level 1 — Public", icon: FileText },
  { group: "Digital Archive", path: "/archive/downloads", title: "Downloads", description: "Structured download packs by stakeholder role.", classification: "Level 1 — Public", icon: Archive },
];

const classColors: Record<string, string> = {
  "Level 1 — Public": "text-accent",
  "Level 2 — Institutional": "text-muted-foreground",
  "Level 3 — NDA Required": "text-destructive/70",
  "Non-Authoritative": "text-muted-foreground/50",
};

export default function Sitemap() {
  const groups = [...new Set(routes.map((r) => r.group))];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Institutional Sitemap"
        subtitle="Complete route map of the GRGF Digital Public Infrastructure platform with classification levels and descriptions."
      />

      <Section>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className="governance-card text-center">
            <p className="text-2xl font-serif font-bold text-accent">{routes.length}</p>
            <p className="text-xs text-muted-foreground">Total Pages</p>
          </div>
          <div className="governance-card text-center">
            <p className="text-2xl font-serif font-bold text-foreground">{groups.length}</p>
            <p className="text-xs text-muted-foreground">Sections</p>
          </div>
          <div className="governance-card text-center">
            <p className="text-2xl font-serif font-bold text-accent">{routes.filter(r => r.classification.includes("Public")).length}</p>
            <p className="text-xs text-muted-foreground">Public Pages</p>
          </div>
          <div className="governance-card text-center">
            <p className="text-2xl font-serif font-bold text-foreground">{routes.filter(r => r.classification.includes("Institutional")).length}</p>
            <p className="text-xs text-muted-foreground">Institutional Pages</p>
          </div>
        </div>
      </Section>

      {groups.map((group) => (
        <Section key={group} title={group} className="border-t border-border">
          <div className="space-y-2">
            {routes.filter((r) => r.group === group).map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="governance-card flex items-start gap-4 group hover:border-accent/50"
              >
                <div className="shrink-0 mt-0.5 text-accent">
                  <route.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-sm font-serif font-semibold group-hover:text-accent transition-colors">{route.title}</h4>
                    <ArrowRight className="h-3 w-3 text-muted-foreground/30 group-hover:text-accent transition-colors" />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{route.description}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span className={`text-[10px] font-mono tracking-wider ${classColors[route.classification] || "text-muted-foreground"}`}>
                      {route.classification}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground/40">{route.path}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <Section className="border-t border-border bg-card/30">
        <p className="hash-text">SITEMAP-v1.0 · {routes.length} ROUTES · {groups.length} SECTIONS · GRGF DPI PLATFORM</p>
      </Section>
    </div>
  );
}
