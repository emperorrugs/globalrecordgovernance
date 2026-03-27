import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, Shield, Cpu, GraduationCap, ArrowRight,
  Layers, Lock, Globe, Award, Scale, Network,
  Database, FileText, Eye, Landmark, ChevronDown,
} from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Door Card ── */
interface DoorProps {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentVar: string;
  links: { label: string; path: string; icon: React.ComponentType<{ className?: string }> }[];
  delay: number;
}

const DoorCard = ({ number, title, subtitle, description, icon: Icon, accentVar, links, delay }: DoorProps) => {
  const [open, setOpen] = useState(false);

  return (
    <FadeIn delay={delay}>
      <div
        className="group relative flex flex-col h-full cursor-pointer"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
        role="button"
        tabIndex={0}
        aria-expanded={open}
      >
        {/* Main Door */}
        <div className="relative flex-1 border border-border/30 rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/10"
          style={{ minHeight: "420px" }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{ background: `radial-gradient(ellipse at 50% 80%, hsl(var(${accentVar}) / 0.08), transparent 70%)` }}
          />

          {/* Grain overlay */}
          <div className="absolute inset-0 grain opacity-30" />

          {/* Volume number */}
          <div className="absolute top-6 left-7">
            <span className="text-[11px] font-mono text-muted-foreground/25 uppercase tracking-[0.15em]">Volume</span>
            <p className="text-6xl font-black text-foreground/[0.04] leading-none -mt-1">{number}</p>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-7 pt-28">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/30 bg-card/50 mb-5">
                <Icon className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.1em]">{subtitle}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-[1.1] group-hover:text-accent transition-colors duration-500">
                {title}
              </h3>
            </div>
            <p className="text-sm text-muted-foreground/60 leading-relaxed mb-6 max-w-sm">
              {description}
            </p>

            {/* Enter Button */}
            <div className="flex items-center gap-2 text-accent text-sm font-semibold group-hover:gap-3 transition-all duration-300">
              <span>Open Volume</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700"
              style={{ background: `linear-gradient(90deg, hsl(var(${accentVar})), transparent)` }}
            />
          </div>
        </div>

        {/* Expanded chapter list */}
        <div className={`overflow-hidden transition-all duration-500 ${open ? "max-h-[600px] opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}>
          <div className="border border-border/20 rounded-xl bg-card/40 p-4 space-y-1">
            <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.12em] px-2 pb-2">Chapters</p>
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground/70 hover:text-accent hover:bg-accent/5 transition-all duration-200"
              >
                <link.icon className="h-3.5 w-3.5 shrink-0" />
                <span>{link.label}</span>
                <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-40" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

/* ══════════════════════════════════════════ INDEX ══════════════════════════════════════════ */
const Index = () => {
  const { t } = useLanguage();

  const doors: DoorProps[] = [
    {
      number: "I",
      title: "Framework & Standards",
      subtitle: "Governance Foundation",
      description: "The constitutional backbone — governance principles, international compliance mappings, anti-capture clauses, and the institutional trust architecture that underpins sovereign digital infrastructure.",
      icon: Scale,
      accentVar: "--accent",
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
      description: "The engineering core — six-layer deterministic architecture, append-only record backbone, hash-chain integrity, DPI stack positioning, interoperability protocols, and deployment scenarios.",
      icon: Cpu,
      accentVar: "--accent",
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
      description: "The knowledge institute — professional certification tiers, training curricula, institutional readiness assessments, pilot evaluation frameworks, and the sovereign deployment pathway.",
      icon: GraduationCap,
      accentVar: "--accent",
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

      {/* ═══════════════ BOOK COVER — Full Viewport ═══════════════ */}
      <header className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden px-5 md:px-10">
        {/* Background layers */}
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(90deg, hsl(var(--accent)) 0px, transparent 1px, transparent 160px),
                            repeating-linear-gradient(0deg, hsl(var(--accent)) 0px, transparent 1px, transparent 160px)`
        }} />
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 50%)" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(var(--sovereign-green)), transparent 50%)" }} />

        {/* Title Block */}
        <div className="relative text-center max-w-4xl mx-auto">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/20 bg-card/30 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
              <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-[0.15em]">Digital Public Infrastructure · Standards Authority</span>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <h1 className="display-massive" style={{ fontSize: "clamp(2.4rem, 7vw, 5.5rem)" }}>
              <span className="text-foreground/30">The</span>
              <br />
              <span className="text-accent">Global Record</span>
              <br />
              <span className="text-foreground">Governance</span>
              <br />
              <span className="text-foreground/30">Framework</span>
            </h1>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="mt-8 text-body-lg text-muted-foreground/50 max-w-xl mx-auto leading-relaxed">
              An independent institutional memory and trust verification layer for sovereign digital systems.
              <em className="text-accent/60"> It records. It preserves. It verifies.</em>
            </p>
          </FadeIn>

          <FadeIn delay={220}>
            <p className="mt-4 text-[10px] font-mono text-muted-foreground/20 tracking-wider">
              {t("home.patent")}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="mt-12 flex items-center justify-center gap-2 text-muted-foreground/20 animate-float">
              <ChevronDown className="h-4 w-4" />
              <span className="text-[10px] font-mono uppercase tracking-[0.15em]">Three Volumes</span>
              <ChevronDown className="h-4 w-4" />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ═══════════════ THREE DOORS ═══════════════ */}
      <section className="relative px-5 md:px-10 lg:px-16 py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.15em] mb-3">Select a Volume</p>
              <h2 className="text-heading-1 md:text-display font-extrabold tracking-tight">
                Three Doors to <span className="text-accent">Governance Trust</span>
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

      {/* ═══════════════ QUICK STATS STRIP ═══════════════ */}
      <section className="px-5 md:px-10 lg:px-16 pb-20">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-border/20 rounded-lg overflow-hidden">
              {[
                { label: "Determinism", value: "100%" },
                { label: "Audit Speed", value: "<30 min" },
                { label: "Architecture", value: "6-Layer" },
                { label: "Certification", value: "3-Tier" },
                { label: "Anti-Capture", value: "5 Clauses" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-card/40 p-5 text-center group hover:bg-card/60 transition-colors duration-200">
                  <p className="text-xl md:text-2xl font-extrabold text-accent group-hover:text-foreground transition-colors duration-200">{value}</p>
                  <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.08em] mt-1">{label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════════ ADDITIONAL RESOURCES ═══════════════ */}
      <section className="px-5 md:px-10 lg:px-16 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="border border-border/20 rounded-xl bg-card/20 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.15em] mb-3">Beyond the Volumes</p>
                  <h3 className="text-heading-2 font-extrabold tracking-tight mb-4">
                    Digital Archive & Resources
                  </h3>
                  <p className="text-sm text-muted-foreground/50 leading-relaxed">
                    Access the complete institutional archive — publications, research papers, deployment templates, submission packages, and controlled-access institutional documents.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2">
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
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg border border-border/20 text-sm text-muted-foreground/60 hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                    >
                      <LIcon className="h-3.5 w-3.5 shrink-0" />
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
