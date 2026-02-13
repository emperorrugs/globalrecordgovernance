import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, Users, Heart, Eye, Scale, Leaf, BookOpen } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const sdgAlignments = [
  { sdg: "SDG 9", title: "Industry, Innovation & Infrastructure", contribution: "Resilient, inclusive governance infrastructure that strengthens institutional foundations for sustainable industrialization and innovation.", intensity: "Strong" },
  { sdg: "SDG 10", title: "Reduced Inequalities", contribution: "Deterministic policy enforcement eliminates discretionary bias. Equal treatment regardless of identity, status, or political connection.", intensity: "Moderate" },
  { sdg: "SDG 11", title: "Sustainable Cities & Communities", contribution: "Municipal governance integrity for urban planning, permit processing, and public service delivery accountability.", intensity: "Moderate" },
  { sdg: "SDG 12", title: "Responsible Consumption & Production", contribution: "Energy-efficient architecture. No blockchain waste. Minimal computational overhead for governance processing.", intensity: "Moderate" },
  { sdg: "SDG 13", title: "Climate Action", contribution: "Carbon-aware infrastructure. Enables verifiable tracking of climate commitments, environmental permit compliance, and emissions reporting.", intensity: "Moderate" },
  { sdg: "SDG 16", title: "Peace, Justice & Strong Institutions", contribution: "Core mission alignment. Transparent, accountable institutions through verifiable governance records, omission detection, and independent audit.", intensity: "Primary" },
  { sdg: "SDG 16.3", title: "Rule of Law", contribution: "Deterministic policy enforcement ensures consistent application of rules. Cryptographic evidence supports legal proceedings.", intensity: "Strong" },
  { sdg: "SDG 16.5", title: "Reduce Corruption", contribution: "Structural anti-corruption through omission-awareness, eliminating discretionary gaps that enable procurement fraud.", intensity: "Primary" },
  { sdg: "SDG 16.6", title: "Effective, Accountable Institutions", contribution: "Every institutional action — and inaction — becomes independently verifiable. Omission detection makes accountability structural.", intensity: "Primary" },
  { sdg: "SDG 16.10", title: "Public Access to Information", contribution: "Public verification API, open standards, machine-readable governance data, and transparency commitments.", intensity: "Strong" },
  { sdg: "SDG 17", title: "Partnerships for the Goals", contribution: "Federation protocol enables cross-border institutional cooperation. Multi-stakeholder governance model.", intensity: "Strong" },
];

const dpgCriteria = [
  { criterion: "1. Relevance to SDGs", status: "Met", detail: "Primary alignment with SDG 16 (Peace, Justice & Strong Institutions). Secondary alignment with SDGs 9, 10, 11, 12, 13, 17." },
  { criterion: "2. Use of Approved Open Licence", status: "In Progress", detail: "Schema definitions and verification algorithms targeted for open licence publication. Core framework under institutional charter." },
  { criterion: "3. Clear Ownership", status: "Met", detail: "Invented and owned by Tarek Wahid. Foundation governance charter with anti-capture clauses ensures institutional independence." },
  { criterion: "4. Platform Independence", status: "Met", detail: "Sovereign-compatible architecture. No cloud vendor lock-in. Full data portability. Federation nodes operate independently." },
  { criterion: "5. Documentation", status: "Met", detail: "Comprehensive technical documentation, API specifications, JSON-LD schema, deployment guides, and institutional briefing materials." },
  { criterion: "6. Mechanism for Extracting Data", status: "Met", detail: "Full data export in JSON-LD, CSV, XML. Public verification API. Machine-readable governance event schema." },
  { criterion: "7. Adherence to Privacy & Applicable Laws", status: "Met", detail: "Privacy-by-design. No PII in records. GDPR, PIPEDA, CCPA compliant by architecture. Human Rights Impact Assessment published." },
  { criterion: "8. Adherence to Standards & Best Practices", status: "Met", detail: "ISO 15489, ISO 27001 aligned. W3C JSON-LD. OECD DPI standards. GC Digital Standards compliance." },
  { criterion: "9. Do No Harm", status: "Met", detail: "Formal HRIA published. Anti-capture clauses. Institutional neutrality. No enforcement capability. Content-blind verification." },
];

