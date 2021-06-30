import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../../styles/colors";

const ICONSIZE = 30;

const Heading = ({ month, ShowNextMonth, ShowLastMonth }) => {
  console.log(month);
  return (
    <View style={styles.container}>
      <AntDesign
        name="leftcircleo"
        size={ICONSIZE}
        color={COLORS.primary}
        onPress={() => ShowLastMonth()}
      />
      <Text style={styles.text}>{month}</Text>
      <AntDesign
        name="rightcircleo"
        size={ICONSIZE}
        color={COLORS.primary}
        onPress={() => ShowNextMonth()}
      />
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
