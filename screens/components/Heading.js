import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
const ICONSIZE = 30;

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const d = new Date();
//get current month
const getCurrentMonth = monthNames[d.getMonth()] + "  " + d.getFullYear();

const Heading = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="leftcircleo" size={ICONSIZE} color={COLORS.primary} />
      <Text style={styles.text}>{getCurrentMonth}</Text>
      <AntDesign name="rightcircleo" size={ICONSIZE} color={COLORS.primary} />
      {/* <AntDesign name="search1" size={ICONSIZE} color={COLORS.primary} /> */}
    </View>
  );
};
export default Heading;
