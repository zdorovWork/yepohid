import { TStuffItem } from "../types";

export const useHygieneStuff = (): Record<TStuffItem<"hygiene">["id"], TStuffItem<"hygiene">> => {
  return {
    toiletry_bag: {
      id: "toiletry_bag",
      title: "Toiletry bag",
    },
    microfiber_towel: {
      id: "microfiber_towel",
      title: "Microfiber towel",
    },
    sunscreen_lip_balm: {
      id: "sunscreen_lip_balm",
      title: "Sunscreen lip balm",
    },
    sunscreen: {
      id: "sunscreen",
      title: "Sunscreen",
    },
    moisturizer: {
      id: "moisturizer",
      title: "Moisturizer",
    },
    tooth_paste: {
      id: "tooth_paste",
      title: "Tooth paste",
    },
    tooth_brush: {
      id: "tooth_brush",
      title: "Toothbrush",
    },
    dental_floss: {
      id: "dental_floss",
      title: "Dental floss",
    },
    toilet_trowel: {
      id: "toilet_trowel",
      title: "Trowel for toilet",
    },
    toilet_paper: {
      id: "toilet_paper",
      title: "Toilet paper",
    },
    eco_soap: {
      id: "eco_soap",
      title: "Eco soap",
    },
    mini_scissors: {
      id: "mini_scissors",
      title: "Mini scissors",
    },
    mirror: {
      id: "mirror",
      title: "Mirror",
    },
  };
};
