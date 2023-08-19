import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>


<h2 style={{color:"#fcfcfc"}}>📋 NoteSymphony</h2>
<p style={{color:"#f9f6f6"}}>Elevate Your Notes, Elevate Your Thinking</p>
<div className="homediv">

    <div>
        <Link to="/signup">
        🧾 Register
        </Link>
    </div>

    <div>
        <Link to="/login">
        🧾  Login
        </Link>
    </div>

</div>
<h3>Designed and Developed by ❤️ Moumita Sarkar, 2023 All right reserved.</h3>


    </div>
  )
}
