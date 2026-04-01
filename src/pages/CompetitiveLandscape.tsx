import { PageHeader, Section } from "@/components/PageComponents";
import { PDFExportButton } from "@/components/PDFExportButton";
import { useViewMode } from "@/contexts/ViewModeContext";
import { FadeIn } from "@/components/FadeIn";
import { Card } from "@/components/ui/card";
import {
  Shield, Globe, Database, AlertTriangle, Check, X, Minus,
  Award, Layers, FileCheck, Lock, Zap, Network, BarChart3,
  Building2, Eye, GitBranch, Search,
} from "lucide-react";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

/* ── Data ── */

interface CompetitorProfile {
  name: string;
  origin: string;
  type: string;
  what: string;
  whyNot: string;
  icon: React.ReactNode;
}

const competitors: CompetitorProfile[] = [
  {
    name: "X-Road",
    origin: "Estonia / Finland",
    type: "Secure Data Exchange Layer",
    what: "Enables encrypted, authenticated data exchange between government information systems via a distributed architecture.",
    whyNot: "Data pipe only — no governance record storage, no omission detection, no integrity ledger, no authority binding.",
    icon: <Network className="h-5 w-5" />,
  },
  {
    name: "MOSIP",
    origin: "India / IIIT-B",
    type: "Digital Identity Platform",
    what: "Modular, open-source digital identity platform for national ID programs with biometric enrollment and authentication.",
    whyNot: "Identity layer (DPI Layer 1) only — no governance event recording, no audit evidence backbone, no omission tracking.",
    icon: <Shield className="h-5 w-5" />,
  },
  {
    name: "OpenCRVS",
    origin: "Plan International",
    type: "Civil Registration System",
    what: "Open-source platform for digitizing civil registration and vital statistics (births, deaths, marriages).",
    whyNot: "Domain-specific registry for vital events — not a governance-wide record-of-record system. No cross-institutional evidence layer.",
    icon: <FileCheck className="h-5 w-5" />,
  },
  {
    name: "GovStack",
    origin: "ITU / Estonia / Germany",
    type: "DPI Building Block Specifications",
    what: "Defines reusable building-block specifications for e-government services (identity, payments, messaging, consent).",
    whyNot: "Specification framework, not an execution-time governance evidence layer. No append-only ledger or hash-chain integrity.",
    icon: <Layers className="h-5 w-5" />,
  },
  {
    name: "Palantir Foundry",
    origin: "United States",
    type: "Data Integration & Analytics",
    what: "Enterprise data platform for integration, analysis, and operational decision-making across large datasets.",
    whyNot: "Intelligence/analytics platform — interprets data rather than preserving governance evidence. Not append-only, not sovereignty-preserving.",
    icon: <Database className="h-5 w-5" />,
  },
  {
    name: "ServiceNow",
    origin: "United States",
    type: "Enterprise Workflow Automation",
    what: "Cloud-based platform for IT service management, workflow automation, and enterprise operations.",
    whyNot: "Workflow engine with mutable records — no cryptographic evidence backbone, no omission detection, no governance integrity guarantee.",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "OpenGovChain",
    origin: "Philippines",
    type: "Blockchain for Open Contracting",
    what: "Open-source platform implementing OCDS standards on blockchain for procurement and budget transparency.",
    whyNot: "Procurement transparency only — limited to contracting data. No institutional omission detection, no cross-sector governance record system.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    name: "Lumen Blockchain",
    origin: "Global",
    type: "Blockchain-as-a-Service",
    what: "BaaS platform combining public-chain transparency with private-layer compliance for governments and enterprises.",
    whyNot: "Generic blockchain infrastructure — no governance-specific semantics, no authority binding, no record-of-omission capability.",
    icon: <Lock className="h-5 w-5" />,
  },
  {
    name: "Certen",
    origin: "Global (DeFi)",
    type: "Governance Layer for Digital Finance",
    what: "On-chain governance and identity layer for cross-chain DeFi operations, launching mainnet Q2 2026.",
    whyNot: "Crypto/DeFi-specific — designed for digital finance governance, not public sector institutional accountability.",
    icon: <GitBranch className="h-5 w-5" />,
  },
];

