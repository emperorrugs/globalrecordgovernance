import { Link } from "react-router-dom";
import {
  Shield, Lock, ArrowRight, Globe, FileCheck, Search,
  Scale, Landmark, Building2, Stethoscope, Banknote,
  GraduationCap, Gavel, HardHat, Zap, BookOpen, Users,
  ShieldCheck, Database, Network, Eye, Server, Store
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { LiveRecordDemo } from "@/components/LiveRecordDemo";
import { DashboardPreview } from "@/components/DashboardPreview";
import { CinematicHeroFlow } from "@/components/CinematicHeroFlow";
import { InteractiveArchitecturePipeline } from "@/components/InteractiveArchitecturePipeline";
import { LiveDashboardCharts } from "@/components/LiveDashboardCharts";

const sectors = [
  { icon: Landmark, name: "Government", count: 18 },
  { icon: Stethoscope, name: "Healthcare", count: 14 },
  { icon: Banknote, name: "Finance", count: 12 },
  { icon: HardHat, name: "Infrastructure", count: 10 },
  { icon: Gavel, name: "Justice", count: 11 },
  { icon: GraduationCap, name: "Education", count: 9 },
  { icon: Shield, name: "Public Safety", count: 8 },
  { icon: Building2, name: "Procurement", count: 14 },
  { icon: Users, name: "Social Services", count: 10 },
  { icon: Globe, name: "International", count: 12 },
];

const products = [
  { title: "GRGF Core Engine", desc: "Capture, seal, and manage institutional evidence with deterministic authority binding.", icon: Database },
  { title: "GRGF Verify", desc: "Public validation portal for verifying the integrity of sealed governance records.", icon: Search },
  { title: "GRGF API", desc: "Developer-grade RESTful interface for integrating governance integrity.", icon: Zap },
  { title: "GRGF Federation", desc: "Multi-jurisdiction interoperability layer for cross-border governance transparency.", icon: Network },
];

const standards = [
  { name: "ISO 27001", label: "Information Security" },
  { name: "ISO 15489", label: "Records Management" },
  { name: "OECD DPI", label: "Digital Public Infrastructure" },
  { name: "UNESCO", label: "Digital Governance" },
  { name: "GDPR", label: "Data Protection" },
  { name: "ITU-T", label: "Telecom Standards" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary-foreground) / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground) / 0.05) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28 lg:py-40 relative">
          <FadeIn>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-foreground/20 text-xs font-mono tracking-wider mb-8 text-primary-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground animate-pulse" />
                GLOBAL INFRASTRUCTURE LAYER
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-display-xl font-bold tracking-tight mb-6 leading-[0.95]">
                The Infrastructure
                <br className="hidden sm:block" />
                of Truth
              </h1>
              <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-xl mb-4 leading-relaxed">
                Neutral. Verifiable. Permanent.
              </p>
              <p className="text-base text-primary-foreground/55 max-w-xl mb-10 leading-relaxed">
                GRGF records institutional actions, decisions, and omissions into an immutable, cryptographic evidence layer — creating a system of record for reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/deploy" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all">
                  <Server className="h-4 w-4" /> Deploy System <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/marketplace" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary-foreground/15 text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary-foreground/25 transition-all border border-primary-foreground/20">
                  <Store className="h-4 w-4" /> Marketplace
                </Link>
                <Link to="/app/login" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-primary-foreground/25 text-primary-foreground text-sm font-semibold rounded-md hover:bg-primary-foreground/10 transition-all">
                  <Lock className="h-4 w-4" /> Access Core System
                </Link>
              </div>
            </div>
          </FadeIn>
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 w-[380px]">
            <FadeIn delay={200}>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-primary-foreground/40">LIVE GOVERNANCE FLOW</span>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                </div>
                <CinematicHeroFlow />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ DUAL GATEWAY ═══ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/framework" className="governance-card-elevated group p-8 lg:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-6">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-heading-2 font-bold text-foreground mb-3">Explore the Framework</h2>
                <p className="text-body text-muted-foreground mb-6 flex-1">
                  Architecture, standards, applications, sector analysis, and full documentation for governments, multilaterals, and institutional evaluators.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  Enter Framework Portal <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
              <Link to="/app/login" className="group p-8 lg:p-10 flex flex-col bg-primary text-primary-foreground rounded-lg transition-all hover:shadow-xl">
                <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-heading-2 font-bold mb-3">Access Core System</h2>
                <p className="text-body text-primary-foreground/65 mb-6 flex-1">
                  Operational governance engine for authorized users. Record management, workflows, verification, audit trails, and institutional dashboards.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                  <Lock className="h-3.5 w-3.5" /> Login to Core System <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ EXECUTIVE THESIS ═══ */}
      <section className="py-24 lg:py-28 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-heading-1 font-bold text-foreground mb-6">A New Category of Governance Infrastructure</h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed">
                GRGF introduces an infrastructure layer where governance actions are recorded, verified, and auditable at execution time — bridging the gap between institutional decision-making and verifiable truth.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Zap, title: "Execution-Time Recording", desc: "Events captured at the moment they occur — not reported after the fact." },
                { icon: Scale, title: "Authority Binding", desc: "Every record is cryptographically bound to the legal authority that authorized it." },
                { icon: Eye, title: "Independent Verification", desc: "Any party can independently verify record integrity without institutional access." },
              ].map((p) => (
                <div key={p.title} className="governance-card text-center">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <p.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-heading-3 font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-caption text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ INTERACTIVE ARCHITECTURE ═══ */}
      <section className="py-24 lg:py-28 bg-card border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="carbon-tag mx-auto mb-4 w-fit">DETERMINISTIC ARCHITECTURE</div>
              <h2 className="text-heading-1 font-bold text-foreground mb-4">Six-Layer Governance Engine</h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                From raw institutional events to independently verifiable, sovereign-grade governance records.
              </p>
            </div>
          </FadeIn>
          <InteractiveArchitecturePipeline />
          <div className="text-center mt-8">
            <Link to="/architecture" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              View Full Architecture <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LIVE DEMO ═══ */}
      <LiveRecordDemo />

      {/* ═══ DASHBOARD WITH CHARTS ═══ */}
      <DashboardPreview />
      <section className="pb-16 -mt-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <LiveDashboardCharts />
        </div>
      </section>

      {/* ═══ PRODUCT SUITE ═══ */}
      <section className="py-24 lg:py-28 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="carbon-tag mx-auto mb-4 w-fit">PRODUCT SUITE</div>
              <h2 className="text-heading-1 font-bold text-foreground mb-4">One Engine. Four Products.</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((p) => (
                <div key={p.title} className="governance-card-elevated group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0">
                      <p.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-heading-3 font-semibold text-foreground mb-2">{p.title}</h3>
                      <p className="text-caption text-muted-foreground">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SECTORS ═══ */}
      <section className="py-24 lg:py-28 bg-card border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="text-heading-1 font-bold text-foreground mb-4">126 Applications Across 12 Sectors</h2>
              <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
                From procurement transparency to crisis decision tracking — one integrity infrastructure for all governance domains.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {sectors.map((s) => (
                <div key={s.name} className="governance-card text-center group cursor-default">
                  <s.icon className="h-6 w-6 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
                  <p className="text-overline text-muted-foreground">{s.count} applications</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/applications" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                View Full Applications Catalog <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/sector-integration" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all">
                <Zap className="h-4 w-4" /> Sector Integration Examples
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ USE CASES ═══ */}
      <section className="py-24 lg:py-28 border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="carbon-tag mx-auto mb-4 w-fit">GOVERNMENT USE CASES</div>
              <h2 className="text-heading-1 font-bold text-foreground mb-4">Before GRGF vs. After GRGF</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Anti-Corruption", before: "Decisions altered retroactively without detection.", after: "Every decision hash-sealed at execution time.", roi: "73% reduction in undetected manipulation" },
                { title: "Public Spending", before: "Budget approvals documented weeks after execution.", after: "Real-time capture with authority binding.", roi: "$4.2M annual recovery in procurement fraud" },
                { title: "Policy Accountability", before: "Policy decisions lack timestamped evidence.", after: "Immutable record of who decided what, when, and under what authority.", roi: "89% improvement in decision traceability" },
                { title: "Crisis Decisions", before: "Emergency decisions made without documentation.", after: "Execution-time recording with omission detection.", roi: "15-minute audit reconstruction vs. 3–5 days" },
              ].map((uc) => (
                <div key={uc.title} className="governance-card-elevated">
                  <h3 className="text-heading-3 font-semibold text-foreground mb-4">{uc.title}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="p-3 rounded-md bg-destructive/5 border border-destructive/10">
                      <span className="text-overline text-destructive font-semibold">BEFORE</span>
                      <p className="text-xs text-muted-foreground mt-1">{uc.before}</p>
                    </div>
                    <div className="p-3 rounded-md bg-sovereign-green/5 border border-sovereign-green/10">
                      <span className="text-overline text-sovereign-green font-semibold">AFTER</span>
                      <p className="text-xs text-muted-foreground mt-1">{uc.after}</p>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-md bg-accent/5 border border-accent/10">
                    <span className="text-overline text-accent font-semibold">IMPACT: </span>
                    <span className="text-xs text-foreground">{uc.roi}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRUST & STANDARDS ═══ */}
      <section className="py-24 lg:py-28 bg-card border-t border-border">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <div className="carbon-tag mx-auto mb-4 w-fit">TRUST LAYER</div>
              <h2 className="text-heading-1 font-bold text-foreground mb-4">Built for Sovereign-Grade Integrity</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {standards.map((s) => (
                <div key={s.name} className="governance-card flex items-center gap-4">
                  <ShieldCheck className="h-5 w-5 text-sovereign-green shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.name}</p>
                    <p className="text-overline text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Cryptographic Integrity", desc: "SHA-256 hash-chain with Merkle proofs" },
                { icon: Lock, label: "Multi-Tenant Isolation", desc: "Row-level security per institution" },
                { icon: FileCheck, label: "Immutable Audit Trail", desc: "Append-only, zero-deletion architecture" },
              ].map((f) => (
                <div key={f.label} className="text-center p-6">
                  <f.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-1">{f.label}</h3>
                  <p className="text-caption text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ VERIFICATION CTA ═══ */}
      <section className="py-20 border-t border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <Search className="h-10 w-10 text-accent mx-auto mb-4" />
            <h2 className="text-heading-2 font-bold text-foreground mb-3">Verify a Record</h2>
            <p className="text-body text-muted-foreground mb-6">Enter a Record ID or verification token to independently validate integrity.</p>
            <Link to="/verify" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all">
              Open Verification Portal <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ DEVELOPER ZONE ═══ */}
      <section className="py-24 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-foreground/20 text-xs font-mono tracking-wider mb-6 text-primary-foreground/60">
                  DEVELOPER API
                </div>
                <h2 className="text-heading-1 font-bold mb-4">Integrate Governance Integrity</h2>
                <p className="text-body-lg text-primary-foreground/60 mb-6">
                  RESTful API with comprehensive SDK support. Record, verify, and audit institutional events programmatically.
                </p>
                <Link to="/developer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all">
                  View API Documentation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-6 font-mono text-sm">
                <div className="flex items-center gap-2 text-primary-foreground/40 mb-4">
                  <span className="w-3 h-3 rounded-full bg-destructive/50" />
                  <span className="w-3 h-3 rounded-full bg-warning/50" />
                  <span className="w-3 h-3 rounded-full bg-sovereign-green/50" />
                  <span className="ml-2 text-xs">api-example.sh</span>
                </div>
                <pre className="text-primary-foreground/70 text-xs leading-relaxed overflow-x-auto">
{`curl -X POST https://api.grgf.org/v1/records \\
  -H "Authorization: Bearer <token>" \\
  -d '{
    "actor": "Ministry of Finance",
    "action": "budget_approval",
    "authority": "FIN-2024-AUTH"
  }'

# Response
{
  "id": "GOV-2024-0847",
  "hash": "a3f2e1d4c5b6...",
  "status": "sealed"
}`}</pre>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 lg:py-28 border-t border-border">
        <div className="max-w-[800px] mx-auto px-6 lg:px-10 text-center">
          <FadeIn>
            <h2 className="text-heading-1 font-bold text-foreground mb-4">Deploy GRGF in Your Institution</h2>
            <p className="text-body-lg text-muted-foreground mb-8">Join the institutions building verifiable governance infrastructure.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-semibold rounded-md hover:opacity-90 transition-all">
                Request Demo
              </Link>
              <Link to="/documents" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-md hover:bg-muted transition-all">
                View Documents
              </Link>
              <Link to="/app/login" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground text-sm font-semibold rounded-md hover:bg-muted transition-all">
                <Lock className="h-4 w-4" /> Access Core System
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
