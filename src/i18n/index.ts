import type { Language } from "@/contexts/LanguageContext";
import { theProblemTranslations } from "./theProblem";
import { aboutTranslations } from "./about";
import { contactTranslations } from "./contact";
import { howItWorksTranslations } from "./howItWorks";

// Merge all page-level translations into a single record
export const pageTranslations: Record<string, Record<Language, string>> = {
  ...theProblemTranslations,
  ...aboutTranslations,
  ...contactTranslations,
  ...howItWorksTranslations,
};
