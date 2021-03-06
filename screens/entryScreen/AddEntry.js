import React, { useState } from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { globalStyles } from "../../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { Overlay } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import mockupData from "../MockupData";
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

const AddEntry = ({ addEntry }) => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <View style={globalStyles.addEntry}>
        <Text style={styles.text}>Add today´s entry now!</Text>
        <Ionicons
          name="ios-add-circle"
          size={ICONSIZE}
          color={COLORS.white}
          onPress={() => setVisible(true)}
        />
      </View>
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <OverlayAdd addEntry={addEntry} />
      </Overlay>
    </View>
  );
};
export default AddEntry;
