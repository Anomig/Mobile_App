import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const stripHtmlTags = (html) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const BlogDetailScreen = ({ route }) => {
  const { post } = route.params;

  return (
    <ScrollView style={styles.container}>
      {post.image && <Image source={post.image} style={styles.image} />}
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.date}>{post.date}</Text>
      <Text style={styles.content}>{stripHtmlTags(post.content)}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 15 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  date: { fontSize: 14, color: '#888', marginBottom: 10 },
  content: { fontSize: 16, color: '#444' },
});

export default BlogDetailScreen;