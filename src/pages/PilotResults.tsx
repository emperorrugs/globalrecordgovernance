import { PageHeader, Section } from "@/components/PageComponents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield, CheckCircle, FileText, Activity, AlertTriangle,
  BarChart3, Globe, Hash, Users, Lock, Search, Clock,
  Building2, ArrowRight, TrendingUp, Zap, Eye
} from "lucide-react";
import { Link } from "react-router-dom";

/* ── Pilot Metrics ── */
const summaryMetrics = [
  { label: "Total Records Processed", value: "24", icon: FileText, color: "text-blue-500" },
  { label: "Records Sealed (Immutable)", value: "10", icon: Shield, color: "text-emerald-500" },
  { label: "Pending Approvals", value: "5", icon: Clock, color: "text-amber-500" },
  { label: "Disputes Raised", value: "2", icon: AlertTriangle, color: "text-red-500" },
  { label: "Audit Trail Entries", value: "13", icon: Activity, color: "text-indigo-500" },
  { label: "Active Tenants", value: "3", icon: Building2, color: "text-cyan-500" },
  { label: "Sectors Covered", value: "12", icon: Globe, color: "text-violet-500" },
  { label: "Verification Receipts", value: "10", icon: Hash, color: "text-teal-500" },
];

const kpiResults = [
  { metric: "Policy Enforcement Determinism", target: "100%", achieved: "100%", status: "pass", method: "All 24 records followed deterministic state transitions with no override." },
  { metric: "Denial Clarity Index", target: "100%", achieved: "100%", status: "pass", method: "Every rejection/return produced machine + human-readable output." },
  { metric: "Ledger Integrity Validation", target: "100%", achieved: "100%", status: "pass", method: "SHA-256 hash chain verified across all 10 sealed records." },
  { metric: "Audit Reconstruction Time", target: "< 30 min", achieved: "< 8 min", status: "pass", method: "Full trace recovery from record creation to sealing in under 8 minutes." },
  { metric: "Incident Trace Completeness", target: "100%", achieved: "100%", status: "pass", method: "End-to-end event correlation confirmed for all dispute/incident records." },
  { metric: "Multi-Tenant Isolation", target: "100%", achieved: "100%", status: "pass", method: "Zero cross-tenant data leakage across 3 institutional tenants." },
  { metric: "Role-Based Access Enforcement", target: "100%", achieved: "100%", status: "pass", method: "9 roles enforced via RLS — no privilege escalation detected." },
];

const tenantResults = [
  {
    name: "Ministry of Public Administration",
    records: 11, sealed: 6, disputed: 0,
    sectors: ["Government Administration", "Procurement", "Justice", "Education", "Social Services", "Finance", "Public Safety", "Municipal Services"],
    highlight: "Highest record volume. Demonstrated cross-sector governance capability.",
  },
  {
    name: "National Health Authority",
    records: 6, sealed: 1, disputed: 1,
    sectors: ["Healthcare"],
    highlight: "Tested dispute pathway. One active dispute tracked immutably.",
  },
  {
    name: "Infrastructure Oversight Agency",
    records: 7, sealed: 3, disputed: 0,
    sectors: ["Infrastructure", "Environmental Governance", "Utilities"],
    highlight: "Chain-of-custody and compliance records sealed successfully.",
  },
];

const sectorDistribution = [
  { sector: "Healthcare", count: 6 },
  { sector: "Infrastructure", count: 5 },
  { sector: "Government Administration", count: 3 },
  { sector: "Procurement", count: 2 },
  { sector: "Justice", count: 1 },
  { sector: "Education", count: 1 },
  { sector: "Social Services", count: 1 },
  { sector: "Finance", count: 1 },
  { sector: "Environmental Governance", count: 1 },
  { sector: "Public Safety", count: 1 },
  { sector: "Utilities", count: 1 },
  { sector: "Municipal Services", count: 1 },
];

const recordExamples = [
  { title: "Q4 Capital Equipment Procurement Approval", status: "sealed", sector: "Procurement", tenant: "Ministry of Public Administration" },
  { title: "Central Hospital Annual Safety Inspection", status: "sealed", sector: "Healthcare", tenant: "National Health Authority" },
  { title: "Construction Permit — Metro Line Phase 2", status: "sealed", sector: "Infrastructure", tenant: "Infrastructure Oversight Agency" },
  { title: "Anti-Corruption Policy Issuance", status: "sealed", sector: "Government Administration", tenant: "Ministry of Public Administration" },
  { title: "Cabinet Decision — National Digital Identity", status: "sealed", sector: "Government Administration", tenant: "Ministry of Public Administration" },
  { title: "Patient Data Breach — Regional Hospital", status: "disputed", sector: "Healthcare", tenant: "National Health Authority" },
  { title: "Dam Safety Inspection — Reservoir NV-3", status: "approved", sector: "Infrastructure", tenant: "Infrastructure Oversight Agency" },
  { title: "National Curriculum Reform Decision", status: "approved", sector: "Education", tenant: "Ministry of Public Administration" },
];

