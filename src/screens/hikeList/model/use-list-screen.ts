import { useState } from "react";

import { TStuffItem } from "entities/hikeItem";

import { THikeList, useHikeList } from "features/hikeList";

import { useAddedStuff } from "./use-added-stuff";
import { useDisabledStuff } from "./use-disabled-stuff";
import { useSelectedStuff } from "./use-selected-stuff";

export const useListScreen = ({ listId }: { listId: string }) => {
  const { lists, saveList } = useHikeList();
  const hikeList = lists[listId];

  const { selectedIds, toggleStuffSelected } = useSelectedStuff({ listId });
  const { disabledIds, toggleStuffEnabled, resetDisabledToInitial } = useDisabledStuff({
    initial: hikeList.disabledStuffNames,
  });
  const { addedStuff, addNewStuff, changeAddedStuffTitle, removeAddedStuff, resetAddedToInitial } = useAddedStuff({
    initial: hikeList.customStuff,
  });

  const [isEditing, setIsEditing] = useState(false);

  const isStuffEnabled = (stuff: TStuffItem) => {
    return !disabledIds.includes(stuff.id);
  };

  const isStuffSelected = (stuff: TStuffItem) => {
    return selectedIds.includes(stuff.id);
  };

  const getTopicStuffSelectedCount = (stuff: TStuffItem[]) => {
    return stuff.filter((stuffItem) => isStuffSelected(stuffItem) && isStuffEnabled(stuffItem)).length;
  };
  const getTopicStuffMaxCount = (stuff: TStuffItem[]) => {
    return stuff.filter(isStuffEnabled).length;
  };

  const saveListChanges = () => {
    const newList: THikeList = {
      ...hikeList,
      customStuff: addedStuff,
      disabledStuffNames: disabledIds,
    };

    saveList(newList);
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

  const mergedList = {
    ...hikeList,
    items: hikeList.items.map((item) => ({
      ...item,
      stuff: item.stuff.concat(addedStuff[item.id] || []),
    })),
  };

  return {
    list: mergedList,
    isEditing,
    addedStuff,
    disabledIds,
    selectedIds,
    handleCancelEditing,
    handleSubmitEditing,
    handleEdit: () => setIsEditing(true),
    toggleStuffSelected,
    toggleStuffEnabled,
    addNewStuff,
    changeAddedStuffTitle,
    removeAddedStuff,
    isStuffEnabled,
    isStuffSelected,
    getTopicStuffSelectedCount,
    getTopicStuffMaxCount,
  };
};
