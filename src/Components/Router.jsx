import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Notes from './Notes'
import Home from './Home'

export default function Router() {
  return (
    <div>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/signup" element={<Register/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/notes" element={<Notes/>}/>

</Routes>
        
    </div>
  )
}
