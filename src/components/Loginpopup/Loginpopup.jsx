import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
const Loginpopup = ({setshowLogin}) => {
    const [curstate,setcurstate]=useState("Login")
  return (
    <div className='loginpopup'>
        <form className="login-popup-container">
            <div className="login-pop-up-title">
                <h2>{curstate}</h2>
                <img  onClick={()=>{setshowLogin(false)}} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-pop-up-inputs">
                {curstate==="Login"?<></>:<input type="text" placeholder='Enter your name' required />}
                <input type="text" placeholder='Enter your email' required />
                <input type="text" placeholder='Password' required />
            </div>
            <button>{curstate==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, i agree to the terms of use & privacy policy.</p>
            </div>
            {curstate==="Login"?
            <p>Create a new account<span onClick={()=>setcurstate("Sign Up")}> click here</span></p>:
            <p>Already have a account? <span onClick={()=>setcurstate("Login")}>Login here</span></p> 
            } 
        </form>
    </div>
  )
}

export default Loginpopup
