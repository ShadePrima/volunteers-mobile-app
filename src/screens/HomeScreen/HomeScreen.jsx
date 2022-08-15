import React from "react";
import styles from "./styles.js";
import { Text, View } from "react-native";
import CovidMessage from "../../components/CovidMessage/CovidMessage";
import HomeMap from "../../components/HomeMap/HomeMap";
import HomeSearch from "../../components/HomeSearch/HomeSearch.jsx";

const HomeScreen = () => {
  return (
    <View>
      <HomeMap />
      <CovidMessage />

      {/* covid message */}
      {/* bottom component */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
