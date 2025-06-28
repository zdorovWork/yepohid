import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useFirstAidTopic = () => {
  const { antiseptic } = useInitialItems()["first_aid"];

  const getFirstAidInitialHikeTopic = (): THikeTopic<"first_aid"> => {
    return {
      id: "first_aid",
      title: "First Aid",
      stuff: [antiseptic],
    };
  };

  return {
    getFirstAidInitialHikeTopic,
  };
};
