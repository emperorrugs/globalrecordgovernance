import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import {
  Shield, Lock, FileCheck, CheckCircle, AlertTriangle,
  BarChart3, Globe, Server, Eye, Hash, Users, Cpu,
  ArrowRight, Clock, Building2,
} from "lucide-react";

const capabilities = [
  "Event normalization engine — structured ingestion of governance events",
  "Deterministic policy engine — rule-based enforcement with no discretionary override",
  "Append-only ledger — tamper-evident, cryptographically sealed record storage",
  "SHA-256 hash chaining — continuous integrity verification across record sequences",
  "Verification endpoint — independent proof validation without system access",
  "Simulation mode — non-authoritative demonstration of system logic",
  "Role-based access — cryptographic role separation with no shared credentials",
];

const evaluationScope = [
  "Deterministic enforcement — verify policy decisions are consistent and repeatable",
  "Authority validation — confirm role separation prevents unauthorized actions",
  "Record immutability — attempt modification and verify tamper detection",
  "Hash integrity — validate cryptographic chain across record sequences",
  "Audit trace reconstruction — reconstruct decision history from sealed records",
];

const notIncluded = [
  "Multi-node federation — single-node evaluation only",
  "National scale deployment — pilot scope is bounded to 3–5 decision types",
  "External anchor integration — no third-party timestamping or blockchain anchoring",
  "Third-party penetration testing — pending independent security audit",
];

const kpis = [
  { metric: "Policy enforcement determinism rate", target: "100%", method: "Decision output consistency analysis" },
  { metric: "Denial clarity index", target: "100%", method: "Machine + human-readable output verification" },
  { metric: "Ledger integrity validation rate", target: "100%", method: "Cryptographic chain verification" },
  { metric: "Audit reconstruction time", target: "< 30 minutes", method: "Full trace recovery exercise" },
  { metric: "Incident trace completeness", target: "100%", method: "End-to-end event correlation sampling" },
];

const archiveDocs = [
  { id: "PN-001", title: "Technical Architecture Document", classification: "Level 2 — Institutional", version: "v0.1.0" },
  { id: "PN-002", title: "Database Schema Description", classification: "Level 3 — Restricted", version: "v0.1.0" },
  { id: "PN-003", title: "Policy Engine Specification", classification: "Level 2 — Institutional", version: "v0.1.0" },
  { id: "PN-004", title: "Hash Chain Logic Documentation", classification: "Level 2 — Institutional", version: "v0.1.0" },
  { id: "PN-005", title: "API Endpoint Specification", classification: "Level 3 — Restricted", version: "v0.1.0" },
  { id: "PN-006", title: "Deployment Configuration Summary", classification: "Level 3 — Restricted", version: "v0.1.0" },
  { id: "PN-007", title: "Version Registry Entry", classification: "Level 1 — Public", version: "v0.1.0" },
];

