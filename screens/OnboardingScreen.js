import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#E0F7FA',
          image: <Image source={require('../assets/waabooz.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />,
          title: 'Boozhoo! I’m Waabooz 🐇',
          subtitle: 'Welcome! I’ll help you learn a new Ojibwe word every day.',
        },
        {
          backgroundColor: '#BBDEFB',
          image: <Image source={require('../assets/waabooz.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />,
          title: 'Daily Word',
          subtitle: 'Each day, check here to see today’s Ojibwe word, its translation, and pronunciation.',
        },
        {
          backgroundColor: '#C8E6C9',
          image: <Image source={require('../assets/waabooz.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />,
          title: 'Keep Practicing!',
          subtitle: 'Come back every day to grow your vocabulary. Tap me anytime for a tip!',
        },
      ]}
    />
  );
}
