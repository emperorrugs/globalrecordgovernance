import { useState, useMemo } from "react";
import { PageHeader, Section } from "@/components/PageComponents";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { AlertTriangle, Shield, Activity, CheckCircle } from "lucide-react";

const SCENARIOS = [
  { value: "emergency", label: "Emergency Benefit Distribution", desc: "Rapid-scale social benefit disbursement under crisis conditions (pandemic, disaster)." },
  { value: "fraud", label: "High Fraud Environment", desc: "Governance system under sustained fraud pressure with coordinated manipulation attempts." },
  { value: "surge", label: "Cross-Border Verification Surge", desc: "Sudden spike in federation verification requests across multiple sovereign nodes." },
] as const;

type ScenarioKey = typeof SCENARIOS[number]["value"];

const scenarioResults: Record<ScenarioKey, {
  loadResilience: string; auditReliability: string; bottlenecks: string[]; continuity: string; mitigations: string[];
}> = {
  emergency: {
    loadResilience: "92% — Event stream architecture handles 10× normal throughput with graceful degradation.",
    auditReliability: "99.7% — Append-only backbone maintains integrity under surge conditions. No write conflicts.",
    bottlenecks: [
      "Policy evaluation engine throughput at 15× normal load",
      "Notification delivery latency during peak disbursement",
      "Human approval queue saturation for high-value exceptions",
    ],
    continuity: "Strong — Offline fallback governance protocol maintains decision recording even during connectivity loss.",
    mitigations: [
      "Pre-authorize common benefit patterns to reduce human approval queue",
      "Deploy additional verification nodes in affected regions",
      "Activate emergency governance continuity protocol (documented in DR plan)",
      "Enable batch processing mode for high-volume, low-risk disbursements",
    ],
  },
  fraud: {
    loadResilience: "95% — Deterministic denial logic prevents rule bypass regardless of attack sophistication.",
    auditReliability: "99.9% — Cryptographic sealing detects tampering within one verification cycle.",
    bottlenecks: [
      "Anomaly detection response time for novel attack patterns",
      "Cross-reference validation under high-volume fraudulent submissions",
      "Audit reconstruction backlog during concurrent fraud investigations",
    ],
    continuity: "Very Strong — Anti-capture clauses and no-override principle maintain system integrity under sustained pressure.",
    mitigations: [
      "Activate enhanced verification mode (dual-authority for all transactions)",
      "Deploy real-time hash integrity monitoring across all active nodes",
      "Engage independent audit team for concurrent investigation support",
      "Implement rate limiting on submission endpoints during active attack",
    ],
  },
  surge: {
    loadResilience: "88% — Federation protocol handles 5× normal cross-border requests with queuing.",
    auditReliability: "99.5% — CICE attestation certificates maintain verifiability across jurisdictions.",
    bottlenecks: [
      "Inter-node latency during multi-region verification cascades",
      "Certificate issuance throughput at 8× normal federation volume",
      "Bandwidth constraints on nodes with limited international connectivity",
    ],
    continuity: "Strong — Sovereign node independence ensures local operations continue regardless of federation load.",
    mitigations: [
      "Activate federation request prioritization by criticality level",
      "Deploy caching layer for recently verified attestation certificates",
      "Enable asynchronous verification mode for non-urgent cross-border requests",
      "Coordinate with affected nodes to temporarily increase capacity allocation",
    ],
  },
};

const StressTest = () => {
  const [scenario, setScenario] = useState<ScenarioKey>("emergency");
  const results = useMemo(() => scenarioResults[scenario], [scenario]);

  return (
    <div className="animate-fade-in">
      <SEOHead
        title="Governance Stress-Test Simulator — GRGF"
        description="Model governance system resilience under crisis scenarios. Evaluate load handling, audit reliability, and institutional continuity."
      />
      <PageHeader
        title="Governance Stress-Test Simulator"
        subtitle="Evaluate system resilience under crisis scenarios. Model load capacity, audit reliability, bottleneck identification, and governance continuity."
      />

      <Section title="Select Crisis Scenario" className="border-t border-border">
        <FadeIn>
          <div className="grid gap-4 sm:grid-cols-3 max-w-4xl">
            {SCENARIOS.map((s) => (
              <button key={s.value} onClick={() => setScenario(s.value)}
                className={`governance-card-elevated text-left transition-all ${scenario === s.value ? "border-accent shadow-md" : "opacity-70 hover:opacity-100"}`}>
                <Activity className={`h-5 w-5 mb-2 ${scenario === s.value ? "text-accent" : "text-muted-foreground"}`} />
                <h4 className="font-serif text-base font-semibold mb-1">{s.label}</h4>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
              </button>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Resilience Analysis" className="border-t border-border">
        <FadeIn>
          <div className="max-w-3xl space-y-4">
            {[
              { label: "System Load Resilience", value: results.loadResilience, icon: Shield },
              { label: "Audit Trace Reliability", value: results.auditReliability, icon: CheckCircle },
              { label: "Governance Continuity", value: results.continuity, icon: Activity },
            ].map(({ label, value, icon: Icon }) => (
              <div key={label} className="governance-card-elevated flex items-start gap-4">
                <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{label}</p>
                  <p className="text-sm font-medium mt-1">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section title="Risk Bottleneck Areas" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-3xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Identified Bottlenecks</h4>
            <ul className="space-y-2">
              {results.bottlenecks.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-3.5 w-3.5 text-warning shrink-0 mt-0.5" /> {b}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section title="Mitigation Recommendations" className="border-t border-border">
        <FadeIn>
          <div className="governance-card-elevated max-w-3xl">
            <h4 className="font-serif text-lg font-semibold mb-3">Recommended Response Actions</h4>
            <ul className="space-y-2">
              {results.mitigations.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" /> {m}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Section>

      <Section className="border-t border-border bg-muted/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Simulation Disclaimer.</span>{" "}
            Stress-test results are modeled projections based on architectural design analysis. Actual system behavior under crisis conditions requires validated operational testing.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default StressTest;
