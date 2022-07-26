import { Avatar, IconButton } from '@mui/material';
import React from 'react';
import './Sidebar.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>

         <div className='sidebar-header'>
             <Avatar/>
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
              <SidebarChat />
              <SidebarChat />
         </div>
    </div>
  )
}

export default Sidebar;