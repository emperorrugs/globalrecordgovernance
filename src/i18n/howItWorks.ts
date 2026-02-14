import type { Language } from "@/contexts/LanguageContext";

export const howItWorksTranslations: Record<string, Record<Language, string>> = {
  "hiw.title": { en: "How It Works", fr: "Comment ça fonctionne", ar: "كيف يعمل" },
  "hiw.subtitle_plain": {
    en: "A clear guide to GRGF's three-layer architecture.",
    fr: "Un guide clair de l'architecture à trois couches du GRGF.",
    ar: "دليل واضح لهندسة GRGF ذات الطبقات الثلاث.",
  },
  "hiw.subtitle_tech": {
    en: "Three interdependent layers: Authoritative Governance, Simulation & Demonstration, and Transparency & Insight.",
    fr: "Trois couches interdépendantes : gouvernance faisant autorité, simulation et démonstration, et transparence et aperçu.",
    ar: "ثلاث طبقات مترابطة: الحوكمة الموثوقة، والمحاكاة والعرض، والشفافية والرؤى.",
  },
  "hiw.layer1_label": { en: "LAYER 1 — AUTHORITATIVE", fr: "COUCHE 1 — FAISANT AUTORITÉ", ar: "الطبقة 1 — موثوقة" },
  "hiw.layer1_title": { en: "Authoritative Governance Layer", fr: "Couche de gouvernance faisant autorité", ar: "طبقة الحوكمة الموثوقة" },
  "hiw.layer1_plain": {
    en: "Where records are permanently sealed and governance rules are documented. This is the actual source of authority — not software.",
    fr: "Où les registres sont scellés de manière permanente et les règles de gouvernance sont documentées. C'est la véritable source d'autorité — pas le logiciel.",
    ar: "حيث تُختَم السجلات بشكل دائم وتُوثَّق قواعد الحوكمة. هذا هو مصدر السلطة الفعلي — وليس البرمجيات.",
  },
  "hiw.layer1_tech": {
    en: "Hash-sealed immutable archives, governance operating rules, versioning and change control, and full audit trail preservation. Document-based authority.",
    fr: "Archives immuables scellées par hachage, règles opérationnelles de gouvernance, versionnage et contrôle des modifications, et préservation complète des pistes d'audit. Autorité basée sur les documents.",
    ar: "أرشيفات غير قابلة للتغيير مختومة بالتجزئة، وقواعد تشغيل الحوكمة، والتحكم بالإصدارات والتغييرات، والحفاظ الكامل على مسارات التدقيق. سلطة قائمة على الوثائق.",
  },
  "hiw.layer1_item1": { en: "Sealed governance archives", fr: "Archives de gouvernance scellées", ar: "أرشيفات حوكمة مختومة" },
  "hiw.layer1_item2": { en: "Governance operating rules and charters", fr: "Règles opérationnelles et chartes de gouvernance", ar: "قواعد تشغيل ومواثيق الحوكمة" },
  "hiw.layer1_item3": { en: "Versioning and change control", fr: "Versionnage et contrôle des modifications", ar: "التحكم بالإصدارات والتغييرات" },
  "hiw.layer1_item4": { en: "Full auditability and integrity proofs", fr: "Auditabilité complète et preuves d'intégrité", ar: "قابلية تدقيق كاملة وإثباتات النزاهة" },
  "hiw.layer1_status": { en: "STATUS: AUTHORITATIVE", fr: "STATUT : FAISANT AUTORITÉ", ar: "الحالة: موثوقة" },

  "hiw.layer2_label": { en: "LAYER 2 — DEMONSTRATION", fr: "COUCHE 2 — DÉMONSTRATION", ar: "الطبقة 2 — العرض التوضيحي" },
  "hiw.layer2_title": { en: "Simulation & Demonstration Layer", fr: "Couche de simulation et démonstration", ar: "طبقة المحاكاة والعرض التوضيحي" },
  "hiw.layer2_plain": {
    en: "Interactive tools for training, review, and explanation. Everything here is simulated — no real governance records are created.",
    fr: "Outils interactifs pour la formation, la révision et l'explication. Tout ici est simulé — aucun registre de gouvernance réel n'est créé.",
    ar: "أدوات تفاعلية للتدريب والمراجعة والشرح. كل شيء هنا محاكاة — لا يتم إنشاء سجلات حوكمة حقيقية.",
  },
  "hiw.layer2_tech": {
    en: "Non-authoritative interactive environment for governance workflow demonstration, practitioner training, and institutional review support.",
    fr: "Environnement interactif non faisant autorité pour la démonstration des flux de travail de gouvernance, la formation des praticiens et le soutien à la revue institutionnelle.",
    ar: "بيئة تفاعلية غير موثوقة لعرض سير عمل الحوكمة وتدريب الممارسين ودعم المراجعة المؤسسية.",
  },
  "hiw.layer2_item1": { en: "Interactive workflow simulations", fr: "Simulations interactives de flux de travail", ar: "محاكاة تفاعلية لسير العمل" },
  "hiw.layer2_item2": { en: "Training and review environments", fr: "Environnements de formation et de révision", ar: "بيئات التدريب والمراجعة" },
  "hiw.layer2_item3": { en: "No authoritative effect on real records", fr: "Aucun effet faisant autorité sur les registres réels", ar: "لا تأثير موثوق على السجلات الحقيقية" },
  "hiw.layer2_status": { en: "STATUS: NON-AUTHORITATIVE", fr: "STATUT : NON FAISANT AUTORITÉ", ar: "الحالة: غير موثوقة" },

  "hiw.layer3_label": { en: "LAYER 3 — TRANSPARENCY", fr: "COUCHE 3 — TRANSPARENCE", ar: "الطبقة 3 — الشفافية" },
  "hiw.layer3_title": { en: "Transparency & Insight Layer", fr: "Couche de transparence et d'aperçu", ar: "طبقة الشفافية والرؤى" },
  "hiw.layer3_plain": {
    en: "Dashboards and indicators that visualise simulated governance data. Useful for understanding patterns — but not authoritative.",
    fr: "Tableaux de bord et indicateurs qui visualisent les données de gouvernance simulées. Utiles pour comprendre les tendances — mais ne faisant pas autorité.",
    ar: "لوحات معلومات ومؤشرات تعرض بيانات الحوكمة المحاكاة بصرياً. مفيدة لفهم الأنماط — لكنها غير موثوقة.",
  },
  "hiw.layer3_tech": {
    en: "Aggregate analytics, compliance indicators, and simulated metrics for governance pattern analysis. Non-authoritative visualisation.",
    fr: "Analyses agrégées, indicateurs de conformité et métriques simulées pour l'analyse des tendances de gouvernance. Visualisation non faisant autorité.",
    ar: "تحليلات مجمّعة ومؤشرات امتثال ومقاييس محاكاة لتحليل أنماط الحوكمة. تصور غير موثوق.",
  },
  "hiw.layer3_item1": { en: "Dashboards and aggregate indicators", fr: "Tableaux de bord et indicateurs agrégés", ar: "لوحات معلومات ومؤشرات مجمّعة" },
  "hiw.layer3_item2": { en: "Simulated record volume and status metrics", fr: "Volume de registres simulés et métriques d'état", ar: "حجم سجلات محاكاة ومقاييس الحالة" },
  "hiw.layer3_item3": { en: "Governance compliance visualisation", fr: "Visualisation de la conformité de gouvernance", ar: "تصور امتثال الحوكمة" },
  "hiw.layer3_item4": { en: "Version history and lifecycle tracking", fr: "Historique des versions et suivi du cycle de vie", ar: "سجل الإصدارات وتتبع دورة الحياة" },
  "hiw.layer3_status": { en: "STATUS: NON-AUTHORITATIVE", fr: "STATUT : NON FAISANT AUTORITÉ", ar: "الحالة: غير موثوقة" },

  "hiw.authority_statement": {
    en: "Governance authority derives from documented rules, accountability, and verifiable records — not from software execution.",
    fr: "L'autorité de gouvernance découle de règles documentées, de la responsabilité et de registres vérifiables — pas de l'exécution logicielle.",
    ar: "تنبع سلطة الحوكمة من القواعد الموثقة والمساءلة والسجلات القابلة للتحقق — وليس من تنفيذ البرمجيات.",
  },
};
