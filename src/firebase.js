import firebase from 'firebase'; // Module not found: Can't resolve 'firebase' in 'C:\Users\Sergio DC\Desktop\gmail-clone\src'
                                 // :\Users\Sergio DC\Desktop\gmail-clone\src' Error from chokidar (C:\node_modules): Error: EBUSY: resource busy or locked, lstat 'C:\DumpStack.log.tmp'
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