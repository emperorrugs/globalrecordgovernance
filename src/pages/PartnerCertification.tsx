import { PageHeader, Section } from "@/components/PageComponents";
import { Award, Users, Shield, CheckCircle2, ArrowRight, Building2, Globe, BookOpen } from "lucide-react";
import { PatentNotice } from "@/components/PatentNotice";

const PartnerCertification = () => {
  const tiers = [
    {
      level: "Registered",
      icon: BookOpen,
      color: "text-muted-foreground",
      borderColor: "border-l-muted-foreground",
      requirements: [
        "Complete GRGF Academy Foundation course",
        "Pass basic competency assessment",
        "Sign partner agreement",
      ],
      benefits: [
        "Access to SDK and developer documentation",
        "Listed in GRGF partner directory",
        "Community support channel",
        "Use of 'GRGF Registered Partner' designation",
      ],
      fee: "$5,000 / year",
    },
    {
      level: "Certified",
      icon: Shield,
      color: "text-accent",
      borderColor: "border-l-accent",
      requirements: [
        "Minimum 2 certified practitioners on staff",
        "Complete deployment practicum",
        "Pass technical integration assessment",
        "Demonstrate institutional deployment capability",
      ],
      benefits: [
        "Authorized to deploy GRGF institutional nodes",
        "Access to pre-release features and APIs",
        "Co-branded deployment documentation",
        "Priority support with SLA",
        "Revenue share on referred deployments",
      ],
      fee: "$25,000 / year",
    },
    {
      level: "Sovereign",
      icon: Award,
      color: "text-primary",
      borderColor: "border-l-primary",
      requirements: [
        "Minimum 5 certified practitioners including 1 Lead",
        "Completed at least 1 national-scale deployment",
        "SOC 2 Type II certified organization",
        "Formal institutional reference",
        "Annual compliance review",
      ],
      benefits: [
        "Authorized for sovereign national deployments",
        "Federation node management rights",
        "Joint go-to-market with GRGF",
        "Architectural review access",
        "Seat on Partner Advisory Council",
        "Premium revenue share",
      ],
      fee: "Custom bilateral agreement",
    },
  ];

  const certificationLevels = [
    { name: "GRGF Analyst", hours: 20, scope: "Framework concepts, record lifecycle, verification principles", prereq: "None" },
    { name: "GRGF Practitioner", hours: 40, scope: "Deployment, configuration, SDK integration, policy-as-code", prereq: "Analyst certification" },
    { name: "GRGF Lead", hours: 80, scope: "Architecture design, federation setup, institutional governance, HSM integration", prereq: "Practitioner + 1 deployment" },
  ];

  const targetPartners = [
    { type: "Big Four / Advisory", examples: "Deloitte, KPMG, PwC, EY, Accenture, McKinsey", role: "Institutional deployment and compliance advisory" },
    { type: "Systems Integrators", examples: "Capgemini, Infosys, TCS, CGI, IBM Consulting", role: "Technical integration and platform customization" },
    { type: "GovTech Specialists", examples: "Regional and national GovTech implementers", role: "Government-specific deployment and localization" },
    { type: "Legal & Compliance", examples: "Specialized governance and regulatory technology firms", role: "Compliance mapping, audit preparation, policy alignment" },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader
        title="Partner Certification Program"
        subtitle="Structured program for integrators, consultants, and institutional deployers to become authorized GRGF implementation partners."
      />

      {/* Program Overview */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">
            GRGF's partner certification program creates a controlled ecosystem of qualified deployers. 
            Partners earn certification through demonstrated competency, not commercial agreements alone. 
            This ensures every institutional deployment meets sovereign-grade quality standards.
          </p>
        </div>
      </Section>

      {/* Partner Tiers */}
      <Section title="Partner Tiers" className="border-t border-border">
        <div className="grid gap-6 lg:grid-cols-3 max-w-5xl">
          {tiers.map((tier) => (
            <div key={tier.level} className={`governance-card border-l-2 ${tier.borderColor}`}>
              <div className="flex items-center gap-2 mb-3">
                <tier.icon className={`h-5 w-5 ${tier.color}`} />
                <h3 className="font-serif text-base font-semibold">{tier.level}</h3>
              </div>
              
              <div className="mb-4">
                <span className="text-lg font-bold text-foreground">{tier.fee}</span>
              </div>

              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Requirements</h4>
              <div className="space-y-1.5 mb-4">
                {tier.requirements.map((r) => (
                  <div key={r} className="flex items-start gap-2">
                    <CheckCircle2 className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5" />
                    <span className="text-xs text-muted-foreground">{r}</span>
                  </div>
                ))}
              </div>

              <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Benefits</h4>
              <div className="space-y-1.5">
                {tier.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle2 className={`h-3 w-3 shrink-0 mt-0.5 ${tier.color}`} />
                    <span className="text-xs text-muted-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Individual Certification */}
      <Section title="Individual Certification Levels" className="border-t border-border">
        <div className="max-w-4xl overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Certification</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Hours</th>
                <th className="text-left py-2 pr-4 font-semibold text-foreground">Scope</th>
                <th className="text-left py-2 font-semibold text-foreground">Prerequisites</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {certificationLevels.map((c) => (
                <tr key={c.name} className="border-b border-border/50">
                  <td className="py-3 pr-4 font-semibold text-foreground">{c.name}</td>
                  <td className="py-3 pr-4 font-mono">{c.hours}h</td>
                  <td className="py-3 pr-4">{c.scope}</td>
                  <td className="py-3">{c.prereq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Target Partners */}
      <Section title="Target Partner Ecosystem" className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-4xl">
          {targetPartners.map((p) => (
            <div key={p.type} className="governance-card">
              <Building2 className="h-4 w-4 text-accent mb-2" />
              <h3 className="font-serif text-sm font-semibold">{p.type}</h3>
              <p className="text-[10px] text-muted-foreground/60 mt-1">{p.examples}</p>
              <p className="text-xs text-muted-foreground mt-2">{p.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Revenue Model */}
      <Section title="Partner Revenue Model" className="border-t border-border">
        <div className="governance-card max-w-3xl">
          <h3 className="font-serif text-sm font-semibold mb-3">Revenue Share Structure</h3>
          <div className="space-y-2">
            {[
              { item: "Referred institutional deployment", share: "15–25% of license value" },
              { item: "Partner-led implementation services", share: "Partner retains 100%" },
              { item: "Certification training delivery", share: "60/40 (Partner/GRGF)" },
              { item: "Annual node management", share: "20% of recurring revenue" },
            ].map((r) => (
              <div key={r.item} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{r.item}</span>
                <span className="text-xs font-mono font-semibold text-accent">{r.share}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <PatentNotice />
    </div>
  );
};

export default PartnerCertification;
