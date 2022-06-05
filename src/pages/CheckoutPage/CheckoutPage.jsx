import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Alert} from '../../components/UI/Alert/Alert';
import {VAR_ENCODE_TOKEN} from '../../utils/Routes';
import { useNavigate as Navigate } from 'react-router';
import { useCart } from '../../context/CartContext';
import "./CheckoutPage.css";

const CheckoutPage = () => {
  const [addressList, setAddressList] = useState([]);
  const { cartState, setCartState } = useCart();
  let TotalPrice = cartState?.reduce((acc, cur) => acc += Number(cur.price), 0);
  let AllProductInCart = cartState?.map((item) => { 
     return  {name :item.title , price : item.price * item.qty}
  })
  console.log(AllProductInCart);
  let TotalProductQuantity = cartState?.reduce((acc, cur) => acc += cur.qty, 0);
  let FinalPrice = cartState?.reduce((acc, cur) => acc += cur.price * cur.qty, 0) + 49;
  const navigate = Navigate();

    useEffect(() => {
        try {
            (async () => {
                var res = await axios.get("/api/user/address", {
                    headers: {
                        authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                    }
                })
                console.log(res);
                setAddressList(res.data.addressList);
            })();
        } catch (error) {
            Alert("error", "Something went wrong!! try again.");
        }
    }, [])
    return (
      <div className='checkout-page-container'>
        <main>main
          <div>
            <h4>All Address</h4>
            <hr />
            {addressList?.map((address => (
              <div key={address._id} className="box address-box">
                <p>Name: { address.name}</p>
                <p>Email Addres: </p>
                <p>Street:  { address.street}</p>
                <p>City:  { address.city}</p>
                <p>State:  { address.state}</p>
                <p>PinCode:  {address.pincode}</p>
                <button>Select Address</button>
              </div>
            )))}
            <button>Add Address</button>
          </div>
        </main>
        <aside className='checkout-aside'>
          <div>
            <div className="cart-aside-header">
              <h4>Apply Coupon</h4>
            </div>
            <div><input className='apply-coupon-input'/> <button className='cart-aside-button apply-btn'>Apply</button></div>
            <div>
              <div className='box'>Apply NEOG and get FLAT ₹500 off</div>
              <div className='box'>Apply FIRST200 and get FLAT ₹200 off</div>
            </div>
          </div>
          <div className="cart-aside-header">
              <h4>Order Summary</h4>
          </div>
          <div className="cart-aside-container">
            {AllProductInCart.length === 0 ?
              <div className="cart-aside-list">
                <span>(No items)</span>
                <span>$0</span>
              </div>
              : AllProductInCart?.map((cartItems) => (
                <div className="cart-aside-list">
                    <span>{  cartItems.name  }</span>
                    <span>${  cartItems.price  } </span>
                </div>
              ))}
              <div className="cart-aside-list">
                  <span>Delivery Charges</span>
                  <span>$49</span>
              </div>
              <div className="cart-aside-list cart-total-amount">
                  <span>Total Amount</span>
                  <span>$ {FinalPrice}</span>
              </div>
          </div>
          <div className="cart-aside-footer">
              <div className="cart-aside-list">
                  <span>You will save ₹1999 on this order</span>
              </div>
              <button className='cart-aside-button' onClick={
                  () => navigate("/checkout")
              }>Place Order</button>
          </div>
        </aside>
      </div>
    )
}

export default CheckoutPage
