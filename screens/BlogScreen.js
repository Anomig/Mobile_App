import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BlogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom op onze Blog 📝</Text>
      <Text style={styles.text}>
        Hier delen we nieuwtjes over vinyl, muziek releases, events en meer!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default BlogScreen;
