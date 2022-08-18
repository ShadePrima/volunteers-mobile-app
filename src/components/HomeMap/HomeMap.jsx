import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { Image, Text, View } from "react-native";

const HomeMap = () => {
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
        <Marker
          coordinate={{
            latitude: 47.760347,
            longitude: 35.138781,
          }}
        >
          <Image
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
            }}
            source={require("../../assets/images/top-UberX.png")}
          />
        </Marker>
      </MapView>
    </View>
  );
};

export default HomeMap;
