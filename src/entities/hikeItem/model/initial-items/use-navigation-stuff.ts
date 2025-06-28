import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useNavigationStuff = (): Record<TStuffItem<"navigation">["id"], TStuffItem<"navigation">> => {
  const { t } = useStuffTranslations();

  return {
    navigation_app: {
      id: "navigation_app",
      title: t("navigation_app"),
    },
    route_tracks: {
      id: "route_tracks",
      title: t("route_tracks"),
    },
    route_maps: {
      id: "route_maps",
      title: t("route_maps"),
    },
    backup_navigation_device: {
      id: "backup_navigation_device",
      title: t("backup_navigation_device"),
    },
    laminated_map: {
      id: "laminated_map",
      title: t("laminated_map"),
    },
    compass: {
      id: "compass",
      title: t("compass"),
    },
  };
};
