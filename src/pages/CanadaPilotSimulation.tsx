import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { PatentNotice } from "@/components/PatentNotice";
import {
  Play, CheckCircle2, Shield, Lock, Hash, Eye, AlertTriangle,
  Building2, Activity, FileText, Clock, Users, BarChart3,
  ArrowRight, Zap, Server, Globe, Database, ChevronDown,
  ChevronRight, TrendingUp, Award, Search, Fingerprint,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

/* ═══════════════════ TYPES ═══════════════════ */

interface PilotRecord {
  id: string;
  title: string;
  department: string;
  deptCode: string;
  recordType: string;
  status: "draft" | "submitted" | "under_review" | "approved" | "sealed" | "disputed";
  hash?: string;
  createdAt: string;
  sealedAt?: string;
  actor: string;
  authority: string;
  description: string;
}

interface AuditEntry {
  id: string;
  recordId: string;
  action: string;
  actor: string;
  timestamp: string;
  hash?: string;
}

interface KPIResult {
  metric: string;
  target: string;
  achieved: string;
  status: "pass" | "fail" | "pending";
}

/* ═══════════════════ DATA ═══════════════════ */

const DEPARTMENTS = [
  { code: "ESDC", name: "Employment & Social Development Canada", icon: Users, color: "bg-blue-500/10 text-blue-600 border-blue-200", records: 12, focus: "Benefits administration, EI claims, CPP/OAS decisions" },
  { code: "CRA", name: "Canada Revenue Agency", icon: BarChart3, color: "bg-emerald-500/10 text-emerald-600 border-emerald-200", records: 10, focus: "Tax assessments, audits, compliance enforcement" },
  { code: "PSPC", name: "Public Services & Procurement Canada", icon: Building2, color: "bg-violet-500/10 text-violet-600 border-violet-200", records: 8, focus: "Procurement awards, contract approvals, vendor evaluations" },
];

const PILOT_PHASES = [
  { phase: 1, name: "Setup & Alignment", days: "Days 1–30", items: ["Environment provisioning", "Stakeholder alignment", "Scope confirmation", "Security baseline"], status: "complete" as const },
  { phase: 2, name: "Policy Encoding & Testing", days: "Days 31–60", items: ["Policy-as-code encoding", "Deterministic testing", "Hash verification", "Cross-department workflows"], status: "complete" as const },
  { phase: 3, name: "Full Operation & Findings", days: "Days 61–90", items: ["Live governance recording", "Audit reconstruction", "Findings report", "Next-phase recommendations"], status: "active" as const },
];

const generateHash = () => Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("");

const SEED_RECORDS: PilotRecord[] = [
  { id: "GRGF-CA-0001", title: "EI Benefit Approval — Claim #2026-EI-44891", department: "ESDC", deptCode: "ESDC", recordType: "Decision Record", status: "sealed", hash: generateHash(), createdAt: "2026-02-15T09:14:00Z", sealedAt: "2026-02-15T10:22:00Z", actor: "Benefits Officer A", authority: "Employment Insurance Act, s.48", description: "Standard EI benefit claim approved after 28-day assessment." },
  { id: "GRGF-CA-0002", title: "CPP Disability Review — File #CPP-D-2026-1102", department: "ESDC", deptCode: "ESDC", recordType: "Approval Record", status: "sealed", hash: generateHash(), createdAt: "2026-02-16T11:30:00Z", sealedAt: "2026-02-16T14:45:00Z", actor: "Medical Adjudicator B", authority: "Canada Pension Plan Act, s.42", description: "CPP disability benefit review — medical evidence validated, benefit continued." },
  { id: "GRGF-CA-0003", title: "OAS Clawback Notice — Recipient #OAS-2026-7734", department: "ESDC", deptCode: "ESDC", recordType: "Decision Record", status: "sealed", hash: generateHash(), createdAt: "2026-02-18T08:00:00Z", sealedAt: "2026-02-18T09:15:00Z", actor: "Senior Benefits Analyst", authority: "Old Age Security Act, s.12", description: "Recovery tax applied based on income threshold. Notice issued with appeal window." },
  { id: "GRGF-CA-0004", title: "Tax Assessment Override — Audit #TA-2026-3398", department: "CRA", deptCode: "CRA", recordType: "Compliance Finding", status: "sealed", hash: generateHash(), createdAt: "2026-02-19T10:00:00Z", sealedAt: "2026-02-19T15:30:00Z", actor: "Tax Auditor C", authority: "Income Tax Act, s.152(4)", description: "Reassessment issued after review of claimed business expenses exceeding threshold." },
  { id: "GRGF-CA-0005", title: "GST/HST Refund Denial — Claim #GST-2026-0891", department: "CRA", deptCode: "CRA", recordType: "Decision Record", status: "sealed", hash: generateHash(), createdAt: "2026-02-20T13:45:00Z", sealedAt: "2026-02-20T16:00:00Z", actor: "GST Review Officer", authority: "Excise Tax Act, s.228", description: "Input tax credit claim denied due to insufficient documentation. Denial recorded." },
  { id: "GRGF-CA-0006", title: "Procurement Award — RFP #PSPC-2026-ICT-042", department: "PSPC", deptCode: "PSPC", recordType: "Procurement Event", status: "sealed", hash: generateHash(), createdAt: "2026-02-21T09:30:00Z", sealedAt: "2026-02-22T11:00:00Z", actor: "Procurement Officer D", authority: "Government Contracts Regulations, s.5", description: "Competitive procurement for IT modernization. Award to highest-scoring compliant bidder." },
  { id: "GRGF-CA-0007", title: "Sole-Source Justification — Contract #SS-2026-NatSec-07", department: "PSPC", deptCode: "PSPC", recordType: "Approval Record", status: "sealed", hash: generateHash(), createdAt: "2026-02-23T14:00:00Z", sealedAt: "2026-02-23T16:30:00Z", actor: "Senior Contracting Authority", authority: "Government Contracts Regulations, s.6", description: "Exception to competitive process. National security justification documented and sealed." },
  { id: "GRGF-CA-0008", title: "EI Claim Denial — Voluntary Departure #EI-VD-2026-552", department: "ESDC", deptCode: "ESDC", recordType: "Decision Record", status: "disputed", hash: generateHash(), createdAt: "2026-02-24T10:15:00Z", actor: "Claims Officer E", authority: "Employment Insurance Act, s.30", description: "EI claim denied — claimant left employment voluntarily. Dispute raised by appellant." },
  { id: "GRGF-CA-0009", title: "Compliance Audit Completion — Entity #CRA-COMP-2026-445", department: "CRA", deptCode: "CRA", recordType: "Inspection Record", status: "approved", hash: generateHash(), createdAt: "2026-02-25T08:30:00Z", actor: "Compliance Auditor F", authority: "Income Tax Act, s.231.1", description: "Compliance audit of mid-size corporation completed. No material findings." },
  { id: "GRGF-CA-0010", title: "Vendor Performance Evaluation — Contract #PSPC-VP-2026-19", department: "PSPC", deptCode: "PSPC", recordType: "Compliance Finding", status: "approved", hash: generateHash(), createdAt: "2026-02-26T11:00:00Z", actor: "Contract Manager G", authority: "PSPC Vendor Performance Framework", description: "Annual vendor performance evaluation. Meets requirements with conditions." },
  { id: "GRGF-CA-0011", title: "SIN Fraud Investigation — Case #SIN-F-2026-031", department: "ESDC", deptCode: "ESDC", recordType: "Incident Record", status: "under_review", createdAt: "2026-02-27T09:00:00Z", actor: "Integrity Officer H", authority: "Department of Employment and Social Development Act", description: "Suspected SIN misuse identified. Investigation record created, pending review." },
  { id: "GRGF-CA-0012", title: "Emergency Procurement — Medical Supplies #EP-2026-MED-03", department: "PSPC", deptCode: "PSPC", recordType: "Procurement Event", status: "submitted", createdAt: "2026-02-28T07:45:00Z", actor: "Emergency Procurement Lead", authority: "Government Contracts Regulations, s.6(d)", description: "Emergency procurement for medical supplies. Expedited approval path initiated." },
];

const KPIS: KPIResult[] = [
  { metric: "Policy Enforcement Determinism", target: "100%", achieved: "100%", status: "pass" },
  { metric: "Denial Clarity Index", target: "100%", achieved: "100%", status: "pass" },
  { metric: "Ledger Integrity (SHA-256)", target: "100%", achieved: "100%", status: "pass" },
  { metric: "Audit Reconstruction Time", target: "< 30 min", achieved: "< 7 min", status: "pass" },
  { metric: "Incident Trace Completeness", target: "100%", achieved: "100%", status: "pass" },
  { metric: "Multi-Tenant Isolation", target: "100%", achieved: "100%", status: "pass" },
  { metric: "RBAC Enforcement (9 roles)", target: "100%", achieved: "100%", status: "pass" },
  { metric: "Cross-Department Verification", target: "> 95%", achieved: "100%", status: "pass" },
  { metric: "Omission Detection Rate", target: "> 90%", achieved: "97%", status: "pass" },
  { metric: "GC Digital Standards Compliance", target: "100%", achieved: "100%", status: "pass" },
];

const statusConfig: Record<string, { label: string; color: string }> = {
  draft: { label: "Draft", color: "bg-muted text-muted-foreground" },
  submitted: { label: "Submitted", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" },
  under_review: { label: "Under Review", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400" },
  approved: { label: "Approved", color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" },
  sealed: { label: "Sealed", color: "bg-primary/10 text-primary" },
  disputed: { label: "Disputed", color: "bg-destructive/10 text-destructive" },
};

/* ═══════════════════ SIMULATION ENGINE ═══════════════════ */

function generateAuditTrail(records: PilotRecord[]): AuditEntry[] {
  const trail: AuditEntry[] = [];
  records.forEach((r) => {
    trail.push({ id: `AE-${r.id}-1`, recordId: r.id, action: "Record Created", actor: r.actor, timestamp: r.createdAt });
    if (r.status !== "draft") trail.push({ id: `AE-${r.id}-2`, recordId: r.id, action: "Submitted for Review", actor: r.actor, timestamp: new Date(new Date(r.createdAt).getTime() + 3600000).toISOString() });
    if (["approved", "sealed", "disputed"].includes(r.status)) trail.push({ id: `AE-${r.id}-3`, recordId: r.id, action: "Review Completed", actor: "Supervisor", timestamp: new Date(new Date(r.createdAt).getTime() + 7200000).toISOString() });
    if (["approved", "sealed"].includes(r.status)) trail.push({ id: `AE-${r.id}-4`, recordId: r.id, action: "Approved", actor: "Authority Holder", timestamp: new Date(new Date(r.createdAt).getTime() + 10800000).toISOString() });
    if (r.status === "sealed") trail.push({ id: `AE-${r.id}-5`, recordId: r.id, action: "Sealed — Hash Committed", actor: "System", timestamp: r.sealedAt!, hash: r.hash });
    if (r.status === "disputed") trail.push({ id: `AE-${r.id}-6`, recordId: r.id, action: "Dispute Raised", actor: "Appellant", timestamp: new Date(new Date(r.createdAt).getTime() + 14400000).toISOString() });
  });
  return trail.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

/* ═══════════════════ COMPONENT ═══════════════════ */

export default function CanadaPilotSimulation() {
  const [simRunning, setSimRunning] = useState(false);
  const [simComplete, setSimComplete] = useState(false);
  const [simProgress, setSimProgress] = useState(0);
  const [simStep, setSimStep] = useState(0);
  const [records, setRecords] = useState<PilotRecord[]>([]);
  const [auditTrail, setAuditTrail] = useState<AuditEntry[]>([]);
  const [selectedRecord, setSelectedRecord] = useState<PilotRecord | null>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [deptFilter, setDeptFilter] = useState<string | null>(null);

  const simSteps = [
    "Initializing sovereign environment…",
    "Provisioning ESDC governance node…",
    "Provisioning CRA governance node…",
    "Provisioning PSPC governance node…",
    "Encoding federal policy rules (GOS v4.2)…",
    "Deploying SHA-256 chain anchoring…",
    "Loading 12 pilot records across 3 departments…",
    "Running deterministic policy evaluation…",
    "Sealing approved records…",
    "Generating verification receipts…",
    "Computing KPI results…",
    "Pilot simulation complete ✓",
  ];

  const runSimulation = useCallback(() => {
    setSimRunning(true);
    setSimComplete(false);
    setSimProgress(0);
    setSimStep(0);
    setRecords([]);
    setAuditTrail([]);
    setSelectedRecord(null);

    simSteps.forEach((_, i) => {
      setTimeout(() => {
        setSimStep(i);
        setSimProgress(Math.round(((i + 1) / simSteps.length) * 100));
        if (i === 6) setRecords(SEED_RECORDS.slice(0, 4));
        if (i === 7) setRecords(SEED_RECORDS.slice(0, 8));
        if (i === 8) setRecords(SEED_RECORDS.slice(0, 10));
        if (i === 9) setRecords(SEED_RECORDS);
        if (i === simSteps.length - 1) {
          setRecords(SEED_RECORDS);
          setAuditTrail(generateAuditTrail(SEED_RECORDS));
          setSimRunning(false);
          setSimComplete(true);
        }
      }, (i + 1) * 800);
    });
  }, []);

  const filteredRecords = deptFilter ? records.filter(r => r.deptCode === deptFilter) : records;
  const sealedCount = records.filter(r => r.status === "sealed").length;
  const disputedCount = records.filter(r => r.status === "disputed").length;

  return (
    <>
      <SEOHead
        title="Canadian Government Pilot Simulation — GRGF"
        description="Full-fidelity simulation of a 90-day Canadian federal government pilot across ESDC, CRA, and PSPC."
      />

      <div className="animate-fade-in">
        {/* ── Hero ── */}
        <div className="border-b border-border bg-gradient-to-b from-card to-background">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🇨🇦</span>
              <Badge variant="outline" className="font-mono text-[10px] tracking-wider">
                PILOT SIMULATION · TRL 6
              </Badge>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Canadian Federal Government — 90-Day Pilot
            </h1>
            <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
              Full-fidelity simulation of GRGF deployment across three federal departments.
              Deterministic governance recording, SHA-256 integrity sealing, and real-time audit reconstruction.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {!simRunning && !simComplete && (
                <button
                  onClick={runSimulation}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-sm hover:bg-primary/90 transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Launch Pilot Simulation
                </button>
              )}
              {simComplete && (
                <button
                  onClick={runSimulation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-medium rounded-sm hover:bg-muted transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Re-run Simulation
                </button>
              )}
              {simComplete && (
                <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 font-mono text-xs px-3 py-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 mr-1.5" />
                  10/10 KPIs PASSED
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* ── Simulation Progress ── */}
        <AnimatePresence>
          {simRunning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-b border-border bg-card"
            >
              <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm font-mono text-muted-foreground">{simSteps[simStep]}</span>
                </div>
                <Progress value={simProgress} className="h-2" />
                <div className="mt-3 flex justify-between text-[10px] font-mono text-muted-foreground/60">
                  <span>Step {simStep + 1} of {simSteps.length}</span>
                  <span>{simProgress}%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Departments Overview ── */}
        <div className="border-b border-border">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h2 className="font-serif text-lg font-semibold mb-6">Participating Federal Departments</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {DEPARTMENTS.map((dept) => {
                const DeptIcon = dept.icon;
                const deptRecords = records.filter(r => r.deptCode === dept.code);
                const deptSealed = deptRecords.filter(r => r.status === "sealed").length;
                return (
                  <Card
                    key={dept.code}
                    className={`p-5 cursor-pointer transition-all hover:shadow-md ${deptFilter === dept.code ? "ring-2 ring-primary" : ""}`}
                    onClick={() => setDeptFilter(deptFilter === dept.code ? null : dept.code)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-sm border ${dept.color}`}>
                        <DeptIcon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] font-mono text-muted-foreground mb-0.5">{dept.code}</p>
                        <p className="text-sm font-semibold text-foreground leading-tight">{dept.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{dept.focus}</p>
                      </div>
                    </div>
                    {simComplete && (
                      <div className="mt-4 pt-3 border-t border-border grid grid-cols-3 gap-2">
                        <div>
                          <p className="text-lg font-bold text-foreground">{deptRecords.length}</p>
                          <p className="text-[10px] text-muted-foreground">Records</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-emerald-600">{deptSealed}</p>
                          <p className="text-[10px] text-muted-foreground">Sealed</p>
                        </div>
                        <div>
                          <p className="text-lg font-bold text-primary">100%</p>
                          <p className="text-[10px] text-muted-foreground">Integrity</p>
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Results Tabs ── */}
        {simComplete && (
          <div className="max-w-6xl mx-auto px-6 py-8">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="flex flex-wrap h-auto gap-1 bg-transparent p-0 mb-8">
                {[
                  { value: "overview", label: "Pilot Overview" },
                  { value: "records", label: "Records Ledger" },
                  { value: "audit", label: "Audit Trail" },
                  { value: "kpis", label: "KPI Results" },
                  { value: "financial", label: "Financial Impact" },
                ].map(t => (
                  <TabsTrigger
                    key={t.value}
                    value={t.value}
                    className="text-xs font-mono px-3 py-2 rounded-sm border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary bg-card"
                  >
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* ── Overview ── */}
              <TabsContent value="overview">
                <div className="space-y-8">
                  {/* Summary Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "Total Records", value: records.length, icon: FileText },
                      { label: "Records Sealed", value: sealedCount, icon: Lock },
                      { label: "Active Disputes", value: disputedCount, icon: AlertTriangle },
                      { label: "Audit Entries", value: auditTrail.length, icon: Activity },
                    ].map((m) => {
                      const MIcon = m.icon;
                      return (
                        <Card key={m.label} className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <MIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-[10px] font-mono text-muted-foreground uppercase">{m.label}</span>
                          </div>
                          <p className="text-2xl font-bold text-foreground">{m.value}</p>
                        </Card>
                      );
                    })}
                  </div>

                  {/* 90-Day Phase Timeline */}
                  <div>
                    <h3 className="font-serif text-base font-semibold mb-4">90-Day Pilot Phases</h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      {PILOT_PHASES.map((p) => (
                        <Card key={p.phase} className={`p-5 ${p.status === "active" ? "ring-2 ring-primary" : ""}`}>
                          <div className="flex items-center gap-2 mb-3">
                            <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold ${p.status === "complete" ? "bg-emerald-500 text-white" : "bg-primary text-primary-foreground"}`}>
                              {p.status === "complete" ? "✓" : p.phase}
                            </div>
                            <div>
                              <p className="text-sm font-semibold">{p.name}</p>
                              <p className="text-[10px] font-mono text-muted-foreground">{p.days}</p>
                            </div>
                          </div>
                          <ul className="space-y-1.5">
                            {p.items.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Status Distribution */}
                  <Card className="p-5">
                    <h3 className="font-serif text-base font-semibold mb-4">Record Status Distribution</h3>
                    <div className="flex flex-wrap gap-3">
                      {Object.entries(statusConfig).map(([key, cfg]) => {
                        const count = records.filter(r => r.status === key).length;
                        if (count === 0) return null;
                        return (
                          <div key={key} className="flex items-center gap-2">
                            <Badge className={`${cfg.color} text-xs`}>{cfg.label}</Badge>
                            <span className="text-sm font-bold">{count}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              {/* ── Records Ledger ── */}
              <TabsContent value="records">
                <div className="space-y-3">
                  {deptFilter && (
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="outline" className="font-mono text-xs">{deptFilter}</Badge>
                      <button onClick={() => setDeptFilter(null)} className="text-xs text-muted-foreground hover:text-foreground underline">Clear filter</button>
                    </div>
                  )}
                  {filteredRecords.map((r) => (
                    <Card
                      key={r.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-sm ${selectedRecord?.id === r.id ? "ring-2 ring-primary" : ""}`}
                      onClick={() => setSelectedRecord(selectedRecord?.id === r.id ? null : r)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-mono text-muted-foreground">{r.id}</span>
                            <Badge className={`${statusConfig[r.status].color} text-[10px]`}>{statusConfig[r.status].label}</Badge>
                            <Badge variant="outline" className="text-[10px]">{r.deptCode}</Badge>
                          </div>
                          <p className="text-sm font-semibold text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground mt-1">{r.recordType} · {r.actor}</p>
                        </div>
                        {r.status === "sealed" && (
                          <Lock className="h-4 w-4 text-primary shrink-0 mt-1" />
                        )}
                      </div>

                      {/* Expanded Detail */}
                      <AnimatePresence>
                        {selectedRecord?.id === r.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 pt-4 border-t border-border space-y-3"
                          >
                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div>
                                <p className="font-mono text-muted-foreground/70 uppercase text-[10px] mb-0.5">Authority</p>
                                <p className="text-foreground">{r.authority}</p>
                              </div>
                              <div>
                                <p className="font-mono text-muted-foreground/70 uppercase text-[10px] mb-0.5">Created</p>
                                <p className="text-foreground">{new Date(r.createdAt).toLocaleString()}</p>
                              </div>
                            </div>
                            <div>
                              <p className="font-mono text-muted-foreground/70 uppercase text-[10px] mb-0.5">Description</p>
                              <p className="text-xs text-muted-foreground">{r.description}</p>
                            </div>
                            {r.hash && (
                              <div>
                                <p className="font-mono text-muted-foreground/70 uppercase text-[10px] mb-0.5">Integrity Hash (SHA-256)</p>
                                <p className="font-mono text-[10px] text-foreground/80 break-all bg-muted/50 px-2 py-1.5 rounded-sm">{r.hash}</p>
                              </div>
                            )}
                            {r.sealedAt && (
                              <div className="flex items-center gap-2 text-xs text-emerald-600">
                                <Shield className="h-3.5 w-3.5" />
                                Sealed at {new Date(r.sealedAt).toLocaleString()}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* ── Audit Trail ── */}
              <TabsContent value="audit">
                <Card className="p-5">
                  <h3 className="font-serif text-base font-semibold mb-4">Complete Audit Trail</h3>
                  <p className="text-xs text-muted-foreground mb-6">{auditTrail.length} entries across {records.length} records. Append-only. Tamper-evident.</p>
                  <div className="space-y-2 max-h-[600px] overflow-y-auto">
                    {auditTrail.slice(0, 40).map((entry) => (
                      <div key={entry.id} className="flex items-start gap-3 p-3 border border-border rounded-sm hover:bg-muted/30 transition-colors">
                        <Activity className="h-3.5 w-3.5 text-muted-foreground shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-xs font-semibold text-foreground">{entry.action}</span>
                            <span className="text-[10px] font-mono text-muted-foreground">{entry.recordId}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground mt-0.5">
                            by {entry.actor} · {new Date(entry.timestamp).toLocaleString()}
                          </p>
                          {entry.hash && (
                            <p className="font-mono text-[9px] text-muted-foreground/60 mt-1 truncate">
                              SHA-256: {entry.hash.substring(0, 32)}…
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              {/* ── KPIs ── */}
              <TabsContent value="kpis">
                <Card className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-serif text-base font-semibold">Key Performance Indicators</h3>
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 font-mono text-xs">
                      10/10 PASS
                    </Badge>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Metric</th>
                          <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Target</th>
                          <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Achieved</th>
                          <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {KPIS.map((kpi) => (
                          <tr key={kpi.metric} className="border-b border-border/50">
                            <td className="py-3 text-xs font-medium text-foreground">{kpi.metric}</td>
                            <td className="py-3 text-xs font-mono text-muted-foreground">{kpi.target}</td>
                            <td className="py-3 text-xs font-mono font-semibold text-foreground">{kpi.achieved}</td>
                            <td className="py-3">
                              <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-200 text-[10px]">
                                <CheckCircle2 className="h-3 w-3 mr-1" />
                                PASS
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </TabsContent>

              {/* ── Financial Impact ── */}
              <TabsContent value="financial">
                <div className="space-y-6">
                  <Card className="p-5">
                    <h3 className="font-serif text-base font-semibold mb-4">Projected 5-Year Federal Impact (CAD)</h3>
                    <p className="text-xs text-muted-foreground mb-6">Based on 120 federal organizations, World Bank / OECD methodology.</p>

                    <div className="grid gap-4 md:grid-cols-3">
                      {[
                        { scenario: "Conservative", annual: "$397.7M", fiveYear: "$1.99B", roi: "16:1" },
                        { scenario: "Expected", annual: "$742.7M", fiveYear: "$3.71B", roi: "30:1" },
                        { scenario: "Aggressive", annual: "$1.51B", fiveYear: "$7.55B", roi: "61:1" },
                      ].map((s) => (
                        <Card key={s.scenario} className={`p-5 ${s.scenario === "Expected" ? "ring-2 ring-primary" : ""}`}>
                          <p className="text-[10px] font-mono text-muted-foreground uppercase mb-2">{s.scenario}</p>
                          <p className="text-2xl font-bold text-foreground">{s.annual}</p>
                          <p className="text-xs text-muted-foreground">Annual Net Benefit</p>
                          <div className="mt-3 pt-3 border-t border-border grid grid-cols-2 gap-2">
                            <div>
                              <p className="text-sm font-bold">{s.fiveYear}</p>
                              <p className="text-[10px] text-muted-foreground">5-Year Total</p>
                            </div>
                            <div>
                              <p className="text-sm font-bold text-emerald-600">{s.roi}</p>
                              <p className="text-[10px] text-muted-foreground">ROI</p>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </Card>

                  <Card className="p-5">
                    <h3 className="font-serif text-base font-semibold mb-4">Inventor Financial Projection — Tarek Wahid (40% Interest)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Year</th>
                            <th className="text-left py-2 text-[10px] font-mono text-muted-foreground uppercase">Phase</th>
                            <th className="text-right py-2 text-[10px] font-mono text-muted-foreground uppercase">Annual (Base)</th>
                            <th className="text-right py-2 text-[10px] font-mono text-muted-foreground uppercase">Monthly (Base)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { year: "Year 1", phase: "Pilot & Licensing", annual: "$350K", monthly: "$29K" },
                            { year: "Year 2", phase: "Federal Expansion", annual: "$1.2M", monthly: "$100K" },
                            { year: "Year 3", phase: "National Scale", annual: "$2.4M", monthly: "$200K" },
                            { year: "Year 4", phase: "International", annual: "$5.0M", monthly: "$417K" },
                            { year: "Year 5", phase: "Global Platform", annual: "$10.0M+", monthly: "$833K+" },
                          ].map((row) => (
                            <tr key={row.year} className="border-b border-border/50">
                              <td className="py-3 text-xs font-semibold">{row.year}</td>
                              <td className="py-3 text-xs text-muted-foreground">{row.phase}</td>
                              <td className="py-3 text-xs font-mono font-semibold text-right">{row.annual}</td>
                              <td className="py-3 text-xs font-mono text-right text-muted-foreground">{row.monthly}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {/* ── Pre-simulation placeholder ── */}
        {!simRunning && !simComplete && (
          <div className="max-w-6xl mx-auto px-6 py-16 text-center">
            <Server className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Click <strong>"Launch Pilot Simulation"</strong> to run the full 90-day Canadian federal pilot mockup.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Simulates 12 governance records across ESDC, CRA, and PSPC with deterministic policy evaluation, SHA-256 sealing, and real-time KPI scoring.
            </p>
          </div>
        )}

        {/* ── Footer ── */}
        <div className="border-t border-border bg-card/30">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start gap-4">
            <AlertTriangle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
            <div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Disclaimer.</span> This simulation is for demonstration and institutional evaluation purposes only.
                No real government data is processed. Record IDs, hashes, and financial projections are illustrative.
              </p>
              <p className="text-[10px] text-muted-foreground/50 mt-2">
                Global Record Governance Framework — Invented and Owned by Tarek Wahid · Canadian Patent No. CA 3,300,102
              </p>
            </div>
          </div>
        </div>

        <PatentNotice />
      </div>
    </>
  );
}
