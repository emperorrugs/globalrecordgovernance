import { PageHeader, Section } from "@/components/PageComponents";
import { Building2, Globe, Users, DollarSign, Clock, CheckCircle, ArrowRight, Shield } from "lucide-react";

const OperationalModel = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Operational & Funding Model"
      subtitle="Sustainable deployment, funding structures, and lifecycle management aligned with OECD DPI sustainability principles."
    />

    {/* Deployment Models */}
    <Section title="Deployment Models">
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { icon: Building2, title: "National Public Deployment", desc: "Government-operated national node under sovereign control. Full custody of governance records within national jurisdiction. Funded through national budget allocation." },
          { icon: Users, title: "Multi-Agency Consortium", desc: "Shared deployment across multiple government agencies or ministries. Costs distributed proportionally. Common governance oversight with agency-specific policy encoding." },
          { icon: Globe, title: "Public-Private Partnership", desc: "Technical infrastructure operated by qualified private sector partner under strict sovereign governance charter. Government retains record custody and policy authority." },
          { icon: Shield, title: "Digital Public Good Model", desc: "Open-source deployment supported by multilateral development funding. Technology stack freely available. Operational costs borne by deploying institution." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Funding Structures */}
    <Section title="Funding Structures" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF supports multiple sustainable funding models, ensuring no single revenue dependency can compromise governance integrity.
      </p>
      <div className="space-y-3">
        {[
          { model: "Government Budget Line", desc: "Direct appropriation from national digital infrastructure budget. Preferred for sovereign deployments with full government ownership.", suitability: "National governments, treasury-funded agencies" },
          { model: "Shared Transaction-Based Funding", desc: "Per-verification or per-record-seal fee distributed across participating agencies. Cost scales with usage. No upfront capital requirement.", suitability: "Multi-agency consortiums, federated deployments" },
          { model: "Licensing & Certification Model", desc: "Revenue from institutional certification of governance compliance. Participating agencies pay for certified interoperability.", suitability: "Public-private partnerships, regulatory bodies" },
          { model: "Multilateral Development Funding", desc: "Grant or concessional funding from World Bank, regional development banks, or bilateral development agencies for pilot and initial deployment.", suitability: "Developing economies, Digital Public Good deployments" },
        ].map(({ model, desc, suitability }) => (
          <div key={model} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{model}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-2">{desc}</p>
            <p className="text-[10px] text-muted-foreground/60 italic">Suitable for: {suitability}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Lifecycle Management */}
    <Section title="Lifecycle Management" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF follows a structured lifecycle model aligned with OECD guidance on sustainable DPI investment.
      </p>
      <div className="space-y-4">
        {[
          { phase: "Design", timeline: "6–12 months", items: ["Legal compatibility assessment", "Institutional readiness evaluation", "Governance charter development", "Stakeholder consultation and advisory council formation"] },
          { phase: "Development", timeline: "12–18 months", items: ["National node configuration", "Connector development for source systems", "Policy encoding and validation", "Security audit and penetration testing"] },
          { phase: "Operational", timeline: "Ongoing", items: ["Live governance record processing", "Continuous monitoring and incident response", "Periodic compliance verification", "Stakeholder reporting and transparency obligations"] },
          { phase: "Monitoring & Review", timeline: "Annual cycles", items: ["Independent assurance audits", "Policy alignment verification", "Performance metrics review", "Safeguard effectiveness assessment"] },
          { phase: "Upgrade & Sunset", timeline: "As required", items: ["Cryptographic agility (post-quantum readiness)", "Schema evolution and backward compatibility", "Controlled decommissioning protocols", "Data migration and archival procedures"] },
        ].map(({ phase, timeline, items }, i) => (
          <div key={phase} className="governance-card">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] font-mono font-bold rounded-sm">Phase {i + 1}</span>
              <h4 className="font-serif text-sm font-semibold">{phase}</h4>
              <span className="text-[10px] text-muted-foreground/60 ml-auto">{timeline}</span>
            </div>
            <ul className="grid gap-1 sm:grid-cols-2">
              {items.map(item => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    {/* Anti-Dependency */}
    <Section className="border-t border-border bg-surface2/30">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <strong className="text-foreground">Sustainability Principle:</strong> No funding model, vendor relationship, or operational arrangement may create structural dependency that compromises governance neutrality. Exit and reversibility are architecturally guaranteed at every lifecycle phase.
        </p>
      </div>
    </Section>
  </div>
);

export default OperationalModel;
