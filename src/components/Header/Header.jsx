import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
     const navigate=useNavigate();
    return (
            <div className="header">
                <div className="header-content">
                    <h2>Order your Favourite food here</h2>
                    <p>"Welcome to Royals, where flavor meets passion.
                        Every dish is crafted with love and the freshest ingredients.
                        Come hungry, leave happy — your table is waiting."
                    </p>
                     <button> View Menu</button>
                </div>
            </div>
    )
}

export default Header
