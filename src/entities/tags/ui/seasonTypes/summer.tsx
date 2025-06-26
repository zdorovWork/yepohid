import { SvgProps } from "react-native-svg";

import { YELLOW_COLOR } from "shared/config/colors";
import { SummerIcon } from "shared/ui/icons/summer-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const SummerTag = ({ withText, selected, style, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("summer")}
      icon={<SummerIcon {...svgProps} />}
      selectedColor={YELLOW_COLOR}
      withText={withText}
      selected={selected}
      style={style}
    />
  );
};
