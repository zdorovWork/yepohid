import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { HikeCard, TStuffItem } from "entities/hikeItem";

import { useHikeList } from "features/hikeList";
import { THikeList } from "features/hikeList/model/types";

import { CheckTab, CrossTab, EditTab, HideSelectedTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { UIToggle } from "shared/ui/components/ui-toggle";
import { CrossIcon } from "shared/ui/icons/cross-icon";
import { PageLayout } from "shared/ui/page_layout";

import { useAddedStuff } from "../model/use-added-stuff";
import { useDisabledStuff } from "../model/use-disabled-stuff";
import { useSelectedStuff } from "../model/use-selected-stuff";
import { AddedStuff } from "./added-stuff";

export const ListScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { lists, saveList } = useHikeList();
  const hikeList = lists[id];

  const { selectedIds, toggleStuffSelected } = useSelectedStuff({ listId: id });
  const { disabledIds, toggleStuffEnabled, resetDisabledToInitial } = useDisabledStuff({
    initial: hikeList.disabledStuffNames,
  });
  const { addedStuff, addNewStuff, changeAddedStuffTitle, removeAddedStuff, resetAddedToInitial } = useAddedStuff({
    initial: hikeList.customStuff,
  });

  const [isHidingSelected, setIsHidingSelected] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // TODO: add separate page for editing, to prevent handle this state through the all component

  const saveListChanges = () => {
    const newList: THikeList = {
      ...hikeList,
      customStuff: addedStuff,
      disabledStuffNames: disabledIds,
    };

    saveList(newList);
  };

  const getHikeTopicSelectedCount = (topicId: THikeTopicName) => {
    return lists[id]?.items
      .find((item) => item.id === topicId)
      ?.stuff.concat(addedStuff[topicId] || [])
      .filter((stuff) => selectedIds.includes(stuff.id) && !disabledIds.includes(stuff.id)).length;
  };

  const renderStuffItem = (stuff: TStuffItem<THikeTopicName>, index: number) => {
    const checked = !!selectedIds?.includes(stuff.id);
    const enabled = !disabledIds?.includes(stuff.id);

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
        onPress={() => toggleStuffSelected(stuff.id)}
      />
    );
  };

  const handleCancelEditing = () => {
    resetDisabledToInitial();
    resetAddedToInitial();
    setIsEditing(false);
  };

  const handleSubmitEditing = () => {
    saveListChanges();
    setIsEditing(false);
  };

  if (!hikeList) return null;

  return (
    <>
      <Stack.Screen options={{ title: lists[id].title }} />

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
        <ScrollView contentContainerStyle={styles.list}>
          {lists[id]?.items.map((hikeItem) => (
            <HikeCard
              key={hikeItem.id}
              progress={
                <UICircularProgress
                  current={getHikeTopicSelectedCount(hikeItem.id) || 0}
                  max={
                    hikeItem?.stuff
                      .concat(addedStuff[hikeItem.id] || [])
                      .filter((stuff) => !disabledIds.includes(stuff.id)).length || 0
                  }
                  size={48}
                  strokeWidth={5}
                />
              }
              hikeItem={hikeItem}
            >
              {[
                ...hikeItem.stuff.map((stuff, index) => renderStuffItem(stuff, index)),
                ...(addedStuff[hikeItem.id] || [])
                  .filter((stuff) => {
                    const checked = !!selectedIds?.includes(stuff.id);
                    const enabled = !disabledIds?.includes(stuff.id);

                    const isHidden = (isHidingSelected && checked) || !enabled;

                    return !isHidden;
                  })
                  .map((stuff) => (
                    <AddedStuff
                      key={stuff.id}
                      onChangeText={(title) => changeAddedStuffTitle(hikeItem.id, stuff.id, title)}
                      isEditing={isEditing}
                      onToggle={() => toggleStuffEnabled(stuff.id)}
                      onRemove={() => removeAddedStuff(hikeItem.id, stuff.id)}
                      enabled={!disabledIds.includes(stuff.id)}
                      text={stuff.title}
                      selected={selectedIds.includes(stuff.id)}
                      onSelect={() => toggleStuffSelected(stuff.id)}
                    />
                  )),
                ...(isEditing
                  ? [
                      <Pressable style={styles.addNewElement} key={"add"} onPress={() => addNewStuff(hikeItem.id)}>
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
    </>
  );
};

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
