import { useI18nModule } from "shared/service/translations/use-18n-module";

export const useTabbarTranslations = () =>
  useI18nModule({
    home: {
      en: "Home",
      ua: "Головна",
    },
    selected: {
      hide: {
        en: "Show selected",
        ua: "Показати вибрані",
      },
      show: {
        en: "Hide selected",
        ua: "Приховати вибрані",
      },
    },
    edit: {
      en: "Edit",
      ua: "Редагувати",
    },
    addNew: {
      en: "Add new",
      ua: "Додати новий",
    },
    cancel: {
      en: "Cancel",
      ua: "Скасувати",
    },
    save: {
      en: "Save",
      ua: "Зберегти",
    },
  });
