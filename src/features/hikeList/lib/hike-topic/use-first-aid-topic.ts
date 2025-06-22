import { THikeTopic, useFirstAidStuff } from "entities/hikeItem";

export const useFirstAidTopic = () => {
  const { antiseptic } = useFirstAidStuff();

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
