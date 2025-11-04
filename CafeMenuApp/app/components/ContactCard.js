import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const iconColor = "#000";

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
  )
}

const styles = StyleSheet.create({
    container: {
backgroundColor: "#fff",
borderRadius: 10,
paddingVertical: 20,
paddingHorizontal: 15,
marginBottom: 10,

    },
      title: {
fontSize: 18,
fontWeight: "bold",
marginTop: 10,

    },
    text: {
marginBottom: 10,
    },
      button: {
backgroundColor: "#000",
paddingVertical: 10,
borderRadius: 8,

    },
    buttonText: {
 color: "#fff",
 fontWeight: "bold",
 alignSelf: "center"
    },
   
})

export default ContactCard;