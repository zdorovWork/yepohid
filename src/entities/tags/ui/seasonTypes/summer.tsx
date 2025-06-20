import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { YELLOW_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { SummerIcon } from "shared/ui/icons/summer-icon";

import { TTagTypeProps } from "../../model/types";

export const SummerTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <View style={[styles.tag, selected && styles.selected]}>
      <SummerIcon {...svgProps} />
      {withText && <Typography>Summer</Typography>}
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
    backgroundColor: YELLOW_COLOR,
  },
});
