import { TStuffItem } from "../types";

export const useFoodStuff = (): Record<TStuffItem<"food">["id"], TStuffItem<"food">> => {
  return {
    tea: {
      id: "tea",
      title: "Tea",
    },
    spices: {
      id: "spices",
      title: "Spices",
    },
    salt: {
      id: "salt",
      title: "Salt",
    },
  };
};
