import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", fr: "Accueil", ar: "الرئيسية" },
  "nav.transparency": { en: "Transparency & Governance", fr: "Transparence et gouvernance", ar: "الشفافية والحوكمة" },
  "nav.membership": { en: "Membership & Advisory", fr: "Adhésion et conseil", ar: "العضوية والاستشارات" },
  "nav.contact": { en: "Contact", fr: "Contact", ar: "اتصل بنا" },
  "nav.recognition": { en: "Recognition Framework", fr: "Cadre de reconnaissance", ar: "إطار الاعتراف" },
  "nav.alignment": { en: "Institutional Alignment", fr: "Alignement institutionnel", ar: "التوافق المؤسسي" },
  "nav.ethics": { en: "Governance Ethics", fr: "Éthique de gouvernance", ar: "أخلاقيات الحوكمة" },
  "nav.compliance": { en: "Compliance", fr: "Conformité", ar: "الامتثال" },
  "nav.architecture": { en: "Architecture", fr: "Architecture", ar: "الهندسة المعمارية" },
  "nav.dpi_stack": { en: "DPI Stack", fr: "Pile IPD", ar: "حزمة البنية التحتية الرقمية" },
  "nav.safeguards": { en: "Safeguards & Trust", fr: "Garanties et confiance", ar: "الضمانات والثقة" },
  "nav.deployment": { en: "Deployment Model", fr: "Modèle de déploiement", ar: "نموذج النشر" },
  "nav.academy": { en: "Academy", fr: "Académie", ar: "الأكاديمية" },
  "nav.archive": { en: "Archive", fr: "Archive", ar: "الأرشيف" },
  "nav.research": { en: "Research & Publications", fr: "Recherche et publications", ar: "البحوث والمنشورات" },
  "nav.partnerships": { en: "Global Partnerships", fr: "Partenariats mondiaux", ar: "الشراكات العالمية" },
  "nav.controlled": { en: "Controlled Access", fr: "Accès contrôlé", ar: "الوصول المحكوم" },

  // Layer labels
  "layer.authority": { en: "Authority", fr: "Autorité", ar: "السلطة" },
  "layer.standards": { en: "Standards", fr: "Normes", ar: "المعايير" },
  "layer.platform": { en: "Platform", fr: "Plateforme", ar: "المنصة" },
  "layer.archive": { en: "Archive", fr: "Archive", ar: "الأرشيف" },

  // Top bar
  "topbar.access": { en: "Access", fr: "Accès", ar: "وصول" },
  "topbar.request": { en: "Request Assessment", fr: "Demander une évaluation", ar: "طلب تقييم" },
  "topbar.plain": { en: "Plain English", fr: "Langage clair", ar: "لغة مبسّطة" },
  "topbar.plain_short": { en: "Plain", fr: "Clair", ar: "مبسّط" },
  "topbar.technical": { en: "Technical", fr: "Technique", ar: "تقني" },
  "topbar.tech_short": { en: "Tech", fr: "Tech", ar: "تقني" },

  // Footer
  "footer.infrastructure": { en: "Infrastructure", fr: "Infrastructure", ar: "البنية التحتية" },
  "footer.framework": { en: "Framework", fr: "Cadre", ar: "الإطار" },
  "footer.engage": { en: "Engage", fr: "Engagement", ar: "المشاركة" },
  "footer.tagline": { en: "Global Record Governance Framework — Sovereign-grade Digital Public Infrastructure for institutional trust.", fr: "Cadre mondial de gouvernance des registres — Infrastructure publique numérique de niveau souverain pour la confiance institutionnelle.", ar: "إطار حوكمة السجلات العالمي — بنية تحتية رقمية عامة بمستوى سيادي للثقة المؤسسية." },
  "footer.quote": { en: "Trust should not rely on reputation. It should rely on structure.", fr: "La confiance ne devrait pas reposer sur la réputation. Elle devrait reposer sur la structure.", ar: "لا ينبغي أن تعتمد الثقة على السمعة. بل يجب أن تعتمد على البنية." },
  "footer.invented": { en: "Global Record Governance Framework — Invented and Owned by Tarek Wahid.", fr: "Cadre mondial de gouvernance des registres — Inventé et détenu par Tarek Wahid.", ar: "إطار حوكمة السجلات العالمي — اختراع وملكية طارق وحيد." },
  "footer.pilot": { en: "Pilot stage — not production-certified", fr: "Phase pilote — non certifié en production", ar: "مرحلة تجريبية — غير معتمد للإنتاج" },
  "footer.audit": { en: "Independent security audit planned", fr: "Audit de sécurité indépendant prévu", ar: "تدقيق أمني مستقل مخطط" },
  "footer.no_claims": { en: "No certification claims made", fr: "Aucune certification revendiquée", ar: "لا توجد مطالبات شهادات" },
  "footer.disclosure": { en: "Responsible disclosure: contact@globalrecordgovernance.com", fr: "Divulgation responsable : contact@globalrecordgovernance.com", ar: "الإفصاح المسؤول: contact@globalrecordgovernance.com" },
  "footer.evidence": { en: "Evidence", fr: "Preuves", ar: "الأدلة" },
  "footer.sitemap": { en: "Sitemap", fr: "Plan du site", ar: "خريطة الموقع" },
  "footer.privacy": { en: "Privacy", fr: "Confidentialité", ar: "الخصوصية" },
  "footer.terms": { en: "Terms", fr: "Conditions", ar: "الشروط" },

  // Simulation banner
  "sim.banner": { en: "SIMULATION ONLY — No Authoritative Records Are Created", fr: "SIMULATION UNIQUEMENT — Aucun registre officiel n'est créé", ar: "محاكاة فقط — لا يتم إنشاء سجلات رسمية" },

  // Common
  "common.governance_foundation": { en: "Governance Foundation", fr: "Fondation de gouvernance", ar: "مؤسسة الحوكمة" },
  "common.dpi": { en: "Digital Public Infrastructure", fr: "Infrastructure publique numérique", ar: "البنية التحتية الرقمية العامة" },
  "common.est": { en: "Standards Authority · Est. 2024", fr: "Autorité des normes · Fondée 2024", ar: "هيئة المعايير · تأسست 2024" },

  // ═══ HOME PAGE ═══
  "home.badge": { en: "Digital Public Infrastructure Standards Authority", fr: "Autorité des normes d'infrastructure publique numérique", ar: "هيئة معايير البنية التحتية الرقمية العامة" },
  "home.title_1": { en: "Global Record", fr: "Gouvernance", ar: "حوكمة" },
  "home.title_2": { en: "Governance", fr: "mondiale des", ar: "السجلات" },
  "home.title_3": { en: "Foundation", fr: "registres", ar: "العالمية" },
  "home.subtitle": { en: "Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Establishing the structural standard for verifiable institutional accountability.", fr: "Cadre mondial indépendant pour la gouvernance, la validation et la reconnaissance institutionnelle de l'infrastructure publique numérique. Établir la norme structurelle pour la responsabilité institutionnelle vérifiable.", ar: "إطار عالمي مستقل لحوكمة البنية التحتية الرقمية العامة والتحقق والاعتراف المؤسسي. وضع المعيار الهيكلي للمساءلة المؤسسية القابلة للتحقق." },
  "home.patent": { en: "Est. 2024 · Canadian Patent CA 3,300,102 · OECD DPI Aligned", fr: "Fondée 2024 · Brevet canadien CA 3,300,102 · Aligné IPD OCDE", ar: "تأسست 2024 · براءة اختراع كندية CA 3,300,102 · متوافق مع منظمة التعاون الاقتصادي" },
  "home.cta_assess": { en: "Request Governance Assessment", fr: "Demander une évaluation de gouvernance", ar: "طلب تقييم الحوكمة" },
  "home.cta_recognition": { en: "Apply for Recognition", fr: "Postuler pour la reconnaissance", ar: "التقدم للاعتراف" },
  "home.cta_framework": { en: "Access Framework", fr: "Accéder au cadre", ar: "الوصول إلى الإطار" },
  "home.stat_determinism": { en: "Policy Determinism", fr: "Déterminisme des politiques", ar: "حتمية السياسات" },
  "home.stat_audit": { en: "Audit Reconstruction", fr: "Reconstruction d'audit", ar: "إعادة بناء التدقيق" },
  "home.stat_recognition": { en: "Recognition Model", fr: "Modèle de reconnaissance", ar: "نموذج الاعتراف" },
  "home.stat_architecture": { en: "Architecture", fr: "Architecture", ar: "الهندسة المعمارية" },
  "home.stat_deployment": { en: "Deployment Model", fr: "Modèle de déploiement", ar: "نموذج النشر" },

  // Home sections
  "home.system_status": { en: "System Status", fr: "État du système", ar: "حالة النظام" },
  "home.live_dashboard": { en: "Live Trust Dashboard", fr: "Tableau de bord de confiance en direct", ar: "لوحة الثقة المباشرة" },
  "home.live_dashboard_sub": { en: "Real-time integrity metrics from the GRGF governance operating layer. All metrics are deterministically computed and independently verifiable.", fr: "Métriques d'intégrité en temps réel de la couche opérationnelle de gouvernance GRGF. Toutes les métriques sont calculées de manière déterministe et vérifiables indépendamment.", ar: "مقاييس النزاهة في الوقت الفعلي من طبقة تشغيل حوكمة GRGF. جميع المقاييس محسوبة حتمياً وقابلة للتحقق بشكل مستقل." },
  "home.problem": { en: "The Problem", fr: "Le problème", ar: "المشكلة" },
  "home.problem_title": { en: "$2.6 Trillion lost annually to governance failures", fr: "2,6 billions de dollars perdus annuellement en raison de défaillances de gouvernance", ar: "2.6 تريليون دولار تُفقد سنوياً بسبب إخفاقات الحوكمة" },
  "home.mandate": { en: "Our Mandate", fr: "Notre mandat", ar: "مهمتنا" },
  "home.mandate_title": { en: "The global standard for institutional record integrity", fr: "La norme mondiale pour l'intégrité des registres institutionnels", ar: "المعيار العالمي لنزاهة السجلات المؤسسية" },
  "home.principles": { en: "Governance Principles", fr: "Principes de gouvernance", ar: "مبادئ الحوكمة" },
  "home.charter": { en: "Charter Principles", fr: "Principes de la charte", ar: "مبادئ الميثاق" },
  "home.charter_sub": { en: "The Foundation's operational mandate is grounded in six non-negotiable principles that ensure structural neutrality and institutional trust.", fr: "Le mandat opérationnel de la Fondation repose sur six principes non négociables qui garantissent la neutralité structurelle et la confiance institutionnelle.", ar: "يستند التفويض التشغيلي للمؤسسة إلى ستة مبادئ غير قابلة للتفاوض تضمن الحياد الهيكلي والثقة المؤسسية." },
  "home.competitive": { en: "Competitive Positioning", fr: "Positionnement concurrentiel", ar: "الموقع التنافسي" },
  "home.competitive_title": { en: "What No Other DPI Does", fr: "Ce qu'aucune autre IPD ne fait", ar: "ما لا تفعله أي بنية تحتية رقمية أخرى" },
  "home.standards_registry": { en: "Standards Registry", fr: "Registre des normes", ar: "سجل المعايير" },
  "home.recognition_framework": { en: "Recognition Framework", fr: "Cadre de reconnaissance", ar: "إطار الاعتراف" },
  "home.tech_arch": { en: "Technical Architecture", fr: "Architecture technique", ar: "الهندسة المعمارية التقنية" },
  "home.six_layer": { en: "Six-Layer Governance Infrastructure", fr: "Infrastructure de gouvernance à six couches", ar: "بنية تحتية للحوكمة من ست طبقات" },
  "home.federation": { en: "Global Presence", fr: "Présence mondiale", ar: "الحضور العالمي" },
  "home.federation_title": { en: "Federation Network", fr: "Réseau de fédération", ar: "شبكة الاتحاد" },
  "home.alignment": { en: "International Alignment", fr: "Alignement international", ar: "التوافق الدولي" },
  "home.alignment_title": { en: "Multilateral Institutional Matrix", fr: "Matrice institutionnelle multilatérale", ar: "المصفوفة المؤسسية متعددة الأطراف" },
  "home.services": { en: "Institutional Engagement", fr: "Engagement institutionnel", ar: "المشاركة المؤسسية" },
  "home.services_title": { en: "How the Foundation Engages", fr: "Comment la Fondation s'engage", ar: "كيف تتفاعل المؤسسة" },
  "home.governance_model": { en: "Governance Model", fr: "Modèle de gouvernance", ar: "نموذج الحوكمة" },
  "home.governance_arch": { en: "Institutional Governance Architecture", fr: "Architecture de gouvernance institutionnelle", ar: "هندسة الحوكمة المؤسسية" },
  "home.deployment": { en: "Implementation Pathway", fr: "Parcours de mise en œuvre", ar: "مسار التنفيذ" },
  "home.deployment_title": { en: "National Pilot Implementation Model", fr: "Modèle de mise en œuvre du pilote national", ar: "نموذج تنفيذ المشروع التجريبي الوطني" },
  "home.impact": { en: "Global Relevance", fr: "Pertinence mondiale", ar: "الأهمية العالمية" },
  "home.impact_title": { en: "Sectors & Regions", fr: "Secteurs et régions", ar: "القطاعات والمناطق" },
  "home.closing_1": { en: "Trust should not rely", fr: "La confiance ne devrait pas", ar: "لا ينبغي أن تعتمد الثقة" },
  "home.closing_2": { en: "on reputation.", fr: "reposer sur la réputation.", ar: "على السمعة." },
  "home.closing_3": { en: "It should rely on structure.", fr: "Elle devrait reposer sur la structure.", ar: "بل يجب أن تعتمد على البنية." },
  "home.closing_sub": { en: "The Global Record Governance Foundation exists to make that structural trust possible — for every institution, at every level, in every jurisdiction.", fr: "La Fondation mondiale de gouvernance des registres existe pour rendre cette confiance structurelle possible — pour chaque institution, à chaque niveau, dans chaque juridiction.", ar: "تهدف مؤسسة حوكمة السجلات العالمية إلى جعل هذه الثقة الهيكلية ممكنة — لكل مؤسسة، على كل مستوى، في كل ولاية قضائية." },

  // ═══ INTERNATIONAL COMPLIANCE HUB ═══
  "compliance.hub": { en: "International Compliance Hub", fr: "Centre de conformité internationale", ar: "مركز الامتثال الدولي" },
  "compliance.title": { en: "Multilateral Institutional Alignment", fr: "Alignement institutionnel multilatéral", ar: "التوافق المؤسسي متعدد الأطراف" },
  "compliance.subtitle": { en: "Comprehensive compliance dashboard mapping GRGF capabilities across all major international governance frameworks — OECD, World Bank, United Nations, G20, ITU, and regional digital governance bodies.", fr: "Tableau de bord complet de conformité cartographiant les capacités du GRGF à travers tous les principaux cadres de gouvernance internationale — OCDE, Banque mondiale, Nations Unies, G20, UIT et organismes régionaux de gouvernance numérique.", ar: "لوحة معلومات شاملة للامتثال تعرض قدرات GRGF عبر جميع أطر الحوكمة الدولية الرئيسية — منظمة التعاون الاقتصادي والتنمية، البنك الدولي، الأمم المتحدة، مجموعة العشرين، الاتحاد الدولي للاتصالات، والهيئات الإقليمية." },
  "compliance.overview": { en: "Compliance Overview", fr: "Aperçu de la conformité", ar: "نظرة عامة على الامتثال" },
  "compliance.by_org": { en: "By Organization", fr: "Par organisation", ar: "حسب المنظمة" },
  "compliance.framework_alignment": { en: "Institutional Framework Alignment", fr: "Alignement du cadre institutionnel", ar: "توافق الإطار المؤسسي" },
  "compliance.cross_cutting": { en: "Cross-Cutting Compliance", fr: "Conformité transversale", ar: "الامتثال الشامل" },
  "compliance.universal": { en: "Universal Requirements", fr: "Exigences universelles", ar: "المتطلبات العالمية" },
  "compliance.full_assessment": { en: "Complete Compliance Assessment", fr: "Évaluation complète de la conformité", ar: "تقييم الامتثال الكامل" },
  "compliance.full_assessment_sub": { en: "For institutions requiring detailed compliance mapping, gap analysis, or formal alignment certification across any international framework.", fr: "Pour les institutions nécessitant une cartographie détaillée de la conformité, une analyse des écarts ou une certification formelle d'alignement à travers tout cadre international.", ar: "للمؤسسات التي تتطلب تخطيطاً مفصلاً للامتثال أو تحليل الفجوات أو شهادة توافق رسمية عبر أي إطار دولي." },
  "compliance.request_assessment": { en: "Request Compliance Assessment", fr: "Demander une évaluation de conformité", ar: "طلب تقييم الامتثال" },
  "compliance.self_assessment": { en: "Try Self-Assessment", fr: "Essayer l'auto-évaluation", ar: "جرّب التقييم الذاتي" },
  "compliance.stat_bodies": { en: "International Bodies", fr: "Organismes internationaux", ar: "الهيئات الدولية" },
  "compliance.stat_sdgs": { en: "SDGs Aligned", fr: "ODD alignés", ar: "أهداف التنمية المستدامة" },
  "compliance.stat_iso": { en: "ISO Standards", fr: "Normes ISO", ar: "معايير ISO" },
  "compliance.stat_regional": { en: "Regional Frameworks", fr: "Cadres régionaux", ar: "الأطر الإقليمية" },
  "compliance.stat_dpg": { en: "DPG Criteria Met", fr: "Critères BPN satisfaits", ar: "معايير المنفعة الرقمية العامة" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const stored = document.cookie.match(/grgf_lang=(en|fr|ar)/);
    return (stored?.[1] as Language) || "en";
  });

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [lang, isRTL]);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    document.cookie = `grgf_lang=${newLang};path=/;max-age=31536000;SameSite=Lax`;
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
