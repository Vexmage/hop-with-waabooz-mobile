// services/wordService.js
import { db } from '../firebaseConfig';
import { getDocs, collection, query, where, limit } from 'firebase/firestore';

export const fetchWordOfTheDay = async (selectedDay) => {
  const today = new Date();
  const todayISO = today.toISOString().split('T')[0]; // "2025-06-22"

  console.log("Trying to fetch word for date:", todayISO);

  // 1️⃣ Try exact date match
  const dateQuery = query(
    collection(db, "words"),
    where("date", "==", todayISO),
    limit(1)
  );

  const dateSnapshot = await getDocs(dateQuery);

  if (!dateSnapshot.empty) {
    console.log("Found word for date");
    let word = [];
    dateSnapshot.forEach((doc) => word.push(doc.data()));
    return word[0];
  }

  // 2️⃣ Fallback to dayOfWeek
  console.log("Falling back to dayOfWeek:", selectedDay);

  const dayQuery = query(
    collection(db, "words"),
    where("dayOfWeek", "==", selectedDay.toString()),
    limit(1)
  );

  const daySnapshot = await getDocs(dayQuery);

  if (!daySnapshot.empty) {
    let word = [];
    daySnapshot.forEach((doc) => word.push(doc.data()));
    return word[0];
  }

  console.log("No word found for date or dayOfWeek");
  return null;
};