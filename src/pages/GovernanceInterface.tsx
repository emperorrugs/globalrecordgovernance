import { useState } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  FileText, Users, CheckCircle, Play, Shield, Lock, Globe, Layers,
  BarChart3, AlertTriangle, Building2, GitBranch, ArrowRight, Search,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ═══════════════════════════════════════════════
   MODE 1 — DOCUMENT NAVIGATOR
   ═══════════════════════════════════════════════ */

const documentSections = [
  {
    id: "arch",
    title: "System Architecture",
    classification: "Level 1 — Public",
    summary: "Six-layer technical architecture: Event Capture, Policy Decision Engine, Evidence Backbone, Cryptographic Anchoring, Verification API, and Federation & Interoperability.",
    path: "/architecture",
    icon: Layers,
  },
  {
    id: "sec",
    title: "Security & Trust Architecture",
    classification: "Level 2 — Institutional Review",
    summary: "Threat model addressing six primary attack vectors, zero-trust architecture, hash-chain integrity, incident response framework, and vulnerability disclosure program.",
    path: "/security-trust",
    icon: Shield,
  },
  {
    id: "gov",
    title: "Governance Framework",
    classification: "Level 1 — Public",
    summary: "Governance Operating System with deterministic policy enforcement, versioned governance rules, and structured accountability mechanisms.",
    path: "/governance-framework",
    icon: GitBranch,
  },
  {
    id: "ethics",
    title: "Governance Risk & Ethics",
    classification: "Level 1 — Public",
    summary: "Seven governance risk controls (GRE-01 through GRE-07), five anti-capture clauses (AC-01 through AC-05), and ethical positioning framework.",
    path: "/ethics",
    icon: AlertTriangle,
  },
  {
    id: "deploy",
    title: "National Deployment Model",
    classification: "Level 2 — Institutional Review",
    summary: "Three-phase deployment (Pilot → Cross-Ministry → National Federation) over 24 months. Budget modeling from $500K pilot to $15M national deployment.",
    path: "/deployment",
    icon: Globe,
  },
  {
    id: "roi",
    title: "Impact & ROI Modeling",
    classification: "Level 2 — Institutional Review",
    summary: "Conservative fiscal modeling: $1.51B net annual benefit (Canada archetype), 100% IRR, Year 1 payback. NPV analysis with sensitivity scenarios.",
    path: "/impact",
    icon: BarChart3,
  },
  {
    id: "compliance",
    title: "Standards & Compliance Mapping",
    classification: "Level 1 — Public",
    summary: "Alignment mapping to ISO 27001, ISO 42001, ISO 37000, OECD AI Principles, and World Bank DPI guidelines. Privacy-by-design framework.",
    path: "/compliance",
    icon: CheckCircle,
  },
  {
    id: "canada",
    title: "Canada Federal Deployment",
    classification: "Level 2 — Institutional Review",
    summary: "Canadian deployment archetype aligned with Treasury Board, PSPC, and CSE requirements. 90-day pilot program for single public institution.",
    path: "/canada",
    icon: Building2,
  },
  {
    id: "crp",
    title: "Controlled Distribution Protocol",
    classification: "Level 3 — NDA Required",
    summary: "Four classification levels governing institutional access. Formal identity verification, declaration of intent, and confidential release framework.",
    path: "/briefing",
    icon: Lock,
  },
];

