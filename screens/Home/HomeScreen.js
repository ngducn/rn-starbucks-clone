import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  SourceSansPro_600SemiBold,
  SourceSansPro_700Bold,
} from "@expo-google-fonts/source-sans-pro";

import Confetti from "../../assets/confetti.png";
import FloatingActionButton from "../../components/FloatingActionButton";
import { NavigationHelpersContext } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    SourceSansPro_600SemiBold,
    SourceSansPro_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View>
      <ScrollView stickyHeaderIndices={[1]}>
        <View style={styles.header}>
          <View style={styles.headerInner}>
            <Text style={styles.headerText}>It's a great day</Text>
            <Text style={styles.headerText}>for coffee ☕</Text>
          </View>
        </View>
        <View style={styles.headerMenu}>
          <Text style={styles.headerMenuText}>Sign In</Text>
          <Text style={styles.headerMenuText}>Inbox</Text>
        </View>
        <View style={styles.sections}>
          <Text>Earning Rewards</Text>
        </View>
        <View style={styles.sections}>
          <Text>Save Time Skip The Line</Text>
        </View>
        <View style={styles.sections}>
          <Text>Gifting is so easy!</Text>
        </View>
        <View style={styles.bottomParty}>
          <Image source={Confetti} />
          <Text style={styles.bottomPartyText}>You're up to date!</Text>
        </View>
      </ScrollView>
      <FloatingActionButton
        title='Join now'
        onPress={() => {
          navigation.navigate("JoinScreen");
        }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(27, 27, 27)",
    paddingTop: 10,
    paddingBottom: 20,
    marginTop: 70,
  },
  headerInner: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  headerText: {
    color: "white",
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "SourceSansPro_600SemiBold",
  },
  headerMenu: {
    backgroundColor: "rgb(27, 27, 27)",
  },
  headerMenuText: {
    color: "white",
  },
  bottomParty: {
    padding: 20,
    alignItems: "center",
    height: 200,
  },
  bottomPartyText: {
    color: "white",
  },
  sections: {
    height: 300,
    backgroundColor: "gray",
  },
});
