import type { Language } from "@/contexts/LanguageContext";

export const theProblemTranslations: Record<string, Record<Language, string>> = {
  "problem.title": {
    en: "The Problem",
    fr: "Le problème",
    ar: "المشكلة",
  },
  "problem.subtitle": {
    en: "Why institutions fail at governance integrity at scale — and why compliance is not enforcement.",
    fr: "Pourquoi les institutions échouent en matière d'intégrité de gouvernance à grande échelle — et pourquoi la conformité n'est pas l'application.",
    ar: "لماذا تفشل المؤسسات في نزاهة الحوكمة على نطاق واسع — ولماذا الامتثال ليس إنفاذاً.",
  },
  "problem.first_principles": {
    en: "First Principles",
    fr: "Principes fondamentaux",
    ar: "المبادئ الأساسية",
  },
  "problem.fp_p1": {
    en: "Modern institutions manage trillions of dollars in public expenditure using systems designed for convenience — not integrity. Databases are mutable. Audit trails are retrospective. Compliance is self-reported. Policy enforcement depends on human discretion.",
    fr: "Les institutions modernes gèrent des milliers de milliards de dollars de dépenses publiques avec des systèmes conçus pour la commodité — pas pour l'intégrité. Les bases de données sont modifiables. Les pistes d'audit sont rétrospectives. La conformité est auto-déclarée. L'application des politiques dépend de la discrétion humaine.",
    ar: "تدير المؤسسات الحديثة تريليونات الدولارات من الإنفاق العام باستخدام أنظمة مصممة للراحة — وليس للنزاهة. قواعد البيانات قابلة للتعديل. مسارات التدقيق استرجاعية. الامتثال يُبلَّغ ذاتياً. وإنفاذ السياسات يعتمد على التقدير البشري.",
  },
  "problem.fp_p2": {
    en: "The result: institutional actions — approvals, disbursements, licensing decisions — can be modified, deleted, or suppressed after the fact by anyone with sufficient database privilege. There is no structural guarantee that what was recorded is what happened.",
    fr: "Le résultat : les actions institutionnelles — approbations, décaissements, décisions de licence — peuvent être modifiées, supprimées ou dissimulées après coup par quiconque dispose de privilèges suffisants sur la base de données. Il n'existe aucune garantie structurelle que ce qui a été enregistré correspond à ce qui s'est passé.",
    ar: "النتيجة: يمكن تعديل الإجراءات المؤسسية — الموافقات والمدفوعات وقرارات الترخيص — أو حذفها أو إخفاؤها بعد وقوعها من قبل أي شخص يملك صلاحيات كافية على قاعدة البيانات. لا توجد ضمانة هيكلية بأن ما تم تسجيله هو ما حدث فعلاً.",
  },
  "problem.fp_p3": {
    en: "This is not a technology problem. It is an architecture problem.",
    fr: "Ce n'est pas un problème technologique. C'est un problème d'architecture.",
    ar: "هذه ليست مشكلة تقنية. إنها مشكلة معمارية.",
  },
  "problem.why_fail": {
    en: "Why Current Systems Fail",
    fr: "Pourquoi les systèmes actuels échouent",
    ar: "لماذا تفشل الأنظمة الحالية",
  },
  "problem.mutable_title": {
    en: "Databases Are Mutable",
    fr: "Les bases de données sont modifiables",
    ar: "قواعد البيانات قابلة للتعديل",
  },
  "problem.mutable_desc": {
    en: "Standard relational databases allow privileged users — administrators, operators, insiders — to modify or delete records after creation. There is no structural immutability.",
    fr: "Les bases de données relationnelles standard permettent aux utilisateurs privilégiés — administrateurs, opérateurs, initiés — de modifier ou supprimer des enregistrements après leur création. Il n'y a pas d'immutabilité structurelle.",
    ar: "تسمح قواعد البيانات العلائقية القياسية للمستخدمين ذوي الامتيازات — المسؤولين والمشغلين والمطلعين — بتعديل السجلات أو حذفها بعد إنشائها. لا يوجد ثبات هيكلي.",
  },
  "problem.audit_title": {
    en: "Audits Are Retrospective",
    fr: "Les audits sont rétrospectifs",
    ar: "عمليات التدقيق استرجاعية",
  },
  "problem.audit_desc": {
    en: "Traditional audits occur months or years after events. By the time anomalies are detected, evidence may have been altered, deleted, or lost. Detection is too slow.",
    fr: "Les audits traditionnels ont lieu des mois ou des années après les événements. Le temps que les anomalies soient détectées, les preuves peuvent avoir été altérées, supprimées ou perdues. La détection est trop lente.",
    ar: "تحدث عمليات التدقيق التقليدية بعد أشهر أو سنوات من الأحداث. بحلول وقت اكتشاف الشذوذ، قد تكون الأدلة قد تم تغييرها أو حذفها أو فقدانها. الكشف بطيء جداً.",
  },
  "problem.compliance_title": {
    en: "Compliance Is Not Enforcement",
    fr: "La conformité n'est pas l'application",
    ar: "الامتثال ليس إنفاذاً",
  },
  "problem.compliance_desc": {
    en: "Compliance frameworks describe what should happen. They do not enforce it. A policy that is not structurally enforced is merely a suggestion.",
    fr: "Les cadres de conformité décrivent ce qui devrait se passer. Ils ne l'appliquent pas. Une politique qui n'est pas structurellement appliquée n'est qu'une suggestion.",
    ar: "تصف أطر الامتثال ما ينبغي أن يحدث. لكنها لا تنفذه. السياسة التي لا تُطبَّق هيكلياً ليست سوى اقتراح.",
  },
  "problem.discretion_title": {
    en: "Discretion Creates Vulnerability",
    fr: "La discrétion crée une vulnérabilité",
    ar: "التقدير يخلق ثغرة",
  },
  "problem.discretion_desc": {
    en: "When policy execution depends on human interpretation, identical inputs produce different outputs. Discretion introduces ambiguity, favoritism, and deniability.",
    fr: "Lorsque l'exécution des politiques dépend de l'interprétation humaine, des entrées identiques produisent des résultats différents. La discrétion introduit l'ambiguïté, le favoritisme et la possibilité de nier.",
    ar: "عندما يعتمد تنفيذ السياسات على التفسير البشري، تنتج مدخلات متطابقة مخرجات مختلفة. يُدخل التقدير الغموض والمحاباة وإمكانية الإنكار.",
  },
  "problem.scenarios": {
    en: "Three Scenarios Where This Fails",
    fr: "Trois scénarios où cela échoue",
    ar: "ثلاثة سيناريوهات حيث يفشل ذلك",
  },
  "problem.procurement_title": {
    en: "Procurement Approvals",
    fr: "Approbations des marchés publics",
    ar: "موافقات المشتريات",
  },
  "problem.procurement_problem": {
    en: "A $200M infrastructure contract is approved by a procurement authority. The approval record is stored in a standard database. Six months later, an auditor discovers the approval timestamp was modified after a political change. The original approver's identity was overwritten. No cryptographic seal exists to verify the original record.",
    fr: "Un contrat d'infrastructure de 200 M$ est approuvé par une autorité de marchés publics. L'enregistrement d'approbation est stocké dans une base de données standard. Six mois plus tard, un auditeur découvre que l'horodatage d'approbation a été modifié après un changement politique. L'identité de l'approbateur original a été écrasée. Aucun sceau cryptographique n'existe pour vérifier l'enregistrement original.",
    ar: "يُوافَق على عقد بنية تحتية بقيمة 200 مليون دولار من قبل هيئة المشتريات. يُخزَّن سجل الموافقة في قاعدة بيانات قياسية. بعد ستة أشهر، يكتشف المدقق أن الطابع الزمني للموافقة تم تعديله بعد تغيير سياسي. تم استبدال هوية المُعتمِد الأصلي. لا يوجد ختم تشفيري للتحقق من السجل الأصلي.",
  },
  "problem.procurement_consequence": {
    en: "The integrity of the procurement decision cannot be independently verified. Public funds are exposed to contestable authority.",
    fr: "L'intégrité de la décision de marché public ne peut être vérifiée de manière indépendante. Les fonds publics sont exposés à une autorité contestable.",
    ar: "لا يمكن التحقق من نزاهة قرار المشتريات بشكل مستقل. الأموال العامة معرضة لسلطة قابلة للطعن.",
  },
  "problem.grants_title": {
    en: "Grants Disbursement",
    fr: "Décaissement des subventions",
    ar: "صرف المنح",
  },
  "problem.grants_problem": {
    en: "A development agency disburses $50M in grants to regional organizations. The disbursement records are maintained in an internal system with admin override capabilities. A privileged operator modifies disbursement amounts retroactively to cover budget shortfalls in another program.",
    fr: "Une agence de développement décaisse 50 M$ en subventions à des organisations régionales. Les registres de décaissement sont maintenus dans un système interne avec des capacités de remplacement administratif. Un opérateur privilégié modifie rétroactivement les montants des décaissements pour couvrir les déficits budgétaires d'un autre programme.",
    ar: "تصرف وكالة تنمية 50 مليون دولار كمنح لمنظمات إقليمية. تُحفظ سجلات الصرف في نظام داخلي يتمتع بقدرات التجاوز الإداري. يعدّل مشغل مُمتاز مبالغ الصرف بأثر رجعي لتغطية عجز ميزانية برنامج آخر.",
  },
  "problem.grants_consequence": {
    en: "Grant recipients receive different amounts than recorded. The audit trail shows no discrepancy because the trail itself was modified.",
    fr: "Les bénéficiaires de subventions reçoivent des montants différents de ceux enregistrés. La piste d'audit ne montre aucun écart car la piste elle-même a été modifiée.",
    ar: "يتلقى المستفيدون من المنح مبالغ مختلفة عن المسجلة. لا يُظهر مسار التدقيق أي تناقض لأن المسار نفسه تم تعديله.",
  },
  "problem.regulatory_title": {
    en: "Regulatory Licensing",
    fr: "Licences réglementaires",
    ar: "الترخيص التنظيمي",
  },
  "problem.regulatory_problem": {
    en: "A regulatory body issues operating licenses to financial institutions. License conditions are stored as database records. A senior official modifies license conditions post-issuance to accommodate a politically connected entity. The modification is invisible to standard audit procedures.",
    fr: "Un organisme de réglementation émet des licences d'exploitation aux institutions financières. Les conditions de licence sont stockées comme des enregistrements de base de données. Un haut fonctionnaire modifie les conditions de licence après l'émission pour accommoder une entité politiquement connectée. La modification est invisible aux procédures d'audit standard.",
    ar: "تُصدر هيئة تنظيمية تراخيص تشغيل للمؤسسات المالية. تُخزَّن شروط الترخيص كسجلات قاعدة بيانات. يعدّل مسؤول رفيع شروط الترخيص بعد الإصدار لاستيعاب كيان ذي علاقات سياسية. التعديل غير مرئي لإجراءات التدقيق القياسية.",
  },
  "problem.regulatory_consequence": {
    en: "Regulatory integrity is compromised. The licensing authority cannot prove what conditions were originally imposed.",
    fr: "L'intégrité réglementaire est compromise. L'autorité de délivrance des licences ne peut prouver quelles conditions ont été initialement imposées.",
    ar: "تتعرض النزاهة التنظيمية للخطر. لا تستطيع هيئة الترخيص إثبات الشروط التي فُرضت في الأصل.",
  },
  "problem.consequence": {
    en: "Consequence:",
    fr: "Conséquence :",
    ar: "النتيجة:",
  },
  "problem.what_changes": {
    en: "What GRGF Changes",
    fr: "Ce que GRGF change",
    ar: "ما يغيّره GRGF",
  },
  "problem.changes_intro": {
    en: "Administrative action becomes a cryptographically verifiable event governed by deterministic rules.",
    fr: "L'action administrative devient un événement vérifiable cryptographiquement, régi par des règles déterministes.",
    ar: "يصبح الإجراء الإداري حدثاً قابلاً للتحقق بالتشفير ومحكوماً بقواعد حتمية.",
  },
  "problem.change_1": {
    en: "Every institutional action is captured, normalized, and sealed — not stored in a mutable database.",
    fr: "Chaque action institutionnelle est capturée, normalisée et scellée — pas stockée dans une base de données modifiable.",
    ar: "يتم التقاط كل إجراء مؤسسي وتطبيعه وختمه — وليس تخزينه في قاعدة بيانات قابلة للتعديل.",
  },
  "problem.change_2": {
    en: "Policy enforcement is deterministic — identical inputs produce identical outputs, every time.",
    fr: "L'application des politiques est déterministe — des entrées identiques produisent des résultats identiques, à chaque fois.",
    ar: "إنفاذ السياسات حتمي — مدخلات متطابقة تنتج مخرجات متطابقة في كل مرة.",
  },
  "problem.change_3": {
    en: "Records cannot be modified, deleted, or reordered after sealing — by anyone, including system operators.",
    fr: "Les enregistrements ne peuvent être modifiés, supprimés ou réordonnés après le scellement — par personne, y compris les opérateurs du système.",
    ar: "لا يمكن تعديل السجلات أو حذفها أو إعادة ترتيبها بعد الختم — من قبل أي شخص، بما في ذلك مشغلو النظام.",
  },
  "problem.change_4": {
    en: "Omissions are detectable — the system provides proof-of-absence, not just proof-of-existence.",
    fr: "Les omissions sont détectables — le système fournit une preuve d'absence, pas seulement une preuve d'existence.",
    ar: "الإغفالات قابلة للكشف — يوفر النظام إثبات الغياب وليس فقط إثبات الوجود.",
  },
  "problem.change_5": {
    en: "Independent verification requires no trust in the operator — integrity is structural, not procedural.",
    fr: "La vérification indépendante ne nécessite aucune confiance dans l'opérateur — l'intégrité est structurelle, pas procédurale.",
    ar: "لا يتطلب التحقق المستقل الثقة في المشغل — النزاهة هيكلية وليست إجرائية.",
  },
  "problem.view_architecture": {
    en: "View System Architecture",
    fr: "Voir l'architecture du système",
    ar: "عرض هندسة النظام",
  },
  "problem.attribution": {
    en: "Global Record Governance Framework — Invented and Owned by Tarek Wahid.",
    fr: "Cadre mondial de gouvernance des registres — Inventé et détenu par Tarek Wahid.",
    ar: "إطار حوكمة السجلات العالمي — اختراع وملكية طارق وحيد.",
  },
  "common.attribution_label": {
    en: "Attribution.",
    fr: "Attribution.",
    ar: "الإسناد.",
  },
};
