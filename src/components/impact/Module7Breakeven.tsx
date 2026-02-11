import { useState, useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { SliderField, InputField } from "./InputField";
import { fmt } from "./useImpactInputs";

export function Module7Breakeven() {
  const [procVolume, setProcVolume] = useState(50_000_000_000);
  const [deploymentCost, setDeploymentCost] = useState(50_000_000);
  const [improvement, setImprovement] = useState(1);

  const results = useMemo(() => {
    const breakevenPct = procVolume > 0 ? (deploymentCost / procVolume) * 100 : 0;
    const currentBenefit = procVolume * (improvement / 100);
    const isAbove = improvement >= breakevenPct;

    // Generate curve data
    const data = [];
    for (let pct = 0; pct <= 5; pct += 0.1) {
      const benefit = procVolume * (pct / 100);
      data.push({
        pct: Math.round(pct * 10) / 10,
        benefit,
        cost: deploymentCost,
        net: benefit - deploymentCost,
      });
    }

    return { breakevenPct, currentBenefit, isAbove, data };
  }, [procVolume, deploymentCost, improvement]);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Break-even Visualizer</h3>
        <p className="text-xs text-muted-foreground">Interactive threshold analysis. Minimum integrity improvement to offset deployment cost.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <InputField label="Procurement Volume" value={procVolume} onChange={setProcVolume} prefix="$" />
        <InputField label="Deployment Cost" value={deploymentCost} onChange={setDeploymentCost} prefix="$" />
        <SliderField label="Integrity Improvement" value={improvement} onChange={setImprovement} min={0.1} max={5} step={0.1} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="governance-card text-center">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Break-even Threshold</p>
          <p className="text-2xl font-serif font-semibold text-accent mt-1">{results.breakevenPct.toFixed(4)}%</p>
        </div>
        <div className="governance-card text-center">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Current Benefit</p>
          <p className="text-xl font-serif font-semibold text-foreground mt-1">{fmt(results.currentBenefit)}</p>
        </div>
        <div className={`governance-card text-center border-l-2 ${results.isAbove ? "border-l-accent" : "border-l-destructive"}`}>
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Status</p>
          <p className={`text-lg font-serif font-semibold mt-1 ${results.isAbove ? "text-accent" : "text-destructive"}`}>
            {results.isAbove ? "Above Break-even" : "Below Break-even"}
          </p>
        </div>
      </div>

      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Net Benefit vs Integrity Improvement</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={results.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                dataKey="pct"
                tick={{ fontSize: 10, fontFamily: "var(--mono)" }}
                stroke="hsl(var(--muted-foreground))"
                label={{ value: "Improvement %", position: "insideBottom", offset: -5, fontSize: 10, fontFamily: "var(--mono)" }}
              />
              <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ fontSize: 11, fontFamily: "var(--mono)", background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <ReferenceLine y={0} stroke="hsl(var(--destructive))" strokeDasharray="4 4" label={{ value: "Break-even", fontSize: 10, fontFamily: "var(--mono)" }} />
              <Area
                type="monotone"
                dataKey="net"
                name="Net Benefit"
                stroke="hsl(var(--accent))"
                fill="hsl(var(--accent))"
                fillOpacity={0.15}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
