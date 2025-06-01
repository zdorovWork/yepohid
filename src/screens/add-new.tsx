import { useState } from "react";
import { View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { EditTab, HomeTab, TabBar } from "widgets/tabbar";

import { PageLayout } from "shared/ui/page_layout";

export const AddNewScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();

  const [isEditing, setIsEditing] = useState(false);

  if (!lists[id]) return null;

  const handleAddNewStuff = () => {
    const listCopy = JSON.parse(JSON.stringify(lists[id])) as THikeList;

    listCopy.items
      .find((item) => item.id === "bedroom")
      ?.stuff.push({
        id: (Math.random() + 1).toString(36).substring(7),
        title: "New stuff",
      });

    saveList(listCopy);
    setIsEditing(false);
  };

  return (
    <PageLayout
      tabbar={
        <TabBar tabs={[<HomeTab key={"home"} />, <EditTab key={"edit"} onPress={() => setIsEditing(!isEditing)} />]} />
      }
    >
      <Stack.Screen options={{ title: lists[id].title }} />

      <View>
        {lists[id]?.items.map((hikeItem) => (
          <HikeCard key={hikeItem.id} idEditing={isEditing} onAddNewStuff={handleAddNewStuff} hikeItem={hikeItem} />
        ))}
      </View>
    </PageLayout>
  );
};
