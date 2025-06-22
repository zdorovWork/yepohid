import { TStuffItem } from "../types";

export const useKitchenStuff = (): Record<TStuffItem<"kitchen">["id"], TStuffItem<"kitchen">> => {
  return {
    fire_source: {
      id: "fire_source",
      title: "Fire source",
    },
    backup_fire_source: {
      id: "backup_fire_source",
      title: "Backup fire source in waterproof packaging",
    },
    spoon: {
      id: "spoon",
      title: "Spoon",
    },
    plate: {
      id: "plate",
      title: "Plate",
    },
    mug: {
      id: "mug",
      title: "Mug",
    },
    knife: {
      id: "knife",
      title: "Knife",
    },
    water_container: {
      id: "water_container",
      title: "Water container",
    },
    water_filter: {
      id: "water_filter",
      title: "Water filter",
    },
    sponge_for_dishes: {
      id: "sponge_for_dishes",
      title: "Dishwashing sponge",
    },
    eco_dish_soap: {
      id: "eco_dish_soap",
      title: "Eco dish soap",
    },
    cauldron: {
      id: "cauldron",
      title: "Cooking pot",
    },
    tripod_stand: {
      id: "tripod_stand",
      title: "Tripod stand (for cooking over fire)",
    },
    stove: {
      id: "stove",
      title: "Stove",
    },
    source_for_stove: {
      id: "source_for_stove",
      title: "Source for stove",
    },
    integration_system: {
      id: "integration_system",
      title: "Integration system",
    },
    gas_can: {
      id: "gas_can",
      title: "Gas can",
    },
  };
};
