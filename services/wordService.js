// services/wordService.js
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchWordOfTheDay = async () => {
  const dayOfWeek = new Date().getDay() === 0 ? 7 : new Date().getDay();
  console.log("Fetching word for day:", dayOfWeek);

  const q = query(collection(db, "words"), where("dayOfWeek", "==", dayOfWeek.toString()));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    console.log("No word found for today");
    return null;
  }

  const word = [];
  querySnapshot.forEach((doc) => word.push(doc.data()));
  console.log("Fetched word:", word[0]);
  return word[0];
};
