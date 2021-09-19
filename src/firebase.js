import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCraE560pUeXNLD5bWo-X6iFVXN0qNAUc0",
    authDomain: "twitter-clone-b15c1.firebaseapp.com",
    projectId: "twitter-clone-b15c1",
    storageBucket: "twitter-clone-b15c1.appspot.com",
    messagingSenderId: "36330674997",
    appId: "1:36330674997:web:e655973126ce74724fca7c",
    measurementId: "G-51S3C7D0N0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;