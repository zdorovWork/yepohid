import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { BicycleIcon } from "shared/ui/icons/bicycle-icon";

import { TTagTypeProps } from "../../model/types";

export const BicycleTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <View style={styles.tag}>
      <BicycleIcon {...svgProps} style={[styles.icon, selected && styles.selected, svgProps.style]} />
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
