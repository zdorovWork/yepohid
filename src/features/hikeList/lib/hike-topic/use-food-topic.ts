import { THikeTopic, useFoodStuff } from "entities/hikeItem";

export const useFoodTopic = () => {
  const { tea, spices, salt } = useFoodStuff();

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
