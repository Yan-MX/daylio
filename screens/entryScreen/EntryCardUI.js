import React from "react";
import { ScrollView } from "react-native";
import { nanoid } from "nanoid/non-secure";
import { Card, ListItem } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { getIconColor } from "../reusable/reuseFunction";
import Bottomsheet from "../reusable/BottomSheet";
const ICONSIZE = 50;
import EntryCardLogic from "./EntryCardLogic";

const EntryCardUI = ({ entryCardData, month }) => {
  const [filteredMonthdate, openButtomSheet, visible, setVisible, deleteMood] =
    EntryCardLogic({ entryCardData, month });

  return (
    <ScrollView style={{ marginBottom: 100 }}>
      {filteredMonthdate
        .filter((el) => el.moodEntries.length > 0)
        .map((card) => (
          <Card key={nanoid()}>
            <Card.Title>{card.date}</Card.Title>
            <Card.Divider />
            {card.moodEntries
              .map((entry, i) => (
                <ListItem key={i + entry.mood} bottomDivider>
                  <FontAwesome5
                    name={entry.mood}
                    size={ICONSIZE}
                    color={getIconColor(entry.mood)}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{entry.mood}</ListItem.Title>
                    <ListItem.Subtitle>{entry.label}</ListItem.Subtitle>
                    <ListItem.Subtitle>{entry.note}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron
                    onPress={() => openButtomSheet(card.date, i)}
                  />
                </ListItem>
              ))
              .reverse()}
          </Card>
        ))
        .reverse()}
      <Bottomsheet
        visible={visible}
        setVisible={setVisible}
        deleteMood={deleteMood}
      />
    </ScrollView>
  );
};

export default EntryCardUI;
