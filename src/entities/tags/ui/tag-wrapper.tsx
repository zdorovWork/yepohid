import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { Typography } from "shared/ui/components/ui-typography";

type TTagWrapperProps = {
  icon: ReactNode;
  text: string;
  selectedColor: string;

  withText?: boolean;
  selected?: boolean;
  style?: any;
};

export const TagWrapper = ({ text, icon, withText, selected, style, selectedColor }: TTagWrapperProps) => {
  return (
    <View style={styles.tag}>
      <View style={[styles.icon, selected && { backgroundColor: selectedColor, borderColor: selectedColor }, style]}>
        {icon}
      </View>
      {withText && <Typography align="center">{text}</Typography>}
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 4,
    alignItems: "center",
  },
  icon: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: "100%",
  },
});
