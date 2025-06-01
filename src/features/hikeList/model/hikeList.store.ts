import { create } from "zustand";

import { THikeList } from "./types";

type THikeListState = {
  lists: Record<string, THikeList>;

  addList: (list: THikeList) => void;
  saveList: (list: THikeList) => void;
};

export const useHikeList = create<THikeListState>()((set, get) => ({
  lists: {},

  addList: (list) => {
    set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
  },

  saveList: (list) => {
    set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
  },
}));
