import { TStuffItem } from "../types";

export const useDocumentsStuff = (): Record<TStuffItem<"documents">["id"], TStuffItem<"documents">> => {
  return {
    id_card: {
      id: "id_card",
      title: "ID card / Passport",
    },
    cash: {
      id: "cash",
      title: "Cash",
    },
    bank_card: {
      id: "bank_card",
      title: "Bank card",
    },
    border_permit: {
      id: "border_permit",
      title: "Border permit",
    },
    waterproof_case: {
      id: "waterproof_case",
      title: "Waterproof case",
    },
  };
};
