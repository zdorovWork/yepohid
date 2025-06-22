import { THikeTopic, useGearStuff } from "entities/hikeItem";

export const useGearTopic = () => {
  const { backpack, rain_cover, trekking_poles, flashlight, flashlight_battery, dry_bags, sunglasses, mosquito_net } =
    useGearStuff();

  const getGearInitialHikeTopic = (): THikeTopic<"gear"> => {
    return {
      id: "gear",
      title: "Gear",
      stuff: [backpack, rain_cover, trekking_poles, flashlight, flashlight_battery, dry_bags, sunglasses, mosquito_net],
    };
  };

  return {
    getGearInitialHikeTopic,
  };
};
