import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { AwningIcon } from "shared/ui/icons/awning-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const AwningTag = ({ withText, selected, style, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("awning")}
      icon={<AwningIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
      style={style}
    />
  );
};
