import { ReactNode, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { THikeTopicName } from "shared/config/types";
import { ArrowIcon } from "shared/ui/icons/ui-arrow";

import { THikeTopic, TStuffItem } from "../model/types";

type THikeCardProps = {
  hikeItem: THikeTopic<THikeTopicName>;
  onAddNewStuff: () => void;
  renderStuffItem: (stuff: TStuffItem<THikeTopicName>, index: number) => ReactNode;
  progress: ReactNode;

  idEditing?: boolean;
};

export const HikeCard = ({ hikeItem, idEditing, onAddNewStuff, renderStuffItem, progress }: THikeCardProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.titleWrapper}>
          {progress}
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{hikeItem.title}</Text>
        </View>
        <ArrowIcon width={48} height={48} style={[collapsed && styles.collapsedArrow]} />
      </Pressable>
      {collapsed && <View>{hikeItem.stuff.map(renderStuffItem)}</View>}

      {idEditing && (
        <Pressable style={styles.addButton} onPress={onAddNewStuff}>
          <Text>Додати</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "#75a93a",
    borderWidth: 2,
    overflow: "hidden",
    borderRadius: 16,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  titleWrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  addButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  checkbox: {
    paddingBlock: 16,
    paddingInline: 24,
  },
  oddCheckbox: {
    backgroundColor: "#ededed",
  },
  collapsedArrow: {
    transform: [{ rotate: "180deg" }],
  },
});
