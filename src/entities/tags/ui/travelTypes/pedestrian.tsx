import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { PedestrianIcon } from "shared/ui/icons/pedestrian-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const PedestrianTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("pedestrian")}
      icon={<PedestrianIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
