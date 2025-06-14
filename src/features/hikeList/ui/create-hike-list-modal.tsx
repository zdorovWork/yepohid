import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { HIKE_BEDROOM_TYPES, HIKE_KITCHEN_TYPES, THikeBedroomType, THikeKitchenType } from "shared/config/types";
import { Modal } from "shared/ui/modal";

import { getBedroomInitialHikeTopic } from "../lib/hike-topic/bedroom";
import { getKitchenInitialHikeTopic } from "../lib/hike-topic/kitchen";
import { useHikeList } from "../model/hikeList.store";
import { THikeList } from "../model/types";

type TCreateHikeListModalProps = {
  closeModal: (data: { hikeListId: string } | null) => void;
};

const bedroomTitleMapper: Record<THikeBedroomType, string> = {
  tent: "Tent",
  awning: "Awning",
  hamac: "Hamac",
};

const kitchenTitleMapper: Record<THikeKitchenType, string> = {
  fire: "Fire",
  cauldron: "Cauldron",
  integrationSystem: "Integration system",
};

export const CreateHikeListModal = ({ closeModal }: TCreateHikeListModalProps) => {
  const { addList } = useHikeList();
  const [listName, setListName] = useState("");

  const [kitchenType, setKitchenType] = useState<THikeKitchenType>("cauldron");
  const [bedroomType, setBedroomType] = useState<THikeBedroomType>("awning");

  const handleCreateHikeList = () => {
    const listId = (Math.random() + 1).toString(36).substring(7);

    const listTags: THikeList["tags"] = [kitchenType, bedroomType];

    const listItems: THikeList["items"] = [getBedroomInitialHikeTopic(listTags), getKitchenInitialHikeTopic(listTags)];

    addList({
      id: listId,
      title: listName,
      tags: listTags,
      items: listItems,
      customStuff: {},
      disabledStuffNames: [],
    });

    closeModal({ hikeListId: listId });
  };

  return (
    <Modal>
      <View style={styles.container}>
        <TextInput
          value={listName}
          placeholder="Please enter equipment list name"
          style={styles.listName}
          onChange={(e) => setListName(e.nativeEvent.text)}
        />
        <View style={styles.actions}>
          {Object.values(HIKE_KITCHEN_TYPES).map((kitchenType) => (
            <Pressable key={kitchenType} style={styles.listName} onPress={() => setKitchenType(kitchenType)}>
              <Text>{kitchenTitleMapper[kitchenType]}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {Object.values(HIKE_BEDROOM_TYPES).map((bedroomType) => (
            <Pressable key={bedroomType} style={styles.listName} onPress={() => setBedroomType(bedroomType)}>
              <Text>{bedroomTitleMapper[bedroomType]}</Text>
            </Pressable>
          ))}
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
