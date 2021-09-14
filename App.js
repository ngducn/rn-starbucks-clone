import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "./screens/HomeStack";
import PayScreen from "./screens/PayScreen";
import OrderScreen from "./screens/OrderScreen";
import GiftScreen from "./screens/GiftScreen";
import StoresStack from "./screens/StoresStack";

const Tab = createBottomTabNavigator();
const Theme = {
  dark: true,
  colors: {
    primary: "rgb(10, 132, 255)",
    background: "rgb(27, 27, 27)",
    card: "rgb(18, 18, 18)",
    text: "rgb(229, 229, 231)",
    border: "rgb(39, 39, 41)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Tab.Navigator>
        <Tab.Screen
          name='Home'
          component={HomeStack}
          options={() => ({
            headerShown: false,
          })}
        />
        <Tab.Screen name='Pay' component={PayScreen} />
        <Tab.Screen name='Order' component={OrderScreen} />
        <Tab.Screen name='Gift' component={GiftScreen} />
        <Tab.Screen
          name='Stores'
          component={StoresStack}
          options={() => ({
            headerShown: false,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
