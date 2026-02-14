import { useState } from "react";
import { Target, Compass, BookOpen, Scale, AlertTriangle, Clock, ShieldAlert, Eye, ChevronDown, Layers, Database, Shield, Globe, Cpu, Users } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const pillars = [
  {
    id: "infrastructure",
    icon: Database,
    label: "Infrastructure",
    title: "DPI Registry Layer",
    color: "border-l-emerald-600 dark:border-l-emerald-400",
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/5",
    description: "Sovereign-grade Digital Public Infrastructure positioned as Layer 3 within the national DPI stack — above base registries and core DPI, below services and applications.",
    details: [
      "Sits above Layer 1 (Base Registries) and Layer 2 (Identity, Payments, Data Exchange)",
      "Integrates with national DPI initiatives without replacing existing systems",
      "Operates as neutral governance infrastructure deployable across jurisdictions",
      "Aligned with OECD Policy Paper No. 68 (2024) for institutional DPI",
    ],
  },
  {
    id: "evidence",
    icon: BookOpen,
    label: "Evidence",
    title: "Append-Only Backbone",
    color: "border-l-blue-600 dark:border-l-blue-400",
    accent: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-500/5",
    description: "Write-once, immutable record architecture ensuring that governance facts — including omissions — are preserved with full temporal integrity across political and generational transitions.",
    details: [
      "Records are write-once: no modification after sealing by any party, including the origin authority",
      "Omissions are first-class governance events with identical integrity guarantees",
      "Air-gapped document processing pipeline (System B) emits only hashed metadata to System A",
      "WORM (Write Once Read Many) storage in Canada-only sovereign regions",
    ],
  },
  {
    id: "verification",
    icon: Eye,
    label: "Verification",
    title: "Audit Reconstruction",
    color: "border-l-violet-600 dark:border-l-violet-400",
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/5",
    description: "Any party can independently verify record integrity without requiring trust in GRGF systems. Public hash manifests enable cryptographic proof of non-tampering.",
    details: [
      "SHA-256 cryptographic integrity proofs generated at seal time",
      "Public hash manifest published for independent verification",
      "Audit reconstruction achievable in under 30 minutes",
      "No GRGF system access required for verification — fully independent",
    ],
  },
  {
    id: "standards",
    icon: Scale,
    label: "Standards",
    title: "Policy & Certification",
    color: "border-l-amber-600 dark:border-l-amber-400",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/5",
    description: "Document-based governance logic — not software workflows. All rules, charters, processes, and stewardship protocols are codified as governance documents with versioned integrity.",
    details: [
      "Three-tier institutional recognition: Foundational → Verified → Certified DPI",
      "Certification is time-limited with mandatory periodic renewal",
      "Aligned with ISO/IEC 27001, ISO 15489, GDPR, OECD Privacy Guidelines",
      "Deterministic policy enforcement with 100% enforcement rate target",
    ],
  },
  {
    id: "federation",
    icon: Globe,
    label: "Federation",
    title: "Interoperable Trust",
    color: "border-l-cyan-600 dark:border-l-cyan-400",
    accent: "text-cyan-600 dark:text-cyan-400",
    bg: "bg-cyan-500/5",
    description: "Multi-node federation protocol enabling cross-border verification while preserving full sovereign control within each deploying jurisdiction.",
    details: [
      "Three federation tiers: Tier 1 (Full Node), Tier 2 (Observer Node), Tier 3 (Reference Node)",
      "Canonical schemas and APIs with strict versioning and conformance testing",
      "Country-specific localization covering legal terminology, language, and regulatory alignment",
      "Interoperability without dependence — each node is independently survivable",
    ],
  },
  {
    id: "governance",
    icon: Shield,
    label: "Governance",
    title: "Anti-Capture Controls",
    color: "border-l-rose-600 dark:border-l-rose-400",
    accent: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/5",
    description: "Five structural Anti-Capture Clauses (AC-01–05) preventing any entity — government, vendor, or individual — from redirecting, monopolizing, or undermining framework neutrality.",
    details: [
      "AC-01: No single entity may hold exclusive control over framework governance",
      "AC-02: No commercial arrangement may create preferential access or influence",
      "AC-03: Stewardship roles are term-limited with independent review",
      "AC-04: Core neutrality amendments require supermajority and public review",
      "AC-05: Canonical definition and origin authority are immutable",
    ],
  },
];

