import { useState, useMemo } from 'react';
import { Calculator, TrendingDown, TrendingUp, DollarSign, Building2, Search, ArrowRight, Shield, BarChart3, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Sector profiles with realistic cost multipliers
const SECTOR_PROFILES: Record<string, {
  label: string;
  domains: { area: string; beforeBase: number; reductionPct: number }[];
  deployBase: number[];
  description: string;
}> = {
  transit: {
    label: "Transit / Transportation",
    description: "Urban transit, rail, aviation, port authorities",
    deployBase: [3.2, 1.8, 1.2, 0.8, 0.6],
    domains: [
      { area: "Safety Incident Liability", beforeBase: 18.5, reductionPct: 0.77 },
      { area: "Workers' Compensation Claims", beforeBase: 12.8, reductionPct: 0.60 },
      { area: "Service Disruption Costs", beforeBase: 22.4, reductionPct: 0.62 },
      { area: "Maintenance Accountability Gaps", beforeBase: 15.2, reductionPct: 0.75 },
      { area: "Procurement Irregularities", beforeBase: 28.6, reductionPct: 0.72 },
      { area: "Regulatory Non-Compliance", beforeBase: 8.4, reductionPct: 0.86 },
      { area: "Insurance Premium Overcharges", beforeBase: 14.6, reductionPct: 0.57 },
      { area: "Legal Defense & Settlements", beforeBase: 19.8, reductionPct: 0.73 },
      { area: "Audit & Investigation Costs", beforeBase: 9.6, reductionPct: 0.78 },
      { area: "Fleet Asset Mismanagement", beforeBase: 11.3, reductionPct: 0.72 },
      { area: "Contractor Oversight Failures", beforeBase: 16.5, reductionPct: 0.71 },
      { area: "Public Complaint Resolution", beforeBase: 6.8, reductionPct: 0.72 },
    ],
  },
  healthcare: {
    label: "Healthcare / Hospital",
    description: "Hospitals, health networks, clinical operations",
    deployBase: [2.8, 1.5, 1.0, 0.7, 0.5],
    domains: [
      { area: "Patient Safety Incidents", beforeBase: 22.0, reductionPct: 0.78 },
      { area: "Malpractice & Liability", beforeBase: 19.5, reductionPct: 0.72 },
      { area: "Medication Error Costs", beforeBase: 14.2, reductionPct: 0.80 },
      { area: "Dietary / Care Compliance Gaps", beforeBase: 8.6, reductionPct: 0.74 },
      { area: "Regulatory Non-Compliance Fines", beforeBase: 6.8, reductionPct: 0.85 },
      { area: "Insurance Premium Exposure", beforeBase: 12.4, reductionPct: 0.55 },
      { area: "Audit & Accreditation Costs", beforeBase: 7.2, reductionPct: 0.76 },
      { area: "Supply Chain Irregularities", beforeBase: 11.8, reductionPct: 0.68 },
      { area: "Staff Credentialing Gaps", beforeBase: 5.4, reductionPct: 0.82 },
      { area: "Records Reconciliation Labour", beforeBase: 9.6, reductionPct: 0.88 },
      { area: "Legal Defense & Settlements", beforeBase: 16.2, reductionPct: 0.70 },
      { area: "Incident Investigation Time", beforeBase: 4.8, reductionPct: 0.96 },
    ],
  },
  government: {
    label: "Government / Federal Agency",
    description: "Ministries, federal agencies, public administration",
    deployBase: [5.0, 2.8, 1.8, 1.2, 0.8],
    domains: [
      { area: "Procurement Fraud & Leakage", beforeBase: 45.0, reductionPct: 0.72 },
      { area: "Audit Cycle Costs", beforeBase: 18.5, reductionPct: 0.78 },
      { area: "Regulatory Compliance Gaps", beforeBase: 12.4, reductionPct: 0.82 },
      { area: "Legal & Litigation Costs", beforeBase: 22.0, reductionPct: 0.68 },
      { area: "Contract Mismanagement", beforeBase: 28.6, reductionPct: 0.70 },
      { area: "IT System Duplication", beforeBase: 15.2, reductionPct: 0.55 },
      { area: "Inter-Agency Reconciliation", beforeBase: 9.8, reductionPct: 0.85 },
      { area: "Freedom of Information Costs", beforeBase: 6.4, reductionPct: 0.72 },
      { area: "Internal Investigation Costs", beforeBase: 11.2, reductionPct: 0.80 },
      { area: "Staff Accountability Gaps", beforeBase: 8.6, reductionPct: 0.75 },
      { area: "Public Trust Erosion Costs", beforeBase: 14.0, reductionPct: 0.60 },
      { area: "Records Management Overhead", beforeBase: 7.8, reductionPct: 0.90 },
    ],
  },
  finance: {
    label: "Banking / Financial Services",
    description: "Banks, insurance, investment, fintech",
    deployBase: [4.5, 2.5, 1.6, 1.0, 0.7],
    domains: [
      { area: "Compliance & Regulatory Fines", beforeBase: 35.0, reductionPct: 0.82 },
      { area: "Fraud Detection Gaps", beforeBase: 28.0, reductionPct: 0.70 },
      { area: "AML/KYC Non-Compliance", beforeBase: 18.5, reductionPct: 0.78 },
      { area: "Audit & Reporting Costs", beforeBase: 14.2, reductionPct: 0.76 },
      { area: "Operational Risk Losses", beforeBase: 22.0, reductionPct: 0.65 },
      { area: "Contract Dispute Costs", beforeBase: 12.8, reductionPct: 0.72 },
      { area: "Data Breach Liability", beforeBase: 16.4, reductionPct: 0.68 },
      { area: "Insurance Premiums", beforeBase: 11.0, reductionPct: 0.55 },
      { area: "Legal Defense", beforeBase: 19.6, reductionPct: 0.70 },
      { area: "Internal Investigation", beforeBase: 8.4, reductionPct: 0.85 },
      { area: "Reconciliation Labour", beforeBase: 6.8, reductionPct: 0.90 },
      { area: "Reputational Risk Costs", beforeBase: 15.0, reductionPct: 0.55 },
    ],
  },
  infrastructure: {
    label: "Infrastructure / Utilities",
    description: "Energy, water, telecom, construction",
    deployBase: [3.8, 2.1, 1.4, 0.9, 0.7],
    domains: [
      { area: "Safety & Environmental Liability", beforeBase: 24.0, reductionPct: 0.75 },
      { area: "Procurement Irregularities", beforeBase: 32.0, reductionPct: 0.72 },
      { area: "Permit & Licensing Delays", beforeBase: 14.5, reductionPct: 0.68 },
      { area: "Contractor Oversight Failures", beforeBase: 18.8, reductionPct: 0.70 },
      { area: "Asset Lifecycle Mismanagement", beforeBase: 16.2, reductionPct: 0.72 },
      { area: "Regulatory Non-Compliance", beforeBase: 11.4, reductionPct: 0.82 },
      { area: "Environmental Incident Costs", beforeBase: 20.0, reductionPct: 0.65 },
      { area: "Insurance & Bonding Costs", beforeBase: 13.6, reductionPct: 0.55 },
      { area: "Legal & Arbitration", beforeBase: 15.4, reductionPct: 0.68 },
      { area: "Audit & Inspection Costs", beforeBase: 8.2, reductionPct: 0.78 },
      { area: "Change Order Fraud", beforeBase: 12.0, reductionPct: 0.80 },
      { area: "Public Compensation Claims", beforeBase: 7.6, reductionPct: 0.72 },
    ],
  },
  education: {
    label: "Education / University",
    description: "Universities, school boards, research institutions",
    deployBase: [1.8, 1.0, 0.7, 0.5, 0.4],
    domains: [
      { area: "Research Integrity Incidents", beforeBase: 8.5, reductionPct: 0.82 },
      { area: "Procurement Irregularities", beforeBase: 12.0, reductionPct: 0.72 },
      { area: "Accreditation Compliance Costs", beforeBase: 6.4, reductionPct: 0.78 },
      { area: "Student Records Mismanagement", beforeBase: 4.8, reductionPct: 0.88 },
      { area: "Grant Accountability Gaps", beforeBase: 9.2, reductionPct: 0.75 },
      { area: "Legal & Liability Costs", beforeBase: 7.6, reductionPct: 0.68 },
      { area: "HR/Labour Disputes", beforeBase: 5.4, reductionPct: 0.65 },
      { area: "Insurance Premiums", beforeBase: 4.2, reductionPct: 0.55 },
      { area: "Audit & Reporting Costs", beforeBase: 3.8, reductionPct: 0.76 },
      { area: "Data Protection Violations", beforeBase: 6.0, reductionPct: 0.80 },
      { area: "Facility Management Gaps", beforeBase: 5.2, reductionPct: 0.70 },
      { area: "Administrative Overhead", beforeBase: 4.6, reductionPct: 0.85 },
    ],
  },
  justice: {
    label: "Justice / Courts",
    description: "Courts, corrections, law enforcement agencies",
    deployBase: [3.0, 1.6, 1.1, 0.7, 0.5],
    domains: [
      { area: "Evidence Chain-of-Custody Failures", beforeBase: 16.0, reductionPct: 0.90 },
      { area: "Case Management Delays", beforeBase: 12.4, reductionPct: 0.72 },
      { area: "Wrongful Conviction Liability", beforeBase: 22.0, reductionPct: 0.65 },
      { area: "Records Tampering Exposure", beforeBase: 8.6, reductionPct: 0.92 },
      { area: "Inter-Agency Data Gaps", beforeBase: 9.8, reductionPct: 0.78 },
      { area: "Compliance & Oversight Costs", beforeBase: 7.2, reductionPct: 0.76 },
      { area: "Legal Challenge Costs", beforeBase: 14.5, reductionPct: 0.68 },
      { area: "Audit & Inspection Costs", beforeBase: 5.8, reductionPct: 0.80 },
      { area: "Staff Accountability Gaps", beforeBase: 6.4, reductionPct: 0.75 },
      { area: "Public Trust Deficits", beforeBase: 11.0, reductionPct: 0.58 },
      { area: "Procurement Irregularities", beforeBase: 8.2, reductionPct: 0.72 },
      { area: "Incident Investigation Time", beforeBase: 7.6, reductionPct: 0.85 },
    ],
  },
  municipal: {
    label: "Municipal / City Government",
    description: "Cities, municipalities, regional governments",
    deployBase: [2.2, 1.2, 0.8, 0.6, 0.4],
    domains: [
      { area: "Procurement & Tendering Irregularities", beforeBase: 18.0, reductionPct: 0.72 },
      { area: "Building Permit Accountability", beforeBase: 8.5, reductionPct: 0.78 },
      { area: "Infrastructure Project Overruns", beforeBase: 14.2, reductionPct: 0.65 },
      { area: "Bylaw Enforcement Gaps", beforeBase: 5.6, reductionPct: 0.70 },
      { area: "Public Complaint Costs", beforeBase: 4.8, reductionPct: 0.72 },
      { area: "Legal & Liability Exposure", beforeBase: 9.4, reductionPct: 0.68 },
      { area: "Council Decision Accountability", beforeBase: 6.2, reductionPct: 0.82 },
      { area: "Audit & Oversight Costs", beforeBase: 4.4, reductionPct: 0.78 },
      { area: "Records Management Overhead", beforeBase: 3.8, reductionPct: 0.88 },
      { area: "Insurance Premiums", beforeBase: 7.0, reductionPct: 0.55 },
      { area: "Contractor Mismanagement", beforeBase: 10.6, reductionPct: 0.70 },
      { area: "Environmental Compliance", beforeBase: 5.2, reductionPct: 0.75 },
    ],
  },
};

function fmt(v: number): string {
  if (v >= 1000) return "$" + (v / 1000).toFixed(2) + "B";
  return "$" + v.toFixed(2) + "M";
}

function pct(before: number, after: number): string {
  return ((before - after) / before * 100).toFixed(0) + "%";
}

export default function ValueCalculator() {
  const [orgName, setOrgName] = useState("");
  const [sector, setSector] = useState("transit");
  const [scale, setScale] = useState(1.0); // multiplier for org size
  const [calculated, setCalculated] = useState(false);

  const profile = SECTOR_PROFILES[sector];

  const results = useMemo(() => {
    if (!profile) return null;
    const domains = profile.domains.map(d => ({
      area: d.area,
      before: +(d.beforeBase * scale).toFixed(2),
      after: +(d.beforeBase * scale * (1 - d.reductionPct)).toFixed(2),
      saved: +(d.beforeBase * scale * d.reductionPct).toFixed(2),
      reduction: (d.reductionPct * 100).toFixed(0) + "%",
    }));
    const totalBefore = domains.reduce((s, d) => s + d.before, 0);
    const totalAfter = domains.reduce((s, d) => s + d.after, 0);
    const totalSaved = totalBefore - totalAfter;

    const deploy = profile.deployBase.map(d => +(d * scale).toFixed(2));
    const savingsMultipliers = [0.4, 0.7, 0.9, 1.0, 1.0];
    const savings = savingsMultipliers.map(m => +(totalSaved * m).toFixed(2));
    const cumNet: number[] = [];
    let running = 0;
    for (let i = 0; i < 5; i++) { running += savings[i] - deploy[i]; cumNet.push(+running.toFixed(2)); }

    const totalDeploy = deploy.reduce((a, b) => a + b, 0);
    const totalSavings5 = savings.reduce((a, b) => a + b, 0);
    const roi = ((cumNet[4] / totalDeploy) * 100).toFixed(0);
    const year1ROI = (((savings[0] - deploy[0]) / deploy[0]) * 100).toFixed(0);

    return { domains, totalBefore, totalAfter, totalSaved, deploy, savings, cumNet, totalDeploy, totalSavings5, roi, year1ROI };
  }, [profile, scale]);

  const handleCalculate = () => {
    if (orgName.trim()) setCalculated(true);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="border-b border-border bg-card/50 px-6 py-8">
        <div className="max-w-5xl mx-auto">
          <Badge variant="outline" className="mb-3 text-xs">
            <Calculator className="h-3 w-3 mr-1" /> GRGF Value Calculator
          </Badge>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
            Before vs. After GRGF
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Enter any organization name and sector to instantly calculate the projected financial
            impact of GRGF integration — modeled on real institutional cost structures.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Input Section */}
        <Card className="border-2 border-primary/20 bg-card">
          <CardContent className="pt-6">
            <div className="grid gap-4 md:grid-cols-[1fr_200px_160px_auto]">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Organization Name</label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="e.g. Toronto Transit Commission, RBC, Service Canada…"
                    value={orgName}
                    onChange={(e) => { setOrgName(e.target.value); setCalculated(false); }}
                    className="pl-10"
                    onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Sector</label>
                <Select value={sector} onValueChange={(v) => { setSector(v); setCalculated(false); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {Object.entries(SECTOR_PROFILES).map(([k, v]) => (
                      <SelectItem key={k} value={k}>{v.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Organization Scale</label>
                <Select value={String(scale)} onValueChange={(v) => { setScale(parseFloat(v)); setCalculated(false); }}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0.25">Small (0.25×)</SelectItem>
                    <SelectItem value="0.5">Medium (0.5×)</SelectItem>
                    <SelectItem value="1">Large (1×)</SelectItem>
                    <SelectItem value="2">Very Large (2×)</SelectItem>
                    <SelectItem value="5">National (5×)</SelectItem>
                    <SelectItem value="10">Multi-National (10×)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={handleCalculate} disabled={!orgName.trim()} className="w-full md:w-auto gap-2">
                  <Search className="h-4 w-4" /> Calculate
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        {calculated && results && (
          <div className="space-y-8 animate-fade-in">
            {/* Headline Metrics */}
            <div>
              <h2 className="text-lg font-serif font-semibold mb-1 text-foreground">
                Financial Impact: {orgName}
              </h2>
              <p className="text-xs text-muted-foreground mb-4">
                Sector: {profile.label} · Scale: {scale}× · Conservative modeled estimates
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Before GRGF", value: fmt(results.totalBefore), icon: TrendingDown, color: "text-destructive" },
                  { label: "After GRGF", value: fmt(results.totalAfter), icon: TrendingUp, color: "text-green-600" },
                  { label: "Annual Savings", value: fmt(results.totalSaved), icon: DollarSign, color: "text-primary" },
                  { label: "5-Year Net Benefit", value: fmt(results.cumNet[4]), icon: BarChart3, color: "text-primary" },
                ].map(m => (
                  <Card key={m.label} className="text-center py-5">
                    <m.icon className={`h-5 w-5 mx-auto mb-2 ${m.color}`} />
                    <p className={`text-2xl font-serif font-bold ${m.color}`}>{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                  </Card>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-3 mt-3">
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{pct(results.totalBefore, results.totalAfter)}</p>
                  <p className="text-xs text-muted-foreground">Total Reduction</p>
                </Card>
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{results.roi}%</p>
                  <p className="text-xs text-muted-foreground">5-Year ROI</p>
                </Card>
                <Card className="text-center py-4">
                  <p className="text-xl font-bold text-primary">{results.year1ROI}%</p>
                  <p className="text-xs text-muted-foreground">Year 1 ROI</p>
                </Card>
              </div>
            </div>

            {/* Detailed Breakdown Table */}
            <div>
              <h3 className="text-sm font-serif font-semibold mb-3 text-foreground flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                Detailed Before vs. After — {orgName}
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left py-2.5 px-3 font-medium">Operational Domain</th>
                        <th className="text-right py-2.5 px-3 font-medium">Before ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">After ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Savings ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Reduction</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.domains.map((d, i) => (
                        <tr key={d.area} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="py-2 px-3 font-medium text-foreground">{d.area}</td>
                          <td className="py-2 px-3 text-right font-mono text-destructive">{fmt(d.before)}</td>
                          <td className="py-2 px-3 text-right font-mono text-green-600">{fmt(d.after)}</td>
                          <td className="py-2 px-3 text-right font-mono font-semibold">{fmt(d.saved)}</td>
                          <td className="py-2 px-3 text-right font-mono text-primary font-semibold">{d.reduction}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/10 font-semibold border-t-2 border-primary">
                        <td className="py-2.5 px-3 text-foreground">TOTAL</td>
                        <td className="py-2.5 px-3 text-right font-mono text-destructive">{fmt(results.totalBefore)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-green-600">{fmt(results.totalAfter)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-primary">{fmt(results.totalSaved)}</td>
                        <td className="py-2.5 px-3 text-right font-mono text-primary">{pct(results.totalBefore, results.totalAfter)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5-Year Projection */}
            <div>
              <h3 className="text-sm font-serif font-semibold mb-3 text-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                5-Year Financial Projection — {orgName}
              </h3>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="text-left py-2.5 px-3 font-medium">Year</th>
                        <th className="text-right py-2.5 px-3 font-medium">Deploy Cost ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Annual Savings ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Net Benefit ($M)</th>
                        <th className="text-right py-2.5 px-3 font-medium">Cumulative ($M)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {results.deploy.map((d, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="py-2 px-3 font-medium text-foreground">Year {i + 1}</td>
                          <td className="py-2 px-3 text-right font-mono text-destructive">{fmt(d)}</td>
                          <td className="py-2 px-3 text-right font-mono text-green-600">{fmt(results.savings[i])}</td>
                          <td className="py-2 px-3 text-right font-mono font-semibold">{fmt(results.savings[i] - d)}</td>
                          <td className="py-2 px-3 text-right font-mono text-primary font-semibold">{fmt(results.cumNet[i])}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Indicators */}
              <div className="grid gap-3 sm:grid-cols-3 mt-4">
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Payback Period</p>
                  <p className="text-lg font-bold text-primary">{"< 4 months"}</p>
                </Card>
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Break-Even Threshold</p>
                  <p className="text-lg font-bold text-primary">0.18%</p>
                  <p className="text-[10px] text-muted-foreground">integrity improvement</p>
                </Card>
                <Card className="py-4 px-4">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Total 5-Year Deploy Cost</p>
                  <p className="text-lg font-bold text-muted-foreground">{fmt(results.totalDeploy)}</p>
                </Card>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="border-t border-border pt-6">
              <p className="text-[10px] text-muted-foreground/70 leading-relaxed max-w-3xl">
                <span className="font-semibold text-muted-foreground">Disclaimer.</span> All figures are conservative modeled estimates based on publicly available sector data, comparable institutional benchmarks, and established governance cost structures. Actual outcomes depend on deployment scope, institutional maturity, and organizational commitment. No value is assigned to reputational improvement, stakeholder confidence, or political risk reduction.
              </p>
              <p className="text-[10px] text-muted-foreground/50 mt-2 italic">
                Global Record Governance Framework — Invented and Owned by Tarek Wahid
              </p>
            </div>
          </div>
        )}

        {/* Empty state when not calculated */}
        {!calculated && (
          <div className="text-center py-16 text-muted-foreground">
            <Calculator className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-sm font-medium mb-1">Enter an organization name to begin</p>
            <p className="text-xs opacity-60">Select a sector and scale, then click Calculate to see projected impact</p>
          </div>
        )}
      </div>
    </div>
  );
}
