import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function MenuItem({ name, price, image }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{name}</Text>
      <Text style={styles.price}>{price}kr</Text>
      <Image
        source={image}
        style={{ width: 100, height: 100, borderRadius: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  item: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
  },
});
