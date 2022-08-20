import React from "react";
// import * as Location from "expo-location";
import Geolocation from "react-native-geolocation-service";
import { StatusBar } from "expo-status-bar";
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";

import HomeScreen from "./src/screens/HomeScreen/HomeScreen";
import DestinationSearch from "./src/screens/DestinationSearch";
import SearchResults from "./src/screens/SearchResults";

navigator.geolocation = require("react-native-geolocation-service");

export default function App() {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Uber App Camera Permission",
          message:
            "Uber App needs access to your location " +
            "so you can take awesome trip.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  React.useEffect(() => {
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      // IOS
      // Location.getForegroundPermissionsAsync();
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <View>
      {/* <SearchResults /> */}
      <DestinationSearch />
      {/* <HomeScreen /> */}
      <StatusBar style="auto" />
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
