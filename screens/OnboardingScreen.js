import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/waabooz.png')} style={styles.image} />
      <Text style={styles.title}>Boozhoo! I'm Waabooz 🐇</Text>
      <Text style={styles.text}>
        I'm here to help you learn a new Ojibwe word every day. 
        I'll show you the word, its translation, and how to say it.
      </Text>
      <Text style={styles.text}>
        Check back daily to expand your Ojibwe vocabulary!
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Let's Get Started!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0F7FA',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
