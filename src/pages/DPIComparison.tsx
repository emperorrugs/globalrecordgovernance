import { PageHeader, Section } from "@/components/PageComponents";
import { useViewMode } from "@/contexts/ViewModeContext";
import { Check, X, Minus, Shield, Globe, FileCheck, Layers, Lock, Eye, GitBranch, Users } from "lucide-react";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";

type Rating = "full" | "partial" | "none";

interface ComparisonRow {
  capability: string;
  detail: string;
  grgf: Rating;
  traditional: Rating;
  category: string;
}

const data: ComparisonRow[] = [
  // Integrity
  { category: "Record Integrity", capability: "Append-only immutable storage", detail: "Records cannot be edited, deleted, or reordered after sealing", grgf: "full", traditional: "none" },
  { category: "Record Integrity", capability: "Cryptographic hash-chain sealing", detail: "SHA-256/512 hash linking across all event records", grgf: "full", traditional: "none" },
  { category: "Record Integrity", capability: "Proof of non-existence", detail: "Ability to verify that an expected event did not occur", grgf: "full", traditional: "none" },
  { category: "Record Integrity", capability: "External anchor compatibility", detail: "Optional anchoring to public blockchain or national CA", grgf: "full", traditional: "partial" },
  { category: "Record Integrity", capability: "Tamper detection", detail: "Automatic detection of retroactive record modification", grgf: "full", traditional: "partial" },

  // Interoperability
  { category: "Interoperability", capability: "Cross-ministry data exchange", detail: "Structured event normalization across departments", grgf: "full", traditional: "partial" },
  { category: "Interoperability", capability: "Federation architecture", detail: "Voluntary cross-border governance validation", grgf: "full", traditional: "none" },
  { category: "Interoperability", capability: "Canonical schema definitions", detail: "Standardized event and policy schemas", grgf: "full", traditional: "partial" },
  { category: "Interoperability", capability: "Legacy system integration", detail: "Non-invasive integration with existing DPI", grgf: "full", traditional: "full" },
  { category: "Interoperability", capability: "API-first design", detail: "RESTful / event-driven interfaces for all capabilities", grgf: "full", traditional: "partial" },

  // Audit Readiness
  { category: "Audit Readiness", capability: "Full event trace reconstruction", detail: "Complete chronological replay of institutional actions", grgf: "full", traditional: "partial" },
  { category: "Audit Readiness", capability: "Deterministic denial explanation", detail: "Machine- and human-readable justification for every rejection", grgf: "full", traditional: "none" },
  { category: "Audit Readiness", capability: "Read-only auditor access", detail: "Scoped verification without data exposure", grgf: "full", traditional: "partial" },
  { category: "Audit Readiness", capability: "Real-time integrity validation", detail: "Continuous hash-chain verification without scheduled audits", grgf: "full", traditional: "none" },
  { category: "Audit Readiness", capability: "Omission-aware recording", detail: "Systematic capture of what did not happen", grgf: "full", traditional: "none" },

  // Federation
  { category: "Federation", capability: "Sovereign policy autonomy", detail: "Each nation encodes and controls its own policy logic", grgf: "full", traditional: "partial" },
  { category: "Federation", capability: "Cross-border proof validation", detail: "Verify institutional actions across jurisdictions", grgf: "full", traditional: "none" },
  { category: "Federation", capability: "Voluntary participation model", detail: "No mandatory data sharing or governance centralization", grgf: "full", traditional: "none" },
  { category: "Federation", capability: "Multi-tier trust levels", detail: "Observer, participant, and full-federation tiers", grgf: "full", traditional: "none" },

  // Security
  { category: "Security & Trust", capability: "Zero Trust architecture", detail: "No implicit authority; every action policy-verified", grgf: "full", traditional: "partial" },
  { category: "Security & Trust", capability: "Role separation enforcement", detail: "Policy, operation, audit, and verification roles isolated", grgf: "full", traditional: "partial" },
  { category: "Security & Trust", capability: "No super-admin override", detail: "No backdoor or master key capability", grgf: "full", traditional: "none" },
  { category: "Security & Trust", capability: "Incident response framework", detail: "Defined detection, isolation, and disclosure protocols", grgf: "full", traditional: "partial" },

  // Governance
  { category: "Governance Model", capability: "Deterministic policy enforcement", detail: "Governance decisions executed via encoded rules, not discretion", grgf: "full", traditional: "none" },
  { category: "Governance Model", capability: "Custodial neutrality", detail: "System enforces policy but does not interpret political decisions", grgf: "full", traditional: "none" },
  { category: "Governance Model", capability: "Anti-capture clauses", detail: "Codified protections against vendor or state capture", grgf: "full", traditional: "none" },
  { category: "Governance Model", capability: "Independent oversight structure", detail: "Multi-stakeholder governance board with rotation", grgf: "full", traditional: "partial" },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Record Integrity": <Shield className="h-5 w-5" />,
  "Interoperability": <Globe className="h-5 w-5" />,
  "Audit Readiness": <FileCheck className="h-5 w-5" />,
  "Federation": <Layers className="h-5 w-5" />,
  "Security & Trust": <Lock className="h-5 w-5" />,
  "Governance Model": <GitBranch className="h-5 w-5" />,
};

