import { THikeList } from "features/hikeList";

import { THikeStuffName } from "shared/config/types";
import { useSet } from "shared/lib/react";

export const useDisabledStuff = ({ initial }: { initial?: THikeList["disabledStuffNames"] }) => {
  const disabledStuffIds = useSet<string>(initial || []);

  const toggleStuffEnabled = (stuffId: string) => {
    if (disabledStuffIds.has(stuffId)) {
      disabledStuffIds.delete(stuffId);
    } else {
      disabledStuffIds.add(stuffId);
    }
  };

  const resetDisabledToInitial = () => {
    disabledStuffIds.clear();
    initial?.forEach((stuffId) => disabledStuffIds.add(stuffId));
  };

  return {
    disabledIds: Array.from(disabledStuffIds.values()) as THikeStuffName[],
    toggleStuffEnabled,
    resetDisabledToInitial,
  };
};
