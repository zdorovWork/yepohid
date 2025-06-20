import { Pressable, StyleSheet, Text, View } from "react-native";

import { FlashList } from "@shopify/flash-list";
import { Stack, router } from "expo-router";

import { CreateHikeListModal, useHikeList } from "features/hikeList";

import { AddNewListTab, TabBar } from "widgets/tabbar";

import { ERROR_COLOR, PRIMARY_COLOR } from "shared/config/colors";
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

    console.log("response", response);

    if (response?.hikeListId) {
      redirectToList(response.hikeListId);
    }
  };

  return (
    <>
      <Stack.Screen options={{ headerTitle: "Equipment lists", headerBackVisible: false }} />

      <PageLayout tabbar={<TabBar tabs={[<AddNewListTab key={"add-new"} onPress={handleCreateHikeList} />]} />}>
        <FlashList
          contentContainerStyle={styles.list}
          data={Object.values(lists)}
          renderItem={({ item }) => (
            <Pressable onPress={() => redirectToList(item.id)} style={styles.listItem}>
              <Text>{item.title}</Text>
              <View style={styles.actions}>
                <TrashIcon onPress={() => removeList(item.id)} color={ERROR_COLOR} />
                <TagImage tags={item.tags} />
              </View>
            </Pressable>
          )}
          estimatedItemSize={60}
          keyExtractor={(item) => item.id}
        />
      </PageLayout>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingTop: 16,
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    paddingHorizontal: 16,
    paddingTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: PRIMARY_COLOR,
  },
  actions: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
});
