import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Globe, Shield, Cpu, Database, Lock, Network, Users, Zap } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/contexts/LanguageContext";

const Sec = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`px-6 py-20 md:px-12 lg:px-20 ${className}`}>
    <div className="max-w-5xl mx-auto">{children}</div>
  </section>
);

const g20Principles = [
  { principle: "Inclusiveness & Interoperability", icon: Globe, alignment: "Federation protocol enables cross-border interoperability. Open standards ensure no vendor lock-in. Dual-mode interface enables inclusive access.", status: "Full" },
  { principle: "Trust & Security", icon: Shield, alignment: "Cryptographic integrity, zero-trust architecture, tamper-evident records, and independent verification — exceeding G20 baseline requirements.", status: "Full" },
  { principle: "Governance & Regulation", icon: Lock, alignment: "Anti-capture clauses, formal governance charter, independent audit mechanisms, and transparent standards development.", status: "Full" },
  { principle: "Sustainability & Scalability", icon: Zap, alignment: "Carbon-aware architecture, federation-based horizontal scaling, offline fallback, and post-quantum readiness roadmap.", status: "Full" },
];

const coDevAreas = [
  { area: "Digital Identity Layer", grgf: "Complement — GRGF records governance events about identity decisions without duplicating identity infrastructure. Integrity layer for identity governance.", icon: Users },
  { area: "Digital Payments Layer", grgf: "Complement — GRGF provides auditable governance oversight for payment authorization, disbursement verification, and omission detection in benefit delivery.", icon: Database },
  { area: "Data Exchange Layer", grgf: "Interoperate — GRGF's verification API and JSON-LD schema integrate with data exchange platforms. Federation protocol enables cross-system governance verification.", icon: Network },
  { area: "Consent & Privacy Layer", grgf: "Strengthen — Privacy-by-design architecture and role-based disclosure complement consent management. No PII stored. Content-blind verification.", icon: Shield },
];

