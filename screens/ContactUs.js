import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // Simulate form submission
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      {submitted ? (
        <Text style={styles.successMessage}>Thank you for your message! We'll get back to you soon.</Text>
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={formData.name}
            onChangeText={(value) => handleChange('name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Your Message"
            value={formData.message}
            onChangeText={(value) => handleChange('message', value)}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
  },
  button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ContactUs;