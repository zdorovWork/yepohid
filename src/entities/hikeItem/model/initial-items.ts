import { TStuffItem } from "./types";

export const initialBedroomStuff: Record<TStuffItem<"bedroom">["id"], TStuffItem<"bedroom">> = {
  tent: {
    id: "tent",
    title: "Tent",
  },
  footprint: {
    id: "footprint",
    title: "Footprint",
  },
  sleeping_bag: {
    id: "sleeping_bag",
    title: "Sleeping bag",
  },
  bag_compressor: {
    id: "bag_compressor",
    title: "Bag compressor",
  },
  airtight_bag_for_sleep: {
    id: "airtight_bag_for_sleep",
    title: "Airtight bag for sleep",
  },
  rug: {
    id: "rug",
    title: "Rug",
  },
  pillow: {
    id: "pillow",
    title: "Pillow",
  },
};

export const initialKitchenStuff: Record<TStuffItem<"kitchen">["id"], TStuffItem<"kitchen">> = {
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
  fluid_container: {
    id: "fluid_container",
    title: "Fluid container",
  },
  water_filter: {
    id: "water_filter",
    title: "Water filter",
  },
  sponge_for_dishes: {
    id: "sponge_for_dishes",
    title: "Sponge for dishes",
  },
  dishes_cleaner: {
    id: "dishes_cleaner",
    title: "Dishes cleaner",
  },
  stove: {
    id: "stove",
    title: "Stove",
  },
  source_for_stove: {
    id: "source_for_stove",
    title: "Source for stove",
  },
  cauldron: {
    id: "cauldron",
    title: "Cauldron",
  },
  footman: {
    id: "footman",
    title: "Footman",
  },
  fire_source: {
    id: "fire_source",
    title: "Fire source",
  },
};
