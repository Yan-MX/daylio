import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import OverlayAdd from "../reusable/OverlayAdd";
import COLORS from "../../styles/colors";
const ICONSIZE = 60;

const styles = StyleSheet.create({
  text: {
    color: COLORS.white,
    marginLeft: 35,
    fontSize: 16,
  },
});

const AddEntry = ({ addEntry, isAdding, ShowOrHideOverlay }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    ShowOrHideOverlay();
  };

  return (
    <View>
      <View style={globalStyles.addEntry}>
        <Text style={styles.text}>Add today´s entry now!</Text>
        <Ionicons
          name="ios-add-circle"
          size={ICONSIZE}
          color={COLORS.primary}
          onPress={() => ShowOrHideOverlay()}
        />
      </View>
      <Overlay isVisible={isAdding} onBackdropPress={toggleOverlay}>
        <OverlayAdd addEntry={addEntry} ShowOrHideOverlay={ShowOrHideOverlay} />
      </Overlay>
    </View>
  );
};
export default AddEntry;
