import { SvgProps } from "react-native-svg";

import { PRIMARY_COLOR } from "shared/config/colors";
import { IntegrationSystemIcon } from "shared/ui/icons/integration-system-icon";

import { TTagTypeProps } from "../../model/types";
import { useTagsTranslations } from "../../model/use-tags-translations";
import { TagWrapper } from "../tag-wrapper";

export const IntegrationSystemTag = ({ withText, selected, ...svgProps }: TTagTypeProps & SvgProps) => {
  const { t } = useTagsTranslations();

  return (
    <TagWrapper
      text={t("integrationSystem")}
      icon={<IntegrationSystemIcon {...svgProps} />}
      selectedColor={PRIMARY_COLOR}
      withText={withText}
      selected={selected}
    />
  );
};
