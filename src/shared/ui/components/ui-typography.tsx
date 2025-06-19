import { ReactNode } from "react";
import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type TTypographyProps = {
  children: ReactNode;

  style?: StyleProp<TextStyle>;
  strong?: boolean;
  align?: TextStyle["textAlign"];
};

export const Typography = ({ children, strong, style, align }: TTypographyProps) => {
  return <Text style={[strong && styles.strong, { textAlign: align }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: "bold",
  },
});
