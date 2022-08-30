import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { HomePage } from './src/HomePage';

 
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor="transparent" />
      <HomePage />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    overflow: 'scroll'
  },
 

});
