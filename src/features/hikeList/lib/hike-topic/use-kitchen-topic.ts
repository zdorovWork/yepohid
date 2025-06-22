import { THikeTopic, useKitchenStuff } from "entities/hikeItem";

import { THikeList } from "../../model/types";

export const useKitchenTopic = () => {
  const {
    fire_source,
    backup_fire_source,
    spoon,
    plate,
    mug,
    knife,
    water_container,
    water_filter,
    sponge_for_dishes,
    eco_dish_soap,
    stove,
    source_for_stove,
    cauldron,
    tripod_stand,
    integration_system,
    gas_can,
  } = useKitchenStuff();

  const getKitchenInitialHikeTopic = (tags: THikeList["tags"]): THikeTopic<"kitchen"> => {
    const additionalStuff: THikeTopic<"kitchen">["stuff"] = [];

    const isIntegrationSystem = tags.includes("integrationSystem");
    const isFireCamp = tags.includes("fire");
    const isStove = tags.includes("cauldron");

    if (isIntegrationSystem) {
      additionalStuff.push(integration_system);
      additionalStuff.push(gas_can);
    }

    if (isFireCamp) {
      additionalStuff.push(tripod_stand);
      additionalStuff.push(cauldron);
    }

    if (isStove) {
      additionalStuff.push(stove);
      additionalStuff.push(source_for_stove);
      additionalStuff.push(cauldron);
    }

    return {
      id: "kitchen",
      title: "Kitchen",
      stuff: [
        ...additionalStuff,
        fire_source,
        backup_fire_source,
        spoon,
        plate,
        mug,
        knife,
        water_container,
        water_filter,
        sponge_for_dishes,
        eco_dish_soap,
      ],
    };
  };

  return {
    getKitchenInitialHikeTopic,
  };
};
