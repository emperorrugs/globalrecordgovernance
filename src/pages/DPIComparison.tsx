import { PageHeader, Section } from "@/components/PageComponents";
import { PDFExportButton } from "@/components/PDFExportButton";
import { useViewMode } from "@/contexts/ViewModeContext";
import { FadeIn } from "@/components/FadeIn";
import {
  Check, X, Minus, Shield, Globe, FileCheck, Layers, Lock, Eye,
  GitBranch, Zap, Database, Network, BarChart3, Award, ArrowRight,
} from "lucide-react";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
} from "@/components/ui/table";
import { useState } from "react";

/* ── Types ── */
type Rating = "full" | "partial" | "none" | "n/a";

interface PeerSystem {
  id: string;
  name: string;
  origin: string;
  type: string;
  color: string;
}

interface ComparisonRow {
  capability: string;
  category: string;
  ratings: Record<string, Rating>;
}

/* ── Peer Systems ── */
const peers: PeerSystem[] = [
  { id: "grgf", name: "GRGF Anchor Chain™", origin: "Canada", type: "Governance Integrity Layer", color: "text-ms-blue" },
  { id: "govstack", name: "GovStack", origin: "ITU / Estonia / Germany", type: "DPI Building Blocks", color: "text-ms-green" },
  { id: "xroad", name: "X-Road", origin: "Estonia / Finland", type: "Data Exchange Layer", color: "text-muted-foreground" },
  { id: "mosip", name: "MOSIP", origin: "India / IIIT-B", type: "Digital Identity Platform", color: "text-muted-foreground" },
  { id: "dpga", name: "DPGA", origin: "UN / Norway", type: "DPG Registry & Advocacy", color: "text-muted-foreground" },
  { id: "opencrvs", name: "OpenCRVS", origin: "Plan International", type: "Civil Registration", color: "text-muted-foreground" },
];

