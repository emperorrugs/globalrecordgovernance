import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function InstitutionalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-muted/30 px-6 py-14 md:px-12 lg:px-14">
      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">G</span>
              </div>
              <h4 className="text-sm font-semibold text-foreground">GRGF</h4>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-4">{t("footer.infrastructure")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
              <li><Link to="/dpi-stack" className="hover:text-primary transition-colors">DPI Stack</Link></li>
              <li><Link to="/anchor-chain" className="hover:text-primary transition-colors">Anchor Chain</Link></li>
              <li><Link to="/international-compliance" className="hover:text-primary transition-colors">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-4">{t("footer.framework")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/governance-framework" className="hover:text-primary transition-colors">Governance</Link></li>
              <li><Link to="/compliance" className="hover:text-primary transition-colors">Standards</Link></li>
              <li><Link to="/oecd-alignment" className="hover:text-primary transition-colors">OECD</Link></li>
              <li><Link to="/un-alignment" className="hover:text-primary transition-colors">UN & UNESCO</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wide mb-4">{t("footer.engage")}</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/controlled-access" className="hover:text-primary transition-colors">{t("topbar.request")}</Link></li>
              <li><Link to="/archive/intelligent" className="hover:text-primary transition-colors">Archive</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link></li>
              <li><Link to="/submission-hub" className="hover:text-primary transition-colors">Submission Hub</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="inst-divider mb-8" />

        {/* Attribution */}
        <div className="mb-6 py-4 border-y border-border text-center">
          <p className="text-xs text-muted-foreground">
            {t("footer.invented")}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            GRGF · Governance Integrity Infrastructure
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { label: t("footer.privacy"), path: "/privacy-policy" },
              { label: t("footer.terms"), path: "/terms-of-service" },
              { label: t("footer.sitemap"), path: "/sitemap" },
              { label: "Accessibility", path: "/accessibility" },
            ].map(({ label, path }) => (
              <Link key={path} to={path} className="text-xs text-muted-foreground hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}