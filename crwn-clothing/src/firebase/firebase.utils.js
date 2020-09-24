import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBHQX6mu1EqWkhWYl8L_54bkkgQGOALAkg",
    authDomain: "react-crwn-clothing-dfab6.firebaseapp.com",
    databaseURL: "https://react-crwn-clothing-dfab6.firebaseio.com",
    projectId: "react-crwn-clothing-dfab6",
    storageBucket: "react-crwn-clothing-dfab6.appspot.com",
    messagingSenderId: "998041460050",
    appId: "1:998041460050:web:098a095ab23792e436ee8b",
    measurementId: "G-9RZKVMH8JG"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;