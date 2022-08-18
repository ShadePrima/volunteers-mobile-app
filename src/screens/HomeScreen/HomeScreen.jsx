import React from "react";
import styles from "./styles.js";
import { Dimensions, Text, View } from "react-native";
import CovidMessage from "../../components/CovidMessage/CovidMessage";
import HomeMap from "../../components/HomeMap/HomeMap";
import HomeSearch from "../../components/HomeSearch/HomeSearch.jsx";

const HomeScreen = () => {
  return (
    <View>
      <View style={{ height: Dimensions.get("window").height - 350 }}>
        <HomeMap />
      </View>
      <CovidMessage />

      {/* covid message */}
      {/* bottom component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
