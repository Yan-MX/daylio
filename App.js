import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import BottomtabContainer from "./containers/tabContainer";
import { Provider } from "react-redux";

import configureStore from "./store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomtabContainer />
      </NavigationContainer>
    </Provider>
  );
}
