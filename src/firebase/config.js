import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2_KVijqOGodDtB-zU9JQDE0cPP5gAu1g",
    authDomain: "photo-gallery-95798.firebaseapp.com",
    projectId: "photo-gallery-95798",
    storageBucket: "photo-gallery-95798.appspot.com",
    messagingSenderId: "253042605866",
    appId: "1:253042605866:web:e5f5e54db5d4f2a0d4e853"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timeStamp};