import { TAddedStuff, THikeTopic } from "entities/hikeItem";

import { THikeBedroomType, THikeKitchenType, THikeStuffName, THikeTopicName } from "shared/config/types";

export type THikeList = {
  id: string;
  title: string;
  tags: (THikeKitchenType | THikeBedroomType)[];
  items: THikeTopic<THikeTopicName>[];
  customStuff: TAddedStuff;
  disabledStuffNames: THikeStuffName<THikeTopicName>[];
  // selectedStuffNames: THikeStuffName<THikeTopicName>[];
};
