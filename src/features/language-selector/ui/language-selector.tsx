import { StyleSheet, View } from "react-native";

import { UIToggle } from "shared/ui/components/ui-toggle";
import { Typography } from "shared/ui/components/ui-typography";

import { useLanguageSelector } from "../model/use-language-selector";

export const LanguageSelector = () => {
  const { language, toggleLanguage, languagesOptions } = useLanguageSelector();

  return (
    <View style={styles.selector}>
      <Typography align="center">{languagesOptions.en}</Typography>
      <UIToggle value={language === "ua"} onValueChange={toggleLanguage} />
      <Typography align="center">{languagesOptions.ua}</Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
