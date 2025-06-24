import { useState } from "react";

import { TLanguage } from "shared/config/types/languages";
import { storageService } from "shared/service/storage";

import { validateLanguage } from "../lib/validate-language";
import { languageContext } from "../model/language-context";

const languageKey = "language";

const initialLanguage = storageService.getItemSync(languageKey);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<TLanguage>(validateLanguage(initialLanguage) ? initialLanguage : "en");

  const changeLanguage = (lang: TLanguage) => {
    setLanguage(lang);
    storageService.setItem(languageKey, lang);
  };

  return <languageContext.Provider value={{ language, changeLanguage }}>{children}</languageContext.Provider>;
};
