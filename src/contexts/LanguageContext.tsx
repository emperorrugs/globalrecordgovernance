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
  "home.closing_sub": { en: "The Global Record Governance Framework exists to make that structural trust possible — for every institution, at every level, in every jurisdiction.", fr: "Le Cadre mondial de gouvernance des registres existe pour rendre cette confiance structurelle possible — pour chaque institution, à chaque niveau, dans chaque juridiction.", ar: "يهدف إطار حوكمة السجلات العالمي إلى جعل هذه الثقة الهيكلية ممكنة — لكل مؤسسة، على كل مستوى، في كل ولاية قضائية." },

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

  // ═══ OECD SAFEGUARDS ═══
  "oecd.overline": { en: "OECD DPI Assessment", fr: "Évaluation IPD de l'OCDE", ar: "تقييم البنية التحتية الرقمية لمنظمة التعاون" },
  "oecd.title": { en: "DPI Safeguards Scorecard", fr: "Tableau de bord des garanties IPD", ar: "بطاقة أداء ضمانات البنية التحتية الرقمية" },
  "oecd.subtitle": { en: "Interactive self-assessment aligned with the OECD's five-pillar Digital Public Infrastructure safeguards framework. Score your institution's governance maturity across all dimensions.", fr: "Auto-évaluation interactive alignée sur le cadre de garanties à cinq piliers de l'OCDE pour l'infrastructure publique numérique. Évaluez la maturité de gouvernance de votre institution.", ar: "تقييم ذاتي تفاعلي متوافق مع إطار ضمانات البنية التحتية الرقمية العامة ذو الخمسة أركان لمنظمة التعاون. قيّم نضج الحوكمة في مؤسستك." },
  "oecd.overall": { en: "Overall Assessment", fr: "Évaluation globale", ar: "التقييم العام" },
  "oecd.pillar_assessment": { en: "Pillar Assessment", fr: "Évaluation par pilier", ar: "تقييم الأركان" },
  "oecd.score_each": { en: "Score Each Dimension", fr: "Évaluer chaque dimension", ar: "تقييم كل بُعد" },
  "oecd.methodology": { en: "Methodology", fr: "Méthodologie", ar: "المنهجية" },
  "oecd.framework": { en: "Assessment Framework", fr: "Cadre d'évaluation", ar: "إطار التقييم" },
  "oecd.request_formal": { en: "Request Formal Assessment", fr: "Demander une évaluation formelle", ar: "طلب تقييم رسمي" },
  "oecd.cta_desc": { en: "The Foundation's Technical Review Panel provides independent, structured governance maturity assessments for institutions seeking formal DPI recognition.", fr: "Le panel de révision technique de la Fondation fournit des évaluations indépendantes et structurées de la maturité de gouvernance pour les institutions cherchant une reconnaissance formelle IPD.", ar: "يوفر فريق المراجعة الفنية للمؤسسة تقييمات مستقلة ومنظمة لنضج الحوكمة للمؤسسات الساعية للحصول على اعتراف رسمي بالبنية التحتية الرقمية." },
  "oecd.request_assessment": { en: "Request Assessment", fr: "Demander une évaluation", ar: "طلب تقييم" },

  // ═══ WORLD BANK ═══
  "wb.overline": { en: "World Bank Alignment", fr: "Alignement Banque mondiale", ar: "توافق البنك الدولي" },
  "wb.title": { en: "GovTech Maturity & Digital Government Readiness", fr: "Maturité GovTech et préparation au gouvernement numérique", ar: "نضج التكنولوجيا الحكومية والجاهزية للحكومة الرقمية" },
  "wb.subtitle": { en: "Comprehensive alignment mapping between GRGF capabilities and World Bank GovTech Maturity Index (GTMI), Digital Government Readiness Assessment, and institutional capacity frameworks.", fr: "Cartographie complète de l'alignement entre les capacités du GRGF et l'Indice de maturité GovTech (GTMI) de la Banque mondiale, l'évaluation de la préparation au gouvernement numérique et les cadres de capacité institutionnelle.", ar: "خريطة شاملة للتوافق بين قدرات GRGF ومؤشر نضج التكنولوجيا الحكومية للبنك الدولي وتقييم الجاهزية للحكومة الرقمية وأطر القدرات المؤسسية." },
  "wb.impact": { en: "Global Impact Context", fr: "Contexte d'impact mondial", ar: "سياق التأثير العالمي" },
  "wb.why_cares": { en: "Why the World Bank Cares", fr: "Pourquoi la Banque mondiale s'y intéresse", ar: "لماذا يهتم البنك الدولي" },
  "wb.gtmi": { en: "GTMI Alignment", fr: "Alignement GTMI", ar: "توافق مؤشر GTMI" },
  "wb.gtmi_title": { en: "GovTech Maturity Index Mapping", fr: "Cartographie de l'indice de maturité GovTech", ar: "خريطة مؤشر نضج التكنولوجيا الحكومية" },
  "wb.digital_dev": { en: "Digital Development", fr: "Développement numérique", ar: "التنمية الرقمية" },
  "wb.digital_dev_title": { en: "World Bank Digital Development Principles", fr: "Principes de développement numérique de la Banque mondiale", ar: "مبادئ التنمية الرقمية للبنك الدولي" },
  "wb.value": { en: "Institutional Value", fr: "Valeur institutionnelle", ar: "القيمة المؤسسية" },
  "wb.value_title": { en: "Value Proposition for Development Finance", fr: "Proposition de valeur pour le financement du développement", ar: "عرض القيمة لتمويل التنمية" },
  "wb.partnership": { en: "Development Partnership", fr: "Partenariat de développement", ar: "شراكة التنمية" },
  "wb.partnership_desc": { en: "For World Bank country teams, development finance institutions, or governance reform programmes seeking structural accountability infrastructure.", fr: "Pour les équipes-pays de la Banque mondiale, les institutions de financement du développement ou les programmes de réforme de la gouvernance cherchant une infrastructure de responsabilité structurelle.", ar: "لفرق البنك الدولي القُطرية ومؤسسات تمويل التنمية أو برامج إصلاح الحوكمة الباحثة عن بنية تحتية للمساءلة الهيكلية." },
  "wb.request_brief": { en: "Request Technical Brief", fr: "Demander une note technique", ar: "طلب موجز تقني" },

  // ═══ UN ALIGNMENT ═══
  "un.overline": { en: "United Nations Alignment", fr: "Alignement Nations Unies", ar: "توافق الأمم المتحدة" },
  "un.title": { en: "UN SDG Impact & Digital Public Goods", fr: "Impact ODD de l'ONU et biens publics numériques", ar: "تأثير أهداف التنمية المستدامة والمنافع الرقمية العامة" },
  "un.subtitle": { en: "Alignment with UN Sustainable Development Goals, Digital Public Goods Alliance criteria, E-Government Development Index standards, and the UN Secretary-General's Roadmap for Digital Cooperation.", fr: "Alignement sur les objectifs de développement durable de l'ONU, les critères de l'Alliance des biens publics numériques, les normes de l'indice de développement de l'administration en ligne et la feuille de route du Secrétaire général des Nations Unies pour la coopération numérique.", ar: "التوافق مع أهداف التنمية المستدامة للأمم المتحدة ومعايير تحالف المنافع الرقمية العامة ومعايير مؤشر تطوير الحكومة الإلكترونية وخارطة طريق الأمين العام للتعاون الرقمي." },
  "un.sdg": { en: "SDG Alignment", fr: "Alignement ODD", ar: "توافق أهداف التنمية المستدامة" },
  "un.sdg_title": { en: "Sustainable Development Goals Impact", fr: "Impact des objectifs de développement durable", ar: "تأثير أهداف التنمية المستدامة" },
  "un.dpga": { en: "Digital Public Goods Alliance", fr: "Alliance des biens publics numériques", ar: "تحالف المنافع الرقمية العامة" },
  "un.dpg_title": { en: "DPG Standard Compliance", fr: "Conformité à la norme BPN", ar: "الامتثال لمعيار المنافع الرقمية العامة" },
  "un.dpg_desc": { en: "Assessment against the Digital Public Goods Alliance's 9-point standard for recognition as a Digital Public Good (DPG).", fr: "Évaluation par rapport à la norme en 9 points de l'Alliance des biens publics numériques pour la reconnaissance en tant que bien public numérique (BPN).", ar: "تقييم وفقاً لمعيار النقاط التسع لتحالف المنافع الرقمية العامة للاعتراف كمنفعة رقمية عامة." },
  "un.digital_coop": { en: "Digital Cooperation", fr: "Coopération numérique", ar: "التعاون الرقمي" },
  "un.digital_coop_title": { en: "UN Secretary-General's Roadmap Alignment", fr: "Alignement sur la feuille de route du Secrétaire général de l'ONU", ar: "التوافق مع خارطة طريق الأمين العام للأمم المتحدة" },
  "un.egov": { en: "E-Government", fr: "Administration en ligne", ar: "الحكومة الإلكترونية" },
  "un.egdi_title": { en: "E-Government Development Index (EGDI)", fr: "Indice de développement de l'administration en ligne (EGDI)", ar: "مؤشر تطوير الحكومة الإلكترونية" },
  "un.engagement": { en: "UN Agency Engagement", fr: "Engagement avec les agences de l'ONU", ar: "التعاون مع وكالات الأمم المتحدة" },
  "un.engagement_desc": { en: "For UN agencies, DPGA members, or SDG-aligned institutions seeking governance integrity infrastructure for development programmes.", fr: "Pour les agences de l'ONU, les membres de l'Alliance BPN ou les institutions alignées sur les ODD cherchant une infrastructure d'intégrité de gouvernance pour les programmes de développement.", ar: "لوكالات الأمم المتحدة وأعضاء تحالف المنافع الرقمية أو المؤسسات المتوافقة مع أهداف التنمية المستدامة الباحثة عن بنية تحتية لنزاهة الحوكمة." },
  "un.request_brief": { en: "Request Institutional Brief", fr: "Demander une note institutionnelle", ar: "طلب موجز مؤسسي" },

  // ═══ G20 DPI FRAMEWORK ═══
  "g20.overline": { en: "G20 DPI Framework", fr: "Cadre IPD du G20", ar: "إطار البنية التحتية الرقمية لمجموعة العشرين" },
  "g20.title": { en: "G20 Digital Public Infrastructure Alignment", fr: "Alignement sur l'infrastructure publique numérique du G20", ar: "توافق البنية التحتية الرقمية العامة لمجموعة العشرين" },
  "g20.subtitle": { en: "Mapping GRGF capabilities to the G20 Framework for Digital Public Infrastructure, the India Stack model, and the Co-Develop bilateral initiative for inclusive DPI deployment.", fr: "Cartographie des capacités du GRGF sur le cadre du G20 pour l'infrastructure publique numérique, le modèle India Stack et l'initiative bilatérale Co-Develop pour un déploiement inclusif de l'IPD.", ar: "تخطيط قدرات GRGF على إطار مجموعة العشرين للبنية التحتية الرقمية العامة ونموذج India Stack ومبادرة التطوير المشترك الثنائية." },
  "g20.principles": { en: "Core Principles", fr: "Principes fondamentaux", ar: "المبادئ الأساسية" },
  "g20.principles_title": { en: "G20 DPI Principles Alignment", fr: "Alignement sur les principes IPD du G20", ar: "التوافق مع مبادئ البنية التحتية الرقمية لمجموعة العشرين" },
  "g20.stack": { en: "DPI Stack Position", fr: "Position dans la pile IPD", ar: "موقع حزمة البنية التحتية الرقمية" },
  "g20.stack_title": { en: "GRGF as the Governance Integrity Layer", fr: "GRGF comme couche d'intégrité de gouvernance", ar: "GRGF كطبقة نزاهة الحوكمة" },
  "g20.codevelop": { en: "Co-Develop Initiative", fr: "Initiative Co-Develop", ar: "مبادرة التطوير المشترك" },
  "g20.codevelop_title": { en: "Complementary DPI Integration", fr: "Intégration complémentaire de l'IPD", ar: "التكامل التكميلي للبنية التحتية الرقمية" },
  "g20.comparative": { en: "Comparative Analysis", fr: "Analyse comparative", ar: "التحليل المقارن" },
  "g20.comparative_title": { en: "GRGF vs. India Stack Model", fr: "GRGF vs. modèle India Stack", ar: "GRGF مقابل نموذج India Stack" },
  "g20.engagement": { en: "G20 DPI Engagement", fr: "Engagement IPD du G20", ar: "التعاون في البنية التحتية الرقمية لمجموعة العشرين" },
  "g20.engagement_desc": { en: "For G20 working groups, DPI task forces, or national digital transformation offices evaluating governance integrity infrastructure.", fr: "Pour les groupes de travail du G20, les forces de mission IPD ou les bureaux nationaux de transformation numérique évaluant l'infrastructure d'intégrité de gouvernance.", ar: "لمجموعات عمل مجموعة العشرين وفرق عمل البنية التحتية الرقمية أو مكاتب التحول الرقمي الوطنية." },
  "g20.request_assessment": { en: "Request Framework Assessment", fr: "Demander une évaluation du cadre", ar: "طلب تقييم الإطار" },

  // ═══ ITU GLOBAL STANDARDS ═══
  "itu.overline": { en: "Global Standards Bodies", fr: "Organismes de normalisation mondiaux", ar: "هيئات المعايير العالمية" },
  "itu.title": { en: "ITU & Regional DPI Standards", fr: "Normes IPD de l'UIT et régionales", ar: "معايير الاتحاد الدولي للاتصالات والمعايير الإقليمية" },
  "itu.subtitle": { en: "Alignment with International Telecommunication Union standards, regional digital governance frameworks, and bilateral DPI cooperation initiatives worldwide.", fr: "Alignement sur les normes de l'Union internationale des télécommunications, les cadres régionaux de gouvernance numérique et les initiatives bilatérales de coopération en matière d'IPD dans le monde.", ar: "التوافق مع معايير الاتحاد الدولي للاتصالات وأطر الحوكمة الرقمية الإقليمية ومبادرات التعاون الثنائية في البنية التحتية الرقمية." },
  "itu.standards": { en: "ITU Standards", fr: "Normes de l'UIT", ar: "معايير الاتحاد الدولي للاتصالات" },
  "itu.standards_title": { en: "ITU-T Standard Alignment", fr: "Alignement sur les normes UIT-T", ar: "التوافق مع معايير UIT-T" },
  "itu.wsis": { en: "WSIS+20 Alignment", fr: "Alignement SMSI+20", ar: "توافق القمة العالمية لمجتمع المعلومات +20" },
  "itu.wsis_title": { en: "World Summit on the Information Society", fr: "Sommet mondial sur la société de l'information", ar: "القمة العالمية لمجتمع المعلومات" },
  "itu.regional": { en: "Regional Frameworks", fr: "Cadres régionaux", ar: "الأطر الإقليمية" },
  "itu.regional_title": { en: "Regional Digital Governance Alignment", fr: "Alignement régional de la gouvernance numérique", ar: "التوافق الإقليمي للحوكمة الرقمية" },
  "itu.multilateral": { en: "Multilateral Governance", fr: "Gouvernance multilatérale", ar: "الحوكمة متعددة الأطراف" },
  "itu.multilateral_title": { en: "Additional Multilateral Alignment", fr: "Alignement multilatéral supplémentaire", ar: "التوافق متعدد الأطراف الإضافي" },
  "itu.engagement": { en: "International Standards Engagement", fr: "Engagement en matière de normes internationales", ar: "التعاون في المعايير الدولية" },
  "itu.engagement_desc": { en: "For ITU study groups, regional standards bodies, or international organizations evaluating governance integrity infrastructure alignment.", fr: "Pour les groupes d'étude de l'UIT, les organismes régionaux de normalisation ou les organisations internationales évaluant l'alignement de l'infrastructure d'intégrité de gouvernance.", ar: "لمجموعات دراسة الاتحاد الدولي للاتصالات وهيئات المعايير الإقليمية أو المنظمات الدولية التي تقيّم توافق بنية نزاهة الحوكمة." },
  "itu.request_brief": { en: "Request Standards Brief", fr: "Demander une note sur les normes", ar: "طلب موجز المعايير" },

  // ═══ UNESCO ALIGNMENT ═══
  "unesco.overline": { en: "UNESCO Alignment", fr: "Alignement UNESCO", ar: "توافق اليونسكو" },
  "unesco.title": { en: "UNESCO Digital Governance Standards", fr: "Normes de gouvernance numérique de l'UNESCO", ar: "معايير الحوكمة الرقمية لليونسكو" },
  "unesco.subtitle": { en: "Alignment with UNESCO's Internet Universality ROAM-X Indicators, Recommendation on the Ethics of AI, Information for All Programme (IFAP), and Memory of the World documentary heritage standards.", fr: "Alignement sur les indicateurs ROAM-X d'universalité d'Internet de l'UNESCO, la recommandation sur l'éthique de l'IA, le programme Information pour tous (PIPT) et les normes du patrimoine documentaire Mémoire du monde.", ar: "التوافق مع مؤشرات عالمية الإنترنت ROAM-X لليونسكو وتوصية أخلاقيات الذكاء الاصطناعي وبرنامج المعلومات للجميع ومعايير التراث الوثائقي ذاكرة العالم." },
  "unesco.roamx": { en: "ROAM-X Framework", fr: "Cadre ROAM-X", ar: "إطار ROAM-X" },
  "unesco.roamx_title": { en: "Internet Universality ROAM-X Indicators", fr: "Indicateurs d'universalité d'Internet ROAM-X", ar: "مؤشرات عالمية الإنترنت ROAM-X" },
  "unesco.roamx_desc": { en: "UNESCO's ROAM-X framework assesses digital ecosystems across five dimensions. GRGF alignment demonstrates governance infrastructure that strengthens each dimension.", fr: "Le cadre ROAM-X de l'UNESCO évalue les écosystèmes numériques selon cinq dimensions. L'alignement du GRGF démontre une infrastructure de gouvernance qui renforce chaque dimension.", ar: "يقيّم إطار ROAM-X لليونسكو النظم البيئية الرقمية عبر خمسة أبعاد. يُظهر توافق GRGF بنية تحتية للحوكمة تعزز كل بُعد." },
  "unesco.ai_ethics": { en: "AI Ethics", fr: "Éthique de l'IA", ar: "أخلاقيات الذكاء الاصطناعي" },
  "unesco.ai_ethics_title": { en: "UNESCO Recommendation on AI Ethics", fr: "Recommandation de l'UNESCO sur l'éthique de l'IA", ar: "توصية اليونسكو بشأن أخلاقيات الذكاء الاصطناعي" },
  "unesco.ai_ethics_desc": { en: "The first global normative instrument on AI ethics, adopted by all 193 UNESCO Member States in 2021. GRGF aligns with all eight core principles as governance infrastructure.", fr: "Le premier instrument normatif mondial sur l'éthique de l'IA, adopté par les 193 États membres de l'UNESCO en 2021. Le GRGF s'aligne sur les huit principes fondamentaux en tant qu'infrastructure de gouvernance.", ar: "أول أداة معيارية عالمية بشأن أخلاقيات الذكاء الاصطناعي، اعتمدتها جميع الدول الأعضاء في اليونسكو البالغ عددها 193 في عام 2021. يتوافق GRGF مع جميع المبادئ الأساسية الثمانية." },
  "unesco.trust": { en: "Internet for Trust", fr: "Internet pour la confiance", ar: "الإنترنت من أجل الثقة" },
  "unesco.trust_title": { en: "Guidelines for Digital Platform Regulation", fr: "Lignes directrices pour la réglementation des plateformes numériques", ar: "مبادئ توجيهية لتنظيم المنصات الرقمية" },
  "unesco.heritage": { en: "Documentary Heritage", fr: "Patrimoine documentaire", ar: "التراث الوثائقي" },
  "unesco.heritage_title": { en: "Information Preservation & Access", fr: "Préservation et accès à l'information", ar: "حفظ المعلومات والوصول إليها" },
  "unesco.ifap": { en: "IFAP Programme", fr: "Programme PIPT", ar: "برنامج المعلومات للجميع" },
  "unesco.ifap_title": { en: "Information for All Programme Alignment", fr: "Alignement sur le programme Information pour tous", ar: "التوافق مع برنامج المعلومات للجميع" },
  "unesco.engagement": { en: "UNESCO Engagement", fr: "Engagement UNESCO", ar: "التعاون مع اليونسكو" },
  "unesco.engagement_desc": { en: "For UNESCO National Commissions, IFAP committees, or institutions seeking governance infrastructure aligned with UNESCO's digital governance and information preservation standards.", fr: "Pour les commissions nationales de l'UNESCO, les comités PIPT ou les institutions cherchant une infrastructure de gouvernance alignée sur les normes de gouvernance numérique et de préservation de l'information de l'UNESCO.", ar: "للجان الوطنية لليونسكو ولجان برنامج المعلومات للجميع أو المؤسسات الباحثة عن بنية تحتية للحوكمة متوافقة مع معايير اليونسكو." },
  "unesco.request_brief": { en: "Request UNESCO Alignment Brief", fr: "Demander une note d'alignement UNESCO", ar: "طلب موجز توافق اليونسكو" },
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
