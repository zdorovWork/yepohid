import { THikeBedroomType, THikeKitchenType, THikeSeasonType, THikeTravelType } from "shared/config/types";

export type TTagTypeProps = {
  withText?: boolean;
  selected?: boolean;
};

export type TTag = THikeBedroomType | THikeKitchenType | THikeSeasonType | THikeTravelType;
