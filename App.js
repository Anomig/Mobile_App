import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
      <TextInput  placeholder="Enter your name" />
      <Image source={require('./assets/favicon.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
