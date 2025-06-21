import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { CampingIcon } from "shared/ui/icons/camping-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const CampTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Camp"
      icon={<CampingIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
