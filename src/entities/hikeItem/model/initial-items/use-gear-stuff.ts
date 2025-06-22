import { TStuffItem } from "../types";

export const useGearStuff = (): Record<TStuffItem<"gear">["id"], TStuffItem<"gear">> => {
  return {
    backpack: {
      id: "backpack",
      title: "Backpack",
    },
    rain_cover: {
      id: "rain_cover",
      title: "Rain cover",
    },
    trekking_poles: {
      id: "trekking_poles",
      title: "Trekking poles",
    },
    flashlight: {
      id: "flashlight",
      title: "Flashlight",
    },
    flashlight_battery: {
      id: "flashlight_battery",
      title: "Flashlight battery",
    },
    dry_bags: {
      id: "dry_bags",
      title: "Dry bags",
    },
    sunglasses: {
      id: "sunglasses",
      title: "Sunglasses",
    },
    mosquito_net: {
      id: "mosquito_net",
      title: "Mosquito net",
    },
  };
};
