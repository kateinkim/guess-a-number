import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    minWidth: "50%",
    height: 30,
    borderColor: "grey",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
