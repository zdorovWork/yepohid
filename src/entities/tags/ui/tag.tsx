import { ReactNode } from "react";
import { SvgProps } from "react-native-svg";

import { THikeBedroomType, THikeKitchenType, THikeSeasonType, THikeTravelType } from "shared/config/types";

import { TTagTypeProps } from "../model/types";
import { OffSeasonTag } from "./seasonTypes/off-season";
import { SummerTag } from "./seasonTypes/summer";
import { AwningTag } from "./tagTypes/awning";
import { TentTag } from "./tagTypes/tent";
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
    tent: <TentTag />,
    awning: <AwningTag />,
    hamac: null,

    summer: <SummerTag {...iconProps} {...tagTypeProps} />,
    offSeason: <OffSeasonTag {...iconProps} {...tagTypeProps} />,

    pedestrian: <PedestrianTag {...iconProps} {...tagTypeProps} />,
    bicycle: <BicycleTag {...iconProps} {...tagTypeProps} />,
    camp: <CampTag {...iconProps} {...tagTypeProps} />,

    fire: null,
    cauldron: null,
    integrationSystem: null,
  };

  return tagMapper[tag];
};
