import { useState } from "react";
import { Shield, Users, Scale, Clock, User, Ban, Lock, ChevronDown, Building2, Eye, FileCheck, GitBranch, AlertTriangle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const authorityModel = [
  {
    role: "Framework Steward",
    icon: Shield,
    tier: "TIER 1",
    scope: "Global",
    desc: "Responsible for the integrity and evolution of the core framework. Ensures all changes undergo proper governance review. Holds canonical authority over framework definitions.",
    accountability: "Origin authority with immutable attribution. Cannot be transferred or delegated.",
  },
  {
    role: "Neutrality Council",
    icon: Scale,
    tier: "TIER 1",
    scope: "Global",
    desc: "Independent body ensuring the framework remains free from political, commercial, or ideological influence. Holds veto power over core principle amendments.",
    accountability: "Members are term-limited, publicly disclosed, and subject to conflict-of-interest review.",
  },
  {
    role: "Country Stewards",
    icon: Building2,
    tier: "TIER 2",
    scope: "National",
    desc: "Designated authorities within each deploying jurisdiction responsible for local GRGF operations, compliance, and institutional alignment.",
    accountability: "Certified through the 3-tier institutional recognition process. Subject to periodic renewal.",
  },
  {
    role: "Succession Authority",
    icon: Clock,
    tier: "TIER 2",
    scope: "Transitional",
    desc: "Ensures continuity of stewardship through structured succession planning and knowledge transfer across political and generational transitions.",
    accountability: "Succession plans are sealed as governance records with independent verification.",
  },
];

const antiCaptureClauses = [
  { id: "AC-01", icon: Ban, clause: "No single entity may hold exclusive control over framework governance.", severity: "CRITICAL", category: "Control" },
  { id: "AC-02", icon: Lock, clause: "No commercial arrangement may create preferential access or influence.", severity: "CRITICAL", category: "Commercial" },
  { id: "AC-03", icon: Clock, clause: "Stewardship roles are term-limited and subject to independent review.", severity: "HIGH", category: "Tenure" },
  { id: "AC-04", icon: Scale, clause: "Core neutrality amendments require supermajority approval and public review.", severity: "CRITICAL", category: "Amendment" },
  { id: "AC-05", icon: Shield, clause: "Canonical definition and origin authority are immutable.", severity: "ABSOLUTE", category: "Origin" },
];

const changeProcess = [
  { phase: "Proposal", desc: "Change request submitted with rationale, impact assessment, and affected components.", duration: "Week 1" },
  { phase: "Public Review", desc: "Open review period for institutional stakeholders and independent reviewers.", duration: "Weeks 2–4" },
  { phase: "Council Assessment", desc: "Neutrality Council evaluates alignment with core principles and anti-capture safeguards.", duration: "Week 5" },
  { phase: "Approval", desc: "Supermajority vote for core principle changes; standard majority for operational updates.", duration: "Week 6" },
  { phase: "Implementation", desc: "Change is executed, documented, sealed, and independently verifiable.", duration: "Week 7+" },
];

const humanAccountability = [
  { rule: "Every record submission must identify a responsible authority.", principle: "Attribution" },
  { rule: "Approval and denial decisions require documented human review.", principle: "Oversight" },
  { rule: "Stewardship roles are individually assigned with clear accountability.", principle: "Responsibility" },
  { rule: "All governance changes are attributed, timestamped, and sealed.", principle: "Traceability" },
  { rule: "Anonymous or automated governance decisions are structurally prohibited.", principle: "Identity" },
];

export default function GovernancePage() {
  const [expandedRole, setExpandedRole] = useState<string | null>("Framework Steward");

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="relative border-b border-border bg-gradient-to-br from-background to-primary/3 px-8 py-14 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-accent/2 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="relative max-w-5xl">
          <p className="text-overline font-mono text-accent tracking-[0.25em] mb-3">INSTITUTIONAL GOVERNANCE</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">Governance</h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Authority model, human accountability, change management, and structural anti-capture protections — 
            ensuring long-term neutrality, institutional independence, and operational continuity.
          </p>
          <div className="mt-6 p-4 border border-accent/20 bg-accent/5 max-w-2xl">
            <p className="text-sm text-foreground leading-relaxed font-serif italic">
              "Governance authority derives from documented rules, accountability, and verifiable records — not from software execution."
            </p>
          </div>
        </div>
      </header>

      {/* Authority Model - Interactive Hierarchy */}
      <FadeIn>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">AUTHORITY MODEL</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] font-mono text-muted-foreground">{authorityModel.length} ROLES</span>
            </div>

            <div className="space-y-2">
              {authorityModel.map((role) => {
                const Icon = role.icon;
                const isOpen = expandedRole === role.role;
                return (
                  <div
                    key={role.role}
                    className={cn(
                      "border border-border transition-all cursor-pointer",
                      isOpen ? "bg-card" : "bg-card/60 hover:bg-card"
                    )}
                    onClick={() => setExpandedRole(isOpen ? null : role.role)}
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="w-10 h-10 bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="font-serif text-sm font-semibold text-foreground">{role.role}</h3>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 bg-accent/10 text-accent">{role.tier}</span>
                          <span className="text-[9px] font-mono text-muted-foreground">{role.scope}</span>
                        </div>
                      </div>
                      <ChevronDown className={cn("h-4 w-4 text-muted-foreground transition-transform", isOpen && "rotate-180")} />
                    </div>
                    <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0")}>
                      <div className="px-4 pb-4 pl-[72px] space-y-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">{role.desc}</p>
                        <div className="p-3 bg-muted/30 border border-border">
                          <p className="text-[10px] font-mono text-accent mb-1">ACCOUNTABILITY</p>
                          <p className="text-xs text-muted-foreground">{role.accountability}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Anti-Capture Clauses - Matrix */}
      <FadeIn delay={100}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">ANTI-CAPTURE CLAUSES</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] font-mono text-muted-foreground">STRUCTURAL SAFEGUARDS</span>
            </div>

            {/* Table-style matrix */}
            <div className="border border-border overflow-hidden">
              <div className="grid grid-cols-[80px_1fr_100px_90px] bg-muted/50 border-b border-border px-4 py-2">
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">CLAUSE</span>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">PROTECTION</span>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">CATEGORY</span>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">SEVERITY</span>
              </div>
              {antiCaptureClauses.map((ac) => {
                const Icon = ac.icon;
                return (
                  <div key={ac.id} className="grid grid-cols-[80px_1fr_100px_90px] items-center px-4 py-3 border-b border-border last:border-b-0 hover:bg-accent/3 transition-colors">
                    <span className="text-xs font-mono font-bold text-accent">{ac.id}</span>
                    <div className="flex items-center gap-2">
                      <Icon className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <p className="text-xs text-muted-foreground">{ac.clause}</p>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground">{ac.category}</span>
                    <span className={cn(
                      "text-[9px] font-mono px-1.5 py-0.5 text-center",
                      ac.severity === "ABSOLUTE" ? "bg-rose-500/15 text-rose-600 dark:text-rose-400" :
                      ac.severity === "CRITICAL" ? "bg-amber-500/15 text-amber-600 dark:text-amber-400" :
                      "bg-blue-500/15 text-blue-600 dark:text-blue-400"
                    )}>
                      {ac.severity}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Human Accountability - Numbered principles */}
      <FadeIn delay={150}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">HUMAN ACCOUNTABILITY</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Every governance action within GRGF is traceable to a responsible human authority. 
              The framework structurally rejects anonymous or automated governance decisions.
            </p>
            <div className="grid sm:grid-cols-5 gap-3">
              {humanAccountability.map((item, i) => (
                <div key={i} className="border border-border bg-card p-4 text-center hover:border-accent/30 transition-colors">
                  <div className="w-8 h-8 mx-auto mb-3 bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-xs font-mono font-bold text-accent">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-[10px] font-mono text-accent font-semibold mb-2">{item.principle}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{item.rule}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Change Management - Timeline */}
      <FadeIn delay={200}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">CHANGE MANAGEMENT</h2>
              <div className="flex-1 h-px bg-border" />
              <span className="text-[10px] font-mono text-muted-foreground">5-PHASE PROCESS</span>
            </div>

            <div className="relative">
              {/* Horizontal timeline line */}
              <div className="hidden sm:block absolute top-[20px] left-0 right-0 h-px bg-border" />
              <div className="grid sm:grid-cols-5 gap-4">
                {changeProcess.map((phase, i) => (
                  <div key={phase.phase} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden sm:flex w-10 h-10 mx-auto mb-4 bg-card border-2 border-accent items-center justify-center relative z-10">
                      <span className="text-xs font-mono font-bold text-accent">{i + 1}</span>
                    </div>
                    <div className="border border-border bg-card p-4">
                      <p className="text-[10px] font-mono text-accent font-semibold mb-1">{phase.duration}</p>
                      <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{phase.phase}</h3>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{phase.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Audit Principles */}
      <FadeIn delay={250}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">AUDIT PRINCIPLES</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { text: "Does not interpret the content of records it preserves.", icon: Eye },
                { text: "Does not enforce compliance or adjudicate disputes.", icon: AlertTriangle },
                { text: "Does not rank, score, or evaluate institutions.", icon: GitBranch },
                { text: "Operates without commercial interest or profit motive.", icon: Ban },
                { text: "Governance is transparent and independently verifiable.", icon: FileCheck },
                { text: "All audit trails are immutable and tamper-evident.", icon: Shield },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-border bg-card hover:border-accent/20 transition-colors">
                  <p.icon className="h-4 w-4 text-accent shrink-0" />
                  <p className="text-xs text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Origin Authority */}
      <FadeIn delay={300}>
        <section className="px-8 py-12 md:px-12 lg:px-16">
          <div className="max-w-5xl">
            <div className="border-2 border-accent/20 bg-accent/3 p-6 flex items-start gap-4">
              <User className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-mono text-accent font-semibold mb-2">ORIGIN AUTHORITY</p>
                <p className="text-sm text-foreground leading-relaxed">
                  Global Record Governance Framework — Invented and Owned by <span className="font-semibold">Tarek Wahid</span>.
                </p>
                <p className="text-[10px] font-mono text-muted-foreground mt-2">STATUS: VERIFIED · DOCUMENTED · IMMUTABLE</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
