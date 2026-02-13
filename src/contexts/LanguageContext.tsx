import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "fr";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.home": { en: "Home", fr: "Accueil" },
  "nav.transparency": { en: "Transparency & Governance", fr: "Transparence et gouvernance" },
  "nav.membership": { en: "Membership & Advisory", fr: "Adhésion et conseil" },
  "nav.contact": { en: "Contact", fr: "Contact" },
  "nav.recognition": { en: "Recognition Framework", fr: "Cadre de reconnaissance" },
  "nav.alignment": { en: "Institutional Alignment", fr: "Alignement institutionnel" },
  "nav.ethics": { en: "Governance Ethics", fr: "Éthique de gouvernance" },
  "nav.compliance": { en: "Compliance", fr: "Conformité" },
  "nav.architecture": { en: "Architecture", fr: "Architecture" },
  "nav.dpi_stack": { en: "DPI Stack", fr: "Pile IPD" },
  "nav.safeguards": { en: "Safeguards & Trust", fr: "Garanties et confiance" },
  "nav.deployment": { en: "Deployment Model", fr: "Modèle de déploiement" },
  "nav.academy": { en: "Academy", fr: "Académie" },
  "nav.archive": { en: "Archive", fr: "Archive" },
  "nav.research": { en: "Research & Publications", fr: "Recherche et publications" },
  "nav.partnerships": { en: "Global Partnerships", fr: "Partenariats mondiaux" },
  "nav.controlled": { en: "Controlled Access", fr: "Accès contrôlé" },

  // Layer labels
  "layer.authority": { en: "Authority", fr: "Autorité" },
  "layer.standards": { en: "Standards", fr: "Normes" },
  "layer.platform": { en: "Platform", fr: "Plateforme" },
  "layer.archive": { en: "Archive", fr: "Archive" },

  // Top bar
  "topbar.access": { en: "Access", fr: "Accès" },
  "topbar.request": { en: "Request Assessment", fr: "Demander une évaluation" },
  "topbar.plain": { en: "Plain English", fr: "Langage clair" },
  "topbar.plain_short": { en: "Plain", fr: "Clair" },
  "topbar.technical": { en: "Technical", fr: "Technique" },
  "topbar.tech_short": { en: "Tech", fr: "Tech" },

  // Footer
  "footer.infrastructure": { en: "Infrastructure", fr: "Infrastructure" },
  "footer.framework": { en: "Framework", fr: "Cadre" },
  "footer.engage": { en: "Engage", fr: "Engagement" },
  "footer.tagline": { en: "Global Record Governance Framework — Sovereign-grade Digital Public Infrastructure for institutional trust.", fr: "Cadre mondial de gouvernance des registres — Infrastructure publique numérique de niveau souverain pour la confiance institutionnelle." },
  "footer.quote": { en: "Trust should not rely on reputation. It should rely on structure.", fr: "La confiance ne devrait pas reposer sur la réputation. Elle devrait reposer sur la structure." },
  "footer.invented": { en: "Global Record Governance Framework — Invented and Owned by Tarek Wahid.", fr: "Cadre mondial de gouvernance des registres — Inventé et détenu par Tarek Wahid." },
  "footer.pilot": { en: "Pilot stage — not production-certified", fr: "Phase pilote — non certifié en production" },
  "footer.audit": { en: "Independent security audit planned", fr: "Audit de sécurité indépendant prévu" },
  "footer.no_claims": { en: "No certification claims made", fr: "Aucune certification revendiquée" },
  "footer.disclosure": { en: "Responsible disclosure: contact@globalrecordgovernance.com", fr: "Divulgation responsable : contact@globalrecordgovernance.com" },
  "footer.evidence": { en: "Evidence", fr: "Preuves" },
  "footer.sitemap": { en: "Sitemap", fr: "Plan du site" },
  "footer.privacy": { en: "Privacy", fr: "Confidentialité" },
  "footer.terms": { en: "Terms", fr: "Conditions" },

  // Simulation banner
  "sim.banner": { en: "SIMULATION ONLY — No Authoritative Records Are Created", fr: "SIMULATION UNIQUEMENT — Aucun registre officiel n'est créé" },

  // Common
  "common.governance_foundation": { en: "Governance Foundation", fr: "Fondation de gouvernance" },
  "common.dpi": { en: "Digital Public Infrastructure", fr: "Infrastructure publique numérique" },
  "common.est": { en: "Standards Authority · Est. 2024", fr: "Autorité des normes · Fondée 2024" },

  // ═══ HOME PAGE ═══
  "home.badge": { en: "Digital Public Infrastructure Standards Authority", fr: "Autorité des normes d'infrastructure publique numérique" },
  "home.title_1": { en: "Global Record", fr: "Gouvernance" },
  "home.title_2": { en: "Governance", fr: "mondiale des" },
  "home.title_3": { en: "Foundation", fr: "registres" },
  "home.subtitle": { en: "Independent global framework for Digital Public Infrastructure governance, validation, and institutional recognition. Establishing the structural standard for verifiable institutional accountability.", fr: "Cadre mondial indépendant pour la gouvernance, la validation et la reconnaissance institutionnelle de l'infrastructure publique numérique. Établir la norme structurelle pour la responsabilité institutionnelle vérifiable." },
  "home.patent": { en: "Est. 2024 · Canadian Patent CA 3,300,102 · OECD DPI Aligned", fr: "Fondée 2024 · Brevet canadien CA 3,300,102 · Aligné IPD OCDE" },
  "home.cta_assess": { en: "Request Governance Assessment", fr: "Demander une évaluation de gouvernance" },
  "home.cta_recognition": { en: "Apply for Recognition", fr: "Postuler pour la reconnaissance" },
  "home.cta_framework": { en: "Access Framework", fr: "Accéder au cadre" },
  "home.stat_determinism": { en: "Policy Determinism", fr: "Déterminisme des politiques" },
  "home.stat_audit": { en: "Audit Reconstruction", fr: "Reconstruction d'audit" },
  "home.stat_recognition": { en: "Recognition Model", fr: "Modèle de reconnaissance" },
  "home.stat_architecture": { en: "Architecture", fr: "Architecture" },
  "home.stat_deployment": { en: "Deployment Model", fr: "Modèle de déploiement" },

  // Home sections
  "home.system_status": { en: "System Status", fr: "État du système" },
  "home.live_dashboard": { en: "Live Trust Dashboard", fr: "Tableau de bord de confiance en direct" },
  "home.live_dashboard_sub": { en: "Real-time integrity metrics from the GRGF governance operating layer. All metrics are deterministically computed and independently verifiable.", fr: "Métriques d'intégrité en temps réel de la couche opérationnelle de gouvernance GRGF. Toutes les métriques sont calculées de manière déterministe et vérifiables indépendamment." },
  "home.problem": { en: "The Problem", fr: "Le problème" },
  "home.problem_title": { en: "$2.6 Trillion lost annually to governance failures", fr: "2,6 billions de dollars perdus annuellement en raison de défaillances de gouvernance" },
  "home.mandate": { en: "Our Mandate", fr: "Notre mandat" },
  "home.mandate_title": { en: "The global standard for institutional record integrity", fr: "La norme mondiale pour l'intégrité des registres institutionnels" },
  "home.principles": { en: "Governance Principles", fr: "Principes de gouvernance" },
  "home.charter": { en: "Charter Principles", fr: "Principes de la charte" },
  "home.charter_sub": { en: "The Foundation's operational mandate is grounded in six non-negotiable principles that ensure structural neutrality and institutional trust.", fr: "Le mandat opérationnel de la Fondation repose sur six principes non négociables qui garantissent la neutralité structurelle et la confiance institutionnelle." },
  "home.competitive": { en: "Competitive Positioning", fr: "Positionnement concurrentiel" },
  "home.competitive_title": { en: "What No Other DPI Does", fr: "Ce qu'aucune autre IPD ne fait" },
  "home.standards_registry": { en: "Standards Registry", fr: "Registre des normes" },
  "home.recognition_framework": { en: "Recognition Framework", fr: "Cadre de reconnaissance" },
  "home.tech_arch": { en: "Technical Architecture", fr: "Architecture technique" },
  "home.six_layer": { en: "Six-Layer Governance Infrastructure", fr: "Infrastructure de gouvernance à six couches" },
  "home.federation": { en: "Global Presence", fr: "Présence mondiale" },
  "home.federation_title": { en: "Federation Network", fr: "Réseau de fédération" },
  "home.alignment": { en: "International Alignment", fr: "Alignement international" },
  "home.alignment_title": { en: "Multilateral Institutional Matrix", fr: "Matrice institutionnelle multilatérale" },
  "home.services": { en: "Institutional Engagement", fr: "Engagement institutionnel" },
  "home.services_title": { en: "How the Foundation Engages", fr: "Comment la Fondation s'engage" },
  "home.governance_model": { en: "Governance Model", fr: "Modèle de gouvernance" },
  "home.governance_arch": { en: "Institutional Governance Architecture", fr: "Architecture de gouvernance institutionnelle" },
  "home.deployment": { en: "Implementation Pathway", fr: "Parcours de mise en œuvre" },
  "home.deployment_title": { en: "National Pilot Implementation Model", fr: "Modèle de mise en œuvre du pilote national" },
  "home.impact": { en: "Global Relevance", fr: "Pertinence mondiale" },
  "home.impact_title": { en: "Sectors & Regions", fr: "Secteurs et régions" },
  "home.closing_1": { en: "Trust should not rely", fr: "La confiance ne devrait pas" },
  "home.closing_2": { en: "on reputation.", fr: "reposer sur la réputation." },
  "home.closing_3": { en: "It should rely on structure.", fr: "Elle devrait reposer sur la structure." },
  "home.closing_sub": { en: "The Global Record Governance Foundation exists to make that structural trust possible — for every institution, at every level, in every jurisdiction.", fr: "La Fondation mondiale de gouvernance des registres existe pour rendre cette confiance structurelle possible — pour chaque institution, à chaque niveau, dans chaque juridiction." },

  // ═══ INTERNATIONAL COMPLIANCE HUB ═══
  "compliance.hub": { en: "International Compliance Hub", fr: "Centre de conformité internationale" },
  "compliance.title": { en: "Multilateral Institutional Alignment", fr: "Alignement institutionnel multilatéral" },
  "compliance.subtitle": { en: "Comprehensive compliance dashboard mapping GRGF capabilities across all major international governance frameworks — OECD, World Bank, United Nations, G20, ITU, and regional digital governance bodies.", fr: "Tableau de bord complet de conformité cartographiant les capacités du GRGF à travers tous les principaux cadres de gouvernance internationale — OCDE, Banque mondiale, Nations Unies, G20, UIT et organismes régionaux de gouvernance numérique." },
  "compliance.overview": { en: "Compliance Overview", fr: "Aperçu de la conformité" },
  "compliance.by_org": { en: "By Organization", fr: "Par organisation" },
  "compliance.framework_alignment": { en: "Institutional Framework Alignment", fr: "Alignement du cadre institutionnel" },
  "compliance.cross_cutting": { en: "Cross-Cutting Compliance", fr: "Conformité transversale" },
  "compliance.universal": { en: "Universal Requirements", fr: "Exigences universelles" },
  "compliance.full_assessment": { en: "Complete Compliance Assessment", fr: "Évaluation complète de la conformité" },
  "compliance.full_assessment_sub": { en: "For institutions requiring detailed compliance mapping, gap analysis, or formal alignment certification across any international framework.", fr: "Pour les institutions nécessitant une cartographie détaillée de la conformité, une analyse des écarts ou une certification formelle d'alignement à travers tout cadre international." },
  "compliance.request_assessment": { en: "Request Compliance Assessment", fr: "Demander une évaluation de conformité" },
  "compliance.self_assessment": { en: "Try Self-Assessment", fr: "Essayer l'auto-évaluation" },
  "compliance.stat_bodies": { en: "International Bodies", fr: "Organismes internationaux" },
  "compliance.stat_sdgs": { en: "SDGs Aligned", fr: "ODD alignés" },
  "compliance.stat_iso": { en: "ISO Standards", fr: "Normes ISO" },
  "compliance.stat_regional": { en: "Regional Frameworks", fr: "Cadres régionaux" },
  "compliance.stat_dpg": { en: "DPG Criteria Met", fr: "Critères BPN satisfaits" },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const stored = document.cookie.match(/grgf_lang=(en|fr)/);
    return (stored?.[1] as Language) || "en";
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    document.cookie = `grgf_lang=${newLang};path=/;max-age=31536000;SameSite=Lax`;
    document.documentElement.lang = newLang;
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] || translations[key]?.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
