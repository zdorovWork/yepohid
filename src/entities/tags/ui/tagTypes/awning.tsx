import { StyleSheet } from "react-native";

import { ORANGE_COLOR } from "shared/config/colors";

export const AwningTag = () => {
  return null;
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
