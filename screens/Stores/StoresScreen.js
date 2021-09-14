import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Button,
} from "react-native";

import data_sb from "../../data/starbucks-hcm.json";

const DATA = [
  {
    title: "All",
    data: data_sb.map((data) => ({
      id: data.store.id,
      coordinates: data.store.coordinates,
      name: data.store.name,
    })),
  },
];

const StoresScreen = ({ navigation }) => {
  const [filter, setFilter] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Button style={styles.filterButton} color='lightgreen' title='Filter' />
        <Text style={styles.inputField}>Find a store</Text>
      </View>

      <MapView style={styles.map}>
        {DATA[0].data.map(({ id, coordinates }) => {
          return (
            <Marker
              key={id}
              coordinate={coordinates}
              pinColor='green'
              onPress={() => navigation.navigate("StoresDetailScreen")}
            />
          );
        })}
      </MapView>

      <View style={styles.list}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <Text style={styles.text}>{item.name}</Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default StoresScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    zIndex: 10,
    flex: 1.5,
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  filterButton: {
    right: 4,
  },
  inputField: {
    borderWidth: 1,
    color: "white",
    borderColor: "red",
    width: "70%",
    alignSelf: "center",
  },
  map: {
    flex: 5,
    width: Dimensions.get("window").width,
  },
  list: {
    flex: 4.5,
  },
  header: {
    color: "white",
    fontWeight: "bold",
  },
  text: {
    color: "white",
  },
});
