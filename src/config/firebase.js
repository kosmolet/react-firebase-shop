import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'gunshop-7b627.firebaseapp.com',
  projectId: 'gunshop-7b627',
  storageBucket: 'gunshop-7b627.appspot.com',
  messagingSenderId: '495440092494',
  appId: '1:495440092494:web:728d1122a50ba655dd921f',
  measurementId: 'G-8ZE9LCT1P5'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
