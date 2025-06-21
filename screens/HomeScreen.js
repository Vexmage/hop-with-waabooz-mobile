import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import { fetchWordOfTheDay } from '../services/wordService';

export default function HomeScreen({ navigation }) {
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showGreeting, setShowGreeting] = useState(true);
  const [selectedDay, setSelectedDay] = useState(
    new Date().getDay() === 0 ? 7 : new Date().getDay()
  );

  useEffect(() => {
    const fetchWord = async () => {
      setLoading(true);
      try {
        const wordData = await fetchWordOfTheDay(selectedDay);
        setWord(wordData);
      } catch (error) {
        console.error("Error fetching word:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchWord();
  }, [selectedDay]);

  return (
    <>
      {/* ✅ Modal greeting */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showGreeting}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Image source={require('../assets/waabooz.png')} style={styles.modalImage} />
            <Text style={styles.modalText}>
              Boozhoo! I'm Waabooz. Would you like me to show you how this app works, or skip for now?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setShowGreeting(false);
                  navigation.navigate('Onboarding');
                }}
              >
                <Text style={styles.buttonText}>Yes, show me!</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.skipButton]}
                onPress={() => setShowGreeting(false)}
              >
                <Text style={styles.buttonText}>Skip for now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* ✅ Main word + mascot + day picker */}
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
          <Text>No word found for this day.</Text>
        )}

        <View style={styles.rabbit}>
          <Image source={require('../assets/waabooz.png')} style={styles.rabbitImage} />
          <Text style={styles.rabbitText}>Waabooz will guide you here!</Text>
        </View>

        {/* ✅ Day picker */}
        <View style={styles.dayPicker}>
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <Pressable
              key={day}
              style={[
                styles.dayButton,
                selectedDay === day && styles.dayButtonSelected,
              ]}
              onPress={() => setSelectedDay(day)}
            >
              <Text style={styles.dayButtonText}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][day - 1]}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </>
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
    alignItems: 'center',
  },
  rabbitImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  rabbitText: {
    padding: 10,
    backgroundColor: '#2196F3',
    color: '#fff',
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: '#aaa',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dayPicker: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  dayButton: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  dayButtonSelected: {
    backgroundColor: '#2196F3',
  },
  dayButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
