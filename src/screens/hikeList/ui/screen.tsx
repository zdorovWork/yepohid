import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard, TAddedStuff, TStuffItem } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { CheckTab, CrossTab, EditTab, HideSelectedTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { storageService } from "shared/service/storage";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { UIToggle } from "shared/ui/components/ui-toggle";
import { CrossIcon } from "shared/ui/icons/cross-icon";
import { PageLayout } from "shared/ui/page_layout";

import { AddedStuff } from "./added-stuff";

export const ListScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();
  const [hikeList, setHikeList] = useState<THikeList>(JSON.parse(JSON.stringify(lists[id])) as THikeList);

  // const selectedStuffIds = selectedListStuff[id] || [];

  const [selectedStuffIds, setSelectedStuffIds] = useState<string[]>([]);
  const [disabledStuffIds, setDisabledStuffIds] = useState<string[]>(hikeList.disabledStuffNames || []);
  const [addedStuffDraft, setAddedStuffDraft] = useState<TAddedStuff>(hikeList.customStuff || {});

  const [isHidingSelected, setIsHidingSelected] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const saveListChanges = () => {
    const newList: THikeList = {
      ...hikeList,
      customStuff: addedStuffDraft,
      disabledStuffNames: disabledStuffIds,
      // selectedStuffNames,
    };

    saveList(newList);
  };

  useEffect(() => {
    setHikeList(JSON.parse(JSON.stringify(lists[id])) as THikeList);
  }, [lists, id]);

  useEffect(() => {
    const getSelectedFromStorage = async () => {
      const selected = await storageService.getItem(`selectedListStuff.${id}`);
      if (selected) {
        setSelectedStuffIds(JSON.parse(selected));
      }
    };

    getSelectedFromStorage();
  }, []);

  useEffect(() => {
    storageService.setItem(`selectedListStuff.${id}`, JSON.stringify(selectedStuffIds));
  }, [id, selectedStuffIds]);

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

    setAddedStuffDraft((prev) => ({
      ...prev,
      [topicName]: [
        ...(prev[topicName] || []),
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: "",
        },
      ],
    }));
  };

  const handleChangeNewStuffTitle = (topicName: THikeTopicName, stuffId: string, title: string) => {
    setAddedStuffDraft((prev) => ({
      ...prev,
      [topicName]: prev[topicName]?.map((stuff) => (stuff.id === stuffId ? { ...stuff, title } : stuff)),
    }));
  };

  const getHikeTopicSelectedCount = (topicId: THikeTopicName) => {
    return lists[id]?.items
      .find((item) => item.id === topicId)
      ?.stuff.concat(addedStuffDraft[topicId] || [])
      .filter((stuff) => selectedStuffIds.includes(stuff.id) && !disabledStuffIds.includes(stuff.id)).length;
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

  const handleRemoveAddedStuff = (topicName: THikeTopicName, stuffId: string) => {
    setAddedStuffDraft((prev) => ({
      ...prev,
      [topicName]: prev[topicName]?.filter((stuff) => stuff.id !== stuffId),
    }));
  };

  const handleCancelEditing = () => {
    setDisabledStuffIds(hikeList.disabledStuffNames || []);

    setAddedStuffDraft(hikeList.customStuff || {});
    setIsEditing(false);
  };

  const handleSubmitEditing = () => {
    saveListChanges();
    setIsEditing(false);
  };

  return (
    <PageLayout
      tabbar={
        <TabBar
          tabs={
            isEditing
              ? [
                  <CrossTab key={"cross"} onPress={handleCancelEditing} />,
                  <CheckTab key={"check"} onPress={handleSubmitEditing} />,
                ]
              : [
                  <HomeTab key={"home"} />,
                  <HideSelectedTab key={"hide"} onPress={() => setIsHidingSelected(!isHidingSelected)} />,
                  <EditTab key={"edit"} onPress={() => setIsEditing(true)} />,
                ]
          }
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
                    ?.stuff.concat(addedStuffDraft[hikeItem.id] || [])
                    .filter((stuff) => !disabledStuffIds.includes(stuff.id)).length || 0
                }
                size={48}
                strokeWidth={5}
              />
            }
            hikeItem={hikeItem}
          >
            {[
              ...hikeItem.stuff.map((stuff, index) => renderStuffItem(stuff, index)),
              ...(addedStuffDraft[hikeItem.id] || [])
                .filter(
                  (stuff) =>
                    isEditing ||
                    !disabledStuffIds.includes(stuff.id) ||
                    (!selectedStuffIds?.includes(stuff.id) && !isHidingSelected),
                )
                .map((stuff) => (
                  <AddedStuff
                    key={stuff.id}
                    onChangeText={(title) => handleChangeNewStuffTitle(hikeItem.id, stuff.id, title)}
                    isEditing={isEditing}
                    onToggle={() => toggleStuffEnabled(stuff.id)}
                    onRemove={() => handleRemoveAddedStuff(hikeItem.id, stuff.id)}
                    enabled={!disabledStuffIds.includes(stuff.id)}
                    text={stuff.title}
                    selected={selectedStuffIds.includes(stuff.id)}
                    onSelect={() => handleStuffPress(stuff.id)}
                  />
                )),
              ...(isEditing
                ? [
                    <Pressable style={styles.addNewElement} key={"add"} onPress={() => handleAddNewStuff(hikeItem.id)}>
                      <CrossIcon rotation={45} />
                      <Text>Додати новий елемент</Text>
                    </Pressable>,
                  ]
                : []),
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
  addNewElement: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
});
