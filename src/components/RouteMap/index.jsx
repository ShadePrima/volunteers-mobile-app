import React from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { FlatList, Image, Text, View } from "react-native";
import cars from "../../assets/data/cars";

const GOOGLE_MAPS_APIKEY = "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo";

const RouteMap = () => {
  const origin = {
    latitude: 47.754751,
    longitude: 35.140652,
  };

  const destination = {
    latitude: 47.839702,
    longitude: 35.13085,
  };
  return (
    <View>
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 47.754751,
          longitude: 35.140652,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="#1a597a"
        />
        <Marker coordinate={origin} title={"Origin"} />
        <Marker coordinate={destination} title={"Destination"} />
      </MapView>
    </View>
  );
};

export default RouteMap;
