import { Stack, useLocalSearchParams } from "expo-router";
import { useShallow } from "zustand/shallow";

import { useHikeList } from "features/hikeList";

import { List } from "./list";

export const ListScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const initialList = useHikeList(useShallow((state) => state.lists[id]));

  if (!initialList) {
    return null;
  }

  return (
    <>
      <Stack.Screen options={{ title: initialList.title }} />

      <List initialList={initialList} />
    </>
  );
};
