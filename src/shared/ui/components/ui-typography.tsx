import { ReactNode } from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";

type TTypographyProps = {
  children: ReactNode;

  strong?: boolean;
  align?: TextStyle["textAlign"];
} & TextProps;

export const Typography = ({ children, strong, style, align, ...otherProps }: TTypographyProps) => {
  return (
    <Text style={[strong && styles.strong, { textAlign: align }, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  strong: {
    fontWeight: "bold",
  },
});
