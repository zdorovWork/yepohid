import { Pressable, StyleSheet, View } from "react-native";

import { UIInput } from "shared/ui/components/ui-input";
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
      <UIInput style={styles.input} value={text} placeholder="Нова задача" onChangeText={onChangeText} />
      <Pressable onPress={onRemove}>
        <TrashIcon />
      </Pressable>
      <UIToggle style={styles.toggle} value={enabled} onValueChange={onToggle} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
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
