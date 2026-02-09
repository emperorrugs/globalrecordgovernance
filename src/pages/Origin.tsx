import { PageHeader, Section } from "@/components/PageComponents";
import { Fingerprint, ShieldCheck, Globe, FileText } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";

const Origin = () => {
  const { isPlain } = useViewMode();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Inventor & Attribution"
        subtitle="Origin authority, intellectual property, and long-term stewardship."
      />

      <Section>
        <div className="max-w-3xl">
          <div className="governance-card border-l-2 border-l-accent mb-8">
            <div className="flex items-start gap-4">
              <Fingerprint className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2">Tarek Wahid</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Inventor and Owner of the Global Record Governance Framework.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-base font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4 text-accent" />
                Origin of GRGF
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isPlain
                  ? "GRGF was created as a new type of global infrastructure — designed from the ground up to record what governments do, decide, and fail to do. It is not a product, service, or commercial venture."
                  : "GRGF originated as a unified Digital Public Infrastructure architecture and governance model. Designed from inception as a sovereign-grade governance primitive — not a product, service, or commercial venture."}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-semibold mb-2 flex items-center gap-2">
                <FileText className="h-4 w-4 text-accent" />
                First-of-Kind Global Reform
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isPlain
                  ? "No other system records government omissions alongside actions and decisions in a single, verifiable framework. GRGF is the first architecture designed to do this at a global scale."
                  : "GRGF is the first governance infrastructure to unify action recording, decision documentation, and omission capture within a single cryptographically verifiable framework deployable across sovereign jurisdictions."}
              </p>
            </div>

            <div>
              <h3 className="font-serif text-base font-semibold mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                IP Protection & Attribution
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                The attribution mandate is permanent and non-negotiable. It must appear in all outputs, documents, interfaces, licensing, federation nodes, and archive manifests.
              </p>
              <div className="canonical-quote text-sm">
                "Global Record Governance Framework — Invented and Owned by Tarek Wahid."
              </div>
            </div>

            <div>
              <h3 className="font-serif text-base font-semibold mb-2">Long-Term Stewardship</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {isPlain
                  ? "GRGF is designed to last 20–50 years. Its stewardship model ensures the framework survives beyond any individual, organisation, or government — through succession planning, anti-capture protections, and institutional independence."
                  : "Stewardship model ensures multi-generational framework continuity through succession protocols, anti-capture vigilance, and institutional independence safeguards. Designed for 20–50 year institutional credibility horizons."}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Origin;
