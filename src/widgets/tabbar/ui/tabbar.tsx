import { Children, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router } from "expo-router";

import { Routes } from "shared/config/routes";
import { CheckedIcon } from "shared/ui/icons/checked-icon";
import { CheckmarkIcon } from "shared/ui/icons/checkmark-icon";
import { CrossIcon } from "shared/ui/icons/cross-icon";
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
  <TabComponent key={Routes.Home} onPress={() => router.push("/")} icon={<HomeIcon />} text={"Home"} />
);

export const AddNewListTab = ({ onPress, text }: { onPress: () => void; text: string }) => (
  <TabComponent
    key={Routes.LISTS}
    onPress={onPress}
    icon={
      <View style={styles.addNewButton}>
        <CrossIcon rotation={45} color={"#fff"} strokeWidth={2} />
      </View>
    }
    text={text}
  />
);

export const EditTab = ({ onPress }: { onPress: () => void }) => (
  <TabComponent key={"edit"} onPress={onPress} icon={<EditIcon />} text={"Edit"} />
);

export const HideSelectedTab = ({ onPress, text }: { onPress: () => void; text: string }) => (
  <TabComponent key={"hide"} onPress={onPress} icon={<CheckedIcon />} text={text} />
);

export const CrossTab = ({ onPress }: { onPress: () => void }) => (
  <TabComponent key={"cross"} onPress={onPress} icon={<CrossIcon />} text={"Cancel"} />
);

export const CheckTab = ({ onPress }: { onPress: () => void }) => (
  <TabComponent key={"check"} onPress={onPress} icon={<CheckmarkIcon />} text={"Save"} />
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingTop: 5,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    height: 100,
  },
  tabButton: {
    padding: 10,
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 14,
    textAlign: "center",
  },
  addNewButton: {
    backgroundColor: "#75a93a",
    padding: 4,
    borderRadius: "100%",
    transform: [{ scale: 0.8 }],
  },
});
