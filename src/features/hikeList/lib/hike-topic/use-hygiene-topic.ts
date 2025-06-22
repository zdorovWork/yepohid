import { THikeTopic, useHygieneStuff } from "entities/hikeItem";

export const useHygieneTopic = () => {
  const {
    toilet_paper,
    toiletry_bag,
    microfiber_towel,
    sunscreen_lip_balm,
    sunscreen,
    moisturizer,
    tooth_paste,
    tooth_brush,
    dental_floss,
    toilet_trowel,
    eco_soap,
    mini_scissors,
    mirror,
  } = useHygieneStuff();

  const getHygieneInitialHikeTopic = (): THikeTopic<"hygiene"> => {
    return {
      id: "hygiene",
      title: "Hygiene",
      stuff: [
        toiletry_bag,
        microfiber_towel,
        sunscreen_lip_balm,
        sunscreen,
        moisturizer,
        tooth_paste,
        tooth_brush,
        dental_floss,
        toilet_trowel,
        toilet_paper,
        eco_soap,
        mini_scissors,
        mirror,
      ],
    };
  };

  return {
    getHygieneInitialHikeTopic,
  };
};
