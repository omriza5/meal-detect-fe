import firebase from "firebase/app";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0UfmnwL0R9dNKFKCEr7FemAFYXLowWGE",
  authDomain: "meal-detect.firebaseapp.com",
  projectId: "meal-detect",
  storageBucket: "meal-detect.appspot.com",
  messagingSenderId: "103598524652",
  appId: "1:103598524652:web:a1641d73cfed4f71823dc9",
  measurementId: "G-7YQ3R3QMHX",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
