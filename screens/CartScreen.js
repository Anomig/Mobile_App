import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../context/CartContext';

const CartScreen = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty.</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item, index) => item.id + '-' + index}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.artist} - {item.title}</Text>
                <Text>€{item.price} x {item.quantity}</Text>
                <Text>Subtotal: €{(item.price * item.quantity).toFixed(2)}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          <Text style={styles.total}>
            Total: €
            {cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
          </Text>
          <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
            <Text style={styles.clearText}>Clear Cart</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  empty: { fontSize: 18, color: '#888', textAlign: 'center', marginTop: 40 },
  item: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  remove: { color: 'red', marginLeft: 10 },
  total: { fontSize: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'right' },
  clearButton: { backgroundColor: 'grey', padding: 10, borderRadius: 8, marginTop: 20 },
  clearText: { color: 'white', textAlign: 'center', fontSize: 16 },
});

export default CartScreen;