const PilotProgramme = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="GRGF Pilot Node v0.1 — Controlled Evaluation Edition"
      subtitle="A minimal viable governance engine designed for structured institutional evaluation prior to national deployment."
    />

    {/* Purpose */}
    <Section title="Purpose" className="border-b border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          The Pilot Node is a minimal viable governance engine designed for structured institutional evaluation prior to national deployment. It provides a controlled environment where authorised evaluators can validate deterministic enforcement, cryptographic integrity, and audit reconstruction capabilities against real governance scenarios.
        </p>
      </div>
      <div className="governance-card">
        <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-3">Transparency Statement</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "It is not production-scale",
            "It is not federated",
            "It is not yet externally audited",
            "It is intended for pilot assessment only",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <AlertTriangle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Technical Capabilities */}
    <Section title="Technical Capabilities" className="border-b border-border">
      <div className="governance-card">
        <div className="space-y-2">
          {capabilities.map((cap) => (
            <div key={cap} className="flex items-start gap-2">
              <Cpu className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">{cap}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Security Boundaries */}
    <Section title="Security Boundaries" className="border-b border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Lock, label: "Private access only — no public endpoints" },
            { icon: Shield, label: "HTTPS enforced on all communication channels" },
            { icon: Users, label: "Role-based authentication with cryptographic separation" },
            { icon: Eye, label: "Simulation clearly separated from committed records" },
            { icon: Hash, label: "All records sealed with SHA-256 hash integrity" },
            { icon: Server, label: "Cloud-hosted in controlled, jurisdiction-aware environment" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-start gap-2">
              <Icon className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-muted/50 border border-border rounded-sm px-4 py-3">
          <p className="text-[10px] font-mono text-accent/70 tracking-wider">
            THIS ENVIRONMENT OPERATES UNDER THE GRGF CONTROLLED DISTRIBUTION PROTOCOL (CRP)
          </p>
        </div>
      </div>
    </Section>

    {/* Evaluation Scope */}
    <Section title="Evaluation Scope" className="border-b border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-3">What Evaluators Can Test</p>
          <div className="space-y-2">
            {evaluationScope.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="governance-card">
          <p className="text-[10px] font-mono text-destructive/70 uppercase tracking-wider mb-3">Not Yet Included</p>
          <div className="space-y-2">
            {notIncluded.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <AlertTriangle className="h-3 w-3 text-muted-foreground/50 shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>

    {/* KPI Framework */}
    <Section title="Pilot KPI Framework" className="border-b border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Metric</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Target</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Measurement Method</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {kpis.map((k) => (
              <tr key={k.metric} className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium text-foreground">{k.metric}</td>
                <td className="py-2 pr-4 font-mono text-accent">{k.target}</td>
                <td className="py-2">{k.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Archive Documents */}
    <Section title="Pilot Node Documentation Archive" className="border-b border-border">
      <p className="text-xs text-muted-foreground mb-4">
        The following documents constitute the technical archive for Pilot Node v0.1. Documents classified Level 3 require institutional access under CRP.
      </p>
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">ID</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Document</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Classification</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Version</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {archiveDocs.map((doc) => (
              <tr key={doc.id} className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono text-accent">{doc.id}</td>
                <td className="py-2 pr-4 font-medium text-foreground">{doc.title}</td>
                <td className="py-2 pr-4">
                  <span className={`text-[10px] font-mono tracking-wider ${doc.classification.includes("Restricted") ? "text-destructive" : doc.classification.includes("Institutional") ? "text-accent" : "text-muted-foreground"}`}>
                    {doc.classification}
                  </span>
                </td>
                <td className="py-2 font-mono">{doc.version}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Version Registry */}
    <Section title="Version Registry" className="border-b border-border">
      <div className="governance-card">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Version", value: "GRGF Pilot Node v0.1" },
            { label: "Status", value: "Controlled Evaluation" },
            { label: "Deployment Model", value: "Cloud-hosted (Private)" },
            { label: "Audit Status", value: "Pending Third-Party Review" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-sm font-serif font-semibold text-foreground">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[10px] font-mono text-muted-foreground/50 tracking-wider">
          INTENDED USE: INSTITUTIONAL PILOT ASSESSMENT
        </p>
      </div>
    </Section>

    {/* Request Access */}
    <Section title="Request Controlled Access" className="border-b border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          Access to the Pilot Node v0.1 is restricted to authorised institutional evaluators. Requests must include institutional identification, intended evaluation purpose, and acknowledgment of the Controlled Distribution Protocol.
        </p>
        <div className="grid gap-2 sm:grid-cols-3 mb-6">
          {[
            "Institutional email required",
            "Intended evaluation purpose declaration",
            "CRP acknowledgment and acceptance",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <Lock className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
        <Link
          to="/briefing"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-primary text-sm font-medium rounded-sm hover:bg-accent/90 transition-colors"
        >
          Request Pilot Access <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>

    {/* Limitation Statement */}
    <Section title="Limitation Statement">
      <div className="governance-card bg-muted/30">
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          The Pilot Node v0.1 is intended solely for structured evaluation. Production deployment requires independent security audit, governance review, and formal institutional approval. No data processed within the pilot environment constitutes an authoritative governance record.
        </p>
        <div className="section-divider" />
        <p className="text-sm text-foreground leading-relaxed mt-4 font-serif">
          GRGF Pilot Node v0.1 marks the transition from architectural framework to operational governance engine. Structured pilot validation is the next step toward sovereign deployment.
        </p>
      </div>
      <p className="mt-6 text-[10px] font-mono text-muted-foreground/40 tracking-wider text-center">
        QUERIES WITHIN THIS INTERFACE MAY BE LOGGED FOR SYSTEM IMPROVEMENT AND INSTITUTIONAL REVIEW COMPLIANCE
      </p>
    </Section>
  </div>
);

export default PilotProgramme;
