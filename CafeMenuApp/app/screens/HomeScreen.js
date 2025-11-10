import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CustomButton from "../components/CustomButton";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.background}
      source={require("../assets/coffeshop5.jpg")}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Bean & Brew</Text>
          <Text style={styles.slogan}>Where every cup feels like home</Text>
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Menu"
            onPress={() => navigation.navigate("Menu")}
          />
          <CustomButton
            title="Contact"
            onPress={() => navigation.navigate("Contact")}
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
  text: {
    fontSize: 50,
    color: "#513404ff",
  },

  slogan: {
    fontSize: 18,
    color: "#513404ff",
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 20,
    width: "80%",
    alignItems: "center",
  },
});
export default HomeScreen;
