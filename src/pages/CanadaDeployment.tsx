import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Globe, Shield, CheckCircle, Building2, Scale, Users, ArrowRight,
  FileText, Lock, Eye, Cpu, Database, Network, Layers, Hash,
  ShieldCheck, AlertTriangle, Activity, Award, BookOpen, Landmark,
  ClipboardCheck, Server, GitBranch, Binary, Fingerprint, Gavel,
} from "lucide-react";
import { PDFExportButton } from "@/components/PDFExportButton";
import { useState } from "react";

/* ═══════════════════ DATA ═══════════════════ */

const SIX_LAYERS = [
  { num: "L1", title: "Event Capture & Normalization", desc: "Canonical event envelopes with jurisdiction, authority, classification, and retention metadata. All events normalized to GRGF-CA schema.", icon: Database },
  { num: "L2", title: "Policy Decision Engine", desc: "Versioned policy-as-code. Deterministic evaluation — identical inputs always produce identical outputs. No discretionary override.", icon: Gavel },
  { num: "L3", title: "Append-Only Evidence Backbone", desc: "Merkle transparency log. Events are append-only leaves. No deletion, no modification. Structural immutability enforced.", icon: GitBranch },
  { num: "L4", title: "Cryptographic Anchoring", desc: "SHA-256/512 payload commitments. Every event sealed with hash chain linking to predecessor. Tamper-evident by construction.", icon: Hash },
  { num: "L5", title: "Verification API", desc: "Publicly verifiable inclusion and consistency proofs. No privileged access required. Cryptographic proof replaces institutional trust.", icon: ShieldCheck },
  { num: "L6", title: "Federation & Interoperability", desc: "Cross-witnessed sovereign nodes. Each jurisdiction maintains independent log. Mutual checkpoint witnessing prevents split-view attacks.", icon: Network },
];

const FEDERATION_NODES = [
  { id: "GRGF-CA-FED", label: "Federal", jurisdiction: "Government of Canada", departments: ["TBS", "SSC", "PSPC", "ISED"], color: "accent" },
  { id: "GRGF-ON", label: "Ontario", jurisdiction: "Province of Ontario", departments: ["Digital Service", "Treasury Board", "MGCS"], color: "primary" },
  { id: "GRGF-QC", label: "Québec", jurisdiction: "Province du Québec", departments: ["MCN", "SCT", "Secrétariat du Conseil du trésor"], color: "primary" },
];

const WORKFLOWS = [
  {
    id: "WF-001",
    title: "Federal Benefit Decision Lifecycle",
    jurisdiction: "GRGF-CA-FED",
    steps: [
      "Application received → Event captured (L1)",
      "Eligibility policy evaluated → Deterministic decision (L2)",
      "Decision event sealed → Merkle leaf appended (L3)",
      "Payload hash committed → SHA-256 anchoring (L4)",
      "Signed receipt issued → Inclusion proof generated (L5)",
      "Checkpoint cross-witnessed by GRGF-ON, GRGF-QC (L6)",
    ],
  },
  {
    id: "WF-002",
    title: "Federal Procurement Award Lifecycle",
    jurisdiction: "GRGF-CA-FED",
    steps: [
      "Procurement event submitted → Canonical envelope created (L1)",
      "Procurement policy v3.2 applied → Award/Denial determined (L2)",
      "Award event appended → Log integrity maintained (L3)",
      "Evidence hash chain extended → Cryptographic seal applied (L4)",
      "Public verification endpoint exposed → Proof available (L5)",
      "Federal checkpoint witnessed by provincial nodes (L6)",
    ],
  },
  {
    id: "WF-003",
    title: "Provincial Licensing Decision Lifecycle",
    jurisdiction: "GRGF-ON",
    steps: [
      "License application normalized → Ontario schema applied (L1)",
      "Provincial licensing policy evaluated → Deterministic output (L2)",
      "Decision appended to GRGF-ON log → Merkle tree updated (L3)",
      "License hash commitment → SHA-256 chain integrity (L4)",
      "Applicant receives signed receipt with inclusion proof (L5)",
      "GRGF-ON checkpoint cross-witnessed by GRGF-CA-FED, GRGF-QC (L6)",
    ],
  },
];

