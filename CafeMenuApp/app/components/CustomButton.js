import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    padding: 25,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  text: {
    fontSize: 16,
    color: "#513404ff",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default CustomButton;
