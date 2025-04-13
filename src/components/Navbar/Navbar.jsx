import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import StoreContextProvider, { StoreContext } from '../../Context/StoreContext'
const Navbar = ({setshowLogin}) => {
  const [menu, Setmenu] = useState("");
  const {gettotalamount}=useContext(StoreContext);
  return (
    <div className='navbar' id='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbarmenu">
        <Link to='/'  onClick={() => Setmenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href='#exploremenu' onClick={() => Setmenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
        <a href='#app-downoad'onClick={() => Setmenu("mobile")} className={menu === "mobile" ? "active" : ""}>mobile-app</a>
        <a href='#footer' onClick={() => Setmenu("contact Us")} className={menu === "contact Us" ? "active" : ""}>contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
         <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link> 
          <div className={gettotalamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowLogin(true)}>sign in</button>
      </div>

    </div>
  )
}

export default Navbar
