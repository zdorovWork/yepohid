import { TStuffItem } from "../types";

export const useFirstAidStuff = (): Record<TStuffItem<"first_aid">["id"], TStuffItem<"first_aid">> => {
  return {
    antiseptic: {
      id: "antiseptic",
      title: "Antiseptic",
    },
  };
};
