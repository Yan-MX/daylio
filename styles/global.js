import { StyleSheet } from "react-native";
import COLORS from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  addEntry: {
    backgroundColor: COLORS.primary,
    color: COLORS.primary,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  flexrow: {
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
});
