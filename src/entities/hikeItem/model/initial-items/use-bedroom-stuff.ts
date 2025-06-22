import { TStuffItem } from "../types";

export const useBedroomStuff = (): Record<TStuffItem<"bedroom">["id"], TStuffItem<"bedroom">> => {
  return {
    tent: {
      id: "tent",
      title: "Tent",
    },
    awning: {
      id: "awning",
      title: "Awning",
    },
    tarp_guylines: {
      id: "tarp_guylines",
      title: "Tarp guylines",
    },
    tarp_stakes: {
      id: "tarp_stakes",
      title: "Tarp stakes",
    },
    camp_bag: {
      id: "camp_bag",
      title: "Camp bag",
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
      title: "Sleeping bag compression sack",
    },
    airtight_bag_for_sleep: {
      id: "airtight_bag_for_sleep",
      title: "Dry bag for sleeping bag",
    },
    mat: {
      id: "mat",
      title: "Mat",
    },
    pump_for_sleeping_pad: {
      id: "pump_for_sleeping_pad",
      title: "Pump for sleeping pad",
    },
    repair_kit_for_sleeping_pad: {
      id: "repair_kit_for_sleeping_pad",
      title: "Repair kit for sleeping pad",
    },
    pillow: {
      id: "pillow",
      title: "Pillow",
    },
    hamac: {
      id: "hamac",
      title: "Hamac",
    },
    underquilt: {
      id: "underquilt",
      title: "Underquilt",
    },
    suspension_slings: {
      id: "suspension_slings",
      title: "Suspension slings with tree protection",
    },
  };
};
