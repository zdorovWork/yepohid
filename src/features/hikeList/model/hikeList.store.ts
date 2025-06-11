import { create } from "zustand";

import { THikeStuffName, THikeTopicName } from "shared/config/types";

import { THikeList } from "./types";

type THikeListState = {
  lists: Record<THikeList["id"], THikeList>;
  selectedListStuff: Record<THikeList["id"], THikeStuffName<THikeTopicName>[]>;

  addList: (list: THikeList) => void;
  saveList: (list: THikeList) => void;
  toggleStuffChecked: (listId: THikeList["id"], stuffId: THikeStuffName<THikeTopicName>) => void;
};

export const useHikeList = create<THikeListState>()((set, get) => ({
  lists: {},
  addedStuff: {},
  selectedListStuff: {},

  addList: (list) => {
    set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
  },
  saveList: (list) => {
    set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
  },

  toggleStuffChecked: (listId, stuffId) => {
    set((state) => ({
      selectedListStuff: {
        ...state.selectedListStuff,
        [listId]: state.selectedListStuff[listId]?.includes(stuffId)
          ? state.selectedListStuff[listId]?.filter((id) => id !== stuffId)
          : [...(state.selectedListStuff[listId] || []), stuffId],
      },
    }));
  },
}));
