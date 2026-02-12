import { PageHeader, Section } from "@/components/PageComponents";
import { Globe, Users, Shield, CheckCircle, Building2, Scale, Network } from "lucide-react";

const InternationalCooperation = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="International Digital Cooperation & Interoperability"
      subtitle="Cross-border governance interoperability, peer-learning models, and global DPI stack compatibility."
    />

    {/* Cross-Border Interoperability */}
    <Section title="Cross-Border Governance Interoperability">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF enables cross-border governance verification without requiring nations to cede sovereignty, share raw data, or negotiate bilateral agreements for each verification type.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Globe, title: "Federated Verification", desc: "National nodes verify governance credentials from other jurisdictions via federation protocol. No raw record data crosses borders." },
          { icon: Shield, title: "Sovereignty Preservation", desc: "Each nation retains full control over its governance records, policy encoding, and operational decisions. Federation is voluntary and reversible." },
          { icon: Network, title: "Protocol-Based Trust", desc: "Trust established through cryptographic verification protocols, not institutional reputation or bilateral trust agreements." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Federation Tiers */}
    <Section title="Federation Participation Model" className="border-t border-border">
      <div className="space-y-3">
        {[
          { tier: "Tier 1 — Full Federation", desc: "Full cross-border verification capability. National node operates complete GRGF stack with federation protocol enabled. Mutual verification agreements in place.", requirements: ["Complete national deployment", "Independent security audit passed", "Federation protocol compliance certified", "Governance charter ratified"] },
          { tier: "Tier 2 — Bilateral Federation", desc: "Selective cross-border verification with specific partner nations. Reduced scope, focused on priority governance domains.", requirements: ["National deployment (minimum pilot stage)", "Bilateral verification agreement", "Domain-specific connector configuration", "Mutual assurance framework"] },
          { tier: "Observer", desc: "Monitoring and evaluation participation without operational deployment. Access to technical documentation and peer-learning activities.", requirements: ["Institutional expression of interest", "Designated technical liaison", "Participation in review sessions", "No operational requirements"] },
        ].map(({ tier, desc, requirements }) => (
          <div key={tier} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{tier}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{desc}</p>
            <ul className="grid gap-1 sm:grid-cols-2">
              {requirements.map(r => (
                <li key={r} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    {/* Digital Public Goods */}
    <Section title="Digital Public Good Alignment" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF is architecturally compatible with the Digital Public Goods concept as defined by the UN Secretary-General's Roadmap for Digital Cooperation and the OECD DPI framework.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Open-Source Architecture", desc: "Technology stack designed for open-source deployment. No proprietary components required for core functionality." },
          { title: "Vendor-Neutral Design", desc: "All infrastructure components are replaceable. No single vendor can create lock-in at any layer of the stack." },
          { title: "Freely Deployable", desc: "Any sovereign nation can deploy and operate a national GRGF node without licensing fees for the core platform." },
          { title: "Community Governance", desc: "Long-term stewardship via nonprofit consortium model, ensuring governance decisions serve public interest." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Peer-Learning */}
    <Section title="Peer-Learning & Shared Infrastructure Models" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Users, title: "Knowledge Exchange", desc: "Structured knowledge-sharing between deploying nations. Implementation lessons, policy encoding patterns, and operational best practices." },
          { icon: Building2, title: "Shared Development", desc: "Collaborative development of connectors, schemas, and policy templates. Reduces per-nation implementation cost." },
          { icon: Scale, title: "Mutual Assurance", desc: "Participating nations provide peer review of each other's deployments. Strengthens collective confidence in governance integrity." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Global Stack Compatibility */}
    <Section title="Global DPI Stack Compatibility" className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Compatibility Statement:</strong> GRGF is designed to operate alongside any national DPI stack configuration — whether based on MOSIP (identity), Mojaloop (payments), X-Road (data exchange), or proprietary national systems. No specific DPI vendor or platform is required. Integration is achieved through standardized connectors and event normalization, not platform coupling.
        </p>
      </div>
    </Section>
  </div>
);

export default InternationalCooperation;
