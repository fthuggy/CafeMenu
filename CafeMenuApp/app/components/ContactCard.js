import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const iconColor = "#513404ff";

function ContactCard({ name, size = 80, title, text, buttonLabel, onPress }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "#513404ff",
  },
  text: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: "#513404ff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ContactCard;
