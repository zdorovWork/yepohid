import { TStuffItem } from "../types";

export const useNavigationStuff = (): Record<TStuffItem<"navigation">["id"], TStuffItem<"navigation">> => {
  return {
    navigation_app: {
      id: "navigation_app",
      title: "Navigation app for phone",
    },
    route_tracks: {
      id: "route_tracks",
      title: "Download route tracks",
    },
    route_maps: {
      id: "route_maps",
      title: "Download route maps",
    },
    backup_navigation_device: {
      id: "backup_navigation_device",
      title: "Backup navigation device (GPS/watch)",
    },
    laminated_map: {
      id: "laminated_map",
      title: "Laminated map",
    },
    compass: {
      id: "compass",
      title: "Compass",
    },
  };
};
