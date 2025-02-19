import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ artist = "Unknown Artist", title = "Unknown Title" }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/fotos/Vinyl.jpg')} 
        style={styles.image}
      />
      <Text style={styles.artist}>{artist}</Text>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Product", { artist, title })}
      >
        <Text style={styles.buttonText}>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160, 
    backgroundColor: '#f8f8f8',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    shadowOpacity: 0.2,
    elevation: 3, 
  },
  artist: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  title: {
    fontSize: 14,
    color: '#666',
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default ProductCard;
