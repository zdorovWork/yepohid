import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { BicycleIcon } from "shared/ui/icons/bicycle-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const BicycleTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Bicycle"
      icon={<BicycleIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
