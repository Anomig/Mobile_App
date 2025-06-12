import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import BlogCard from '../components/BlogCard.js'; 

const BlogScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67a7c36b22e584e07b9af73f/collections/67bb7b85691057385029e187/items",
      {
        headers: {
          Authorization: "Bearer 1ee8322f9125015a0f2f555e36abb1ecce6534aaac4cb8e436deabe7918bb361",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items.map((item) => ({
          id: item.id,
          title: item.fieldData.name,  
          image: item.fieldData['thumbnail-image'] && item.fieldData['thumbnail-image'][0] 
            ? { uri: item.fieldData['thumbnail-image'][0].url } 
            : null,  
          date: item.fieldData['publish-date'], 
          content: item.fieldData['content'] || 'No content available',  
        })))
      })
      .catch((error) => console.error(error));
  }, []);

  const stripHtmlTags = (html) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blog 📚</Text>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          title={post.title}
          image={post.image}
          date={post.date}
          excerpt={stripHtmlTags(post.content).slice(0, 120) + '...'}
          onPress={() => navigation.navigate('BlogDetail', { post })}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  postContainer: { marginBottom: 30 },
  postTitle: { fontSize: 20, fontWeight: 'bold' },
  postDate: { fontSize: 14, color: 'gray' },
  postContent: { fontSize: 16, marginTop: 10 },
  image: { width: '100%', height: 200, marginBottom: 10 }
});

export default BlogScreen;