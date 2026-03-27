import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, Shield, Cpu, GraduationCap, ArrowRight,
  Layers, Lock, Globe, Award, Scale, Network,
  Database, FileText, Eye, Landmark, ChevronDown,
  Sparkles, Zap, CheckCircle2,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Door Card (Apple-style interactive volume) ── */
interface DoorProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  links: { label: string; path: string; icon: React.ComponentType<{ className?: string }> }[];
  delay: number;
}

const DoorCard = ({ number, title, subtitle, description, icon: Icon, gradient, links, delay }: DoorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div
        className="group relative flex flex-col h-full"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
      >
        {/* Main Door */}
        <div
          className="relative flex-1 border border-border/20 overflow-hidden transition-all duration-700 cursor-pointer hover:border-foreground/10"
          style={{ minHeight: "460px", borderRadius: "20px" }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
            style={{ background: gradient }}
          />

          {/* Subtle grain */}
          <div className="absolute inset-0 grain opacity-20" />

          {/* Volume watermark */}
          <div className="absolute top-8 right-8">
            <p className="text-[120px] font-black text-foreground/[0.025] leading-none select-none">{number}</p>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-8 md:p-10">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-foreground/[0.04] border border-foreground/[0.06] mb-6">
                <Icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] font-medium text-muted-foreground/60 tracking-wide">{subtitle}</span>
              </div>
              <h3 className="text-[28px] md:text-[34px] font-bold tracking-tight leading-[1.05] group-hover:text-accent transition-colors duration-700">
                {title}
              </h3>
            </div>
            <p className="text-[15px] text-muted-foreground/50 leading-[1.65] mb-8 max-w-[360px]">
              {description}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2.5 text-accent text-[15px] font-semibold group-hover:gap-4 transition-all duration-500">
              <span>Explore Volume</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-500" />
            </div>

            {/* Bottom accent */}
            <div
              className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-1000"
              style={{ background: "linear-gradient(90deg, hsl(var(--accent)), transparent)" }}
            />
          </div>
        </div>

        {/* Chapter list */}
        <div className={`overflow-hidden transition-all duration-700 ${open ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"}`}
          style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
        >
          <div className="border border-border/15 bg-card/30 p-5 space-y-0.5" style={{ borderRadius: "16px" }}>
            <p className="text-[11px] font-medium text-muted-foreground/30 uppercase tracking-[0.1em] px-3 pb-3">Chapters</p>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-3 px-3 py-2.5 text-[14px] text-muted-foreground/60 hover:text-accent hover:bg-accent/[0.04] transition-all duration-300"
                style={{ borderRadius: "10px" }}
              >
                <link.icon className="h-4 w-4 shrink-0 opacity-60" />
                <span>{link.label}</span>
                <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-30 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

/* ── Stat Pill ── */
const StatPill = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center px-5 py-6 group">
    <p className="text-2xl md:text-3xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-500">{value}</p>
    <p className="text-[11px] font-medium text-muted-foreground/35 uppercase tracking-[0.06em] mt-1.5">{label}</p>
  </div>
);

