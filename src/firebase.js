import firebase from 'firebase';
// IMPORTANT !! To avoid this error in firebase v9:
// Module not found: Can't resolve 'firebase' in 'C:\Users\Sergio DC\Desktop\gmail-clone\src'
// execute this command:
// npm uninstall firebase
// npm i firebase@^8.10.0

const firebaseConfig = {
    apiKey: "AIzaSyA991VSRKjNjPEQBKlnBEwsDe2X9rd6Geo",
    authDomain: "clone-7a7c6.firebaseapp.com",
    projectId: "clone-7a7c6",
    storageBucket: "clone-7a7c6.appspot.com",
    messagingSenderId: "603317575447",
    appId: "1:603317575447:web:9ff80ba4c35bb2f87d2152"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }; 