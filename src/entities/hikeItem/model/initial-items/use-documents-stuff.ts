import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useDocumentsStuff = (): Record<TStuffItem<"documents">["id"], TStuffItem<"documents">> => {
  const { t } = useStuffTranslations();

  return {
    id_card: {
      id: "id_card",
      title: t("id_card"),
    },
    cash: {
      id: "cash",
      title: t("cash"),
    },
    bank_card: {
      id: "bank_card",
      title: t("bank_card"),
    },
    border_permit: {
      id: "border_permit",
      title: t("border_permit"),
    },
    waterproof_case: {
      id: "waterproof_case",
      title: t("waterproof_case"),
    },
  };
};
