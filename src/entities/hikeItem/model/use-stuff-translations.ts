import { THikeTopicName } from "shared/config/types";
import { TLanguage } from "shared/config/types/languages";
import { useI18nModule } from "shared/service/translations/use-18n-module";

import { TStuffItem } from "./types";

type TranslationTree = Record<TStuffItem<THikeTopicName>["id"], Record<TLanguage, string>>;

export const useStuffTranslations = () => {
  return useI18nModule({
    airtight_bag_for_sleep: {
      en: "Airtight bag for sleep",
      ua: "Гермомішок для спальника",
    },
    awning: {
      en: "Awning",
      ua: "Намет",
    },
    bag_compressor: {
      en: "Bag compressor",
      ua: "Компресійник для спальника",
    },
    boots: {
      en: "Boots",
      ua: "Взуття",
    },
    buff: {
      en: "Buff",
      ua: "Мультифункціональна пов'язка",
    },
    camp_bag: {
      en: "Camp bag",
      ua: "camp_bag",
    },
    camp_shoes: {
      en: "Camp shoes",
      ua: "camp_shoes",
    },
    cap_or_hat: {
      en: "Cap or hat",
      ua: "Капелюх або кепка",
    },
    dress: {
      en: "Dress",
      ua: "Платтячко",
    },
    fleece_pants: {
      en: "Fleece pants",
      ua: "Флісові штани",
    },
    fleece_pants_light: {
      en: "Fleece pants (light)",
      ua: "Тонкі флісові штани",
    },
    fleece_sweater: {
      en: "Fleece sweater",
      ua: "Флісова кофта",
    },
    fleece_sweater_light: {
      en: "Fleece sweater (light)",
      ua: "Тонка флісова кофта",
    },
    footprint: {
      en: "Footprint",
      ua: "Футпринт",
    },
    hamac: {
      en: "Hamac",
      ua: "Гамак",
    },
    lightweight_trekking_pants: {
      en: "Lightweight trekking pants",
      ua: "Легкі трекінгові штани",
    },
    lightweight_trekking_socks: {
      en: "Lightweight trekking socks",
      ua: "Легкі трекінгові шкарпетки",
    },
    mat: {
      en: "Sleeping mat",
      ua: "Килимок",
    },
    pillow: {
      en: "Pillow",
      ua: "Подушка",
    },
    pump_for_sleeping_pad: {
      en: "Pump for sleeping pad",
      ua: "Надувачка (помпа) для килимка",
    },
    rain_jacket: {
      en: "Rain jacket",
      ua: "Мембранна куртка",
    },
    repair_kit_for_sleeping_pad: {
      en: "Repair kit for sleeping pad",
      ua: "Крісло для надувного килимка",
    },
    sandals: {
      en: "Sandals",
      ua: "Шльопанці",
    },
    shorts: {
      en: "Shorts",
      ua: "Шорти",
    },
    sleeping_bag: {
      en: "Sleeping bag",
      ua: "Спальник",
    },
    suspension_slings: {
      en: "Suspension slings",
      ua: "suspension_slings",
    },
    tarp_guylines: {
      en: "Tarp guylines",
      ua: "tarp_guylines",
    },
    tarp_stakes: {
      en: "Tarp stakes",
      ua: "tarp_stakes",
    },
    tent: {
      en: "Tent",
      ua: "Намет",
    },
    thermal_pants: {
      en: "Thermal pants",
      ua: "Термоштани",
    },
    thermal_top: {
      en: "Thermal top",
      ua: "Термокофта",
    },
    thin_gloves: {
      en: "Thin gloves",
      ua: "Тонкі рукавиці",
    },
    trekking_pants: {
      en: "Trekking pants",
      ua: "Трекінгові штани",
    },
    trekking_shirt: {
      en: "Trekking shirt",
      ua: "Трекінгова сорочка/футболка",
    },
    trekking_socks: {
      en: "Trekking socks",
      ua: "Трекінгові шкарпетки",
    },
    underquilt: {
      en: "Underquilt",
      ua: "underquilt",
    },
    underwear: {
      en: "Underwear",
      ua: "Спідня білизна",
    },
    warm_buff: {
      en: "Warm buff",
      ua: "Тепла мультифункціональна пов'язка",
    },
    warm_hat: {
      en: "Warm hat",
      ua: "Шапка",
    },
    warm_layer: {
      en: "Warm layer",
      ua: "Тепла кофта або пуховий светр",
    },
    waterproof_pants: {
      en: "Waterproof pants",
      ua: "Мембранні штани",
    },
    windbreaker: {
      en: "Windbreaker",
      ua: "Вітрівка",
    },
    id_card: {
      en: "ID card / Passport",
      ua: "Посвідчення особи",
    },
    cash: {
      en: "Cash",
      ua: "Готівкові кошти",
    },
    bank_card: {
      en: "Bank card",
      ua: "Банківська картка",
    },
    border_permit: {
      en: "Border permit",
      ua: "Дозвіл від прикордонників",
    },
    waterproof_case: {
      en: "Waterproof case",
      ua: "Водонепроникний чохол",
    },
    mobile_phone: {
      en: "Mobile phone",
      ua: "Мобільний телефон",
    },
    camera: {
      en: "Camera",
      ua: "Фотоапарат",
    },
    charging_cables: {
      en: "Charging cables",
      ua: "Шнури для зарядки електроніки",
    },
    camera_batteries: {
      en: "Camera batteries",
      ua: "Акумулятори для фотоапарату",
    },
    memory_cards: {
      en: "Memory cards",
      ua: "Карти пам'яті",
    },
    power_banks: {
      en: "Power sources (power banks)",
      ua: "Джерела енергії (пауербанки)",
    },
    electronics_dry_bag: {
      en: "Dry bag for electronics",
      ua: "Гермомішок для електроніки",
    },
    antiseptic: {
      en: "Antiseptic",
      ua: "Знезаражувальне",
    },
    tea: {
      en: "Tea",
      ua: "Чай",
    },
    spices: {
      en: "Spices",
      ua: "Спеції",
    },
    salt: {
      en: "Salt",
      ua: "Сіль",
    },
    fire_source: {
      en: "Fire source",
      ua: "Джерело вогню",
    },
    backup_fire_source: {
      en: "Backup fire source in waterproof packaging",
      ua: "Резервне джерело вогню в герметичній упаковці",
    },
    spoon: {
      en: "Spoon",
      ua: "Ложка",
    },
    plate: {
      en: "Plate",
      ua: "Тарілка",
    },
    mug: {
      en: "Mug",
      ua: "Горнятко",
    },
    knife: {
      en: "Knife",
      ua: "Ніж",
    },
    water_container: {
      en: "Water container",
      ua: "Ємності для води",
    },
    water_filter: {
      en: "Water filter",
      ua: "Фільтр для води",
    },
    sponge_for_dishes: {
      en: "Губка для миття посуду",
      ua: "Губка для миття посуду",
    },
    eco_dish_soap: {
      en: "Eco dish soap",
      ua: "Еко-засіб для миття посуду",
    },
    sit_pad: {
      en: "Sit pad",
      ua: "Сідачка",
    },
    source_for_stove: {
      en: "Source for stove",
      ua: "Паливо для пальника",
    },
    stove: {
      en: "Stove",
      ua: "Пальник",
    },
    sunglasses: {
      en: "Sunglasses",
      ua: "Сонцезахисні окуляри",
    },
    sunscreen: {
      en: "Sunscreen",
      ua: "Сонцезахисний крем",
    },
    sunscreen_lip_balm: {
      en: "Sunscreen lip balm",
      ua: "Сонцезахисна помада",
    },
    integration_system: {
      en: "Integration system",
      ua: "Інтеграційна система",
    },
    tripod_stand: {
      en: "Tripod stand",
      ua: "Тринога",
    },
    mini_scissors: {
      en: "Mini scissors",
      ua: "Міні-ножиці",
    },
    eco_soap: {
      en: "Eco soap",
      ua: "Еко-мило",
    },
    cauldron: {
      en: "Cauldron",
      ua: "Казанок",
    },
    compass: {
      en: "Compass",
      ua: "Компас",
    },
    inflatable_pad_chair: {
      en: "Inflatable pad chair",
      ua: "Крісло для надувного килимка",
    },
    rain_cover: {
      en: "Rain cover",
      ua: "Рейнкавер на рюкзак",
    },
    gas_can: {
      en: "Gas can",
      ua: "gas_can",
    },
    toilet_paper: {
      en: "Toilet paper",
      ua: "Туалетний папір",
    },
    repair_kit: {
      en: "Repair kit",
      ua: "Ремнабір",
    },
    route_maps: {
      en: "Download route maps",
      ua: "Завантажити карти маршруту",
    },
    route_tracks: {
      en: "Download route tracks",
      ua: "Завантажити треки маршруту",
    },
    toilet_trowel: {
      en: "Toilet trowel",
      ua: "Лопатка для туалету",
    },
    toiletry_bag: {
      en: "Toiletry bag",
      ua: "Косметичка",
    },
    tooth_brush: {
      en: "Toothbrush",
      ua: "Зубна щітка",
    },
    tooth_paste: {
      en: "Tooth paste",
      ua: "Зубна паста",
    },
    trash_bag: {
      en: "Trash bag",
      ua: "Пакет для сміття",
    },
    trekking_poles: {
      en: "Trekking poles",
      ua: "Трекінгові палиці",
    },
    microfiber_towel: {
      en: "Microfiber towel",
      ua: "Рушник з мікрофібри",
    },
    navigation_app: {
      en: "Navigation app",
      ua: "Навігаційна програма для телефону",
    },
    dental_floss: {
      en: "Dental floss",
      ua: "Зубна нитка",
    },
    dry_bags: {
      en: "Dry bags",
      ua: "Гермомішки для одягу і речей",
    },
    backup_navigation_device: {
      en: "Backup navigation device",
      ua: "Резервний навігаційний пристрій (навігатор/годинник)",
    },
    mini_hammock: {
      en: "Mini hammock",
      ua: "Міні-гамак",
    },
    mirror: {
      en: "Mirror",
      ua: "Люстерко",
    },
    moisturizer: {
      en: "Moisturizer",
      ua: "Зволожуючий крем",
    },
    mosquito_net: {
      en: "Mosquito net",
      ua: "Москітна сітка",
    },
    laminated_map: {
      en: "Laminated map",
      ua: "Ламінована карта",
    },
    backpack: {
      en: "Backpack",
      ua: "Рюкзак",
    },
    flashlight_battery: {
      en: "Flashlight battery",
      ua: "Запасне джерело енергії для ліхтарика",
    },
    flashlight: {
      en: "Flashlight",
      ua: "Ліхтарик",
    },
  } satisfies TranslationTree);
};
