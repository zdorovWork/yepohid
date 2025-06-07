import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard, TStuffItem } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { EditTab, HideSelectedTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { PageLayout } from "shared/ui/page_layout";

export const AddNewScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();
  const [selectedStuffIds, setSelectedStuffIds] = useState<string[]>([]);
  const [isHidingSelected, setIsHidingSelected] = useState(false);

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

  const getHikeTopicSelectedCount = (topicId: THikeTopicName) => {
    return lists[id]?.items
      .find((item) => item.id === topicId)
      ?.stuff.filter((stuff) => selectedStuffIds.includes(stuff.id)).length;
  };

  const handleStuffPress = (stuffId: string) => {
    if (selectedStuffIds?.includes(stuffId)) {
      setSelectedStuffIds((prev) => prev.filter((id) => id !== stuffId));
    } else {
      setSelectedStuffIds((prev) => [...prev, stuffId]);
    }
  };

  const renderStuffItem = (stuff: TStuffItem<THikeTopicName>, index: number) => {
    const checked = !!selectedStuffIds?.includes(stuff.id);
    const isHidden = isHidingSelected && checked;

    if (isHidden) return null;

    return (
      <UICheckbox
        key={stuff.id}
        style={[styles.checkbox, index % 2 === 0 && styles.oddCheckbox]}
        text={<Text>{stuff.title}</Text>}
        checked={checked}
        onPress={() => handleStuffPress(stuff.id)}
      />
    );
  };

  return (
    <PageLayout
      tabbar={
        <TabBar
          tabs={[
            <HomeTab key={"home"} />,
            <HideSelectedTab key={"hide"} onPress={() => setIsHidingSelected(!isHidingSelected)} />,
            <EditTab key={"edit"} onPress={() => setIsEditing(!isEditing)} />,
          ]}
        />
      }
    >
      <Stack.Screen options={{ title: lists[id].title }} />

      <ScrollView contentContainerStyle={styles.list}>
        {lists[id]?.items.map((hikeItem) => (
          <HikeCard
            key={hikeItem.id}
            progress={
              <UICircularProgress
                current={getHikeTopicSelectedCount(hikeItem.id) || 0}
                max={lists[id]?.items.find((item) => item.id === hikeItem.id)?.stuff.length || 0}
                size={48}
                strokeWidth={5}
              />
            }
            idEditing={isEditing}
            onAddNewStuff={handleAddNewStuff}
            hikeItem={hikeItem}
            renderStuffItem={renderStuffItem}
          />
        ))}
      </ScrollView>
    </PageLayout>
  );
};

// count={getHikeTopicSelectedCount(hikeItem.id as THikeTopicName) || 0}

const styles = StyleSheet.create({
  checkbox: {
    paddingBlock: 16,
    paddingInline: 24,
  },
  oddCheckbox: {
    backgroundColor: "#ededed",
  },
  list: {
    gap: 16,
    padding: 16,
    paddingBottom: 150,
  },
  progress: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#75a93a",
  },
});
