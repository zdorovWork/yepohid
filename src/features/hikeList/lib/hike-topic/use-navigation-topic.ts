import { THikeTopic, useInitialItems } from "entities/hikeItem";

export const useNavigationTopic = () => {
  const { navigation_app, route_tracks, route_maps, backup_navigation_device, laminated_map, compass } =
    useInitialItems()["navigation"];

  const getNavigationInitialHikeTopic = (): THikeTopic<"navigation"> => {
    return {
      id: "navigation",
      title: "Navigation",
      stuff: [navigation_app, route_tracks, route_maps, backup_navigation_device, laminated_map, compass],
    };
  };

  return {
    getNavigationInitialHikeTopic,
  };
};
