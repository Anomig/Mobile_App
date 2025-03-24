import React, { useState } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const ProductDetail = ({route}) => {
  const {artist, title, image, price, description, category} = route.params;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () =>{
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.quantityText}>{quantity}</Text>

        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.totalPrice}>Total: €{price * quantity}</Text>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    color: "#666",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 5,
  },
  price: {
    fontSize: 30,
    color: "green",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
  quantityText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  totalPrice: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default ProductDetail;