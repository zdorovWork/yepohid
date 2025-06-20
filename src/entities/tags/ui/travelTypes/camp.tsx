import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { CampingIcon } from "shared/ui/icons/camping-icon";

import { TTagTypeProps } from "../../model/types";

export const CampTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <View style={styles.tag}>
      <CampingIcon {...svgProps} style={[styles.icon, selected && styles.selected, svgProps.style]} />
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
