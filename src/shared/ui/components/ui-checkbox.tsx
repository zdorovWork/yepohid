import React, { ComponentProps, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type TUICheckboxProps = {
  text: ReactNode;
  checked: boolean;
  onPress: () => void;
} & ComponentProps<typeof TouchableOpacity>;

export const UICheckbox = ({ text, checked, onPress, style, ...otherProps }: TUICheckboxProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.checkboxContainer, style]} {...otherProps}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {text}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: { flexDirection: "row", alignItems: "center" },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#bbbbc1",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checked: { backgroundColor: "#4CAF50", borderColor: "#4CAF50" },
  checkmark: { color: "white", fontSize: 14, justifyContent: "center", alignItems: "center" },
  label: { fontSize: 16 },
});
