import { StyleSheet } from "react-native";
import styled from "styled-components/native";

const styles = StyleSheet.create({
  googleInput: {
    padding: 10,
    backgroundColor: "#d7d8d8",
    marginTop: 5,
    borderRadius: 5,
    marginLeft: 10,
  },

  autocompleteContainer: {
    position: "absolute",
    width: "100%",
    top: 50,
    left: 30,
    rigth: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  separator: {
    backgroundColor: "#c8c7cd",
    height: 1,
  },
  iconeContainer: {
    backgroundColor: "#a2a2a2",
    padding: 5,
    borderRadius: 50,
    marginRight: 15,
  },
  listView: {
    position: "absolute",
    top: 125,
  },
  locationText: {},
  circle: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#060606",
    borderRadius: 5,
    top: 75,
    left: 20,
  },
  line: {
    position: "absolute",
    width: 2,
    height: 64,
    backgroundColor: "#919191",
    top: 82,
    left: 22.5,
  },
  square: {
    position: "absolute",
    width: 7,
    height: 7,
    backgroundColor: "#060606",
    top: 145,
    left: 20,
  },
});

export default styles;

export const ViewContainer = styled.View`
  padding: 30px;
  ${"" /* background-color: #eee; */}
  height: 100%;
`;
