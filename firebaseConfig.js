// firebaseConfig.js (React Native version)
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// ✅ Use actual strings for now — safe for a small demo
const firebaseConfig = {
  apiKey: "AIzaSyAkkZeUPA3KtDvBqHKou3mU2SNVF5uxz_k",
  authDomain: "ojibwe-word-of-the-day.firebaseapp.com",
  projectId: "ojibwe-word-of-the-day",
  storageBucket: "ojibwe-word-of-the-day.firebasestorage.app",
  messagingSenderId: "930718505383",
  appId: "1:930718505383:web:85576ddbd2fe717a13be82",
  measurementId: "G-0966PLKN8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };

