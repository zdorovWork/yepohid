import { LANGUAGES, TLanguage } from "shared/config/types/languages";

export const validateLanguage = (language: string | null): language is TLanguage => {
  return Object.values(LANGUAGES).includes(language as TLanguage);
};
