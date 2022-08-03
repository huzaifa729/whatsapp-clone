import React, { useEffect, useState } from 'react'
import './Chat.css';
import { Avatar,  IconButton  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonSharpIcon from '@mui/icons-material/InsertEmoticonSharp';
import MicNoneSharpIcon from '@mui/icons-material/MicNoneSharp';
import { useParams } from 'react-router';
import db from './firebase';
import firebase from 'firebase/compat/app';
import { useStateValue } from './StateProvider';

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState('');
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect (() => {
     if (roomId) {
        db.collection('rooms')
        .doc(roomId)
        .onSnapshot((snapshot) =>
          setRoomName(snapshot.data().name))

          db.collection('rooms').doc(roomId).collection('messages')
          .orderBy('timestamp','asc')
          .onSnapshot((snapshot) =>(
             setMessages(snapshot.docs.map((doc) => doc.data()))
          ))
     }
  },[roomId])

  useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000));     
}, [roomId]);

  const sendMessage = (e) => {
     e.preventDefault()
     console.log("You typed >>>", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
          message: input,
          name: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

     setInput("");
  }

  return (
    <div className='chat'>
        <div className='chat-header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

           <div className='chat-headerInfo'>
               <h3>{roomName}</h3>
               <p>Last seen {""}
                 {new Date(
                  messages[messages.length-1]?.
                  timestamp?.toDate()).toUTCString()}
               </p>
           </div>

             <div className='chat-headerRight'>
             <IconButton>
             <SearchIcon/>
              </IconButton>

              <IconButton>
              <AttachFileIcon/>
              </IconButton>

                <IconButton>
              <MoreVertIcon/>
        </IconButton>
             </div>
        </div>

        <div className='chat-body'>
          {messages.map((message) => (
             <p className={`chat-message ${message.name === user.displayName && 'chat-reciever'}`}>
             <span className='chat-name'>
             {message.name}
             </span>
             {message.message}
              <span className='chat-timestamp'>
              {new Date(message.timestamp?.toDate()).toUTCString()}
             </span>
             </p>
            ))}
        </div>

        <div className='chat-footer'>
          <InsertEmoticonSharpIcon/>
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a message' type='text'/>
             <button onClick={sendMessage} type='submit'>Send a message</button>
          </form>
          <MicNoneSharpIcon/>
        </div>
    </div>
  )
}

export default Chat