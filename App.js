import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hop with Waabooz</Text>
        <Text style={styles.subtitle}>
          Your daily guide to learning Ojibwe with Waabooz the Rabbit!
        </Text>
      </View>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
});
