import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from "./src/screens/Auth";

export default function App() {
  return (
    <View style={styles.container}>
      <Auth/>
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