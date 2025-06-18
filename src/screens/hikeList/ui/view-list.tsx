import { ReactNode, useState } from "react";
import { StyleSheet } from "react-native";

import { FlashList } from "@shopify/flash-list";

import { HikeCard, THikeTopic, TStuffItem } from "entities/hikeItem";

import { THikeList } from "features/hikeList";

import { EditTab, HideSelectedTab, HomeTab, TabBar } from "widgets/tabbar";

import { THikeStuffName } from "shared/config/types";
import { PageLayout } from "shared/ui/page_layout";

type TViewListProps = {
  items: THikeList["items"];
  selectedIds: THikeStuffName[];
  disabledIds: THikeStuffName[];

  handleEdit: () => void;
  renderStuff: (stuff: TStuffItem) => ReactNode;
  renderProgress: (item: THikeTopic) => ReactNode;
};

export const ViewList = ({
  handleEdit,
  items,
  selectedIds,
  disabledIds,
  renderProgress,
  renderStuff,
}: TViewListProps) => {
  const [isHidingSelected, setIsHidingSelected] = useState(false);

  const isVisible = (stuff: TStuffItem) => {
    const checked = !!selectedIds?.includes(stuff.id);
    const enabled = !disabledIds?.includes(stuff.id);

    const isHidden = (isHidingSelected && checked) || !enabled;

    return !isHidden;
  };

  return (
    <PageLayout
      tabbar={
        <TabBar
          tabs={[
            <HomeTab key={"home"} />,
            <HideSelectedTab key={"hide"} onPress={() => setIsHidingSelected((prev) => !prev)} />,
            <EditTab key={"edit"} onPress={handleEdit} />,
          ]}
        />
      }
    >
      <FlashList
        contentContainerStyle={styles.list}
        data={items}
        renderItem={({ item }) => (
          <HikeCard progress={renderProgress(item)} title={item.title} style={styles.card}>
            {item.stuff.filter(isVisible).map((stuff) => renderStuff(stuff))}
          </HikeCard>
        )}
        estimatedItemSize={500}
      />
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  progress: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#75a93a",
  },
  addNewElement: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
  },
});
