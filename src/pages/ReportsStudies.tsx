import { useViewMode } from "@/contexts/ViewModeContext";
import { FileText, Download, FileSpreadsheet, Archive, BookOpen, Shield, Landmark, BarChart3, Cpu, Scale } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

interface DocItem {
  name: string;
  file: string;
  type: "report" | "study" | "policy" | "data" | "kit" | "diagram";
  category: string;
  description: string;
}

const documents: DocItem[] = [
  // Studies & Analysis
  { name: "Feasibility Study", file: "Feasibility_Study.md", type: "study", category: "Studies & Analysis", description: "Technical, legal, and financial viability assessment for sovereign-grade DPI." },
  { name: "Privacy Impact Assessment", file: "Privacy_Impact_Assessment.md", type: "study", category: "Studies & Analysis", description: "Full PIA covering data flows, risk treatment, and regulatory alignment." },
  { name: "Valuation – 5-Year Scenarios", file: "Valuation_5yr_Scenarios.md", type: "study", category: "Studies & Analysis", description: "Conservative, moderate, and aggressive ROI projections over five years." },

  // Architecture & Technical
  { name: "System Architecture & Catalog", file: "System_Architecture_and_Catalog.pdf", type: "diagram", category: "Architecture & Technical", description: "End-to-end system architecture diagrams and component catalog." },
  { name: "Data Flow Architecture", file: "1_Data_Flow_Architecture.md", type: "diagram", category: "Architecture & Technical", description: "Source-to-custody data flows including minimization and boundary controls." },
  { name: "Interoperability Profile", file: "5_Interoperability_Profile.md", type: "diagram", category: "Architecture & Technical", description: "Canonical schemas, APIs, versioning, and conformance testing." },
  { name: "Phase 3 Visual Operating Model", file: "GRGF_Phase_3_Visual_Operating_Model.pdf", type: "diagram", category: "Architecture & Technical", description: "Visual representation of the operational governance model." },

  // Security & Risk
  { name: "Threat Model (STRIDE)", file: "2_Threat_Model_STRIDE.md", type: "report", category: "Security & Risk", description: "Spoofing, tampering, repudiation, information disclosure, DoS, and elevation analysis." },
  { name: "Connector Minimization Standard", file: "3_Connector_Minimization_Standard.md", type: "policy", category: "Security & Risk", description: "Data minimization standards for system connectors and integrations." },
  { name: "Resilience & Disaster Recovery", file: "6_Resilience_RTO_RPO_DR.md", type: "report", category: "Security & Risk", description: "RTO/RPO definitions, integrity recovery, and offline survivability." },
  { name: "Incident Response Plan", file: "Incident_Response_Plan.md", type: "policy", category: "Security & Risk", description: "Formal incident classification, escalation, and resolution procedures." },
  { name: "Independent Assurance Plan", file: "8_Independent_Assurance_Plan.md", type: "report", category: "Security & Risk", description: "External audits, penetration testing, and SOC-equivalent assurance." },

  // Governance & Policy
  { name: "Data Protection & Access Control", file: "Data_Protection_and_Access_Control_Policy.md", type: "policy", category: "Governance & Policy", description: "Access control policies, classification levels, and data protection measures." },
  { name: "Chain of Custody & Legal Hold", file: "4_Chain_of_Custody_OPS.md", type: "policy", category: "Governance & Policy", description: "Evidence custody, integrity, disclosure, and court survivability." },
  { name: "Records Retention Schedule", file: "Records_Retention_Schedule.md", type: "policy", category: "Governance & Policy", description: "Retention periods, disposal authorities, and archival triggers." },
  { name: "Procurement Strategy (PSPC)", file: "Procurement_Strategy_PSPC.md", type: "policy", category: "Governance & Policy", description: "Public Services and Procurement Canada alignment strategy." },

  // Executive & Institutional
  { name: "Master Binder v1", file: "GRGF_Master_Binder_v1.md", type: "report", category: "Executive & Institutional", description: "Definitive frozen edition for institutional submission (11 sections)." },
  { name: "Executive Decision Memo", file: "Executive_Decision_Memo.md", type: "report", category: "Executive & Institutional", description: "Formal decision memorandum for executive governance approval." },
  { name: "Oral Defense Briefing Deck", file: "Oral_Defense_Briefing_Deck.md", type: "report", category: "Executive & Institutional", description: "Structured briefing for oral defense and committee presentation." },
  { name: "Public Overview", file: "GRGF_Public_Overview.md", type: "report", category: "Executive & Institutional", description: "Public-facing overview of the GRGF framework and mission." },
  { name: "Authoritative Master Record", file: "Authoritative_Master_Record_FREEZE.md", type: "report", category: "Executive & Institutional", description: "Frozen authoritative record with SHA-256 integrity verification." },

  // Deployment & Pilot
  { name: "Pilot SOW & Acceptance Criteria", file: "7_Pilot_SOW_Acceptance.md", type: "report", category: "Deployment & Pilot", description: "Scope, milestones, security/privacy gates, and success metrics." },
  { name: "Full Pilot Kit (ZIP)", file: "GRGF_DPI_Pilot_Kit_v0.1_INSTITUTION_READY.zip", type: "kit", category: "Deployment & Pilot", description: "Institution-ready pilot deployment package v0.1." },
  { name: "DPI Deploy Kit", file: "dpi_deploy_kit_20260130_231918.zip", type: "kit", category: "Deployment & Pilot", description: "Deployment automation package with configuration templates." },
  { name: "Phase 5 Public Transparency", file: "GRGF_Phase_5_Public_Transparency.zip", type: "kit", category: "Deployment & Pilot", description: "Public transparency and disclosure package." },

  // Data & Metrics
  { name: "DPI Value Breakdown", file: "dpi_value_breakdown_expected.csv", type: "data", category: "Data & Metrics", description: "Detailed breakdown of expected DPI value metrics." },
  { name: "Canada & World Totals", file: "dpi_value_canada_world_totals.csv", type: "data", category: "Data & Metrics", description: "Comparative value totals for Canada and global deployment." },
  { name: "Common Breakdown Expected", file: "dpi_value_common_breakdown_expected.csv", type: "data", category: "Data & Metrics", description: "Standardized value breakdown across common DPI categories." },
  { name: "Two-Week Backlog", file: "optimum_two_week_backlog.csv", type: "data", category: "Data & Metrics", description: "Optimized sprint backlog for pilot execution planning." },

  // Integrity
  { name: "SHA-256 Manifest", file: "SHA256_MANIFEST.txt", type: "report", category: "Integrity & Verification", description: "Cryptographic hash manifest for document integrity verification." },
  { name: "SHA-256 Manifest v4 (PDF)", file: "SHA256_MANIFEST_v4.pdf", type: "report", category: "Integrity & Verification", description: "Formatted PDF version of the integrity verification manifest." },
];

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Studies & Analysis": BarChart3,
  "Architecture & Technical": Cpu,
  "Security & Risk": Shield,
  "Governance & Policy": Scale,
  "Executive & Institutional": Landmark,
  "Deployment & Pilot": Archive,
  "Data & Metrics": FileSpreadsheet,
  "Integrity & Verification": BookOpen,
};

