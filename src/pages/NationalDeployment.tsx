import { PageHeader, Section } from "@/components/PageComponents";
import { Globe, Users, Shield, CheckCircle, Clock, BarChart3, FileText } from "lucide-react";

const NationalDeployment = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="National Deployment Framework"
      subtitle="Phased deployment model from legal assessment through international federation, designed for sovereign institutions."
    />

    {/* Readiness Assessment */}
    <Section title="Readiness Assessment Checklist">
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-3xl">
        Pre-deployment assessment evaluates institutional readiness across three dimensions.
      </p>
      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { title: "Legal Readiness", items: ["Existing records legislation compatibility", "Data residency requirements", "Evidentiary admissibility framework", "Privacy regulation alignment"] },
          { title: "Digital Maturity", items: ["National DPI infrastructure status", "System integration capability", "Technical workforce availability", "Existing digital ID systems"] },
          { title: "Cybersecurity Readiness", items: ["National cybersecurity framework", "Incident response capability", "Key management infrastructure", "Audit and compliance capacity"] },
        ].map(({ title, items }) => (
          <div key={title} className="governance-card">
            <h4 className="font-serif text-sm font-semibold mb-3">{title}</h4>
            <ul className="space-y-2">
              {items.map((item) => (
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

    {/* Deployment Phases */}
    <Section title="Deployment Phases" className="border-t border-border">
      <div className="space-y-6">
        {[
          {
            phase: "Phase 0", timeline: "Pre-Deployment", title: "Readiness Assessment",
            items: [
              "Legal and regulatory compatibility analysis",
              "Institutional digital maturity evaluation",
              "Stakeholder mapping and governance authority identification",
              "Risk appetite assessment and reversibility planning",
              "Budget estimation and resource allocation framework",
            ],
          },
          {
            phase: "Phase 1", timeline: "0–6 Months", title: "Pilot Deployment",
            items: [
              "Legal and regulatory assessment",
              "Single pilot ministry selection",
              "National node installation and configuration",
              "Integration testing with existing systems",
              "Staff training and institutional onboarding",
              "Pilot success criteria validation",
            ],
          },
          {
            phase: "Phase 2", timeline: "6–12 Months", title: "Cross-Ministry Integration",
            items: [
              "Expansion to additional ministries",
              "Cross-ministry record verification protocols",
              "Training rollout for governance practitioners",
              "Audit onboarding and compliance validation",
              "Performance monitoring and optimization",
            ],
          },
          {
            phase: "Phase 3", timeline: "12–24 Months", title: "National Federation",
            items: [
              "National federation readiness assessment",
              "Cross-sector integration (judiciary, treasury, procurement)",
              "International interoperability testing",
              "Full-scale production deployment",
              "Ongoing governance compliance monitoring",
            ],
          },
        ].map((p) => (
          <div key={p.phase} className="governance-card border-l-2 border-l-accent">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[10px] font-mono text-accent/70 uppercase tracking-wider">{p.phase}</span>
              <span className="text-[10px] font-mono text-muted-foreground/50">·</span>
              <span className="text-[10px] font-mono text-muted-foreground/70 tracking-wider flex items-center gap-1">
                <Clock className="h-3 w-3" /> {p.timeline}
              </span>
            </div>
            <h4 className="font-serif text-base font-semibold mb-3">{p.title}</h4>
            <ul className="space-y-1.5">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <span className="text-accent mt-0.5 shrink-0">·</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    {/* Required Team */}
    <Section title="Required Team Structure" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { role: "DPI Program Lead", desc: "Overall program management, stakeholder coordination, and milestone tracking." },
          { role: "Security Architect", desc: "Cybersecurity architecture design, threat modeling, and key management oversight." },
          { role: "Policy Encoding Specialist", desc: "Translation of governance rules into deterministic policy engine configurations." },
          { role: "Integration Engineer", desc: "Technical integration with existing national DPI systems and data pipelines." },
          { role: "Legal Advisor", desc: "Legal compatibility assessment, data residency compliance, and evidentiary framework alignment." },
          { role: "Audit Liaison", desc: "Coordination with national audit offices, compliance reporting, and verification protocols." },
        ].map(({ role, desc }) => (
          <div key={role} className="governance-card">
            <Users className="h-4 w-4 text-accent mb-2" />
            <h4 className="font-serif text-sm font-semibold mb-1">{role}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* Budget & KPIs */}
    <Section title="Budget & Performance Framework" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-accent" /> Budget Modeling Ranges
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Component</th>
                  <th className="text-left py-2 text-muted-foreground/70 font-medium">Range (USD)</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Pilot Deployment", "$500K – $2M"],
                  ["Cross-Ministry Rollout", "$2M – $8M"],
                  ["National Federation", "$5M – $15M"],
                  ["Annual Operations", "$1M – $3M"],
                ].map(([comp, range]) => (
                  <tr key={comp} className="border-b border-border/50">
                    <td className="py-2 pr-4">{comp}</td>
                    <td className="py-2 font-mono">{range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[10px] text-muted-foreground/50 italic">
            Ranges depend on national context, digital maturity, and scope of deployment.
          </p>
        </div>
        <div className="governance-card">
          <h4 className="font-serif text-sm font-semibold mb-3 flex items-center gap-2">
            <FileText className="h-4 w-4 text-accent" /> Performance KPIs
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground">
            {[
              "Record sealing latency < 500ms",
              "Verification API response time < 200ms",
              "System availability ≥ 99.9%",
              "Audit trail completeness = 100%",
              "Policy engine determinism = 100%",
              "Cross-ministry integration coverage",
              "Training completion rates",
              "Incident response time < 4 hours",
            ].map((kpi) => (
              <li key={kpi} className="flex items-start gap-2">
                <span className="text-accent mt-0.5 shrink-0">·</span>{kpi}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* Reversibility Policy */}
    <Section title="Reversibility & Exit Policy" className="border-t border-border">
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-sm text-foreground leading-relaxed mb-4">
          GRGF is designed for reversible deployment. Institutions can exit at any phase without data loss, vendor lock-in, or operational disruption.
        </p>
        <div className="space-y-2">
          {[
            "All sealed records remain accessible and verifiable after exit",
            "No proprietary data formats — standard schemas ensure portability",
            "Infrastructure can be decommissioned without affecting existing national systems",
            "Governance rules and policies remain institutional property at all times",
            "No contractual obligations beyond the active pilot period",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <CheckCircle className="h-3 w-3 text-accent shrink-0 mt-0.5" />
              <p className="text-xs text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* Risk Register Summary */}
    <Section title="Risk Register Summary" className="border-t border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Risk</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Likelihood</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Impact</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Mitigation</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {[
              ["Integration complexity", "Medium", "Medium", "Phased deployment with rollback capability"],
              ["Institutional resistance", "High", "Medium", "Stakeholder engagement and pilot evidence"],
              ["Budget overrun", "Low", "Medium", "Conservative scoping with contingency reserves"],
              ["Security incident", "Low", "High", "Incident response protocol and isolation capability"],
              ["Regulatory change", "Low", "Medium", "Jurisdiction-neutral design and policy adaptability"],
            ].map(([risk, likelihood, impact, mitigation]) => (
              <tr key={risk} className="border-b border-border/50">
                <td className="py-2 pr-4 font-medium text-foreground">{risk}</td>
                <td className="py-2 pr-4 font-mono">{likelihood}</td>
                <td className="py-2 pr-4 font-mono">{impact}</td>
                <td className="py-2">{mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default NationalDeployment;
