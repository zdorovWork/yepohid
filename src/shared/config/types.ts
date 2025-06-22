export const HIKE_TOPIC_NAMES = {
  bedroom: "bedroom",
  kitchen: "kitchen",
  hygiene: "hygiene",
  gear: "gear",
  navigation: "navigation",
  electronics: "electronics",
  documents: "documents",
  other: "other",
  clothing: "clothing",
  first_aid: "first_aid",
  food: "food",
} as const;

export type THikeTopicName = (typeof HIKE_TOPIC_NAMES)[keyof typeof HIKE_TOPIC_NAMES];

export const HIKE_STUFF_BEDROOM_NAMES = {
  tent: "tent",
  awning: "awning",
  tarp_guylines: "tarp_guylines",
  tarp_stakes: "tarp_stakes",
  camp_bag: "camp_bag",
  footprint: "footprint",
  sleeping_bag: "sleeping_bag",
  bag_compressor: "bag_compressor",
  airtight_bag_for_sleep: "airtight_bag_for_sleep",
  mat: "mat",
  pump_for_sleeping_pad: "pump_for_sleeping_pad",
  repair_kit_for_sleeping_pad: "repair_kit_for_sleeping_pad",
  pillow: "pillow",
  hamac: "hamac",
  underquilt: "underquilt",
  suspension_slings: "suspension_slings",
} as const;

export const HIKE_STUFF_KITCHEN_NAMES = {
  fire_source: "fire_source",
  backup_fire_source: "backup_fire_source",
  spoon: "spoon",
  plate: "plate",
  mug: "mug",
  knife: "knife",
  water_container: "water_container",
  water_filter: "water_filter",
  sponge_for_dishes: "sponge_for_dishes",
  eco_dish_soap: "eco_dish_soap",
  stove: "stove",
  source_for_stove: "source_for_stove",
  cauldron: "cauldron",
  tripod_stand: "tripod_stand",
  integration_system: "integration_system",
  gas_can: "gas_can",
} as const;

export const HIKE_STUFF_HYGIENE_NAMES = {
  toiletry_bag: "toiletry_bag",
  microfiber_towel: "microfiber_towel",
  sunscreen_lip_balm: "sunscreen_lip_balm",
  sunscreen: "sunscreen",
  moisturizer: "moisturizer",
  tooth_paste: "tooth_paste",
  tooth_brush: "tooth_brush",
  dental_floss: "dental_floss",
  toilet_trowel: "toilet_trowel",
  toilet_paper: "toilet_paper",
  eco_soap: "eco_soap",
  mini_scissors: "mini_scissors",
  mirror: "mirror",
} as const;

export const HIKE_STUFF_GEAR_NAMES = {
  backpack: "backpack",
  rain_cover: "rain_cover",
  trekking_poles: "trekking_poles",
  flashlight: "flashlight",
  flashlight_battery: "flashlight_battery",
  dry_bags: "dry_bags",
  sunglasses: "sunglasses",
  mosquito_net: "mosquito_net",
} as const;

export const HIKE_STUFF_NAVIGATION_NAMES = {
  navigation_app: "navigation_app",
  route_tracks: "route_tracks",
  route_maps: "route_maps",
  backup_navigation_device: "backup_navigation_device",
  laminated_map: "laminated_map",
  compass: "compass",
} as const;

export const HIKE_STUFF_ELECTRONICS_NAMES = {
  mobile_phone: "mobile_phone",
  power_banks: "power_banks",
  charging_cables: "charging_cables",
  electronics_dry_bag: "electronics_dry_bag",
  camera: "camera",
  memory_cards: "memory_cards",
  camera_batteries: "camera_batteries",
} as const;

export const HIKE_STUFF_DOCUMENTS_NAMES = {
  id_card: "id_card",
  cash: "cash",
  bank_card: "bank_card",
  border_permit: "border_permit",
  waterproof_case: "waterproof_case",
} as const;

