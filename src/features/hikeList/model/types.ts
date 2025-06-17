import { TAddedStuff, THikeTopic } from "entities/hikeItem";

import {
  THikeBedroomType,
  THikeKitchenType,
  THikeSeasonType,
  THikeStuffName,
  THikeTopicName,
  THikeTravelType,
} from "shared/config/types";

export type THikeList = {
  id: string;
  title: string;
  tags: (THikeKitchenType | THikeBedroomType | THikeSeasonType | THikeTravelType)[];
  items: THikeTopic<THikeTopicName>[];
  customStuff: TAddedStuff;
  disabledStuffNames: THikeStuffName<THikeTopicName>[];
  // selectedStuffNames: THikeStuffName<THikeTopicName>[];
};
