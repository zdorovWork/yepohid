import { THikeTopic, useDocumentsStuff } from "entities/hikeItem";

export const useDocumentsTopic = () => {
  const { id_card, cash, bank_card, border_permit, waterproof_case } = useDocumentsStuff();

  const getDocumentsInitialHikeTopic = (): THikeTopic<"documents"> => {
    return {
      id: "documents",
      title: "Documents",
      stuff: [id_card, cash, bank_card, border_permit, waterproof_case],
    };
  };

  return {
    getDocumentsInitialHikeTopic,
  };
};
