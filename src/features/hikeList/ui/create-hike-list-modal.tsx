import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { Tag } from "entities/tags";

import { PRIMARY_COLOR, SECONDARY_COLOR } from "shared/config/colors";
import { THikeBedroomType, THikeKitchenType, THikeSeasonType, THikeTravelType } from "shared/config/types";
import { UIInput } from "shared/ui/components/ui-input";
import { Typography } from "shared/ui/components/ui-typography";
import { Modal } from "shared/ui/modal";

import { useBedroomTopic } from "../lib/hike-topic/use-bedroom-topic";
import { useClothingTopic } from "../lib/hike-topic/use-clothing-topic";
import { useDocumentsTopic } from "../lib/hike-topic/use-documents-topic";
import { useElectronicsTopic } from "../lib/hike-topic/use-electronics-topic";
import { useFirstAidTopic } from "../lib/hike-topic/use-first-aid-topic";
import { useFoodTopic } from "../lib/hike-topic/use-food-topic";
import { useGearTopic } from "../lib/hike-topic/use-gear-topic";
import { useHygieneTopic } from "../lib/hike-topic/use-hygiene-topic";
import { useKitchenTopic } from "../lib/hike-topic/use-kitchen-topic";
import { useNavigationTopic } from "../lib/hike-topic/use-navigation-topic";
import { useOtherTopic } from "../lib/hike-topic/use-other-topic";
import { useHikeList } from "../model/hikeList.store";
import { THikeList } from "../model/types";
import { useModalTranslations } from "../model/use-modal-translations";
import { KindStep } from "./kind-step";
import { StuffStep } from "./stuff-step";

type TCreateHikeListModalProps = {
  closeModal: (data: { hikeListId: string } | null) => void;
};

type TStep = "kind" | "stuff";

export const CreateHikeListModal = ({ closeModal }: TCreateHikeListModalProps) => {
  const { addList } = useHikeList();
  const [listName, setListName] = useState("");
  const [step, setStep] = useState<TStep>("kind");
  const { t } = useModalTranslations();

  const [selectedKitchenType, setSelectedKitchenType] = useState<THikeKitchenType>("cauldron");
  const [selectedTravelType, setSelectedTravelType] = useState<THikeTravelType>("pedestrian");
  const [selectedBedroomType, setSelectedBedroomType] = useState<THikeBedroomType>("awning");
  const [selectedSeasonType, setSelectedSeasonType] = useState<THikeSeasonType>("summer");

  const { getBedroomInitialHikeTopic } = useBedroomTopic();
  const { getKitchenInitialHikeTopic } = useKitchenTopic();
  const { getHygieneInitialHikeTopic } = useHygieneTopic();
  const { getGearInitialHikeTopic } = useGearTopic();
  const { getNavigationInitialHikeTopic } = useNavigationTopic();
  const { getElectronicsInitialHikeTopic } = useElectronicsTopic();
  const { getDocumentsInitialHikeTopic } = useDocumentsTopic();
  const { getOtherInitialHikeTopic } = useOtherTopic();
  const { getClothingInitialHikeTopic } = useClothingTopic();
  const { getFirstAidInitialHikeTopic } = useFirstAidTopic();
  const { getFoodInitialHikeTopic } = useFoodTopic();

  const handleCreateHikeList = () => {
    const listId = (Math.random() + 1).toString(36).substring(7);

    const listTags: THikeList["tags"] = [
      selectedKitchenType,
      selectedBedroomType,
      selectedTravelType,
      selectedSeasonType,
    ];

    const listItems: THikeList["items"] = [
      getBedroomInitialHikeTopic(listTags),
      getKitchenInitialHikeTopic(listTags),
      getHygieneInitialHikeTopic(),
      getGearInitialHikeTopic(),
      getNavigationInitialHikeTopic(),
      getElectronicsInitialHikeTopic(),
      getDocumentsInitialHikeTopic(),
      getOtherInitialHikeTopic(),
      getClothingInitialHikeTopic(listTags),
      getFirstAidInitialHikeTopic(),
      getFoodInitialHikeTopic(),
    ];

    addList({
      id: listId,
      title: listName,
      tags: listTags,
      items: listItems,
      customStuff: {},
      disabledStuffNames: [],
    });

    closeModal({ hikeListId: listId });
  };

  const renderAcceptButton = () => {
    if (step === "kind") {
      return (
        <Pressable
          style={[styles.button, styles.accept, !listName && styles.acceptDisabled]}
          onPress={() => setStep("stuff")}
          disabled={!listName}
        >
          <Typography align="center">{t("next")}</Typography>
        </Pressable>
      );
    }

    return (
      <Pressable style={[styles.button, styles.accept]} onPress={handleCreateHikeList}>
        <Typography align="center">{t("create")}</Typography>
      </Pressable>
    );
  };

  return (
    <Modal>
      <View style={styles.container}>
        <Typography strong align="center">
          {t("new_list")}
        </Typography>
        <UIInput
          value={listName}
          placeholder={t("please_enter_equipment_list_name")}
          onChange={(e) => setListName(e.nativeEvent.text)}
        />

        <View style={styles.content}>
          {
            {
              kind: (
                <KindStep
                  renderTravelOption={(travelType) => (
                    <Pressable key={travelType} style={styles.action} onPress={() => setSelectedTravelType(travelType)}>
                      <Tag tag={travelType} size={60} selected={travelType === selectedTravelType} withText />
                    </Pressable>
                  )}
                  renderSeasonOption={(seasonType) => (
                    <Pressable key={seasonType} style={styles.action} onPress={() => setSelectedSeasonType(seasonType)}>
                      <Tag tag={seasonType} size={60} selected={seasonType === selectedSeasonType} withText />
                    </Pressable>
                  )}
                />
              ),
              stuff: (
                <StuffStep
                  renderBedroomOption={(bedroomType) => (
                    <Pressable
                      key={bedroomType}
                      style={styles.action}
                      onPress={() => setSelectedBedroomType(bedroomType)}
                    >
                      <Tag tag={bedroomType} size={60} selected={bedroomType === selectedBedroomType} withText />
                    </Pressable>
                  )}
                  renderKitchenOption={(kitchenType) => (
                    <Pressable
                      key={kitchenType}
                      style={styles.action}
                      onPress={() => setSelectedKitchenType(kitchenType)}
                    >
                      <Tag tag={kitchenType} size={60} selected={kitchenType === selectedKitchenType} withText />
                    </Pressable>
                  )}
                />
              ),
            }[step]
          }
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={[styles.button, styles.cancel]} onPress={() => closeModal(null)}>
          <Typography align="center">{t("cancel")}</Typography>
        </Pressable>
        {renderAcceptButton()}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  listName: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  content: {
    flexDirection: "column",
    paddingBlock: 10,
    gap: 20,
  },
  container: {
    flexDirection: "column",
    gap: 10,
  },
  action: {
    flexBasis: "33%",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flexDirection: "row",
    marginInline: -10,
    marginBottom: -10,
  },
  button: {
    flex: 1,
    height: 40,
    justifyContent: "center",
  },
  cancel: {
    backgroundColor: SECONDARY_COLOR,
    borderTopEndRadius: 10,
  },
  accept: {
    backgroundColor: PRIMARY_COLOR,
    borderTopStartRadius: 10,
  },
  acceptDisabled: {
    backgroundColor: SECONDARY_COLOR,
  },
});
