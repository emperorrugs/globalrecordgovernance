import { useState } from "react";
import { Shield, Lock, Eye, Key, UserCheck, FileText, Layers, AlertTriangle, CheckCircle, XCircle, ChevronDown, Server, Database, Globe } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const accessTiers = [
  {
    level: "Level 1",
    name: "Public Verification",
    color: "bg-emerald-500",
    clearance: "OPEN",
    access: ["Hash manifest verification", "Record existence queries", "Integrity proof validation", "Public API endpoints"],
    restriction: "Content access prohibited. Metadata only.",
  },
  {
    level: "Level 2",
    name: "Institutional Access",
    color: "bg-blue-500",
    clearance: "RESTRICTED",
    access: ["Record metadata retrieval", "Classification-level queries", "Audit trail inspection", "Governance rule review"],
    restriction: "Requires institutional agreement and role-based authorization.",
  },
  {
    level: "Level 3",
    name: "Stewardship Access",
    color: "bg-amber-500",
    clearance: "CONTROLLED",
    access: ["Full record content access", "Administrative operations", "Governance rule modification", "Emergency procedures"],
    restriction: "Individual assignment with mandatory audit logging of all actions.",
  },
];

const disclosurePrinciples = [
  { id: "DP-01", principle: "Records are disclosed only in accordance with governance rules and institutional agreements.", status: "ENFORCED" },
  { id: "DP-02", principle: "No record may be disclosed to override, circumvent, or influence an ongoing governance process.", status: "ENFORCED" },
  { id: "DP-03", principle: "Public access is limited to hash manifests, record identifiers, and integrity verification tools.", status: "ENFORCED" },
  { id: "DP-04", principle: "Full content disclosure requires authorised institutional request through defined channels.", status: "ENFORCED" },
  { id: "DP-05", principle: "Disclosure events are themselves recorded and sealed as governance records.", status: "ENFORCED" },
];

const zeroTrustLayers = [
  { layer: "Perimeter", desc: "No implicit trust granted to any network, user, or device. Every access request is fully authenticated and authorized.", icon: Globe },
  { layer: "Identity", desc: "Role-based authority with individual attribution. Anonymous or shared credentials structurally prohibited.", icon: UserCheck },
  { layer: "Data", desc: "Encryption at rest and in transit. Content access, metadata access, and verification access are structurally separated.", icon: Database },
  { layer: "Application", desc: "Deterministic policy enforcement. All operations logged, sealed, and independently auditable.", icon: Server },
];

const integrityGuarantees = [
  { guarantee: "Write-once records cannot be modified after sealing by any party, including origin authority", verified: true },
  { guarantee: "SHA-256 integrity proofs generated at seal time and published in public manifest", verified: true },
  { guarantee: "Version control ensures no record is overwritten — superseded versions remain accessible", verified: true },
  { guarantee: "Archive integrity independently verifiable without trusting any single party", verified: true },
  { guarantee: "Emergency access governed by pre-defined protocols, not ad hoc decisions", verified: true },
];

