// import { initializeApp } from "firebase/app";
import firebase from 'firebase'
// import "firebase/auth";
// import "firebase/database";

const firebaseConfig = {
  apiKey: 'AIzaSyBPDs7Y9I-nN3pcrDPfaiM8jfkeu0FSAzA',
  authDomain: 'challenge-4d30c.firebaseapp.com',
  projectId: 'challenge-4d30c',
  storageBucket: 'challenge-4d30c.appspot.com',
  messagingSenderId: '805290923648',
  appId: '1:805290923648:web:4883345be50dfcbe35f865',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
