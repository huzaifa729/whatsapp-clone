//firebase

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import SidebarChat from './SidebarChat';


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

const auth = firebase.auth();

const db = firebaseApp.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};

export default db;



//Sidebar.js


const [room, setRoom] = useState();

useEffect(()=>{
   const unsubscribe =   db.collection('room').onSnapshot((snapshot)=>(
        setRoom(snapshot.docs.map(doc=>
             ({
                id: doc.id,
                data: doc.data(),
             })
            ))
      ))

      return ()=>{
        unsubscribe();
      } 
},[])


{room.map(room=>(
    <SidebarChat
     key={room.id}
     id={room.id}
     data={room.data.name}
    />
))}


//sidebarchat.js


if (roomName) {
    db.collection('room').add({
        name: roomName,
    })
}






