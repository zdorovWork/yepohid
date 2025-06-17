import { Pressable, StyleSheet, TextInput, View } from "react-native";

import { UIToggle } from "shared/ui/components/ui-toggle";
import { TrashIcon } from "shared/ui/icons/trash-icon";

type TAddedStuffProps = {
  onChangeText: (title: string) => void;
  onToggle: () => void;
  onRemove: () => void;
  enabled: boolean;
  text: string;
};

export const AddedStuff = ({ onChangeText, onToggle, onRemove, enabled, text }: TAddedStuffProps) => {
  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} value={text} placeholder="Нова задача" onChangeText={onChangeText} />
      <Pressable onPress={onRemove}>
        <TrashIcon />
      </Pressable>
      <UIToggle style={styles.toggle} value={enabled} onValueChange={onToggle} />
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
