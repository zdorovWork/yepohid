import { initialBedroomStuff } from "entities/hikeItem";
import { THikeTopic } from "entities/hikeItem/model/types";

import { THikeList } from "../../model/types";

export const getBedroomInitialHikeTopic = (tags: THikeList["tags"]): THikeTopic<"bedroom"> => {
  const isTent = tags.includes("tent");

  const additionalStuff: THikeTopic<"bedroom">["stuff"] = [];

  const { tent, footprint, sleeping_bag, bag_compressor, rug, pillow, airtight_bag_for_sleep } = initialBedroomStuff;

  if (isTent) {
    additionalStuff.push(tent);
    additionalStuff.push(footprint);
  }

  return {
    id: "bedroom",
    title: "Bedroom",
    stuff: [sleeping_bag, bag_compressor, rug, pillow, airtight_bag_for_sleep, ...additionalStuff],
  };
};
