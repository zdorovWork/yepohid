import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard, TStuffItem } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { EditTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { PageLayout } from "shared/ui/page_layout";

export const AddNewScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();
  const [selectedStuffIds, setSelectedStuffIds] = useState<string[]>([]);

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

  const handleStuffPress = (stuffId: string) => {
    if (selectedStuffIds?.includes(stuffId)) {
      setSelectedStuffIds((prev) => prev.filter((id) => id !== stuffId));
    } else {
      setSelectedStuffIds((prev) => [...prev, stuffId]);
    }
  };

  const renderStuffItem = (stuff: TStuffItem<THikeTopicName>, index: number) => (
    <UICheckbox
      key={stuff.id}
      style={[styles.checkbox, index % 2 === 0 && styles.oddCheckbox]}
      text={<Text>{stuff.title}</Text>}
      checked={selectedStuffIds?.includes(stuff.id) || false}
      onPress={() => handleStuffPress(stuff.id)}
    />
  );

  return (
    <PageLayout
      tabbar={
        <TabBar tabs={[<HomeTab key={"home"} />, <EditTab key={"edit"} onPress={() => setIsEditing(!isEditing)} />]} />
      }
    >
      <Stack.Screen options={{ title: lists[id].title }} />

      <View>
        {lists[id]?.items.map((hikeItem) => (
          <HikeCard
            key={hikeItem.id}
            idEditing={isEditing}
            onAddNewStuff={handleAddNewStuff}
            hikeItem={hikeItem}
            renderStuffItem={renderStuffItem}
          />
        ))}
      </View>
    </PageLayout>
  );
};
const styles = StyleSheet.create({
  checkbox: {
    paddingBlock: 16,
    paddingInline: 24,
  },
  oddCheckbox: {
    backgroundColor: "#ededed",
  },
});
