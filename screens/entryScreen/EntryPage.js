import React, { useState, useEffect } from "react";
import EntryCardUI from "./EntryCardUI";
import EntryCardLogic from "./EntryCardLogic";
import AddEntry from "./AddEntry";
import { StyleSheet, View, Text } from "react-native";
import Heading from "../reusable/Heading";

const EntryPage = ({
  data,
  addEntry,
  month,
  isAdding,
  ShowOrHideOverlay,
  ShowNextMonth,
  ShowLastMonth,
}) => {
  return (
    <View>
      <Heading
        month={month}
        ShowLastMonth={ShowLastMonth}
        ShowNextMonth={ShowNextMonth}
      />
      <AddEntry
        addEntry={addEntry}
        isAdding={isAdding}
        ShowOrHideOverlay={ShowOrHideOverlay}
      />

      <EntryCardUI entryCardData={data} month={month} />
    </View>
  );
};
export default EntryPage;
