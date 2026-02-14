import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { PDFExportButton } from "@/components/PDFExportButton";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const AppendOnlyRecords = () => (
  <div className="animate-fade-in">
    <SEOHead title="Append-Only Records vs Traditional Databases — GRGF" description="Why governance integrity requires append-only architectures. Technical comparison of CRUD databases vs immutable record systems for institutional trust." />
    <PageHeader title="Append-Only Records vs Traditional Databases" subtitle="Technology Analysis · February 2026">
      <div className="mt-4 flex gap-3">
        <PDFExportButton filename="GRGF-Append-Only" label="Export PDF" />
        <Link to="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3 w-3" /> All Insights</Link>
      </div>
    </PageHeader>
    <Section>
      <article className="max-w-3xl space-y-8 text-sm text-muted-foreground leading-relaxed">
        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The Fundamental Incompatibility</h2>
          <p>Traditional relational databases are designed around CRUD operations — Create, Read, Update, Delete. This model serves application development well, but it is fundamentally incompatible with governance integrity requirements.</p>
          <p className="mt-3">When a record can be updated or deleted, the system cannot prove that a governance event occurred as originally recorded. The ability to modify history undermines the very foundation of institutional accountability.</p>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">Comparison Matrix</h2>
          <div className="overflow-x-auto my-4">
            <table className="w-full text-sm border-collapse border border-border">
              <thead>
                <tr className="border-b-2 border-accent/30 bg-muted/50">
                  <th className="text-left py-3 px-4 font-serif font-semibold">Dimension</th>
                  <th className="text-left py-3 px-4 font-serif font-semibold">Traditional CRUD</th>
                  <th className="text-left py-3 px-4 font-serif font-semibold text-accent">Append-Only (GRGF)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "Record modification", crud: "Allowed (UPDATE/DELETE)", ao: "Prohibited — new version appended" },
                  { dim: "History preservation", crud: "Optional (if auditing enabled)", ao: "Structural — every state is permanent" },
                  { dim: "Tamper evidence", crud: "None inherent", ao: "SHA-256 hash chain — any change detectable" },
                  { dim: "Omission detection", crud: "Not possible", ao: "Structural — expected events vs. recorded events" },
                  { dim: "Audit reconstruction", crud: "Manual — requires log correlation", ao: "Automatic — full chain from any point" },
                  { dim: "Legal admissibility", crud: "Requires extensive chain-of-custody proof", ao: "Self-proving — cryptographic integrity" },
                  { dim: "Storage model", crud: "Mutable rows/documents", ao: "WORM (Write Once Read Many)" },
                  { dim: "Versioning", crud: "Application-layer (if implemented)", ao: "Architecture-layer (mandatory)" },
                ].map(({ dim, crud, ao }) => (
                  <tr key={dim} className="border-b border-border/60 hover:bg-muted/30 transition-colors">
                    <td className="py-2.5 px-4 font-medium text-foreground">{dim}</td>
                    <td className="py-2.5 px-4">{crud}</td>
                    <td className="py-2.5 px-4 text-accent">{ao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-xl font-semibold text-foreground mb-3">The GDPR Erasure Question</h2>
          <p>The most common objection to append-only governance records is GDPR's "right to erasure" (Article 17). This is addressed through architectural separation:</p>
          <ul className="mt-3 space-y-2">
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Governance events</strong> (actions, decisions, policies) contain no personal data. They record institutional behavior, not individual identity.</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Personal data references</strong> are pseudonymized at ingestion. The evidence backbone stores only hashed metadata — the original data remains in source systems under existing data protection controls.</span></li>
            <li className="flex gap-2"><span className="text-accent">→</span> <span><strong className="text-foreground">Article 17(3)(d)</strong> explicitly exempts data processed "for archiving purposes in the public interest" — precisely the category of institutional governance records.</span></li>
          </ul>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-xs text-muted-foreground/60 italic">Published by the Global Record Governance Framework · February 2026</p>
          <div className="mt-4 flex gap-4">
            <Link to="/insights/anti-capture-mechanisms" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"><ArrowLeft className="h-3.5 w-3.5" /> Previous</Link>
            <Link to="/insights/sovereign-trust-architecture" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
              Next: Sovereign Trust Architecture <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </article>
    </Section>
  </div>
);

export default AppendOnlyRecords;
