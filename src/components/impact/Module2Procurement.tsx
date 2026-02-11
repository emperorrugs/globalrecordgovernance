import { useState, useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { InputField, SliderField } from "./InputField";
import { fmt } from "./useImpactInputs";

export function Module2Procurement() {
  const [volume, setVolume] = useState(50_000_000_000);
  const [leakageLow, setLeakageLow] = useState(2);
  const [leakageHigh, setLeakageHigh] = useState(5);
  const [reduction, setReduction] = useState(15);

  const results = useMemo(() => {
    const exposureLow = volume * (leakageLow / 100);
    const exposureHigh = volume * (leakageHigh / 100);
    const exposureMid = (exposureLow + exposureHigh) / 2;
    const reducedLow = exposureLow * (reduction / 100);
    const reducedHigh = exposureHigh * (reduction / 100);
    const reducedMid = (reducedLow + reducedHigh) / 2;

    return {
      exposureLow, exposureHigh, exposureMid,
      reducedLow, reducedHigh, reducedMid,
    };
  }, [volume, leakageLow, leakageHigh, reduction]);

  const chartData = [
    { name: "Low Est.", exposure: results.exposureLow, recovered: results.reducedLow },
    { name: "Mid Est.", exposure: results.exposureMid, recovered: results.reducedMid },
    { name: "High Est.", exposure: results.exposureHigh, recovered: results.reducedHigh },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="institutional-heading text-xl font-semibold mb-1">Procurement Integrity Exposure Simulator</h3>
        <p className="text-xs text-muted-foreground">Conservative leakage modeling with structural reduction analysis.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <InputField label="Annual Procurement Volume" value={volume} onChange={setVolume} prefix="$" />
        <SliderField label="Leakage Estimate (Low)" value={leakageLow} onChange={setLeakageLow} min={0.5} max={10} step={0.5} />
        <SliderField label="Leakage Estimate (High)" value={leakageHigh} onChange={setLeakageHigh} min={1} max={15} step={0.5} />
        <SliderField label="Modeled GRGF Reduction" value={reduction} onChange={setReduction} min={5} max={50} step={1} />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Estimated Exposure (Range)", value: `${fmt(results.exposureLow)} – ${fmt(results.exposureHigh)}` },
          { label: "Modeled Leakage Reduction", value: `${fmt(results.reducedLow)} – ${fmt(results.reducedHigh)}` },
          { label: "Mid-Point Integrity Gain", value: fmt(results.reducedMid) },
        ].map(({ label, value }) => (
          <div key={label} className="governance-card text-center">
            <p className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{label}</p>
            <p className="text-lg font-serif font-semibold text-accent mt-1">{value}</p>
          </div>
        ))}
      </div>

      <div className="governance-card">
        <h4 className="font-serif text-sm font-semibold mb-4">Exposure vs Recovery</h4>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <YAxis tickFormatter={(v) => fmt(v)} tick={{ fontSize: 10, fontFamily: "var(--mono)" }} stroke="hsl(var(--muted-foreground))" />
              <Tooltip formatter={(v: number) => fmt(v)} contentStyle={{ fontSize: 11, fontFamily: "var(--mono)", background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="exposure" name="Leakage Exposure" fill="hsl(var(--muted-foreground))" radius={[2, 2, 0, 0]} />
              <Bar dataKey="recovered" name="Modeled Recovery" fill="hsl(var(--accent))" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground/60 italic">Conservative modeling emphasis. Actual outcomes require institutional validation.</p>
    </div>
  );
}
