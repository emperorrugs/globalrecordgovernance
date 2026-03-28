import { PageHeader, Section } from "@/components/PageComponents";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  AlertTriangle, CheckCircle, ShieldCheck, FileText, Eye,
  DollarSign, Clock, Scale, ArrowRight, XCircle, Hash,
  Building2, Activity, Lock,
} from "lucide-react";

interface CaseProps {
  id: number;
  title: string;
  sector: string;
  icon: React.ComponentType<{ className?: string }>;
  realFailure: { headline: string; details: string[]; cost: string; source: string };
  withGRGF: { headline: string; mechanisms: string[]; outcome: string };
  metrics: { label: string; before: string; after: string }[];
}

const cases: CaseProps[] = [
  {
    id: 1,
    title: "Public Procurement Fraud",
    sector: "Government Procurement",
    icon: DollarSign,
    realFailure: {
      headline: "A $50M government IT contract is awarded without competitive bidding. Three years later, an audit reveals the vendor was selected before the RFP was published. No contemporaneous record of the approval decision exists.",
      details: [
        "Approval memo was created retroactively after media scrutiny",
        "No verifiable timestamp on the original decision",
        "Multiple versions of the evaluation matrix circulated with different scores",
        "The approving official denied involvement — no authority binding on record",
      ],
      cost: "$50M+ in public funds, plus $12M investigation costs",
      source: "Based on patterns documented in OECD Anti-Corruption Reports and World Bank Integrity Vice Presidency findings",
    },
    withGRGF: {
      headline: "The procurement decision is recorded at execution time, bound to the approving official's role and mandate, sealed with SHA-256 hash, and made independently verifiable.",
      mechanisms: [
        "Record created at decision time — not days or weeks later",
        "Authority binding captures the approving official, their mandate, and legal basis",
        "Evaluation matrix attached with file hash — any later modification detected",
        "Record sealed immutably — cannot be retroactively altered",
        "Append-only audit trail captures every action with timestamp and actor",
        "Public verification allows oversight bodies to confirm integrity without accessing confidential details",
      ],
      outcome: "Retroactive document creation becomes impossible. The absence of a record is itself verifiable evidence of an omission.",
    },
    metrics: [
      { label: "Time to detect irregularity", before: "3+ years", after: "Immediate" },
      { label: "Document authenticity", before: "Unverifiable", after: "SHA-256 sealed" },
      { label: "Authority attribution", before: "Deniable", after: "Cryptographically bound" },
      { label: "Investigation cost", before: "$12M+", after: "Near zero" },
    ],
  },
  {
    id: 2,
    title: "Lost Hospital Inspection Records",
    sector: "Healthcare Governance",
    icon: Building2,
    realFailure: {
      headline: "A regional hospital fails a safety inspection. The inspection report is filed but 'lost' during an administrative transition. Eighteen months later, a patient safety incident occurs. No inspection history is recoverable.",
      details: [
        "Paper-based inspection report stored in a single filing system",
        "Administrative staff transition caused records to be misplaced",
        "Hospital claimed the inspection never identified serious concerns",
        "No independent verification mechanism existed",
        "Regulator had no immutable copy of the original finding",
      ],
      cost: "Patient safety incident, $8M settlement, loss of institutional trust",
      source: "Based on patterns from WHO Patient Safety reports and national healthcare governance audits",
    },
    withGRGF: {
      headline: "The inspection record is created at the time of inspection, sealed with evidence attachments, and stored in an append-only ledger that survives administrative transitions.",
      mechanisms: [
        "Inspection finding recorded in real-time during site visit",
        "Photos, checklists, and compliance forms attached with SHA-256 hashes",
        "Record sealed immediately after inspector completes review",
        "Append-only storage — record survives staff changes, system migrations, and reorganizations",
        "Regulator retains independent verification access",
        "Audit trail shows complete chain of custody for the inspection record",
      ],
      outcome: "Records cannot be 'lost.' The inspection finding persists regardless of organizational change.",
    },
    metrics: [
      { label: "Record survival rate", before: "Uncertain", after: "100%" },
      { label: "Evidence integrity", before: "Unverifiable", after: "Hash-sealed" },
      { label: "Recovery after staff transition", before: "Failed", after: "Automatic" },
      { label: "Independent verification", before: "Not possible", after: "Token-based" },
    ],
  },
  {
    id: 3,
    title: "Disputed Infrastructure Approval",
    sector: "Infrastructure Oversight",
    icon: Scale,
    realFailure: {
      headline: "A construction permit for a major bridge is approved. After a structural failure, the approving engineer claims the permit included conditions that the contractor violated. The contractor claims no conditions were attached. Neither can prove their version.",
      details: [
        "Approval was communicated verbally and confirmed by email",
        "Email thread shows conflicting versions of attached conditions",
        "No canonical, sealed record of the approval decision existed",
        "Both parties produced different documents claiming to be 'the original'",
        "Court proceedings lasted 4 years due to evidence uncertainty",
      ],
      cost: "$200M+ infrastructure remediation, 4 years of litigation, 3 fatalities",
      source: "Based on patterns from infrastructure governance failures documented in World Bank Independent Evaluation Group reports",
    },
    withGRGF: {
      headline: "The permit approval is recorded with exact conditions, sealed at the moment of issuance, and both parties receive verification receipts linked to the same immutable record.",
      mechanisms: [
        "Permit conditions recorded as structured metadata at approval time",
        "Approving engineer's authority context and mandate captured",
        "Record sealed — no party can claim different conditions existed",
        "Both parties receive verification receipts pointing to the same canonical record",
        "Dispute mechanism allows formal challenge — but the original record remains unchanged",
        "Court can independently verify the original approval without relying on either party's copies",
      ],
      outcome: "Evidentiary uncertainty eliminated. The canonical record is the single source of truth.",
    },
    metrics: [
      { label: "Evidentiary disputes", before: "Unresolvable", after: "Eliminated" },
      { label: "Dispute resolution time", before: "4+ years", after: "Days" },
      { label: "Document authenticity", before: "Contested", after: "Cryptographically proven" },
      { label: "Litigation cost", before: "$20M+", after: "Near zero" },
    ],
  },
];

