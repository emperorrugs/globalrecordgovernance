import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { SliderField, InputField } from "./InputField";
import { fmt } from "./useImpactInputs";

export function Module6RiskExposure() {
  const [procurementRisk, setProcurementRisk] = useState(3);
  const [auditDelay, setAuditDelay] = useState(90);
  const [litigationFreq, setLitigationFreq] = useState(50);
  const [complianceVar, setComplianceVar] = useState(15);
  const [overrideFreq, setOverrideFreq] = useState(10);
  const [budget, setBudget] = useState(50_000_000_000);

  const results = useMemo(() => {
    const procurementExposure = budget * (procurementRisk / 100);
    const auditCost = (auditDelay / 365) * budget * 0.001;
    const litigationCost = litigationFreq * 250_000;
    const complianceCost = budget * (complianceVar / 100) * 0.01;
    const overrideCost = overrideFreq * 500_000;

    const totalExposure = procurementExposure + auditCost + litigationCost + complianceCost + overrideCost;

    // With GRGF: model 40-70% reduction
    const reductionRate = 0.55;
    const reducedExposure = totalExposure * (1 - reductionRate);

    return {
      procurementExposure, auditCost, litigationCost, complianceCost, overrideCost,
      totalExposure, reducedExposure, savings: totalExposure - reducedExposure,
      score: Math.min(100, Math.round((totalExposure / budget) * 10000)),
    };
  }, [procurementRisk, auditDelay, litigationFreq, complianceVar, overrideFreq, budget]);

  const chartData = [
    { name: "Procurement", current: results.procurementExposure, reduced: results.procurementExposure * 0.45 },
    { name: "Audit Delay", current: results.auditCost, reduced: results.auditCost * 0.3 },
    { name: "Litigation", current: results.litigationCost, reduced: results.litigationCost * 0.5 },
    { name: "Compliance", current: results.complianceCost, reduced: results.complianceCost * 0.4 },
    { name: "Overrides", current: results.overrideCost, reduced: results.overrideCost * 0.2 },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Structural Governance Risk Exposure Index</h3>
        <p className="text-xs text-muted-foreground">Model institutional risk exposure and structural reduction pathways.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InputField label="Annual Budget" value={budget} onChange={setBudget} prefix="$" />
        <SliderField label="Procurement Risk" value={procurementRisk} onChange={setProcurementRisk} min={0.5} max={10} step={0.5} />
        <InputField label="Audit Delay (days)" value={auditDelay} onChange={setAuditDelay} suffix="days" />
        <InputField label="Litigation Frequency (annual)" value={litigationFreq} onChange={setLitigationFreq} />
        <SliderField label="Compliance Variance" value={complianceVar} onChange={setComplianceVar} min={1} max={30} step={1} />
        <InputField label="Manual Override Frequency" value={overrideFreq} onChange={setOverrideFreq} suffix="/yr" />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="governance-card text-center">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Risk Exposure Score</p>
          <p className="text-3xl font-serif font-semibold text-destructive mt-1">{results.score}</p>
        </div>
        <div className="governance-card text-center">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Total Exposure</p>
          <p className="text-xl font-serif font-semibold text-foreground mt-1">{fmt(results.totalExposure)}</p>
        </div>
        <div className="governance-card text-center">
          <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">Modeled Reduction</p>
          <p className="text-xl font-serif font-semibold text-accent mt-1">{fmt(results.savings)}</p>
        </div>
      </div>

      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Risk Exposure: Current vs With GRGF</h4>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 9, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ fontSize: 11, fontFamily: "var(--mono)", background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="current" name="Current Exposure" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} />
              <Bar dataKey="reduced" name="With GRGF" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
