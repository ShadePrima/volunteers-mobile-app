import React from "react";
import { ViewContainer, TextInputDestination } from "./styles.js";
import { SafeAreaView, Text, TextInput, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  const [fromText, setFromText] = React.useState("");
  const [destinationText, setDestinationText] = React.useState("");
  return (
    <SafeAreaView>
      <ViewContainer>
        <TextInputDestination
          value={fromText}
          onChangeText={setFromText}
          placeholder="From ..."
        />
        <TextInputDestination
          value={destinationText}
          onChangeText={setDestinationText}
          placeholder="Where to ?"
        />

        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
            language: "en",
          }}
        />
      </ViewContainer>
    </SafeAreaView>
  );
};

export default DestinationSearch;