const UNAlignment = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("un.overline")}</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            {t("un.title")}
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            {t("un.subtitle")}
          </p>
        </div>
      </header>

      {/* SDG Alignment Matrix */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("un.sdg")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("un.sdg_title")}</h2>
          <div className="space-y-3">
            {sdgAlignments.map((s, i) => (
              <FadeIn key={s.sdg} delay={i * 40}>
                <div className="governance-card-elevated hover:border-accent/20 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono font-bold">{s.sdg}</span>
                    <h4 className="font-serif text-heading-3 font-semibold">{s.title}</h4>
                    <span className={`ml-auto px-2 py-0.5 text-xs font-mono ${
                      s.intensity === "Primary" ? "bg-accent text-accent-foreground" :
                      s.intensity === "Strong" ? "bg-accent/20 text-accent" :
                      "bg-muted text-muted-foreground"
                    }`}>{s.intensity}</span>
                  </div>
                  <p className="text-caption text-muted-foreground leading-relaxed">{s.contribution}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Digital Public Goods */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("un.dpga")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-4">{t("un.dpg_title")}</h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            {t("un.dpg_desc")}
          </p>
          <div className="space-y-3">
            {dpgCriteria.map((c, i) => (
              <FadeIn key={c.criterion} delay={i * 40}>
                <div className="flex items-start gap-4 py-4 px-5 border border-border hover:border-accent/20 transition-colors">
                  <CheckCircle className={`h-4 w-4 shrink-0 mt-0.5 ${c.status === "Met" ? "text-accent" : "text-muted-foreground/40"}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-serif text-body font-semibold">{c.criterion}</h4>
                      <span className={`px-2 py-0.5 text-xs font-mono ${c.status === "Met" ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"}`}>{c.status}</span>
                    </div>
                    <p className="text-caption text-muted-foreground">{c.detail}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* UN Digital Cooperation */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("un.digital_coop")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("un.digital_coop_title")}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { icon: Globe, title: "Universal Connectivity", desc: "Federation protocol designed for deployment in any connectivity environment. Offline fallback governance continuity ensures access regardless of infrastructure maturity." },
              { icon: Shield, title: "Digital Trust & Security", desc: "Cryptographic integrity, zero-trust architecture, and independent verification — building the trust infrastructure that digital cooperation requires." },
              { icon: Heart, title: "Human Rights Online", desc: "Formal HRIA published. Privacy-by-design. Content-blind verification protects individual rights while enabling institutional accountability." },
              { icon: Users, title: "Global Digital Cooperation", desc: "Federation protocol enables sovereign nations to participate in multilateral governance verification without surrendering data sovereignty." },
              { icon: Scale, title: "Digital Inclusion", desc: "Dual-mode interface (Plain English / Technical) ensures accessibility. No technical barrier to institutional participation." },
              { icon: Eye, title: "Digital Public Goods", desc: "Open standards, published schemas, public verification APIs — contributing to the global commons of governance infrastructure." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div className="governance-card-elevated flex gap-4 group hover:border-accent/30 transition-all">
                  <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-heading-3 font-semibold mb-2">{title}</h4>
                    <p className="text-caption text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* EGDI */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("un.egov")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("un.egdi_title")}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { component: "Online Service Index (OSI)", score: "High", contribution: "Public verification API, machine-readable governance data, digital service delivery accountability infrastructure." },
              { component: "Telecommunication Infrastructure (TII)", score: "N/A — Architecture-level", contribution: "Designed for deployment across varying infrastructure maturity levels. Offline-capable governance continuity." },
              { component: "Human Capital Index (HCI)", score: "Contributing", contribution: "Academy and certification programmes. Professional development in governance integrity. Institutional capacity building." },
            ].map(({ component, score, contribution }) => (
              <div key={component} className="governance-card-elevated">
                <span className="text-overline font-mono text-accent">{score}</span>
                <h4 className="font-serif text-heading-3 font-semibold mt-2 mb-3">{component}</h4>
                <p className="text-caption text-muted-foreground leading-relaxed">{contribution}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      <Sec className="bg-primary text-primary-foreground">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <Globe className="h-8 w-8 text-accent mx-auto mb-4" />
            <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">{t("un.engagement")}</h2>
            <p className="text-body text-primary-foreground/60 mb-8">
              {t("un.engagement_desc")}
            </p>
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              {t("un.request_brief")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Sec>
    </div>
  );
};

export default UNAlignment;
