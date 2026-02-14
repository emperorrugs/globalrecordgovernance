import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const MissingTrustLayer = () => (
  <div className="animate-fade-in">
    <SEOHead title="The Missing Trust Layer in DPI — GRGF" description="Current DPI focuses on identity, payments, and data exchange but ignores governance integrity. Analysis of the structural gap and GRGF's Layer 3 solution." />
    <PageHeader title="The Missing Trust Layer in Digital Public Infrastructure" subtitle="Architecture Analysis · January 2026">
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Missing-Trust-Layer" label="Export PDF" />
        <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3 w-3" /> All Insights</Link>
      </div>
    </PageHeader>
    <Section>
      <article className="max-w-3xl space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The DPI Revolution — And Its Blind Spot</h2>
          <p>The global Digital Public Infrastructure movement has achieved remarkable progress. National identity systems (Aadhaar, eID), instant payment networks (UPI, PIX), and consent-based data exchange platforms have transformed how governments deliver services to billions.</p>
          <p className="mt-3">Yet these achievements share a common architectural gap: <strong className="text-foreground">none of them address the governance integrity layer</strong> — the structural foundation that ensures institutional actions, decisions, and omissions are independently verifiable.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Three-Layer Model</h2>
          <p>Current DPI frameworks conceptualize digital public infrastructure in three functional layers:</p>
          <div className="my-4 space-y-2">
            {[
              { l: "Layer 1 — Base Registries", d: "Population registers, land titles, business registries." },
              { l: "Layer 2 — Core DPI", d: "Digital identity, payments, data exchange (consent-based)." },
              { l: "Layer 4 — Services", d: "Health, education, welfare — the application layer." },
            ].map(({ l, d }) => (
              <div key={l} className="flex gap-3 p-3 bg-muted/50 border border-border">
                <span className="font-mono text-xs text-accent font-semibold shrink-0 w-40">{l}</span>
                <span>{d}</span>
              </div>
            ))}
            <div className="flex gap-3 p-3 bg-accent/10 border-2 border-accent/30">
              <span className="font-mono text-xs text-accent font-semibold shrink-0 w-40">Layer 3 — Missing</span>
              <span className="font-medium text-foreground">Governance Integrity Registry — the trust backbone that verifies institutional actions across all other layers.</span>
            </div>
          </div>
          <p>The absence of Layer 3 means that governments can build sophisticated service delivery infrastructure while lacking independent verification that governance decisions were made properly, transparently, and without retroactive manipulation.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">What a Trust Layer Must Provide</h2>
          <p>A genuine governance integrity layer requires five structural capabilities:</p>
          <ol className="mt-3 space-y-2 list-decimal list-inside">
            <li><strong className="text-foreground">Append-only evidence:</strong> Records cannot be deleted or modified after creation. Every governance event is permanently sealed.</li>
            <li><strong className="text-foreground">Deterministic policy enforcement:</strong> Identical inputs must always produce identical outputs. No discretionary interpretation by operators.</li>
            <li><strong className="text-foreground">Omission awareness:</strong> The system must record not just what was done, but what was <em>not</em> done — making institutional silence independently verifiable.</li>
            <li><strong className="text-foreground">Cryptographic verification:</strong> Any authorized party can validate record integrity through mathematical proof, not institutional reputation.</li>
            <li><strong className="text-foreground">Sovereign compatibility:</strong> The layer must strengthen national systems without replacing them or requiring cession of operational control.</li>
          </ol>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">GRGF as Layer 3</h2>
          <p>The Global Record Governance Framework is architected specifically to fill this gap. Positioned as the Governance Integrity Registry Layer within the national DPI stack, GRGF provides the structural trust backbone that existing DPI components lack.</p>
          <p className="mt-3">It does not compete with identity systems, payment rails, or data exchange platforms. It <em>governs the governance</em> — ensuring that institutional decisions across all these systems are verifiable, immutable, and independently auditable.</p>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground/60 italic">Published by the Global Record Governance Framework · January 2026 · For institutional evaluation purposes.</p>
          <div className="mt-4">
            <Link to="/insights/institutional-memory-fails" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
              Next: Why Institutional Memory Fails <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </Section>
  </div>
);

export default MissingTrustLayer;
