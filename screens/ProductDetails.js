import React from "react";
import {View, Text, StyleSheet} from "react-native";

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Text>Product detail Screen </Text>
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