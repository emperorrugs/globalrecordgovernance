import { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { InputField, SliderField } from "./InputField";
import { useImpactInputs, fmt, npv } from "./useImpactInputs";

export function Module1Calculator() {
  const { inputs, update } = useImpactInputs();

  const results = useMemo(() => {
    const integrityExposure = inputs.procurementVolume * (inputs.integrityRisk / 100);
    const adminCost = inputs.caseVolume * inputs.caseCost;

    const scenarios = [
      { name: "Conservative (1%)", rate: 0.01 },
      { name: "Moderate (3%)", rate: 0.03 },
      { name: "Upper Pilot (5%)", rate: 0.05 },
    ];

    const results = scenarios.map((s) => {
      const integrityGain = integrityExposure * s.rate;
      const auditGain = inputs.auditBudget * (inputs.auditEfficiency / 100);
      const adminGain = adminCost * (inputs.adminEfficiency / 100);
      const annualBenefit = integrityGain + auditGain + adminGain;
      const netBenefit = annualBenefit - inputs.deploymentCost;
      const fiveYearCF = Array(5).fill(annualBenefit);
      fiveYearCF[0] -= inputs.deploymentCost;
      const tenYearCF = Array(10).fill(annualBenefit);
      tenYearCF[0] -= inputs.deploymentCost;

      return {
        scenario: s.name,
        annualBenefit,
        netYear1: netBenefit,
        npv5: npv(fiveYearCF, inputs.discountRate),
        npv10: npv(tenYearCF, inputs.discountRate),
        breakeven: annualBenefit > 0 ? inputs.deploymentCost / annualBenefit : Infinity,
      };
    });

    const breakEvenPct = inputs.procurementVolume > 0
      ? (inputs.deploymentCost / inputs.procurementVolume) * 100
      : 0;

    return { results, breakEvenPct };
  }, [inputs]);

  const chartData = results.results.map((r) => ({
    name: r.scenario.split(" (")[0],
    benefit: r.annualBenefit,
    cost: inputs.deploymentCost,
  }));

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Governance Integrity Impact Model</h3>
        <p className="text-xs text-muted-foreground">Conservative fiscal modeling for structured pilot evaluation.</p>
      </div>

      {/* Inputs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField label="Annual Procurement Volume" value={inputs.procurementVolume} onChange={(v) => update({ procurementVolume: v })} prefix="$" />
        <InputField label="Government Operational Budget" value={inputs.operationalBudget} onChange={(v) => update({ operationalBudget: v })} prefix="$" />
        <InputField label="Ministries to Integrate" value={inputs.ministries} onChange={(v) => update({ ministries: v })} />
        <InputField label="Annual Audit Budget" value={inputs.auditBudget} onChange={(v) => update({ auditBudget: v })} prefix="$" />
        <InputField label="Estimated Integrity Risk" value={inputs.integrityRisk} onChange={(v) => update({ integrityRisk: v })} suffix="%" />
        <InputField label="Administrative Case Volume" value={inputs.caseVolume} onChange={(v) => update({ caseVolume: v })} />
        <InputField label="Average Case Cost" value={inputs.caseCost} onChange={(v) => update({ caseCost: v })} prefix="$" />
        <InputField label="Deployment Cost Estimate" value={inputs.deploymentCost} onChange={(v) => update({ deploymentCost: v })} prefix="$" />
      </div>

      {/* Assumptions */}
      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Adjustable Assumptions</h4>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SliderField label="Integrity Improvement" value={inputs.improvementRate} onChange={(v) => update({ improvementRate: v })} min={0.5} max={5} step={0.1} />
          <SliderField label="Audit Efficiency Gain" value={inputs.auditEfficiency} onChange={(v) => update({ auditEfficiency: v })} min={10} max={30} step={1} />
          <SliderField label="Administrative Efficiency" value={inputs.adminEfficiency} onChange={(v) => update({ adminEfficiency: v })} min={10} max={25} step={1} />
          <SliderField label="Discount Rate" value={inputs.discountRate} onChange={(v) => update({ discountRate: v })} min={3} max={7} step={0.5} />
        </div>
      </div>

      {/* Break-even */}
      <div className="governance-card border-l-2 border-l-accent">
        <p className="text-xs text-muted-foreground">
          <span className="text-accent font-semibold">Break-even Threshold:</span>{" "}
          {results.breakEvenPct.toFixed(4)}% procurement integrity improvement offsets full deployment cost.
        </p>
      </div>

      {/* Scenario Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-2 px-3 font-mono text-muted-foreground">Scenario</th>
              <th className="text-right py-2 px-3 font-mono text-muted-foreground">Annual Benefit</th>
              <th className="text-right py-2 px-3 font-mono text-muted-foreground">Net Year 1</th>
              <th className="text-right py-2 px-3 font-mono text-muted-foreground">5-Year NPV</th>
              <th className="text-right py-2 px-3 font-mono text-muted-foreground">10-Year NPV</th>
              <th className="text-right py-2 px-3 font-mono text-muted-foreground">Payback</th>
            </tr>
          </thead>
          <tbody>
            {results.results.map((r) => (
              <tr key={r.scenario} className="border-b border-border/50">
                <td className="py-2 px-3 font-mono">{r.scenario}</td>
                <td className="text-right py-2 px-3 font-mono text-accent">{fmt(r.annualBenefit)}</td>
                <td className="text-right py-2 px-3 font-mono">{fmt(r.netYear1)}</td>
                <td className="text-right py-2 px-3 font-mono">{fmt(r.npv5)}</td>
                <td className="text-right py-2 px-3 font-mono">{fmt(r.npv10)}</td>
                <td className="text-right py-2 px-3 font-mono">{r.breakeven < 1 ? "< 1 yr" : `${r.breakeven.toFixed(1)} yr`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Chart */}
      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Annual Benefit vs Deployment Cost</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ fontSize: 11, fontFamily: "var(--mono)", background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="benefit" name="Annual Benefit" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
              <Bar dataKey="cost" name="Deployment Cost" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/60 italic">All outputs are pilot-stage modeled projections pending validation.</p>
    </div>
  );
}
