import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

function MenuItem({ name, price, image }) {
  return (
    <View style={{ marginTop: 10}}>
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
 <Text style={styles.item}>{name}</Text>
      <Text style={styles.price}>{price}kr</Text>
      </View>
     
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    shadowColor: "#000",
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-between",
   
    
  },
textContainer: {
flex: 1,
marginLeft: 10,
},
  image: {
    width: 80,
    height: 90,
    borderRadius: 10,
  },

  item: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
   
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "right",
  },
});

export default MenuItem;