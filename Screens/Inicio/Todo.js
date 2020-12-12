import { Text, TouchableHighlight, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../../stores/slices/todoss";
import { Estados } from "../../constants";

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
  doing: {
    color: "orange",
  },
};

export default function T({ text, id, state }) {
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
            {state === Estados.DOING && (
              <Text style={styles.completed}>En progreso</Text>
            )}
            {state === Estados.CLOSED && (
              <Text style={styles.incompleted}>Cerrada</Text>
            )}
            {state === Estados.TODO && (
              <Text style={styles.doing}>Pendiente</Text>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}