/* ── Comparison Data ── */
const data: ComparisonRow[] = [
  // Record Integrity
  { category: "Record Integrity", capability: "Append-only immutable storage", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "partial", dpga: "none", opencrvs: "partial" } },
  { category: "Record Integrity", capability: "Cryptographic hash-chain sealing (SHA-256)", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "partial", dpga: "none", opencrvs: "none" } },
  { category: "Record Integrity", capability: "Proof-of-absence (omission detection)", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Record Integrity", capability: "Tamper-evident audit backbone", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "partial", dpga: "none", opencrvs: "partial" } },
  { category: "Record Integrity", capability: "External anchor compatibility (blockchain / CA)", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "none", dpga: "none", opencrvs: "none" } },

  // Governance Model
  { category: "Governance Model", capability: "Deterministic policy enforcement", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Governance Model", capability: "Anti-capture clauses (AC-01 to AC-05)", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Governance Model", capability: "Custodial neutrality (no operator override)", ratings: { grgf: "full", govstack: "partial", xroad: "none", mosip: "none", dpga: "partial", opencrvs: "none" } },
  { category: "Governance Model", capability: "No super-admin backdoor", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "partial", dpga: "n/a", opencrvs: "none" } },
  { category: "Governance Model", capability: "Multi-stakeholder oversight board", ratings: { grgf: "full", govstack: "full", xroad: "full", mosip: "full", dpga: "full", opencrvs: "partial" } },

  // Federation & Interoperability
  { category: "Federation", capability: "Cross-border sovereign federation protocol", ratings: { grgf: "full", govstack: "partial", xroad: "full", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Federation", capability: "Multi-tier trust levels (Observer / Participant / Full)", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Federation", capability: "Voluntary participation (no mandatory data sharing)", ratings: { grgf: "full", govstack: "partial", xroad: "partial", mosip: "partial", dpga: "full", opencrvs: "partial" } },
  { category: "Federation", capability: "Canonical event schema (JSON-LD)", ratings: { grgf: "full", govstack: "partial", xroad: "full", mosip: "partial", dpga: "none", opencrvs: "partial" } },
  { category: "Federation", capability: "API-first verification endpoints", ratings: { grgf: "full", govstack: "full", xroad: "full", mosip: "full", dpga: "none", opencrvs: "partial" } },

  // Audit & Verification
  { category: "Audit & Verification", capability: "Full event trace reconstruction", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "partial", dpga: "none", opencrvs: "partial" } },
  { category: "Audit & Verification", capability: "Deterministic denial explanation", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Audit & Verification", capability: "Real-time integrity validation", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "partial", dpga: "none", opencrvs: "none" } },
  { category: "Audit & Verification", capability: "Zero-knowledge proof verification", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Audit & Verification", capability: "Read-only auditor access (scoped)", ratings: { grgf: "full", govstack: "partial", xroad: "partial", mosip: "partial", dpga: "none", opencrvs: "partial" } },

  // Security & Trust
  { category: "Security & Trust", capability: "Zero Trust architecture", ratings: { grgf: "full", govstack: "partial", xroad: "full", mosip: "partial", dpga: "n/a", opencrvs: "partial" } },
  { category: "Security & Trust", capability: "Role separation enforcement", ratings: { grgf: "full", govstack: "partial", xroad: "partial", mosip: "full", dpga: "n/a", opencrvs: "partial" } },
  { category: "Security & Trust", capability: "Post-quantum readiness roadmap", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "Security & Trust", capability: "HSM key management", ratings: { grgf: "full", govstack: "none", xroad: "partial", mosip: "full", dpga: "none", opencrvs: "none" } },

  // DPI Layer Positioning
  { category: "DPI Positioning", capability: "Governance integrity layer (Layer 3)", ratings: { grgf: "full", govstack: "none", xroad: "none", mosip: "none", dpga: "none", opencrvs: "none" } },
  { category: "DPI Positioning", capability: "Non-invasive integration with existing DPI", ratings: { grgf: "full", govstack: "full", xroad: "full", mosip: "partial", dpga: "full", opencrvs: "partial" } },
  { category: "DPI Positioning", capability: "Sovereignty-preserving architecture", ratings: { grgf: "full", govstack: "full", xroad: "full", mosip: "full", dpga: "full", opencrvs: "full" } },
  { category: "DPI Positioning", capability: "Standards alignment (ISO / OECD / ITU)", ratings: { grgf: "full", govstack: "full", xroad: "partial", mosip: "partial", dpga: "full", opencrvs: "partial" } },
];

const categoryIcons: Record<string, React.ReactNode> = {
  "Record Integrity": <Shield className="h-5 w-5" />,
  "Governance Model": <GitBranch className="h-5 w-5" />,
  "Federation": <Network className="h-5 w-5" />,
  "Audit & Verification": <FileCheck className="h-5 w-5" />,
  "Security & Trust": <Lock className="h-5 w-5" />,
  "DPI Positioning": <Layers className="h-5 w-5" />,
};

function RatingCell({ rating }: { rating: Rating }) {
  if (rating === "full") return (
    <div className="flex flex-col items-center gap-0.5">
      <Check className="h-4 w-4 text-ms-green" />
      <span className="text-[9px] font-mono text-ms-green/80">Full</span>
    </div>
  );
  if (rating === "partial") return (
    <div className="flex flex-col items-center gap-0.5">
      <Minus className="h-4 w-4 text-ms-yellow" />
      <span className="text-[9px] font-mono text-ms-yellow/80">Partial</span>
    </div>
  );
  if (rating === "n/a") return (
    <div className="flex flex-col items-center gap-0.5">
      <span className="text-[10px] text-muted-foreground/40">N/A</span>
    </div>
  );
  return (
    <div className="flex flex-col items-center gap-0.5">
      <X className="h-4 w-4 text-ms-red/60" />
      <span className="text-[9px] font-mono text-ms-red/50">None</span>
    </div>
  );
}

/* ── Score Summary ── */
function ScoreCard({ peer }: { peer: PeerSystem }) {
  const full = data.filter(d => d.ratings[peer.id] === "full").length;
  const partial = data.filter(d => d.ratings[peer.id] === "partial").length;
  const pct = Math.round((full / data.length) * 100);
  const isGrgf = peer.id === "grgf";

  return (
    <div className={`border rounded-2xl p-5 transition-all ${
      isGrgf
        ? "border-ms-blue/30 bg-ms-blue/[0.03]"
        : "border-border/30 bg-card/30 hover:border-border/50"
    }`}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h4 className={`font-bold text-sm ${isGrgf ? "text-ms-blue" : "text-foreground"}`}>{peer.name}</h4>
          <p className="text-[10px] text-muted-foreground/50 mt-0.5">{peer.origin}</p>
        </div>
        <span className={`text-2xl font-black ${isGrgf ? "text-ms-blue" : "text-foreground/60"}`}>{pct}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-muted/30 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${isGrgf ? "bg-ms-blue" : "bg-foreground/20"}`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="flex gap-3 text-[10px] text-muted-foreground/50">
        <span><strong className="text-ms-green">{full}</strong> Full</span>
        <span><strong className="text-ms-yellow">{partial}</strong> Partial</span>
        <span className="text-muted-foreground/30">{peer.type}</span>
      </div>
    </div>
  );
}

/* ── Unique Capabilities Section ── */
function UniqueCapabilities() {
  const uniques = data.filter(d => {
    const otherPeers = Object.entries(d.ratings).filter(([k]) => k !== "grgf");
    return d.ratings.grgf === "full" && otherPeers.every(([, v]) => v === "none" || v === "n/a");
  });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {uniques.map((u, i) => (
        <FadeIn key={u.capability} delay={i * 40}>
          <div className="border border-ms-blue/15 bg-ms-blue/[0.02] rounded-xl p-4 hover:border-ms-blue/30 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-3.5 w-3.5 text-ms-blue" />
              <span className="text-[10px] font-mono text-ms-blue/60 uppercase tracking-wider">{u.category}</span>
            </div>
            <p className="text-sm font-semibold text-foreground">{u.capability}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/* ── Main Component ── */
export default function DPIComparison() {
  const { isPlain } = useViewMode();
  const categories = [...new Set(data.map(d => d.category))];
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredCategories = activeFilter ? [activeFilter] : categories;

  return (
    <div>
      <PageHeader
        title="GRGF Anchor Chain™ vs Global Peers"
        subtitle={
          isPlain
            ? "How GRGF compares against the world's leading Digital Public Infrastructure systems across 28 governance capabilities."
            : "Structural capability matrix evaluating governance integrity, federation architecture, audit-readiness, and security posture across 6 global DPI frameworks."
        }
      >
        <div className="mt-4 flex flex-wrap gap-3">
          <PDFExportButton filename="GRGF_Global_Peer_Comparison" label="Export as PDF" />
        </div>
      </PageHeader>

      {/* ── Score Overview ── */}
      <Section>
        <FadeIn>
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="h-5 w-5 text-ms-blue" />
            <h2 className="text-lg font-bold">Coverage Scorecard</h2>
            <span className="text-[10px] text-muted-foreground/40 ml-2">{data.length} capabilities evaluated</span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {peers.map(p => (
              <ScoreCard key={p.id} peer={p} />
            ))}
          </div>
        </FadeIn>
      </Section>

      {/* ── Unique to GRGF ── */}
      <Section className="border-t border-border/30">
        <FadeIn>
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-ms-blue" />
            <h2 className="text-lg font-bold">Capabilities Unique to GRGF</h2>
          </div>
          <p className="text-sm text-muted-foreground/50 mb-6">
            These capabilities exist in no other assessed DPI framework globally.
          </p>
          <UniqueCapabilities />
        </FadeIn>
      </Section>

      {/* ── Category Filters ── */}
      <Section className="border-t border-border/30">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              !activeFilter ? "bg-ms-blue text-white" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
            }`}
          >
            All Categories
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat === activeFilter ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeFilter === cat ? "bg-ms-blue text-white" : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
              }`}
            >
              {categoryIcons[cat]}
              {cat}
            </button>
          ))}
        </div>

        {/* ── Detailed Matrix ── */}
        {filteredCategories.map(cat => (
          <div key={cat} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-ms-blue">{categoryIcons[cat]}</div>
              <h3 className="text-base font-bold">{cat}</h3>
              <span className="text-[10px] text-muted-foreground/30">
                {data.filter(d => d.category === cat).length} capabilities
              </span>
            </div>
            <div className="overflow-x-auto -mx-6 px-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-ms-blue/10">
                    <TableHead className="min-w-[200px] text-xs">Capability</TableHead>
                    {peers.map(p => (
                      <TableHead key={p.id} className={`text-center text-[10px] min-w-[90px] ${p.id === "grgf" ? "text-ms-blue font-bold" : ""}`}>
                        {p.id === "grgf" ? "GRGF" : p.name}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.filter(d => d.category === cat).map(row => (
                    <TableRow key={row.capability} className="hover:bg-muted/20 transition-colors">
                      <TableCell className="text-sm font-medium">{row.capability}</TableCell>
                      {peers.map(p => (
                        <TableCell key={p.id} className={`text-center ${p.id === "grgf" ? "bg-ms-blue/[0.02]" : ""}`}>
                          <RatingCell rating={row.ratings[p.id]} />
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
      </Section>

      {/* ── Positioning Statement ── */}
      <Section className="border-t border-border/30">
        <FadeIn>
          <div className="border border-ms-blue/15 rounded-2xl p-8 bg-ms-blue/[0.02]">
            <div className="flex items-start gap-4">
              <Globe className="h-6 w-6 text-ms-blue shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-3">Why GRGF Occupies a Unique Position</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Existing DPI systems solve identity (MOSIP), data exchange (X-Road), service delivery specifications (GovStack),
                  and standards advocacy (DPGA). None address the <strong>governance integrity gap</strong> — the structural
                  ability to prove what institutions did, decided, and failed to do.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  GRGF Anchor Chain™ is the world's first <strong>Governance Integrity Layer</strong> — a missing Layer 3
                  in the DPI stack that makes institutional behavior verifiable, tamper-evident, and independently auditable
                  without replacing any existing system.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {["Complementary — not competitive", "Sovereignty-preserving", "Non-invasive integration", "Standards-aligned (ISO / OECD / ITU)"].map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-ms-blue/10 text-ms-blue text-[11px] font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* ── Methodology ── */}
      <Section className="border-t border-border/30">
        <div className="flex items-start gap-3">
          <Eye className="h-5 w-5 text-muted-foreground/40 mt-0.5 shrink-0" />
          <div>
            <h3 className="font-semibold text-sm">Methodology & Neutrality Statement</h3>
            <p className="text-xs text-muted-foreground/50 mt-2 leading-relaxed">
              This comparison evaluates <em>structural architectural capabilities</em>, not product quality, deployment maturity,
              or organizational effectiveness. Assessments are based on publicly available documentation, technical specifications,
              and published architecture documents as of Q1 2026. "Partial" indicates capability may exist through custom extensions
              or configuration. "N/A" indicates the capability is outside the system's design scope. This matrix is provided
              for institutional evaluation purposes and does not constitute a competitive assessment or endorsement claim.
            </p>
          </div>
        </div>
        <p className="hash-text mt-6">GLOBAL-PEER-MATRIX-v2.0 · {data.length} CAPABILITIES · {peers.length} SYSTEMS · 6 DOMAINS</p>
      </Section>
    </div>
  );
}
