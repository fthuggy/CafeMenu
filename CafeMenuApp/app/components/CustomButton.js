import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 250,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default CustomButton;
