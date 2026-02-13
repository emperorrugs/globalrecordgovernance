import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function InstitutionalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground px-6 py-14 md:px-12 lg:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Main footer grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground text-xs font-mono font-bold">G</span>
              </div>
              <h4 className="font-serif text-sm font-semibold">GRGF</h4>
            </div>
            <p className="text-caption text-primary-foreground/50 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("footer.infrastructure")}</h4>
            <ul className="space-y-2 text-caption text-primary-foreground/50">
              <li><Link to="/architecture" className="hover:text-accent transition-colors">System Architecture</Link></li>
              <li><Link to="/dpi-stack" className="hover:text-accent transition-colors">DPI Stack</Link></li>
              <li><Link to="/safeguards-trust" className="hover:text-accent transition-colors">Safeguards & Trust</Link></li>
              <li><Link to="/international-compliance" className="hover:text-accent transition-colors">International Compliance</Link></li>
              <li><Link to="/world-bank-alignment" className="hover:text-accent transition-colors">World Bank Alignment</Link></li>
              <li><Link to="/un-alignment" className="hover:text-accent transition-colors">UN SDG & DPG</Link></li>
              <li><Link to="/g20-dpi-framework" className="hover:text-accent transition-colors">G20 DPI Framework</Link></li>
              <li><Link to="/itu-global-standards" className="hover:text-accent transition-colors">ITU Standards</Link></li>
              <li><Link to="/unesco-alignment" className="hover:text-accent transition-colors">UNESCO Alignment</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("footer.framework")}</h4>
            <ul className="space-y-2 text-caption text-primary-foreground/50">
              <li><Link to="/recognition" className="hover:text-accent transition-colors">Recognition Framework</Link></li>
              <li><Link to="/governance-framework" className="hover:text-accent transition-colors">Governance Model</Link></li>
              <li><Link to="/compliance" className="hover:text-accent transition-colors">Standards & Compliance</Link></li>
              <li><Link to="/oecd-alignment" className="hover:text-accent transition-colors">OECD Alignment</Link></li>
              <li><Link to="/oecd-safeguards" className="hover:text-accent transition-colors">DPI Safeguards Scorecard</Link></li>
              <li><Link to="/open-standards" className="hover:text-accent transition-colors">Open Standards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-overline font-mono text-accent uppercase tracking-widest mb-4">{t("footer.engage")}</h4>
            <ul className="space-y-2 text-caption text-primary-foreground/50">
              <li><Link to="/controlled-access" className="hover:text-accent transition-colors">{t("topbar.request")}</Link></li>
              <li><Link to="/stakeholder-consultation" className="hover:text-accent transition-colors">Public Consultation</Link></li>
              <li><Link to="/risk-register" className="hover:text-accent transition-colors">Risk Register</Link></li>
              <li><Link to="/human-rights-impact" className="hover:text-accent transition-colors">Human Rights</Link></li>
              <li><Link to="/sustainability" className="hover:text-accent transition-colors">Sustainability</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Trust signals */}
        <div className="mt-10 pt-8 border-t border-primary-foreground/8">
          <div className="grid gap-3 sm:grid-cols-4 mb-6">
            {[
              t("footer.pilot"),
              t("footer.audit"),
              t("footer.no_claims"),
              t("footer.disclosure"),
            ].map((signal) => (
              <p key={signal} className="text-overline text-primary-foreground/30 leading-relaxed">{signal}</p>
            ))}
          </div>

          {/* Origin attribution */}
          <div className="mb-6 py-4 border-y border-primary-foreground/6">
            <p className="text-caption text-primary-foreground/40 text-center">
              {t("footer.invented")}
            </p>
          </div>

          <p className="text-body font-serif italic text-primary-foreground/60 text-center mb-6">
            {t("footer.quote")}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-overline text-primary-foreground/20 tracking-widest uppercase">
            GRGF · Governance Integrity Infrastructure
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <Link to="/safeguards-trust" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">{t("footer.evidence")}</Link>
            <Link to="/sitemap" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">{t("footer.sitemap")}</Link>
            <Link to="/privacy-policy" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">{t("footer.privacy")}</Link>
            <Link to="/terms-of-service" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">{t("footer.terms")}</Link>
            <Link to="/controlled-access" className="text-overline text-accent hover:underline font-mono uppercase tracking-widest transition-colors">{t("footer.engage")} →</Link>
            <Link to="/contact" className="text-overline text-primary-foreground/40 hover:text-accent font-mono uppercase tracking-widest transition-colors">{t("nav.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
