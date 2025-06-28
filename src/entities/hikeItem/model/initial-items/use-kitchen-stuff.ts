import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useKitchenStuff = (): Record<TStuffItem<"kitchen">["id"], TStuffItem<"kitchen">> => {
  const { t } = useStuffTranslations();

  return {
    fire_source: {
      id: "fire_source",
      title: t("fire_source"),
    },
    backup_fire_source: {
      id: "backup_fire_source",
      title: t("backup_fire_source"),
    },
    spoon: {
      id: "spoon",
      title: t("spoon"),
    },
    plate: {
      id: "plate",
      title: t("plate"),
    },
    mug: {
      id: "mug",
      title: t("mug"),
    },
    knife: {
      id: "knife",
      title: t("knife"),
    },
    water_container: {
      id: "water_container",
      title: t("water_container"),
    },
    water_filter: {
      id: "water_filter",
      title: t("water_filter"),
    },
    sponge_for_dishes: {
      id: "sponge_for_dishes",
      title: t("sponge_for_dishes"),
    },
    eco_dish_soap: {
      id: "eco_dish_soap",
      title: t("eco_dish_soap"),
    },
    cauldron: {
      id: "cauldron",
      title: t("cauldron"),
    },
    tripod_stand: {
      id: "tripod_stand",
      title: t("tripod_stand"),
    },
    stove: {
      id: "stove",
      title: t("stove"),
    },
    source_for_stove: {
      id: "source_for_stove",
      title: t("source_for_stove"),
    },
    integration_system: {
      id: "integration_system",
      title: t("integration_system"),
    },
    gas_can: {
      id: "gas_can",
      title: t("gas_can"),
    },
  };
};
