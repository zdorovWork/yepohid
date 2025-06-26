import { TLanguage } from "shared/config/types/languages";
import { useI18nModule } from "shared/service/translations/use-18n-module";

import { TTag } from "./types";

export const useTagsTranslations = () => {
  const { t } = useI18nModule({
    tent: {
      en: "Tent",
      ua: "Тент",
    },
    awning: {
      en: "Awning",
      ua: "Намет",
    },
    hamac: {
      en: "Hamac",
      ua: "Гамак",
    },
    summer: {
      en: "Summer",
      ua: "Літо",
    },
    offSeason: {
      en: "Off season",
      ua: "Міжсезон",
    },
    pedestrian: {
      en: "Pedestrian",
      ua: "Піший",
    },
    bicycle: {
      en: "Bicycle",
      ua: "Велосипедом",
    },
    camp: {
      en: "Camp",
      ua: "Кемпінг",
    },
    fire: {
      en: "Fire",
      ua: "Багаття",
    },
    cauldron: {
      en: "Cauldron",
      ua: "Казанок",
    },
    integrationSystem: {
      en: "Integration system",
      ua: "Інтеграційна система",
    },
  } satisfies Record<TTag, Record<TLanguage, string>>);

  return {
    t,
  };
};
