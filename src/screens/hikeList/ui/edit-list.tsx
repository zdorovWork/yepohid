import { ReactNode } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

import { HikeCard, THikeTopic, TStuffItem } from "entities/hikeItem";

import { THikeList, useTopicTranslations } from "features/hikeList";

import { CheckTab, CrossTab, TabBar } from "widgets/tabbar";

import { THikeTopicName } from "shared/config/types";
import { CrossIcon } from "shared/ui/icons/cross-icon";
import { PageLayout } from "shared/ui/page_layout";

type TEditListProps = {
  items: THikeList["items"];

  onSubmit: () => void;
  onCancel: () => void;
  onAddNewStuff: (topicId: THikeTopicName) => void;

  renderStuff: (topicId: THikeTopicName, stuff: TStuffItem) => ReactNode;
  renderProgress: (item: THikeTopic) => ReactNode;
};

export const EditList = ({ onCancel, onSubmit, items, renderProgress, renderStuff, onAddNewStuff }: TEditListProps) => {
  const { t } = useTopicTranslations();

  return (
    <PageLayout
      tabbar={
        <TabBar tabs={[<CrossTab key={"cross"} onPress={onCancel} />, <CheckTab key={"check"} onPress={onSubmit} />]} />
      }
    >
      <ScrollView contentContainerStyle={styles.list}>
        {items.map((hikeItem) => (
          <HikeCard key={hikeItem.id} progress={renderProgress(hikeItem)} title={t(hikeItem.id)}>
            {hikeItem.stuff.map((stuff) => renderStuff(hikeItem.id, stuff))}

            <Pressable style={styles.addNewElement} key={"add"} onPress={() => onAddNewStuff(hikeItem.id)}>
              <CrossIcon rotation={45} />
              <Text>Add new stuff</Text>
            </Pressable>
          </HikeCard>
        ))}
      </ScrollView>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 16,
    padding: 16,
  },
  addNewElement: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
});
