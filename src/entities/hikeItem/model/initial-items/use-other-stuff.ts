import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useOtherStuff = (): Record<TStuffItem<"other">["id"], TStuffItem<"other">> => {
  const { t } = useStuffTranslations();

  return {
    repair_kit: {
      id: "repair_kit",
      title: t("repair_kit"),
    },
    trash_bag: {
      id: "trash_bag",
      title: t("trash_bag"),
    },
    sit_pad: {
      id: "sit_pad",
      title: t("sit_pad"),
    },
    inflatable_pad_chair: {
      id: "inflatable_pad_chair",
      title: t("inflatable_pad_chair"),
    },
    mini_hammock: {
      id: "mini_hammock",
      title: t("mini_hammock"),
    },
  };
};
