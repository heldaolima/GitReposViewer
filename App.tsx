import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from './src/SearchBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GitRepoConsumer</Text>
      <SearchBar />
      <StatusBar style="auto" translucent={false} backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontWeight: "bold",
    fontSize: 24
  }

});
