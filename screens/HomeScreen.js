import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ProductCard from '../components/ProductCard';
import { mapProduct } from '../utils/mapProduct';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a7c36b22e584e07b9af73f/products/",
      {
        headers: {
          Authorization: "Bearer 1ee8322f9125015a0f2f555e36abb1ecce6534aaac4cb8e436deabe7918bb361",
        },
      }
    )
      .then((response) => response.json())
      .then((data) =>
        setProducts(data.items.slice(0, 3).map(mapProduct))
      )
      .catch((error) => console.error(error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welkom bij onze Recordstore 🎶</Text>

      <Text style={styles.subtitle}>Sneak peek van onze collectie:</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            artist={product.artist}
            title={product.title}
            image={product.image}
            price={product.price}
            onPress={() => navigation.navigate("Product", product)}
            style={styles.productCard}
          />
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>Shop Vinyls</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Blog')}
      >
        <Text style={styles.buttonText}>Lees onze Blog</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  productsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
    flexWrap: 'wrap',
    width: '100%',
  },
  productCard: {
    marginHorizontal: 10,
    width: 180,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  carousel: {
    width: '100%',
    marginBottom: 30,
  },
  carouselContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;