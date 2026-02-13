import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertTriangle, Network, Clock, TrendingUp, Zap } from "lucide-react";

const Interoperability = () => {
  const [ministries, setMinistries] = useState(8);
  const [exchangeFreq, setExchangeFreq] = useState<"daily" | "weekly" | "monthly">("daily");
  const [crossBorder, setCrossBorder] = useState(false);

  const results = useMemo(() => {
    const freqMult = exchangeFreq === "daily" ? 1.0 : exchangeFreq === "weekly" ? 0.7 : 0.4;
    const borderMult = crossBorder ? 1.3 : 1.0;
    const baseReduction = Math.min(85, 20 + ministries * 4) * freqMult;
    const efficiencyLift = Math.min(45, 8 + ministries * 2.5) * freqMult * borderMult;
    const coordImprovement = Math.min(70, 15 + ministries * 3.5) * freqMult;
    const reconImprovement = Math.min(90, 30 + ministries * 5) * freqMult;
    return {
      processingReduction: baseReduction.toFixed(0),
      efficiencyLift: efficiencyLift.toFixed(0),
      coordImprovement: coordImprovement.toFixed(0),
      reconImprovement: reconImprovement.toFixed(0),
    };
  }, [ministries, exchangeFreq, crossBorder]);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Interoperability Impact Simulator — GRGF"
        description="Model the efficiency impact of cross-ministry and cross-border governance interoperability through federated digital public infrastructure."
      />
      <PageHeader
        title="Interoperability Impact Simulator"
        subtitle="Model the projected impact of connecting government agencies through federated governance infrastructure. All outputs are range-based estimates."
      />

      <Section title="Configuration" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3 max-w-3xl">
            <div>
              <Label className="text-xs text-muted-foreground">Ministries Connected</Label>
              <Input type="number" value={ministries} min={1} max={50}
                onChange={(e) => setMinistries(Number(e.target.value))}
                className="mt-1 font-mono" />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Data Exchange Frequency</Label>
              <select value={exchangeFreq}
                onChange={(e) => setExchangeFreq(e.target.value as typeof exchangeFreq)}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Cross-Border Integration</Label>
              <select value={crossBorder ? "yes" : "no"}
                onChange={(e) => setCrossBorder(e.target.value === "yes")}
                className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm font-mono">
                <option value="no">Not Required</option>
                <option value="yes">Required</option>
              </select>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section title="Projected Impact" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
            {[
              { icon: Clock, label: "Processing Time Reduction", value: `${results.processingReduction}%`, desc: "Estimated reduction in inter-agency processing latency." },
              { icon: TrendingUp, label: "Efficiency Uplift", value: `${results.efficiencyLift}%`, desc: "Projected administrative efficiency improvement." },
              { icon: Network, label: "Coordination Improvement", value: `${results.coordImprovement}%`, desc: "Cross-ministry decision coordination improvement." },
              { icon: Zap, label: "Data Reconciliation", value: `${results.reconImprovement}%`, desc: "Reduction in manual data reconciliation effort." },
            ].map(({ icon: Icon, label, value, desc }) => (
              <div key={label} className="governance-card-elevated text-center">
                <Icon className="h-5 w-5 text-accent mx-auto mb-2" />
                <p className="text-3xl font-serif font-bold text-accent">{value}</p>
                <p className="text-sm font-medium mt-1">{label}</p>
                <p className="text-xs text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Impact Scaling Model" className="border-t border-border">
        <FadeIn>
          <div className="overflow-x-auto governance-card-elevated max-w-3xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-3 px-4 font-serif font-semibold">Ministries</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold">Processing ↓</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold">Efficiency ↑</th>
                  <th className="text-center py-3 px-4 font-serif font-semibold">Coordination ↑</th>
                </tr>
              </thead>
              <tbody>
                {[3, 8, 15, 24].map((m) => {
                  const pr = Math.min(85, 20 + m * 4);
                  const ef = Math.min(45, 8 + m * 2.5);
                  const co = Math.min(70, 15 + m * 3.5);
                  return (
                    <tr key={m} className="border-b border-border/60">
                      <td className="py-3 px-4 font-mono font-semibold">{m}</td>
                      <td className="py-3 px-4 text-center font-mono text-muted-foreground">{pr}%</td>
                      <td className="py-3 px-4 text-center font-mono text-accent font-semibold">{ef}%</td>
                      <td className="py-3 px-4 text-center font-mono text-muted-foreground">{co}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Modeling Disclaimer.</span>{" "}
            All interoperability projections are based on generalized efficiency models. Actual impact depends on institutional capacity, data quality, and implementation fidelity.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Interoperability;
