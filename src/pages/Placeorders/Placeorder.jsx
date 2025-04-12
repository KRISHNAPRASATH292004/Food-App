import React, { useContext } from 'react'
import './Placeorders.css'
import { StoreContext } from '../../Context/StoreContext'
const Placeorder = () => {
  const {gettotalamount}=useContext(StoreContext);
  return (
   <form className='place-order'>
    <div className="place-order-left">
      <p className="title">Delivery Information</p>
      <div className="multi-feilds">
        <input type="text"placeholder='First name' />
        <input type="text" placeholder='Last name' />
      </div>
      <input type="text"  placeholder='Emailaddress'/>
      <input type="text" placeholder='Street' />
      <div className="multi-feilds">
        <input type="text"placeholder='city' />
        <input type="text" placeholder='state' />
      </div>
      <div className="multi-feilds">
        <input type="text"placeholder='Zipcode' />
        <input type="text" placeholder='Country' />
      </div>
      <input type="text" placeholder='phone' />
    </div>
    <div className="place-order-right">
    <div className="cart-total">
          <h2>Cart-total</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${gettotalamount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalamount()===0?0:gettotalamount()+2}</b>
            </div>
          </div>
          <button >PROCEED TO PAYMENT</button>
        </div>
    </div>
   </form>
  )
}

export default Placeorder
