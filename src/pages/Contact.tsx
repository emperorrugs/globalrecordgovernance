import { PageHeader, Section } from "@/components/PageComponents";
import { Mail, Building2, FileText, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      {/* Access Notice */}
      <Section>
        <div className="governance-card border-l-2 border-l-accent">
          <div className="flex items-start gap-3">
            <Building2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{t("contact.access_p1")}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("contact.access_p2")}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Inquiry Categories */}
      <Section title={t("contact.categories")} className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { titleKey: "contact.sovereign_title", descKey: "contact.sovereign_desc" },
            { titleKey: "contact.federation_title", descKey: "contact.federation_desc" },
            { titleKey: "contact.audit_title", descKey: "contact.audit_desc" },
            { titleKey: "contact.technical_title", descKey: "contact.technical_desc" },
          ].map((cat) => (
            <div key={cat.titleKey} className="governance-card">
              <h3 className="font-serif text-sm font-semibold">{t(cat.titleKey)}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t(cat.descKey)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section title={t("contact.inquiry")} className="border-t border-border">
        <div className="governance-card max-w-2xl">
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">{t("contact.full_name")}</label>
                <input type="text" className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50" placeholder={t("contact.name_placeholder")} disabled />
              </div>
              <div>
                <label className="text-xs font-semibold text-foreground block mb-1.5">{t("contact.institution")}</label>
                <input type="text" className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50" placeholder={t("contact.institution_placeholder")} disabled />
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">{t("contact.email")}</label>
              <input type="email" className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50" placeholder={t("contact.email_placeholder")} disabled />
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">{t("contact.category_label")}</label>
              <select className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm text-muted-foreground" disabled>
                <option>{t("contact.select_category")}</option>
                <option>{t("contact.sovereign_title")}</option>
                <option>{t("contact.federation_title")}</option>
                <option>{t("contact.audit_title")}</option>
                <option>{t("contact.technical_title")}</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-semibold text-foreground block mb-1.5">{t("contact.details_label")}</label>
              <textarea className="w-full border border-border bg-background rounded-sm px-3 py-2 text-sm placeholder:text-muted-foreground/50 h-24 resize-none" placeholder={t("contact.details_placeholder")} disabled />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button className="px-5 py-2 bg-muted text-muted-foreground text-sm rounded-sm cursor-not-allowed" disabled>
                {t("contact.submit")}
              </button>
              <span className="text-xs text-muted-foreground">{t("contact.submit_note")}</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Notice */}
      <Section className="border-t border-border bg-card/30">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
            <span className="font-semibold text-foreground">{t("contact.notice_label")}</span> {t("contact.notice")}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
