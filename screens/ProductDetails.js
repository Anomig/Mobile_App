import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ProductDetail = ({route}) => {
  const {artist, title} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.title}>{title}</Text>
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
});

export default ProductDetail;