import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "shared/config/colors";
import {
  HIKE_BEDROOM_TYPES,
  HIKE_KITCHEN_TYPES,
  HIKE_SEASON_TYPES,
  HIKE_TRAVEL_TYPES,
  THikeBedroomType,
  THikeKitchenType,
  THikeSeasonType,
  THikeTravelType,
} from "shared/config/types";
import { Typography } from "shared/ui/components/ui-typography";
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

const travelTitleMapper: Record<THikeTravelType, string> = {
  pedestrian: "Pedestrian",
  bicycle: "Bicycle",
  camp: "Camp",
};

const seasonTitleMapper: Record<THikeSeasonType, string> = {
  summer: "Summer",
  offSeason: "Off season",
};

// type TStep = "kind" | "tags";

export const CreateHikeListModal = ({ closeModal }: TCreateHikeListModalProps) => {
  const { addList } = useHikeList();
  const [listName, setListName] = useState("");
  // const [step, setStep] = useState<TStep>("kind");

  const [selectedKitchenType, setSelectedKitchenType] = useState<THikeKitchenType>("cauldron");
  const [selectedTravelType, setSelectedTravelType] = useState<THikeTravelType>("pedestrian");
  const [selectedBedroomType, setSelectedBedroomType] = useState<THikeBedroomType>("awning");
  const [selectedSeasonType, setSelectedSeasonType] = useState<THikeSeasonType>("summer");

  const handleCreateHikeList = () => {
    const listId = (Math.random() + 1).toString(36).substring(7);

    const listTags: THikeList["tags"] = [
      selectedKitchenType,
      selectedBedroomType,
      selectedTravelType,
      selectedSeasonType,
    ];

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
        <Typography strong align="center">
          New List
        </Typography>
        <TextInput
          value={listName}
          placeholder="Please enter equipment list name"
          style={styles.listName}
          onChange={(e) => setListName(e.nativeEvent.text)}
        />
        <View style={styles.actions}>
          {Object.values(HIKE_TRAVEL_TYPES).map((travelType) => (
            <Pressable key={travelType} style={styles.listName} onPress={() => setSelectedTravelType(travelType)}>
              <Text>{travelTitleMapper[travelType]}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {Object.values(HIKE_SEASON_TYPES).map((seasonType) => (
            <Pressable key={seasonType} style={styles.listName} onPress={() => setSelectedSeasonType(seasonType)}>
              <Text>{seasonTitleMapper[seasonType]}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {Object.values(HIKE_KITCHEN_TYPES).map((kitchenType) => (
            <Pressable key={kitchenType} style={styles.listName} onPress={() => setSelectedKitchenType(kitchenType)}>
              <Text>{kitchenTitleMapper[kitchenType]}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.actions}>
          {Object.values(HIKE_BEDROOM_TYPES).map((bedroomType) => (
            <Pressable key={bedroomType} style={styles.listName} onPress={() => setSelectedBedroomType(bedroomType)}>
              <Text>{bedroomTitleMapper[bedroomType]}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={[styles.button, styles.cancel]} onPress={() => closeModal(null)}>
          <Typography align="center">Cancel</Typography>
        </Pressable>
        <Pressable style={[styles.button, styles.accept]} onPress={handleCreateHikeList}>
          <Typography align="center">Create</Typography>
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
  footer: {
    flexDirection: "row",
    marginInline: -10,
    marginBottom: -10,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: SECONDARY_COLOR,
    borderTopEndRadius: 10,
  },
  accept: {
    backgroundColor: PRIMARY_COLOR,
    borderTopStartRadius: 10,
  },
});
