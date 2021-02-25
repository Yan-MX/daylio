import React from "react";
import EntryCard from "./EntryCard";
import { StyleSheet, View, Text } from "react-native";
import Heading from "../components/Heading";

const EntryPage = () => {
  return (
    <View>
      <Heading />
      <EntryCard />
    </View>
  );
};
export default EntryPage;