const statusColor: Record<string, string> = {
  sealed: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  approved: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  disputed: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  submitted: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  draft: "bg-muted text-muted-foreground",
  under_review: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
};

const lifecycle = [
  { step: "Record Creation", records: 24, desc: "All 24 governance records created with full metadata, authority context, and sector classification." },
  { step: "Evidence Attachment", records: 24, desc: "Documents, contracts, and inspection reports attached with SHA-256 file hashes." },
  { step: "Authority Binding", records: 19, desc: "19 records advanced past draft with authority mandate and role confirmation." },
  { step: "Record Sealing", records: 10, desc: "10 records sealed with immutable hash, verification receipt, and append-only chain link." },
  { step: "Public Verification", records: 10, desc: "All sealed records independently verifiable via token lookup and hash recomputation." },
  { step: "Audit Review", records: 24, desc: "13 audit trail entries logged. Full trace reconstruction confirmed for all records." },
  { step: "Dispute Handling", records: 2, desc: "2 disputes raised and tracked immutably with evidence, resolution path, and status change." },
];

const findings = [
  {
    type: "Confirmed",
    icon: CheckCircle,
    color: "text-emerald-500",
    items: [
      "Deterministic state machine enforces governance workflow without discretionary override",
      "SHA-256 hash chain maintains cryptographic integrity across sealed record sequences",
      "Multi-tenant isolation prevents cross-institutional data leakage",
      "9-role RBAC system enforces least-privilege access via PostgreSQL RLS",
      "Append-only audit trail provides complete, tamper-evident activity reconstruction",
      "Public verification portal reveals only non-confidential provenance data",
      "Dispute mechanism operates within the immutable record lifecycle",
    ],
  },
  {
    type: "Recommended — Next Phase",
    icon: ArrowRight,
    color: "text-blue-500",
    items: [
      "Independent third-party penetration test and security audit",
      "Multi-node federation protocol for cross-jurisdiction record sharing",
      "External timestamping anchor (HSM/KMS integration)",
      "Load testing at national scale (10,000+ records/month)",
      "Accessibility audit to WCAG 2.1 AA compliance",
      "Formal Common Criteria or ISO 27001 certification pathway",
    ],
  },
];

