import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, DollarSign, BarChart3, Shield } from "lucide-react";

function fmt(n: number): string {
  if (Math.abs(n) >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (Math.abs(n) >= 1e6) return `$${(n / 1e6).toFixed(1)}M`;
  if (Math.abs(n) >= 1e3) return `$${(n / 1e3).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

function npv(cashflows: number[], rate: number): number {
  return cashflows.reduce((sum, cf, i) => sum + cf / Math.pow(1 + rate / 100, i + 1), 0);
}

interface Inputs {
  population: number;
  gdp: number;
  publicExpPct: number;
  fraudExposurePct: number;
  maturity: "low" | "medium" | "high";
  deploymentCost: number;
  discountRate: number;
}

const defaults: Inputs = {
  population: 40_000_000,
  gdp: 2_200_000_000_000,
  publicExpPct: 40,
  fraudExposurePct: 3,
  maturity: "medium",
  deploymentCost: 50_000_000,
  discountRate: 5,
};

const maturityMultipliers = { low: 0.6, medium: 1, high: 1.3 };

const FinancialModel = () => {
  const [inputs, setInputs] = useState<Inputs>(defaults);
  const upd = (partial: Partial<Inputs>) => setInputs((p) => ({ ...p, ...partial }));

  const results = useMemo(() => {
    const publicExp = inputs.gdp * (inputs.publicExpPct / 100);
    const fraudBase = publicExp * (inputs.fraudExposurePct / 100);
    const mult = maturityMultipliers[inputs.maturity];

    const efficiencyLow = fraudBase * 0.02 * mult;
    const efficiencyMid = fraudBase * 0.05 * mult;
    const efficiencyHigh = fraudBase * 0.08 * mult;

    const fraudLow = fraudBase * 0.05 * mult;
    const fraudMid = fraudBase * 0.12 * mult;
    const fraudHigh = fraudBase * 0.20 * mult;

    const totalLow = efficiencyLow + fraudLow;
    const totalMid = efficiencyMid + fraudMid;
    const totalHigh = efficiencyHigh + fraudHigh;

    const yearCashflows = Array.from({ length: 10 }, (_, i) => {
      const rampUp = Math.min(1, (i + 1) / 3);
      return totalMid * rampUp - (i === 0 ? inputs.deploymentCost : inputs.deploymentCost * 0.1);
    });

    const npvValue = npv(yearCashflows, inputs.discountRate);
    const roi5yr = ((totalMid * 3.5 - inputs.deploymentCost * 1.4) / (inputs.deploymentCost * 1.4)) * 100;
    const paybackYears = inputs.deploymentCost / (totalMid * 0.5);

    return { publicExp, fraudBase, efficiencyLow, efficiencyMid, efficiencyHigh, fraudLow, fraudMid, fraudHigh, totalLow, totalMid, totalHigh, npvValue, roi5yr, paybackYears };
  }, [inputs]);

  const numField = (label: string, key: keyof Inputs, prefix = "", suffix = "") => (
    <div>
      <Label className="text-xs text-muted-foreground">{label}</Label>
      <div className="flex items-center gap-1 mt-1">
        {prefix && <span className="text-xs text-muted-foreground">{prefix}</span>}
        <Input
          type="number"
          value={inputs[key] as number}
          onChange={(e) => upd({ [key]: Number(e.target.value) })}
          className="font-mono text-sm"
        />
        {suffix && <span className="text-xs text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Financial & Economic Evaluation Engine — GRGF"
        description="Interactive sovereign-grade financial modeling tool for governance infrastructure deployment. NPV analysis, sensitivity projections, and ROI scenarios."
      />
      <PageHeader
        title="Financial & Economic Evaluation Engine"
        subtitle="Interactive model for evaluating governance infrastructure deployment economics. All outputs are range-based projections with clearly stated assumptions."
      />

      <Section title="Country Parameters" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
            {numField("Population", "population")}
            {numField("GDP (USD)", "gdp", "$")}
            {numField("Public Expenditure", "publicExpPct", "", "%")}
            {numField("Fraud Exposure Estimate", "fraudExposurePct", "", "%")}
            <div>
              <Label className="text-xs text-muted-foreground">Digital Maturity</Label>
              <select
                value={inputs.maturity}
                onChange={(e) => upd({ maturity: e.target.value as Inputs["maturity"] })}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            {numField("Deployment Cost (USD)", "deploymentCost", "$")}
            {numField("Discount Rate", "discountRate", "", "%")}
          </div>
        </FadeIn>
      </Section>

      <Section title="Projection Outputs" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { icon: DollarSign, label: "Public Expenditure Base", value: fmt(results.publicExp) },
              { icon: AlertTriangle, label: "Fraud Exposure Base", value: fmt(results.fraudBase) },
              { icon: TrendingUp, label: "10-Year NPV (Mid)", value: fmt(results.npvValue) },
              { icon: BarChart3, label: "5-Year ROI (Mid)", value: `${results.roi5yr.toFixed(0)}%` },
            ].map(({ icon: Icon, label, value }) => (
              <Card key={label} className="border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xs text-muted-foreground flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-accent" />
                    {label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-serif font-bold">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Scenario Analysis" className="border-t border-border">
        <FadeIn>
          <div className="overflow-x-auto governance-card-elevated max-w-3xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-3 px-4 font-serif font-semibold">Metric</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold text-muted-foreground">Low</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold text-accent">Mid</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold text-muted-foreground">High</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Administrative Efficiency Gain", low: results.efficiencyLow, mid: results.efficiencyMid, high: results.efficiencyHigh },
                  { label: "Fraud Reduction Projection", low: results.fraudLow, mid: results.fraudMid, high: results.fraudHigh },
                  { label: "Total Annual Benefit", low: results.totalLow, mid: results.totalMid, high: results.totalHigh },
                ].map((row) => (
                  <tr key={row.label} className="border-b border-border/60">
                    <td className="py-3 px-4 font-medium">{row.label}</td>
                    <td className="py-3 px-4 text-center font-mono text-muted-foreground">{fmt(row.low)}</td>
                    <td className="py-3 px-4 text-center font-mono font-semibold text-accent">{fmt(row.mid)}</td>
                    <td className="py-3 px-4 text-center font-mono text-muted-foreground">{fmt(row.high)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      <Section title="Sensitivity Parameters" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-3xl">
            <h4 className="font-serif text-lg font-semibold mb-4">Modeling Assumptions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Shield className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> Administrative efficiency gains range from 2–8% of fraud exposure base, adjusted for digital maturity.</li>
              <li className="flex items-start gap-2"><Shield className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> Fraud reduction projections assume 5–20% recovery of identified exposure, with a 3-year ramp-up period.</li>
              <li className="flex items-start gap-2"><Shield className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> Deployment costs include initial integration ($50M default) plus 10% annual maintenance.</li>
              <li className="flex items-start gap-2"><Shield className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> NPV calculated using standard discounted cash flow methodology over 10-year horizon.</li>
              <li className="flex items-start gap-2"><Shield className="h-3.5 w-3.5 text-accent mt-0.5 shrink-0" /> Estimated payback period: <strong className="text-foreground">{results.paybackYears.toFixed(1)} years</strong> at mid-range projections.</li>
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Financial Disclaimer.</span>{" "}
            All projections are modeled estimates based on stated assumptions. They do not constitute financial advice, investment recommendations, or performance guarantees.
            Actual outcomes depend on implementation quality, institutional capacity, and local conditions.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default FinancialModel;
