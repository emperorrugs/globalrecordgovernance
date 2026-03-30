import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, GraduationCap, Scale,
  Globe, Lock, Eye, Database, Layers, Network,
  BarChart3, FileText, Link2, CheckCircle2, Zap,
  BookOpen, Store, Activity, TrendingUp, AlertTriangle,
  Server, Binary, Fingerprint, Calculator,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Animated Counter ── */
const AnimNum = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const dur = 1800;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * ease));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target]);
  return <>{val.toLocaleString()}{suffix}</>;
};

/* ── Live Pulse Dot ── */
const PulseDot = ({ color = "bg-success" }: { color?: string }) => (
  <span className="relative flex h-2 w-2">
    <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${color} opacity-75`} />
    <span className={`relative inline-flex rounded-full h-2 w-2 ${color}`} />
  </span>
);

/* ── Stat Card ── */
const StatCard = ({ icon: Icon, value, label, trend, color, delay }: {
  icon: React.ComponentType<{ className?: string }>; value: string; label: string;
  trend?: string; color: string; delay: number;
}) => (
  <FadeIn delay={delay}>
    <div className="stat-card group">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="h-4 w-4" />
        </div>
        {trend && (
          <span className="flex items-center gap-1 text-[11px] font-medium text-success">
            <TrendingUp className="h-3 w-3" /> {trend}
          </span>
        )}
      </div>
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
    </div>
  </FadeIn>
);

/* ── Product Module Card ── */
const ModuleCard = ({ title, desc, icon: Icon, path, accent, tag, delay }: {
  title: string; desc: string; icon: React.ComponentType<{ className?: string }>;
  path: string; accent: string; tag: string; delay: number;
}) => (
  <FadeIn delay={delay}>
    <Link to={path} className="group block">
      <div className="carbon-tile h-full p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${accent}`}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">{tag}</span>
        </div>
        <h3 className="text-base font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{desc}</p>
        <div className="flex items-center gap-1.5 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Open</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  </FadeIn>
);

