import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './SidebarChart.css'

function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('');

    const createChat = () => {
      const roomName = prompt("Please enter name for chat")

          if(roomName){
            // do some clever database stuff...
          }
    };

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));     
    }, []);

  return  !addNewChat ? (
    <div className='sidebar-chat'>
     <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
     <div className='sidebarchat-info'>
        <h5>Room name</h5>
        <p>Last message....</p>
     </div>
  </div>
  ):(
    <div onClick={createChat} className="sidebarChat">
        <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat;