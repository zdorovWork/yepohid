import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { CauldronIcon } from "shared/ui/icons/cauldron-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const CauldronTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("cauldron")}
      icon={<CauldronIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
