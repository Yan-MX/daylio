import React, { useState, useEffect } from "react";
import EntryCard from "./EntryCard";
import AddEntry from "./AddEntry";
import { StyleSheet, View, Text } from "react-native";
import Heading from "../components/Heading";

const EntryPage = ({ data, addEntry, isAdding, ShowOrHideOverlay }) => {
  return (
    <View>
      <Heading />
      <AddEntry
        addEntry={addEntry}
        isAdding={isAdding}
        ShowOrHideOverlay={ShowOrHideOverlay}
      />
      <EntryCard entryCardData={data} />
    </View>
  );
};
export default EntryPage;
