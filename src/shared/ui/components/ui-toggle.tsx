import React from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

type TUIToggleProps = {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const UIToggle = ({ value, onValueChange, style, disabled = false }: TUIToggleProps) => {
  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      style={[styles.switch, value ? styles.switchOn : styles.switchOff, disabled && styles.disabled, style]}
    >
      <View style={[styles.thumb, value ? styles.thumbOn : styles.thumbOff]} />
    </Pressable>
  );
};

const SWITCH_WIDTH = 50;
const SWITCH_HEIGHT = 30;
const THUMB_SIZE = 26;

const styles = StyleSheet.create({
  switch: {
    width: SWITCH_WIDTH,
    height: SWITCH_HEIGHT,
    borderRadius: SWITCH_HEIGHT / 2,
    justifyContent: "center",
    padding: 2,
  },
  switchOn: {
    backgroundColor: "#34C759", // iOS green
    alignItems: "flex-end",
  },
  switchOff: {
    backgroundColor: "#E5E5EA", // iOS gray
    alignItems: "flex-start",
  },
  disabled: {
    opacity: 0.4,
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: "white",
  },
  thumbOn: {
    // no extra styles, position already handled by alignItems
  },
  thumbOff: {
    // no extra styles
  },
});
