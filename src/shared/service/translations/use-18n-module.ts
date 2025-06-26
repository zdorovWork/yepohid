import { useLanguage } from "features/language-selector";

import { LANGUAGES, TLanguage } from "shared/config/types/languages";

type TranslationNode = Record<TLanguage, string>;

type TranslationTree = { [key: string]: TranslationNode | TranslationTree };

type TranslationKey<T extends TranslationTree, K extends keyof T = keyof T> = K extends K & string
  ? T[K] extends TranslationTree
    ? `${K}.${TranslationKey<T[K]>}`
    : K
  : never;

const isTranslationNode = (node: TranslationTree[string]): node is TranslationNode =>
  Object.values(LANGUAGES).every((lang) => typeof node[lang] === "string");

const flattenTranslations = <T extends TranslationTree>(node: T): Record<string, TranslationNode> => {
  const result = {} as Record<string, TranslationNode>;

  const flattenHelper = (node: TranslationTree[string], path: string) => {
    for (const [key, value] of Object.entries(node)) {
      if (isTranslationNode(value)) {
        result[`${path}${key}`] = value;
      } else {
        flattenHelper(value, `${path}${key}.`);
      }
    }
  };

  flattenHelper(node, "");

  return result;
};

export const useI18nModule = <T extends TranslationTree>(node: T) => {
  const { language } = useLanguage();

  const t = (key: TranslationKey<T>): string => {
    return flattenTranslations(node)[key][language] ?? key;
  };

  return {
    t,
  };
};
