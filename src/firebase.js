import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAXGXB5XKaEbqXVp6pFja1GxPoLWnLm6E",
  authDomain: "beach-resort-app.firebaseapp.com",
  projectId: "beach-resort-app",
  storageBucket: "beach-resort-app.appspot.com",
  messagingSenderId: "33995560963",
  appId: "1:33995560963:web:0dfedc45be3076ee4cd636",
  measurementId: "G-H2KPF7E02Q",
});

const db = firebaseApp.firestore();

export default db;
