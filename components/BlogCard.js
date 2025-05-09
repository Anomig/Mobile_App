import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const BlogCard = ({ title, image, date, excerpt, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.excerpt}>{excerpt}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  excerpt: {
    fontSize: 16,
    color: '#444',
  },
});

export default BlogCard;
