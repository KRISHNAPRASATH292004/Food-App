import React, { useContext } from 'react'
import './Fooddisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Fooditem from '../Fooditem/Fooditem';
const Fooddisplay = ({category}) => {
    const {food_list}=useContext(StoreContext);
  return (
    <div>
      <div className="food-display" id='food-display'>
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {
                food_list.map((item,index)=>
                {  
                    if(category==="All"|| category===item.category)
                    return(
                        <Fooditem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}
export default Fooddisplay;
