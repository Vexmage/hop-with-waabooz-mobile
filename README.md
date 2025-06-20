# Hop with Waabooz (Mobile)

**Hop with Waabooz** is a mobile word-of-the-day learning app designed to help users learn the Ojibwe language, guided by Waabooz the Rabbit. Each day, the app displays a new Ojibwe word along with its translation and pronunciation.  
This mobile version is built with **React Native**, **Expo**, and **Firebase Firestore**.

---

## 📱 Screenshots

> *(Add screenshots here once you have them — e.g. `assets/screenshot.png`)*

---

## ✨ Features

- 📖 **Daily Word:** Displays a new Ojibwe word each day, with translation and pronunciation.
- 🐇 **Waabooz the Rabbit:** A friendly mascot guides learners through their daily word.
- ☁️ **Firebase Integration:** Words are stored in Firestore for easy updates without needing to rebuild the app.
- ⚡ **Built with Expo:** Fast development, easy testing on both Android and iOS.

---

## 🛠️ Tech Stack

- **React Native**
- **Expo**
- **Firebase Firestore**

---

## 🚀 Getting Started

**Clone the repository:**

```bash
git clone https://github.com/YOUR-USERNAME/hop-with-waabooz-mobile.git
cd hop-with-waabooz-mobile

Install dependencies:

npm install

Set up Firebase:

    Create a Firebase project in the Firebase Console.

    Add a Firestore database.

    Replace the placeholders in firebaseConfig.js with your own Firebase project settings.

Run the app locally:

npx expo start

Then scan the QR code with Expo Go on your mobile device.

Project Structure

├── App.js               # Entry point
├── screens/             # Screens (HomeScreen)
├── services/            # Firebase services (word fetching)
├── firebaseConfig.js    # Firebase initialization
├── assets/              # Images (add Waabooz mascot here)
├── .gitignore           # Keeps node_modules etc. out of repo

License

This project is for educational and portfolio use.
You may adapt it for your own language learning apps or experiments.

Acknowledgements

    Inspired by my Blackfoot internship word-of-the-day app.

    Special thanks to the Ojibwe community for the language inspiration.

Contact

Feel free to reach out if you’d like to collaborate or learn more!
