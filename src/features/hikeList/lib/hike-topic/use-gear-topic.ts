import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useGearTopic = () => {
  const { backpack, rain_cover, trekking_poles, flashlight, flashlight_battery, dry_bags, sunglasses, mosquito_net } =
    useInitialItems()["gear"];

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
