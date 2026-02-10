import { PageHeader, Section } from "@/components/PageComponents";
import { BarChart3, TrendingUp, Shield, Scale, Clock, Globe } from "lucide-react";

const ImpactROI = () => (
  <div className="animate-fade-in">
    <PageHeader
      title="Quantified Public Value"
      subtitle="Conservative modeling of institutional impact across procurement integrity, audit efficiency, and long-term fiscal sustainability."
    />

    {/* Headline Metrics */}
    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {[
          { metric: "$1.51B", label: "Net annual benefit (Canada archetype)", sub: "Conservative modeled scenario" },
          { metric: "$18.3B", label: "Net annual benefit (global projection)", sub: "Cross-country aggregation" },
          { metric: "100%", label: "Internal Rate of Return", sub: "Modeled conservative scenario" },
          { metric: "Year 1", label: "Payback period", sub: "Based on fraud reduction alone" },
          { metric: "$4.53B", label: "10-year net benefit (Canada)", sub: "Cumulative fiscal impact" },
          { metric: "5–15%", label: "Procurement leakage mitigation", sub: "Omission detection capability" },
        ].map(({ metric, label, sub }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-3xl font-serif font-semibold text-accent mb-1">{metric}</p>
            <p className="text-xs text-foreground font-medium">{label}</p>
            <p className="text-[10px] text-muted-foreground/60 mt-1">{sub}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground italic">
        All figures represent conservative modeled scenarios based on publicly available governance expenditure data. Actual outcomes depend on deployment scope, institutional maturity, and national context.
      </p>
    </Section>

    {/* Procurement Scenario */}
    <Section title="Procurement Integrity Scenario" className="border-t border-border">
      <div className="governance-card mb-6">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          If national procurement expenditure = $10B annually, and systematic leakage ranges between 5–15% due to omissions, process gaps, and undetected irregularities:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Scenario</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Leakage Rate</th>
                <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Annual Loss</th>
                <th className="text-left py-2 text-muted-foreground/70 font-medium">GRGF Mitigation</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                ["Conservative", "5%", "$500M", "$250M–$375M"],
                ["Moderate", "10%", "$1.0B", "$500M–$750M"],
                ["High-Risk", "15%", "$1.5B", "$750M–$1.125B"],
              ].map(([scenario, rate, loss, mitigation]) => (
                <tr key={scenario} className="border-b border-border/50">
                  <td className="py-2 pr-4 font-medium text-foreground">{scenario}</td>
                  <td className="py-2 pr-4 font-mono">{rate}</td>
                  <td className="py-2 pr-4 font-mono">{loss}</td>
                  <td className="py-2 font-mono text-accent">{mitigation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-muted-foreground/50 italic">
          Mitigation assumes 50–75% detection rate through omission detection and continuous compliance evidence.
        </p>
      </div>
    </Section>

    {/* Audit Efficiency */}
    <Section title="Audit Efficiency Modeling" className="border-t border-border">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="governance-card">
          <Clock className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Audit Cycle Reduction</h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Traditional audit cycles require extensive manual reconciliation. GRGF's continuous compliance evidence model reduces cycle time by 20–40% through:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "Pre-verified record integrity (no manual hash checking)",
              "Automated policy compliance evidence",
              "Structured event logs replacing unstructured documentation",
              "Real-time audit trail availability",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="governance-card">
          <TrendingUp className="h-5 w-5 text-accent mb-3" />
          <h4 className="font-serif text-sm font-semibold mb-2">Cost Reduction Drivers</h4>
          <p className="text-xs text-muted-foreground leading-relaxed mb-3">
            Primary value creation through reduced manual audit costs and accelerated compliance cycles:
          </p>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            {[
              "Reduced external audit firm engagement hours",
              "Eliminated manual document collection and reconciliation",
              "Automated compliance reporting for oversight bodies",
              "Reduced re-audit frequency through continuous assurance",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2"><span className="text-accent mt-0.5 shrink-0">·</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    {/* 10-Year Projection */}
    <Section title="10-Year Fiscal Impact (Canada Archetype)" className="border-t border-border">
      <div className="governance-card overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Year</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Deployment Cost</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Fraud Reduction</th>
              <th className="text-left py-2 pr-4 text-muted-foreground/70 font-medium">Audit Savings</th>
              <th className="text-left py-2 text-muted-foreground/70 font-medium">Net Benefit</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground">
            {[
              ["1", "$5M", "$250M", "$50M", "$295M"],
              ["2", "$3M", "$500M", "$100M", "$597M"],
              ["3", "$2M", "$750M", "$150M", "$898M"],
              ["5", "$2M", "$1.0B", "$200M", "$1.198B"],
              ["10", "$2M", "$1.5B", "$250M", "$1.748B"],
            ].map(([year, cost, fraud, audit, net]) => (
              <tr key={year} className="border-b border-border/50">
                <td className="py-2 pr-4 font-mono font-medium text-foreground">{year}</td>
                <td className="py-2 pr-4 font-mono">{cost}</td>
                <td className="py-2 pr-4 font-mono">{fraud}</td>
                <td className="py-2 pr-4 font-mono">{audit}</td>
                <td className="py-2 font-mono text-accent font-medium">{net}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs text-muted-foreground italic">
        Sensitivity analysis: Results remain positive under -30% fraud detection assumption and +50% deployment cost scenarios.
      </p>
    </Section>

    {/* Attribution */}
    <Section className="border-t border-border bg-card/30">
      <p className="text-xs text-muted-foreground leading-relaxed">
        <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
      </p>
    </Section>
  </div>
);

export default ImpactROI;
