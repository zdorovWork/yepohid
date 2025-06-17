import { ReactNode } from "react";
import { View } from "react-native";

import { THikeList } from "features/hikeList";

import { HIKE_SEASON_TYPES, HIKE_TRAVEL_TYPES, THikeSeasonType, THikeTravelType } from "shared/config/types";
import { BicycleIcon } from "shared/ui/icons/bicycle-icon";
import { CampingIcon } from "shared/ui/icons/camping-icon";
import { OffSeasonIcon } from "shared/ui/icons/off-season-icon";
import { PedestrianIcon } from "shared/ui/icons/pedestrian-icon";
import { SummerIcon } from "shared/ui/icons/summer-icon";

type TTagImageProps = {
  tags: THikeList["tags"];
};

const primaryImageMapper: Record<THikeTravelType, ReactNode> = {
  pedestrian: <PedestrianIcon />,
  bicycle: <BicycleIcon />,
  camp: <CampingIcon />,
};

const secondaryImageMapper: Record<THikeSeasonType, ReactNode> = {
  summer: <SummerIcon />,
  offSeason: <OffSeasonIcon />,
};

const getTravelTypeByTags = (tags: THikeList["tags"]): THikeTravelType | null => {
  return Object.values(HIKE_TRAVEL_TYPES).find((travelType) => tags.includes(travelType)) || null;
};

const getSeasonTypeByTags = (tags: THikeList["tags"]): THikeSeasonType | null => {
  return Object.values(HIKE_SEASON_TYPES).find((seasonType) => tags.includes(seasonType)) || null;
};

export const TagImage = ({ tags }: TTagImageProps) => {
  const travelType = getTravelTypeByTags(tags);
  const seasonType = getSeasonTypeByTags(tags);

  return (
    <View>
      {travelType && primaryImageMapper[travelType]}
      {seasonType && secondaryImageMapper[seasonType]}
    </View>
  );
};