function RatingIcon({ rating }: { rating: Rating }) {
  if (rating === "full") return <Check className="h-4 w-4 text-accent mx-auto" />;
  if (rating === "partial") return <Minus className="h-4 w-4 text-muted-foreground mx-auto" />;
  return <X className="h-4 w-4 text-destructive/60 mx-auto" />;
}

function RatingLabel({ rating }: { rating: Rating }) {
  if (rating === "full") return <span className="text-xs font-medium text-accent">Full</span>;
  if (rating === "partial") return <span className="text-xs text-muted-foreground">Partial</span>;
  return <span className="text-xs text-destructive/60">None</span>;
}

export default function DPIComparison() {
  const { isPlain } = useViewMode();

  const categories = [...new Set(data.map((d) => d.category))];

  const grgfScore = data.filter((d) => d.grgf === "full").length;
  const tradFull = data.filter((d) => d.traditional === "full").length;
  const tradPartial = data.filter((d) => d.traditional === "partial").length;

  return (
    <div>
      <PageHeader
        title="GRGF vs Traditional DPI"
        subtitle={
          isPlain
            ? "A structured comparison of governance integrity capabilities between GRGF and conventional Digital Public Infrastructure systems."
            : "Capability matrix evaluating deterministic enforcement, cryptographic integrity, federation architecture, and audit-readiness posture across DPI paradigms."
        }
      />

      {/* Summary Stats */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="governance-card text-center">
            <p className="text-3xl font-serif font-bold text-accent">{data.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Capabilities Evaluated</p>
          </div>
          <div className="governance-card text-center">
            <p className="text-3xl font-serif font-bold text-accent">{grgfScore}/{data.length}</p>
            <p className="text-sm text-muted-foreground mt-1">GRGF Full Coverage</p>
          </div>
          <div className="governance-card text-center">
            <p className="text-3xl font-serif font-bold text-foreground">{tradFull}/{data.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Traditional DPI Full Coverage</p>
            <p className="text-xs text-muted-foreground mt-0.5">{tradPartial} partial</p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm">
          <span className="flex items-center gap-2"><Check className="h-4 w-4 text-accent" /> Full capability</span>
          <span className="flex items-center gap-2"><Minus className="h-4 w-4 text-muted-foreground" /> Partial / varies by implementation</span>
          <span className="flex items-center gap-2"><X className="h-4 w-4 text-destructive/60" /> Not available</span>
        </div>
      </Section>

      {/* Comparison Tables by Category */}
      {categories.map((cat) => (
        <Section key={cat} className="border-t border-border">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-accent">{categoryIcons[cat]}</div>
            <h2 className="institutional-heading text-xl font-semibold">{cat}</h2>
          </div>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Capability</TableHead>
                  <TableHead className="w-[40%] hidden md:table-cell">Detail</TableHead>
                  <TableHead className="w-[15%] text-center">GRGF</TableHead>
                  <TableHead className="w-[15%] text-center">Traditional DPI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.filter((d) => d.category === cat).map((row) => (
                  <TableRow key={row.capability}>
                    <TableCell className="font-medium text-sm">{row.capability}</TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden md:table-cell">{row.detail}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center gap-1">
                        <RatingIcon rating={row.grgf} />
                        <RatingLabel rating={row.grgf} />
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center gap-1">
                        <RatingIcon rating={row.traditional} />
                        <RatingLabel rating={row.traditional} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Section>
      ))}

      {/* Methodology Note */}
      <Section className="border-t border-border">
        <div className="governance-card">
          <div className="flex items-start gap-3">
            <Eye className="h-5 w-5 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-serif text-base font-semibold">Methodology & Neutrality Statement</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                This comparison evaluates architectural capabilities, not product quality. "Traditional DPI" refers to
                conventional digital governance systems that focus on service delivery, identity management, and
                transactional processing without a dedicated governance integrity enforcement layer. Ratings reflect
                structural design capabilities, not deployment maturity. Partial ratings indicate that some implementations
                may achieve the capability through custom extensions. This matrix is provided for institutional evaluation
                purposes and does not constitute a competitive assessment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Positioning */}
      <Section className="border-t border-border bg-card/30">
        <div className="canonical-quote">
          GRGF does not replace existing Digital Public Infrastructure. It introduces a governance integrity
          enforcement layer that complements service-delivery systems with deterministic policy verification,
          cryptographic sealing, and sovereign federation capability.
        </div>
        <p className="hash-text mt-6">COMPARISON-MATRIX-v1.0 · {data.length} CAPABILITIES · 6 DOMAINS</p>
      </Section>
    </div>
  );
}
