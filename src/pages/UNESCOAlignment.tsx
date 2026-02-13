import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, Eye, Users, BookOpen, Scale, Heart, Wifi } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const roamxPillars = [
  {
    letter: "R",
    pillar: "Rights-based",
    icon: Scale,
    alignment: "Privacy-by-design architecture with no PII in governance records. Formal Human Rights Impact Assessment published. Content-blind verification protects individual rights while enabling institutional accountability.",
    indicators: ["Freedom of Expression", "Privacy & Data Protection", "Access to Information", "Non-Discrimination"],
    status: "Strong",
  },
  {
    letter: "O",
    pillar: "Openness",
    icon: BookOpen,
    alignment: "Open standards (JSON-LD, ISO-aligned), public verification API, published schema definitions, and open governance charter. Interoperability by design.",
    indicators: ["Open Standards", "Open Data", "Open Source Alignment", "Interoperability"],
    status: "Strong",
  },
  {
    letter: "A",
    pillar: "Accessibility",
    icon: Users,
    alignment: "WCAG 2.1 AA compliant. Dual-mode interface (Plain English / Technical) ensures inclusive access. Offline fallback governance continuity for connectivity-challenged environments.",
    indicators: ["Multilingual Support", "Digital Literacy", "Inclusive Design", "Universal Access"],
    status: "Advanced",
  },
  {
    letter: "M",
    pillar: "Multi-stakeholder",
    icon: Globe,
    alignment: "Anti-capture clauses ensure no single stakeholder controls governance. Public consultation mechanism. Independent advisory board with diverse representation.",
    indicators: ["Government Participation", "Private Sector", "Civil Society", "Technical Community"],
    status: "Strong",
  },
  {
    letter: "X",
    pillar: "Cross-cutting",
    icon: Shield,
    alignment: "Gender-responsive governance design. Environmental sustainability statement. Trust and security infrastructure. Ethical AI governance alignment.",
    indicators: ["Gender", "Sustainability", "Trust & Security", "Ethical Governance"],
    status: "Developing",
  },
];

const aiEthicsPrinciples = [
  { principle: "Proportionality & Do No Harm", alignment: "Content-blind verification. Minimal data collection. No enforcement capability. HRIA published. Anti-capture clauses prevent misuse." },
  { principle: "Safety & Security", alignment: "Zero-trust architecture, cryptographic integrity, tamper-evident records, and independent verification. Post-quantum readiness roadmap." },
  { principle: "Fairness & Non-Discrimination", alignment: "Deterministic policy enforcement eliminates discretionary bias. No profiling. Equal treatment by design." },
  { principle: "Sustainability", alignment: "Energy-efficient architecture (no blockchain). Carbon-aware design. Digital sustainability statement published." },
  { principle: "Right to Privacy & Data Protection", alignment: "Privacy-by-design. No PII in governance records. Role-based disclosure. Data minimization. GDPR/PIPEDA/CCPA compliant." },
  { principle: "Human Oversight & Determination", alignment: "Human-in-the-loop governance. Independent audit committee. Manual override capability. No autonomous decision-making." },
  { principle: "Transparency & Explainability", alignment: "Public verification API. Open logic. Published standards. Machine-readable governance data. Full audit trail." },
  { principle: "Responsibility & Accountability", alignment: "Omission-awareness makes institutional silence visible. Deterministic enforcement. Cryptographic evidence for accountability." },
];

const infoPreservation = [
  { area: "Memory of the World", alignment: "Append-only governance records preserve institutional memory. Hash-sealed integrity ensures long-term authenticity and admissibility." },
  { area: "Documentary Heritage Protection", alignment: "Tamper-evident record architecture protects governance documentary heritage from alteration, deletion, or unauthorized modification." },
  { area: "Digital Preservation Standards", alignment: "ISO 15489 records management alignment. Long-term format sustainability. Migration-safe architecture for multi-decade preservation." },
  { area: "Universal Access to Information", alignment: "Public verification API enables universal access to governance integrity data. Open standards ensure no proprietary barriers." },
];

