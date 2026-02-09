import { PageHeader, Section } from "@/components/PageComponents";
import { Globe, Undo2, ShieldOff, MapPin } from "lucide-react";

const archetypes = [
  {
    name: "Canada",
    type: "Federal Parliamentary · Common Law",
    desc: "Bilingual deployment (EN/FR) across federal and provincial jurisdictions. Adapts to existing Access to Information and Privacy frameworks. Provincial stewardship authorities operate independently within a unified federal GRGF instance.",
  },
  {
    name: "Egypt",
    type: "Unitary Republic · Civil Law",
    desc: "Arabic-primary deployment with governance integration across centralized ministries. Designed for alignment with national digital transformation strategies while preserving sovereign data control and institutional independence.",
  },
  {
    name: "Global South Archetype",
    type: "Emerging Governance Infrastructure",
    desc: "Lightweight deployment model for jurisdictions building governance infrastructure for the first time. Minimal dependencies, offline-capable components, and phased adoption pathways that do not require existing digital infrastructure.",
  },
];

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

      {/* Country Archetypes */}
      <Section title="Country Archetypes" className="border-t border-border">
        <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
          GRGF provides reference deployment archetypes for different governance contexts.
          Each archetype serves as a starting template, adapted to the legal tradition,
          language requirements, and institutional structure of the deploying jurisdiction.
        </p>
        <div className="space-y-4">
          {archetypes.map((a) => (
            <div key={a.name} className="governance-card">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-1" />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-sm font-semibold">{a.name}</h3>
                    <span className="hash-text">{a.type.toUpperCase()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Reversible Adoption */}
      <Section title="Reversible Adoption" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent mb-6">
          <div className="flex items-start gap-3">
            <Undo2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <h3 className="font-serif text-sm font-semibold mb-2">Sovereign Exit Guarantee</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Any country may discontinue its GRGF deployment at any time without penalty, lock-in,
                or loss of previously sealed records. All records created during the deployment period
                remain the sovereign property of the deploying jurisdiction. GRGF imposes no contractual,
                technical, or political barriers to exit.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Non-enforcement */}
      <Section title="Non-Enforcement Stance" className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <ShieldOff className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                GRGF does not enforce compliance, mandate adoption, or exercise any authority over
                deploying jurisdictions. It provides infrastructure — not jurisdiction. Each sovereign
                entity determines its own use, scope, and continuity of GRGF deployment.
              </p>
              <p className="hash-text">STANCE: NON-ENFORCEMENT · NON-JURISDICTIONAL · INFRASTRUCTURE ONLY</p>
            </div>
          </div>
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
