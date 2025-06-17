import { Children, ReactNode, useState } from "react";
import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

import { ArrowIcon } from "shared/ui/icons/ui-arrow";

type THikeCardProps = {
  title: string;
  progress: ReactNode;
  children: ReactNode;

  style?: StyleProp<ViewStyle>;
};

export const HikeCard = ({ title, progress, children, style }: THikeCardProps) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <View style={[styles.container, style]}>
      <Pressable style={styles.header} onPress={() => setCollapsed(!collapsed)}>
        <View style={styles.titleWrapper}>
          {progress}
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        </View>
        <ArrowIcon width={48} height={48} style={[collapsed && styles.collapsedArrow]} />
      </Pressable>
      {collapsed &&
        Children.toArray(children).map((child, index) => (
          <View key={index} style={[styles.checkbox, index % 2 === 0 && styles.oddCheckbox]}>
            {child}
          </View>
        ))}
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
