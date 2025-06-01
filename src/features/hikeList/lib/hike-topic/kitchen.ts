import { THikeTopic, initialKitchenStuff } from "entities/hikeItem";

import { THikeList } from "features/hikeList/model/types";

export const getKitchenInitialHikeTopic = (tags: THikeList["tags"]): THikeTopic<"kitchen"> => {
  const isIntegrationSystem = tags.includes("integrationSystem");

  const {
    spoon,
    fire_source,
    plate,
    mug,
    knife,
    fluid_container,
    water_filter,
    sponge_for_dishes,
    dishes_cleaner,
    stove,
    source_for_stove,
    cauldron,
    footman,
  } = initialKitchenStuff;

  const additionalStuff: THikeTopic<"kitchen">["stuff"] = [];

  if (isIntegrationSystem) {
    additionalStuff.push(source_for_stove);
  }

  return {
    id: "kitchen",
    title: "Kitchen",
    stuff: [
      spoon,
      plate,
      mug,
      knife,
      fluid_container,
      water_filter,
      sponge_for_dishes,
      dishes_cleaner,
      ...additionalStuff,
    ],
  };
};
