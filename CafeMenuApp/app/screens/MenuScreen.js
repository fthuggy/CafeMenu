import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { menuItems } from "../data/MenuItems";
import MenuItem from "../components/MenuItem";
import FilterButtons from "../components/FilterButtons";
import { MaterialIcons } from "@expo/vector-icons";

function MenuScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter items
  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const flatListRef = useRef(null);

  // Scrolla till toppen när filter ändras
  useEffect(() => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  }, [selectedCategory]);

  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/cafe.jpg")}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>Our Menu</Text>

      <View style={styles.container}>
        <FilterButtons
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FlatList
          ref={flatListRef}
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <MenuItem {...item} />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
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
    marginBottom: 50,
    color: "#fff",
  },
});
export default MenuScreen;
