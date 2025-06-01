import { THikeTopic } from "entities/hikeItem";

import { THikeBedroomType, THikeKitchenType, THikeTopicName } from "shared/config/types";

export type THikeList = {
  id: string;
  title: string;
  tags: (THikeKitchenType | THikeBedroomType)[];
  items: THikeTopic<THikeTopicName>[];
};
