import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import ImageScreen from './src/components/ImageScreen';
import InputScreen from './src/components/InputScreen';
import TextScreen from './src/components/TextScreen';

export default function App() {
  const routes = {
    TextScreen: () => {},
    InputScreen: () => {},
    ImageScreen: () => {},
  }

  return (
    <View style={styles.container}>
      {
        // Note: these should maybe be their own components
      }
      <Button
        onPress={}
        style={styles.button}
        title="TextScreen!"
      />
      <Button 
        style={styles.button}
        title="ImageScreen!"
      />
      <Button 
        style={styles.button}
        title="InputScreen!"
      />

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
  button: {
    marginBottom: 16,
  }
});
