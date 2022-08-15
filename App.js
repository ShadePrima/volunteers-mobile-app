import React from "react";
// import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";

export default function App() {
  return (
    <View>
      <HomeScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
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
