import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const InstitutionalMemoryFails = () => (
  <div className="animate-fade-in">
    <SEOHead title="Why Institutional Memory Fails — GRGF" description="Political transitions erase governance continuity. Analysis of institutional memory loss mechanisms and architectural solutions for perpetual governance memory." />
    <PageHeader title="Why Institutional Memory Fails" subtitle="Governance Analysis · January 2026">
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Institutional-Memory" label="Export PDF" />
        <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3 w-3" /> All Insights</Link>
      </div>
    </PageHeader>
    <Section>
      <article className="max-w-3xl space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Institutional Amnesia Problem</h2>
          <p>Every democratic transition carries a hidden cost: the systematic erosion of institutional knowledge. When administrations change, decision rationale, policy context, and operational precedent are routinely lost — not through malice, but through structural design failure.</p>
          <p className="mt-3">This institutional amnesia is not merely inconvenient. It is structurally dangerous. Without persistent governance memory, each new administration operates without the accumulated wisdom of its predecessors, repeating errors, duplicating expenditure, and losing years of institutional learning.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Five Mechanisms of Memory Loss</h2>
          <div className="space-y-4 mt-4">
            {[
              { num: "1", title: "Personnel Turnover", desc: "Senior officials carry institutional knowledge in their heads. When they leave, that knowledge leaves with them. No system captures the reasoning behind decisions — only the decisions themselves." },
              { num: "2", title: "System Migration", desc: "Technology upgrades routinely discard legacy data. Records are 'migrated' with data loss, format corruption, and context stripping. The digital equivalent of burning the archive." },
              { num: "3", title: "Political Reframing", desc: "Incoming administrations redefine priorities, rebrand initiatives, and reset performance baselines. Previous governance context becomes politically inconvenient and is structurally deprioritized." },
              { num: "4", title: "Siloed Record Systems", desc: "Ministries maintain independent record systems with incompatible formats, access controls, and retention policies. Cross-institutional memory is fragmented by design." },
              { num: "5", title: "Absence of Omission Records", desc: "No existing system records what was NOT done. Delayed approvals, ignored warnings, and deferred maintenance leave no institutional trace — making accountability for inaction impossible." },
            ].map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4 p-4 bg-muted/50 border border-border">
                <span className="font-mono text-lg text-accent font-bold shrink-0">{num}</span>
                <div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Architectural Solution</h2>
          <p>Institutional memory cannot be preserved through policy alone — it requires architectural enforcement. The Global Record Governance Framework addresses each mechanism of memory loss through structural design:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Append-only architecture</strong> ensures records survive personnel changes, system migrations, and political transitions.</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Deterministic policy enforcement</strong> captures decision rationale alongside decisions, preserving institutional reasoning.</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Omission awareness</strong> makes institutional silence — delayed actions, ignored obligations — independently verifiable.</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Cryptographic anchoring</strong> prevents retroactive manipulation, ensuring memory integrity across political cycles.</span></li>
          </ul>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground/60 italic">Published by the Global Record Governance Framework · January 2026</p>
          <div className="mt-4 flex gap-4">
            <Link to="/insights/missing-trust-layer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3.5 w-3.5" /> Previous</Link>
            <Link to="/insights/anti-capture-mechanisms" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
              Next: Anti-Capture Mechanisms <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </Section>
  </div>
);

export default InstitutionalMemoryFails;
