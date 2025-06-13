import { Pressable, StyleSheet, Text, View } from "react-native";

import { Stack, router } from "expo-router";

import { CreateHikeListModal, useHikeList } from "features/hikeList";

import { AddNewListTab, TabBar } from "widgets/tabbar";

import { Routes } from "shared/config/routes";
import { useModal } from "shared/ui/modal";
import { PageLayout } from "shared/ui/page_layout";

type TCreateHikeListModalResponse = {
  hikeListId: string;
};

export const HomeScreen = () => {
  const { lists } = useHikeList();

  const createListModal = useModal<TCreateHikeListModalResponse>()(CreateHikeListModal);

  const handleListPress = (id: string) => {
    router.push(`/${Routes.LISTS}/${id}`);
  };

  const handleCreateHikeList = async () => {
    const response = await createListModal.showModal({});
    if (response?.hikeListId) {
      router.push(`/${Routes.LISTS}/${response.hikeListId}`);
    }
  };

  return (
    <PageLayout tabbar={<TabBar tabs={[<AddNewListTab key={"add-new"} onPress={handleCreateHikeList} />]} />}>
      <Stack.Screen options={{ headerTitle: "Home", headerBackVisible: false }} />
      <View style={styles.list}>
        {Object.entries(lists).map(([id, list]) => (
          <Pressable key={id} onPress={() => handleListPress(id)}>
            <View style={styles.listItem}>
              <Text>{list.title}</Text>
              <Text>{list.tags.join(", ")}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    gap: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