function DocumentNavigator() {
  const [query, setQuery] = useState("");
  const filtered = documentSections.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.summary.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/50" />
          <input
            type="text"
            placeholder="Search documentation sections..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-border rounded-sm bg-background text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>
      <div className="space-y-3">
        {filtered.map((doc) => (
          <div key={doc.id} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-sm flex items-center justify-center">
                <doc.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h4 className="font-serif text-sm font-semibold text-foreground">{doc.title}</h4>
                  <span className={`text-[10px] font-mono tracking-wider shrink-0 px-2 py-0.5 rounded-sm ${
                    doc.classification.includes("Level 3")
                      ? "bg-destructive/10 text-destructive"
                      : doc.classification.includes("Level 2")
                      ? "bg-accent/10 text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {doc.classification}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-2">{doc.summary}</p>
                {doc.classification.includes("Level 3") ? (
                  <p className="text-[10px] font-mono text-destructive/70 tracking-wider">
                    CLASSIFIED UNDER GRGF CONTROLLED DISTRIBUTION PROTOCOL — INSTITUTIONAL REQUEST REQUIRED
                  </p>
                ) : (
                  <Link
                    to={doc.path}
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline"
                  >
                    Access Document <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="governance-card text-center py-8">
            <p className="text-sm text-muted-foreground">No documents match the current query.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MODE 2 — STAKEHOLDER BRIEFING
   ═══════════════════════════════════════════════ */

const stakeholderBriefs = [
  {
    role: "Minister / Senior Official",
    icon: Building2,
    challenge: "Governance decisions lack verifiable institutional memory. Actions and omissions are difficult to trace across administrations.",
    riskExposure: "Reputational and legal liability from undocumented governance decisions. Loss of institutional continuity during political transitions.",
    mechanism: "Immutable, timestamped record of every governance action and omission, providing continuous institutional accountability regardless of political transitions.",
    outcome: "Institutional credibility and measurable transparency with defensible governance record.",
    entryStep: "Authorize a 90-day pilot recording 3–5 decision types within a single ministry.",
  },
  {
    role: "CIO / CTO",
    icon: Layers,
    challenge: "Digital governance systems are fragmented, vendor-dependent, and lack interoperability standards.",
    riskExposure: "Vendor lock-in, integration failure risk, and inability to produce verifiable audit evidence from existing systems.",
    mechanism: "Modular, standards-based governance layer with documented APIs and standardized event schemas.",
    outcome: "Interoperable, secure, modular DPI layer with reduced integration costs and vendor independence.",
    entryStep: "Request technical architecture review and API integration assessment against existing national systems.",
  },
  {
    role: "Auditor / Inspector",
    icon: CheckCircle,
    challenge: "Audit evidence is manually collected, inconsistently structured, and difficult to verify independently.",
    riskExposure: "Incomplete audit coverage, undetectable record gaps, and inability to verify evidence integrity.",
    mechanism: "Pre-verified, cryptographically sealed audit trails with continuous compliance evidence.",
    outcome: "20–40% audit cycle reduction, 100% audit trail completeness, independent verification capability.",
    entryStep: "Conduct parallel audit trial: verify one governance process through both traditional and GRGF-assisted methods.",
  },
  {
    role: "Treasury / Fiscal Authority",
    icon: BarChart3,
    challenge: "Procurement leakage and governance integrity failures create fiscal exposure that is difficult to quantify.",
    riskExposure: "5–15% systemic procurement leakage. Inability to detect omissions in financial governance processes.",
    mechanism: "Continuous omission detection and deterministic policy enforcement across procurement workflows.",
    outcome: "Quantifiable fiscal risk mitigation. Even 0.3% integrity improvement offsets deployment cost.",
    entryStep: "Commission fiscal impact assessment using national procurement expenditure data.",
  },
  {
    role: "Multilateral Institution",
    icon: Globe,
    challenge: "Cross-border governance standards lack interoperability. Institutional trust is difficult to verify across jurisdictions.",
    riskExposure: "Due diligence costs scale with each bilateral engagement. No standardized governance verification.",
    mechanism: "Federation model enables cross-border record verification while preserving national sovereignty.",
    outcome: "Standardized governance verification, reduced due diligence costs, scalable trust framework.",
    entryStep: "Engage federation readiness assessment for 2–3 pilot nations under existing governance programs.",
  },
  {
    role: "Engineer / Integrator",
    icon: Layers,
    challenge: "Governance infrastructure lacks standardized APIs, event schemas, and integration patterns.",
    riskExposure: "Custom integration overhead, inconsistent data formats, and absence of deterministic testing.",
    mechanism: "Documented RESTful APIs, standardized JSON event schemas, and deterministic policy engine interfaces.",
    outcome: "Reduced development time, standardized integration patterns, clear technical documentation.",
    entryStep: "Access API specification and deploy sandbox environment for integration testing.",
  },
];

function StakeholderBriefing() {
  const [selected, setSelected] = useState<number | null>(null);
  const brief = selected !== null ? stakeholderBriefs[selected] : null;

  return (
    <div>
      <p className="text-xs text-muted-foreground mb-4">Select institutional role to receive structured decision briefing.</p>
      <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-6 mb-6">
        {stakeholderBriefs.map((s, i) => (
          <button
            key={s.role}
            onClick={() => setSelected(i)}
            className={`governance-card text-center cursor-pointer transition-all ${
              selected === i ? "border-accent ring-1 ring-accent" : ""
            }`}
          >
            <s.icon className="h-5 w-5 mx-auto mb-2 text-accent" />
            <p className="text-[11px] font-medium text-foreground leading-tight">{s.role}</p>
          </button>
        ))}
      </div>

      {brief && (
        <div className="governance-card border-l-2 border-l-accent animate-fade-in">
          <h4 className="font-serif text-base font-semibold mb-4">{brief.role} — Decision Briefing</h4>
          <div className="space-y-4">
            {[
              { label: "INSTITUTIONAL CHALLENGE", value: brief.challenge, color: "text-muted-foreground/60" },
              { label: "GOVERNANCE RISK EXPOSURE", value: brief.riskExposure, color: "text-destructive/60" },
              { label: "GRGF STRUCTURAL MECHANISM", value: brief.mechanism, color: "text-accent/70" },
              { label: "MEASURABLE OUTCOME", value: brief.outcome, color: "text-accent/70" },
              { label: "DEPLOYMENT ENTRY STEP", value: brief.entryStep, color: "text-accent/70" },
            ].map((field) => (
              <div key={field.label}>
                <p className={`text-[10px] font-mono ${field.color} uppercase tracking-wider mb-1`}>{field.label}</p>
                <p className="text-sm text-foreground leading-relaxed">{field.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {!brief && (
        <div className="governance-card text-center py-10">
          <p className="text-sm text-muted-foreground">Select an institutional role above to generate a structured decision briefing.</p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MODE 3 — COMPLIANCE MAPPING
   ═══════════════════════════════════════════════ */

const complianceData = [
  {
    standard: "ISO 27001",
    mappings: [
      { domain: "Information Security Policies (A.5)", mechanism: "Governance Operating System encodes and enforces security policies deterministically.", note: "Alignment — not certification claim" },
      { domain: "Asset Management (A.8)", mechanism: "All records classified, sealed, and tracked through immutable evidence backbone.", note: "Full structural alignment" },
      { domain: "Access Control (A.9)", mechanism: "Role-based access with policy-enforced authorization. No implicit trust.", note: "Full structural alignment" },
      { domain: "Cryptography (A.10)", mechanism: "SHA-256/512 sealing, Merkle integrity chains, key custody separation.", note: "Full structural alignment" },
      { domain: "Operations Security (A.12)", mechanism: "Append-only storage, tamper detection, integrity chain validation.", note: "Full structural alignment" },
    ],
  },
  {
    standard: "ISO 42001",
    mappings: [
      { domain: "Context (4.1)", mechanism: "GRGF uses no AI for governance decisions. All logic is deterministic.", note: "Explicit non-AI positioning" },
      { domain: "Risk Assessment (6.1)", mechanism: "Six-vector threat model with documented mitigations.", note: "Full structural alignment" },
      { domain: "AI Operation (8.4)", mechanism: "Not applicable — GRGF rejects probabilistic decision logic.", note: "Explicit exclusion documented" },
    ],
  },
  {
    standard: "ISO 37000",
    mappings: [
      { domain: "Purpose (Principle 1)", mechanism: "Governance integrity infrastructure — not service delivery.", note: "Full structural alignment" },
      { domain: "Accountability (Principle 3)", mechanism: "Human accountability enforced. All decisions traceable.", note: "Full structural alignment" },
      { domain: "Transparency (Principle 5)", mechanism: "Public verification without content exposure.", note: "Full structural alignment" },
    ],
  },
  {
    standard: "OECD AI Principles",
    mappings: [
      { domain: "Transparency", mechanism: "All decisions produce machine-readable and human-readable explanations.", note: "Full structural alignment" },
      { domain: "Robustness & Security", mechanism: "Zero Trust architecture with tamper-evident sealing.", note: "Full structural alignment" },
      { domain: "Accountability", mechanism: "Every action, denial, and omission is logged and verifiable.", note: "Full structural alignment" },
    ],
  },
  {
    standard: "World Bank DPI",
    mappings: [
      { domain: "Interoperability", mechanism: "Standardized event schemas, RESTful APIs, federation protocols.", note: "Full structural alignment" },
      { domain: "Trust & Safety", mechanism: "Cryptographic integrity, privacy-by-design, controlled distribution.", note: "Full structural alignment" },
      { domain: "Governance", mechanism: "Custodial neutrality, sovereign interoperability, anti-capture.", note: "Full structural alignment" },
    ],
  },
];

function ComplianceMapping() {
  const [selectedStandard, setSelectedStandard] = useState(0);
  const standard = complianceData[selectedStandard];

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {complianceData.map((s, i) => (
          <button
            key={s.standard}
            onClick={() => setSelectedStandard(i)}
            className={`px-4 py-2 text-xs font-medium rounded-sm border transition-colors ${
              selectedStandard === i
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-foreground border-border hover:bg-muted"
            }`}
          >
            {s.standard}
          </button>
        ))}
      </div>

      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium w-1/4">Standard Domain</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium w-1/2">GRGF Mechanism</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium w-1/4">Notes</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {standard.mappings.map((m) => (
              <tr key={m.domain} className="border-b border-border/50">
                <td className="py-2.5 pr-4 font-medium text-foreground">{m.domain}</td>
                <td className="py-2.5 pr-4">{m.mechanism}</td>
                <td className="py-2.5 text-[10px] font-mono text-accent/70">{m.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 governance-card border-l-2 border-l-accent">
        <p className="text-[10px] font-mono text-muted-foreground/60 tracking-wider">
          ALIGNMENT MAPPING ONLY — THESE MAPPINGS DO NOT CONSTITUTE FORMAL CERTIFICATION OR THIRD-PARTY AUDIT CONFIRMATION
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MODE 4 — POLICY SIMULATION (DEMO ONLY)
   ═══════════════════════════════════════════════ */

interface SimulationResult {
  allow: boolean;
  policy_id: string;
  machine_reason: string;
  human_reason: string;
  event_normalized: string;
}

const policyRules: Record<string, { allow: boolean; machine_reason: string; human_reason: string }> = {
  unauthorized: { allow: false, machine_reason: "unauthorized_role", human_reason: "Actor lacks required authority context for this governance action." },
  expired: { allow: false, machine_reason: "authority_expired", human_reason: "Authority context has expired. Renewal or re-authorization required." },
  undocumented: { allow: false, machine_reason: "missing_documentation", human_reason: "Required documentation not provided. Governance rules require supporting evidence." },
  override: { allow: false, machine_reason: "override_denied", human_reason: "Administrative override rejected. No override pathway exists outside governance protocols." },
  valid: { allow: true, machine_reason: "policy_satisfied", human_reason: "All governance conditions met. Action recorded and sealed." },
};

function PolicySimulation() {
  const [eventInput, setEventInput] = useState("");
  const [result, setResult] = useState<SimulationResult | null>(null);

  const runSimulation = () => {
    if (!eventInput.trim()) return;

    const lower = eventInput.toLowerCase();
    let ruleKey = "valid";
    if (lower.includes("unauthorized") || lower.includes("no authority") || lower.includes("lacks")) ruleKey = "unauthorized";
    else if (lower.includes("expired") || lower.includes("outdated")) ruleKey = "expired";
    else if (lower.includes("undocumented") || lower.includes("no evidence") || lower.includes("missing")) ruleKey = "undocumented";
    else if (lower.includes("override") || lower.includes("bypass") || lower.includes("emergency")) ruleKey = "override";

    const rule = policyRules[ruleKey];
    setResult({
      allow: rule.allow,
      policy_id: `GRGF-POL-${String(Math.floor(Math.random() * 9000) + 1000)}`,
      machine_reason: rule.machine_reason,
      human_reason: rule.human_reason,
      event_normalized: eventInput.trim(),
    });
  };

  return (
    <div>
      <div className="bg-destructive/5 border border-destructive/20 rounded-sm px-4 py-3 mb-6 flex items-start gap-3">
        <AlertTriangle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Simulation Only.</span> No real governance records are created, modified, or sealed. This demonstrates conceptual policy evaluation logic.
        </p>
      </div>

      <div className="governance-card mb-6">
        <label className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-2 block">
          Hypothetical Governance Event
        </label>
        <textarea
          value={eventInput}
          onChange={(e) => setEventInput(e.target.value)}
          placeholder="e.g., Procurement approval granted by unauthorized actor without supporting documentation"
          className="w-full px-4 py-3 border border-border rounded-sm bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-accent resize-none"
          rows={3}
        />
        <button
          onClick={runSimulation}
          disabled={!eventInput.trim()}
          className="mt-3 px-6 py-2.5 bg-primary text-primary-foreground text-xs font-medium rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Execute Policy Evaluation
        </button>
      </div>

      {result && (
        <div className="governance-card border-l-2 border-l-accent animate-fade-in">
          <h4 className="font-serif text-sm font-semibold mb-4">Policy Evaluation Result</h4>

          <div className="bg-card border border-border rounded-sm p-4 mb-4 font-mono text-xs">
            <div className="space-y-1.5 text-muted-foreground">
              <p><span className="text-foreground">event_normalized:</span> "{result.event_normalized}"</p>
              <p>
                <span className="text-foreground">allow:</span>{" "}
                <span className={result.allow ? "text-emerald-trust" : "text-destructive"}>{String(result.allow)}</span>
              </p>
              <p><span className="text-foreground">policy_id:</span> {result.policy_id}</p>
              <p><span className="text-foreground">machine_reason:</span> {result.machine_reason}</p>
              <p><span className="text-foreground">human_reason:</span> "{result.human_reason}"</p>
            </div>
          </div>

          <p className="text-[10px] font-mono text-muted-foreground/50 tracking-wider">
            SIMULATION ONLY — NO REAL RECORD CREATED — NO CRYPTOGRAPHIC PROOF GENERATED
          </p>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN INTERFACE
   ═══════════════════════════════════════════════ */

const GovernanceInterface = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Governance Interface"
      subtitle="Structured institutional navigation and explanatory system for formal review of the Global Records & Governance Framework."
    />

    {/* Positioning Statement */}
    <Section>
      <div className="governance-card border-l-2 border-l-accent mb-2">
        <p className="text-sm text-foreground leading-relaxed">
          The GRGF Governance Interface provides structured navigation and explanatory summaries of GRGF documentation and system design. It does not replace formal institutional review, legal interpretation, or policy authority.
        </p>
      </div>
    </Section>

    {/* Tabbed Interface */}
    <Section>
      <Tabs defaultValue="documents" className="w-full">
        <TabsList className="w-full justify-start bg-muted rounded-sm h-auto p-1 flex-wrap gap-1">
          <TabsTrigger value="documents" className="text-xs rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2">
            Document Navigator
          </TabsTrigger>
          <TabsTrigger value="stakeholder" className="text-xs rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2">
            Stakeholder Briefing
          </TabsTrigger>
          <TabsTrigger value="compliance" className="text-xs rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2">
            Compliance Mapping
          </TabsTrigger>
          <TabsTrigger value="simulation" className="text-xs rounded-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2">
            Policy Simulation
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="documents">
            <DocumentNavigator />
          </TabsContent>
          <TabsContent value="stakeholder">
            <StakeholderBriefing />
          </TabsContent>
          <TabsContent value="compliance">
            <ComplianceMapping />
          </TabsContent>
          <TabsContent value="simulation">
            <PolicySimulation />
          </TabsContent>
        </div>
      </Tabs>
    </Section>

    {/* Logging Disclaimer */}
    <Section className="border-t border-border">
      <p className="text-[10px] font-mono text-muted-foreground/50 tracking-wider text-center">
        QUERIES WITHIN THIS INTERFACE MAY BE LOGGED FOR SYSTEM IMPROVEMENT AND INSTITUTIONAL REVIEW COMPLIANCE
      </p>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default GovernanceInterface;