interface UniqueCapability {
  name: string;
  description: string;
  competitors: string;
  icon: React.ReactNode;
}

const uniqueCapabilities: UniqueCapability[] = [
  {
    name: "Record-of-Omission",
    description: "Formally records what institutions failed to do — missed deadlines, uninvestigated complaints, unenforced regulations. Every other system only records what was done.",
    competitors: "0 of 9 systems found globally",
    icon: <AlertTriangle className="h-5 w-5 text-ms-blue" />,
  },
  {
    name: "Authority Binding at Record Level",
    description: "Ties every governance event to the specific legal mandate, delegation chain, and institutional authority that authorized (or should have authorized) it.",
    competitors: "0 of 9 systems found globally",
    icon: <Shield className="h-5 w-5 text-ms-blue" />,
  },
  {
    name: "Governance Record-of-Record Architecture",
    description: "Not a registry, not a workflow tool, not an analytics system. The evidence backbone that sits beneath all of them. This category did not exist before GRGF.",
    competitors: "0 of 9 systems found globally — new category",
    icon: <Database className="h-5 w-5 text-ms-blue" />,
  },
  {
    name: "Deterministic Denial Explanation",
    description: "When verification fails, GRGF explains why cryptographically — not just 'invalid.' Provides structured, machine-readable denial reasons.",
    competitors: "0 of 9 systems found globally",
    icon: <FileCheck className="h-5 w-5 text-ms-blue" />,
  },
  {
    name: "Cross-Jurisdiction Federation with Sovereign Control",
    description: "Federated checkpoint witnessing across sovereign nodes while each jurisdiction retains full data sovereignty. X-Road does data exchange, not governance evidence federation.",
    competitors: "0 of 9 systems found globally (X-Road partial for data exchange only)",
    icon: <Network className="h-5 w-5 text-ms-blue" />,
  },
];

interface PatentEntry {
  id: string;
  title: string;
  scope: string;
  relevance: string;
}

const patentLandscape: PatentEntry[] = [
  { id: "US20170236120A1", title: "Accountability in Distributed Ledger Systems", scope: "Generic blockchain accountability (2017)", relevance: "No governance semantics, no omission detection" },
  { id: "US10114980B2", title: "Data Integrity via Blockchain Network", scope: "Generic data integrity verification (2018)", relevance: "No authority binding, no institutional governance" },
  { id: "WO2021141929A1", title: "Systems for Compliance Checks", scope: "Attribute-based compliance (2021)", relevance: "Not governance-specific, no record-of-record" },
  { id: "EP3687107A1", title: "Information Assurance via Integrity Blockchain", scope: "Identity-resilient blockchain (2020)", relevance: "Security-focused, no governance event model" },
  { id: "US11093558B2", title: "Accountability of Blockchain Queries", scope: "Query accountability in distributed ledgers", relevance: "Query-level only, not institutional governance" },
];

const dimensionVerdict = [
  { dimension: "Direct Competitor", status: "none" as const, detail: "No system found globally that replicates GRGF's governance record-of-record architecture" },
  { dimension: "Omission Detection", status: "sole" as const, detail: "GRGF is the only system in the world that formally records institutional omissions" },
  { dimension: "Governance Record-of-Record", status: "sole" as const, detail: "New category created by GRGF — no predecessor or equivalent exists" },
  { dimension: "Authority Binding", status: "sole" as const, detail: "No system ties governance events to legal mandate and delegation chains at the record level" },
  { dimension: "Patent Protection", status: "sole" as const, detail: "Canadian Patent CA 3,300,102 occupies uncontested territory in governance integrity space" },
  { dimension: "Partial Overlap", status: "adjacent" as const, detail: "X-Road (data exchange) and OpenCRVS (civil records) solve different problems in adjacent categories" },
];

function VerdictBadge({ status }: { status: "none" | "sole" | "adjacent" }) {
  if (status === "none") return <span className="px-2 py-0.5 rounded-full bg-ms-green/10 text-ms-green text-[10px] font-semibold">NONE FOUND</span>;
  if (status === "sole") return <span className="px-2 py-0.5 rounded-full bg-ms-blue/10 text-ms-blue text-[10px] font-semibold">GRGF ONLY</span>;
  return <span className="px-2 py-0.5 rounded-full bg-ms-yellow/10 text-ms-yellow text-[10px] font-semibold">ADJACENT</span>;
}

