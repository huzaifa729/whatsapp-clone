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

function Chat() {
  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const {roomId} = useParams();
  const [roomName, setRoomName] = useState('');

  useEffect (() => {
     if (roomId) {
        db.collection('rooms').doc(roomId).onSnapshot(snapshot =>(
          setRoomName(snapshot.data().name)
        ))
     }
  },[roomId])

  useEffect(()=>{
    setSeed(Math.floor(Math.random() * 5000));     
}, [roomId]);

  const sendMessage = (e) => {
     e.preventDefault()
     console.log("You typed >>>", input);
     setInput("");
  }

  return (
    <div className='chat'>
        <div className='chat-header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

           <div className='chat-headerInfo'>
               <h3>{roomName}</h3>
               <p>Last seen at ...</p>
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
             <p className={`chat-message ${true && 'chat-reciever'}`}>
             <span className='chat-name'>Huzaifa Dabir</span>
             Hey Guys

             <span className='chat-timestamp'>3:52pm</span>
             </p>
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