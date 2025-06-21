import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { IntegrationSystemIcon } from "shared/ui/icons/integration-system-icon";

import { TTagTypeProps } from "../../model/types";
import { TagWrapper } from "../tag-wrapper";

export const IntegrationSystemTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  return (
    <TagWrapper
      text="Integration System"
      icon={<IntegrationSystemIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
