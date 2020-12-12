import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppStore from "./stores/store";
import { Provider } from "react-redux";
import NavigatorApp from "./Screens/Navigation";

export default function App() {
  return (
    <Provider store={AppStore}>
      <NavigatorApp></NavigatorApp>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // width: "100%",
    alignSelf: "stretch",
    textAlign: "center",
  },
});
