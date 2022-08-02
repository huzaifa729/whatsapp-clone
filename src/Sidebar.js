import { Avatar, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
import db from './firebase';
import { useStateValue } from './StateProvider';
// import { Link } from 'react-router-dom';
function Sidebar() {

  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe =  db.collection('rooms').onSnapshot(snapshot => (
         setRooms(snapshot.docs.map(doc=>
          ({
              id: doc.id,
              data: doc.data(), 
          })
          ))
       ))   
            return () => {
              unsubscribe();
            }
  },[])


  return (
    <div className='sidebar'>

         <div className='sidebar-header'>
           
        <Avatar src={!user.photoURL}/>
             <div className='sidebar-headerRight'>
                <IconButton>
              <DonutLargeIcon/>
              </IconButton>

              <IconButton>
              <ChatIcon/>
              </IconButton>

                <IconButton>
              <MoreVertIcon/>
        </IconButton>

             </div>
         </div>

         <div className='sidebar-search'>
            <div className='sidebar-searchContainer'>
              <SearchIcon/>
              <input placeholder='Search or start new chats' type="text" />
         </div>
</div>
         <div className="sidebar-chats">
           <SidebarChat  addNewChat /> 
              {rooms.map(room => (
                <SidebarChat 
                key={room.id} 
                id={room.id}
                name={room.data.name}
                />
              ))}
         </div>
    </div>
  )
}

export default Sidebar;