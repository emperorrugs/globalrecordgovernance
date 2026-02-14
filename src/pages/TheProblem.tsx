import { PageHeader, Section } from "@/components/PageComponents";
import { Link } from "react-router-dom";
import { Database, FileText, Shield, AlertTriangle, ArrowRight, Scale, Banknote, ClipboardCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TheProblem = () => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={t("problem.title")}
        subtitle={t("problem.subtitle")}
      />

      {/* First Principles */}
      <Section title={t("problem.first_principles")}>
        <div className="space-y-4 max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed">{t("problem.fp_p1")}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t("problem.fp_p2")}</p>
          <p className="text-sm text-foreground font-medium leading-relaxed">{t("problem.fp_p3")}</p>
        </div>
      </Section>

      {/* Why Current Systems Fail */}
      <Section title={t("problem.why_fail")} className="border-t border-border">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Database, titleKey: "problem.mutable_title", descKey: "problem.mutable_desc" },
            { icon: ClipboardCheck, titleKey: "problem.audit_title", descKey: "problem.audit_desc" },
            { icon: Scale, titleKey: "problem.compliance_title", descKey: "problem.compliance_desc" },
            { icon: AlertTriangle, titleKey: "problem.discretion_title", descKey: "problem.discretion_desc" },
          ].map(({ icon: Icon, titleKey, descKey }) => (
            <div key={titleKey} className="governance-card">
              <Icon className="h-5 w-5 text-accent mb-3" />
              <h4 className="font-serif text-sm font-semibold mb-2">{t(titleKey)}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{t(descKey)}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Real Scenarios */}
      <Section title={t("problem.scenarios")} className="border-t border-border">
        <div className="space-y-4">
          {[
            { icon: Banknote, titleKey: "problem.procurement_title", problemKey: "problem.procurement_problem", consequenceKey: "problem.procurement_consequence" },
            { icon: FileText, titleKey: "problem.grants_title", problemKey: "problem.grants_problem", consequenceKey: "problem.grants_consequence" },
            { icon: Shield, titleKey: "problem.regulatory_title", problemKey: "problem.regulatory_problem", consequenceKey: "problem.regulatory_consequence" },
          ].map(({ icon: Icon, titleKey, problemKey, consequenceKey }) => (
            <div key={titleKey} className="governance-card border-l-2 border-l-accent">
              <div className="flex items-start gap-3 mb-3">
                <Icon className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <h4 className="font-serif text-sm font-semibold">{t(titleKey)}</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{t(problemKey)}</p>
              <p className="text-xs text-foreground font-medium leading-relaxed">
                {t("problem.consequence")} {t(consequenceKey)}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* What GRGF Changes */}
      <Section title={t("problem.what_changes")} className="border-t border-border bg-surface2/30">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground font-medium leading-relaxed mb-4">{t("problem.changes_intro")}</p>
          <ul className="space-y-2">
            {["problem.change_1", "problem.change_2", "problem.change_3", "problem.change_4", "problem.change_5"].map((key) => (
              <li key={key} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                <span className="text-accent mt-0.5 shrink-0">·</span>{t(key)}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <Link to="/architecture" className="inline-flex items-center gap-2 text-sm text-accent hover:underline">
            {t("problem.view_architecture")} <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </Section>

      {/* Attribution */}
      <Section className="border-t border-border">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">{t("common.attribution_label")}</span> {t("problem.attribution")}
        </p>
      </Section>
    </div>
  );
};

export default TheProblem;
