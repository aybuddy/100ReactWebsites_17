import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBGW8bgwDvv42IPezifiEZ0o0JYgxhiHTU',
  authDomain: 'twitter-clone-cp-b5442.firebaseapp.com',
  projectId: 'twitter-clone-cp-b5442',
  storageBucket: 'twitter-clone-cp-b5442.appspot.com',
  messagingSenderId: '494952327095',
  appId: '1:494952327095:web:5924d1c9ee4659bcaaea32',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
