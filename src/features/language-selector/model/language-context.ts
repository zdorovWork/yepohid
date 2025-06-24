import { createContext } from "react";

import { TLanguage } from "shared/config/types/languages";
import { useStrictContext } from "shared/lib/react";

type TLanguageContext = {
  language: TLanguage;
  changeLanguage: (language: TLanguage) => void;
};

export const languageContext = createContext<TLanguageContext | null>(null);

export const useLanguage = () => {
  return useStrictContext(languageContext, "LanguageContext");
};
