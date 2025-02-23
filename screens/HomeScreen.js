import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

import ProductCard from '../components/ProductCard.js';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Onze bestsellers!</Text>
      <View style={styles.productsContainer}>
        <ProductCard artist="Linkin Park" title="Numb" />
        <ProductCard artist="BTS" title="No" />
        <ProductCard artist="Pink Floyd" title="The Wall" />
        <ProductCard artist="Queen" title="Bohemian Rhapsody" />
        <ProductCard/>
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