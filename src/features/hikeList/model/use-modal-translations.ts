import { useI18nModule } from "shared/service/translations/use-18n-module";

export const useModalTranslations = () => {
  const { t } = useI18nModule({
    next: {
      ua: "Далі",
      en: "Next",
    },
    cancel: {
      ua: "Скасувати",
      en: "Cancel",
    },
    create: {
      ua: "Створити",
      en: "Create",
    },
    new_list: {
      ua: "Новий список",
      en: "New list",
    },
    please_enter_equipment_list_name: {
      ua: "Будь ласка, введіть назву списку",
      en: "Please enter equipment list name",
    },
    travel_kind: {
      ua: "Обери тип мандрівки:",
      en: "Travel kind:",
    },
    season: {
      ua: "Обери сезон мандрівки:",
      en: "Season:",
    },
    bedroom: {
      ua: "Як організуємо ночівлю?",
      en: "Bedroom:",
    },
    kitchen: {
      ua: "На чому будемо готувати?",
      en: "Kitchen:",
    },
  });

  return { t };
};
