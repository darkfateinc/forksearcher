import Firebase from 'firebase'

const app = Firebase.initializeApp({
  apiKey: "AIzaSyA00kHEcnYWpe54oLtkYtD9NZsXpbPIz10",
  authDomain: "searchfork-ee90d.firebaseapp.com",
  databaseURL: "https://searchfork-ee90d.firebaseio.com",
  projectId: "searchfork-ee90d",
  storageBucket: "searchfork-ee90d.appspot.com",
  messagingSenderId: "11869629527",
  appId: "1:11869629527:web:7422238d91f5a8e6ecc712",
  measurementId: "G-K03HKT4C51"
});

export const db = app.database();
