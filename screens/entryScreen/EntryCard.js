import React from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { globalStyles } from "../../styles/global";
import { Card, ListItem, Button, Avatar } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import COLORS from "../../styles/colors";
const ICONSIZE = 50;

export function getIconColor(mood) {
  let color = COLORS.primary;
  if (mood.includes("angry")) color = COLORS.fourth;
  if (mood.includes("meh")) color = COLORS.third;
  if (mood.includes("sad")) color = COLORS.fifth;
  if (mood.includes("tears") || mood.includes("tongue"))
    color = COLORS.secondary;
  return color;
}

const EntryCard = ({ entryCardData }) => {
  return (
    <ScrollView style={{ marginBottom: 100 }}>
      {entryCardData.map((card, index) => (
        <Card key={index}>
          <Card.Title>{card.date}</Card.Title>
          <Card.Divider />
          {card.moodEntries
            .map((entry, i) => (
              <ListItem key={i} bottomDivider>
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
              </ListItem>
            ))
            .reverse()}
        </Card>
      ))}
    </ScrollView>
  );
};
export default EntryCard;
