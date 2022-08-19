import React from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { ViewContainer, TextInputDestination } from "./styles.js";
import styles from "./styles";

import PlaceRow from "./PlaceRow.jsx";

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
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.googleInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to ?"
          onPress={(data, details = null) => {
            setDestinationPlace({ data, details });
            console.log(data, details);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.googleInput,
            container: { ...styles.autocompleteContainer, top: 120 },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: "AIzaSyAFZdRRBDQVvcbi8FT4_HQfCqVPy6T6NVo",
            language: "en",
          }}
          renderRow={(data) => <PlaceRow data={data} />}
        />

        {/* circle near Origin input */}
        <View style={styles.circle} />
        {/* Line between dots */}
        <View style={styles.line} />
        {/* square  near Destination input */}
        <View style={styles.square} />
      </ViewContainer>
    </SafeAreaView>
  );
};

export default DestinationSearch;

// const styles = StyleSheet.create({
//   googleInput: {
//     padding: 10,
//     backgroundColor: "#d7d8d8",
//     marginTop: 5,
//     borderRadius: 5,
//   },
// });
