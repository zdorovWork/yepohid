import { THikeStuffName, THikeTopicName } from "shared/config/types";

export type TStuffItem<TopicName extends THikeTopicName> = {
  id: THikeStuffName<TopicName>;
  title: string;
};

export type THikeTopic<TopicName extends THikeTopicName> = {
  id: TopicName;
  title: string;
  stuff: TStuffItem<TopicName>[];
};

export type TAddedStuff = { [key in THikeTopicName]?: TStuffItem<THikeTopicName>[] };
