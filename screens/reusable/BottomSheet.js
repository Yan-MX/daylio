import React from "react";
import { StyleSheet } from "react-native";
import { ListItem, BottomSheet } from "react-native-elements";
const Bottomsheet = ({ visible, setVisible, deleteMood }) => {
  return (
    <BottomSheet
      isVisible={visible}
      onBackdropPress={() => setVisible(false)}
      containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
    >
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title style={styles.text}>Edit</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => deleteMood()}>
        <ListItem.Content>
          <ListItem.Title style={styles.text}>Delete</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <ListItem bottomDivider onPress={() => setVisible(false)}>
        <ListItem.Content>
          <ListItem.Title style={styles.text}>Cancel</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </BottomSheet>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    alignSelf: "center",
  },
});

export default Bottomsheet;
