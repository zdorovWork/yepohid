import { StyleSheet, View } from "react-native";

import { ORANGE_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { PedestrianIcon } from "shared/ui/icons/pedestrian-icon";

export const TentTag = () => {
  return (
    <View>
      <PedestrianIcon />
      <Typography>Tent</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
    borderRadius: "100%",
  },
  selected: {
    backgroundColor: ORANGE_COLOR,
  },
});
