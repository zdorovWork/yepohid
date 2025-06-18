import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export const PageLayout = ({ children, tabbar }: { children: React.ReactNode; tabbar: ReactNode }) => {
  return (
    <View style={styles.layout}>
      {children}
      {tabbar}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