const G20DPIFramework = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <header className="border-b border-border px-6 py-20 md:px-12 lg:px-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("g20.overline")}</p>
          <h1 className="institutional-heading text-display font-semibold text-primary-foreground mb-4">
            {t("g20.title")}
          </h1>
          <p className="text-body-lg text-primary-foreground/60 max-w-2xl">
            {t("g20.subtitle")}
          </p>
        </div>
      </header>

      {/* G20 DPI Principles */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("g20.principles")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("g20.principles_title")}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {g20Principles.map(({ principle, icon: Icon, alignment, status }, i) => (
              <FadeIn key={principle} delay={i * 80}>
                <div className="governance-card-elevated flex gap-4 group hover:border-accent/30 transition-all">
                  <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-serif text-heading-3 font-semibold">{principle}</h4>
                      <span className="px-2 py-0.5 bg-accent/15 text-accent text-xs font-mono">{status}</span>
                    </div>
                    <p className="text-caption text-muted-foreground leading-relaxed">{alignment}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* GRGF as Layer 3 */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("g20.stack")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("g20.stack_title")}</h2>
          <div className="governance-card-elevated border-l-4 border-l-accent max-w-3xl mb-8">
            <p className="text-body text-muted-foreground leading-relaxed mb-4">
              In the emerging DPI architecture, GRGF occupies a unique position as <strong className="text-foreground">Layer 3: Governance Integrity Registry</strong> — the trust verification layer that sits between foundational identity/payment infrastructure and application-level services.
            </p>
            <p className="text-body text-muted-foreground leading-relaxed">
              Unlike existing DPI layers that <em>process</em> transactions, GRGF <em>verifies governance integrity</em> — making it the only infrastructure that records institutional omissions alongside actions, enabling complete accountability reconstruction.
            </p>
          </div>

          {/* Stack Visualization */}
          <div className="max-w-2xl space-y-2">
            {[
              { layer: "Layer 5", name: "Application Services", desc: "e-Procurement, Service Portals, Benefit Delivery", accent: false },
              { layer: "Layer 4", name: "Data Exchange", desc: "Interoperability, Consent Management, Data Sharing", accent: false },
              { layer: "Layer 3", name: "Governance Integrity Registry", desc: "GRGF — Record verification, omission detection, audit reconstruction", accent: true },
              { layer: "Layer 2", name: "Digital Payments", desc: "Payment rails, disbursement, financial settlement", accent: false },
              { layer: "Layer 1", name: "Digital Identity", desc: "Authentication, authorization, credential management", accent: false },
            ].map(({ layer, name, desc, accent }) => (
              <div key={layer} className={`flex items-center gap-4 p-4 border transition-all ${accent ? "border-accent bg-accent/5" : "border-border"}`}>
                <span className={`text-xs font-mono font-bold shrink-0 w-16 ${accent ? "text-accent" : "text-muted-foreground/50"}`}>{layer}</span>
                <div>
                  <h4 className={`font-serif text-body font-semibold ${accent ? "text-accent" : ""}`}>{name}</h4>
                  <p className="text-caption text-muted-foreground">{desc}</p>
                </div>
                {accent && <span className="ml-auto px-2 py-0.5 bg-accent text-accent-foreground text-xs font-mono shrink-0">GRGF</span>}
              </div>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* Co-Develop */}
      <Sec className="border-b border-border">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("g20.codevelop")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("g20.codevelop_title")}</h2>
          <p className="text-body text-muted-foreground mb-8 max-w-3xl">
            GRGF is designed to complement, not replace, existing DPI layers. Each integration point strengthens overall governance infrastructure without duplicating functionality.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {coDevAreas.map(({ area, grgf, icon: Icon }, i) => (
              <FadeIn key={area} delay={i * 80}>
                <div className="governance-card-elevated group hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-accent" />
                    <h4 className="font-serif text-heading-3 font-semibold">{area}</h4>
                  </div>
                  <p className="text-caption text-muted-foreground leading-relaxed">{grgf}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </Sec>

      {/* India Stack Comparison */}
      <Sec className="border-b border-border bg-muted/40">
        <FadeIn>
          <p className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("g20.comparative")}</p>
          <h2 className="institutional-heading text-heading-1 font-semibold mb-8">{t("g20.comparative_title")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-accent/30">
                  <th className="text-left py-4 px-4 font-serif font-semibold">Dimension</th>
                  <th className="text-left py-4 px-4 font-serif font-semibold text-accent">GRGF</th>
                  <th className="text-left py-4 px-4 font-serif font-semibold text-muted-foreground">India Stack</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { dim: "Primary Function", grgf: "Governance integrity verification", india: "Identity, payments, data exchange" },
                  { dim: "Omission Detection", grgf: "Yes — core capability", india: "No" },
                  { dim: "Cross-Border Design", grgf: "Federation protocol native", india: "National-first, export model" },
                  { dim: "Governance Model", grgf: "Independent foundation, anti-capture", india: "Government-led" },
                  { dim: "Privacy Architecture", grgf: "Content-blind, no PII", india: "Consent-based, PII processed" },
                  { dim: "Complementarity", grgf: "Designed as Layer 3 complement", india: "Layers 1-2 foundational" },
                ].map(({ dim, grgf, india }) => (
                  <tr key={dim} className="border-b border-border/40 hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-foreground">{dim}</td>
                    <td className="py-3 px-4 text-accent">{grgf}</td>
                    <td className="py-3 px-4 text-muted-foreground">{india}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Sec>

      <Sec className="bg-primary text-primary-foreground">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-heading-1 font-semibold text-primary-foreground mb-4">{t("g20.engagement")}</h2>
            <p className="text-body text-primary-foreground/60 mb-8">
              {t("g20.engagement_desc")}
            </p>
            <Link to="/controlled-access" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground text-sm font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-accent/20">
              {t("g20.request_assessment")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Sec>
    </div>
  );
};

export default G20DPIFramework;
