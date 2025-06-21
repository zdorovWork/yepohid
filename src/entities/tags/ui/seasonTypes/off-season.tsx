import { SvgProps } from "react-native-svg";

import { ORANGE_COLOR } from "shared/config/colors";
import { OffSeasonIcon } from "shared/ui/icons/off-season-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const OffSeasonTag = ({ withText, selected, style, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Off Season"
      icon={<OffSeasonIcon {...svgProps} />}
      selectedColor={ORANGE_COLOR}
      withText={withText}
      selected={selected}
      style={style}
    />
  );
};
