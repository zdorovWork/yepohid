import { Text, View } from "react-native";

import { Stack, useLocalSearchParams } from "expo-router";

import { THikeTopic, TStuffItem } from "entities/hikeItem";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { UIToggle } from "shared/ui/components/ui-toggle";

import { useListScreen } from "../model/use-list-screen";
import { AddedStuff } from "./added-stuff";
import { EditList } from "./edit-list";
import { ViewList } from "./view-list";

export const ListScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    list,
    isEditing,
    addedStuff,
    disabledIds,
    selectedIds,
    handleEdit,
    handleSubmitEditing,
    handleCancelEditing,
    addNewStuff,
    changeAddedStuffTitle,
    removeAddedStuff,
    toggleStuffEnabled,
    toggleStuffSelected,
    isStuffEnabled,
    isStuffSelected,
    getTopicStuffMaxCount,
    getTopicStuffSelectedCount,
  } = useListScreen({ listId: id });

  const renderEditableStuffItem = (topicId: THikeTopicName, stuff: TStuffItem) => {
    const isAddedStuff = addedStuff[stuff.id];

    if (isAddedStuff) {
      return (
        <AddedStuff
          key={stuff.id}
          onChangeText={(title) => changeAddedStuffTitle(topicId, stuff.id, title)}
          onToggle={() => toggleStuffEnabled(stuff.id)}
          onRemove={() => removeAddedStuff(topicId, stuff.id)}
          enabled={isStuffEnabled(stuff)}
          text={stuff.title}
        />
      );
    }

    return (
      <View key={stuff.id} style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center" }}>
        <Text>{stuff.title}</Text>
        <UIToggle value={isStuffEnabled(stuff)} onValueChange={() => toggleStuffEnabled(stuff.id)} />
      </View>
    );
  };

  const renderProgress = (item: THikeTopic) => (
    <UICircularProgress current={getTopicStuffSelectedCount(item.stuff)} max={getTopicStuffMaxCount(item.stuff)} />
  );

  return (
    <>
      <Stack.Screen options={{ title: list.title }} />

      {isEditing ? (
        <EditList
          items={list.items}
          onSubmit={handleSubmitEditing}
          onCancel={handleCancelEditing}
          onAddNewStuff={addNewStuff}
          renderStuff={renderEditableStuffItem}
          renderProgress={renderProgress}
        />
      ) : (
        <ViewList
          items={list.items}
          handleEdit={handleEdit}
          selectedIds={selectedIds}
          disabledIds={disabledIds}
          renderProgress={renderProgress}
          renderStuff={(stuff) => (
            <UICheckbox
              key={stuff.id}
              text={<Text>{stuff.title}</Text>}
              checked={isStuffSelected(stuff)}
              onPress={() => toggleStuffSelected(stuff.id)}
            />
          )}
        />
      )}

      {/* <PageLayout
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
      </PageLayout> */}
    </>
  );
};
