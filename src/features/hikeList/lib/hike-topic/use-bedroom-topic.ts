import { THikeTopic, useBedroomStuff } from "entities/hikeItem";

import { THikeList } from "../../model/types";

export const useBedroomTopic = () => {
  const {
    tent,
    awning,
    tarp_guylines,
    tarp_stakes,
    camp_bag,
    footprint,
    sleeping_bag,
    bag_compressor,
    mat,
    pillow,
    airtight_bag_for_sleep,
    pump_for_sleeping_pad,
    repair_kit_for_sleeping_pad,
    hamac,
    underquilt,
    suspension_slings,
  } = useBedroomStuff();

  const getBedroomInitialHikeTopic = (tags: THikeList["tags"]): THikeTopic<"bedroom"> => {
    const isAwning = tags.includes("awning");
    const isTent = tags.includes("tent");
    const isHamac = tags.includes("hamac");

    const additionalStuff: THikeTopic<"bedroom">["stuff"] = [];

    if (isAwning) {
      additionalStuff.push(awning);
      additionalStuff.push(footprint);
    }

    if (isTent) {
      additionalStuff.push(tent);
      additionalStuff.push(tarp_guylines);
      additionalStuff.push(tarp_stakes);
      additionalStuff.push(camp_bag);
      additionalStuff.push(footprint);
    }

    if (isHamac) {
      additionalStuff.push(hamac);
      additionalStuff.push(underquilt);
      additionalStuff.push(suspension_slings);
      additionalStuff.push(tent);
      additionalStuff.push(tarp_guylines);
      additionalStuff.push(tarp_stakes);
    }

    return {
      id: "bedroom",
      title: "Bedroom",
      stuff: [
        ...additionalStuff,
        sleeping_bag,
        bag_compressor,
        airtight_bag_for_sleep,
        mat,
        pump_for_sleeping_pad,
        repair_kit_for_sleeping_pad,
        pillow,
      ],
    };
  };

  return {
    getBedroomInitialHikeTopic,
  };
};
