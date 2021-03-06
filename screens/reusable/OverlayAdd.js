import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Dimensions } from "react-native";
import COLORS from "../../styles/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { getIconColor } from "../entryScreen/EntryCard";
import { AntDesign } from "@expo/vector-icons";
import { globalStyles } from "../../styles/global";
import { Input } from "react-native-elements";

const OverlayAdd = ({ addEntry }) => {
  const [mood, setMood] = useState("");
  const [entry, setEntry] = useState("");
  const d = new Date();
  const date = d.toDateString();
  const ICONSIZE = 60;
  return (
    <View style={styles.containter}>
      <Text style={styles.text}>How are you? </Text>
      <Text style={styles.modalText}>{date}</Text>
      <View style={globalStyles.flexrow}>
        {moods.map((mood, i) => (
          <FontAwesome5
            key={i}
            name={mood}
            size={ICONSIZE}
            color={getIconColor(mood)}
            onPress={() => {
              setMood(mood);
            }}
          />
        ))}
      </View>
      <Input placeholder="Label" />
      <Input placeholder="Note" />
      <AntDesign
        name="checkcircle"
        size={24}
        color="black"
        onPress={() =>
          addEntry({
            mood: mood,
            timestamp: "00:00",
            label: [],
            note: "",
          })
        }
      />
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
