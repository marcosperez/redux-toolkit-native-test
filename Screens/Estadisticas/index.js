import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

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

export default function EstadisticasScreen() {
  return (
    <View style={styles.container}>
      <Text>Estadisticas...</Text>
    </View>
  );
}
