import { useState } from "react";
import { ArrowDown, Lock, Scale, Globe, Database, Cpu, Shield, FileCheck, Wifi, ChevronRight, Layers, Server, HardDrive } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const layers = [
  {
    id: "capture",
    layer: 1,
    name: "Event Capture & Normalization",
    icon: Database,
    color: "bg-blue-500",
    description: "Schema-based ingestion of institutional events: actions, decisions, transactions, and obligation deadline expiry detection.",
    tech: "Events are normalized against a governance taxonomy, validated for authority scope, and classified before entering the evidence pipeline.",
    components: ["Event Normalizer", "Classification Engine", "Obligation Monitor", "Schema Validator"],
  },
  {
    id: "policy",
    layer: 2,
    name: "Policy Decision Engine",
    icon: Scale,
    color: "bg-violet-500",
    description: "Deterministic rule evaluation against governance protocols. Every event is assessed for compliance, authorization, and omission detection.",
    tech: "OPA (Open Policy Agent) evaluates events against codified governance rules. Non-compliance is documented. Omissions are auto-generated for unmet obligations.",
    components: ["OPA Rule Engine", "Compliance Evaluator", "Omission Detector", "Authorization Gate"],
  },
  {
    id: "evidence",
    layer: 3,
    name: "Evidence Backbone",
    icon: HardDrive,
    color: "bg-emerald-500",
    description: "Append-only record store establishing integrity, provenance, and temporal immutability for all governance events.",
    tech: "Write-Once Read-Many (WORM) storage in Canada-only sovereign regions. Records are append-only — no modification, deletion, or overwrite is physically possible.",
    components: ["WORM Storage", "Record Sequencer", "Provenance Tracker", "Temporal Index"],
  },
  {
    id: "crypto",
    layer: 4,
    name: "Cryptographic Anchoring",
    icon: Shield,
    color: "bg-amber-500",
    description: "SHA-256/512 hash sealing at point of record finalization. Each sealed record produces an independently verifiable integrity proof.",
    tech: "Hash chains establish tamper-evidence. CICE attestations (Cryptographic Integrity Certificates of Evidence) provide court-grade provenance.",
    components: ["SHA-256 Hasher", "Merkle Chain Builder", "CICE Generator", "Manifest Publisher"],
  },
  {
    id: "verification",
    layer: 5,
    name: "Verification API",
    icon: FileCheck,
    color: "bg-cyan-500",
    description: "Public endpoints enabling any party to independently verify record existence and integrity without content access.",
    tech: "RESTful API exposing hash verification, record existence checks, and integrity audit reconstruction endpoints. No authentication required for verification.",
    components: ["Hash Verifier API", "Existence Prover", "Audit Reconstructor", "Status Endpoint"],
  },
  {
    id: "federation",
    layer: 6,
    name: "Federation & Interoperability",
    icon: Globe,
    color: "bg-rose-500",
    description: "Cross-border node synchronization with canonical schema versioning. Multi-node federation enabling international governance verification.",
    tech: "Tier 1/2/3 federation nodes with canonical schemas, versioned APIs, and conformance testing. Each node is independently survivable.",
    components: ["Node Sync Protocol", "Schema Registry", "Conformance Tester", "Federation Gateway"],
  },
];

const systemComparison = {
  A: {
    name: "System A — Evidence Backbone",
    subtitle: "Integrity, policy evaluation, and public proofs",
    color: "border-emerald-500",
    accent: "text-emerald-600 dark:text-emerald-400",
    features: [
      "Append-only event store",
      "OPA policy engine integration",
      "CICE attestation generation",
      "Public hash manifest",
      "Canada-only sovereign regions",
      "WORM storage enforcement",
    ],
  },
  B: {
    name: "System B — Document Pipeline",
    subtitle: "Air-gapped ingestion, classification, and omission detection",
    color: "border-violet-500",
    accent: "text-violet-600 dark:text-violet-400",
    features: [
      "Air-gapped from System A",
      "Document ingestion & OCR",
      "Classification taxonomy",
      "Omission detection engine",
      "Hashed metadata output only",
      "Original document custody",
    ],
  },
};