const dimensions = [
  { label: "TIME", name: "Temporal Integrity", desc: "When did the action or omission occur? Records are sealed with immutable timestamps.", icon: Clock, value: "Immutable" },
  { label: "AUTHORITY", name: "Jurisdictional Scope", desc: "Who held the mandate to act? The authority under which actions were taken or should have been taken.", icon: ShieldAlert, value: "Traceable" },
  { label: "SCOPE", name: "Operational Boundary", desc: "What was the defined boundary of responsibility? Where institutional actors operated or failed to operate.", icon: Target, value: "Defined" },
];

const systemSpine = [
  { layer: 1, name: "Event Capture & Normalization", desc: "Schema-based ingestion of institutional actions and deadline-triggered omissions", status: "ACTIVE" },
  { layer: 2, name: "Policy Decision Engine", desc: "Deterministic rule evaluation via OPA engine against governance protocols", status: "ACTIVE" },
  { layer: 3, name: "Evidence Backbone", desc: "Append-only record store with cryptographic anchoring and integrity proofs", status: "ACTIVE" },
  { layer: 4, name: "Cryptographic Anchoring", desc: "SHA-256/512 hash sealing with public manifest publication", status: "ACTIVE" },
  { layer: 5, name: "Verification API", desc: "Public endpoints for independent integrity verification without content access", status: "PLANNED" },
  { layer: 6, name: "Federation & Interoperability", desc: "Cross-border node synchronization with canonical schema versioning", status: "PLANNED" },
];

