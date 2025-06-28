import { THikeTopicName } from "shared/config/types";
import { TLanguage } from "shared/config/types/languages";
import { useI18nModule } from "shared/service/translations/use-18n-module";

export const useTopicTranslations = () =>
  useI18nModule({
    bedroom: {
      en: "Bedroom",
      ua: "Бівак",
    },
    clothing: {
      en: "Clothing",
      ua: "Одяг і взуття",
    },
    documents: {
      en: "Documents",
      ua: "Документи і гроші",
    },
    electronics: {
      en: "Electronics",
      ua: "Електроніка",
    },
    first_aid: {
      en: "First aid",
      ua: "Аптечка",
    },
    food: {
      en: "Food",
      ua: "Їжа",
    },
    gear: {
      en: "Gear",
      ua: "Спорядження на хід",
    },
    hygiene: {
      en: "Hygiene",
      ua: "Гігієна",
    },
    kitchen: {
      en: "Kitchen",
      ua: "Кухня",
    },
    navigation: {
      en: "Navigation",
      ua: "Навігація",
    },
    other: {
      en: "Other",
      ua: "Інше",
    },
  } satisfies Record<THikeTopicName, Record<TLanguage, string>>);
