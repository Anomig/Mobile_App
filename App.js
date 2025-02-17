import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container}>
        <Image source={require('./assets/favicon.png')} />
        <Text style={styles.artist}>artist</Text>
        <Text style={styles.title}>title</Text>
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
  artist: {
    fontSize: 30,
  },
  title: {
    fontSize: 20,
  },
});
