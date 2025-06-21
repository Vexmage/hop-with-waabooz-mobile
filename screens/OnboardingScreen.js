import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import * as Animatable from 'react-native-animatable'; // ✅ for gentle animation

export default function OnboardingScreen({ navigation }) {
  // Reusable animated Waabooz image component
  const AnimatedWaabooz = (
    <Animatable.Image
      animation="pulse"
      easing="ease-in-out"
      iterationCount="infinite"
      source={require('../assets/waabooz.png')}
      style={{
        width: 200,
        height: 200,
        resizeMode: 'contain',
      }}
    />
  );

  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#E0F7FA',
          image: AnimatedWaabooz,
          title: 'Boozhoo! I’m Waabooz 🐇',
          subtitle: 'Welcome! I’ll help you learn a new Ojibwe word every day.',
        },
        {
          backgroundColor: '#BBDEFB',
          image: AnimatedWaabooz,
          title: 'Daily Word',
          subtitle: 'Each day, check here to see today’s Ojibwe word, its translation, and pronunciation.',
        },
        {
          backgroundColor: '#C8E6C9',
          image: AnimatedWaabooz,
          title: 'Keep Practicing!',
          subtitle: 'Come back every day to grow your vocabulary. Tap me anytime for a tip!',
        },
      ]}
    />
  );
}
