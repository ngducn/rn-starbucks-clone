import React from "react";

import StoresScreen from "./Stores/StoresScreen";
import StoresDetailScreen from "./Stores/StoresDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const StoresStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='StoresScreen'
        component={StoresScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='StoresDetailScreen'
        component={StoresDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StoresStack;
