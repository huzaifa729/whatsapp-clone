import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import db from './firebase';
import './SidebarChart.css'

function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState('')

    useEffect(()=>{
      if(id){
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot=>
                setMessages(snapshot.docs.map((doc)=>
                doc.data()))
            )
      }
    },[id]);

    const createChat = () => {
      const roomName = prompt("Please enter name for chat")

          if(roomName){
            // do some clever database stuff...

            db.collection('rooms').add({
              name: roomName,
            })

          }
    };

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));     
    }, []);

  return  !addNewChat ? (
    <Link to={`rooms/${id}`}>
    <div className='sidebar-chat'>
     <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
     <div className='sidebarchat-info'>
        <h5>{name}</h5> 
        <p>{messages[0]?.message}</p>
     </div>
  </div>
  </Link>
  ):(
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat;