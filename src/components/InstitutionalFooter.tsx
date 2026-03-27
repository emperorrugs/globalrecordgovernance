import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function InstitutionalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-border bg-background px-6 py-16 md:px-12 lg:px-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, hsl(var(--accent)), transparent 70%)" }} />

      <div className="relative max-w-6xl mx-auto">
        {/* Main footer grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-accent text-xs font-mono font-bold">G</span>
              </div>
              <h4 className="font-serif text-base font-semibold">GRGF</h4>
            </div>
            <p className="text-caption text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent/60 uppercase tracking-[0.15em] mb-5">{t("footer.infrastructure")}</h4>
            <ul className="space-y-2.5 text-caption text-muted-foreground">
              <li><Link to="/architecture" className="hover:text-accent transition-colors duration-300">System Architecture</Link></li>
              <li><Link to="/dpi-stack" className="hover:text-accent transition-colors duration-300">DPI Stack</Link></li>
              <li><Link to="/safeguards-trust" className="hover:text-accent transition-colors duration-300">Safeguards & Trust</Link></li>
              <li><Link to="/international-compliance" className="hover:text-accent transition-colors duration-300">International Compliance</Link></li>
              <li><Link to="/world-bank-alignment" className="hover:text-accent transition-colors duration-300">World Bank Alignment</Link></li>
              <li><Link to="/un-alignment" className="hover:text-accent transition-colors duration-300">UN SDG & DPG</Link></li>
              <li><Link to="/g20-dpi-framework" className="hover:text-accent transition-colors duration-300">G20 DPI Framework</Link></li>
              <li><Link to="/itu-global-standards" className="hover:text-accent transition-colors duration-300">ITU Standards</Link></li>
              <li><Link to="/unesco-alignment" className="hover:text-accent transition-colors duration-300">UNESCO Alignment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent/60 uppercase tracking-[0.15em] mb-5">{t("footer.framework")}</h4>
            <ul className="space-y-2.5 text-caption text-muted-foreground">
              <li><Link to="/recognition" className="hover:text-accent transition-colors duration-300">Recognition Framework</Link></li>
              <li><Link to="/governance-framework" className="hover:text-accent transition-colors duration-300">Governance Model</Link></li>
              <li><Link to="/compliance" className="hover:text-accent transition-colors duration-300">Standards & Compliance</Link></li>
              <li><Link to="/oecd-alignment" className="hover:text-accent transition-colors duration-300">OECD Alignment</Link></li>
              <li><Link to="/oecd-safeguards" className="hover:text-accent transition-colors duration-300">DPI Safeguards Scorecard</Link></li>
              <li><Link to="/open-standards" className="hover:text-accent transition-colors duration-300">Open Standards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent/60 uppercase tracking-[0.15em] mb-5">{t("footer.engage")}</h4>
            <ul className="space-y-2.5 text-caption text-muted-foreground">
              <li><Link to="/controlled-access" className="hover:text-accent transition-colors duration-300">{t("topbar.request")}</Link></li>
              <li><Link to="/stakeholder-consultation" className="hover:text-accent transition-colors duration-300">Public Consultation</Link></li>
              <li><Link to="/risk-register" className="hover:text-accent transition-colors duration-300">Risk Register</Link></li>
              <li><Link to="/human-rights-impact" className="hover:text-accent transition-colors duration-300">Human Rights</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors duration-300">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors duration-300">{t("nav.contact")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="inst-divider my-10" />

        {/* Trust signals */}
        <div className="grid gap-3 sm:grid-cols-4 mb-8">
          {[
            t("footer.pilot"),
            t("footer.audit"),
            t("footer.no_claims"),
            t("footer.disclosure"),
          ].map((signal) => (
            <p key={signal} className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-widest leading-relaxed">{signal}</p>
          ))}
        </div>

        {/* Origin attribution */}
        <div className="mb-8 py-5 border-y border-border/50">
          <p className="text-caption text-muted-foreground/40 text-center">
            {t("footer.invented")}
          </p>
        </div>

        <p className="text-body-lg font-serif italic text-muted-foreground/50 text-center mb-8 max-w-2xl mx-auto">
          {t("footer.quote")}
        </p>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground/20 tracking-[0.15em] uppercase">
            GRGF · Governance Integrity Infrastructure
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link to="/safeguards-trust" className="text-[10px] text-muted-foreground/30 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("footer.evidence")}</Link>
            <Link to="/sitemap" className="text-[10px] text-muted-foreground/30 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("footer.sitemap")}</Link>
            <Link to="/privacy-policy" className="text-[10px] text-muted-foreground/30 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("footer.privacy")}</Link>
            <Link to="/terms-of-service" className="text-[10px] text-muted-foreground/30 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("footer.terms")}</Link>
            <Link to="/controlled-access" className="text-[10px] text-accent/70 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("footer.engage")} →</Link>
            <Link to="/contact" className="text-[10px] text-muted-foreground/30 hover:text-accent font-mono uppercase tracking-[0.12em] transition-colors duration-300">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
