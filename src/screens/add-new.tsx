import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard, TStuffItem } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { EditTab, HideSelectedTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { UIToggle } from "shared/ui/components/ui-toggle";
import { PageLayout } from "shared/ui/page_layout";

export const AddNewScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();
  const [selectedStuffIds, setSelectedStuffIds] = useState<string[]>([]);
  const [disabledStuffIds, setDisabledStuffIds] = useState<string[]>([]);
  const [isHidingSelected, setIsHidingSelected] = useState(false);
  const [hikeList, setHikeList] = useState<THikeList>(JSON.parse(JSON.stringify(lists[id])) as THikeList);
  const [addedStuff, setAddedStuff] = useState<Partial<Record<THikeTopicName, TStuffItem<THikeTopicName>[]>>>({});

  const [isEditing, setIsEditing] = useState(false);

  if (!hikeList) return null;

  // const toggleStuffInList = (items: THikeList["items"], stuffId: string) => {
  //   const itemsCopy = JSON.parse(JSON.stringify(items)) as typeof items;

  //   if (itemsCopy.find((item) => item.id === stuffId)) {
  //     itemsCopy.filter((item) => item.id !== stuffId);
  //   } else {
  //     items.push(hikeList.items.find((item) => item.id === stuffId)!);
  //   }

  //   return itemsCopy;
  // };

  const handleToggleEditing = () => {
    setIsEditing((prev) => {
      if (prev === true) {
        const newList: THikeList = {
          ...hikeList,
          items: hikeList.items.map((item) => ({ ...item, stuff: [...item.stuff, ...(addedStuff[item.id] || [])] })),
        };

        saveList(newList);
        return false;
      } else {
        return true;
      }
    });
  };

  const toggleStuffEnabled = (stuffId: string) => {
    setDisabledStuffIds((prev) => (prev.includes(stuffId) ? prev.filter((id) => id !== stuffId) : [...prev, stuffId]));
    // setHikeList((prev) => ({ ...prev, items: toggleStuffInList(prev.items, stuffId) }));
  };

  const handleAddNewStuff = (topicName: THikeTopicName) => {
    // const listCopy = JSON.parse(JSON.stringify(lists[id])) as THikeList;

    // listCopy.items
    //   .find((item) => item.id === "bedroom")
    //   ?.stuff.push({
    //     id: (Math.random() + 1).toString(36).substring(7),
    //     title: "New stuff",
    //   });

    // saveList(listCopy);
    // setIsEditing(false);

    setAddedStuff((prev) => ({
      ...prev,
      [topicName]: [
        ...(prev[topicName] || []),
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: "New stuff",
        },
      ],
    }));
  };

  const handleChangeNewStuffTitle = (topicName: THikeTopicName, stuffId: string, title: string) => {
    setAddedStuff((prev) => ({
      ...prev,
      [topicName]: prev[topicName]?.map((stuff) => (stuff.id === stuffId ? { ...stuff, title } : stuff)),
    }));
  };

  const getHikeTopicSelectedCount = (topicId: THikeTopicName) => {
    return lists[id]?.items
      .find((item) => item.id === topicId)
      ?.stuff.filter((stuff) => selectedStuffIds.includes(stuff.id) && !disabledStuffIds.includes(stuff.id)).length;
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
    const enabled = !disabledStuffIds?.includes(stuff.id);

    if (isEditing) {
      return (
        <View key={stuff.id} style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
          <Text>{stuff.title}</Text>
          <UIToggle value={enabled} onValueChange={() => toggleStuffEnabled(stuff.id)} />
        </View>
      );
    }

    const isHidden = (isHidingSelected && checked) || !enabled;

    if (isHidden) return null;

    return (
      <UICheckbox
        key={stuff.id}
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
            <EditTab key={"edit"} onPress={handleToggleEditing} />,
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
                max={
                  lists[id]?.items
                    .find((item) => item.id === hikeItem.id)
                    ?.stuff.filter((stuff) => !disabledStuffIds.includes(stuff.id)).length || 0
                }
                size={48}
                strokeWidth={5}
              />
            }
            hikeItem={hikeItem}
          >
            {[
              ...hikeItem.stuff.map((stuff, index) => renderStuffItem(stuff, index)),
              ...(addedStuff[hikeItem.id] || []).map((stuff) => (
                <TextInput
                  key={stuff.id}
                  placeholder="Нова задача"
                  onChangeText={(title) => handleChangeNewStuffTitle(hikeItem.id, stuff.id, title)}
                />
              )),
              <View key={"add"} style={styles.addButton}>
                <Pressable onPress={() => handleAddNewStuff(hikeItem.id)}>
                  <Text>Додати</Text>
                </Pressable>
              </View>,
            ]}
          </HikeCard>
        ))}
      </ScrollView>
    </PageLayout>
  );
};

// count={getHikeTopicSelectedCount(hikeItem.id as THikeTopicName) || 0}

const styles = StyleSheet.create({
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
  addButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
