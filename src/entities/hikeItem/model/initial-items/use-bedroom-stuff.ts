import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useBedroomStuff = (): Record<TStuffItem<"bedroom">["id"], TStuffItem<"bedroom">> => {
  const { t } = useStuffTranslations();

  return {
    tent: {
      id: "tent",
      title: t("tent"),
    },
    awning: {
      id: "awning",
      title: t("awning"),
    },
    tarp_guylines: {
      id: "tarp_guylines",
      title: t("tarp_guylines"),
    },
    tarp_stakes: {
      id: "tarp_stakes",
      title: t("tarp_stakes"),
    },
    camp_bag: {
      id: "camp_bag",
      title: t("camp_bag"),
    },
    footprint: {
      id: "footprint",
      title: t("footprint"),
    },
    sleeping_bag: {
      id: "sleeping_bag",
      title: t("sleeping_bag"),
    },
    bag_compressor: {
      id: "bag_compressor",
      title: t("bag_compressor"),
    },
    airtight_bag_for_sleep: {
      id: "airtight_bag_for_sleep",
      title: t("airtight_bag_for_sleep"),
    },
    mat: {
      id: "mat",
      title: t("mat"),
    },
    pump_for_sleeping_pad: {
      id: "pump_for_sleeping_pad",
      title: t("pump_for_sleeping_pad"),
    },
    repair_kit_for_sleeping_pad: {
      id: "repair_kit_for_sleeping_pad",
      title: t("repair_kit_for_sleeping_pad"),
    },
    pillow: {
      id: "pillow",
      title: t("pillow"),
    },
    hamac: {
      id: "hamac",
      title: t("hamac"),
    },
    underquilt: {
      id: "underquilt",
      title: t("underquilt"),
    },
    suspension_slings: {
      id: "suspension_slings",
      title: t("suspension_slings"),
    },
  };
};
