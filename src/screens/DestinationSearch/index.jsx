import React from "react";
import { ViewContainer, TextInputDestination } from "./styles.js";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = React.useState(null);
  const [destinationPlace, setDestinationPlace] = React.useState(null);

  React.useEffect(() => {
    if (originPlace && destinationPlace) {
      console.warn("Redirect to result");
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <ViewContainer>
        <GooglePlacesAutocomplete
          placeholder="Where from ?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.googleInput,
          }}
          fetchDetails
          query={{
            key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
            language: "en",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to ?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          styles={{
            textInput: styles.googleInput,
          }}
          fetchDetails
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

const styles = StyleSheet.create({
  googleInput: {
    padding: 10,
    backgroundColor: "#d7d8d8",
    marginTop: 5,
    borderRadius: 5,
  },
});
