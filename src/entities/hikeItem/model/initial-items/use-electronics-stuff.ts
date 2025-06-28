import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useElectronicsStuff = (): Record<TStuffItem<"electronics">["id"], TStuffItem<"electronics">> => {
  const { t } = useStuffTranslations();

  return {
    mobile_phone: {
      id: "mobile_phone",
      title: t("mobile_phone"),
    },
    power_banks: {
      id: "power_banks",
      title: t("power_banks"),
    },
    charging_cables: {
      id: "charging_cables",
      title: t("charging_cables"),
    },
    electronics_dry_bag: {
      id: "electronics_dry_bag",
      title: t("electronics_dry_bag"),
    },
    camera: {
      id: "camera",
      title: t("camera"),
    },
    memory_cards: {
      id: "memory_cards",
      title: t("memory_cards"),
    },
    camera_batteries: {
      id: "camera_batteries",
      title: t("camera_batteries"),
    },
  };
};
