import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { HIKE_SEASON_TYPES, HIKE_TRAVEL_TYPES, THikeSeasonType, THikeTravelType } from "shared/config/types";
import { Typography } from "shared/ui/components/ui-typography";

type TKindStepProps = {
  renderTravelOption: (travel: THikeTravelType) => ReactNode;
  renderSeasonOption: (travel: THikeSeasonType) => ReactNode;
};

export const KindStep = ({ renderTravelOption, renderSeasonOption }: TKindStepProps) => {
  return (
    <>
      <View style={styles.section}>
        <Typography strong align="center">
          Travel kind
        </Typography>
        <View style={styles.actions}>{Object.values(HIKE_TRAVEL_TYPES).map(renderTravelOption)}</View>
      </View>

      <View style={styles.section}>
        <Typography strong align="center">
          Season
        </Typography>
        <View style={styles.actions}>
          {Object.values(HIKE_SEASON_TYPES).map(renderSeasonOption)}
          <View style={styles.action}></View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "column",
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  action: {
    flexBasis: "33%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
