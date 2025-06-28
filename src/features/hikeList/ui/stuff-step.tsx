import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

import { HIKE_BEDROOM_TYPES, HIKE_KITCHEN_TYPES, THikeBedroomType, THikeKitchenType } from "shared/config/types";
import { Typography } from "shared/ui/components/ui-typography";

import { useModalTranslations } from "../model/use-modal-translations";

type TStuffStepProps = {
  renderBedroomOption: (travel: THikeBedroomType) => ReactNode;
  renderKitchenOption: (travel: THikeKitchenType) => ReactNode;
};

export const StuffStep = ({ renderBedroomOption, renderKitchenOption }: TStuffStepProps) => {
  const { t } = useModalTranslations();

  return (
    <>
      <View style={styles.section}>
        <Typography strong align="center">
          {t("bedroom")}
        </Typography>
        <View style={styles.actions}>{Object.values(HIKE_BEDROOM_TYPES).map(renderBedroomOption)}</View>
      </View>
      <View style={styles.section}>
        <Typography strong align="center">
          {t("kitchen")}
        </Typography>
        <View style={styles.actions}>{Object.values(HIKE_KITCHEN_TYPES).map(renderKitchenOption)}</View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "column",
    gap: 10,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
});
