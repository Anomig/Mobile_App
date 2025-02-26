import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import ProductCard from '../components/ProductCard.js';

import Vinyl1 from '../assets/fotos/Vinyl.jpg';
import Vinyl2 from '../assets/fotos/Vinyl2.jpg';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onze bestsellers!</Text>
      <View style={styles.productsContainer}>
        <ProductCard artist="Linkin Park" title="Numb"                image={Vinyl1} price="19" />
        <ProductCard artist="BTS"         title="No"                  image={Vinyl2} price="30" />
        <ProductCard artist="Pink Floyd"  title="The Wall"            image={Vinyl1} price="20" />
        <ProductCard artist="Queen"       title="Bohemian Rhapsody"   image={Vinyl2} price="19" />
        <ProductCard artist="Muse"        title="Undisclosed desire"  image={Vinyl1} price="20"  />
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
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