import { TStuffItem } from "../types";

export const useClothingStuff = (): Record<TStuffItem<"clothing">["id"], TStuffItem<"clothing">> => {
  return {
    underwear: {
      id: "underwear",
      title: "Underwear",
    },
    lightweight_trekking_socks: {
      id: "trekking_socks",
      title: "Lightweight trekking socks",
    },
    trekking_socks: {
      id: "trekking_socks",
      title: "Trekking socks",
    },
    trekking_shirt: {
      id: "trekking_shirt",
      title: "Trekking shirt / T-shirt",
    },
    trekking_pants: {
      id: "trekking_pants",
      title: "Trekking pants",
    },
    lightweight_trekking_pants: {
      id: "lightweight_trekking_pants",
      title: "Lightweight trekking pants",
    },
    shorts: {
      id: "shorts",
      title: "Shorts",
    },
    fleece_sweater_light: {
      id: "fleece_sweater_light",
      title: "Lightweight fleece sweater",
    },
    fleece_sweater: {
      id: "fleece_sweater",
      title: "Fleece sweater",
    },
    fleece_pants_light: {
      id: "fleece_pants_light",
      title: "Lightweight fleece pants",
    },
    fleece_pants: {
      id: "fleece_pants",
      title: "Fleece pants",
    },
    warm_layer: {
      id: "warm_layer",
      title: "Warm sweater or down jacket",
    },
    windbreaker: {
      id: "windbreaker",
      title: "Windbreaker",
    },
    rain_jacket: {
      id: "rain_jacket",
      title: "Waterproof jacket (shell)",
    },
    buff: {
      id: "buff",
      title: "Buff",
    },
    cap_or_hat: {
      id: "cap_or_hat",
      title: "Cap or hat",
    },
    warm_hat: {
      id: "warm_hat",
      title: "Warm hat",
    },
    thin_gloves: {
      id: "thin_gloves",
      title: "Thin gloves",
    },
    dress: {
      id: "dress",
      title: "Light dress",
    },
    boots: {
      id: "boots",
      title: "Shoes / Trekking boots",
    },
    sandals: {
      id: "sandals",
      title: "Sandals / Flip-flops",
    },
    camp_shoes: {
      id: "camp_shoes",
      title: "Camping shoes",
    },
    thermal_top: {
      id: "thermal_top",
      title: "Thermal top",
    },
    thermal_pants: {
      id: "thermal_pants",
      title: "Thermal pants",
    },
    waterproof_pants: {
      id: "waterproof_pants",
      title: "Waterproof pants",
    },
    warm_buff: {
      id: "warm_buff",
      title: "Warm buff",
    },
  };
};
