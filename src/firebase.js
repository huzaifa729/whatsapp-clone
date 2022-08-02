import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0S7cYe6nClEJVD8OrJkVTn1Q062zNE24",
    authDomain: "whatsapp-proj-27245.firebaseapp.com",
    projectId: "whatsapp-proj-27245",
    storageBucket: "whatsapp-proj-27245.appspot.com",
    messagingSenderId: "196800985919",
    appId: "1:196800985919:web:bd380a7ac8897a2c41318a",
    measurementId: "G-3B7NFWTJ9T"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;





  