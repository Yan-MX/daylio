import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../styles/colors";
import { monthNames } from "./Constant";
const ICONSIZE = 30;

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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 20,
  },
  text: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
export default Heading;
