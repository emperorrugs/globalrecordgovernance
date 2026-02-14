import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SovereignTrustArchitecture = () => (
  <div className="animate-fade-in">
    <SEOHead title="Sovereign Digital Trust Architecture — GRGF" description="How nations can build sovereign trust layers that preserve independence while participating in global verification networks. A framework for digital governance sovereignty." />
    <PageHeader title="Sovereign Digital Trust Architecture" subtitle="Strategic Analysis · February 2026">
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Sovereign-Trust" label="Export PDF" />
        <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3 w-3" /> All Insights</Link>
      </div>
    </PageHeader>
    <Section>
      <article className="max-w-3xl space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Sovereignty Paradox</h2>
          <p>Nations face a paradox in the digital age: governance integrity increasingly requires international verification, but international frameworks risk undermining national sovereignty. How can a state participate in global trust networks without ceding control over its own governance data?</p>
          <p className="mt-3">This tension is not theoretical. Countries that adopt externally controlled infrastructure risk dependency. Countries that refuse all international cooperation risk isolation and reduced institutional credibility.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Federation Model</h2>
          <p>GRGF resolves this paradox through a federation architecture that separates participation from dependency:</p>
          <div className="my-4 space-y-3">
            {[
              { tier: "Sovereign Node", desc: "Each participating nation operates its own GRGF node on sovereign infrastructure. All governance data remains under national jurisdiction. No external party has access to raw records." },
              { tier: "Verification Protocol", desc: "Nodes publish cryptographic proofs (hashes, not data) to a shared verification layer. Any participating nation can verify the integrity of another's governance records without accessing the records themselves." },
              { tier: "Federation Network", desc: "Cross-border verification enables multilateral trust without centralized control. Each node can disconnect at any time without data loss or operational disruption." },
            ].map(({ tier, desc }) => (
              <div key={tier} className="p-4 border border-border bg-muted/30">
                <h3 className="font-serif font-semibold text-foreground mb-1">{tier}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Five Principles of Digital Governance Sovereignty</h2>
          <ol className="mt-3 space-y-3 list-decimal list-inside">
            <li><strong className="text-foreground">Data jurisdiction:</strong> Governance records must reside on sovereign infrastructure within national legal jurisdiction. No external hosting dependency.</li>
            <li><strong className="text-foreground">Operational independence:</strong> The governance trust layer must function fully without external connectivity. Federation is an enhancement, not a requirement.</li>
            <li><strong className="text-foreground">Reversibility:</strong> Any nation can exit a federation arrangement without data loss, operational disruption, or contractual penalty. No vendor lock-in at any level.</li>
            <li><strong className="text-foreground">Standards participation:</strong> Sovereignty is strengthened, not diminished, by participating in transparent international standards. The key is voluntary participation with equal voice.</li>
            <li><strong className="text-foreground">Cryptographic self-proof:</strong> A sovereign node must be able to independently prove the integrity of its own records without relying on external attestation. External verification is additive trust, not foundational trust.</li>
          </ol>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The 5-Stage Sovereign Deployment Model</h2>
          <p>GRGF's deployment pathway is designed for progressive sovereignty:</p>
          <div className="my-4 space-y-2">
            {[
              { stage: "Stage 0", title: "Assessment", desc: "Governance maturity evaluation. No infrastructure deployment. No commitment." },
              { stage: "Stage 1", title: "Foundational", desc: "Deploy sovereign node with 1-3 connected systems. Internal verification only." },
              { stage: "Stage 2", title: "Operational", desc: "Cross-ministry integration. Independent audit capability. National governance memory operational." },
              { stage: "Stage 3", title: "Federation-Ready", desc: "Cryptographic proofs available for international verification. Voluntary participation." },
              { stage: "Stage 4", title: "Full Federation", desc: "Active cross-border verification. Multilateral trust network participation. Level III certification." },
            ].map(({ stage, title, desc }) => (
              <div key={stage} className="flex gap-4 p-3 border border-border hover:border-accent/30 transition-colors">
                <span className="font-mono text-xs text-accent font-bold shrink-0 w-16">{stage}</span>
                <div>
                  <span className="font-semibold text-foreground">{title}</span>
                  <span className="mx-2 text-muted-foreground/30">—</span>
                  <span>{desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p>At every stage, the nation retains full operational control. Each stage adds capability without creating dependency.</p>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground/60 italic">Published by the Global Record Governance Framework · February 2026</p>
          <div className="mt-4">
            <Link to="/insights/append-only-records" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3.5 w-3.5" /> Previous: Append-Only Records</Link>
          </div>
        </div>
      </article>
    </Section>
  </div>
);

export default SovereignTrustArchitecture;
