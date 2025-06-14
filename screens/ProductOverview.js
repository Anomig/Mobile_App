import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, TextInput } from 'react-native';

import ProductCard from '../components/ProductCard.js';
import { mapProduct } from '../utils/mapProduct';

import { Picker } from '@react-native-picker/picker';

// import Vinyl1 from '../assets/fotos/Vinyl.jpg';
// import Vinyl2 from '../assets/fotos/Vinyl2.jpg';

const categories = {
  "": "All",
  "67d8786a6bd8399d89813e5d":"R&B",
  "67d878633ff4e0c6ac7ccc74":"Kpop",
  "67d8785b1fce3f539bf1971e":"Jazz",
  "67d8784c3ab1606f492cedf3":"Rock",
  "67d87845dc0055dc8cb89a9e":"Pop",
}

const ProductOverview = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

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
      setProducts(data.items.map(mapProduct))
      )
    .catch((error) => console.error(error));
  }
  , []);

  const filterProduct = products.filter (
    (p) =>
    (selectedCategory === "" || p.category === selectedCategory) &&
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onze bestsellers!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.productsContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
        >
          <Picker.Item label="All" value="" />
          {[...new Set(products.map((product) => product.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />  
          ))}
        </Picker>
        {filterProduct.map((product) => (
          <ProductCard
            key={product.id}
            artist={product.artist}
            title={product.title}
            category={product.category}
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
  picker: {
    height: 50,
    width: 150,
    marginBottom: 20,
  },
  input: {
    height: 45,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

});

export default ProductOverview;