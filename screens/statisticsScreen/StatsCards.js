import { nanoid } from "nanoid/non-secure";
import { Card, ListItem } from "react-native-elements";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Heading from "../components/Heading";
import YearinPixel from "./YearinPixel";
const StatsCards = ({ data, month, ShowNextMonth, ShowLastMonth }) => {
  let randoms = Array.from({ length: 365 }, () =>
    Math.floor(Math.random() * 100)
  );
  return (
    <View>
      <Heading
        month={month}
        ShowLastMonth={ShowLastMonth}
        ShowNextMonth={ShowNextMonth}
      />
      <ScrollView>
        <Card style={styles.cardContainer}>
          <Card.Title>Moods Count</Card.Title>
          <Card.Divider />
        </Card>
        <Card style={styles.cardContainer}>
          <Card.Title>Average Moods</Card.Title>
          <Card.Divider />
        </Card>
        <Card style={styles.cardContainer}>
          <Card.Title>Year In Pixel</Card.Title>
          <Card.Divider />
          <YearinPixel />
        </Card>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
    width: "100%",
  },
  cardContainer: {
    alignSelf: "center",
  },
  text: {
    fontSize: 10,
  },
});
export default StatsCards;
