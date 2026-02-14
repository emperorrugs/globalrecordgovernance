import { PageHeader, Section } from "@/components/PageComponents";
import { BookOpen, AlertTriangle, Scale, ShieldCheck, Users, FileSearch } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />

      {/* Why Record Governance Matters */}
      <Section title={t("about.why_title")}>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">{t("about.why_p1")}</p>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{t("about.why_p2")}</p>
      </Section>

      {/* Problems Addressed */}
      <Section title={t("about.problems_title")} className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {[
            { titleKey: "about.fragmentation_title", descKey: "about.fragmentation_desc", icon: FileSearch },
            { titleKey: "about.opacity_title", descKey: "about.opacity_desc", icon: AlertTriangle },
            { titleKey: "about.audit_title", descKey: "about.audit_desc", icon: Scale },
            { titleKey: "about.omission_title", descKey: "about.omission_desc", icon: ShieldCheck },
          ].map((item) => (
            <div key={item.titleKey} className="governance-card">
              <div className="flex items-start gap-3">
                <item.icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{t(item.titleKey)}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Who GRGF Is For */}
      <Section title={t("about.who_title")} className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2 max-w-3xl">
          {[
            { titleKey: "about.gov_title", descKey: "about.gov_desc" },
            { titleKey: "about.auditors_title", descKey: "about.auditors_desc" },
            { titleKey: "about.multilateral_title", descKey: "about.multilateral_desc" },
            { titleKey: "about.reviewers_title", descKey: "about.reviewers_desc" },
          ].map((item) => (
            <div key={item.titleKey} className="governance-card">
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold">{t(item.titleKey)}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{t(item.descKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Scope & Neutrality */}
      <Section title={t("about.scope_title")} className="border-t border-border">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">{t("about.scope_p1")}</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{t("about.scope_p2")}</p>
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border bg-card/30">
        <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl">
          <span className="font-semibold text-foreground">{t("common.attribution_label")}</span> {t("problem.attribution")}
        </p>
      </Section>
    </div>
  );
};

export default About;
