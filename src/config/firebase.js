import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'eshop-3ac14.firebaseapp.com',
  projectId: 'eshop-3ac14',
  storageBucket: 'eshop-3ac14.appspot.com',
  messagingSenderId: '856737987897',
  appId: '1:856737987897:web:84af1f1ac25f2c71c5fce8',
  measurementId: 'G-MB3N0NLBRC'
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