const EVENT_SCHEMA = {
  event_id: "GRGF-CA-FED-2026-00847",
  jurisdiction: "CA-FED",
  issuing_authority: "Treasury Board Secretariat",
  authority_scope: "NATIONAL",
  policy_version: "GOC-BENEFIT-POLICY-v3.2",
  policy_hash: "e3b0c44298fc1c149afb…d7f8f4f1f1e2c8d9a0b1",
  timestamp_utc: "2026-03-02T14:30:00.000Z",
  classification: "PROTECTED_B",
  retention_class: "PERMANENT",
  event_type: "BENEFIT_DECISION",
  payload_hash: "a7f3c2d8e9b1f4a6c3d7e8f2a5b9c1d4e7f0a3b6c9d2e5f8a1b4c7d0e3f6a8",
  evidence_refs: ["DOC-2026-0847-APP", "DOC-2026-0847-ASSESS"],
  prev_event_hash: "b8c4d3e7f1a2b5c8d1e4f7a0b3c6d9e2f5a8b1c4d7e0f3a6b9c2d5e8f1a4b7",
  signatures: {
    issuer: "TBS-SIGNING-KEY-2026-Q1",
    algorithm: "Ed25519",
  },
};

const PROOF_ARTIFACTS = [
  {
    title: "Signed Receipt",
    desc: "Issued to the submitting authority after event is appended.",
    json: {
      receipt_id: "RCPT-CA-FED-2026-00847",
      event_id: "GRGF-CA-FED-2026-00847",
      tree_size: 12847,
      leaf_index: 12846,
      root_hash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      timestamp: "2026-03-02T14:30:01.000Z",
      signature: "MEUCIQDk8gV…base64…==",
    },
  },
  {
    title: "Inclusion Proof",
    desc: "Proves the event exists within the current Merkle tree.",
    json: {
      event_id: "GRGF-CA-FED-2026-00847",
      leaf_index: 12846,
      tree_size: 12847,
      hashes: [
        "a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
        "e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
        "c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8",
      ],
      root_hash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
    },
  },
  {
    title: "Consistency Proof",
    desc: "Proves the log has not been tampered with between two checkpoints.",
    json: {
      old_tree_size: 12800,
      new_tree_size: 12847,
      old_root: "f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0",
      new_root: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      proof_hashes: [
        "b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7",
        "f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3",
      ],
    },
  },
  {
    title: "Signed Checkpoint",
    desc: "Periodic commitment of tree state, signed by node operator.",
    json: {
      node_id: "GRGF-CA-FED",
      checkpoint_id: "CKP-CA-FED-2026-0302-1430",
      tree_size: 12847,
      root_hash: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      timestamp: "2026-03-02T14:30:05.000Z",
      signature: "MEQCIAbc…base64…==",
      signing_key_id: "GRGF-CA-FED-SIGN-2026-Q1",
    },
  },
  {
    title: "Witness Signature",
    desc: "Cross-node attestation of another node's checkpoint validity.",
    json: {
      witness_node: "GRGF-ON",
      witnessed_checkpoint: "CKP-CA-FED-2026-0302-1430",
      witnessed_root: "d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4",
      witness_timestamp: "2026-03-02T14:30:12.000Z",
      witness_signature: "MEYCIQCxyz…base64…==",
      witness_key_id: "GRGF-ON-WITNESS-2026-Q1",
    },
  },
];

const VERIFICATION_API = [
  { method: "POST", path: "/log/submit", desc: "Submit a governance event to the append-only log." },
  { method: "GET", path: "/log/checkpoint/latest", desc: "Retrieve the latest signed tree head (checkpoint)." },
  { method: "GET", path: "/proof/inclusion?event_id={id}&tree_size={n}", desc: "Generate inclusion proof for a specific event." },
  { method: "GET", path: "/proof/consistency?old_size={n}&new_size={m}", desc: "Generate consistency proof between two tree sizes." },
  { method: "GET", path: "/policy/{id}/version/{v}", desc: "Retrieve a specific policy version with its hash." },
  { method: "GET", path: "/federation/witness/{node}/checkpoint/{id}", desc: "Retrieve witness signature from a federated node." },
];

