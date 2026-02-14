import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";

const AntiCaptureMechanisms = () => (
  <div className="animate-fade-in">
    <SEOHead title="Anti-Capture Governance Mechanisms — GRGF" description="Structural analysis of GRGF's five Anti-Capture Clauses (AC-01–05) and how they prevent vendor, government, or interest group capture of neutral governance infrastructure." />
    <PageHeader title="Anti-Capture Governance Mechanisms" subtitle="Safeguards Analysis · February 2026">
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Anti-Capture" label="Export PDF" />
        <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3 w-3" /> All Insights</Link>
      </div>
    </PageHeader>
    <Section>
      <article className="max-w-3xl space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Capture Problem</h2>
          <p>Neutral infrastructure is inherently vulnerable to capture. Standards bodies, regulatory agencies, and governance frameworks face persistent pressure from well-resourced actors seeking to bend rules in their favor. History is replete with examples of industry capture of regulatory bodies, vendor lock-in of public infrastructure, and political co-option of accountability mechanisms.</p>
          <p className="mt-3">For a governance integrity layer to fulfill its mandate, anti-capture protections cannot be aspirational — they must be structural, codified, and independently enforceable.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Five Anti-Capture Clauses</h2>
          <div className="space-y-4 mt-4">
            {[
              { id: "AC-01", title: "Vendor Independence", severity: "Critical", desc: "No single vendor, technology provider, or commercial entity may hold a controlling interest, exclusive license, or preferential access to GRGF standards, assessment criteria, or governance decisions. Technology choices must remain interchangeable." },
              { id: "AC-02", title: "Government Non-Interference", severity: "Critical", desc: "No individual government or bloc of governments may direct, override, or suppress GRGF standards or assessment outcomes. Sovereign participation is voluntary and non-hierarchical." },
              { id: "AC-03", title: "Financial Independence", severity: "High", desc: "GRGF funding must be diversified across multiple independent sources. No single funder may contribute more than 25% of operational budget. Financial influence cannot translate to governance influence." },
              { id: "AC-04", title: "Standards Integrity", severity: "High", desc: "Assessment criteria and recognition standards are developed through transparent, documented processes with mandatory public comment periods. Retroactive modification of active standards is prohibited." },
              { id: "AC-05", title: "Personnel Rotation", severity: "Medium", desc: "Governance Board members, Standards Committee chairs, and Technical Review Panel leads serve fixed terms with mandatory cooling-off periods. No individual may serve more than two consecutive terms in any governance role." },
            ].map(({ id, title, severity, desc }) => (
              <div key={id} className="border border-border p-5 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="font-mono text-xs text-accent font-bold">{id}</span>
                  <span className="font-serif font-semibold text-foreground">{title}</span>
                  <span className={`text-overline font-mono px-2 py-0.5 ml-auto ${severity === 'Critical' ? 'bg-destructive/10 text-destructive' : severity === 'High' ? 'bg-accent/15 text-accent' : 'bg-muted text-muted-foreground'}`}>
                    {severity}
                  </span>
                </div>
                <p className="ml-7">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Enforcement Architecture</h2>
          <p>Anti-capture clauses are structurally enforced through three mechanisms:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-accent font-bold">1.</span> <span><strong className="text-foreground">Transparent governance logs:</strong> All governance decisions, votes, and rationale are recorded in the same append-only architecture that GRGF applies to its members — ensuring the framework's own governance is independently verifiable.</span></li>
            <li className="flex gap-2"><span className="text-accent font-bold">2.</span> <span><strong className="text-foreground">Independent audit triggers:</strong> Any stakeholder may request an independent review of governance decisions for potential capture violations. Reviews are conducted by external parties with no existing GRGF relationship.</span></li>
            <li className="flex gap-2"><span className="text-accent font-bold">3.</span> <span><strong className="text-foreground">Charter amendment threshold:</strong> Modification of anti-capture clauses requires a supermajority (75%) of the Governance Board plus public consultation, ensuring these protections cannot be quietly weakened.</span></li>
          </ul>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground/60 italic">Published by the Global Record Governance Framework · February 2026</p>
          <div className="mt-4 flex gap-4">
            <Link to="/insights/institutional-memory-fails" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3.5 w-3.5" /> Previous</Link>
            <Link to="/insights/append-only-records" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
              Next: Append-Only Records <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </Section>
  </div>
);

export default AntiCaptureMechanisms;