export default function Security() {
  const [activeAccess, setActiveAccess] = useState(0);

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="relative border-b border-border bg-gradient-to-br from-background via-primary/2 to-background px-8 py-14 md:px-12 lg:px-16 overflow-hidden">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-rose-500/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-5xl">
          <p className="text-overline font-mono text-accent tracking-[0.25em] mb-3">SECURITY ARCHITECTURE</p>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground leading-tight">
            Security & Confidentiality
          </h1>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-3xl">
            Zero-trust security model with governance-defined access control, structural disclosure principles,
            and owner-controlled sovereignty — ensuring integrity from perimeter to data layer.
          </p>
          <div className="flex items-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <Lock className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">Zero-Trust</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Shield className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">3 Access Tiers</span>
            </div>
            <div className="h-3 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Eye className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-mono text-muted-foreground">5 Disclosure Principles</span>
            </div>
          </div>
        </div>
      </header>

      {/* Access Tiers - Interactive Cards */}
      <FadeIn>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">ACCESS CONTROL TIERS</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Tier selector tabs */}
            <div className="flex gap-2 mb-6">
              {accessTiers.map((tier, i) => (
                <button
                  key={tier.level}
                  onClick={() => setActiveAccess(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 border transition-all text-xs font-mono",
                    activeAccess === i
                      ? "bg-accent/10 border-accent/30 text-foreground font-semibold"
                      : "bg-card border-border text-muted-foreground hover:border-accent/20"
                  )}
                >
                  <div className={cn("w-2 h-2 rounded-full", tier.color)} />
                  {tier.level}
                </button>
              ))}
            </div>

            {/* Active tier detail */}
            <div className="grid md:grid-cols-[1fr_260px] gap-4">
              <div className="border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={cn("w-3 h-3 rounded-full", accessTiers[activeAccess].color)} />
                  <h3 className="font-serif text-base font-semibold text-foreground">
                    {accessTiers[activeAccess].name}
                  </h3>
                  <span className={cn(
                    "text-[9px] font-mono px-2 py-0.5 ml-auto",
                    activeAccess === 0 ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" :
                    activeAccess === 1 ? "bg-blue-500/15 text-blue-600 dark:text-blue-400" :
                    "bg-amber-500/15 text-amber-600 dark:text-amber-400"
                  )}>
                    {accessTiers[activeAccess].clearance}
                  </span>
                </div>
                <ul className="space-y-2 mb-4">
                  {accessTiers[activeAccess].access.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-emerald-500 shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
                <div className="p-3 bg-muted/30 border border-border">
                  <p className="text-[10px] font-mono text-amber-600 dark:text-amber-400 mb-1">RESTRICTION</p>
                  <p className="text-xs text-muted-foreground">{accessTiers[activeAccess].restriction}</p>
                </div>
              </div>

              {/* Visual stack */}
              <div className="space-y-2">
                {accessTiers.map((tier, i) => (
                  <div
                    key={tier.level}
                    className={cn(
                      "p-3 border transition-all cursor-pointer",
                      activeAccess === i
                        ? "border-accent/30 bg-accent/5"
                        : "border-border bg-card/50 opacity-50"
                    )}
                    onClick={() => setActiveAccess(i)}
                  >
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", tier.color)} />
                      <span className="text-[10px] font-mono font-semibold text-foreground">{tier.level}</span>
                      <span className="text-[9px] font-mono text-muted-foreground ml-auto">{tier.clearance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Zero-Trust Architecture */}
      <FadeIn delay={100}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">ZERO-TRUST ARCHITECTURE</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {zeroTrustLayers.map((zt, i) => {
                const Icon = zt.icon;
                return (
                  <div key={zt.layer} className="relative border border-border bg-card p-5 group hover:border-accent/30 transition-colors">
                    <div className="absolute top-3 right-3">
                      <span className="text-[9px] font-mono text-muted-foreground">LAYER {i + 1}</span>
                    </div>
                    <Icon className="h-6 w-6 text-accent mb-4" />
                    <h3 className="font-serif text-sm font-semibold text-foreground mb-2">{zt.layer}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{zt.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Disclosure Principles - Table */}
      <FadeIn delay={150}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">DISCLOSURE PRINCIPLES</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="border border-border overflow-hidden">
              <div className="grid grid-cols-[70px_1fr_80px] bg-muted/50 border-b border-border px-4 py-2">
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">ID</span>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">PRINCIPLE</span>
                <span className="text-[10px] font-mono text-muted-foreground font-semibold">STATUS</span>
              </div>
              {disclosurePrinciples.map((dp) => (
                <div key={dp.id} className="grid grid-cols-[70px_1fr_80px] items-center px-4 py-3 border-b border-border last:border-b-0 hover:bg-accent/3 transition-colors">
                  <span className="text-xs font-mono font-bold text-accent">{dp.id}</span>
                  <p className="text-xs text-muted-foreground pr-4">{dp.principle}</p>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-center">
                    {dp.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Owner-Controlled Governance */}
      <FadeIn delay={200}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border bg-card/30">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">OWNER-CONTROLLED GOVERNANCE</h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-2 border-accent pl-6 space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  GRGF is structurally owner-controlled. The framework's governance rules, access policies,
                  and stewardship mandates are defined and maintained by the framework's governance authority — 
                  not by technology vendors, hosting providers, or third-party service operators.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Technology providers operate as infrastructure suppliers under defined terms — 
                  they do not participate in governance decisions.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Governance Rules", owner: "Framework Authority", vendor: false },
                  { label: "Access Policies", owner: "Stewardship Council", vendor: false },
                  { label: "Infrastructure", owner: "Defined suppliers", vendor: true },
                  { label: "Security Configuration", owner: "Framework Authority", vendor: false },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 border border-border bg-card">
                    <span className="text-xs font-mono text-foreground font-semibold w-36 shrink-0">{item.label}</span>
                    <span className="text-xs text-muted-foreground flex-1">{item.owner}</span>
                    {item.vendor ? (
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    ) : (
                      <Shield className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Integrity Guarantees - Checklist */}
      <FadeIn delay={250}>
        <section className="px-8 py-12 md:px-12 lg:px-16 border-b border-border">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-mono text-xs tracking-[0.2em] text-accent font-semibold">INTEGRITY GUARANTEES</h2>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="space-y-2">
              {integrityGuarantees.map((ig, i) => (
                <div key={i} className="flex items-center gap-3 p-3 border border-border bg-card hover:border-accent/20 transition-colors">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <p className="text-sm text-muted-foreground flex-1">{ig.guarantee}</p>
                  <span className="text-[9px] font-mono text-emerald-600 dark:text-emerald-400 shrink-0">VERIFIED</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Footer */}
      <section className="px-8 py-8 md:px-12 lg:px-16 bg-card/30">
        <div className="flex items-start gap-3">
          <FileText className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground max-w-3xl">
            <span className="font-semibold text-foreground">Attribution.</span> Global Record Governance Framework — Invented and Owned by Tarek Wahid.
          </p>
        </div>
      </section>
    </div>
  );
}
