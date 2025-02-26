import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";

const ProductDetail = ({route}) => {
  const {artist, title, image, price} = route.params;

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
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
});

export default ProductDetail;