import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, inscrement } from "../slices/contador";
import { Increment, Decrement } from "../stores/actions";

export default function Contador() {
  // const [count, setCount] = useState(0);
  const counter = useSelector((state) => state.contador);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View>
        <Text>Contador de todos:</Text>
      </View>
      <View>
        <Text>{counter}</Text>
      </View>
      {/* <View style={{ flexDirection: "row", width: "80%", marginTop: 15 }}>
        <View style={{ flex: 0.5 }}>
          <Button
            title="-"
            color="#841584"
            onPress={() => dispatch(decrement())}
          ></Button>
        </View>

        <View style={{ flex: 0.5 }}>
          <Button
            title="+"
            color="#127745"
            onPress={() => dispatch(inscrement())}
          ></Button>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});