export default function Framework() {
  const [expandedPillar, setExpandedPillar] = useState<string | null>("infrastructure");

  return (
    <div className="animate-fade-in">
      {/* Hero - unique full-width banner */}
      <header className="relative border-b border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 px-8 py-14 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-5xl">
          <p className="text-overline font-mono text-accent tracking-[0.25em] mb-3">FOUNDATIONAL ARCHITECTURE</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Framework
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            The architectural principles, purpose, and governing spine of the Global Record Governance Framework — 
            a sovereign-grade trust layer for recording, preserving, and verifying institutional actions, 
            decisions, and omissions across jurisdictions and generations.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground">Reference v1.0</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <span className="text-xs font-mono text-muted-foreground">6 Pillars · 6 Layers · 3 Dimensions</span>
          </div>
        </div>
      </header>

      {/* Purpose - distinctive blockquote layout */}
      <FadeIn>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl grid md:grid-cols-[140px_1fr] gap-8">
            <div>
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">PURPOSE</h2>
              <div className="w-12 h-0.5 bg-accent mt-3" />
            </div>
            <div className="space-y-4">
              <blockquote className="text-lg md:text-xl font-serif text-foreground leading-relaxed border-l-2 border-accent pl-6">
                "GRGF exists to provide a durable, neutral infrastructure for the recording and preservation
                of institutional actions, decisions, and omissions — serving as a trust layer that institutions,
                courts, and auditors can rely upon over decades."
              </blockquote>
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 bg-card border border-border">
                  <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">The Problem</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Most digital systems record transactions — not governance reality. They miss omissions:
                      inspections that didn't occur, decisions deferred, authorities that failed to act.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card border border-border">
                  <Compass className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">The Solution</h3>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      A governance record system that treats omissions as first-class events — each subject
                      to the same hash-sealing and integrity preservation as affirmative records.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 6 Pillars - interactive accordion with visual accents */}
      <FadeIn delay={100}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">SIX PILLARS</h2>
                <div className="w-12 h-0.5 bg-accent mt-3" />
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed hidden md:block">
                  Click each pillar to explore its role in the framework architecture.
                </p>
              </div>
              <div className="space-y-2">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;
                  const isOpen = expandedPillar === pillar.id;
                  return (
                    <div
                      key={pillar.id}
                      className={cn(
                        "border border-border transition-all duration-300 cursor-pointer",
                        `border-l-4 ${pillar.color}`,
                        isOpen ? `${pillar.bg}` : "bg-card hover:bg-card/80"
                      )}
                      onClick={() => setExpandedPillar(isOpen ? null : pillar.id)}
                    >
                      <div className="flex items-center gap-4 p-4">
                        <Icon className={cn("h-5 w-5 shrink-0", pillar.accent)} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <span className={cn("text-[10px] font-mono font-semibold tracking-wider", pillar.accent)}>
                              {pillar.label.toUpperCase()}
                            </span>
                            <h3 className="font-serif text-sm font-semibold text-foreground">{pillar.title}</h3>
                          </div>
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform duration-300",
                          isOpen && "rotate-180"
                        )} />
                      </div>
                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      )}>
                        <div className="px-4 pb-4 pl-13">
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{pillar.description}</p>
                          <ul className="space-y-1.5">
                            {pillar.details.map((d, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <span className={cn("mt-1.5 w-1 h-1 rounded-full shrink-0", pillar.accent.replace("text-", "bg-"))} />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Governance Dimensions - horizontal metric cards */}
      <FadeIn delay={150}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">DIMENSIONS</h2>
                <div className="w-12 h-0.5 bg-accent mt-3" />
              </div>
              <div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every institutional record exists within three governance dimensions. GRGF ensures
                  each is captured, preserved, and independently verifiable.
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                  {dimensions.map((dim) => {
                    const Icon = dim.icon;
                    return (
                      <div key={dim.label} className="relative border border-border bg-card p-5 group hover:border-accent/40 transition-colors">
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] font-mono text-accent font-semibold">{dim.value}</span>
                        </div>
                        <Icon className="h-6 w-6 text-accent mb-3" />
                        <p className="text-[10px] font-mono text-muted-foreground tracking-wider mb-1">{dim.label}</p>
                        <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{dim.name}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{dim.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* 6-Layer System Spine - vertical timeline */}
      <FadeIn delay={200}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">SYSTEM SPINE</h2>
                <div className="w-12 h-0.5 bg-accent mt-3" />
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed hidden md:block">
                  Six interlocking layers forming the complete governance and record infrastructure.
                </p>
              </div>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block" />
                <div className="space-y-3">
                  {systemSpine.map((layer) => (
                    <div key={layer.layer} className="flex items-start gap-4 group">
                      <div className="relative z-10 shrink-0 hidden sm:flex">
                        <div className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold border-2",
                          layer.status === "ACTIVE"
                            ? "bg-accent/10 border-accent text-accent"
                            : "bg-muted/30 border-muted-foreground/30 text-muted-foreground"
                        )}>
                          {layer.layer}
                        </div>
                      </div>
                      <div className="flex-1 border border-border bg-card p-4 group-hover:border-accent/30 transition-colors">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-[10px] font-mono text-muted-foreground sm:hidden">L{layer.layer}</span>
                          <h3 className="font-serif text-sm font-semibold text-foreground">{layer.name}</h3>
                          <span className={cn(
                            "text-[9px] font-mono px-1.5 py-0.5 rounded ml-auto",
                            layer.status === "ACTIVE"
                              ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                              : "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                          )}>
                            {layer.status}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Neutrality - distinctive wide callout */}
      <FadeIn delay={250}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">NEUTRALITY</h2>
                <div className="w-12 h-0.5 bg-accent mt-3" />
              </div>
              <div className="border-l-2 border-accent pl-6 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Neutrality is not a design preference — it is a structural requirement. A governance
                  record system that carries interpretive bias, enforcement power, or political alignment
                  cannot function as a trust layer across jurisdictions.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {["Records without interpreting", "Preserves without adjudicating", "Verifies without enforcing"].map((text) => (
                    <div key={text} className="p-3 bg-accent/5 border border-accent/10 text-center">
                      <p className="text-xs font-mono text-accent leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Core Principles - horizontal strip */}
      <FadeIn delay={300}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-[140px_1fr] gap-8">
              <div>
                <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">PRINCIPLES</h2>
                <div className="w-12 h-0.5 bg-accent mt-3" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { icon: Target, title: "Immutability", desc: "Once sealed, records cannot be altered, deleted, or reinterpreted across time and jurisdiction." },
                  { icon: Scale, title: "Neutrality", desc: "Records and preserves without bias, interpretation, enforcement, or position." },
                  { icon: Compass, title: "Sovereignty", desc: "Each jurisdiction retains full sovereign control over its instance, data, and operations." },
                  { icon: BookOpen, title: "Transparency", desc: "All rules, processes, and structures are publicly documented and independently verifiable." },
                ].map((p) => (
                  <div key={p.title} className="border border-border bg-card p-4 hover:border-accent/30 transition-colors">
                    <p.icon className="h-5 w-5 text-accent mb-3" />
                    <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
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
