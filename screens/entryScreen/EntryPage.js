import React from "react";
import EntryCard from "./EntryCard";
import AddEntry from "./AddEntry";
import { StyleSheet, View, Text } from "react-native";
import Heading from "../components/Heading";

const EntryPage = () => {
  return (
    <View>
      <Heading />
      <AddEntry />
      <EntryCard />
    </View>
  );
};
export default EntryPage;
