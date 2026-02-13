import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, BarChart3, Users, Landmark, Scale, Database, Eye, Heart, Leaf, Lock, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const frameworks = [
  {
    org: "OECD",
    title: "Digital Government & DPI Safeguards",
    icon: Scale,
    items: [
      { name: "DPI Safeguards Scorecard", path: "/oecd-safeguards", status: "Interactive" },
      { name: "OECD Alignment", path: "/oecd-alignment", status: "Documented" },
      { name: "Open Standards Declaration", path: "/open-standards", status: "Published" },
    ],
    color: "border-l-accent",
  },
  {
    org: "World Bank",
    title: "GovTech Maturity & Digital Development",
    icon: Landmark,
    items: [
      { name: "GovTech Maturity Mapping", path: "/world-bank-alignment", status: "Documented" },
      { name: "Digital Development Principles", path: "/world-bank-alignment", status: "Aligned" },
      { name: "Value for Development Finance", path: "/world-bank-alignment", status: "Modeled" },
    ],
    color: "border-l-accent/80",
  },
  {
    org: "United Nations",
    title: "SDGs, Digital Public Goods, EGDI",
    icon: Globe,
    items: [
      { name: "SDG Impact Assessment", path: "/un-alignment", status: "11 SDGs Mapped" },
      { name: "DPG Standard Compliance", path: "/un-alignment", status: "8/9 Met" },
      { name: "Digital Cooperation Roadmap", path: "/un-alignment", status: "Aligned" },
    ],
    color: "border-l-accent/60",
  },
  {
    org: "G20",
    title: "DPI Framework & Co-Develop",
    icon: Users,
    items: [
      { name: "G20 DPI Principles", path: "/g20-dpi-framework", status: "Full Alignment" },
      { name: "Layer 3 Stack Position", path: "/g20-dpi-framework", status: "Defined" },
      { name: "India Stack Comparison", path: "/g20-dpi-framework", status: "Published" },
    ],
    color: "border-l-accent/40",
  },
  {
    org: "ITU & Regional",
    title: "Telecom Standards & Regional Bodies",
    icon: Database,
    items: [
      { name: "ITU-T Standard Alignment", path: "/itu-global-standards", status: "5 Standards" },
      { name: "Regional Framework Mapping", path: "/itu-global-standards", status: "6 Regions" },
      { name: "WSIS+20 Action Lines", path: "/itu-global-standards", status: "Aligned" },
    ],
    color: "border-l-accent/30",
  },
  {
    org: "UNESCO",
    title: "ROAM-X, AI Ethics, Information Preservation",
    icon: BookOpen,
    items: [
      { name: "ROAM-X Indicators", path: "/unesco-alignment", status: "5 Pillars" },
      { name: "AI Ethics Recommendation", path: "/unesco-alignment", status: "8/8 Aligned" },
      { name: "Information Preservation", path: "/unesco-alignment", status: "IFAP Aligned" },
    ],
    color: "border-l-accent/20",
  },
];

const crossCutting = [
  { area: "Human Rights", path: "/human-rights-impact", icon: Heart, status: "HRIA Published" },
  { area: "Risk Transparency", path: "/risk-register", icon: Shield, status: "10 Risks Disclosed" },
  { area: "Environmental", path: "/sustainability", icon: Leaf, status: "Carbon Statement" },
  { area: "Stakeholder Engagement", path: "/stakeholder-consultation", icon: Users, status: "3 Consultations" },
  { area: "Open Standards", path: "/open-standards", icon: Database, status: "API Published" },
  { area: "Privacy & Security", path: "/privacy-policy", icon: Lock, status: "GDPR/PIPEDA/CCPA" },
];

const InternationalCompliance = () => (
  <div className="animate-fade-in">
    <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">International Compliance Hub</p>
        <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
          Multilateral Institutional Alignment
        </h1>
        <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
          Comprehensive compliance dashboard mapping GRGF capabilities across all major international governance frameworks — OECD, World Bank, United Nations, G20, ITU, and regional digital governance bodies.
        </p>
      </div>
    </header>

    {/* Compliance Stats */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Compliance Overview</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
          {[
            { end: 6, suffix: "", label: "International Bodies" },
            { end: 11, suffix: "", label: "SDGs Aligned" },
            { end: 8, suffix: "", label: "ISO Standards" },
            { end: 6, suffix: "", label: "Regional Frameworks" },
            { end: 9, suffix: "/9", label: "DPG Criteria Met" },
          ].map(({ end, suffix, label }) => (
            <div key={label} className="governance-card-elevated text-center group hover:border-accent/30 transition-all">
              <p className="text-2xl font-serif font-bold text-accent group-hover:scale-110 transition-transform">
                <AnimatedCounter end={end} suffix={suffix} />
              </p>
              <p className="text-overline text-muted-foreground/50 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Framework Cards */}
    <Sec className="border-b border-border bg-muted/40">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">By Organization</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Institutional Framework Alignment</h2>
        <div className="space-y-5">
          {frameworks.map((f, i) => (
            <FadeIn key={f.org} delay={i * 80}>
              <div className={`governance-card-elevated border-l-4 ${f.color} hover:shadow-lg transition-all`}>
                <div className="flex items-center gap-3 mb-4">
                  <f.icon className="h-5 w-5 text-accent" />
                  <div>
                    <h3 className="font-serif text-heading-3 font-semibold">{f.org}</h3>
                    <p className="text-caption text-muted-foreground">{f.title}</p>
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-3">
                  {f.items.map(item => (
                    <Link key={item.name} to={item.path} className="flex items-center justify-between gap-2 p-3 border border-border hover:border-accent/30 hover:bg-muted/50 transition-all group">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="text-caption text-foreground group-hover:text-accent transition-colors">{item.name}</span>
                      </div>
                      <span className="text-overline font-mono text-muted-foreground/50 shrink-0">{item.status}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Sec>

    {/* Cross-Cutting */}
    <Sec className="border-b border-border">
      <FadeIn>
        <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">Cross-Cutting Compliance</p>
        <h2 className="institutional-heading text-heading-1 font-semibold mb-8">Universal Requirements</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {crossCutting.map(({ area, path, icon: Icon, status }, i) => (
            <FadeIn key={area} delay={i * 60}>
              <Link to={path} className="governance-card-elevated flex items-center gap-4 group hover:border-accent/30 transition-all">
                <Icon className="h-5 w-5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex-1">
                  <h4 className="font-serif text-body font-semibold group-hover:text-accent transition-colors">{area}</h4>
                  <p className="text-overline text-muted-foreground/50">{status}</p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 group-hover:text-accent transition-colors" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </Sec>

    <Sec className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="text-center max-w-2xl mx-auto">
          <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
          <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">Complete Compliance Assessment</h2>
          <p className="text-body text-primary-foreground/60 mb-8">
            For institutions requiring detailed compliance mapping, gap analysis, or formal alignment certification across any international framework.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              Request Compliance Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/oecd-safeguards" className="inline-flex items-center gap-2 px-8 py-4 border border-primary-foreground/20 text-primary-foreground text-sm font-medium transition-all hover:bg-primary-foreground/5">
              Try Self-Assessment
            </Link>
          </div>
        </div>
      </FadeIn>
    </Sec>
  </div>
);

export default InternationalCompliance;
