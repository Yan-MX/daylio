import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "./styles/global";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import WarningPage from "./screens/Warning";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

function warning() {
  return <WarningPage />;
}
const color = {
  primary: "#e91e63",
  secondary: "#ffb8bf",
  white: "#ffffff",
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        inactiveTintColor: color.white,
        activeTintColor: color.primary,
        activeBackgroundColor: color.secondary,
        inactiveBackgroundColor: color.secondary,
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
        component={warning}
        options={{
          tabBarLabel: "Entries",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-text-outline"
              color={color}
              size={35}
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
            <MaterialCommunityIcons name="chart-bar" color={color} size={35} />
          ),
        }}
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
              size={35}
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
              size={35}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
