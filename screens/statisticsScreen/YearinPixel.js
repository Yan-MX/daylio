import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import HeatMap from "react-native-heatmap-chart";
import COLORS from "../../styles/colors";
const YearinPixel = ({ data, month, ShowNextMonth, ShowLastMonth }) => {
  let randoms = Array.from({ length: 365 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
      </Text>
      <HeatMap
        values={randoms}
        numberOfLines={31}
        colorsPercentage={[0, 19, 39, 59, 79]}
        colors={[
          COLORS.fifth,
          COLORS.fourth,
          COLORS.third,
          COLORS.secondary,
          COLORS.primary,
        ]}
        blocksSize={22}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
  container: {
    alignSelf: "center",
    paddingBottom: 100,
  },
});
export default YearinPixel;