/* ══════════════════════ INDEX ══════════════════════ */
const Index = () => {
  const { t } = useLanguage();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const iv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <div>
      <SEOHead
        title="GRGF — Global Infrastructure for Truth and Governance"
        description="Enterprise-grade governance infrastructure platform. Sovereign record management, cryptographic verification, and institutional trust for digital public infrastructure."
      />

      {/* ═══ ENTERPRISE HERO ═══ */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,20%,10%)] via-[hsl(215,25%,14%)] to-[hsl(212,30%,18%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10" style={{
          background: "radial-gradient(circle at 70% 20%, hsl(212 100% 50% / 0.3), transparent 60%)"
        }} />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Message */}
            <div>
              <FadeIn delay={0}>
                <div className="flex items-center gap-2 mb-6">
                  <PulseDot color="bg-emerald-400" />
                  <span className="text-[11px] font-mono text-white/50 tracking-wider">
                    SOVEREIGN INFRASTRUCTURE · LIVE
                  </span>
                </div>
              </FadeIn>

              <FadeIn delay={60}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] text-white">
                  Global Infrastructure{" "}
                  <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(212,100%,60%)] to-[hsl(212,100%,75%)]">
                    for Truth &amp; Governance
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={120}>
                <p className="mt-5 text-sm md:text-base text-white/60 max-w-lg leading-relaxed">
                  The execution-time trust layer for Digital Public Infrastructure.
                  Capture actions. Preserve evidence. Verify independently.
                  <span className="text-white/80 font-medium"> System-of-record for institutional reality.</span>
                </p>
              </FadeIn>

              <FadeIn delay={180}>
                <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
                  <Link
                    to="/marketplace"
                    className="apple-button bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    <Store className="h-4 w-4" />
                    Open Marketplace
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <Link
                    to="/anchor-chain"
                    className="apple-button bg-white/8 text-white border border-white/15 px-6 py-2.5 text-sm font-semibold hover:bg-white/15"
                  >
                    <Link2 className="h-4 w-4" />
                    Launch Anchor Chain
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={240}>
                <p className="mt-6 text-[9px] font-mono text-white/20 tracking-wider">
                  {t("home.patent")}
                </p>
              </FadeIn>
            </div>

            {/* Right — Live System Status */}
            <FadeIn delay={200}>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <span className="text-xs font-semibold text-white/80">System Status</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30">
                    {time.toLocaleTimeString('en-US', { hour12: false })} UTC
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Architecture Layers", val: "6", accent: "text-[hsl(4,80%,55%)]" },
                    { label: "Applications", val: "126", accent: "text-[hsl(212,100%,60%)]" },
                    { label: "Annual Value", val: "$61.7B", accent: "text-[hsl(152,55%,48%)]" },
                    { label: "Standards", val: "47", accent: "text-[hsl(42,85%,55%)]" },
                  ].map((s, i) => (
                    <div key={s.label} className="bg-white/5 rounded-lg p-3 border border-white/5">
                      <p className={`text-xl font-bold tracking-tight ${s.accent}`}>{s.val}</p>
                      <p className="text-[10px] text-white/40 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Live integrity chain */}
                <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/40">INTEGRITY CHAIN</span>
                    <PulseDot color="bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className="w-8 h-8 rounded border border-white/10 bg-white/5 flex items-center justify-center hover:border-primary/40 transition-colors">
                          <span className="text-[8px] font-mono text-white/30">#{String(i + 1).padStart(2, '0')}</span>
                        </div>
                        {i < 7 && <div className="w-2 h-px bg-white/15" />}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entry points */}
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: "Dashboard", path: "/dashboard", icon: BarChart3 },
                    { label: "Deploy System", path: "/marketplace", icon: Server },
                    { label: "Verify Records", path: "/verify", icon: Fingerprint },
                    { label: "Calculator", path: "/value-calculator", icon: Calculator },
                  ].map((ep) => (
                    <Link
                      key={ep.label}
                      to={ep.path}
                      className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border border-white/8 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/15 transition-all text-[11px] font-medium"
                    >
                      <ep.icon className="h-3 w-3" />
                      {ep.label}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CONTROL METRICS ═══ */}
      <section className="px-6 lg:px-8 -mt-6 relative z-10 pb-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
            <StatCard icon={Database} value="126" label="Governance Applications" trend="+12" color="bg-primary/10 text-primary" delay={0} />
            <StatCard icon={Shield} value="47" label="Standards Aligned" color="bg-success/10 text-success" delay={40} />
            <StatCard icon={Globe} value="12" label="Sector Templates" color="bg-info/10 text-info" delay={80} />
            <StatCard icon={Layers} value="6" label="Architecture Layers" color="bg-accent/10 text-accent" delay={120} />
            <StatCard icon={Activity} value="$61.7B" label="Projected Annual Value" trend="+18%" color="bg-destructive/10 text-destructive" delay={160} />
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT SUITE ═══ */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-1.5">Product Suite</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">Enterprise Governance Modules</h2>
            <p className="text-sm text-muted-foreground mb-10 max-w-xl">
              Modular infrastructure components designed for sovereign deployment across governments, enterprises, and institutions.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <ModuleCard
              icon={Link2} title="GRGF Core Engine" desc="Six-layer deterministic architecture with append-only record anchoring and SHA-256 integrity."
              path="/anchor-chain" accent="bg-primary/10 text-primary" tag="Engine" delay={0}
            />
            <ModuleCard
              icon={Eye} title="GRGF Verify" desc="Public verification portal for independent record integrity validation without content exposure."
              path="/verify" accent="bg-success/10 text-success" tag="Verification" delay={60}
            />
            <ModuleCard
              icon={Store} title="GRGF Marketplace" desc="Discover, install, and deploy governance solutions across anti-corruption, compliance, and more."
              path="/marketplace" accent="bg-accent/10 text-accent" tag="Marketplace" delay={120}
            />
            <ModuleCard
              icon={Network} title="GRGF Federation" desc="Multi-jurisdiction governance network with Merkle cross-witnessing and sovereign data isolation."
              path="/interoperability" accent="bg-info/10 text-info" tag="Federation" delay={180}
            />
            <ModuleCard
              icon={Calculator} title="GRGF Value Engine" desc="Enterprise ROI calculator with real-time institutional impact modeling and fiscal projections."
              path="/value-calculator" accent="bg-destructive/10 text-destructive" tag="Analytics" delay={240}
            />
            <ModuleCard
              icon={Binary} title="GRGF Developer" desc="API marketplace, SDKs, integration guides, and sandbox environment for system builders."
              path="/developer" accent="bg-muted-foreground/10 text-muted-foreground" tag="API" delay={300}
            />
            <ModuleCard
              icon={GraduationCap} title="GRGF Academy" desc="Professional certification, training curricula, and institutional readiness assessment programs."
              path="/academy" accent="bg-success/10 text-success" tag="Training" delay={360}
            />
            <ModuleCard
              icon={Scale} title="GRGF Standards" desc="ISO, OECD, UN, and World Bank alignment with comprehensive compliance verification."
              path="/compliance" accent="bg-primary/10 text-primary" tag="Compliance" delay={420}
            />
          </div>
        </div>
      </section>

      {/* ═══ ANCHOR CHAIN HERO ═══ */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <Link
              to="/anchor-chain"
              className="group block overflow-hidden border border-border hover:border-primary/40 transition-all duration-400 rounded-xl bg-gradient-to-br from-muted/30 to-muted/50"
            >
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                    <Link2 className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    <PulseDot color="bg-emerald-500" />
                    <span className="text-[10px] font-mono text-success tracking-wider font-medium">ACTIVE</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold tracking-tight mb-3">
                  GRGF Anchor Chain<span className="text-primary">™</span>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  The cryptographic governance verification engine — real-time immutable record anchoring,
                  six-layer deterministic architecture, and independent proof-of-existence for every institutional action.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { tag: "SHA-256 Hash Chain", color: "text-destructive bg-destructive/5 border-destructive/15" },
                    { tag: "X.509 Authority", color: "text-primary bg-primary/5 border-primary/15" },
                    { tag: "Zero-Knowledge Proofs", color: "text-success bg-success/5 border-success/15" },
                    { tag: "Append-Only", color: "text-accent bg-accent/5 border-accent/15" },
                    { tag: "Federation Protocol", color: "text-info bg-info/5 border-info/15" },
                  ].map(({ tag, color }) => (
                    <span key={tag} className={`px-3 py-1 text-[10px] font-mono border rounded-md tracking-wider ${color}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                  <span className="text-sm font-semibold">Enter the Anchor Chain</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRUST & COMPLIANCE ═══ */}
      <section className="px-6 lg:px-8 pb-20 bg-muted/20">
        <div className="max-w-[1440px] mx-auto py-16">
          <FadeIn>
            <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-1.5">Compliance & Authority</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
              Built for international standards
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle2, title: "OECD · UN · World Bank", desc: "Mapped to international DPI safeguards and governance maturity frameworks across 47 standards.", color: "text-primary" },
              { icon: Zap, title: "Deterministic by Design", desc: "Zero discretionary override — every action follows immutable institutional rules with cryptographic proof.", color: "text-destructive" },
              { icon: Shield, title: "Anti-Capture Architecture", desc: "Five constitutional clauses (AC-01 to AC-05) preventing corporate, political, or insider override.", color: "text-success" },
            ].map(({ icon: TIcon, title: tt, desc, color }, i) => (
              <FadeIn key={tt} delay={i * 60}>
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                    <TIcon className={`h-5 w-5 ${color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-tight mb-1">{tt}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENTERPRISE RESOURCES ═══ */}
      <section className="px-6 lg:px-8 pb-20">
        <div className="max-w-[1440px] mx-auto py-16">
          <FadeIn>
            <p className="text-[11px] font-semibold text-primary uppercase tracking-[0.12em] mb-1.5">Resources</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-8">
              Tools & Documentation
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: BarChart3, title: "Impact Modeling", desc: "Fiscal projections and ROI analysis across sectors", path: "/impact-modeling" },
              { icon: Database, title: "Smart Archive", desc: "Trilingual institutional repository with version control", path: "/archive/intelligent" },
              { icon: Globe, title: "Submission Hub", desc: "OECD, World Bank, and UN evaluation packages", path: "/submission-hub" },
              { icon: FileText, title: "Downloads", desc: "Publications, templates, and technical documentation", path: "/archive/downloads" },
              { icon: Lock, title: "Controlled Access", desc: "Institutional verification and assessment portal", path: "/controlled-access" },
              { icon: BookOpen, title: "GRGF Academy", desc: "Professional training and certification programs", path: "/academy" },
            ].map((r, i) => (
              <FadeIn key={r.title} delay={i * 50}>
                <Link
                  to={r.path}
                  className="group flex items-start gap-4 p-5 bg-card border border-border hover:border-primary/25 hover:shadow-md transition-all duration-300 rounded-lg"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-all">
                    <r.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors">{r.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{r.desc}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
