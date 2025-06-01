import { Pressable, StyleSheet, Text, View } from "react-native";

import { THikeTopicName } from "shared/config/types";

import { THikeTopic } from "../model/types";

type THikeCardProps = {
  hikeItem: THikeTopic<THikeTopicName>;
  onAddNewStuff: () => void;

  idEditing?: boolean;
};

export const HikeCard = ({ hikeItem, idEditing, onAddNewStuff }: THikeCardProps) => {
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{hikeItem.title}</Text>
      <View>
        {hikeItem.stuff.map((stuff) => (
          <Text key={stuff.id}>{stuff.title}</Text>
        ))}
      </View>

      {idEditing && (
        <Pressable style={styles.addButton} onPress={onAddNewStuff}>
          <Text>Додати</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  addButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});
