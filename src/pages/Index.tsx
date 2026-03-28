import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Shield, Cpu, GraduationCap, Scale,
  Globe, Lock, Eye, ChevronDown, Database,
  Layers, Network, BarChart3, FileText, Link2,
  CheckCircle2, Zap, BookOpen,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Metric Counter ── */
const Metric = ({ value, label, suffix = "", color }: { value: string; label: string; suffix?: string; color?: string }) => (
  <div className="text-center">
    <p className={`text-3xl md:text-4xl font-bold tracking-tight ${color || "text-primary"}`}>
      {value}<span className="text-lg">{suffix}</span>
    </p>
    <p className="text-xs text-muted-foreground mt-1.5 font-medium">{label}</p>
  </div>
);

/* ── Product Card (Azure style) ── */
const ProductCard = ({ num, title, subtitle, desc, icon: Icon, links, delay, accent }: {
  num: string; title: string; subtitle: string; desc: string;
  icon: React.ComponentType<{ className?: string }>;
  links: { label: string; path: string }[];
  delay: number;
  accent: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="group relative">
        <div
          className="relative bg-background border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-foreground/5 rounded-lg"
          style={{ minHeight: "340px" }}
          onClick={() => setExpanded(!expanded)}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onKeyDown={e => e.key === "Enter" && setExpanded(!expanded)}
        >
          {/* Top accent bar */}
          <div className={`h-1 w-full ${accent}`} />

          <div className="relative flex flex-col justify-end h-full p-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted mb-4 w-fit">
              <Icon className="h-3.5 w-3.5 text-primary" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide">{subtitle}</span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight group-hover:text-primary transition-colors duration-300 mb-2">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-5">{desc}</p>

            <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
              <span>{expanded ? "Close" : "Explore"}</span>
              <ArrowRight className={`h-4 w-4 transition-transform duration-300 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
            </div>
          </div>
        </div>

        {/* Expandable links */}
        <div
          className={`overflow-hidden transition-all duration-500 ${expanded ? "max-h-[500px] opacity-100 mt-2" : "max-h-0 opacity-0"}`}
        >
          <div className="border border-border bg-muted/30 rounded-lg p-2 space-y-0.5">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={e => e.stopPropagation()}
                className="flex items-center justify-between px-3 py-2 text-[13px] text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-all duration-200"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-3 w-3 opacity-30" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

/* ── Quick Access Card ── */
const QuickCard = ({ icon: Icon, title, desc, path, delay }: {
  icon: React.ComponentType<{ className?: string }>; title: string; desc: string; path: string; delay: number;
}) => (
  <FadeIn delay={delay}>
    <Link
      to={path}
      className="group flex items-start gap-4 p-5 bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 rounded-lg"
    >
      <div className="w-10 h-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-all duration-300">
        <Icon className="h-4.5 w-4.5 text-primary" />
      </div>
      <div className="min-w-0">
        <h4 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">{title}</h4>
        <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
      </div>
    </Link>
  </FadeIn>
);

/* ══════════════════════ INDEX ══════════════════════ */
const Index = () => {
  const { t } = useLanguage();

  const volumes = [
    {
      num: "I", title: "Framework & Standards", subtitle: "Governance Foundation", icon: Scale, accent: "bg-ms-red",
      desc: "Constitutional backbone — governance principles, international compliance, anti-capture clauses, and institutional trust architecture.",
      links: [
        { label: "Governance Framework", path: "/governance-framework" },
        { label: "OECD Alignment", path: "/oecd-alignment" },
        { label: "World Bank Alignment", path: "/world-bank-alignment" },
        { label: "UN & UNESCO", path: "/un-alignment" },
        { label: "Ethics & Safeguards", path: "/ethics" },
        { label: "Standards Compliance", path: "/compliance" },
        { label: "Risk Mitigation", path: "/risk-mitigation" },
      ],
    },
    {
      num: "II", title: "System & Architecture", subtitle: "Technical Blueprint", icon: Cpu, accent: "bg-ms-blue",
      desc: "Engineering core — six-layer deterministic architecture, append-only records, hash-chain integrity, and deployment infrastructure.",
      links: [
        { label: "System Architecture", path: "/architecture" },
        { label: "DPI Stack Position", path: "/dpi-stack" },
        { label: "Security & Trust", path: "/security-trust" },
        { label: "Interoperability", path: "/interoperability" },
        { label: "Technical Blueprints", path: "/blueprints" },
        { label: "Anchor Chain", path: "/anchor-chain" },
        { label: "Developer Portal", path: "/developer" },
      ],
    },
    {
      num: "III", title: "Academy & Certification", subtitle: "Capacity Building", icon: GraduationCap, accent: "bg-ms-green",
      desc: "Knowledge institute — professional certification, training curricula, institutional readiness, and sovereign deployment pathway.",
      links: [
        { label: "GRGF Academy", path: "/academy" },
        { label: "Institutional Readiness", path: "/readiness" },
        { label: "Pilot Evaluation", path: "/pilot-evaluation" },
        { label: "Impact Modeling", path: "/impact-modeling" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Deployment Planner", path: "/deployment-planner" },
      ],
    },
  ];

  return (
    <div>
      <SEOHead
        title="GRGF — Global Record Governance Framework"
        description="Independent global framework for Digital Public Infrastructure governance. Sovereign-grade institutional memory and trust verification."
      />

      {/* ═══ HERO ═══ */}
      <header className="relative bg-gradient-to-br from-primary via-primary to-[hsl(220,85%,35%)] text-primary-foreground px-6 md:px-12 py-20 md:py-28 overflow-hidden">
        {/* Geometric pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px]" style={{
            background: "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15), transparent 50%)"
          }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px]" style={{
            background: "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.1), transparent 50%)"
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-ms-green animate-pulse" />
              <span className="text-[11px] font-medium text-white/70 tracking-wide">
                Digital Public Infrastructure · Trust Layer
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] max-w-3xl">
              Global Record
              <br />
              Governance Framework
            </h1>
          </FadeIn>

          <FadeIn delay={140}>
            <p className="mt-6 text-base md:text-lg text-white/75 max-w-xl leading-relaxed">
              Sovereign-grade institutional memory and trust verification for digital public infrastructure.
              <span className="text-white font-medium"> It records. It preserves. It verifies.</span>
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <Link
                to="/governance-framework"
                className="apple-button bg-white text-primary px-6 py-2.5 text-sm font-semibold hover:bg-white/90 duration-200 shadow-lg"
              >
                Explore Framework
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/controlled-access"
                className="apple-button bg-white/10 text-white border border-white/20 px-6 py-2.5 text-sm font-semibold hover:bg-white/20 duration-200"
              >
                Request Assessment
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <p className="mt-6 text-[10px] font-mono text-white/30 tracking-wider">
              {t("home.patent")}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ═══ METRICS BAR ═══ */}
      <section className="px-6 md:px-12 -mt-8 relative z-10 pb-16">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 bg-background border border-border rounded-lg shadow-lg px-6">
              <Metric value="6" label="Architecture Layers" suffix="-Layer" color="text-ms-red" />
              <Metric value="126" label="Applications" color="text-ms-blue" />
              <Metric value="$61.7" label="Annual Value" suffix="B" color="text-ms-green" />
              <Metric value="47" label="Standards Aligned" color="text-ms-yellow" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ THREE VOLUMES ═══ */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-2">Products</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-10">
              Governance Trust Architecture
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {volumes.map((v, i) => (
              <ProductCard key={v.num} {...v} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST PILLARS ═══ */}
      <section className="px-6 md:px-12 pb-20 bg-muted/30">
        <div className="max-w-5xl mx-auto py-16">
          <FadeIn>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-2">Compliance</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-10">
              Built for international standards
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: CheckCircle2, title: "OECD · UN · World Bank", desc: "Mapped to international DPI safeguards and governance maturity frameworks", color: "text-ms-blue" },
              { icon: Zap, title: "Deterministic by Design", desc: "Zero discretionary override — every action follows immutable institutional rules", color: "text-ms-red" },
              { icon: Shield, title: "Anti-Capture Architecture", desc: "Five constitutional clauses preventing corporate, political, or insider override", color: "text-ms-green" },
            ].map(({ icon: TIcon, title: tt, desc, color }, i) => (
              <FadeIn key={tt} delay={i * 60}>
                <div className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg hover:shadow-md transition-all duration-300">
                  <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5`}>
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

      {/* ═══ ANCHOR CHAIN — CORE SYSTEM ═══ */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-5xl mx-auto pt-16">
          <FadeIn>
            <Link
              to="/anchor-chain"
              className="group relative block overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 rounded-xl bg-gradient-to-br from-primary/[0.03] to-primary/[0.08]"
            >
              <div className="relative p-8 md:p-12">
                {/* Icon row */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shrink-0 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                    <Link2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                    <span className="text-[11px] font-mono text-success tracking-wider font-medium">ACTIVE</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3">
                  GRGF Anchor Chain<span className="text-primary">™</span>
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
                  The cryptographic governance verification engine — real-time immutable record anchoring,
                  six-layer deterministic architecture, and independent proof-of-existence for every institutional action.
                </p>

                {/* Chain visualization */}
                <div className="flex items-center gap-1.5 mb-8 overflow-hidden">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="flex items-center gap-1.5" style={{ animation: `fade-in 0.4s ease-out ${i * 0.08}s both` }}>
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-md border border-primary/20 bg-primary/5 flex items-center justify-center group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300" style={{ transitionDelay: `${i * 40}ms` }}>
                        <span className="text-[9px] font-mono text-primary/70">#{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      {i < 7 && <div className="w-4 h-px bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300" />}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { tag: "SHA-256 Hash Chain", color: "text-ms-red bg-ms-red/5 border-ms-red/15" },
                    { tag: "X.509 Authority", color: "text-ms-blue bg-ms-blue/5 border-ms-blue/15" },
                    { tag: "Zero-Knowledge Proofs", color: "text-ms-green bg-ms-green/5 border-ms-green/15" },
                    { tag: "Append-Only", color: "text-ms-yellow bg-ms-yellow/5 border-ms-yellow/15" },
                    { tag: "Federation Protocol", color: "text-primary bg-primary/5 border-primary/15" },
                    { tag: "Post-Quantum Ready", color: "text-muted-foreground bg-muted border-border" },
                  ].map(({ tag, color }) => (
                    <span key={tag} className={`px-3 py-1 text-[10px] font-mono border rounded-md tracking-wider ${color}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all duration-300">
                  <span className="text-sm font-semibold">Enter the Anchor Chain</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ QUICK ACCESS ═══ */}
      <section className="px-6 md:px-12 pb-20 bg-muted/20">
        <div className="max-w-5xl mx-auto py-16">
          <FadeIn>
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.1em] mb-2">Resources</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight mb-8">
              Tools & Resources
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <QuickCard icon={BarChart3} title="Impact Modeling" desc="Fiscal projections and ROI analysis" path="/impact-modeling" delay={0} />
            <QuickCard icon={Database} title="Smart Archive" desc="Trilingual institutional repository" path="/archive/intelligent" delay={60} />
            <QuickCard icon={Globe} title="Submission Hub" desc="OECD, World Bank, UN packages" path="/submission-hub" delay={120} />
            <QuickCard icon={FileText} title="Downloads" desc="Publications and documentation" path="/archive/downloads" delay={180} />
            <QuickCard icon={Lock} title="Controlled Access" desc="Institutional verification portal" path="/controlled-access" delay={240} />
            <QuickCard icon={BookOpen} title="GRGF Academy" desc="Training and certification programs" path="/academy" delay={300} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;