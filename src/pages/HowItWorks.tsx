import { PageHeader, Section } from "@/components/PageComponents";
import { Lock, Scale, Globe, ArrowDown, Layers } from "lucide-react";
import { useViewMode } from "@/contexts/ViewModeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { isPlain } = useViewMode();
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in">
      <PageHeader
        title={t("hiw.title")}
        subtitle={isPlain ? t("hiw.subtitle_plain") : t("hiw.subtitle_tech")}
      />

      {/* Conceptual Diagram */}
      <Section>
        <div className="max-w-2xl mx-auto">
          {/* Layer 1 */}
          <div className="governance-card border-l-4 border-l-accent">
            <div className="flex items-center gap-3 mb-2">
              <Lock className="h-5 w-5 text-accent" />
              <div>
                <p className="hash-text text-accent">{t("hiw.layer1_label")}</p>
                <h3 className="font-serif text-base font-semibold mt-1">{t("hiw.layer1_title")}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain ? t("hiw.layer1_plain") : t("hiw.layer1_tech")}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {["hiw.layer1_item1", "hiw.layer1_item2", "hiw.layer1_item3", "hiw.layer1_item4"].map((key) => (
                <p key={key} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-accent mt-0.5">·</span>
                  {t(key)}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8">{t("hiw.layer1_status")}</p>
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown className="h-5 w-5 text-accent/40" />
          </div>

          {/* Layer 2 */}
          <div className="governance-card border-l-4 border-l-primary">
            <div className="flex items-center gap-3 mb-2">
              <Layers className="h-5 w-5 text-primary" />
              <div>
                <p className="hash-text text-primary">{t("hiw.layer2_label")}</p>
                <h3 className="font-serif text-base font-semibold mt-1">{t("hiw.layer2_title")}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain ? t("hiw.layer2_plain") : t("hiw.layer2_tech")}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {["hiw.layer2_item1", "hiw.layer2_item2", "hiw.layer2_item3"].map((key) => (
                <p key={key} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-0.5">·</span>
                  {t(key)}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8 text-destructive">{t("hiw.layer2_status")}</p>
          </div>

          <div className="flex justify-center py-2">
            <ArrowDown className="h-5 w-5 text-accent/40" />
          </div>

          {/* Layer 3 */}
          <div className="governance-card border-l-4 border-l-muted-foreground">
            <div className="flex items-center gap-3 mb-2">
              <Globe className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="hash-text">{t("hiw.layer3_label")}</p>
                <h3 className="font-serif text-base font-semibold mt-1">{t("hiw.layer3_title")}</h3>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed ml-8">
              {isPlain ? t("hiw.layer3_plain") : t("hiw.layer3_tech")}
            </p>
            <div className="mt-4 ml-8 space-y-1.5">
              {["hiw.layer3_item1", "hiw.layer3_item2", "hiw.layer3_item3", "hiw.layer3_item4"].map((key) => (
                <p key={key} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-muted-foreground mt-0.5">·</span>
                  {t(key)}
                </p>
              ))}
            </div>
            <p className="hash-text mt-4 ml-8 text-destructive">{t("hiw.layer3_status")}</p>
          </div>
        </div>
      </Section>

      {/* Governance authority statement */}
      <Section className="border-t border-border bg-card/30">
        <div className="governance-card border-l-2 border-l-accent max-w-3xl">
          <p className="text-sm text-foreground leading-relaxed">{t("hiw.authority_statement")}</p>
        </div>
      </Section>
    </div>
  );
};

export default HowItWorks;
