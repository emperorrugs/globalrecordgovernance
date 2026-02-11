import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { SliderField } from "./InputField";
import { fmt } from "./useImpactInputs";

export function Module8MacroSimulation() {
  const [ministries, setMinistries] = useState(24);
  const [nations, setNations] = useState(5);
  const [perMinistryBenefit, setPerMinistryBenefit] = useState(50);
  const [federationMultiplier, setFederationMultiplier] = useState(15);

  const results = useMemo(() => {
    const nationalBenefit = ministries * perMinistryBenefit * 1_000_000;
    const crossMinistryEffect = nationalBenefit * 0.15; // synergy
    const totalNational = nationalBenefit + crossMinistryEffect;

    const multilateralBenefit = totalNational * nations;
    const federationEffect = multilateralBenefit * (federationMultiplier / 100);
    const totalGlobal = multilateralBenefit + federationEffect;

    const trustIndexShift = Math.min(25, Math.round((nations * ministries * perMinistryBenefit) / 5000));
    const stabilityMultiplier = 1 + (trustIndexShift / 100);

    return {
      nationalBenefit, crossMinistryEffect, totalNational,
      multilateralBenefit, federationEffect, totalGlobal,
      trustIndexShift, stabilityMultiplier,
    };
  }, [ministries, nations, perMinistryBenefit, federationMultiplier]);

  const chartData = [
    { name: "National", value: results.totalNational },
    { name: "Multilateral", value: results.multilateralBenefit },
    { name: "Federation Effect", value: results.federationEffect },
    { name: "Total Global", value: results.totalGlobal },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Governance Infrastructure Leverage Model</h3>
        <p className="text-xs text-muted-foreground">Macro-scale scenario modeling for cross-border governance federation.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SliderField label="Ministries per Nation" value={ministries} onChange={setMinistries} min={5} max={50} step={1} suffix="" />
        <SliderField label="Participating Nations" value={nations} onChange={setNations} min={1} max={30} step={1} suffix="" />
        <SliderField label="Per-Ministry Benefit ($M)" value={perMinistryBenefit} onChange={setPerMinistryBenefit} min={10} max={200} step={5} suffix="M" />
        <SliderField label="Federation Multiplier" value={federationMultiplier} onChange={setFederationMultiplier} min={5} max={30} step={1} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "National Benefit", value: fmt(results.totalNational) },
          { label: "Multilateral Benefit", value: fmt(results.multilateralBenefit) },
          { label: "Trust Index Shift", value: `+${results.trustIndexShift} pts` },
          { label: "Stability Multiplier", value: `${results.stabilityMultiplier.toFixed(2)}x` },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{label}</p>
            <p className="text-xl font-serif font-semibold text-accent mt-1">{value}</p>
          </div>
        ))}
      </div>

      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Scaling Impact</h4>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 9, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ fontSize: 11, fontFamily: "var(--mono)", background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="value" name="Impact" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Scaling Stages */}
      <div className="space-y-2">
        {[
          { stage: "1", label: "Nation-level node", desc: "Sovereign deployment within single jurisdiction" },
          { stage: "2", label: "Federation layer", desc: "Cross-ministry interoperable governance" },
          { stage: "3", label: "Cross-border verification", desc: "Inter-jurisdictional record validation" },
          { stage: "4", label: "Multilateral integration", desc: "Development bank and international org alignment" },
          { stage: "5", label: "Development bank alignment", desc: "World Bank, ADB, AfDB program integration" },
          { stage: "6", label: "Capital markets validation", desc: "Sovereign governance risk premium reduction" },
        ].map(({ stage, label, desc }) => (
          <div key={stage} className="flex items-center gap-3 governance-card py-3">
            <span className="w-6 h-6 bg-primary text-primary-foreground rounded-sm flex items-center justify-center text-[10px] font-mono font-bold shrink-0">{stage}</span>
            <div className="flex-1">
              <span className="text-xs font-semibold">{label}</span>
              <span className="text-xs text-muted-foreground ml-2">— {desc}</span>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[10px] text-muted-foreground/60 italic">All macro projections are scenario-based and labeled as such. Not validated predictions.</p>
    </div>
  );
}
