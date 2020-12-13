import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components/native";
import { inscrement } from "../../stores/slices/contador";
import { addTodo } from "../../stores/slices/todoss";
import Todo from "./Todo";
import { createSelector } from "@reduxjs/toolkit";
import { Estados } from "../../constants";

const ButtonText = styled.Text`
  font-size: 15px;
  text-align: center;
`;

export default function TodoList() {
  //
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const add = () => {
    dispatch(addTodo({ text: value }));
    dispatch(inscrement());
    setValue("");
  };
  const selectTodos = (state) => state.todoss;
  const selectFilter = (state) => state.filtro;
  const todosFiltrados = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
      switch (filter.filtro) {
        case Estados.ALL:
          return todos;
          break;
        case Estados.TODO:
          return todos.filter((t) => t.state === Estados.TODO);
          break;
        case Estados.DOING:
          return todos.filter((t) => t.state === Estados.DOING);
          break;
        case Estados.CLOSED:
          return todos.filter((t) => t.state === Estados.CLOSED);
          break;
      }
    }
  );
  const todos = useSelector(todosFiltrados);

  return (
    <View style={styles.container}>
      <View>
        <Text>TODO LIST</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          <TextInput
            style={{ flex: 1, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => setValue(text)}
            value={value}
          />
        </Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Button title="Agregar" onPress={() => value !== "" && add()}></Button>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <Todo text={item.text} id={item.id} state={item.state} />
        )}
        keyExtractor={(item) => item.id.toString()}
        style={{ width: "100%" }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});
