import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";

function HomeScreen() {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/cafe.jpg")}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Bean & Brew</Text>
          <Text style={styles.slogan}>Where every cup feels like home</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Menu"
            onPress={() => console.log("Menu Presed")}
          />
          <CustomButton
            title="Contact"
            onPress={() => console.log("Contact Presed")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
  },
  slogan: {
    fontSize: 18,
    color: "white",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 25,
    width: "80%",
    alignItems: "center",
  },
});

export default HomeScreen;
