import { PageHeader, Section } from "@/components/PageComponents";
import { FadeIn } from "@/components/FadeIn";
import { SEOHead } from "@/components/SEOHead";
import { Server, Zap, DollarSign, Clock, TrendingUp, Layers } from "lucide-react";

const SCALING_TIERS = [
  {
    users: "1M",
    throughput: "500 TPS",
    latency: "< 200ms",
    infra: "$80K–$150K/yr",
    nodes: "1 sovereign node",
    storage: "~2 TB/yr",
  },
  {
    users: "100M",
    throughput: "15,000 TPS",
    latency: "< 350ms",
    infra: "$1.2M–$3.5M/yr",
    nodes: "3–5 regional nodes",
    storage: "~120 TB/yr",
  },
  {
    users: "1B",
    throughput: "80,000 TPS",
    latency: "< 500ms",
    infra: "$8M–$18M/yr",
    nodes: "12–20 federated nodes",
    storage: "~1.2 PB/yr",
  },
];

const COST_PER_TX = [
  { tier: "National Pilot (< 10M users)", range: "$0.003–$0.008" },
  { tier: "National Scale (10M–100M)", range: "$0.001–$0.004" },
  { tier: "Federation Scale (100M–1B)", range: "$0.0005–$0.002" },
];

const ARCH_LAYERS = [
  { icon: Layers, title: "Horizontal Scaling", desc: "Stateless verification nodes scale independently. Each governance event is processed by the nearest sovereign node with automatic load distribution." },
  { icon: Server, title: "Distributed Validation", desc: "Cryptographic validation is parallelized across node clusters. Hash verification operates independently of record storage, enabling linear throughput scaling." },
  { icon: Zap, title: "Event Stream Architecture", desc: "Append-only event streams enable asynchronous processing. Policy evaluation, cryptographic anchoring, and audit indexing operate as independent pipelines." },
  { icon: Clock, title: "Latency Optimization", desc: "Regional node deployment ensures sub-500ms response times globally. Federation consensus uses eventual consistency with cryptographic proof of ordering." },
  { icon: DollarSign, title: "Cost Efficiency Model", desc: "Infrastructure costs scale sub-linearly due to shared cryptographic anchoring and compressed audit indices. Per-transaction costs decrease with volume." },
  { icon: TrendingUp, title: "Capacity Planning", desc: "Throughput projections are based on conservative benchmarks using commodity cloud infrastructure. Actual performance may vary based on deployment topology." },
];

const Scalability = () => (
  <div className="animate-fade-in">
    <SEOHead
      title="Scalability & Performance Model — GRGF"
      description="Engineering scalability framework for federated governance infrastructure. User scaling models, throughput projections, and cost-per-transaction estimates."
    />
    <PageHeader
      title="Scalability & Performance Model"
      subtitle="Engineering assumptions for sovereign-grade governance infrastructure scaling. All projections are range-based estimates, not guarantees."
    />

    <Section title="User Scaling Model" className="border-t border-border">
      <FadeIn>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse governance-card-elevated">
            <thead>
              <tr className="border-b-2 border-accent/30">
                <th className="text-left py-4 px-4 font-serif font-semibold">Active Users</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">Throughput</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">P95 Latency</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">Infrastructure</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">Nodes</th>
                <th className="text-left py-4 px-4 font-serif font-semibold">Storage</th>
              </tr>
            </thead>
            <tbody>
              {SCALING_TIERS.map((t) => (
                <tr key={t.users} className="border-b border-border/60 hover:bg-muted/50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-semibold text-accent">{t.users}</td>
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">{t.throughput}</td>
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">{t.latency}</td>
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">{t.infra}</td>
                  <td className="py-3.5 px-4 text-muted-foreground">{t.nodes}</td>
                  <td className="py-3.5 px-4 font-mono text-muted-foreground">{t.storage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-mono">
          * Projections based on conservative benchmarks using commodity sovereign cloud infrastructure. Actual results depend on deployment topology, network conditions, and workload characteristics.
        </p>
      </FadeIn>
    </Section>

    <Section title="Cost per Transaction" className="border-t border-border">
      <FadeIn>
        <div className="max-w-xl space-y-3">
          {COST_PER_TX.map((c) => (
            <div key={c.tier} className="governance-card flex items-center justify-between">
              <span className="text-sm">{c.tier}</span>
              <span className="font-mono text-accent font-semibold">{c.range}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Cost ranges include compute, storage, cryptographic anchoring, and network transfer. Excludes initial deployment and integration costs.
        </p>
      </FadeIn>
    </Section>

    <Section title="Architecture for Scale" className="border-t border-border">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ARCH_LAYERS.map(({ icon: Icon, title, desc }, i) => (
          <FadeIn key={title} delay={i * 80}>
            <div className="governance-card-elevated group hover:border-accent/30 transition-all duration-300">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-lg font-semibold mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>

    <Section title="Distributed Validation Logic" className="border-t border-border">
      <FadeIn>
        <div className="governance-card-elevated max-w-3xl">
          <h4 className="font-serif text-lg font-semibold mb-4">Consensus & Verification Model</h4>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              GRGF uses a <strong className="text-foreground">deterministic verification model</strong> rather than probabilistic consensus.
              Each governance event is anchored with a SHA-256 hash and timestamped independently. Verification is a mathematical proof, not a vote.
            </p>
            <p>
              In federated deployments, sovereign nodes maintain complete local authority. Cross-border verification uses
              <strong className="text-foreground"> cryptographic attestation certificates (CICE)</strong> that prove record integrity without exposing content.
            </p>
            <p>
              This architecture eliminates the throughput limitations of traditional blockchain consensus while preserving
              tamper-evidence and independent auditability.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>

    <Section className="border-t border-border bg-muted/30">
      <div className="flex items-start gap-3">
        <span className="text-accent font-mono text-sm font-bold mt-0.5">⚠</span>
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">Engineering Disclaimer.</span>{" "}
          All scalability projections are based on engineering assumptions and modeled estimates.
          They are presented as range-based approximations for planning purposes and do not constitute performance guarantees.
          Actual performance depends on deployment configuration, infrastructure provider, and operational workload.
        </p>
      </div>
    </Section>
  </div>
);

export default Scalability;
