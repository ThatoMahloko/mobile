import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDcdw6SCw1IVR8ajtU0isIH0JN9t1AiyQw",
  authDomain: "authentication-react-nat-500be.firebaseapp.com",
  projectId: "authentication-react-nat-500be",
  storageBucket: "authentication-react-nat-500be.appspot.com",
  messagingSenderId: "51831970940",
  appId: "1:51831970940:web:a5a8e6116e0c1ac34a3df9",
  measurementId: "G-6ZTMPFG0HY"
});

export { firebase }