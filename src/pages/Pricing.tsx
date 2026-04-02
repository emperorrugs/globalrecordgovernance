import { useState } from "react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import {
  Check, ArrowRight, Globe, Shield, Layers, Building2,
  Crown, Zap, Calculator, Users
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Pilot License",
    price: "$150K – $500K",
    period: "one-time + annual support",
    description: "Proof-of-concept deployment for a single department or sector. Ideal for government CIOs evaluating the framework.",
    color: "hsl(var(--ms-blue))",
    icon: Zap,
    features: [
      "Up to 10 applications",
      "1 sector configuration",
      "SHA-256 hash chain engine",
      "Basic record verification",
      "90-day implementation support",
      "Training for up to 25 users",
      "Standard SLA (99.5%)",
      "Quarterly integrity reports",
    ],
    highlight: false,
    cta: "Request Pilot Proposal",
  },
  {
    name: "National Deployment",
    price: "$2M – $15M",
    period: "per year",
    description: "Multi-sector sovereign deployment with federation-ready architecture. For national digital transformation programs.",
    color: "hsl(var(--ms-green))",
    icon: Building2,
    features: [
      "30–60 applications",
      "3–5 sector configurations",
      "Full Anchor Chain Engine",
      "Merkle tree verification",
      "Zero-knowledge proof modules",
      "Federation protocol (domestic)",
      "Custom OPA/Rego policy rules",
      "Dedicated implementation team",
      "24/7 sovereign SLA (99.9%)",
      "Annual security audit",
    ],
    highlight: true,
    cta: "Request Deployment Brief",
  },
  {
    name: "Full Sovereign Edition",
    price: "$15M – $50M+",
    period: "per year",
    description: "Complete 126-application deployment across all 12 sectors. The definitive governance truth infrastructure.",
    color: "hsl(var(--ms-red))",
    icon: Crown,
    features: [
      "All 126 applications",
      "All 12 sector configurations",
      "Full Anchor Chain + Federation",
      "Cross-border interoperability",
      "Post-quantum cryptography",
      "HSM key management",
      "Custom sector policy engines",
      "GRGF™ Academy certification program",
      "Sovereign SLA (99.99%)",
      "Continuous security monitoring",
      "IP co-stewardship options",
    ],
    highlight: false,
    cta: "Request Sovereign Brief",
  },
  {
    name: "Federation Node",
    price: "Custom",
    period: "bilateral agreement",
    description: "Cross-border governance interoperability node. Connect national chains into a verified global federation.",
    color: "hsl(var(--ms-yellow))",
    icon: Globe,
    features: [
      "Federation protocol license",
      "Cross-witness Merkle roots",
      "Bilateral treaty compliance",
      "Multi-jurisdiction policy sync",
      "Shared audit intelligence",
      "Diplomatic key ceremony",
      "Joint governance committee",
      "Custom integration support",
    ],
    highlight: false,
    cta: "Request Federation Terms",
  },
];

const roiMetrics = [
  { label: "Cost of governance failure (global/yr)", value: "$113.2B", source: "Historical counterfactual analysis" },
  { label: "GRGF™ annual application value", value: "$61.7B", source: "126 applications × sector value" },
  { label: "Target capture rate", value: "1–3%", source: "Conservative institutional modeling" },
  { label: "Social Return on Investment", value: "20:1", source: "10-year fiscal projection" },
  { label: "Breakeven for pilot nations", value: "18 months", source: "Based on 10-app pilot scope" },
  { label: "10-year global net benefit", value: "$206.8B", source: "Expected scenario modeling" },
];

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="GRGF™ Licensing & Pricing — Institutional Deployment Tiers"
        description="Four institutional tiers from Pilot License to Federation Node. Transparent pricing for sovereign governance infrastructure."
      />

      {/* Hero */}
      <header className="border-b border-border bg-gradient-to-r from-primary/5 via-background to-primary/5 px-6 py-12 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-3">COMMERCIAL ARCHITECTURE</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Licensing & Pricing
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade governance infrastructure. Four institutional tiers designed for
            progressive sovereign deployment — from proof-of-concept to global federation.
          </p>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiers.map((tier, i) => (
            <FadeIn key={tier.name} delay={i * 0.1}>
              <div className={`relative bg-card border rounded-xl p-6 h-full flex flex-col transition-all hover:shadow-lg ${
                tier.highlight ? "border-primary shadow-md ring-2 ring-primary/20" : "border-border"
              }`}>
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <div className="p-2 rounded-lg inline-flex mb-3" style={{ backgroundColor: `${tier.color}15` }}>
                    <tier.icon className="h-5 w-5" style={{ color: tier.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{tier.name}</h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-xs text-muted-foreground block">{tier.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{tier.description}</p>
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {tier.features.map(f => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground">
                      <Check className="h-3 w-3 mt-0.5 flex-shrink-0" style={{ color: tier.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={tier.highlight ? "default" : "outline"}
                  onClick={() => window.location.href = "/contact"}
                >
                  {tier.cta} <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Revenue Model */}
      <section className="border-t border-border bg-muted/30 px-6 py-12 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Revenue Architecture</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Licensing & Subscriptions", pct: "40%", color: "var(--ms-blue)", desc: "Annual platform licensing for sovereign deployments" },
              { label: "Professional Services", pct: "25%", color: "var(--ms-green)", desc: "Implementation, integration, and customization" },
              { label: "Academy & Certification", pct: "20%", color: "var(--ms-red)", desc: "GRGF™ practitioner and institutional certifications" },
            ].map(item => (
              <div key={item.label} className="bg-card border border-border rounded-lg p-5 text-center">
                <div className="text-3xl font-bold mb-1" style={{ color: `hsl(${item.color})` }}>{item.pct}</div>
                <p className="font-semibold text-foreground text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Table */}
      <section className="border-t border-border px-6 py-12 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-2 flex items-center justify-center gap-2">
            <Calculator className="h-5 w-5 text-primary" /> ROI & Impact Metrics
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">Conservative institutional modeling based on historical counterfactual analysis</p>
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Metric</th>
                  <th className="text-right p-4 font-semibold text-foreground">Value</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground hidden md:table-cell">Source</th>
                </tr>
              </thead>
              <tbody>
                {roiMetrics.map((m, i) => (
                  <tr key={m.label} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 text-foreground">{m.label}</td>
                    <td className="p-4 text-right font-mono font-bold text-primary">{m.value}</td>
                    <td className="p-4 text-muted-foreground text-xs hidden md:table-cell">{m.source}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary/5 px-6 py-12 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Deploy?</h2>
          <p className="text-muted-foreground mb-6">
            Contact our institutional team for a tailored deployment proposal, including scope assessment, timeline, and ROI projection.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" onClick={() => window.location.href = "/contact"}>
              <Users className="h-4 w-4 mr-2" /> Request Institutional Brief
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = "/anchor-chain-prototype"}>
              <Layers className="h-4 w-4 mr-2" /> Try Live Prototype
            </Button>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground mt-6">
            Canadian Patent No. CA 3,300,102 · © {new Date().getFullYear()} GRGF™ — Global Record Governance Framework
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
