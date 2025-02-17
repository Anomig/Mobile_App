import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ artist, title }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/favicon.png')} />
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    artist: {
        fontSize: 30,
    },
    title: {
        fontSize: 20,
    },
});

export default ProductCard;
