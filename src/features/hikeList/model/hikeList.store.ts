import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import { storageService } from "shared/service/storage";

import { THikeList } from "./types";

type THikeListState = {
  lists: Record<THikeList["id"], THikeList>;

  addList: (list: THikeList) => void;
  saveList: (list: THikeList) => void;
  removeList: (id: THikeList["id"]) => void;
};

export const useHikeList = create<THikeListState>()(
  persist(
    (set, get) => ({
      lists: {},
      addedStuff: {},

      addList: (list) => {
        set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
      },
      saveList: (list) => {
        set((state) => ({ lists: { ...state.lists, [list.id]: list } }));
      },
      removeList: (id) => {
        set((state) => ({ lists: Object.fromEntries(Object.entries(state.lists).filter(([key]) => key !== id)) }));
      },
    }),
    {
      name: "hike-list",
      storage: createJSONStorage(() => storageService),
    },
  ),
);