const AUDITOR_CHECKLIST = [
  { step: 1, action: "Verify checkpoint signature", detail: "Validate Ed25519 signature on CKP-CA-FED-2026-0302-1430 using GRGF-CA-FED-SIGN-2026-Q1 public key.", result: "PASS" },
  { step: 2, action: "Verify witness signatures", detail: "Validate GRGF-ON and GRGF-QC witness signatures against the same checkpoint root hash.", result: "PASS" },
  { step: 3, action: "Validate inclusion proof", detail: "Recompute Merkle root from leaf GRGF-CA-FED-2026-00847 at index 12846 using inclusion proof hashes.", result: "PASS" },
  { step: 4, action: "Validate consistency proof", detail: "Verify log grew from tree_size 12800 to 12847 without modifying existing entries.", result: "PASS" },
  { step: 5, action: "Confirm policy hash integrity", detail: "Hash GOC-BENEFIT-POLICY-v3.2 content and compare to policy_hash in event envelope.", result: "PASS" },
  { step: 6, action: "Confirm payload privacy boundary", detail: "Verify payload_hash is a commitment only — no sensitive data exposed in verification flow.", result: "PASS" },
];

const STANDARDS_CROSSWALK = [
  { standard: "ISO 15489 — Records Management", mapping: "Append-only lifecycle, retention metadata, classification controls, chain-of-custody.", risk: "Low", mitigation: "Automated retention scheduling, immutable custody log." },
  { standard: "ISO/IEC 27001 — Information Security", mapping: "Zero-trust verification, cryptographic integrity, role-based access, audit trails.", risk: "Low", mitigation: "Ed25519 signatures, HSM key management, continuous monitoring." },
  { standard: "ISO/IEC 27701 — Privacy Information", mapping: "Data minimization (hash commitments only), privacy-by-design, lawful basis documentation.", risk: "Low", mitigation: "No PII in transparency log. Payload hash commitment only." },
  { standard: "OECD DPI Safeguards (Paper No. 68)", mapping: "Human-centred design, inclusivity, interoperability, security-by-default.", risk: "Medium", mitigation: "Voluntary participation model, sovereignty preservation, open API specification." },
  { standard: "GC Digital Standards", mapping: "Design with users, iterate frequently, build in security, work in the open.", risk: "Low", mitigation: "Public verification API, transparent checkpoint logs, modular architecture." },
  { standard: "Treasury Board Policy on Service & Digital", mapping: "Digital-first governance, interoperability, data-driven decision support.", risk: "Low", mitigation: "Standards-based API, federated architecture, evidence-based compliance." },
  { standard: "PIPEDA / Privacy Act", mapping: "Minimal personal data processing, pseudonymization, consent framework.", risk: "Low", mitigation: "Only event metadata and hash commitments processed. No PII stored in log." },
];

const CREDIBILITY_SIGNALS = [
  { num: 1, title: "Independent Validation", desc: "Third-party architecture review, governance stress testing, and formal audit scope definition.", icon: ShieldCheck },
  { num: 2, title: "Multi-Stakeholder Coalition", desc: "Advisory council with universities, public administration schools, civil society, and governance institutes.", icon: Users },
  { num: 3, title: "Operational Proof", desc: "Live transparency log simulation with verifiable Merkle proofs, signed receipts, and federation witnessing.", icon: Activity },
  { num: 4, title: "Academic Legitimacy", desc: "Peer-reviewed governance working papers, conference participation strategy, and research collaborations.", icon: BookOpen },
  { num: 5, title: "Neutral Institutional Identity", desc: "Independent foundation governance with anti-capture clauses (AC-01–05) and transparency dashboards.", icon: Landmark },
];

