import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductCard from './components/ProductCard.js';

export default function App() {
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <ProductCard artist="Linkin Park" title="Numb" />
        <ProductCard artist="Bts" title="NO" />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});
