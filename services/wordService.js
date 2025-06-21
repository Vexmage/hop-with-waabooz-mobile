// services/wordService.js
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const fetchWordOfTheDay = async (dayOfWeek) => {
  const q = query(
    collection(db, "words"),
    where("dayOfWeek", "==", dayOfWeek.toString())
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) return null;

  const word = [];
  querySnapshot.forEach((doc) => word.push(doc.data()));
  return word[0];
};