const PILOT_PHASES = [
  {
    phase: "Phase 1", days: "Days 1–30", title: "Technical Simulation & Internal Validation",
    milestones: [
      "Deploy GRGF-CA-FED simulation node",
      "Configure canonical event schema for GC context",
      "Run 500+ simulated governance events through 6-layer pipeline",
      "Generate first signed checkpoint and inclusion proofs",
      "Internal architecture review completed",
    ],
    artifacts: ["Simulation report", "Architecture validation", "Event schema specification"],
    credibility: 25,
  },
  {
    phase: "Phase 2", days: "Days 31–60", title: "Controlled Pilot Workflow Logging",
    milestones: [
      "Deploy GRGF-ON and GRGF-QC simulation nodes",
      "Execute three core workflow scenarios end-to-end",
      "Demonstrate cross-node checkpoint witnessing",
      "Generate consistency proofs across 3 checkpoints",
      "Policy determinism validation: 100% pass rate",
    ],
    artifacts: ["Federation test report", "Consistency proof archive", "Policy determinism certification"],
    credibility: 55,
  },
  {
    phase: "Phase 3", days: "Days 61–90", title: "External Audit & Federated Witnessing",
    milestones: [
      "Third-party auditor executes full verification checklist",
      "All 6 auditor checks pass independently",
      "Cross-jurisdictional witness signatures validated",
      "Standards crosswalk review completed",
      "Pilot evaluation report finalized",
    ],
    artifacts: ["Audit verification report", "Standards compliance matrix", "Pilot recommendation brief"],
    credibility: 85,
  },
];

const SUBMISSION_SECTIONS = [
  "Executive Brief (Canada Context)",
  "Architecture Overview (6-Layer Model)",
  "Canada DPI Integration Diagram",
  "Transparency Log Specification",
  "Proof Artifact Appendix",
  "Auditor Verification Guide",
  "Federation Model Explanation",
  "Standards Compliance Matrix",
  "Sovereignty Safeguards Summary",
  "90-Day Pilot Plan",
  "IP & Infrastructure Valuation Brief",
];

/* ═══════════════════ COMPONENTS ═══════════════════ */

