import { TStuffItem } from "../types";

export const useElectronicsStuff = (): Record<TStuffItem<"electronics">["id"], TStuffItem<"electronics">> => {
  return {
    mobile_phone: {
      id: "mobile_phone",
      title: "Mobile phone",
    },
    power_banks: {
      id: "power_banks",
      title: "Power sources (power banks)",
    },
    charging_cables: {
      id: "charging_cables",
      title: "Charging cables",
    },
    electronics_dry_bag: {
      id: "electronics_dry_bag",
      title: "Dry bag for electronics",
    },
    camera: {
      id: "camera",
      title: "Camera",
    },
    memory_cards: {
      id: "memory_cards",
      title: "Memory cards",
    },
    camera_batteries: {
      id: "camera_batteries",
      title: "Camera batteries",
    },
  };
};
