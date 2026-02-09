import { PageHeader, Section } from "@/components/PageComponents";
import { Globe } from "lucide-react";

const Countries = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Countries"
        subtitle="Sovereign deployment packages and the country-level adaptation model for GRGF implementation."
      />

      <Section title="Sovereign Deployment Model">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF is designed for sovereign deployment. Each country or jurisdiction receives a
          self-contained deployment package that can be adapted to local legal, institutional,
          and linguistic requirements while maintaining full interoperability with the global
          reference architecture.
        </p>

        <div className="governance-card mb-6">
          <h3 className="font-serif text-sm font-semibold mb-3">Country Package Contents</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Core GRGF infrastructure and governance protocols",
              "Localization templates for legal and linguistic adaptation",
              "Certification requirements for local operators and auditors",
              "Integration specifications for existing national systems",
              "Stewardship guidelines and succession protocols",
              "Cryptographic key management procedures",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Deployment Principles" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { title: "Data Sovereignty", desc: "All data remains within the deploying jurisdiction. No cross-border data transfer is required." },
            { title: "Operational Independence", desc: "Each deployment operates independently while adhering to the global governance framework." },
            { title: "Interoperability", desc: "Standardized protocols enable verification and reference across jurisdictions." },
            { title: "Local Stewardship", desc: "Each country designates its own stewardship authority under GRGF governance guidelines." },
          ].map((p) => (
            <div key={p.title} className="governance-card">
              <h4 className="font-serif text-sm font-semibold">{p.title}</h4>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Countries;
