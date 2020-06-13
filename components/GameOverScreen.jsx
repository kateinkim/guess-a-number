import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>The Game Is Over!</Text>
        <Text style={styles.text}>Number of Rounds : {props.roundsNumber}</Text>
        <Text style={styles.text}>Number was : {props.userNumber}</Text>
      </View>
      <Button
        title="NEW GAME"
        onPress={props.onRestart}
        color={Colors.button2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    margin: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    padding: 5,
  },
});

export default GameOverScreen;
