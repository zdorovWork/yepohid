import { useEffect } from "react";

import { THikeList } from "features/hikeList";

import { THikeStuffName } from "shared/config/types";
import { useSet } from "shared/lib/react";
import { storageService } from "shared/service/storage";

export const useSelectedStuff = ({ listId }: { listId: THikeList["id"] }) => {
  const selectedStuffIds = useSet<THikeStuffName>([]);

  const storageKey = `selectedListStuff.${listId}`;

  const toggleStuffSelected = (stuffId: THikeStuffName) => {
    if (selectedStuffIds.has(stuffId)) {
      selectedStuffIds.delete(stuffId);
    } else {
      selectedStuffIds.add(stuffId);
    }
    storageService.setItem(storageKey, JSON.stringify(Array.from(selectedStuffIds.values())));
  };

  useEffect(() => {
    const getSelectedFromStorage = async () => {
      const selected = await storageService.getItem(storageKey);
      if (selected) {
        const selectedArray = JSON.parse(selected);

        if (Array.isArray(selectedArray)) {
          selectedArray.forEach((stuffId: THikeStuffName) => {
            selectedStuffIds.add(stuffId);
          });
        }
      }
    };

    getSelectedFromStorage();
  }, []);

  return {
    toggleStuffSelected,
    selectedIds: Array.from(selectedStuffIds.values()) as THikeStuffName[],
  };
};
