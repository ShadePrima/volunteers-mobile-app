import React from "react";
import { View, Text } from "react-native";
import UberTypeRow from "../UberTypeRow";
import styles from "./styles";

import typesData from "../../assets/data/types.js";

const UberTypes = () => {
  return (
    <View>
      {typesData.map((obj) => (
        <UberTypeRow {...obj} />
      ))}
    </View>
  );
};

export default UberTypes;
