import { SvgProps } from "react-native-svg";

import { YELLOW_COLOR } from "shared/config/colors";
import { SummerIcon } from "shared/ui/icons/summer-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const SummerTag = ({ withText, selected, style, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Summer"
      icon={<SummerIcon {...svgProps} />}
      selectedColor={YELLOW_COLOR}
      withText={withText}
      selected={selected}
      style={style}
    />
  );
};
