import { THikeStuffName, THikeTopicName } from "shared/config/types";

export type TStuffItem<T extends THikeTopicName> = {
  id: THikeStuffName<T>;
  title: string;
};

export type THikeTopic<T extends THikeTopicName> = {
  id: THikeTopicName;
  title: string;
  stuff: TStuffItem<T>[];
};
