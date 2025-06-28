import { Children, ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router } from "expo-router";

import { CheckedIcon } from "shared/ui/icons/checked-icon";
import { CheckmarkIcon } from "shared/ui/icons/checkmark-icon";
import { CrossIcon } from "shared/ui/icons/cross-icon";
import { EditIcon } from "shared/ui/icons/edit-icon";
import { HomeIcon } from "shared/ui/icons/home-icon";

import { useTabbarTranslations } from "../model/use-tabbar-translations";

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

export const HomeTab = () => {
  const { t } = useTabbarTranslations();

  return <TabComponent onPress={() => router.push("/")} icon={<HomeIcon />} text={t("home")} />;
};

export const AddNewListTab = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTabbarTranslations();

  return (
    <TabComponent
      onPress={onPress}
      icon={
        <View style={styles.addNewButton}>
          <CrossIcon rotation={45} color={"#fff"} strokeWidth={2} />
        </View>
      }
      text={t("addNew")}
    />
  );
};

export const EditTab = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTabbarTranslations();

  return <TabComponent onPress={onPress} icon={<EditIcon />} text={t("edit")} />;
};

export const HideSelectedTab = ({ onPress, checked }: { onPress: () => void; checked: boolean }) => {
  const { t } = useTabbarTranslations();

  return (
    <TabComponent onPress={onPress} icon={<CheckedIcon />} text={checked ? t("selected.hide") : t("selected.show")} />
  );
};

export const CrossTab = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTabbarTranslations();

  return <TabComponent onPress={onPress} icon={<CrossIcon />} text={t("cancel")} />;
};

export const CheckTab = ({ onPress }: { onPress: () => void }) => {
  const { t } = useTabbarTranslations();

  return <TabComponent onPress={onPress} icon={<CheckmarkIcon />} text={t("save")} />;
};

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
