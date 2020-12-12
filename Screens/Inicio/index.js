import * as React from "react";
import { StyleSheet, View } from "react-native";
import Contador from "./Contador";
import Filtro from "./Filtro";
import TodoList from "./TodoList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "stretch",
    textAlign: "center",
  },
});

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Contador> </Contador>
      <Filtro></Filtro>
      <TodoList></TodoList>
    </View>
  );
}
