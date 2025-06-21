import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { TentIcon } from "shared/ui/icons/tent-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const TentTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Tent"
      icon={<TentIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
