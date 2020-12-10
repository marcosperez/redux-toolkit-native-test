import { Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../slices/todoss";

const styles = {
  container: {},
  item: {
    // width: "100%",
    textAlign: "left",
  },
  column: {
    marginTop: 15,
    paddingHorizontal: "8%",
  },
  completed: {
    color: "green",
  },
  incompleted: {
    color: "red",
  },
};

export default function T({ text, id, completed }) {
  const dispatch = useDispatch();
  return (
    <View style={{ ...styles.container, marginTop: 8 }}>
      <TouchableHighlight
        style={styles.item}
        onPress={() => dispatch(toggleTodo(id))}
      >
        <View
          style={{ flex: 1, paddingHorizontal: "8%", flexDirection: "row" }}
        >
          <View style={{ flex: 2 }}>
            <Text style={styles.title}>
              {id} - {text}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            {completed ? (
              <Text style={styles.completed}>Completada</Text>
            ) : (
              <Text style={styles.incompleted}>Incompleta</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
