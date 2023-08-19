import React, { useState } from 'react'
import Login from './Login'
import "./Notes.css"
import { Link, Navigate, useNavigate } from 'react-router-dom'



export default function Register() {
const [email,setEmail]=useState("")
const [username,setUsername]=useState("")
const [pass,setPass]=useState("")

const[isregistered,setregisterd]=useState(false)

const navigate=useNavigate()
const handlesubmit=(e)=>{
    e.preventDefault()
    const user={
        email,
        username,
        pass
    }

    fetch("https://note-app-api-p9q3.onrender.com/users/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then((res)=>{
        return res.json()

    })
    .then((res)=>{
        alert("You are registered successfully")
     setregisterd(true)

        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })


    console.log(user);
}


if(isregistered){
    return <Navigate to="/login"/>
}

  return (
    <div >
        
        <form action="" className='registerfrm' >
        <h1>Register Here</h1>
            <input type="email" value={email} name="email" id="" placeholder='email' 
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input type="text" value={username} name="username" id="" placeholder='username'
            onChange={(e)=>setUsername(e.target.value)}
            
            />
        
            <input type="password" value={pass} name="pass" id="" placeholder='password' 
            onChange={(e)=>setPass(e.target.value)}
            
            />
        
        <button onClick={handlesubmit}>submit</button>
        <Link to="/login">Already Signed Up?👉🏽 Login</Link>
            <Link to="/">Go to Home Page</Link>
        </form>
        
    </div>
  )
}
