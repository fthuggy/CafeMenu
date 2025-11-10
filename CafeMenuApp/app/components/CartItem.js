import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CartItem = ({
  id,
  name,
  price,
  image,
  quantity,
  onQuantityChange,
  onRemove,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />

      <View style={styles.details}>
        <View style={styles.topRow}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity onPress={onRemove}>
            <MaterialIcons name="close" size={20} color="#000" />
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>{price} kr</Text>

        {/* Quantity control */}
        <View style={styles.quantityRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => onQuantityChange(quantity > 1 ? quantity - 1 : 1)}
          >
            <Text style={styles.buttonText}>−</Text>
          </TouchableOpacity>

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onQuantityChange(quantity + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 15,
    alignItems: "center",
    width: "95%",
    alignSelf: "center",
  },
  image: {
    width: 80,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#513404ff",
  },
  price: {
    marginTop: 5,
    fontSize: 16,
    color: "#000",
  },
  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  button: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#513404ff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
  },
});

export default CartItem;
