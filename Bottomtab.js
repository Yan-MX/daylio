import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import COLORS from "./styles/colors";
import EntryContainer from "./containers/entryContainer";
import WarningPage from "./screens/Warning";
import { Ionicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
const ICONSIZE = 35;

function MyTabs({ addEntry, ShowOrHideOverlay, isAdding }) {
  function warning() {
    return <WarningPage />;
  }
  function showEntryPage() {
    return <EntryContainer />;
  }

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        inactiveTintColor: COLORS.white,
        activeTintColor: COLORS.primary,
        activeBackgroundColor: COLORS.secondary,
        inactiveBackgroundColor: COLORS.secondary,
        style: {
          height: 60,
        },
        labelStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Entries"
        component={showEntryPage}
        options={{
          tabBarLabel: "Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-text-outline"
              color={color}
              size={ICONSIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={warning}
        options={{
          tabBarLabel: "Stats",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="chart-bar"
              color={color}
              size={ICONSIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={showEntryPage}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <View
              style={{
                position: "absolute",
                bottom: -10, // space from bottombar
                height: 76,
                width: 76,
                borderRadius: 76,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="ios-add-circle"
                size={76}
                color={COLORS.primary}
              />
            </View>
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
            e.preventDefault();
            ShowOrHideOverlay();
          },
        })}
      />
      <Tab.Screen
        name="Calender"
        component={warning}
        options={{
          tabBarLabel: "Calender",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-range-outline"
              color={color}
              size={ICONSIZE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={warning}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="dots-horizontal-circle"
              color={color}
              size={ICONSIZE}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
