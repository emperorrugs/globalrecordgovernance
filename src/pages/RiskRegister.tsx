import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, Shield, CheckCircle, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const risks = [
  { id: "GRR-01", category: "Institutional", risk: "Regulatory Misalignment", likelihood: "Medium", impact: "High", mitigation: "Proactive engagement with Treasury Board, ISED, and OCIO. GC Digital Standards alignment pre-validated.", status: "Mitigated" },
  { id: "GRR-02", category: "Technical", risk: "Cryptographic Obsolescence", likelihood: "Low", impact: "Critical", mitigation: "Post-quantum readiness roadmap. SHA-256 with upgrade path to SHA-3/CRYSTALS-Dilithium. Algorithm agility built into architecture.", status: "Monitored" },
  { id: "GRR-03", category: "Governance", risk: "Institutional Capture", likelihood: "Low", impact: "Critical", mitigation: "Five Anti-Capture Clauses (AC-01–05). Board term limits. No single-entity veto power. Independent audit triggers.", status: "Mitigated" },
  { id: "GRR-04", category: "Operational", risk: "Single Point of Failure", likelihood: "Medium", impact: "High", mitigation: "Multi-region deployment. Offline fallback governance continuity. Federation protocol ensures node independence.", status: "Mitigated" },
  { id: "GRR-05", category: "Privacy", risk: "Data Exposure", likelihood: "Low", impact: "Critical", mitigation: "Privacy-by-design architecture. No PII in governance records. Role-based disclosure. Data minimisation enforced.", status: "Mitigated" },
  { id: "GRR-06", category: "Adoption", risk: "Institutional Resistance", likelihood: "High", impact: "Medium", mitigation: "Non-invasive integration model. Demonstrated 0.3% integrity improvement ROI threshold. Phased pilot approach.", status: "Active" },
  { id: "GRR-07", category: "Legal", risk: "Jurisdictional Conflicts", likelihood: "Medium", impact: "Medium", mitigation: "Sovereign primacy principle. Federation protocol respects national legal frameworks. No cross-border data sharing without consent.", status: "Mitigated" },
  { id: "GRR-08", category: "Financial", risk: "Sustainability Gap", likelihood: "Medium", impact: "High", mitigation: "Multi-tier revenue model: recognition fees, advisory services, membership, institutional partnerships. 5-year financial projections published.", status: "Monitored" },
  { id: "GRR-09", category: "Technical", risk: "Integration Complexity", likelihood: "High", impact: "Medium", mitigation: "Standardised connector framework. Minimal integration surface (3–5 API endpoints). Dedicated integration support.", status: "Active" },
  { id: "GRR-10", category: "Reputational", risk: "Misuse or Misrepresentation", likelihood: "Medium", impact: "High", mitigation: "Simulation-only banners on digital platform. Clear non-authoritative status. Formal recognition vs. platform distinction.", status: "Mitigated" },
];

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Mitigated: "bg-accent/15 text-accent",
    Monitored: "bg-yellow-500/15 text-yellow-600",
    Active: "bg-red-500/15 text-red-500",
  };
  return <span className={`px-2 py-0.5 text-xs font-mono ${styles[status] || "bg-muted text-muted-foreground"}`}>{status}</span>;
}

function LikelihoodBadge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    Low: "text-accent",
    Medium: "text-yellow-600",
    High: "text-red-500",
    Critical: "text-red-600 font-bold",
  };
  return <span className={`text-xs font-mono ${styles[level] || ""}`}>{level}</span>;
}

const RiskRegister = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Institutional Transparency</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Public Risk Register
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Structured risk disclosure matrix identifying, categorizing, and documenting mitigation strategies for all material institutional risks. Updated quarterly.
        </p>
      </div>
    </header>

    {/* Summary */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Risk Summary</p>
        <div className="grid gap-4 sm:grid-cols-4 mb-8">
          {[
            { label: "Total Risks", value: "10", icon: AlertTriangle },
            { label: "Mitigated", value: "6", icon: Shield },
            { label: "Monitored", value: "2", icon: TrendingUp },
            { label: "Active", value: "2", icon: AlertTriangle },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="governance-card-elevated text-center">
              <Icon className="h-4 w-4 text-accent mx-auto mb-2" />
              <p className="text-2xl font-serif font-bold text-foreground">{value}</p>
              <p className="text-overline text-muted-foreground/60">{label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Risk Table */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Detailed Register</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Risk Inventory</h2>
        <div className="space-y-4">
          {risks.map(r => (
            <div key={r.id} className="governance-card-elevated hover:border-accent/20 transition-all">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-mono font-bold text-accent">{r.id}</span>
                <span className="px-2 py-0.5 bg-muted text-xs font-mono text-muted-foreground">{r.category}</span>
                <StatusBadge status={r.status} />
              </div>
              <h4 className="font-serif text-heading-3 font-semibold mb-2">{r.risk}</h4>
              <div className="grid sm:grid-cols-3 gap-4 text-caption">
                <div>
                  <span className="text-overline text-muted-foreground/50 block mb-1">Likelihood</span>
                  <LikelihoodBadge level={r.likelihood} />
                </div>
                <div>
                  <span className="text-overline text-muted-foreground/50 block mb-1">Impact</span>
                  <LikelihoodBadge level={r.impact} />
                </div>
                <div>
                  <span className="text-overline text-muted-foreground/50 block mb-1">Status</span>
                  <StatusBadge status={r.status} />
                </div>
              </div>
              <p className="text-caption text-muted-foreground mt-3 leading-relaxed">
                <strong className="text-foreground">Mitigation:</strong> {r.mitigation}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Review Cycle */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Review Cycle</p>
        <div className="governance-card-elevated border-l-4 border-l-accent max-w-3xl">
          <h3 className="font-serif text-heading-3 font-semibold mb-3">Quarterly Risk Review</h3>
          <p className="text-body text-muted-foreground leading-relaxed mb-4">
            The risk register is reviewed quarterly by the Governance Board with input from the Technical Review Panel and Compliance Oversight committee. Material changes are published within 5 business days of board approval.
          </p>
          <p className="text-overline text-muted-foreground/50">Last reviewed: Q1 2026 · Next review: Q2 2026</p>
        </div>
      </FadeIn>
    </Sec>

    <Sec className="bg-primary text-primary-foreground">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Risk Disclosure Inquiry</h2>
        <p className="text-body text-primary-foreground/60 mb-8">
          For questions about specific risk items or to request detailed mitigation documentation, contact the GRGF Compliance Oversight committee.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
          Contact Compliance <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Sec>
  </div>
);

export default RiskRegister;
