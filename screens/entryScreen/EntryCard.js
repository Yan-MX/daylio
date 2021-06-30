import React, { useState } from "react";
import { ScrollView } from "react-native";
import { nanoid } from "nanoid/non-secure";
import { Card, ListItem } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { getIconColor } from "../reusable/reuseFunction";
import Bottomsheet from "../reusable/BottomSheet";
const ICONSIZE = 50;

const EntryCard = ({ entryCardData, month }) => {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  let newEntrydata = [];
  let filteredMonthdate = [];
  const openButtomSheet = (thedate, i) => {
    setVisible(true);
    setDate(thedate);
    setMood(i);
  };
  const deleteMood = () => {
    let a = newEntrydata.find((el) => el.date == date);
    a.moodEntries.splice(mood, 1);
    setVisible(false);
  };
  //clean and reorg data
  const dataReorg = () => {
    for (let entry of entryCardData) {
      let check = false;
      if (entryCardData.length > 0) {
        for (let item of newEntrydata) {
          if (entry.date == item.date) {
            for (let mood of entry.moodEntries) {
              item.moodEntries.push(mood);
            }
            const index = entryCardData.indexOf(entry);
            if (index > -1) {
              entryCardData.splice(index, 1);
            }
            check = true;
          }
        }
      }

      check ? "" : newEntrydata.push(entry);
    }
  };
  const filterMonth = () => {
    filteredMonthdate = newEntrydata.filter(
      (el) => el.date.split(" ")[2] == month
    );
  };

  dataReorg();
  filterMonth();
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

export default EntryCard;
