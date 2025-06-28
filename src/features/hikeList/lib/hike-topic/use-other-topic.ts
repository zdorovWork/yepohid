import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useOtherTopic = () => {
  const { repair_kit, trash_bag, sit_pad, inflatable_pad_chair, mini_hammock } = useInitialItems()["other"];

  const getOtherInitialHikeTopic = (): THikeTopic<"other"> => {
    return {
      id: "other",
      title: "Other",
      stuff: [repair_kit, trash_bag, sit_pad, inflatable_pad_chair, mini_hammock],
    };
  };

  return {
    getOtherInitialHikeTopic,
  };
};
