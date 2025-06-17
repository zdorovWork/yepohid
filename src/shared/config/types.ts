export const HIKE_TOPIC_NAMES = {
  bedroom: "bedroom",
  kitchen: "kitchen",
  hygiene: "hygiene",
  navigation: "navigation",
  electronics: "electronics",
} as const;

export type THikeTopicName = (typeof HIKE_TOPIC_NAMES)[keyof typeof HIKE_TOPIC_NAMES];

export const HIKE_STUFF_BEDROOM_NAMES = {
  tent: "tent",
  footprint: "footprint",
  sleeping_bag: "sleeping_bag",
  bag_compressor: "bag_compressor",
  airtight_bag_for_sleep: "airtight_bag_for_sleep",
  rug: "rug",
  pillow: "pillow",
} as const;

export const HIKE_STUFF_KITCHEN_NAMES = {
  fire_source: "fire_source",
  spoon: "spoon",
  plate: "plate",
  mug: "mug",
  knife: "knife",
  fluid_container: "fluid_container",
  water_filter: "water_filter",
  sponge_for_dishes: "sponge_for_dishes",
  dishes_cleaner: "dishes_cleaner",
  stove: "stove",
  source_for_stove: "source_for_stove",
  cauldron: "cauldron",
  footman: "footman",
} as const;

export const HIKE_STUFF_HYGIENE_NAMES = {
  soap: "soap",
  tooth_brush: "tooth_brush",
  tooth_paste: "tooth_paste",
};

export const HIKE_STUFF_NAVIGATION_NAMES = {
  phone_navigation_app: "phone_navigation_app",
  watch: "watch",
  compass: "compass",
};

export const HIKE_STUFF_ELECTRONICS_NAMES = {
  mobile_phone: "mobile_phone",
  power_bank: "power_bank",
};

type THikeStuffMapper = {
  [HIKE_TOPIC_NAMES.bedroom]: (typeof HIKE_STUFF_BEDROOM_NAMES)[keyof typeof HIKE_STUFF_BEDROOM_NAMES];
  [HIKE_TOPIC_NAMES.kitchen]: (typeof HIKE_STUFF_KITCHEN_NAMES)[keyof typeof HIKE_STUFF_KITCHEN_NAMES];
  [HIKE_TOPIC_NAMES.hygiene]: (typeof HIKE_STUFF_HYGIENE_NAMES)[keyof typeof HIKE_STUFF_HYGIENE_NAMES];
  [HIKE_TOPIC_NAMES.navigation]: (typeof HIKE_STUFF_NAVIGATION_NAMES)[keyof typeof HIKE_STUFF_NAVIGATION_NAMES];
  [HIKE_TOPIC_NAMES.electronics]: (typeof HIKE_STUFF_ELECTRONICS_NAMES)[keyof typeof HIKE_STUFF_ELECTRONICS_NAMES];
};

export type THikeStuffName<T extends keyof THikeStuffMapper = THikeTopicName> = THikeStuffMapper[T];

export const HIKE_KITCHEN_TYPES = {
  fire: "fire",
  cauldron: "cauldron",
  integrationSystem: "integrationSystem",
} as const;

export type THikeKitchenType = (typeof HIKE_KITCHEN_TYPES)[keyof typeof HIKE_KITCHEN_TYPES];

export const HIKE_BEDROOM_TYPES = {
  tent: "tent",
  awning: "awning",
  hamac: "hamac",
} as const;

export type THikeBedroomType = (typeof HIKE_BEDROOM_TYPES)[keyof typeof HIKE_BEDROOM_TYPES];

export const HIKE_TRAVEL_TYPES = {
  pedestrian: "pedestrian",
  bicycle: "bicycle",
  camp: "camp",
} as const;

export type THikeTravelType = (typeof HIKE_TRAVEL_TYPES)[keyof typeof HIKE_TRAVEL_TYPES];

export const HIKE_SEASON_TYPES = {
  summer: "summer",
  offSeason: "offSeason",
} as const;

export type THikeSeasonType = (typeof HIKE_SEASON_TYPES)[keyof typeof HIKE_SEASON_TYPES];
