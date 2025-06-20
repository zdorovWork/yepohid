import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { TTagTypeProps } from "entities/tags/model/types";

import { PRIMARY_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { PedestrianIcon } from "shared/ui/icons/pedestrian-icon";

export const PedestrianTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <View style={styles.tag}>
      <PedestrianIcon {...svgProps} style={[styles.icon, selected && styles.selected, svgProps.style]} />
      {withText && <Typography>By foot</Typography>}
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  icon: {
    borderRadius: "100%",
  },
  selected: {
    backgroundColor: PRIMARY_COLOR,
  },
});
