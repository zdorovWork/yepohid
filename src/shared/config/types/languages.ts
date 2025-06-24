export const LANGUAGES = {
  EN: "en",
  UA: "ua",
} as const;

export type TLanguage = (typeof LANGUAGES)[keyof typeof LANGUAGES];
