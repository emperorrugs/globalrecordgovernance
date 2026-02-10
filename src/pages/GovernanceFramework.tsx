import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Globe, Eye, FileText, Scale, Lock, Building2 } from "lucide-react";

const GovernanceFramework = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Institutional Governance Model"
      subtitle="Custodial neutrality, sovereign interoperability, and structural safeguards for governance integrity."
    />

    {/* Custodial Neutrality */}
    <Section title="Custodial Neutrality">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF does not interpret policy, modify authority structures, or override institutions. It enforces what is encoded in governance rules — deterministically, transparently, and without discretion.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Does Not Interpret", desc: "Policy decisions are encoded, not interpreted. The framework executes rules as defined by governance authorities." },
          { title: "Does Not Override", desc: "No component of the framework can override institutional authority. Governance remains with human decision-makers." },
          { title: "Does Not Modify", desc: "Authority structures, legal frameworks, and institutional hierarchies remain unchanged. GRGF operates within them." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Sovereign Interoperability */}
    <Section title="Sovereign Interoperability" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Each participating nation retains full sovereignty over its governance processes. Federation participation is voluntary, and national nodes operate independently.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Globe, title: "Legal Sovereignty", desc: "Each nation retains its legal framework, judicial authority, and policy-making autonomy." },
          { icon: Building2, title: "Operational Autonomy", desc: "National nodes operate independently. No external authority can mandate operational changes." },
          { icon: Scale, title: "Policy Definition Authority", desc: "Governance rules are defined by national authorities according to their institutional requirements." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Legal Compatibility */}
    <Section title="Legal Compatibility Framework" className="border-t border-border">
      <div className="space-y-3">
        {[
          "GRGF produces legally admissible sealed logs without overriding existing authorities",
          "Records comply with chain-of-custody requirements for evidentiary proceedings",
          "Framework operates within existing legal structures — no legislative change required",
          "Privacy-by-design ensures no personal data exposure through public verification",
          "Controlled disclosure protocols align with national information access laws",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="hash-text shrink-0 mt-0.5">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-sm text-muted-foreground">{item}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Federation Model */}
    <Section title="Federation Participation" className="border-t border-border">
      <div className="grid gap-4 lg:grid-cols-3 mb-6">
        {[
          { tier: "Tier 1", label: "Full Federation", desc: "Full node deployment, cross-border verification, shared compliance standards, and mutual trust agreements." },
          { tier: "Tier 2", label: "Partial Federation", desc: "Selected integration points, limited cross-border verification, and observer-level data sharing." },
          { tier: "Observer", label: "Observer Status", desc: "Read-only access to federation standards, compliance frameworks, and best practice documentation." },
        ].map(({ tier, label, desc }) => (
          <div key={tier} className="governance-card border-l-2 border-l-accent">
            <p className="text-[10px] font-mono text-accent/70 uppercase tracking-wider mb-1">{tier}</p>
            <h4 className="font-serif text-sm font-semibold mb-2">{label}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Oversight Structure */}
    <Section title="Oversight Structure" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { icon: Users, title: "Independent Governance Board", desc: "Multi-stakeholder oversight body with representation from participating nations, civil society, and technical experts." },
          { icon: Eye, title: "Public Reporting Mechanisms", desc: "Regular transparency reports on framework operations, incident response, and governance decisions." },
          { icon: FileText, title: "Version Control Transparency", desc: "All governance rule changes are versioned, timestamped, and publicly documented with change justification." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Institutional Onboarding */}
    <Section title="Institutional Onboarding Process" className="border-t border-border">
      <div className="space-y-3">
        {[
          { step: "01", title: "Initial Assessment", desc: "Evaluation of institutional readiness, legal compatibility, and digital maturity." },
          { step: "02", title: "Governance Alignment", desc: "Mapping of existing governance rules to GRGF encoding requirements." },
          { step: "03", title: "Node Configuration", desc: "Technical deployment and integration with existing national infrastructure." },
          { step: "04", title: "Pilot Validation", desc: "Controlled pilot deployment with defined success criteria and audit checkpoints." },
          { step: "05", title: "Full Activation", desc: "Production deployment with ongoing monitoring, compliance reporting, and federation integration." },
        ].map((s) => (
          <div key={s.step} className="governance-card">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-xs font-mono font-bold">
                {s.step}
              </div>
              <div>
                <h4 className="font-serif text-sm font-semibold">{s.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Separation Statement */}
    <Section className="border-t border-border bg-card/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed font-medium">
          Political authority is structurally separated from record custody. No political actor, government official, or institutional leader can alter, suppress, or influence sealed governance records.
        </p>
      </div>
      <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default GovernanceFramework;
