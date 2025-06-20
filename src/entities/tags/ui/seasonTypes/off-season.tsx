import { StyleSheet, View } from "react-native";
import { SvgProps } from "react-native-svg";

import { ORANGE_COLOR } from "shared/config/colors";
import { Typography } from "shared/ui/components/ui-typography";
import { OffSeasonIcon } from "shared/ui/icons/off-season-icon";

import { TTagTypeProps } from "../../model/types";

export const OffSeasonTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <View style={[styles.tag, selected && styles.selected]}>
      <OffSeasonIcon {...svgProps} />
      {withText && <Typography>Off Season</Typography>}
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
