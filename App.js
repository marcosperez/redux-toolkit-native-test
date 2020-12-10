import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Contador from "./components/Contador";
import AppStore from "./stores/store";
import { Provider } from "react-redux";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <Provider store={AppStore}>
      <View style={styles.container}>
        <Contador> </Contador>
        <TodoList></TodoList>
      </View>
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
