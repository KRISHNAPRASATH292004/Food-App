import React from 'react'
import './Exploremenu.css'
import { menu_list } from '../../assets/assets'
const Exploremenu = ({category,Setcategory}) => {
    return (
            <div className="exploremenu" id="exploremenu">
                <h1>Explore our menu</h1>
                <p className="exploremenu-content">Discover delicious starters, hearty mains, and sweet treats.
                    Every dish is crafted with love and fresh ingredients.
                    Taste the tradition, feel the flavor, enjoy the moment.</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index)=>{
                    return(
                        <div onClick={()=>Setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    );
                })}
            </div>
            <hr/>
        </div>
    )
}

export default Exploremenu