const typeColors: Record<string, string> = {
  report: "bg-accent/15 text-accent",
  study: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  policy: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  data: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  kit: "bg-purple-500/15 text-purple-600 dark:text-purple-400",
  diagram: "bg-rose-500/15 text-rose-600 dark:text-rose-400",
};

const categories = [...new Set(documents.map((d) => d.category))];

export default function ReportsStudies() {
  const { isPlain } = useViewMode();

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <FadeIn>
        <header className="space-y-3">
          <p className="text-overline font-mono text-accent tracking-widest">INSTITUTIONAL REPOSITORY</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            Reports & Studies
          </h1>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            {isPlain
              ? "All official reports, feasibility studies, architecture diagrams, and policy documents produced under the GRGF framework — available for download and review."
              : "Comprehensive repository of institutional-grade deliverables including STRIDE threat models, PIA assessments, SHA-256 integrity manifests, and deployment SOWs. All documents maintain chain-of-custody provenance."}
          </p>
        </header>
      </FadeIn>

      {/* Summary stats */}
      <FadeIn delay={100}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Documents", value: documents.length },
            { label: "Categories", value: categories.length },
            { label: "Downloadable Kits", value: documents.filter((d) => d.type === "kit").length },
            { label: "Policy Documents", value: documents.filter((d) => d.type === "policy").length },
          ].map((stat) => (
            <div key={stat.label} className="bg-card border border-border p-4 text-center">
              <p className="text-2xl font-bold text-accent font-mono">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Categories */}
      {categories.map((category, idx) => {
        const Icon = categoryIcons[category] || FileText;
        const items = documents.filter((d) => d.category === category);

        return (
          <FadeIn key={category} delay={150 + idx * 50}>
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-border pb-2">
                <Icon className="h-5 w-5 text-accent" />
                <h2 className="font-serif text-xl font-semibold text-foreground">{category}</h2>
                <span className="text-xs text-muted-foreground font-mono ml-auto">{items.length} document{items.length !== 1 ? "s" : ""}</span>
              </div>

              <div className="grid gap-3">
                {items.map((doc) => (
                  <a
                    key={doc.file}
                    href={`/documents/${doc.file}`}
                    download
                    className="group flex items-start gap-4 p-4 bg-card border border-border hover:border-accent/40 hover:bg-accent/5 transition-all duration-200"
                  >
                    <FileText className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                          {doc.name}
                        </h3>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${typeColors[doc.type]}`}>
                          {doc.type.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{doc.description}</p>
                      <p className="text-[10px] font-mono text-muted-foreground/50 mt-1">{doc.file}</p>
                    </div>
                    <Download className="h-4 w-4 text-muted-foreground/40 group-hover:text-accent transition-colors shrink-0 mt-1" />
                  </a>
                ))}
              </div>
            </section>
          </FadeIn>
        );
      })}
    </div>
  );
}
