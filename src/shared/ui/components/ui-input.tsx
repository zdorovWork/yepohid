import { ComponentProps } from "react";
import { StyleSheet, TextInput } from "react-native";

type TUIInputProps = ComponentProps<typeof TextInput>;

export const UIInput = (props: TUIInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "black",
  },
});
