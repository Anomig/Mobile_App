import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const getTotal = () =>
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.artist}</Text>
          <Text style={styles.subtitle}>{item.title}</Text>
          <Text style={styles.price}>€{item.price} x {item.quantity}</Text>
          <Text style={styles.subtotal}>Subtotaal: €{(item.price * item.quantity).toFixed(2)}</Text>
        </View>
        <TouchableOpacity onPress={() => removeFromCart(item.id)}>
          <Text style={styles.remove}>Verwijder</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Winkelwagen</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Je winkelwagen is leeg.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => item.id + '-' + index}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
          <View style={styles.totalBar}>
            <Text style={styles.totalLabel}>Totaal:</Text>
            <Text style={styles.totalValue}>€{getTotal()}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Afrekenen</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>Winkelwagen legen</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  empty: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 60,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
    backgroundColor: '#e0e0e0',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: '#222',
  },
  subtotal: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  remove: {
    color: '#e53935',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 14,
  },
  totalBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  checkoutButton: {
    backgroundColor: '#222',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  checkoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  clearButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  clearText: {
    color: '#222',
    fontSize: 16,
  },
});

export default CartScreen;