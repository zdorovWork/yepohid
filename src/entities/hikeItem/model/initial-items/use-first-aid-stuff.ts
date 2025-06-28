import { TStuffItem } from "../types";
import { useStuffTranslations } from "../use-stuff-translations";

export const useFirstAidStuff = (): Record<TStuffItem<"first_aid">["id"], TStuffItem<"first_aid">> => {
  const { t } = useStuffTranslations();

  return {
    antiseptic: {
      id: "antiseptic",
      title: t("antiseptic"),
    },
  };
};
