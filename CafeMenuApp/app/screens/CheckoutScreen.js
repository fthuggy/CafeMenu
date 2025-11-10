import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import TotalSummary from "../components/TotalSummary";

const CheckoutScreen = ({ route, navigation }) => {
  const [cartItems, setCartItems] = useState(route.params.cartItems || []);

  const updateQuantity = (id, newQty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <ImageBackground
      blurRadius={3}
      style={{ flex: 1 }}
      source={require("../assets/coffeshop5.jpg")}
    >
      <TouchableOpacity
        style={{ position: "absolute", top: 50, left: 20, zIndex: 10 }}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="arrow-back-ios-new" size={24} color="#fff" />
      </TouchableOpacity>

      <View style={{ flex: 1, marginTop: 100, paddingBottom: 120 }}>
        {cartItems.length === 0 ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 18, color: "#513404ff" }}>
              Your cart is empty :(
            </Text>
          </View>
        ) : (
          <>
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CartItem
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  onQuantityChange={(newQty) => updateQuantity(item.id, newQty)}
                  onRemove={() => removeItem(item.id)}
                />
              )}
              contentContainerStyle={{ paddingBottom: 120 }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                backgroundColor: "#fff",
              }}
            >
              <TotalSummary
                subtotal={subtotal}
                onPay={() => console.log("Pay pressed!")}
              />
            </View>
          </>
        )}
      </View>
    </ImageBackground>
  );
};

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

export default CheckoutScreen;
