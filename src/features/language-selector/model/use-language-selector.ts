import { TLanguage } from "shared/config/types/languages";

import { useLanguage } from "./language-context";

export const useLanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ua" : "en";
    changeLanguage(newLanguage);
  };

  const languagesOptions: Record<TLanguage, string> = {
    en: "En",
    ua: "Укр",
  };

  return {
    language,
    toggleLanguage,
    languagesOptions,
  };
};
