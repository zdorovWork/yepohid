import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { THikeBedroomType, THikeKitchenType } from "shared/config/types";
import { Modal } from "shared/ui/modal";

import { getBedroomInitialHikeTopic } from "../lib/hike-topic/bedroom";
import { getKitchenInitialHikeTopic } from "../lib/hike-topic/kitchen";
import { useHikeList } from "../model/hikeList.store";
import { THikeList } from "../model/types";

type TCreateHikeListModalProps = {
  closeModal: (data: { hikeListId: string } | null) => void;
};

export const CreateHikeListModal = ({ closeModal }: TCreateHikeListModalProps) => {
  const { addList } = useHikeList();
  const [listName, setListName] = useState("");

  const [kitchenType, setKitchenType] = useState<THikeKitchenType>("cauldron");
  const [bedroomType, setBedroomType] = useState<THikeBedroomType>("floor");

  const handleCreateHikeList = () => {
    const listId = (Math.random() + 1).toString(36).substring(7);

    const listTags: THikeList["tags"] = [kitchenType, bedroomType];

    const listItems: THikeList["items"] = [getBedroomInitialHikeTopic(listTags), getKitchenInitialHikeTopic(listTags)];

    addList({
      id: listId,
      title: listName,
      tags: listTags,
      items: listItems,
    });

    closeModal({ hikeListId: listId });
  };

  return (
    <Modal>
      <View style={styles.container}>
        <TextInput
          value={listName}
          placeholder="Name"
          style={styles.listName}
          onChange={(e) => setListName(e.nativeEvent.text)}
        />
        <View style={styles.actions}>
          <Pressable style={styles.listName} onPress={() => setKitchenType("cauldron")}>
            <Text>cauldron</Text>
          </Pressable>
          <Pressable style={styles.listName} onPress={() => setKitchenType("fire")}>
            <Text>fire</Text>
          </Pressable>
          <Pressable style={styles.listName} onPress={() => setKitchenType("integrationSystem")}>
            <Text>integrationSystem</Text>
          </Pressable>
        </View>
        <View style={styles.actions}>
          <Pressable style={styles.listName} onPress={() => setBedroomType("tent")}>
            <Text>tent</Text>
          </Pressable>
          <Pressable style={styles.listName} onPress={() => setBedroomType("floor")}>
            <Text>floor</Text>
          </Pressable>
          <Pressable style={styles.listName} onPress={() => setBedroomType("hamac")}>
            <Text>hamac</Text>
          </Pressable>
        </View>
        <Pressable style={styles.listName} onPress={handleCreateHikeList}>
          <Text>Create</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  listName: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  container: {
    flexDirection: "column",
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});
