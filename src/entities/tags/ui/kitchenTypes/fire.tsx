import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { FireIcon } from "shared/ui/icons/fire-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const FireTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Fire"
      icon={<FireIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
