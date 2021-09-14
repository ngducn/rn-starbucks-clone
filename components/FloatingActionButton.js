import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";
import { useFonts } from "expo-font";

const FloatingActionButton = ({ title, onPress }) => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });
  return (
    <TouchableOpacity style={styles.fab} onPress={onPress}>
      {<Text style={styles.fabText}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: "rgb(3, 136, 70)",
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 40,
  },
  fabText: {
    color: "white",
    fontFamily: "SourceSansPro_600SemiBold",
    fontSize: 18,
  },
});
