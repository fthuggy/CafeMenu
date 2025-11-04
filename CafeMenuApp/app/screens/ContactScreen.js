import { StyleSheet, Text, View, ImageBackground, Alert } from "react-native";
import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const handleFormSubmit = (FormData) =>{
console.log("Form submitted:", FormData);

Alert.alert("Thank you! Your message has been sent.");
}
function ContactScreen() {
  return (

    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/cafe.jpg")}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contact Us</Text>
      </View>
      <View style={styles.card}>
        <ContactCard
          name="map-marker"
          title="Visit us"
          text="Bean & Brew Café, Storgatan 14, Stockholm"
          buttonLabel="Show on map"
          onPress={() => console.log("button pressed")}
        />
        <ContactCard
         name="phone"
          title="Call us"
          text="070- 5860 399"
          buttonLabel="Call"
          onPress={() => console.log("button pressed")} />
        <ContactCard
         name="message"
          title="Send a message"
          text="Questions, feedback or bookings?"
          buttonLabel="Open form"
          onPress={() => console.log("button pressed")} />
      </View>
       <View style={styles.formContainer}>
      <ContactForm onSubmit={handleFormSubmit} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
    marginBottom: 40,
  },
  card: {
    alignSelf: "center",
  },
});

export default ContactScreen;