/* ══════════════════════════════════════════ INDEX ══════════════════════════════════════════ */
const Index = () => {
  const { t } = useLanguage();

  const doors: DoorProps[] = [
    {
      number: "I",
      title: "Framework & Standards",
      subtitle: "Governance Foundation",
      description: "The constitutional backbone — governance principles, international compliance, anti-capture clauses, and the institutional trust architecture for sovereign digital infrastructure.",
      icon: Scale,
      gradient: "radial-gradient(ellipse at 30% 100%, hsl(195 100% 50% / 0.06), transparent 60%)",
      delay: 100,
      links: [
        { label: "Governance Framework", path: "/governance-framework", icon: Landmark },
        { label: "The Problem", path: "/the-problem", icon: Eye },
        { label: "OECD Alignment", path: "/oecd-alignment", icon: Globe },
        { label: "World Bank Alignment", path: "/world-bank-alignment", icon: Landmark },
        { label: "UN & UNESCO Alignment", path: "/un-alignment", icon: Globe },
        { label: "International Compliance", path: "/international-compliance", icon: Shield },
        { label: "Ethics & Safeguards", path: "/ethics", icon: Scale },
        { label: "Standards Compliance", path: "/compliance", icon: FileText },
        { label: "Risk Mitigation", path: "/risk-mitigation", icon: Shield },
        { label: "Recognition & IP", path: "/recognition", icon: Award },
      ],
    },
    {
      number: "II",
      title: "System & Architecture",
      subtitle: "Technical Blueprint",
      description: "The engineering core — six-layer deterministic architecture, append-only records, hash-chain integrity, DPI stack positioning, and deployment scenarios.",
      icon: Cpu,
      gradient: "radial-gradient(ellipse at 50% 100%, hsl(211 100% 50% / 0.06), transparent 60%)",
      delay: 200,
      links: [
        { label: "System Architecture", path: "/architecture", icon: Cpu },
        { label: "DPI Stack Position", path: "/dpi-stack", icon: Layers },
        { label: "Security & Trust", path: "/security-trust", icon: Lock },
        { label: "Interoperability", path: "/interoperability", icon: Network },
        { label: "Scalability", path: "/scalability", icon: Database },
        { label: "Deployment Scenarios", path: "/deployment-scenarios", icon: Globe },
        { label: "Technical Blueprints", path: "/blueprints", icon: FileText },
        { label: "Developer Portal", path: "/developer", icon: Cpu },
        { label: "Simulation Engine", path: "/simulation", icon: Cpu },
        { label: "Stress Test", path: "/stress-test", icon: Shield },
      ],
    },
    {
      number: "III",
      title: "Academy & Certification",
      subtitle: "Capacity Building",
      description: "The knowledge institute — professional certification, training curricula, institutional readiness, pilot evaluation, and the sovereign deployment pathway.",
      icon: GraduationCap,
      gradient: "radial-gradient(ellipse at 70% 100%, hsl(160 70% 42% / 0.06), transparent 60%)",
      delay: 300,
      links: [
        { label: "GRGF Academy", path: "/academy", icon: GraduationCap },
        { label: "Institutional Readiness", path: "/readiness", icon: Award },
        { label: "Pilot Evaluation", path: "/pilot-evaluation", icon: FileText },
        { label: "Deployment Planner", path: "/deployment-planner", icon: Globe },
        { label: "Maturity Assessment", path: "/maturity", icon: Layers },
        { label: "Impact Modeling", path: "/impact-modeling", icon: BookOpen },
        { label: "Financial Model", path: "/financial-model", icon: FileText },
        { label: "Executive Brief", path: "/executive-brief", icon: FileText },
        { label: "Case Studies", path: "/case-studies", icon: BookOpen },
        { label: "Sovereign Deployment", path: "/sovereign-deployment", icon: Landmark },
      ],
    },
  ];

  return (
    <div>
      <SEOHead
        title="GRGF — Global Record Governance Framework | Digital Public Infrastructure"
        description="Independent global framework for Digital Public Infrastructure governance. Three volumes: Framework & Standards, System & Architecture, Academy & Certification."
      />

      {/* ═══════════════ HERO — Apple Keynote Style ═══════════════ */}
      <header className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-6 md:px-12">
        {/* Background ambient orbs */}
        <div className="absolute top-[-30%] right-[-15%] w-[800px] h-[800px] rounded-full opacity-[0.035]"
          style={{ background: "radial-gradient(circle, hsl(195 100% 50%), transparent 50%)" }} />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.025]"
          style={{ background: "radial-gradient(circle, hsl(160 70% 42%), transparent 50%)" }} />
        <div className="absolute top-[40%] left-[50%] w-[400px] h-[400px] rounded-full opacity-[0.02] -translate-x-1/2"
          style={{ background: "radial-gradient(circle, hsl(211 100% 50%), transparent 50%)" }} />

        {/* Title */}
        <div className="relative text-center max-w-5xl mx-auto">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-foreground/[0.03] border border-foreground/[0.06] mb-10">
              <div className="w-2 h-2 rounded-full bg-accent/60 animate-pulse-glow" />
              <span className="text-[11px] font-medium text-muted-foreground/40 tracking-wide">Digital Public Infrastructure · Standards Authority</span>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="display-massive" style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}>
              <span className="text-foreground/25">The</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Global Record</span>
              <br />
              <span className="text-foreground">Governance</span>
              <br />
              <span className="text-foreground/20">Framework</span>
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="mt-10 text-[17px] md:text-[19px] text-muted-foreground/45 max-w-2xl mx-auto leading-[1.7] tracking-tight">
              An independent institutional memory and trust verification layer for sovereign digital systems.
              <em className="text-accent/50 not-italic font-medium"> It records. It preserves. It verifies.</em>
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/governance-framework"
                className="apple-button bg-accent text-accent-foreground px-7 py-3 text-[15px] hover:brightness-110 hover:shadow-lg hover:shadow-accent/15 duration-500"
              >
                <Sparkles className="h-4 w-4" />
                Explore Framework
              </Link>
              <Link
                to="/controlled-access"
                className="apple-button bg-foreground/[0.06] text-foreground/80 border border-foreground/[0.08] px-7 py-3 text-[15px] hover:bg-foreground/[0.1] duration-500"
              >
                Request Assessment
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <p className="mt-6 text-[10px] font-mono text-muted-foreground/15 tracking-wider">
              {t("home.patent")}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground/15 animate-float">
              <ChevronDown className="h-4 w-4" />
              <span className="text-[11px] font-medium uppercase tracking-[0.12em]">Three Volumes</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══════════════ THREE VOLUMES ═══════════════ */}
      <section className="relative px-5 md:px-10 lg:px-16 py-24 md:py-36">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-[11px] font-medium text-muted-foreground/25 uppercase tracking-[0.12em] mb-4">Select a Volume</p>
              <h2 className="text-[32px] md:text-[48px] font-bold tracking-tight leading-[1.05]">
                Three Doors to{" "}
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Governance Trust</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {doors.map((door) => (
              <DoorCard key={door.number} {...door} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS STRIP ═══════════════ */}
      <section className="px-5 md:px-10 lg:px-16 pb-24">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div
              className="grid grid-cols-2 md:grid-cols-5 border border-border/15 overflow-hidden"
              style={{ borderRadius: "16px" }}
            >
              {[
                { label: "Determinism", value: "100%" },
                { label: "Audit Speed", value: "<30 min" },
                { label: "Architecture", value: "6-Layer" },
                { label: "Certification", value: "3-Tier" },
                { label: "Anti-Capture", value: "5 Clauses" },
              ].map(({ label, value }, i) => (
                <div key={label} className={`${i > 0 ? "border-l border-border/10" : ""} ${i >= 2 ? "max-md:border-t max-md:border-border/10" : ""}`}>
                  <StatPill value={value} label={label} />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ TRUST INDICATORS ═══════════════ */}
      <section className="px-5 md:px-10 lg:px-16 pb-24">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: CheckCircle2, title: "OECD · UN · World Bank Aligned", desc: "Mapped to international DPI safeguards and governance maturity frameworks" },
                { icon: Zap, title: "Deterministic by Design", desc: "Zero discretionary override — every record action follows immutable institutional rules" },
                { icon: Shield, title: "Anti-Capture Architecture", desc: "Five constitutional clauses preventing corporate, political, or insider override" },
              ].map(({ icon: TIcon, title: tTitle, desc }) => (
                <div
                  key={tTitle}
                  className="flex items-start gap-4 p-6 border border-border/10 bg-card/20 hover:bg-card/40 transition-all duration-500"
                  style={{ borderRadius: "16px" }}
                >
                  <div className="mt-0.5 w-9 h-9 rounded-full bg-accent/[0.06] border border-accent/10 flex items-center justify-center shrink-0">
                    <TIcon className="h-4 w-4 text-accent/70" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold tracking-tight mb-1">{tTitle}</h4>
                    <p className="text-[13px] text-muted-foreground/40 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ RESOURCES ═══════════════ */}
      <section className="px-5 md:px-10 lg:px-16 pb-28">
        <div className="max-w-[1440px] mx-auto">
          <FadeIn>
            <div
              className="border border-border/15 bg-card/15 p-8 md:p-14"
              style={{ borderRadius: "20px" }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-[11px] font-medium text-muted-foreground/25 uppercase tracking-[0.12em] mb-4">Beyond the Volumes</p>
                  <h3 className="text-[26px] md:text-[32px] font-bold tracking-tight leading-[1.1] mb-5">
                    Digital Archive & Resources
                  </h3>
                  <p className="text-[15px] text-muted-foreground/40 leading-[1.7]">
                    Access the complete institutional archive — publications, research papers, deployment templates, submission packages, and controlled-access institutional documents.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "Archive", path: "/archive", icon: BookOpen },
                    { label: "Downloads", path: "/archive/downloads", icon: FileText },
                    { label: "Submission Hub", path: "/submission-hub", icon: Globe },
                    { label: "Insights", path: "/insights", icon: Eye },
                    { label: "Research", path: "/research", icon: BookOpen },
                    { label: "Controlled Access", path: "/controlled-access", icon: Lock },
                  ].map(({ label, path, icon: LIcon }) => (
                    <Link
                      key={path}
                      to={path}
                      className="flex items-center gap-2.5 px-4 py-3 border border-border/10 text-[14px] text-muted-foreground/50 hover:text-accent hover:border-accent/20 hover:bg-accent/[0.03] transition-all duration-300"
                      style={{ borderRadius: "12px" }}
                    >
                      <LIcon className="h-4 w-4 shrink-0 opacity-50" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Index;
