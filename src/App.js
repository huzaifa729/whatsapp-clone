import React, { useState } from 'react'
import './App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import { useStateValue } from './StateProvider'
// import Veer from './Veer';

function App() {
  // const [user, setUser] = useState(null);

   const [{ user }, dispatch] = useStateValue(); 

  return (
    <div className='app'>
      {!user ? (
        <Login/>
      ):(
   <div className='app-body'>
        <BrowserRouter>
      <Sidebar/>
<Routes>
   <Route path="/rooms/:roomId" element={<Chat/>}/>
    <Route path="/" element={<Chat/>}/> 
</Routes> 
</BrowserRouter>
      </div>
        )}
    </div>
  )
}

export default App;



