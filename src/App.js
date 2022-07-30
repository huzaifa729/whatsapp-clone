import React from 'react'
import './App.css'
import Chat from './Chat'
import Sidebar from './Sidebar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Veer from './Veer';

function App() {
  return (
    <div className='app'>

      <div className='app-body'>
        <BrowserRouter>
      <Sidebar/>
<Routes>
   <Route path="/rooms/:roomId" element={<Chat/>}/>
    <Route path="/" element={<Veer/>}/> 
</Routes> 
</BrowserRouter>
      </div>
    </div>
  )
}

export default App



{/* <BrowserRouter>
  
<Sidebar/>
<Routes>
   <Route path="/rooms/:roomId" element={<Chat/>}/>

     <Route path="/" element={<h1>homes</h1>}/> 
</Routes> 
  </BrowserRouter>   */}