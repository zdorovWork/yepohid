import { Children, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router } from "expo-router";

import { Routes } from "shared/config/routes";
import { EditIcon } from "shared/ui/icons/edit-icon";
import { HomeIcon } from "shared/ui/icons/home-icon";

const TabComponent = ({ onPress, icon, text }: { onPress: () => void; icon: ReactNode; text: string }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tabButton}>
      {icon}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export const TabBar = ({ tabs }: { tabs: ReactNode[] }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.tabBar, { paddingBottom: insets.bottom }]}>{Children.toArray(tabs).map((tab) => tab)}</View>
  );
};

export const HomeTab = () => (
  <TabComponent key={Routes.Home} onPress={() => router.push("/")} icon={<HomeIcon />} text={"Головна"} />
);

export const AddNewListTab = ({ onPress }: { onPress: () => void }) => (
  <TabComponent key={Routes.LISTS} onPress={onPress} icon={null} text={"Додати"} />
);

export const EditTab = ({ onPress }: { onPress: () => void }) => (
  <TabComponent key={"edit"} onPress={onPress} icon={<EditIcon />} text={"Редагувати"} />
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    // justifyContent: "space-around",
  },
  tabButton: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 14,
  },
});
