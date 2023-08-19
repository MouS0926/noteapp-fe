import React, { useState } from 'react'
import "./Notes.css"
import { Navigate } from 'react-router-dom'


export default function Login() {

    const [email,setEmail]=useState("")

    const [pass,setPass]=useState("")
    const[islogin,setLogin]=useState(false)

    const handleLogin=(e)=>{
        e.preventDefault()
        const user={
            email,
           
            pass
        }
    
        fetch("https://note-app-api-p9q3.onrender.com/users/login",{
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
            localStorage.setItem("token",res.token)
            setLogin(true)
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
    
    
        console.log(user);
    }


    if(islogin){
        return <Navigate to="/notes"/>
    }


  return (
    <div>





<form action="" className='registerfrm'>
    <h3>Login</h3>
            <input type="email" value={email} name="email" id="" placeholder='email' 
            onChange={(e)=>setEmail(e.target.value)}
            />
         
        
            <input type="password" value={pass} name="pass" id="" placeholder='password' 
            onChange={(e)=>setPass(e.target.value)}
            
            />
        
        <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}
