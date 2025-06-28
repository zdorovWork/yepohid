import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useGearStuff = (): Record<TStuffItem<"gear">["id"], TStuffItem<"gear">> => {
  const { t } = useStuffTranslations();

  return {
    backpack: {
      id: "backpack",
      title: t("backpack"),
    },
    rain_cover: {
      id: "rain_cover",
      title: t("rain_cover"),
    },
    trekking_poles: {
      id: "trekking_poles",
      title: t("trekking_poles"),
    },
    flashlight: {
      id: "flashlight",
      title: t("flashlight"),
    },
    flashlight_battery: {
      id: "flashlight_battery",
      title: t("flashlight_battery"),
    },
    dry_bags: {
      id: "dry_bags",
      title: t("dry_bags"),
    },
    sunglasses: {
      id: "sunglasses",
      title: t("sunglasses"),
    },
    mosquito_net: {
      id: "mosquito_net",
      title: t("mosquito_net"),
    },
  };
};
