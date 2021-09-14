import React from "react";
import { View, Text, Button } from "react-native";

import HomeScreen from "./Home/HomeScreen";
import JoinScreen from "./Home/JoinScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='JoinScreen'
        component={JoinScreen}
        options={{ presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
