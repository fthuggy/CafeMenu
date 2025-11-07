import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert,
  TouchableOpacity,
} from "react-native";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";
import { MaterialIcons } from "@expo/vector-icons";

function ContactScreen({ navigation }) {
  const [formVisible, setFormVisible] = useState(false);

  const handleFormSubmit = (FormData) => {
    console.log("Form submitted:", FormData);

    Alert.alert("Thank you! Your message has been sent.");
  };

  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/contact.jpg")}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
      </TouchableOpacity>
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
          onPress={() => console.log("button pressed")}
        />
        <ContactCard
          name="message"
          title="Send a message"
          text="Questions, feedback or bookings?"
          buttonLabel="Open form"
          onPress={() => setFormVisible(true)} 
        />
      </View>
      {formVisible && (
        <View style={styles.formContainer}>
          <ContactForm onSubmit={handleFormSubmit} />
          <TouchableOpacity
            onPress={() => setFormVisible(false)}
            style={styles.closeButton}
          >
            <Text style={{ color: "white" }}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
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
    formContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButton: {
   
    alignSelf: "center",
    padding: 10,
    backgroundColor:"#513404ff",
    borderRadius: 10,
  },
});

export default ContactScreen;
