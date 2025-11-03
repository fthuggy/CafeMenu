import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import { menuItems } from "../data/MenuItems";
import MenuItem from "../components/MenuItem";

function MenuScreen() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems =
    selectedCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text>Our Menu</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MenuItem name={item.name} price={item.price} image={item.image} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
});

export default MenuScreen;
