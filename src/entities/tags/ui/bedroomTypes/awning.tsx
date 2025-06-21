import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { AwningIcon } from "shared/ui/icons/awning-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const AwningTag = ({ withText, selected, style, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Awning"
      icon={<AwningIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
      style={style}
    />
  );
};
