import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useElectronicsTopic = () => {
  const { mobile_phone, power_banks, charging_cables, electronics_dry_bag, camera, memory_cards, camera_batteries } =
    useInitialItems()["electronics"];

  const getElectronicsInitialHikeTopic = (): THikeTopic<"electronics"> => {
    return {
      id: "electronics",
      title: "Electronics",
      stuff: [mobile_phone, power_banks, charging_cables, electronics_dry_bag, camera, memory_cards, camera_batteries],
    };
  };

  return {
    getElectronicsInitialHikeTopic,
  };
};
