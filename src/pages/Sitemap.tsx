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
  // Core
  { group: "Core Infrastructure", path: "/", title: "Home", description: "Executive overview, infrastructure pillars, and operational flow.", classification: "Level 1 — Public", icon: Home },
  { group: "Core Infrastructure", path: "/architecture", title: "System Architecture", description: "Six-layer architecture with event capture, policy engine, and federation layers.", classification: "Level 2 — Institutional", icon: Layers },
  { group: "Core Infrastructure", path: "/security-trust", title: "Security & Trust", description: "Zero Trust model, threat analysis, cryptographic sealing, and incident response.", classification: "Level 2 — Institutional", icon: Shield },
  { group: "Core Infrastructure", path: "/governance-framework", title: "Governance Framework", description: "Custodial neutrality, sovereign interoperability, and federation rules.", classification: "Level 2 — Institutional", icon: GitBranch },
  { group: "Core Infrastructure", path: "/ethics", title: "Risk & Ethics", description: "Anti-capture clauses, political neutrality safeguards, and whistleblower model.", classification: "Level 2 — Institutional", icon: AlertTriangle },

  // Deployment
  { group: "Deployment & Impact", path: "/deployment", title: "National Deployment", description: "24-month phased deployment with readiness assessment and budget modeling.", classification: "Level 2 — Institutional", icon: Globe },
  { group: "Deployment & Impact", path: "/canada", title: "Canada Federal", description: "Tailored positioning for Treasury Board, OCIO, SSC, and EARB alignment.", classification: "Level 2 — Institutional", icon: Building2 },
  { group: "Deployment & Impact", path: "/impact", title: "Impact & ROI", description: "Procurement integrity modeling, audit efficiency, and 10-year fiscal projection.", classification: "Level 2 — Institutional", icon: BarChart3 },
  { group: "Deployment & Impact", path: "/stakeholders", title: "Stakeholder Solutions", description: "Role-specific value framing for Ministers, CIOs, Auditors, and Regulators.", classification: "Level 1 — Public", icon: Users },

  // Compliance & Legal
  { group: "Compliance & Legal", path: "/compliance", title: "Standards & Compliance", description: "ISO 27001, ISO 42001, ISO 37000, OECD AI, and World Bank DPI mapping.", classification: "Level 1 — Public", icon: CheckCircle },
  { group: "Compliance & Legal", path: "/dossier", title: "Executive Dossier", description: "Master binder structure, revenue model, and strategic roadmap.", classification: "Level 2 — Institutional", icon: FileText },
  { group: "Compliance & Legal", path: "/briefing", title: "Briefing Request", description: "Controlled Distribution Protocol with institutional access request.", classification: "Level 2 — Institutional", icon: Lock },
  { group: "Compliance & Legal", path: "/dpi-comparison", title: "DPI Comparison", description: "28-capability matrix comparing GRGF to traditional DPI systems.", classification: "Level 1 — Public", icon: BarChart3 },

  // Simulation
  { group: "Simulation & Demo", path: "/simulation", title: "Simulation Hub", description: "Interactive governance workflow demonstrations and mock environments.", classification: "Non-Authoritative", icon: Play },
  { group: "Simulation & Demo", path: "/simulator", title: "Simulator", description: "Live governance scenario simulation tool.", classification: "Non-Authoritative", icon: Play },
  { group: "Simulation & Demo", path: "/records", title: "Records", description: "Simulated record management interface.", classification: "Non-Authoritative", icon: FileText },
  { group: "Simulation & Demo", path: "/data-entry", title: "Data Entry", description: "Mock data entry workflows for demonstration.", classification: "Non-Authoritative", icon: Cpu },
  { group: "Simulation & Demo", path: "/workflow", title: "Workflow Demo", description: "Step-by-step governance workflow visualization.", classification: "Non-Authoritative", icon: GitBranch },
  { group: "Simulation & Demo", path: "/api-mock", title: "API Mock", description: "Simulated API endpoints for integration testing.", classification: "Non-Authoritative", icon: Cpu },
  { group: "Simulation & Demo", path: "/verification", title: "Verification", description: "Record verification portal for integrity checks.", classification: "Non-Authoritative", icon: Shield },

  // Governance Pages
  { group: "Governance Deep-Dives", path: "/systems", title: "Systems", description: "Governance Operating System component documentation.", classification: "Level 1 — Public", icon: Cpu },
  { group: "Governance Deep-Dives", path: "/processes", title: "Processes", description: "Core governance processes and lifecycle management.", classification: "Level 1 — Public", icon: GitBranch },
  { group: "Governance Deep-Dives", path: "/blueprints", title: "Technical Blueprints", description: "Detailed technical specifications and deployment blueprints.", classification: "Level 2 — Institutional", icon: Layers },
  { group: "Governance Deep-Dives", path: "/pilot", title: "Pilot Programme", description: "90-day controlled pilot with institutional readiness validation.", classification: "Level 2 — Institutional", icon: Globe },
  { group: "Governance Deep-Dives", path: "/academy", title: "Academy", description: "Professional certification: Foundations, Practitioner, Steward/Architect.", classification: "Level 1 — Public", icon: GraduationCap },

  // Archive
  { group: "Digital Archive", path: "/archive", title: "Archive Overview", description: "Central document archive organized by stakeholder roles.", classification: "Level 1 — Public", icon: Archive },
  { group: "Digital Archive", path: "/archive/public", title: "Public Archive", description: "Publicly accessible governance documents and summaries.", classification: "Level 1 — Public", icon: Archive },
  { group: "Digital Archive", path: "/archive/government", title: "Government Archive", description: "Policy-grade documents for government and multilateral review.", classification: "Level 2 — Institutional", icon: Building2 },
  { group: "Digital Archive", path: "/archive/partners", title: "Partner Archive", description: "Technical integration packages for partners and integrators.", classification: "Level 2 — Institutional", icon: Users },
  { group: "Digital Archive", path: "/archive/legal-ip", title: "Legal & IP Archive", description: "Patent documentation, licensing, and IP materials.", classification: "Level 3 — NDA Required", icon: Scale },
  { group: "Digital Archive", path: "/archive/master-index", title: "Master Index", description: "49-document authoritative index across 10 sections.", classification: "Level 1 — Public", icon: FileText },
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
