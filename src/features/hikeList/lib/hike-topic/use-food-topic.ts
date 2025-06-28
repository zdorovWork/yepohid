import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useFoodTopic = () => {
  const { tea, spices, salt } = useInitialItems()["food"];

  const getFoodInitialHikeTopic = (): THikeTopic<"food"> => {
    return {
      id: "food",
      title: "Food",
      stuff: [tea, spices, salt],
    };
  };

  return {
    getFoodInitialHikeTopic,
  };
};
