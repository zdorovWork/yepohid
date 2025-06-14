import { useState } from "react";

import { TAddedStuff } from "entities/hikeItem";

import { THikeTopicName } from "shared/config/types";

export const useAddedStuff = ({ initial }: { initial?: TAddedStuff }) => {
  const [addedStuff, setAddedStuff] = useState<TAddedStuff>(initial || {});

  const addNewStuff = (topicName: THikeTopicName) => {
    setAddedStuff((prev) => ({
      ...prev,
      [topicName]: [
        ...(prev[topicName] || []),
        {
          id: (Math.random() + 1).toString(36).substring(7),
          title: "",
        },
      ],
    }));
  };

  const changeAddedStuffTitle = (topicName: THikeTopicName, stuffId: string, title: string) => {
    setAddedStuff((prev) => ({
      ...prev,
      [topicName]: prev[topicName]?.map((stuff) => (stuff.id === stuffId ? { ...stuff, title } : stuff)),
    }));
  };

  const removeAddedStuff = (topicName: THikeTopicName, stuffId: string) => {
    setAddedStuff((prev) => ({
      ...prev,
      [topicName]: prev[topicName]?.filter((stuff) => stuff.id !== stuffId),
    }));
  };

  const resetAddedToInitial = () => {
    setAddedStuff(initial || {});
  };

  return {
    addedStuff,
    addNewStuff,
    changeAddedStuffTitle,
    removeAddedStuff,
    resetAddedToInitial,
  };
};
