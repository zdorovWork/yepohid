import { useHikeList } from "../model/hikeList.store";
import { THikeList } from "../model/types";

type TCreateHikeListProps = {
  title: string;
  tags: THikeList["tags"];
};

export const useCreateHikeList = ({ title, tags }: TCreateHikeListProps): THikeList => {
  const { addList } = useHikeList();
  const listId = (Math.random() + 1).toString(36).substring(7);

  return {
    id: listId,
    title,
    tags,
    items: listItems,
  };
};
