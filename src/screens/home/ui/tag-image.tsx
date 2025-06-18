import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { THikeList } from "features/hikeList";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "shared/config/colors";
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
  pedestrian: <PedestrianIcon width={60} height={60} />,
  bicycle: <BicycleIcon width={60} height={60} />,
  camp: <CampingIcon width={50} height={50} />,
};

const secondaryImageMapper: Record<THikeSeasonType, ReactNode> = {
  summer: <SummerIcon width={30} height={30} />,
  offSeason: <OffSeasonIcon width={30} height={30} />,
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
      <View style={styles.primaryImage}>{travelType && primaryImageMapper[travelType]}</View>
      <View style={styles.secondaryImage}>{seasonType && secondaryImageMapper[seasonType]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
  },
  primaryImage: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: "100%",
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryImage: {
    position: "absolute",
    top: 0,
    left: -15,
    backgroundColor: SECONDARY_COLOR,
    borderRadius: "100%",
    width: 30,
    height: 30,
  },
});
