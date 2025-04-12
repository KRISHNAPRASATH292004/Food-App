import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartitems, food_list, removefromcart,gettotalamount} = useContext(StoreContext);
  const navigate=useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {
          food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div className='cart-item-title cart-items-item'>
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>${item.price * cartitems[item._id]}</p>
                    <p className='cross' onClick={() => removefromcart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>
              )
            }
          }
          )
        }
      </div>
      <div className="cart-bottom">
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
              <p>${gettotalamount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${gettotalamount()===0?0:gettotalamount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/orders')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you you have promocode , Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='promocode' />
              <button >submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
