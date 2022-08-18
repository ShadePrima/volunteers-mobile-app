import React from "react";
import { View, Text, Dimensions } from "react-native";
import HomeMap from "../../components/HomeMap/HomeMap";
import RouteMap from "../../components/RouteMap";
import UberTypes from "../../components/UberTypes";

const SearchResults = () => {
  return (
    <View style={{ display: "flex", justifyContent: "space-between" }}>
      <View style={{ height: Dimensions.get("window").height - 300 }}>
        <RouteMap />
      </View>
      <View style={{ height: 350 }}>
        <UberTypes />
      </View>
    </View>
  );
};

export default SearchResults;
