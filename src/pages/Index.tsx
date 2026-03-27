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
const Metric = ({ value, label, suffix = "" }: { value: string; label: string; suffix?: string }) => (
  <div className="text-center group">
    <p className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-accent transition-colors duration-500">
      {value}<span className="text-accent/60 text-xl">{suffix}</span>
    </p>
    <p className="text-[11px] text-muted-foreground/30 mt-1.5 tracking-wide uppercase font-medium">{label}</p>
  </div>
);

/* ── Volume Card (Apple product card style) ── */
const VolumeCard = ({ num, title, subtitle, desc, icon: Icon, links, delay }: {
  num: string; title: string; subtitle: string; desc: string;
  icon: React.ComponentType<{ className?: string }>;
  links: { label: string; path: string }[];
  delay: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div className="group relative">
        <div
          className="relative border border-border/15 bg-card/30 overflow-hidden cursor-pointer transition-all duration-700 hover:border-accent/15 hover:bg-card/50"
          style={{ borderRadius: "20px", minHeight: "380px" }}
          onClick={() => setExpanded(!expanded)}
          role="button"
          tabIndex={0}
          aria-expanded={expanded}
          onKeyDown={e => e.key === "Enter" && setExpanded(!expanded)}
        >
          {/* Volume number watermark */}
          <div className="absolute top-6 right-8 text-[100px] font-black text-foreground/[0.02] leading-none select-none">
            {num}
          </div>

          <div className="relative flex flex-col justify-end h-full p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10 mb-5 w-fit">
              <Icon className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-medium text-muted-foreground/50 tracking-wide">{subtitle}</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.1] group-hover:text-accent transition-colors duration-500 mb-3">
              {title}
            </h3>
            <p className="text-[14px] text-muted-foreground/40 leading-[1.7] max-w-sm mb-6">{desc}</p>

            <div className="flex items-center gap-2 text-accent text-[14px] font-semibold group-hover:gap-3 transition-all duration-500">
              <span>{expanded ? "Close" : "Explore"}</span>
              <ArrowRight className={`h-4 w-4 transition-transform duration-500 ${expanded ? "rotate-90" : "group-hover:translate-x-1"}`} />
            </div>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"
            style={{ background: "linear-gradient(90deg, hsl(var(--accent)), transparent)" }}
          />
        </div>

        {/* Expandable chapters */}
        <div
          className={`overflow-hidden transition-all duration-700 ${expanded ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="border border-border/10 bg-card/20 p-4 space-y-0.5" style={{ borderRadius: "14px" }}>
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={e => e.stopPropagation()}
                className="flex items-center justify-between px-3 py-2.5 text-[13px] text-muted-foreground/50 hover:text-accent hover:bg-accent/5 rounded-lg transition-all duration-200"
              >
                <span>{link.label}</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-40" />
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
      className="group flex items-start gap-4 p-5 border border-border/10 bg-card/15 hover:bg-card/40 hover:border-accent/15 transition-all duration-500"
      style={{ borderRadius: "14px" }}
    >
      <div className="w-9 h-9 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-all duration-300">
        <Icon className="h-4 w-4 text-accent/70" />
      </div>
      <div className="min-w-0">
        <h4 className="text-[14px] font-semibold tracking-tight group-hover:text-accent transition-colors duration-300">{title}</h4>
        <p className="text-[12px] text-muted-foreground/35 leading-relaxed mt-0.5">{desc}</p>
      </div>
    </Link>
  </FadeIn>
);

/* ══════════════════════ INDEX ══════════════════════ */
const Index = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.bottom > 0) setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const volumes = [
    {
      num: "I", title: "Framework & Standards", subtitle: "Governance Foundation", icon: Scale,
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
      num: "II", title: "System & Architecture", subtitle: "Technical Blueprint", icon: Cpu,
      desc: "Engineering core — six-layer deterministic architecture, append-only records, hash-chain integrity, and deployment infrastructure.",
      links: [
        { label: "System Architecture", path: "/architecture" },
        { label: "DPI Stack Position", path: "/dpi-stack" },
        { label: "Security & Trust", path: "/security-trust" },
        { label: "Interoperability", path: "/interoperability" },
        { label: "Technical Blueprints", path: "/blueprints" },
        { label: "Developer Portal", path: "/developer" },
        { label: "Anchor Chain", path: "/anchor-chain" },
        { label: "Developer Portal", path: "/developer" },
      ],
    },
    {
      num: "III", title: "Academy & Certification", subtitle: "Capacity Building", icon: GraduationCap,
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
      <header ref={heroRef} className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-6 md:px-12">
        {/* Ambient light */}
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.03] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 50%)", transform: `translateY(${scrollY * 0.12}px)` }} />
        <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.02] will-change-transform"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)), transparent 50%)", transform: `translateY(${scrollY * -0.08}px)` }} />

        <div className="relative text-center max-w-4xl mx-auto will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.1}px)`, opacity: Math.max(0, 1 - scrollY * 0.0012) }}>

          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/[0.03] border border-foreground/[0.06] mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground/35 tracking-wide">
                Digital Public Infrastructure · Trust Layer
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={60}>
            <h1 className="display-massive" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>
              <span className="text-foreground/20">The</span>{" "}
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">Global Record</span>
              <br />
              <span className="text-foreground">Governance Framework</span>
            </h1>
          </FadeIn>

          <FadeIn delay={140}>
            <p className="mt-8 text-[16px] md:text-[18px] text-muted-foreground/40 max-w-xl mx-auto leading-[1.75] tracking-tight">
              Sovereign-grade institutional memory and trust verification for digital public infrastructure.
              <em className="text-accent/50 not-italic font-medium"> It records. It preserves. It verifies.</em>
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/governance-framework"
                className="apple-button bg-accent text-accent-foreground px-6 py-2.5 text-[14px] hover:brightness-110 hover:shadow-lg hover:shadow-accent/15 duration-500"
              >
                Explore Framework
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/controlled-access"
                className="apple-button bg-foreground/[0.05] text-foreground/70 border border-foreground/[0.08] px-6 py-2.5 text-[14px] hover:bg-foreground/[0.1] duration-500"
              >
                Request Assessment
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={260}>
            <p className="mt-5 text-[9px] font-mono text-muted-foreground/15 tracking-wider">
              {t("home.patent")}
            </p>
          </FadeIn>

          <FadeIn delay={350}>
            <div className="mt-14 flex items-center justify-center gap-2 text-muted-foreground/15 animate-bounce">
              <ChevronDown className="h-4 w-4" />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══ METRICS BAR ═══ */}
      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border border-border/10 bg-card/15" style={{ borderRadius: "16px" }}>
              <Metric value="6" label="Architecture Layers" suffix="-Layer" />
              <Metric value="126" label="Applications" />
              <Metric value="$61.7" label="Annual Value" suffix="B" />
              <Metric value="47" label="Standards Aligned" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ THREE VOLUMES ═══ */}
      <section className="px-5 md:px-10 lg:px-14 pb-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] font-medium text-muted-foreground/20 uppercase tracking-[0.12em] mb-3">Three Volumes</p>
            <h2 className="text-[28px] md:text-[40px] font-bold tracking-tight leading-[1.05] mb-12">
              Governance{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Trust Architecture</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5">
            {volumes.map((v, i) => (
              <VolumeCard key={v.num} {...v} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST PILLARS ═══ */}
      <section className="px-5 md:px-10 lg:px-14 pb-24">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: CheckCircle2, title: "OECD · UN · World Bank", desc: "Mapped to international DPI safeguards and governance maturity frameworks" },
                { icon: Zap, title: "Deterministic by Design", desc: "Zero discretionary override — every action follows immutable institutional rules" },
                { icon: Shield, title: "Anti-Capture Architecture", desc: "Five constitutional clauses preventing corporate, political, or insider override" },
              ].map(({ icon: TIcon, title: tt, desc }, i) => (
                <FadeIn key={tt} delay={i * 80}>
                  <div className="flex items-start gap-4 p-5 border border-border/10 bg-card/15 hover:bg-card/30 transition-all duration-500" style={{ borderRadius: "14px" }}>
                    <div className="w-8 h-8 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <TIcon className="h-3.5 w-3.5 text-accent/60" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-semibold tracking-tight mb-1">{tt}</h4>
                      <p className="text-[12px] text-muted-foreground/35 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ ANCHOR CHAIN — CORE SYSTEM ═══ */}
      <section className="px-5 md:px-10 lg:px-14 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <Link
              to="/anchor-chain"
              className="group relative block overflow-hidden border border-border/20 bg-gradient-to-br from-primary/5 via-card/30 to-secondary/5 hover:border-primary/30 transition-all duration-700"
              style={{ borderRadius: "24px" }}
            >
              <div className="absolute top-6 right-8 text-[120px] font-black text-primary/[0.03] leading-none select-none">⛓</div>
              <div className="relative p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-all duration-500">
                  <Link2 className="h-7 w-7 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] font-mono text-primary/60 uppercase tracking-[0.15em] mb-1">Core System</p>
                  <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight leading-[1.1] mb-2 group-hover:text-primary transition-colors duration-500">
                    GRGF Anchor Chain™
                  </h2>
                  <p className="text-[14px] text-muted-foreground/50 leading-relaxed max-w-xl">
                    The cryptographic governance verification engine — real-time immutable record anchoring, 
                    six-layer deterministic architecture, and independent proof-of-existence for every institutional action.
                  </p>
                </div>
                <ArrowRight className="h-5 w-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all duration-500 shrink-0" />
              </div>
              <div className="px-8 md:px-12 pb-8 flex flex-wrap gap-2">
                {["SHA-256 Hash Chain", "X.509 Authority", "Zero-Knowledge Proofs", "Append-Only", "Federation Protocol"].map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-mono text-primary/50 bg-primary/5 border border-primary/10 rounded-full tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ═══ QUICK ACCESS ═══ */}
      <section className="px-5 md:px-10 lg:px-14 pb-28">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <p className="text-[11px] font-medium text-muted-foreground/20 uppercase tracking-[0.12em] mb-3">Quick Access</p>
            <h2 className="text-[24px] md:text-[32px] font-bold tracking-tight leading-[1.1] mb-8">
              Tools & Resources
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <QuickCard icon={BarChart3} title="Impact Modeling" desc="Fiscal projections and ROI analysis" path="/impact-modeling" delay={0} />
            <QuickCard icon={Database} title="Smart Archive" desc="Trilingual institutional repository" path="/archive/intelligent" delay={60} />
            <QuickCard icon={Globe} title="Submission Hub" desc="OECD, World Bank, UN packages" path="/submission-hub" delay={120} />
            <QuickCard icon={FileText} title="Downloads" desc="Publications and documentation" path="/archive/downloads" delay={180} />
            <QuickCard icon={Lock} title="Controlled Access" desc="Institutional verification portal" path="/controlled-access" delay={240} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
