import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchWordOfTheDay } from '../services/wordService';

export default function HomeScreen() {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWord = async () => {
      try {
        const wordData = await fetchWordOfTheDay();
        setWord(wordData);
      } catch (error) {
        console.error("Error fetching word:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWord();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#2196F3" />
      ) : word ? (
        <View style={styles.card}>
          <Text style={styles.word}>{word.wordOjibwe}</Text>
          <Text style={styles.translation}>Translation: {word.translation}</Text>
          <Text style={styles.pronunciation}>Pronunciation: {word.pronunciation}</Text>
        </View>
      ) : (
        <Text>No word found for today.</Text>
      )}

      <View style={styles.rabbit}>
        <Text>🐇 Waabooz will guide you here!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 8,
    padding: 20,
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  word: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  translation: {
    fontSize: 20,
    marginTop: 10,
  },
  pronunciation: {
    fontSize: 18,
    marginTop: 5,
    fontStyle: 'italic',
  },
  rabbit: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
});
