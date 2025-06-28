import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useHygieneStuff = (): Record<TStuffItem<"hygiene">["id"], TStuffItem<"hygiene">> => {
  const { t } = useStuffTranslations();

  return {
    toiletry_bag: {
      id: "toiletry_bag",
      title: t("toiletry_bag"),
    },
    microfiber_towel: {
      id: "microfiber_towel",
      title: t("microfiber_towel"),
    },
    sunscreen_lip_balm: {
      id: "sunscreen_lip_balm",
      title: t("sunscreen_lip_balm"),
    },
    sunscreen: {
      id: "sunscreen",
      title: t("sunscreen"),
    },
    moisturizer: {
      id: "moisturizer",
      title: t("moisturizer"),
    },
    tooth_paste: {
      id: "tooth_paste",
      title: t("tooth_paste"),
    },
    tooth_brush: {
      id: "tooth_brush",
      title: t("tooth_brush"),
    },
    dental_floss: {
      id: "dental_floss",
      title: t("dental_floss"),
    },
    toilet_trowel: {
      id: "toilet_trowel",
      title: t("toilet_trowel"),
    },
    toilet_paper: {
      id: "toilet_paper",
      title: t("toilet_paper"),
    },
    eco_soap: {
      id: "eco_soap",
      title: t("eco_soap"),
    },
    mini_scissors: {
      id: "mini_scissors",
      title: t("mini_scissors"),
    },
    mirror: {
      id: "mirror",
      title: t("mirror"),
    },
  };
};
