import { TStuffItem } from "../types";

export const useOtherStuff = (): Record<TStuffItem<"other">["id"], TStuffItem<"other">> => {
  return {
    repair_kit: {
      id: "repair_kit",
      title: "Repair kit",
    },
    trash_bag: {
      id: "trash_bag",
      title: "Trash bag",
    },
    sit_pad: {
      id: "sit_pad",
      title: "Sit pad",
    },
    inflatable_pad_chair: {
      id: "inflatable_pad_chair",
      title: "Inflatable pad chair",
    },
    mini_hammock: {
      id: "mini_hammock",
      title: "Mini hammock",
    },
  };
};
