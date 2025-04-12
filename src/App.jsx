import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/Placeorders/Placeorder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
const App = () => {
  const [showLogin,setshowLogin]=useState(false);
  return (
    <>
     {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/orders' element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
   </>
  )
}

export default App
