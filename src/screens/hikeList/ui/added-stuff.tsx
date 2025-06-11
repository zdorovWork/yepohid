import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { UICheckbox } from "shared/ui/components/ui-checkbox";
import { UIToggle } from "shared/ui/components/ui-toggle";
import { TrashIcon } from "shared/ui/icons/trash-icon";

type TAddedStuffProps = {
  onChangeText: (title: string) => void;
  isEditing: boolean;
  onToggle: () => void;
  onRemove: () => void;
  enabled: boolean;
  text: string;
  selected: boolean;
  onSelect: () => void;
};

export const AddedStuff = ({
  onChangeText,
  isEditing,
  onToggle,
  onRemove,
  enabled,
  text,
  selected,
  onSelect,
}: TAddedStuffProps) => {
  return (
    <View>
      {isEditing ? (
        <View style={styles.wrapper}>
          <TextInput style={styles.input} value={text} placeholder="Нова задача" onChangeText={onChangeText} />
          <Pressable onPress={onRemove}>
            <TrashIcon />
          </Pressable>
          <UIToggle style={styles.toggle} value={enabled} onValueChange={onToggle} />
        </View>
      ) : (
        <UICheckbox text={<Text>{text}</Text>} checked={selected} onPress={onSelect} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    maxWidth: "50%",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  toggle: {
    marginLeft: "auto",
  },
});
