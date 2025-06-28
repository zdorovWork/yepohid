import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useClothingStuff = (): Record<TStuffItem<"clothing">["id"], TStuffItem<"clothing">> => {
  const { t } = useStuffTranslations();

  return {
    underwear: {
      id: "underwear",
      title: t("underwear"),
    },
    lightweight_trekking_socks: {
      id: "lightweight_trekking_socks",
      title: t("lightweight_trekking_socks"),
    },
    trekking_socks: {
      id: "trekking_socks",
      title: t("trekking_socks"),
    },
    trekking_shirt: {
      id: "trekking_shirt",
      title: t("trekking_shirt"),
    },
    trekking_pants: {
      id: "trekking_pants",
      title: t("trekking_pants"),
    },
    lightweight_trekking_pants: {
      id: "lightweight_trekking_pants",
      title: t("lightweight_trekking_pants"),
    },
    shorts: {
      id: "shorts",
      title: t("shorts"),
    },
    fleece_sweater_light: {
      id: "fleece_sweater_light",
      title: t("fleece_sweater_light"),
    },
    fleece_sweater: {
      id: "fleece_sweater",
      title: t("fleece_sweater"),
    },
    fleece_pants_light: {
      id: "fleece_pants_light",
      title: t("fleece_pants_light"),
    },
    fleece_pants: {
      id: "fleece_pants",
      title: t("fleece_pants"),
    },
    warm_layer: {
      id: "warm_layer",
      title: t("warm_layer"),
    },
    windbreaker: {
      id: "windbreaker",
      title: t("windbreaker"),
    },
    rain_jacket: {
      id: "rain_jacket",
      title: t("rain_jacket"),
    },
    buff: {
      id: "buff",
      title: t("buff"),
    },
    cap_or_hat: {
      id: "cap_or_hat",
      title: t("cap_or_hat"),
    },
    warm_hat: {
      id: "warm_hat",
      title: t("warm_hat"),
    },
    thin_gloves: {
      id: "thin_gloves",
      title: t("thin_gloves"),
    },
    dress: {
      id: "dress",
      title: t("dress"),
    },
    boots: {
      id: "boots",
      title: t("boots"),
    },
    sandals: {
      id: "sandals",
      title: t("sandals"),
    },
    camp_shoes: {
      id: "camp_shoes",
      title: t("camp_shoes"),
    },
    thermal_top: {
      id: "thermal_top",
      title: t("thermal_top"),
    },
    thermal_pants: {
      id: "thermal_pants",
      title: t("thermal_pants"),
    },
    waterproof_pants: {
      id: "waterproof_pants",
      title: t("waterproof_pants"),
    },
    warm_buff: {
      id: "warm_buff",
      title: t("warm_buff"),
    },
  };
};