const BeforeAfter = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Before & After — Why GRGF Exists"
      subtitle="Three real governance failure patterns and how execution-time truth prevents them."
    />

    <Section title="The Problem Pattern" className="border-b border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed">
          Governance failures rarely result from malice alone. They result from <strong>systems that allow records to be created after the fact, modified without detection, lost during transitions, or disputed without resolution</strong>. GRGF addresses the structural root cause: the absence of execution-time, authority-bound, verifiable governance records.
        </p>
      </div>
    </Section>

    {cases.map((c) => (
      <Section key={c.id} title={`Case ${c.id}: ${c.title}`} className="border-b border-border">
        <Badge variant="outline" className="text-[10px] mb-4">{c.sector}</Badge>

        <div className="grid gap-6 lg:grid-cols-2 mb-6">
          {/* Before */}
          <Card className="p-5 border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-950/10">
            <div className="flex items-center gap-2 mb-3">
              <XCircle className="h-4 w-4 text-red-500" />
              <p className="text-[10px] font-mono text-red-600 dark:text-red-400 uppercase tracking-wider font-semibold">Without GRGF</p>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">{c.realFailure.headline}</p>
            <div className="space-y-2 mb-4">
              {c.realFailure.details.map((d) => (
                <div key={d} className="flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
            <div className="bg-red-100/50 dark:bg-red-900/20 rounded px-3 py-2">
              <p className="text-xs font-medium text-red-700 dark:text-red-300">Cost: {c.realFailure.cost}</p>
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-3 italic">{c.realFailure.source}</p>
          </Card>

          {/* After */}
          <Card className="p-5 border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/30 dark:bg-emerald-950/10">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-4 w-4 text-emerald-500" />
              <p className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-semibold">With GRGF</p>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4">{c.withGRGF.headline}</p>
            <div className="space-y-2 mb-4">
              {c.withGRGF.mechanisms.map((m) => (
                <div key={m} className="flex items-start gap-2">
                  <ShieldCheck className="h-3 w-3 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">{m}</p>
                </div>
              ))}
            </div>
            <div className="bg-emerald-100/50 dark:bg-emerald-900/20 rounded px-3 py-2">
              <p className="text-xs font-medium text-emerald-700 dark:text-emerald-300">{c.withGRGF.outcome}</p>
            </div>
          </Card>
        </div>

        {/* Metrics Comparison */}
        <Card className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 text-muted-foreground/70 font-medium">Metric</th>
                <th className="text-left py-3 px-4 text-red-500/70 font-medium">Before</th>
                <th className="text-left py-3 px-4 text-emerald-500/70 font-medium">After</th>
              </tr>
            </thead>
            <tbody>
              {c.metrics.map((m) => (
                <tr key={m.label} className="border-b border-border/50">
                  <td className="py-2.5 px-4 font-medium text-foreground">{m.label}</td>
                  <td className="py-2.5 px-4 text-red-600 dark:text-red-400 font-mono">{m.before}</td>
                  <td className="py-2.5 px-4 text-emerald-600 dark:text-emerald-400 font-mono font-semibold">{m.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </Section>
    ))}

    {/* Summary */}
    <Section title="The Structural Insight">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          These three cases share a common structural failure: <strong>governance actions were not recorded at execution time, not bound to authority, and not independently verifiable</strong>. GRGF does not prevent bad decisions — it prevents the structural conditions that allow bad decisions to be hidden, denied, or disputed without resolution.
        </p>
        <p className="text-sm text-foreground leading-relaxed mb-6">
          The difference between trust-based governance and proof-based governance is not philosophical — it is architectural. GRGF provides the missing execution-time truth layer.
        </p>
        <div className="flex flex-wrap gap-2">
          <Link to="/demo/app" className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-primary text-xs font-medium rounded-sm hover:bg-accent/90 transition-colors">
            <Eye className="h-3.5 w-3.5" /> Try the Live Demo
          </Link>
          <Link to="/pilot-results" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-medium rounded-sm hover:bg-muted transition-colors">
            <FileText className="h-3.5 w-3.5" /> View Pilot Results
          </Link>
          <Link to="/verify" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-xs font-medium rounded-sm hover:bg-muted transition-colors">
            <Hash className="h-3.5 w-3.5" /> Verify a Record
          </Link>
        </div>
      </div>
      <p className="mt-6 text-[10px] font-mono text-muted-foreground/40 tracking-wider text-center">
        CASE PATTERNS BASED ON PUBLICLY DOCUMENTED GOVERNANCE FAILURES · NOT SPECIFIC TO ANY SINGLE INSTITUTION
      </p>
    </Section>
  </div>
);

export default BeforeAfter;
