import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useFoodStuff = (): Record<TStuffItem<"food">["id"], TStuffItem<"food">> => {
  const { t } = useStuffTranslations();

  return {
    tea: {
      id: "tea",
      title: t("tea"),
    },
    spices: {
      id: "spices",
      title: t("spices"),
    },
    salt: {
      id: "salt",
      title: t("salt"),
    },
  };
};
