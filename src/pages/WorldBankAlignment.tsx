import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, BarChart3, Shield, Globe, Users, Building, Landmark, TrendingUp, Database } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const gtmiDimensions = [
  {
    dimension: "Core Government Systems",
    score: "Advanced",
    grgfAlignment: "GRGF provides the integrity layer that makes core government systems auditable and verifiable — complementing existing e-procurement, HRMIS, and financial management systems.",
    indicators: ["Financial Management Information Systems", "Human Resource Management", "e-Procurement", "Tax Administration"],
  },
  {
    dimension: "Public Service Delivery",
    score: "Advanced",
    grgfAlignment: "Omission-awareness architecture ensures that failures in service delivery — missed deadlines, unprocessed applications — become structurally visible for accountability.",
    indicators: ["Digital Identity", "Digital Payments", "Service Portals", "Interoperability Platforms"],
  },
  {
    dimension: "Digital Citizen Engagement",
    score: "Developing",
    grgfAlignment: "Stakeholder consultation mechanism and public verification API enable citizen oversight of institutional governance decisions and omissions.",
    indicators: ["Open Data Portals", "Civic Tech Platforms", "Public Consultation", "Feedback Mechanisms"],
  },
  {
    dimension: "GovTech Enablers",
    score: "Advanced",
    grgfAlignment: "Six-layer architecture provides the governance integrity infrastructure that enables trust in all other GovTech investments — the foundational trust layer.",
    indicators: ["Digital Strategy", "ICT Institutional Setup", "Cybersecurity", "IT Procurement"],
  },
];

const WorldBankAlignment = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("wb.overline")}</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            {t("wb.title")}
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            {t("wb.subtitle")}
          </p>
        </div>
      </header>

      {/* Impact Numbers */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("wb.impact")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("wb.why_cares")}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              { end: 2.6, suffix: "T", prefix: "$", label: "Annual governance losses globally", decimals: 1 },
              { end: 198, suffix: "", prefix: "", label: "Countries with GovTech assessments" },
              { end: 0.3, suffix: "%", prefix: "", label: "Integrity improvement for ROI", decimals: 1 },
              { end: 18.3, suffix: "B", prefix: "$", label: "Projected annual net benefit", decimals: 1 },
            ].map(({ end, suffix, prefix, label, decimals }) => (
              <div key={label} className="governance-card-elevated text-center">
                <p className="text-2xl font-serif font-bold text-accent">
                  {prefix}<AnimatedCounter end={end} suffix={suffix} decimals={decimals || 0} />
                </p>
                <p className="text-overline text-muted-foreground/50 mt-1">{label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* GTMI Alignment */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("wb.gtmi")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("wb.gtmi_title")}</h2>
          <div className="space-y-5">
            {gtmiDimensions.map((d, i) => (
              <FadeIn key={d.dimension} delay={i * 80}>
                <div className="governance-card-elevated border-l-4 border-l-accent hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h4 className="font-serif text-heading-3 font-semibold">{d.dimension}</h4>
                    <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono">{d.score}</span>
                  </div>
                  <p className="text-body text-muted-foreground leading-relaxed mb-4">{d.grgfAlignment}</p>
                  <div className="flex flex-wrap gap-2">
                    {d.indicators.map(ind => (
                      <span key={ind} className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground">{ind}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* WB Digital Development Principles */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("wb.digital_dev")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("wb.digital_dev_title")}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { principle: "Design with the User", icon: Users, alignment: "Dual-mode interface (Plain English / Technical) ensures accessibility for all institutional stakeholders regardless of technical capacity." },
              { principle: "Build for Sustainability", icon: TrendingUp, alignment: "Multi-tier revenue model, open standards, data portability, and no vendor lock-in ensure long-term institutional sustainability." },
              { principle: "Be Data Driven", icon: BarChart3, alignment: "Every governance event generates machine-readable, independently verifiable data. Impact modeling provides evidence-based ROI analysis." },
              { principle: "Use Open Standards", icon: Database, alignment: "JSON-LD schema, public verification API, ISO-aligned architecture, and federation protocol published under open licence." },
              { principle: "Address Privacy & Security", icon: Shield, alignment: "Privacy-by-design, zero-trust architecture, no PII in governance records, role-based disclosure, and data minimisation." },
              { principle: "Be Collaborative", icon: Globe, alignment: "Federation protocol enables cross-border collaboration. Multi-stakeholder consultation. Open standards development process." },
            ].map(({ principle, icon: Icon, alignment }, i) => (
              <FadeIn key={principle} delay={i * 60}>
                <div className="governance-card-elevated flex gap-4 group hover:border-accent/30 transition-all">
                  <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-heading-3 font-semibold mb-2">{principle}</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">{alignment}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Value Proposition */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("wb.value")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("wb.value_title")}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Landmark, title: "Governance Reform Infrastructure", desc: "Structural accountability layer that makes development programme governance verifiable — reducing fiduciary risk for IFI-funded projects." },
              { icon: Shield, title: "Anti-Corruption Structural Assurance", desc: "Omission-awareness and deterministic enforcement eliminate discretionary gaps that enable procurement fraud and administrative corruption." },
              { icon: Building, title: "Institutional Capacity Building", desc: "Phased deployment model with training, certification, and knowledge transfer — building sustainable national governance capability." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="governance-card-elevated group hover:border-accent/30 transition-all">
                <Icon className="h-5 w-5 text-accent mb-3" />
                <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      <Sec className="bg-primary text-primary-foreground">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">{t("wb.partnership")}</h2>
            <p className="text-body text-primary-foreground/60 mb-8">
              {t("wb.partnership_desc")}
            </p>
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              {t("wb.request_brief")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Sec>
    </div>
  );
};

export default WorldBankAlignment;
