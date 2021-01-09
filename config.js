import firebase from 'firebase';
require('@firebase/firestore');

const   firebaseConfig = {
    apiKey: "AIzaSyDAgc9j4zpPq-O6JeWw7r4PSlPrlmmjLTI",
    authDomain: "barter-app-a2bec.firebaseapp.com",
    projectId: "barter-app-a2bec",
    storageBucket: "barter-app-a2bec.appspot.com",
    messagingSenderId: "94799815170",
    appId: "1:94799815170:web:1b034ff90d81f5a68afd1b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
