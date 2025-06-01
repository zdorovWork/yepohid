import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export const PageLayout = ({ children, tabbar }: { children: React.ReactNode; tabbar: ReactNode }) => {
  return (
    <View style={styles.layout}>
      {children}
      <View style={styles.tabbar}>{tabbar}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  tabbar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
