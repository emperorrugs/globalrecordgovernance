import { PageHeader, Section } from "@/components/PageComponents";
import { Shield, Users, Globe, Scale, FileText, Eye, Building2, CheckCircle, Lock } from "lucide-react";

const StrategicGovernance = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Strategic Framework & Governance"
      subtitle="Governance charter, oversight model, and multi-stakeholder collaboration aligned with OECD strategic governance recommendations."
    />

    {/* Governance Charter */}
    <Section title="Governance Charter">
      <div className="governance-card border-l-2 border-l-accent mb-6">
        <p className="text-sm text-foreground leading-relaxed">
          GRGF operates under a formal Governance Charter that defines custodial neutrality, separation of powers, and the boundaries between operational authority and governance oversight. The framework does not interpret policy, modify authority structures, or override institutional decisions.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { title: "Custodial Neutrality", desc: "Policy decisions are encoded, not interpreted. The framework executes governance rules as defined by institutional authorities — deterministically, without discretion." },
          { title: "Non-Override Principle", desc: "No component of GRGF can override institutional authority. Governance remains with human decision-makers at all times." },
          { title: "Non-Modification Principle", desc: "Authority structures, legal frameworks, and institutional hierarchies remain unchanged. GRGF operates within them." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Oversight Authority Model */}
    <Section title="Oversight Authority Model" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Governance oversight is structurally separated from operational control, ensuring no single entity can influence both policy encoding and record custody.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: Building2, title: "National Governance Authority", desc: "Sovereign entity responsible for policy encoding, rule definition, and institutional authorization within national jurisdiction." },
          { icon: Shield, title: "Independent Oversight Board", desc: "Structurally independent body responsible for audit, compliance monitoring, and integrity verification of the governance layer." },
          { icon: Users, title: "Technical Operations Unit", desc: "Responsible for infrastructure operation, maintenance, and incident response — without access to policy modification authority." },
          { icon: Scale, title: "Ethics & Safeguards Committee", desc: "Reviews anti-capture compliance, misuse risk, and human oversight obligations. Reports directly to oversight authority." },
          { icon: Eye, title: "Public Transparency Office", desc: "Manages public disclosure, aggregate reporting, and citizen-facing transparency obligations under national law." },
          { icon: Globe, title: "Federation Coordination Council", desc: "Manages cross-border interoperability agreements, federated verification protocols, and international cooperation." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="governance-card">
            <Icon className="h-5 w-5 text-accent mb-3" />
            <h4 className="font-serif text-sm font-semibold mb-2">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Multi-Stakeholder Advisory */}
    <Section title="Multi-Stakeholder Advisory Council" className="border-t border-border">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        GRGF governance incorporates structured multi-stakeholder input, aligned with OECD recommendation for collaborative DPI governance.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { title: "Government Representatives", desc: "Treasury, digital government, records management, and justice authorities from participating jurisdictions." },
          { title: "Civil Society Organizations", desc: "Privacy advocates, human rights organizations, and public accountability watchdogs." },
          { title: "Technical Advisory Panel", desc: "Independent cryptographers, security researchers, and governance technology specialists." },
          { title: "International Observers", desc: "OECD, World Bank, and multilateral development institution representatives for peer review." },
        ].map(({ title, desc }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-1">{title}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Anti-Capture Clauses */}
    <Section title="Anti-Capture Clauses" className="border-t border-border">
      <div className="space-y-3">
        {[
          { id: "AC-01", title: "No Single-Entity Control", desc: "No single government, corporation, or individual may hold exclusive governance authority over the framework." },
          { id: "AC-02", title: "No Vendor Lock-In", desc: "All components must be replaceable. No proprietary dependency may be structurally embedded." },
          { id: "AC-03", title: "No Political Override", desc: "Sealed governance records cannot be modified, suppressed, or selectively disclosed by political authority." },
          { id: "AC-04", title: "No Revenue-Dependent Governance", desc: "Governance rule encoding must remain independent of commercial revenue or funding conditions." },
          { id: "AC-05", title: "No Algorithmic Discretion", desc: "All governance decisions are deterministic. No probabilistic, AI-based, or discretionary logic in the governance path." },
        ].map((c) => (
          <div key={c.id} className="governance-card">
            <div className="flex items-start gap-4">
              <span className="hash-text shrink-0 mt-1 text-accent font-bold">{c.id}</span>
              <div>
                <h4 className="font-serif text-sm font-semibold">{c.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* Regulatory Alignment */}
    <Section title="Regulatory Alignment Framework" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          GRGF is designed to operate within — not above — existing regulatory frameworks. Each national deployment maps governance rules to local legal authority.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "National records and archives legislation",
            "Data protection and privacy regulation (GDPR-equivalent)",
            "Public procurement transparency requirements",
            "Administrative procedure and due process frameworks",
            "Freedom of information and disclosure obligations",
            "International treaty and agreement compliance",
          ].map(item => (
            <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export default StrategicGovernance;
