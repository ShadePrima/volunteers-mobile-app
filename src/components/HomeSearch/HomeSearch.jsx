import React from "react";
import {
  SearchInputBox,
  SearchInputText,
  SearchTimeContainer,
  SearchRow,
  SearchIconeContainer,
  TextDestination,
} from "./styles.js";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";

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
          <MaterialIcons name="keyboard-arrow-down" size={16} />
        </SearchTimeContainer>
      </SearchInputBox>
      {/* previos destination */}
      <SearchRow>
        <SearchIconeContainer>
          <AntDesign name="clockcircle" size={20} color={"#535353"} />
        </SearchIconeContainer>
        <TextDestination>Last Place</TextDestination>
      </SearchRow>
      {/* home destination */}
      <SearchRow>
        <SearchIconeContainer style={{ backgroundColor: "#218cff" }}>
          <Entypo name="home" size={20} color={"#535353"} />
        </SearchIconeContainer>
        <TextDestination>Home</TextDestination>
      </SearchRow>
    </View>
  );
};

export default HomeSearch;
