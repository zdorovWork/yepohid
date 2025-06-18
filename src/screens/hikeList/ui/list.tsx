import { Text, View } from "react-native";

import { THikeTopic, TStuffItem } from "entities/hikeItem";

import { THikeList } from "features/hikeList";

import { THikeTopicName } from "shared/config/types";
import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UICircularProgress } from "shared/ui/components/ui-circular-progress";
import { UIToggle } from "shared/ui/components/ui-toggle";

import { useList } from "../model/use-list";
import { AddedStuff } from "./added-stuff";
import { EditList } from "./edit-list";
import { ViewList } from "./view-list";

export const List = ({ initialList }: { initialList: THikeList }) => {
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
  } = useList({ hikeList: initialList });

  const renderEditableStuffItem = (topicId: THikeTopicName, stuff: TStuffItem) => {
    const isAddedStuff = addedStuff[topicId]?.some((addedStuffItem) => addedStuffItem.id === stuff.id);

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

  return isEditing ? (
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
  );
};
