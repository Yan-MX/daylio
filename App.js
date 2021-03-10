import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./index";
import { Provider } from "react-redux";

import configureStore from "./store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