export default function PilotResults() {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Pilot Simulation Results — Republic of Novaris"
        subtitle="GRGF Pilot Node v0.1 — Controlled Evaluation Outcomes"
      />

      {/* Executive Summary */}
      <Section title="Executive Summary" className="border-b border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <p className="text-sm text-foreground leading-relaxed mb-4">
            The GRGF Pilot Node v0.1 was deployed in a controlled simulation environment representing the <strong>Republic of Novaris</strong> — a fictional but realistic sovereign state. Three institutional tenants processed <strong>24 governance records</strong> across <strong>12 sectors</strong>, exercising the full record lifecycle from creation through sealing, verification, audit, and dispute handling.
          </p>
          <p className="text-sm text-foreground leading-relaxed mb-4">
            <strong>All 7 pilot KPIs were met or exceeded.</strong> The system demonstrated deterministic policy enforcement, cryptographic record integrity, multi-tenant isolation, role-based access control, immutable audit trails, and independent public verification — confirming readiness for structured institutional evaluation.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 text-xs">
              <CheckCircle className="h-3 w-3 mr-1" /> ALL KPIs MET
            </Badge>
            <Badge variant="outline" className="text-xs">Pilot Status: COMPLETE</Badge>
          </div>
        </div>
      </Section>

      {/* Key Metrics */}
      <Section title="Key Metrics" className="border-b border-border">
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {summaryMetrics.map((m) => (
            <Card key={m.label} className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <m.icon className={`h-4 w-4 ${m.color}`} />
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">{m.label}</p>
              </div>
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* KPI Assessment */}
      <Section title="KPI Assessment" className="border-b border-border">
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">KPI</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Target</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Achieved</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Result</th>
                <th className="text-left py-2 text-muted-foreground/70 font-medium">Evidence</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {kpiResults.map((k) => (
                <tr key={k.metric} className="border-b border-border/50">
                  <td className="py-2.5 pr-4 font-medium text-foreground">{k.metric}</td>
                  <td className="py-2.5 pr-4 font-mono">{k.target}</td>
                  <td className="py-2.5 pr-4 font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{k.achieved}</td>
                  <td className="py-2.5 pr-4">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 text-[10px]">
                      <CheckCircle className="h-2.5 w-2.5 mr-1" /> PASS
                    </Badge>
                  </td>
                  <td className="py-2.5 text-[11px]">{k.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Tenant Performance */}
      <Section title="Tenant Performance" className="border-b border-border">
        <div className="grid gap-4 lg:grid-cols-3">
          {tenantResults.map((t) => (
            <Card key={t.name} className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Building2 className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-semibold text-foreground">{t.name}</h3>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Records</p>
                  <p className="text-lg font-bold">{t.records}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Sealed</p>
                  <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{t.sealed}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground uppercase">Disputed</p>
                  <p className="text-lg font-bold text-red-600 dark:text-red-400">{t.disputed}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-2">{t.highlight}</p>
              <div className="flex flex-wrap gap-1">
                {t.sectors.map((s) => (
                  <Badge key={s} variant="outline" className="text-[9px]">{s}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sector Distribution */}
      <Section title="Sector Distribution" className="border-b border-border">
        <div className="governance-card">
          <div className="space-y-2">
            {sectorDistribution.map((s) => (
              <div key={s.sector} className="flex items-center gap-3">
                <p className="text-xs text-foreground w-48 shrink-0 font-medium">{s.sector}</p>
                <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${(s.count / 6) * 100}%` }}
                  />
                </div>
                <p className="text-xs font-mono text-muted-foreground w-8 text-right">{s.count}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Lifecycle Walkthrough */}
      <Section title="Lifecycle Walkthrough" className="border-b border-border">
        <div className="space-y-3">
          {lifecycle.map((l, i) => (
            <Card key={l.step} className="p-4 flex items-start gap-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/10 text-accent shrink-0">
                <span className="text-xs font-bold">{i + 1}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{l.step}</h3>
                  <Badge variant="outline" className="text-[10px] font-mono">{l.records} records</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{l.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Sample Records */}
      <Section title="Sample Records" className="border-b border-border">
        <div className="governance-card overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Record Title</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Sector</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Tenant</th>
                <th className="text-left py-2 text-muted-foreground/70 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {recordExamples.map((r) => (
                <tr key={r.title} className="border-b border-border/50">
                  <td className="py-2.5 pr-4 font-medium text-foreground">{r.title}</td>
                  <td className="py-2.5 pr-4">{r.sector}</td>
                  <td className="py-2.5 pr-4 text-[11px]">{r.tenant}</td>
                  <td className="py-2.5">
                    <Badge className={`text-[10px] ${statusColor[r.status] || "bg-muted"}`}>
                      {r.status.toUpperCase()}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Findings */}
      <Section title="Findings & Recommendations" className="border-b border-border">
        <div className="grid gap-6 lg:grid-cols-2">
          {findings.map((f) => (
            <div key={f.type} className="governance-card">
              <div className="flex items-center gap-2 mb-3">
                <f.icon className={`h-4 w-4 ${f.color}`} />
                <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{f.type}</p>
              </div>
              <div className="space-y-2">
                {f.items.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className={`h-3 w-3 shrink-0 mt-0.5 ${f.color}`} />
                    <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Verdict */}
      <Section title="Pilot Verdict">
        <div className="governance-card border-l-2 border-l-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-lg font-semibold text-foreground">VERDICT: PILOT OBJECTIVES MET</h3>
          </div>
          <p className="text-sm text-foreground leading-relaxed mb-4">
            The GRGF Pilot Node v0.1 has successfully demonstrated the core thesis: governance actions can be recorded at execution time, bound to authority and context, stored immutably, verified independently, and audited fully — transforming trust-based governance into <strong>proof-based governance</strong>.
          </p>
          <p className="text-sm text-foreground leading-relaxed mb-6">
            The system is ready for structured institutional evaluation by authorized government bodies, multilateral organizations, and independent assurance teams. Progression to Phase 2 (multi-node federation and external audit) is recommended.
          </p>
          <div className="flex flex-wrap gap-2">
            <Link to="/app/demo" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
              <Eye className="h-3.5 w-3.5" /> Run Guided Demo
            </Link>
            <Link to="/verify" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-medium rounded-sm hover:bg-muted transition-colors">
              <Search className="h-3.5 w-3.5" /> Verify a Record
            </Link>
            <Link to="/pilot-programme" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-medium rounded-sm hover:bg-muted transition-colors">
              <FileText className="h-3.5 w-3.5" /> View Pilot Programme
            </Link>
          </div>
        </div>
        <p className="mt-6 text-[10px] font-mono text-muted-foreground/40 tracking-wider text-center">
          GRGF PILOT NODE v0.1 — REPUBLIC OF NOVARIS — CONTROLLED EVALUATION COMPLETE — {new Date().toISOString().split('T')[0]}
        </p>
      </Section>
    </div>
  );
}
