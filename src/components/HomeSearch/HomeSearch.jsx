import React from "react";
import {
  SearchInputBox,
  SearchInputText,
  SearchTimeContainer,
} from "./styles.js";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Text, View } from "react-native";

const HomeSearch = () => {
  return (
    <View>
      {/* Input Box */}
      <SearchInputBox>
        <SearchInputText>Where to?</SearchInputText>
        <SearchTimeContainer>
          <AntDesign name="clockcircle" size={16} />
          <Text>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" />
        </SearchTimeContainer>
      </SearchInputBox>
      {/* previos destination */}
      {/* home destination */}
    </View>
  );
};

export default HomeSearch;
