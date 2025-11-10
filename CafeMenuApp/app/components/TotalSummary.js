import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TotalSummary = ({ subtotal = 0, onPay }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subtotalText}>Subtotal: {subtotal} kr</Text>

      <TouchableOpacity style={styles.payButton} onPress={onPay}>
        <Text style={styles.payButtonText}>PAY</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  payButton: {
    backgroundColor: "#513404ff",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default TotalSummary;
