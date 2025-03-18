import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import ProductCard from '../components/ProductCard.js';

// import Vinyl1 from '../assets/fotos/Vinyl.jpg';
// import Vinyl2 from '../assets/fotos/Vinyl2.jpg';

const HomeScreen = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a7c36b22e584e07b9af73f/products/",
      {
        headers: {
          Authorization
            : "Bearer 1ee8322f9125015a0f2f555e36abb1ecce6534aaac4cb8e436deabe7918bb361",
        },
      }
    )

    .then((response) => response.json())
    .then((data) => 
      setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.songtitle,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: {uri:item.skus[0]?.fieldData["main-image"]?.url},
        }))
      ))
    .catch((error) => console.error(error));
  }
  , []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onze bestsellers!</Text>
      <View style={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            artist={product.title}
            title={product.subtitle}
            image={product.image}
            price={product.price}
            onPress={() => navigation.navigate("Product", product)}
          />
        ))}
      </View>
      <StatusBar style="auto" />

    </ScrollView>
  );


  // return (
  //   <ScrollView style={styles.container}>
  //     <Text style={styles.title}>Onze bestsellers!</Text>
  //     <View style={styles.productsContainer}>
  //       <ProductCard artist="Linkin Park" title="Numb"                image={Vinyl1} price="19" />
  //       <ProductCard artist="BTS"         title="No"                  image={Vinyl2} price="30" />
  //       <ProductCard artist="Pink Floyd"  title="The Wall"            image={Vinyl1} price="20" />
  //       <ProductCard artist="Queen"       title="Bohemian Rhapsody"   image={Vinyl2} price="19" />
  //       <ProductCard artist="Muse"        title="Undisclosed desire"  image={Vinyl1} price="20"  />
  //       <ProductCard/>
  //       <ProductCard/>
  //       <ProductCard/>
  //       <ProductCard/>
  //     </View>
  //     <StatusBar style="auto" />
  //   </ScrollView>
  // );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'space-between',
  },
});

export default HomeScreen;