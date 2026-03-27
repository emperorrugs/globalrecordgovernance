import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export function InstitutionalFooter() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/30 bg-background px-6 py-14 md:px-12 lg:px-14">
      <div className="max-w-5xl mx-auto">
        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-accent/10 border border-accent/15 flex items-center justify-center">
                <span className="text-accent text-[10px] font-bold">G</span>
              </div>
              <h4 className="text-[13px] font-semibold">GRGF</h4>
            </div>
            <p className="text-[12px] text-muted-foreground/40 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.12em] mb-4">{t("footer.infrastructure")}</h4>
            <ul className="space-y-2 text-[12px] text-muted-foreground/40">
              <li><Link to="/architecture" className="hover:text-accent transition-colors">Architecture</Link></li>
              <li><Link to="/dpi-stack" className="hover:text-accent transition-colors">DPI Stack</Link></li>
              <li><Link to="/anchor-chain" className="hover:text-accent transition-colors">Anchor Chain</Link></li>
              <li><Link to="/international-compliance" className="hover:text-accent transition-colors">Compliance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.12em] mb-4">{t("footer.framework")}</h4>
            <ul className="space-y-2 text-[12px] text-muted-foreground/40">
              <li><Link to="/governance-framework" className="hover:text-accent transition-colors">Governance</Link></li>
              <li><Link to="/compliance" className="hover:text-accent transition-colors">Standards</Link></li>
              <li><Link to="/oecd-alignment" className="hover:text-accent transition-colors">OECD</Link></li>
              <li><Link to="/un-alignment" className="hover:text-accent transition-colors">UN & UNESCO</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-mono text-muted-foreground/30 uppercase tracking-[0.12em] mb-4">{t("footer.engage")}</h4>
            <ul className="space-y-2 text-[12px] text-muted-foreground/40">
              <li><Link to="/controlled-access" className="hover:text-accent transition-colors">{t("topbar.request")}</Link></li>
              <li><Link to="/archive/intelligent" className="hover:text-accent transition-colors">Archive</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">{t("nav.contact")}</Link></li>
              <li><Link to="/submission-hub" className="hover:text-accent transition-colors">Submission Hub</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="inst-divider mb-8" />

        {/* Attribution */}
        <div className="mb-6 py-4 border-y border-border/20 text-center">
          <p className="text-[11px] text-muted-foreground/35">
            {t("footer.invented")}
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[9px] font-mono text-muted-foreground/15 tracking-[0.12em] uppercase">
            GRGF · Governance Integrity Infrastructure
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            {[
              { label: t("footer.privacy"), path: "/privacy-policy" },
              { label: t("footer.terms"), path: "/terms-of-service" },
              { label: t("footer.sitemap"), path: "/sitemap" },
              { label: "Accessibility", path: "/accessibility" },
            ].map(({ label, path }) => (
              <Link key={path} to={path} className="text-[9px] font-mono text-muted-foreground/20 hover:text-accent uppercase tracking-[0.1em] transition-colors">{label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