/* ── Main ── */
export default function CompetitiveLandscape() {
  const { isPlain } = useViewMode();

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        classification="Public"
        version="1.0.0"
        title="International Competitive Landscape"
        subtitle="Comprehensive global analysis confirming GRGF occupies a unique, uncontested category in the governance technology landscape. No direct equivalent exists."
        badge="Strategic Intelligence"
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <PDFExportButton filename="GRGF_Competitive_Landscape" label="Export as PDF" />
        </div>
      </PageHeader>

      {/* Executive Verdict */}
      <Section title="Executive Verdict" className="border-b border-border">
        <FadeIn>
          <Card className="p-6 border-ms-blue/20 bg-ms-blue/5 max-w-4xl">
            <div className="flex items-start gap-3">
              <Award className="h-6 w-6 text-ms-blue mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-sm">No Direct Competitor Exists Globally</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  After comprehensive international search across DPI ecosystems, blockchain governance platforms, GovTech systems,
                  enterprise platforms, patent databases, and academic research — <strong>no system replicates GRGF's governance
                  record-of-record architecture</strong>. GRGF invented a category that has adjacent systems solving different problems,
                  but no competitors solving the same problem.
                </p>
              </div>
            </div>
          </Card>

          <div className="grid gap-3 mt-6 max-w-5xl">
            {dimensionVerdict.map((d) => (
              <div key={d.dimension} className="flex items-center gap-4 p-3 rounded-lg border border-border bg-card">
                <div className="w-44 flex-shrink-0">
                  <span className="text-xs font-semibold">{d.dimension}</span>
                </div>
                <VerdictBadge status={d.status} />
                <span className="text-xs text-muted-foreground">{d.detail}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Five Unique Capabilities */}
      <Section title="Five Capabilities Unique to GRGF — Found Nowhere Else" className="border-b border-border bg-muted/30">
        <FadeIn>
          <div className="grid gap-4 max-w-5xl md:grid-cols-2 lg:grid-cols-3">
            {uniqueCapabilities.map((cap) => (
              <Card key={cap.name} className="p-5 border-border hover:border-ms-blue/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  {cap.icon}
                  <h4 className="text-xs font-bold">{cap.name}</h4>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{cap.description}</p>
                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-[10px] font-mono text-ms-blue">{cap.competitors}</span>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Systems Analyzed */}
      <Section title="Systems Analyzed — Why They Are Not GRGF" className="border-b border-border">
        <FadeIn>
          <div className="space-y-4 max-w-5xl">
            {competitors.map((c) => (
              <Card key={c.name} className="p-5 border-border">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted flex-shrink-0">{c.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h4 className="text-sm font-bold">{c.name}</h4>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{c.origin}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">{c.type}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed"><strong>What it does:</strong> {c.what}</p>
                    <p className="text-xs mt-2 leading-relaxed">
                      <span className="text-ms-red font-semibold">Why it's not GRGF:</span>{" "}
                      <span className="text-muted-foreground">{c.whyNot}</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* Capability Comparison Matrix */}
      <Section title="Structural Capability Matrix" className="border-b border-border bg-muted/30">
        <FadeIn>
          <div className="overflow-x-auto max-w-6xl">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-[10px] font-bold w-56">Capability</TableHead>
                  <TableHead className="text-[10px] font-bold text-center text-ms-blue">GRGF</TableHead>
                  <TableHead className="text-[10px] text-center">X-Road</TableHead>
                  <TableHead className="text-[10px] text-center">MOSIP</TableHead>
                  <TableHead className="text-[10px] text-center">GovStack</TableHead>
                  <TableHead className="text-[10px] text-center">OpenCRVS</TableHead>
                  <TableHead className="text-[10px] text-center">Palantir</TableHead>
                  <TableHead className="text-[10px] text-center">ServiceNow</TableHead>
                  <TableHead className="text-[10px] text-center">OpenGovChain</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { cap: "Append-only immutable storage", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: "p", palantir: false, servicenow: false, opengov: "p" },
                  { cap: "Cryptographic hash-chain sealing", grgf: true, xroad: "p", mosip: "p", govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: true },
                  { cap: "Record-of-omission detection", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Authority binding at record level", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Governance record-of-record", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Deterministic denial explanation", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Proof-of-absence verification", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Cross-jurisdiction federation", grgf: true, xroad: true, mosip: false, govstack: "p", opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Sovereign node architecture", grgf: true, xroad: true, mosip: true, govstack: true, opencrvs: "p", palantir: false, servicenow: false, opengov: false },
                  { cap: "Post-quantum readiness roadmap", grgf: true, xroad: false, mosip: false, govstack: false, opencrvs: false, palantir: false, servicenow: false, opengov: false },
                  { cap: "Multi-sector governance coverage", grgf: true, xroad: false, mosip: false, govstack: "p", opencrvs: false, palantir: "p", servicenow: "p", opengov: false },
                  { cap: "Non-invasive DPI integration", grgf: true, xroad: true, mosip: "p", govstack: true, opencrvs: "p", palantir: "p", servicenow: "p", opengov: "p" },
                ].map((row) => (
                  <TableRow key={row.cap} className="border-border">
                    <TableCell className="text-[11px] font-medium">{row.cap}</TableCell>
                    {[row.grgf, row.xroad, row.mosip, row.govstack, row.opencrvs, row.palantir, row.servicenow, row.opengov].map((v, i) => (
                      <TableCell key={i} className="text-center">
                        {v === true ? <Check className="h-3.5 w-3.5 text-ms-green mx-auto" /> :
                         v === "p" ? <Minus className="h-3.5 w-3.5 text-ms-yellow mx-auto" /> :
                         <X className="h-3.5 w-3.5 text-ms-red/50 mx-auto" />}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-[10px] text-muted-foreground/50 mt-4 max-w-4xl">
            <Check className="h-3 w-3 text-ms-green inline mr-1" /> Full capability &nbsp;
            <Minus className="h-3 w-3 text-ms-yellow inline mr-1" /> Partial / via extensions &nbsp;
            <X className="h-3 w-3 text-ms-red/50 inline mr-1" /> Not available
          </p>
        </FadeIn>
      </Section>

      {/* Patent Landscape */}
      <Section title="International Patent Landscape" className="border-b border-border">
        <FadeIn>
          <Card className="p-5 border-ms-green/20 bg-ms-green/5 max-w-4xl mb-6">
            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-ms-green mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-xs font-bold">Canadian Patent CA 3,300,102 — Uncontested Territory</h4>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                  Comprehensive patent search across Google Patents, USPTO, EPO, and WIPO databases confirms that no existing
                  patent addresses governance omission detection, authority binding at the record level, or record-of-record
                  infrastructure for institutional accountability. GRGF's patent occupies genuinely uncontested IP space.
                </p>
              </div>
            </div>
          </Card>

          <div className="overflow-x-auto max-w-5xl">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="text-[10px] font-bold">Patent ID</TableHead>
                  <TableHead className="text-[10px] font-bold">Title</TableHead>
                  <TableHead className="text-[10px] font-bold">Scope</TableHead>
                  <TableHead className="text-[10px] font-bold">Why Not Equivalent</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patentLandscape.map((p) => (
                  <TableRow key={p.id} className="border-border">
                    <TableCell className="text-[10px] font-mono">{p.id}</TableCell>
                    <TableCell className="text-[11px]">{p.title}</TableCell>
                    <TableCell className="text-[11px] text-muted-foreground">{p.scope}</TableCell>
                    <TableCell className="text-[11px] text-ms-red/80">{p.relevance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </FadeIn>
      </Section>

      {/* Category Positioning */}
      <Section title="Category Positioning — Where GRGF Sits" className="border-b border-border bg-muted/30">
        <FadeIn>
          <div className="max-w-4xl space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { label: "Layer 1 — Identity", systems: "MOSIP, National eID", grgf: false, desc: "Who you are" },
                { label: "Layer 2 — Data Exchange", systems: "X-Road, GovStack", grgf: false, desc: "Moving data between systems" },
                { label: "Layer 3 — Governance Integrity", systems: "GRGF (sole occupant)", grgf: true, desc: "Proving what institutions did or failed to do" },
              ].map((layer) => (
                <Card key={layer.label} className={`p-5 ${layer.grgf ? "border-ms-blue/40 bg-ms-blue/5" : "border-border"}`}>
                  <h4 className={`text-xs font-bold ${layer.grgf ? "text-ms-blue" : ""}`}>{layer.label}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1">{layer.desc}</p>
                  <p className="text-[10px] font-mono mt-3 text-muted-foreground/70">{layer.systems}</p>
                  {layer.grgf && (
                    <div className="mt-3 pt-3 border-t border-ms-blue/20">
                      <span className="text-[10px] text-ms-blue font-semibold">★ New category — created by GRGF</span>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <Card className="p-5 border-border">
              <h4 className="text-xs font-bold mb-3">Adjacent Systems — Not Competitors</h4>
              <div className="grid gap-2 md:grid-cols-2">
                {[
                  { system: "X-Road", relationship: "Complementary — GRGF can sit atop X-Road as the integrity layer for data exchanges" },
                  { system: "MOSIP", relationship: "Complementary — GRGF records governance events from identity processes without replacing them" },
                  { system: "GovStack", relationship: "Complementary — GRGF could serve as a GovStack building block for governance integrity" },
                  { system: "OpenCRVS", relationship: "Complementary — GRGF could provide evidence backbone for civil registration decisions" },
                ].map((r) => (
                  <div key={r.system} className="flex items-start gap-2 p-2 rounded bg-muted/50">
                    <Check className="h-3.5 w-3.5 text-ms-green mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] font-semibold">{r.system}</span>
                      <p className="text-[10px] text-muted-foreground">{r.relationship}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* Methodology */}
      <Section title="Search Methodology & Sources" className="border-b border-border">
        <FadeIn>
          <div className="max-w-4xl space-y-4">
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { source: "DPI Ecosystem Analysis", detail: "GovStack, X-Road, MOSIP, DPGA, OpenCRVS — technical documentation and architectural specifications" },
                { source: "Enterprise Platform Review", detail: "Microsoft Azure, Palantir Foundry, AWS, ServiceNow, IBM — enterprise governance capabilities" },
                { source: "Blockchain Governance Search", detail: "OpenGovChain, Lumen, Certen, Afronomy Chain — blockchain-based government transparency platforms" },
                { source: "Patent Database Search", detail: "Google Patents, USPTO, EPO, WIPO — governance integrity, omission detection, institutional accountability" },
                { source: "Academic Research", detail: "Frontiers in Blockchain, IEEE, ACM — governance record systems, audit trail architectures" },
                { source: "GovTech Market Scan", detail: "OpenGov, Accela, Socrata, CivicPlus — government technology platforms and e-governance systems" },
              ].map((s) => (
                <div key={s.source} className="p-3 rounded-lg border border-border bg-card">
                  <div className="flex items-center gap-2">
                    <Search className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-[11px] font-semibold">{s.source}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{s.detail}</p>
                </div>
              ))}
            </div>

            <Card className="p-4 bg-muted/50 border-border">
              <h4 className="text-[11px] font-semibold mb-2">Methodology & Neutrality Statement</h4>
              <p className="text-[10px] text-muted-foreground/60 leading-relaxed">
                This analysis evaluates structural architectural capabilities, not product quality, deployment maturity, or organizational
                effectiveness. Assessments are based on publicly available documentation, technical specifications, published architecture
                documents, and patent filings as of Q1 2026. The analysis was conducted to identify whether any existing system globally
                replicates the governance record-of-record architecture invented by GRGF. Findings confirm no direct equivalent exists.
                This document is provided for institutional evaluation, investor review, and government submission purposes.
              </p>
            </Card>
          </div>
        </FadeIn>
      </Section>

      {/* Footer Attribution */}
      <div className="py-8 text-center border-t border-border">
        <p className="text-[10px] text-muted-foreground/40">
          Global Record Governance Framework — Invented and Owned by Tarek Wahid — Canadian Patent No. CA 3,300,102
        </p>
        <p className="text-[10px] text-muted-foreground/30 mt-1">
          Competitive Landscape Analysis Report No. GRGF-CLA-2026-001 · Classification: Public · Date: April 2026
        </p>
      </div>
    </div>
  );
}
