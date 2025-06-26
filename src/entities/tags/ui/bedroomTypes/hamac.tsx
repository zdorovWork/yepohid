import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { HamacIcon } from "shared/ui/icons/hamac-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const HamacTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("hamac")}
      icon={<HamacIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