const flowSteps = [
  { step: 1, title: "Event Occurs", icon: "🔵", desc: "Institutional event trigger: action, decision, transaction, or obligation deadline expiry detected." },
  { step: 2, title: "Policy Check", icon: "🔍", desc: "GOS rule engine evaluates event against classification taxonomy, authority scope, and governance protocols." },
  { step: 3, title: "Record Sealed or Denied", icon: "📋", desc: "Record creation authorised or denied. Non-compliance documented. Omissions auto-generated for unmet obligations." },
  { step: 4, title: "Integrity Proof Generated", icon: "✅", desc: "SHA-256 integrity proof generated. Status: SEALED / DENIED / OMISSION. Hash published to manifest." },
  { step: 5, title: "Independent Verification", icon: "🔒", desc: "Public hash manifest enables any party to recompute and compare SHA-256 hash independently." },
];

export default function Architecture() {
  const { isPlain } = useViewMode();
  const [activeLayer, setActiveLayer] = useState<string>("capture");
  const [activeSystem, setActiveSystem] = useState<"A" | "B">("A");

  const selected = layers.find((l) => l.id === activeLayer)!;

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="relative border-b border-border bg-gradient-to-br from-background via-background to-primary/5 px-8 py-14 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        <div className="relative max-w-5xl">
          <p className="text-overline font-mono text-accent tracking-[0.25em] mb-3">TECHNICAL ARCHITECTURE</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
            {isPlain ? "How It Works" : "System Architecture"}
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            {isPlain
              ? "A visual guide to how GRGF processes governance events — from capture through sealing to independent verification."
              : "Six interdependent layers forming a sovereign-grade evidence backbone. Two physically separated systems ensuring integrity through architectural isolation."}
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">6 Layers</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Server className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">2 Isolated Systems</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">SHA-256 Integrity</span>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive 6-Layer Diagram */}
      <FadeIn>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold mb-8">SIX-LAYER ARCHITECTURE</h2>
            <div className="grid md:grid-cols-[280px_1fr] gap-6">
              {/* Layer selector */}
              <div className="space-y-1">
                {layers.map((layer) => {
                  const Icon = layer.icon;
                  const isActive = activeLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      onClick={() => setActiveLayer(layer.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 text-left transition-all border",
                        isActive
                          ? "bg-accent/5 border-accent/30 text-foreground"
                          : "bg-card border-border hover:border-accent/20 text-muted-foreground"
                      )}
                    >
                      <div className={cn("w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono font-bold text-white", layer.color)}>
                        {layer.layer}
                      </div>
                      <span className="text-xs font-semibold truncate">{layer.name}</span>
                      {isActive && <ChevronRight className="h-3 w-3 text-accent ml-auto shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Layer detail panel */}
              <div className="border border-border bg-card p-6 min-h-[280px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("w-8 h-8 rounded flex items-center justify-center text-sm font-mono font-bold text-white", selected.color)}>
                    {selected.layer}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground">{selected.name}</h3>
                    <p className="text-[10px] font-mono text-muted-foreground">LAYER {selected.layer} OF 6</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{selected.description}</p>
                <div className="bg-muted/30 border border-border p-4 mb-4">
                  <p className="text-[10px] font-mono text-accent mb-2">TECHNICAL DETAIL</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{selected.tech}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground mb-2">KEY COMPONENTS</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.components.map((c) => (
                      <span key={c} className="text-[10px] font-mono px-2 py-1 bg-accent/5 border border-accent/10 text-accent">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* System A/B Split View */}
      <FadeIn delay={100}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold mb-2">SYSTEM SEPARATION</h2>
            <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
              Two physically isolated systems ensure integrity through architectural separation. System B emits only hashed metadata to System A — never original content.
            </p>

            {/* Toggle */}
            <div className="flex gap-2 mb-6">
              {(["A", "B"] as const).map((sys) => (
                <button
                  key={sys}
                  onClick={() => setActiveSystem(sys)}
                  className={cn(
                    "px-4 py-2 text-xs font-mono font-semibold border transition-all",
                    activeSystem === sys
                      ? `bg-accent/10 ${systemComparison[sys].accent} ${systemComparison[sys].color} border-current`
                      : "bg-card border-border text-muted-foreground hover:border-accent/20"
                  )}
                >
                  System {sys}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {(["A", "B"] as const).map((sys) => {
                const data = systemComparison[sys];
                const isActive = activeSystem === sys;
                return (
                  <div
                    key={sys}
                    className={cn(
                      "border-2 p-5 transition-all duration-300",
                      isActive ? `${data.color} bg-card` : "border-border bg-card/50 opacity-60"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Server className={cn("h-4 w-4", data.accent)} />
                      <h3 className="font-serif text-sm font-semibold text-foreground">{data.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">{data.subtitle}</p>
                    <ul className="space-y-2">
                      {data.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className={cn("w-1 h-1 rounded-full shrink-0", data.color.replace("border-", "bg-"))} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* Connection indicator */}
            <div className="flex items-center justify-center gap-3 mt-4 py-3 border border-dashed border-border bg-muted/20">
              <span className="text-[10px] font-mono text-muted-foreground">SYSTEM B</span>
              <div className="flex items-center gap-1">
                <div className="w-8 h-px bg-violet-500" />
                <Wifi className="h-3 w-3 text-muted-foreground" />
                <div className="w-8 h-px bg-emerald-500" />
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">SYSTEM A</span>
              <span className="text-[9px] font-mono text-amber-600 dark:text-amber-400 ml-2">HASHED METADATA ONLY</span>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Event Flow - vertical pipeline */}
      <FadeIn delay={150}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold mb-8">GOVERNANCE EVENT FLOW</h2>
            <div className="max-w-lg mx-auto space-y-1">
              {flowSteps.map((s, i) => (
                <div key={s.step}>
                  <div className="flex items-start gap-4 p-4 border border-border bg-card hover:border-accent/30 transition-colors">
                    <div className="w-8 h-8 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                      <span className="text-xs font-mono font-bold text-accent">{s.step}</span>
                    </div>
                    <div>
                      <h3 className="font-serif text-sm font-semibold text-foreground mb-1">{s.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                  {i < flowSteps.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="h-4 w-4 text-accent/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Three System Layers summary */}
      <FadeIn delay={200}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold mb-8">AUTHORITY CLASSIFICATION</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Lock, title: "Immutable Archive", desc: "Hash-sealed, write-once records with cryptographic integrity proofs. Authoritative source of truth.", status: "AUTHORITATIVE", color: "border-t-emerald-500" },
                { icon: Scale, title: "Governance OS", desc: "Document-based rules, charters, processes, and stewardship protocols. Not software — governance logic.", status: "AUTHORITATIVE", color: "border-t-blue-500" },
                { icon: Globe, title: "Digital Platform", desc: "Read-only public interface. References authority — never replaces it. Non-authoritative.", status: "REFERENCE", color: "border-t-muted-foreground/30" },
              ].map((item) => (
                <div key={item.title} className={cn("border border-border border-t-2 bg-card p-5", item.color)}>
                  <item.icon className="h-5 w-5 text-accent mb-3" />
                  <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                  <p className="text-[9px] font-mono text-accent">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Footer */}
      <section className="px-8 py-8 md:px-12 lg:px-16 bg-card/30">
        <p className="text-xs text-muted-foreground max-w-3xl">
          <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
        </p>
      </section>
    </div>
  );
}
