import { THikeTopic, useInitialItems } from "entities/hikeItem";

import { THikeList } from "../../model/types";

export const useClothingTopic = () => {
  const {
    underwear,
    lightweight_trekking_socks,
    trekking_socks,
    trekking_shirt,
    trekking_pants,
    lightweight_trekking_pants,
    shorts,
    fleece_sweater,
    fleece_sweater_light,
    fleece_pants,
    fleece_pants_light,
    warm_layer,
    windbreaker,
    rain_jacket,
    buff,
    cap_or_hat,
    warm_hat,
    thin_gloves,
    dress,
    boots,
    sandals,
    camp_shoes,
    thermal_top,
    thermal_pants,
    waterproof_pants,
    warm_buff,
  } = useInitialItems()["clothing"];

  const getClothingInitialHikeTopic = (tags: THikeList["tags"]): THikeTopic<"clothing"> => {
    const additionalStuff: THikeTopic<"clothing">["stuff"] = [];

    const isOffSeason = tags.includes("offSeason");
    const isSummer = tags.includes("summer");

    if (isOffSeason) {
      additionalStuff.push(trekking_socks);
      additionalStuff.push(trekking_pants);
      additionalStuff.push(fleece_sweater);
      additionalStuff.push(fleece_pants);
      additionalStuff.push(camp_shoes);
      additionalStuff.push(thermal_top);
      additionalStuff.push(thermal_pants);
      additionalStuff.push(waterproof_pants);
      additionalStuff.push(warm_buff);
    }

    if (isSummer) {
      additionalStuff.push(lightweight_trekking_socks);
      additionalStuff.push(lightweight_trekking_pants);
      additionalStuff.push(shorts);
      additionalStuff.push(fleece_sweater_light);
      additionalStuff.push(fleece_pants_light);
      additionalStuff.push(sandals);
    }

    return {
      id: "clothing",
      title: "Clothing",
      stuff: [
        ...additionalStuff,
        underwear,
        trekking_shirt,
        warm_layer,
        windbreaker,
        rain_jacket,
        buff,
        cap_or_hat,
        warm_hat,
        thin_gloves,
        dress,
        boots,
      ],
    };
  };

  return {
    getClothingInitialHikeTopic,
  };
};
