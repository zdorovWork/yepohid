import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Tag } from "entities/tags";

import { THikeList } from "features/hikeList";

import { HIKE_SEASON_TYPES, HIKE_TRAVEL_TYPES, THikeSeasonType, THikeTravelType } from "shared/config/types";

type TTagImageProps = {
  tags: THikeList["tags"];
};

const primaryImageMapper: Record<THikeTravelType, ReactNode> = {
  pedestrian: <Tag tag="pedestrian" size={60} selected />,
  bicycle: <Tag tag="bicycle" size={60} selected />,
  camp: <Tag tag="camp" size={60} selected />,
};

const secondaryImageMapper: Record<THikeSeasonType, ReactNode> = {
  // summer: <SummerIcon width={30} height={30} />,
  summer: <Tag tag="summer" size={30} selected />,
  offSeason: <Tag tag="offSeason" size={30} selected />,
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
    alignItems: "center",
    justifyContent: "center",
  },
  secondaryImage: {
    position: "absolute",
    top: 0,
    left: -15,
  },
});
