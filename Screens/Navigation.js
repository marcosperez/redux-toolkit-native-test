import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import InicioScreen from "./Inicio";
import ArbolScreen from "./Arbol";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function NavigatorApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Estadisticas"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "Inicio":
                iconName = focused
                  ? "ios-information-circle"
                  : "ios-information-circle-outline";
                break;

              case "Estadisticas":
                iconName = focused ? "ios-analytics" : "ios-analytics-outline";
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Inicio" component={InicioScreen} />
        <Tab.Screen name="Estadisticas" component={ArbolScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
