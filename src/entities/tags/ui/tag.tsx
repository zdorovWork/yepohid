import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";

import { THikeBedroomType, THikeKitchenType, THikeSeasonType, THikeTravelType } from "shared/config/types";

import { TTagTypeProps } from "../model/types";
import { AwningTag } from "./bedroomTypes/awning";
import { HamacTag } from "./bedroomTypes/hamac";
import { TentTag } from "./bedroomTypes/tent";
import { CauldronTag } from "./kitchenTypes/cauldron";
import { FireTag } from "./kitchenTypes/fire";
import { IntegrationSystemTag } from "./kitchenTypes/integration-system";
import { OffSeasonTag } from "./seasonTypes/off-season";
import { SummerTag } from "./seasonTypes/summer";
import { BicycleTag } from "./travelTypes/bicycle";
import { CampTag } from "./travelTypes/camp";
import { PedestrianTag } from "./travelTypes/pedestrian";

type TTag = THikeBedroomType | THikeKitchenType | THikeSeasonType | THikeTravelType;

type TTagProps = {
  tag: TTag;
  size?: number;
};

export const Tag = ({ tag, size, ...tagTypeProps }: TTagProps & TTagTypeProps) => {
  const iconProps: SvgProps = size ? { width: size, height: size } : {};

  const tagMapper: Record<TTag, ReactNode> = {
    tent: <TentTag {...iconProps} {...tagTypeProps} />,
    awning: <AwningTag {...iconProps} {...tagTypeProps} />,
    hamac: <HamacTag {...iconProps} {...tagTypeProps} />,

    summer: <SummerTag {...iconProps} {...tagTypeProps} />,
    offSeason: <OffSeasonTag {...iconProps} {...tagTypeProps} />,

    pedestrian: <PedestrianTag {...iconProps} {...tagTypeProps} />,
    bicycle: <BicycleTag {...iconProps} {...tagTypeProps} />,
    camp: <CampTag {...iconProps} {...tagTypeProps} />,

    fire: <FireTag {...iconProps} {...tagTypeProps} />,
    cauldron: <CauldronTag {...iconProps} {...tagTypeProps} />,
    integrationSystem: <IntegrationSystemTag {...iconProps} {...tagTypeProps} />,
  };

  return tagMapper[tag];
};
