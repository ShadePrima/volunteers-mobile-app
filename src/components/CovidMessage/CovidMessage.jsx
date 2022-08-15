import React from "react";
import {
  CovidMessageView,
  CovidMessageTitle,
  CovidMessageText,
  CovidMessageLearnMore,
} from "./styles.js";

const CovidMessage = () => {
  return (
    <CovidMessageView>
      <CovidMessageTitle>Travel only if necessary</CovidMessageTitle>
      <CovidMessageText>
        If you must travel, pleace exercise caution for your safety and the
        safety of our company
      </CovidMessageText>
      <CovidMessageLearnMore>Learn more</CovidMessageLearnMore>
    </CovidMessageView>
  );
};

export default CovidMessage;
