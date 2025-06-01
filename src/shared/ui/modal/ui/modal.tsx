import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { StatusBar } from "expo-status-bar";

type TModalProps = {
  children: ReactNode;
};

export const Modal = ({ children }: TModalProps) => {
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.modalWrapper}>
        <View style={styles.background} />
        <View style={styles.modal}>{children}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    height: "100%",
    width: "100%",
    opacity: 0.5,
    backgroundColor: "black",
  },
  modal: {
    position: "absolute",
    borderRadius: 10,
    padding: 10,
    flexDirection: "column",
    gap: 10,
    backgroundColor: "white",
  },
});
