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

  // Simulation banner
  "sim.banner": { en: "SIMULATION ONLY — No Authoritative Records Are Created", fr: "SIMULATION UNIQUEMENT — Aucun registre officiel n'est créé" },

  // Common
  "common.governance_foundation": { en: "Governance Foundation", fr: "Fondation de gouvernance" },
  "common.dpi": { en: "Digital Public Infrastructure", fr: "Infrastructure publique numérique" },
  "common.est": { en: "Standards Authority · Est. 2024", fr: "Autorité des normes · Fondée 2024" },
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
