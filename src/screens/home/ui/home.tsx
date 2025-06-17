import { Pressable, StyleSheet, Text, View } from "react-native";

import { Stack, router } from "expo-router";

import { CreateHikeListModal, useHikeList } from "features/hikeList";

import { AddNewListTab, TabBar } from "widgets/tabbar";

import { Routes } from "shared/config/routes";
import { TrashIcon } from "shared/ui/icons/trash-icon";
import { useModal } from "shared/ui/modal";
import { PageLayout } from "shared/ui/page_layout";

import { TagImage } from "./tag-image";

type TCreateHikeListModalResponse = {
  hikeListId: string;
};

export const HomeScreen = () => {
  const { lists, removeList } = useHikeList();
  const createListModal = useModal<TCreateHikeListModalResponse>()(CreateHikeListModal);

  const redirectToList = (id: string) => {
    router.push(`/${Routes.LISTS}/${id}`);
  };

  const handleCreateHikeList = async () => {
    const response = await createListModal.showModal({});
    if (response?.hikeListId) {
      redirectToList(response.hikeListId);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Equipment lists", headerBackVisible: false }} />

      <PageLayout tabbar={<TabBar tabs={[<AddNewListTab key={"add-new"} onPress={handleCreateHikeList} />]} />}>
        <View style={styles.list}>
          {Object.entries(lists).map(([id, list]) => (
            <Pressable key={id} onPress={() => redirectToList(id)}>
              <View style={styles.listItem}>
                <Text>{list.title}</Text>
                <TrashIcon onPress={() => removeList(id)} />
                <TagImage tags={list.tags} />
              </View>
            </Pressable>
          ))}
        </View>
      </PageLayout>
    </>
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