export const HIKE_STUFF_OTHER_NAMES = {
  repair_kit: "repair_kit",
  trash_bag: "trash_bag",
  sit_pad: "sit_pad",
  inflatable_pad_chair: "inflatable_pad_chair",
  mini_hammock: "mini_hammock",
} as const;

export const HIKE_STUFF_CLOTHING_NAMES = {
  underwear: "underwear",
  trekking_socks: "trekking_socks",
  lightweight_trekking_socks: "lightweight_trekking_socks",
  trekking_shirt: "trekking_shirt",
  lightweight_trekking_pants: "lightweight_trekking_pants",
  trekking_pants: "trekking_pants",
  shorts: "shorts",
  fleece_sweater_light: "fleece_sweater_light",
  fleece_sweater: "fleece_sweater",
  fleece_pants_light: "fleece_pants_light",
  fleece_pants: "fleece_pants",
  warm_layer: "warm_layer",
  windbreaker: "windbreaker",
  rain_jacket: "rain_jacket",
  buff: "buff",
  cap_or_hat: "cap_or_hat",
  warm_hat: "warm_hat",
  thin_gloves: "thin_gloves",
  dress: "dress",
  boots: "boots",
  sandals: "sandals",
  camp_shoes: "camp_shoes",
  thermal_top: "thermal_top",
  thermal_pants: "thermal_pants",
  waterproof_pants: "waterproof_pants",
  warm_buff: "warm_buff",
} as const;

export const HIKE_STUFF_FIRST_AID_NAMES = {
  antiseptic: "antiseptic",
} as const;

export const HIKE_STUFF_FOOD_NAMES = {
  tea: "tea",
  spices: "spices",
  salt: "salt",
} as const;

type THikeStuffMapper = {
  [HIKE_TOPIC_NAMES.bedroom]: (typeof HIKE_STUFF_BEDROOM_NAMES)[keyof typeof HIKE_STUFF_BEDROOM_NAMES];
  [HIKE_TOPIC_NAMES.kitchen]: (typeof HIKE_STUFF_KITCHEN_NAMES)[keyof typeof HIKE_STUFF_KITCHEN_NAMES];
  [HIKE_TOPIC_NAMES.hygiene]: (typeof HIKE_STUFF_HYGIENE_NAMES)[keyof typeof HIKE_STUFF_HYGIENE_NAMES];
  [HIKE_TOPIC_NAMES.gear]: (typeof HIKE_STUFF_GEAR_NAMES)[keyof typeof HIKE_STUFF_GEAR_NAMES];
  [HIKE_TOPIC_NAMES.navigation]: (typeof HIKE_STUFF_NAVIGATION_NAMES)[keyof typeof HIKE_STUFF_NAVIGATION_NAMES];
  [HIKE_TOPIC_NAMES.electronics]: (typeof HIKE_STUFF_ELECTRONICS_NAMES)[keyof typeof HIKE_STUFF_ELECTRONICS_NAMES];
  [HIKE_TOPIC_NAMES.documents]: (typeof HIKE_STUFF_DOCUMENTS_NAMES)[keyof typeof HIKE_STUFF_DOCUMENTS_NAMES];
  [HIKE_TOPIC_NAMES.other]: (typeof HIKE_STUFF_OTHER_NAMES)[keyof typeof HIKE_STUFF_OTHER_NAMES];
  [HIKE_TOPIC_NAMES.clothing]: (typeof HIKE_STUFF_CLOTHING_NAMES)[keyof typeof HIKE_STUFF_CLOTHING_NAMES];
  [HIKE_TOPIC_NAMES.first_aid]: (typeof HIKE_STUFF_FIRST_AID_NAMES)[keyof typeof HIKE_STUFF_FIRST_AID_NAMES];
  [HIKE_TOPIC_NAMES.food]: (typeof HIKE_STUFF_FOOD_NAMES)[keyof typeof HIKE_STUFF_FOOD_NAMES];
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
