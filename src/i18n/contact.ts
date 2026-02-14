import type { Language } from "@/contexts/LanguageContext";

export const contactTranslations: Record<string, Record<Language, string>> = {
  "contact.title": { en: "Institutional Access", fr: "Accès institutionnel", ar: "الوصول المؤسسي" },
  "contact.subtitle": {
    en: "Professional inquiry channel for governments, multilateral institutions, auditors, and qualified institutional parties.",
    fr: "Canal de demande professionnelle pour les gouvernements, les institutions multilatérales, les auditeurs et les parties institutionnelles qualifiées.",
    ar: "قناة استفسار مهنية للحكومات والمؤسسات متعددة الأطراف والمدققين والأطراف المؤسسية المؤهلة.",
  },
  "contact.access_p1": {
    en: "GRGF institutional access is available to government agencies, courts, multilateral organisations, audit bodies, and qualified institutional parties with a legitimate governance interest. Access requests are reviewed under the framework's governance rules.",
    fr: "L'accès institutionnel au GRGF est disponible pour les agences gouvernementales, les tribunaux, les organisations multilatérales, les organes d'audit et les parties institutionnelles qualifiées ayant un intérêt légitime en matière de gouvernance. Les demandes d'accès sont examinées selon les règles de gouvernance du cadre.",
    ar: "الوصول المؤسسي لـ GRGF متاح للهيئات الحكومية والمحاكم والمنظمات متعددة الأطراف وهيئات التدقيق والأطراف المؤسسية المؤهلة التي لديها مصلحة حوكمة مشروعة. تُراجع طلبات الوصول وفقاً لقواعد حوكمة الإطار.",
  },
  "contact.access_p2": {
    en: "This channel is for institutional inquiries only. GRGF does not accept unsolicited commercial proposals, marketing partnerships, or media enquiries through this interface.",
    fr: "Ce canal est réservé aux demandes institutionnelles uniquement. Le GRGF n'accepte pas les propositions commerciales non sollicitées, les partenariats marketing ou les demandes médiatiques via cette interface.",
    ar: "هذه القناة مخصصة للاستفسارات المؤسسية فقط. لا يقبل GRGF العروض التجارية غير المرغوب فيها أو شراكات التسويق أو استفسارات وسائل الإعلام عبر هذه الواجهة.",
  },
  "contact.categories": { en: "Inquiry Categories", fr: "Catégories de demandes", ar: "فئات الاستفسارات" },
  "contact.sovereign_title": { en: "Sovereign Deployment", fr: "Déploiement souverain", ar: "النشر السيادي" },
  "contact.sovereign_desc": {
    en: "Inquiries regarding GRGF deployment within a national Digital Public Infrastructure framework.",
    fr: "Demandes concernant le déploiement du GRGF dans un cadre national d'infrastructure publique numérique.",
    ar: "استفسارات بشأن نشر GRGF ضمن إطار البنية التحتية الرقمية العامة الوطنية.",
  },
  "contact.federation_title": { en: "Federation Membership", fr: "Adhésion à la fédération", ar: "عضوية الاتحاد" },
  "contact.federation_desc": {
    en: "Applications for Tier 1, Tier 2, or Observer status within the GRGF federation model.",
    fr: "Candidatures pour le statut Niveau 1, Niveau 2 ou Observateur dans le modèle de fédération du GRGF.",
    ar: "طلبات للحصول على عضوية المستوى الأول أو الثاني أو مراقب ضمن نموذج اتحاد GRGF.",
  },
  "contact.audit_title": { en: "Institutional Audit", fr: "Audit institutionnel", ar: "التدقيق المؤسسي" },
  "contact.audit_desc": {
    en: "Requests for access to sealed records or hash manifests for audit or judicial purposes.",
    fr: "Demandes d'accès aux registres scellés ou aux manifestes de hachage à des fins d'audit ou judiciaires.",
    ar: "طلبات الوصول إلى السجلات المختومة أو قوائم التجزئة لأغراض التدقيق أو القضاء.",
  },
  "contact.technical_title": { en: "Technical Review", fr: "Revue technique", ar: "المراجعة التقنية" },
  "contact.technical_desc": {
    en: "Technical architecture review for institutional evaluation or integration assessment.",
    fr: "Revue de l'architecture technique pour l'évaluation institutionnelle ou l'évaluation d'intégration.",
    ar: "مراجعة الهندسة المعمارية التقنية للتقييم المؤسسي أو تقييم التكامل.",
  },
  "contact.inquiry": { en: "Institutional Inquiry", fr: "Demande institutionnelle", ar: "الاستفسار المؤسسي" },
  "contact.full_name": { en: "Full Name", fr: "Nom complet", ar: "الاسم الكامل" },
  "contact.name_placeholder": { en: "Name and title", fr: "Nom et titre", ar: "الاسم والمسمى الوظيفي" },
  "contact.institution": { en: "Institution", fr: "Institution", ar: "المؤسسة" },
  "contact.institution_placeholder": { en: "Organisation or government body", fr: "Organisation ou organisme gouvernemental", ar: "المنظمة أو الهيئة الحكومية" },
  "contact.email": { en: "Institutional Email", fr: "Courriel institutionnel", ar: "البريد الإلكتروني المؤسسي" },
  "contact.email_placeholder": { en: "official@institution.gov", fr: "officiel@institution.gov", ar: "official@institution.gov" },
  "contact.category_label": { en: "Inquiry Category", fr: "Catégorie de la demande", ar: "فئة الاستفسار" },
  "contact.select_category": { en: "Select category…", fr: "Sélectionner une catégorie…", ar: "اختر الفئة…" },
  "contact.details_label": { en: "Inquiry Details", fr: "Détails de la demande", ar: "تفاصيل الاستفسار" },
  "contact.details_placeholder": {
    en: "Describe the nature and purpose of your institutional inquiry…",
    fr: "Décrivez la nature et l'objectif de votre demande institutionnelle…",
    ar: "صف طبيعة وهدف استفسارك المؤسسي…",
  },
  "contact.submit": { en: "Submit Inquiry (Coming Soon)", fr: "Soumettre la demande (bientôt)", ar: "إرسال الاستفسار (قريباً)" },
  "contact.submit_note": { en: "Form submission requires backend integration", fr: "La soumission du formulaire nécessite une intégration backend", ar: "إرسال النموذج يتطلب تكامل الخادم الخلفي" },
  "contact.notice_label": { en: "Notice.", fr: "Avis.", ar: "إشعار." },
  "contact.notice": {
    en: "All communications through this channel are subject to GRGF governance rules. Inquiries are processed in the order received. Response times vary based on inquiry complexity and institutional verification requirements. GRGF does not guarantee response to inquiries that fall outside the defined categories or that lack verifiable institutional standing.",
    fr: "Toutes les communications via ce canal sont soumises aux règles de gouvernance du GRGF. Les demandes sont traitées dans l'ordre de réception. Les délais de réponse varient en fonction de la complexité de la demande et des exigences de vérification institutionnelle. Le GRGF ne garantit pas de réponse aux demandes qui ne relèvent pas des catégories définies ou qui manquent de statut institutionnel vérifiable.",
    ar: "تخضع جميع الاتصالات عبر هذه القناة لقواعد حوكمة GRGF. تُعالج الاستفسارات بترتيب استلامها. تختلف أوقات الاستجابة بناءً على تعقيد الاستفسار ومتطلبات التحقق المؤسسي. لا يضمن GRGF الرد على الاستفسارات التي تقع خارج الفئات المحددة أو التي تفتقر إلى مكانة مؤسسية قابلة للتحقق.",
  },
};
