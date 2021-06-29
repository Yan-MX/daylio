import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import COLORS from "../../styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { getIconColor } from "../entryScreen/EntryCard";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { Input } from "react-native-elements"; // This will lead to this error due to React native web bug https://stackoverflow.com/questions/66424449/react-does-not-recognize-the-enterkeyhint-prop-on-a-dom-element
import { monthNames, weekday } from "../components/Constant";

const OverlayAdd = ({ addEntry, ShowOrHideOverlay }) => {
  const [mood, setMood] = useState("");
  const [note, setNote] = useState("");
  const [label, setLabel] = useState("");
  const d = new Date();
  const date = d.toDateString();
  const ICONSIZE = 60;

  const handleSubmitNewEntry = () => {
    //need check if mood is added ....

    //get current date
    const d = new Date();
    const getCurrentdate =
      weekday[d.getDay()] + " " + d.getDate() + " " + monthNames[d.getMonth()];
    addEntry({
      date: getCurrentdate,
      moodEntries: [
        {
          mood: mood,
          timestamp: "00:00",
          label: label,
          note: note,
        },
      ],
    });
    ShowOrHideOverlay();
  };
  return (
    <View>
      <Ionicons
        name="arrow-back-circle"
        size={ICONSIZE}
        color={COLORS.primary}
        onPress={() => ShowOrHideOverlay()}
      />
      <View style={styles.containter}>
        <Text style={styles.text}>How are you? </Text>
        <Text style={styles.modalText}>{date}</Text>
        <View style={globalStyles.flexrow}>
          {moods.map((moodOption, i) => (
            <FontAwesome5
              key={i}
              name={moodOption}
              size={ICONSIZE}
              color={getIconColor(moodOption)}
              onPress={() => {
                setMood(moodOption);
              }}
            />
          ))}
        </View>

        <Input placeholder="Label" onChangeText={(value) => setLabel(value)} />
        <Input placeholder="Note" onChangeText={(value) => setNote(value)} />
        <AntDesign
          name="checkcircle"
          size={ICONSIZE}
          color={COLORS.primary}
          onPress={handleSubmitNewEntry}
        />
      </View>
    </View>
  );
};
const moods = [
  "grin-beam",
  "grin-tongue-squint",
  "meh-blank",
  "angry",
  "sad-cry",
];
const width = Dimensions.get("window").width * 0.9; //full width
var height = Dimensions.get("window").height * 0.7; //full height*.7

const styles = StyleSheet.create({
  containter: {
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 50,
  },
  text: {
    marginBottom: 15,
    fontSize: 30,
    color: COLORS.primary,
    fontWeight: "bold",
  },

  modalText: {
    marginBottom: 25,
    fontSize: 20,
  },
});

export default OverlayAdd;