const UNESCOAlignment = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.overline")}</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            {t("unesco.title")}
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            {t("unesco.subtitle")}
          </p>
        </div>
      </header>

      {/* ROAM-X Indicators */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.roamx")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-4">{t("unesco.roamx_title")}</h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            {t("unesco.roamx_desc")}
          </p>
          <div className="space-y-5">
            {roamxPillars.map((p, i) => (
              <FadeIn key={p.letter} delay={i * 80}>
                <div className="governance-card-elevated border-l-4 border-l-accent hover:shadow-lg transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="w-9 h-9 bg-accent text-accent-foreground flex items-center justify-center text-sm font-mono font-bold">{p.letter}</span>
                    <div>
                      <h4 className="font-serif text-heading-3 font-semibold">{p.pillar}</h4>
                    </div>
                    <span className={`ml-auto px-2 py-0.5 text-xs font-mono ${
                      p.status === "Strong" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
                    }`}>{p.status}</span>
                  </div>
                  <p className="text-body text-muted-foreground leading-relaxed mb-4">{p.alignment}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.indicators.map(ind => (
                      <span key={ind} className="px-2 py-1 bg-muted text-xs font-mono text-muted-foreground">{ind}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* AI Ethics Recommendation */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.ai_ethics")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-4">{t("unesco.ai_ethics_title")}</h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            {t("unesco.ai_ethics_desc")}
          </p>
          <div className="grid gap-3 md:grid-cols-2">
            {aiEthicsPrinciples.map((p, i) => (
              <FadeIn key={p.principle} delay={i * 40}>
                <div className="flex items-start gap-3 py-4 px-5 border border-border hover:border-accent/20 transition-colors bg-card">
                  <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-body font-semibold mb-1">{p.principle}</h4>
                    <p className="text-caption text-muted-foreground">{p.alignment}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Internet for Trust */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.trust")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("unesco.trust_title")}</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { icon: Eye, title: "Transparency", desc: "Open governance logic, public verification API, and machine-readable institutional data. No opaque decision-making." },
              { icon: Shield, title: "Accountability", desc: "Structural accountability through omission-awareness. Every institutional action and inaction becomes independently verifiable." },
              { icon: Heart, title: "User Empowerment", desc: "Dual-mode interface empowers all stakeholders. Public consultation. Citizen verification of governance integrity." },
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

      {/* Information Preservation */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.heritage")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("unesco.heritage_title")}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {infoPreservation.map(({ area, alignment }, i) => (
              <FadeIn key={area} delay={i * 60}>
                <div className="governance-card-elevated hover:border-accent/20 transition-all">
                  <h4 className="font-serif text-heading-3 font-semibold mb-2">{area}</h4>
                  <p className="text-caption text-muted-foreground leading-relaxed">{alignment}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* IFAP */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("unesco.ifap")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("unesco.ifap_title")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { priority: "Information Accessibility", alignment: "Open API, open standards, machine-readable data, and multilingual support ensure universal information accessibility." },
              { priority: "Information Preservation", alignment: "Append-only, hash-sealed records ensure permanent preservation of governance events for institutional memory." },
              { priority: "Information Ethics", alignment: "Anti-capture clauses, privacy-by-design, content-blind verification, and formal ethics framework." },
              { priority: "Information Literacy", alignment: "Academy programme and dual-mode interface bridge the gap between technical and institutional literacy." },
              { priority: "Multilingualism", alignment: "EN/FR bilingual support with roadmap for Arabic, Spanish, Russian, and Chinese — all 6 UN official languages." },
              { priority: "Knowledge Societies", alignment: "Open governance infrastructure contributes to knowledge-based institutional development and democratic participation." },
            ].map(({ priority, alignment }) => (
              <div key={priority} className="governance-card hover:border-accent/20 transition-all">
                <h4 className="font-serif text-body font-semibold mb-2">{priority}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed">{alignment}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      <Sec className="bg-primary text-primary-foreground">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
            <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">{t("unesco.engagement")}</h2>
            <p className="text-body text-primary-foreground/60 mb-8">
              {t("unesco.engagement_desc")}
            </p>
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              {t("unesco.request_brief")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Sec>
    </div>
  );
};

export default UNESCOAlignment;