function JsonBlock({ data, title }: { data: object; title?: string }) {
  return (
    <div>
      {title && <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">{title}</p>}
      <pre className="bg-background border border-border rounded-sm p-4 text-[11px] font-mono text-muted-foreground overflow-x-auto leading-relaxed">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

function ModuleAnchor({ id, num, title }: { id: string; num: string; title: string }) {
  return (
    <a href={`#${id}`} className="governance-card hover:border-accent/40 transition-colors group block">
      <span className="text-[10px] font-mono text-accent/60 uppercase">{num}</span>
      <p className="text-xs font-serif font-semibold mt-1 group-hover:text-accent transition-colors">{title}</p>
    </a>
  );
}

/* ═══════════════════ PAGE ═══════════════════ */

const CanadaDeployment = () => {
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Canada Sovereign Deployment"
        subtitle="Full sovereign DPI demonstration: verifiable append-only transparency log architecture with federal–provincial federation, cryptographic proofs, and institutional submission readiness."
      >
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono bg-accent/10 text-accent px-3 py-2 rounded-sm border border-accent/20">
            <Shield className="h-3.5 w-3.5" />
            <span>SOVEREIGN READY — Submission Package</span>
          </div>
          <PDFExportButton filename="GRGF-Canada-Sovereign-Deployment" />
        </div>
      </PageHeader>

      {/* ── Module Index ── */}
      <Section>
        <p className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider mb-4">Module Index</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <ModuleAnchor id="architecture" num="01" title="6-Layer Architecture" />
          <ModuleAnchor id="federation" num="02" title="Federation Model" />
          <ModuleAnchor id="workflows" num="03" title="Core Workflows" />
          <ModuleAnchor id="event-schema" num="04" title="Event Schema" />
          <ModuleAnchor id="transparency-log" num="05" title="Transparency Log" />
          <ModuleAnchor id="verification-api" num="06" title="Verification API" />
          <ModuleAnchor id="auditor" num="07" title="Auditor Simulation" />
          <ModuleAnchor id="standards" num="08" title="Standards Alignment" />
          <ModuleAnchor id="credibility" num="09" title="Credibility Signals" />
          <ModuleAnchor id="pilot" num="10" title="90-Day Pilot" />
          <ModuleAnchor id="submission" num="11" title="Submission Package" />
        </div>
      </Section>

      {/* ── 01 Architecture ── */}
      <Section id="architecture" title="01 — Six-Layer Deterministic Architecture" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF implements a six-layer deterministic model. Each layer enforces structural guarantees — no deletion, no central override, no discretionary bypass. The architecture is sovereignty-preserving by construction.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SIX_LAYERS.map(({ num, title, desc, icon: Icon }) => (
            <div key={num} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-accent/70 uppercase">{num}</span>
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 governance-card bg-muted/30">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Design Guarantee.</span> Deterministic behavior: identical inputs always produce identical outputs. No human discretion in policy evaluation. No deletion capability at any layer. Cross-node checkpoint witnessing prevents unilateral log manipulation.
          </p>
        </div>
      </Section>

      {/* ── 02 Federation Model ── */}
      <Section id="federation" title="02 — Canadian Federation Model" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Three sovereign nodes simulate Canada's federal–provincial governance structure. Each node maintains its own append-only log, signs its own checkpoints, and cross-witnesses other nodes to prevent split-view attacks.
        </p>
        <div className="grid gap-4 lg:grid-cols-3">
          {FEDERATION_NODES.map((node) => (
            <div key={node.id} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-center gap-2 mb-2">
                <Server className="h-4 w-4 text-accent" />
                <code className="text-xs font-mono text-accent font-bold">{node.id}</code>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{node.jurisdiction}</p>
              <div className="flex flex-wrap gap-1">
                {node.departments.map((d) => (
                  <span key={d} className="text-[10px] font-mono bg-muted px-2 py-0.5 rounded-sm text-muted-foreground">{d}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 governance-card bg-muted/30">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Federation Rule.</span> Nodes validate and witness each other's Merkle roots. No single node can unilaterally alter the historical record. Provincial independence is structurally preserved — no centralized override authority exists.
          </p>
        </div>
      </Section>

      {/* ── 03 Workflows ── */}
      <Section id="workflows" title="03 — Core Canada Workflows" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Three primary governance workflows demonstrate GRGF's end-to-end pipeline from event capture through federated witnessing.
        </p>
        <div className="flex gap-2 mb-6 flex-wrap">
          {WORKFLOWS.map((wf, i) => (
            <button
              key={wf.id}
              onClick={() => setActiveWorkflow(i)}
              className={`text-xs font-mono px-3 py-2 rounded-sm border transition-colors ${
                activeWorkflow === i
                  ? "bg-accent text-accent-foreground border-accent"
                  : "bg-background border-border text-muted-foreground hover:border-accent/40"
              }`}
            >
              {wf.id}
            </button>
          ))}
        </div>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-center gap-2 mb-3">
            <code className="text-[10px] font-mono text-accent/70">{WORKFLOWS[activeWorkflow].jurisdiction}</code>
            <span className="text-[10px] text-muted-foreground/50">·</span>
            <code className="text-[10px] font-mono text-muted-foreground/50">{WORKFLOWS[activeWorkflow].id}</code>
          </div>
          <h4 className="font-serif text-sm font-semibold mb-4">{WORKFLOWS[activeWorkflow].title}</h4>
          <div className="space-y-2">
            {WORKFLOWS[activeWorkflow].steps.map((step, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-[10px] font-mono text-accent/50 mt-0.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground leading-relaxed governance-card bg-muted/30">
          <span className="font-semibold text-foreground">Output per workflow:</span> Canonical event envelope · Policy version reference · Payload commitment hash · Merkle leaf · Signed receipt · Inclusion proof · Consistency proof · Federated witness signature.
        </div>
      </Section>

      {/* ── 04 Event Schema ── */}
      <Section id="event-schema" title="04 — Canonical Event Envelope" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Standardized event envelope for all Canadian GRGF nodes. Sensitive data is encrypted and referenced — never exposed in verification flows.
        </p>
        <JsonBlock data={EVENT_SCHEMA} title="GRGF-CA Event Envelope Schema" />
        <div className="mt-4 governance-card bg-muted/30">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Privacy Boundary.</span> The <code className="text-accent">payload_hash</code> field is a SHA-256 commitment only. The underlying decision content remains encrypted and under the custody of the issuing authority. Verification flows prove integrity without exposing sensitive data.
          </p>
        </div>
      </Section>

      {/* ── 05 Transparency Log ── */}
      <Section id="transparency-log" title="05 — Verifiable Transparency Log" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Merkle tree append-only structure with signed tree heads, inclusion/consistency proofs, and cross-node witness signatures. All proof artifacts are independently verifiable without privileged access.
        </p>
        <div className="space-y-4">
          {PROOF_ARTIFACTS.map((artifact) => (
            <div key={artifact.title} className="governance-card">
              <h4 className="font-serif text-sm font-semibold mb-1">{artifact.title}</h4>
              <p className="text-xs text-muted-foreground mb-3">{artifact.desc}</p>
              <JsonBlock data={artifact.json} />
            </div>
          ))}
        </div>
      </Section>

      {/* ── 06 Verification API ── */}
      <Section id="verification-api" title="06 — Verification API Specification" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-4">
          All endpoints demonstrate cryptographic verification without privileged access. No authentication required for proof validation.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono bg-destructive/10 text-destructive px-3 py-2 rounded-sm w-fit border border-destructive/20 mb-6">
          <Cpu className="h-3.5 w-3.5 shrink-0" />
          <span>SPECIFICATION ONLY — No live backend</span>
        </div>
        <div className="space-y-2">
          {VERIFICATION_API.map((ep) => (
            <div key={ep.path} className="governance-card flex items-start gap-3">
              <span className={`px-2 py-0.5 rounded-sm text-[10px] font-mono font-bold shrink-0 mt-0.5 ${
                ep.method === "POST" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"
              }`}>
                {ep.method}
              </span>
              <div className="min-w-0">
                <code className="text-xs font-mono text-foreground break-all">{ep.path}</code>
                <p className="text-[11px] text-muted-foreground mt-1">{ep.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 07 Auditor Simulation ── */}
      <Section id="auditor" title="07 — Auditor Verification Simulation" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Complete auditor checklist demonstrating independent verification of transparency log integrity. All checks pass without requiring privileged access.
        </p>
        <div className="space-y-2">
          {AUDITOR_CHECKLIST.map((check) => (
            <div key={check.step} className="governance-card">
              <div className="flex items-start gap-3">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-mono text-muted-foreground/50">STEP {check.step}</span>
                  <span className="text-[10px] font-mono font-bold bg-accent/20 text-accent px-2 py-0.5 rounded-sm">{check.result}</span>
                </div>
              </div>
              <h4 className="font-serif text-sm font-semibold mt-2 mb-1">{check.action}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{check.detail}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 governance-card border-l-2 border-l-accent bg-accent/5">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-accent">All 6 verification checks: PASS</span>
          </div>
          <p className="text-xs text-muted-foreground">
            The Auditor General or any independent reviewer can validate governance integrity through cryptographic proof verification without requiring privileged system access.
          </p>
        </div>
      </Section>

      {/* ── 08 Standards ── */}
      <Section id="standards" title="08 — Standards Compliance Matrix" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF Canada deployment mapped against international governance, records, security, and privacy standards.
        </p>
        <div className="overflow-x-auto governance-card">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left py-3 px-3 font-serif font-semibold">Standard</th>
                <th className="text-left py-3 px-3 font-serif font-semibold">GRGF Mapping</th>
                <th className="text-left py-3 px-3 font-serif font-semibold">Risk</th>
                <th className="text-left py-3 px-3 font-serif font-semibold">Mitigation</th>
              </tr>
            </thead>
            <tbody>
              {STANDARDS_CROSSWALK.map((s) => (
                <tr key={s.standard} className="border-b border-border/50">
                  <td className="py-3 px-3 font-mono text-foreground font-medium align-top whitespace-nowrap">{s.standard}</td>
                  <td className="py-3 px-3 text-muted-foreground align-top">{s.mapping}</td>
                  <td className="py-3 px-3 align-top">
                    <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-sm ${
                      s.risk === "Low" ? "bg-accent/20 text-accent" : "bg-yellow-500/20 text-yellow-600"
                    }`}>{s.risk}</span>
                  </td>
                  <td className="py-3 px-3 text-muted-foreground align-top">{s.mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 09 Credibility ── */}
      <Section id="credibility" title="09 — Institutional Credibility Signals" className="scroll-mt-20 border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {CREDIBILITY_SIGNALS.map(({ num, title, desc, icon: Icon }) => (
            <div key={num} className="governance-card">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-accent/60">SIGNAL {num}</span>
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 10 Sovereignty ── */}
      <Section title="Sovereignty Safeguards" className="border-t border-border">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Shield, title: "No Enforcement Authority", desc: "GRGF exercises no enforcement capability. It records, preserves, and verifies — it does not adjudicate or override." },
            { icon: Scale, title: "No Regulatory Override", desc: "No mechanism exists to override provincial or federal regulatory authority. Sovereignty is structurally guaranteed." },
            { icon: Building2, title: "Provincial Independence", desc: "Each provincial node operates autonomously. No centralized authority can compel log modification or deletion." },
            { icon: Users, title: "Voluntary Participation", desc: "Participation is voluntary. No jurisdiction is required to adopt, operate, or maintain a GRGF node." },
            { icon: Lock, title: "Jurisdictional Boundaries", desc: "Clear jurisdictional separation. Federal events stay in GRGF-CA-FED. Provincial events stay in their respective nodes." },
            { icon: Fingerprint, title: "Canadian Patent Protection", desc: "Canadian Patent Application No. 3,300,102 — filed January 28, 2026. Canadian-origin sovereign infrastructure IP." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-2" />
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 10 Pilot ── */}
      <Section id="pilot" title="10 — 90-Day Sovereign Pilot Roadmap" className="scroll-mt-20 border-t border-border">
        <div className="space-y-4">
          {PILOT_PHASES.map((p) => (
            <div key={p.phase} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono text-accent/70 uppercase tracking-wider">{p.phase}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">· {p.days}</span>
                <span className="text-[10px] font-mono text-muted-foreground/50">· Credibility Score: {p.credibility}/100</span>
              </div>
              <h4 className="font-serif text-sm font-semibold mb-3">{p.title}</h4>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Milestones</p>
                  <div className="space-y-1">
                    {p.milestones.map((m, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground">{m}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-2">Artifacts</p>
                  <div className="space-y-1">
                    {p.artifacts.map((a) => (
                      <div key={a} className="flex items-center gap-2">
                        <FileText className="h-3 w-3 text-muted-foreground/50 shrink-0" />
                        <p className="text-xs text-muted-foreground">{a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Progress bar */}
              <div className="mt-3">
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent rounded-full transition-all" style={{ width: `${p.credibility}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── IP Valuation ── */}
      <Section title="IP & Infrastructure Valuation" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Modular Architecture", desc: "6-layer independent modules enable selective adoption. Each layer is independently valuable and licensable." },
            { title: "Certification Ecosystem", desc: "Scalable certification network for institutional compliance. Revenue grows with each certified jurisdiction." },
            { title: "Methodology Defensibility", desc: "Patent-protected deterministic governance methodology. Canadian Patent Application No. 3,300,102." },
            { title: "Federation Network Effects", desc: "Value increases with each federated node. Cross-witnessing creates mutual integrity dependency." },
            { title: "Long-Horizon Positioning", desc: "Infrastructure-class asset with 20+ year institutional lifecycle. Governance infrastructure persists across political cycles." },
            { title: "Standards-Formation Pathway", desc: "Pre-standard positioning enables transition to international standard. Historical precedent: ISO adoption timelines." },
          ].map(({ title, desc }) => (
            <div key={title} className="governance-card">
              <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 11 Submission Package ── */}
      <Section id="submission" title="11 — Final Submission Package" className="scroll-mt-20 border-t border-border">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
          Complete submission-ready documentation for Canadian federal and provincial review.
        </p>
        <div className="governance-card">
          <div className="space-y-2">
            {SUBMISSION_SECTIONS.map((s, i) => (
              <div key={s} className="flex items-center gap-3 py-2 border-b border-border/30 last:border-0">
                <span className="text-[10px] font-mono text-accent/60 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <ClipboardCheck className="h-3.5 w-3.5 text-accent shrink-0" />
                <p className="text-xs text-foreground font-medium">{s}</p>
                <span className="ml-auto text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-sm">INCLUDED</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/briefing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-primary/90 transition-colors"
          >
            <FileText className="h-4 w-4" />
            Request Federal Briefing Package <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/submission-hub"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent/40 text-accent text-sm font-medium rounded-sm hover:bg-accent/10 transition-colors"
          >
            <Globe className="h-4 w-4" />
            International Submission Hub <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* ── Attribution ── */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Canadian Patent Application No. 3,300,102 — Filed January 28, 2026 (publication pending).
        </p>
      </Section>
    </div>
  );
};

export default CanadaDeployment;
