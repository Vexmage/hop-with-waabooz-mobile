import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>About Hop with Waabooz 🐇</Text>

      <Text style={styles.paragraph}>
        <Text style={styles.bold}>Hop with Waabooz</Text> is a simple daily word app designed to help learners engage with the Ojibwe language — one word at a time.
      </Text>

      <Text style={styles.paragraph}>
        Inspired by community-led language revitalization efforts, this app provides daily words, translations, and pronunciation tips, guided by Waabooz, our friendly rabbit companion.
      </Text>

      <Text style={styles.paragraph}>
        Indigenous languages like Ojibwe are vital parts of cultural identity and connection. Small tools like this app can help families, students, and curious learners keep words alive in daily life.
      </Text>

      <Text style={styles.paragraph}>
        Keep learning, come back every day, and share a word with a friend or family member. 🧡🐇
      </Text>

      <Text style={styles.heading}>About the Developer</Text>

      <Text style={styles.paragraph}>
        Joel Southall is a Web Developer, Graphic Designer, and Technologist with a Master's degree in Philosophy. An Ojibwe person with roots in Ontario, Canada; Miami, Florida; and Oregon, Joel is currently building software in Springfield, Oregon, with a focus on community, culture, and education.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#F0F8FF',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Poppins_700Bold',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 22,
    fontFamily: 'Poppins_400Regular',
  },
  bold: {
    fontWeight: 'bold',
  },
});
