import { THikeTopicName } from "shared/config/types";

import { TStuffItem } from "../types";
import { useBedroomStuff } from "./use-bedroom-stuff";
import { useClothingStuff } from "./use-clothing-stuff";
import { useDocumentsStuff } from "./use-documents-stuff";
import { useElectronicsStuff } from "./use-electronics-stuff";
import { useFirstAidStuff } from "./use-first-aid-stuff";
import { useFoodStuff } from "./use-food-stuff";
import { useGearStuff } from "./use-gear-stuff";
import { useHygieneStuff } from "./use-hygiene-stuff";
import { useKitchenStuff } from "./use-kitchen-stuff";
import { useNavigationStuff } from "./use-navigation-stuff";
import { useOtherStuff } from "./use-other-stuff";

export const useInitialItems = (): {
  [T in THikeTopicName]: Record<TStuffItem<T>["id"], TStuffItem<T>>;
} => ({
  bedroom: useBedroomStuff(),
  clothing: useClothingStuff(),
  documents: useDocumentsStuff(),
  electronics: useElectronicsStuff(),
  first_aid: useFirstAidStuff(),
  food: useFoodStuff(),
  gear: useGearStuff(),
  hygiene: useHygieneStuff(),
  kitchen: useKitchenStuff(),
  navigation: useNavigationStuff(),
  other: useOtherStuff(),
});
