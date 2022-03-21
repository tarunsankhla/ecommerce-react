import React, { useEffect, useState } from 'react';
import "./CartPage.css";
import {
    product1,product2,
    product3,product4,
    product5,product6,
    product8,product7,
    product9,product12,
     product10,product13,
      product11,product14,product15
 } from "./../../../src/assets/images/Products/Products";
 import cartLogoSrc from "./../../assets/images/SVG/cart.svg"
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import CartCards from '../../components/UI/Card/CartCards/CartCards';
import { useCart } from '../../context/CartContext';


function CartPage() {
    const {login} = useAuth();
    const [CartProductList,setCartProductList] = useState([]);
    const { cartState,setCartState } =useCart();
    console.log("login auth",login);
    useEffect(()=>{
        try{
            (() => {
                // console.log("res");
                // const header ={
                //     "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIyN2FmYzkzOC03YTJlLTRmMTAtODcyOS03YzM1MTJmZjU2YTciLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20iLCJpYXQiOjE2NDc2ODI4MjJ9.N7gxKttjoGKg1a5FYjrldNDyF7PCMrtgQxy20LlTfTQ"
                // }
                var res = axios.get("/api/user/cart",{ headers:{
                    authorization:localStorage.getItem("feetz")}})
                                .then((res)=>{
                                    console.log(res);
                                    setCartProductList(res.data.cart);
                                })
                                .catch((err)=>{
                                    console.log("error ",err.message);
                                });
                console.log(res);
                // console.log(res.data.products);
               
            })();
        }catch(error){
            console.log("Product list page error",error);
        }
    },[]);


  return (
    <div className="product-page-container">
       { !login ?
        // <iframe src="https://embed.lottiefiles.com/animation/94113" loading='lazy' className='animation-login'></iframe> : 
        <img src={cartLogoSrc} className="cart-logo" />:
        <>
            <main className="main">

                <div className="product-main-list">
                {cartState.length ===0 ? 
                    "Cart is empty": 
                    cartState?.map((item)=>(
                        <CartCards 
                            key={item._id}
                            _id={item._id}
                            title={item.title}  
                            productImage={item.url}   
                            author={item.author} 
                            price={item.price}
                            discount={item.discount}  
                            discountedPrice={item.discountedPrice} />
            ))}
                
                </div>
            </main>
            <div className="cart-aside">
                <div className="cart-aside-header">
                    <h3>Price Details</h3>
                </div>
                <div className="cart-aside-container">
                    <div className="cart-aside-list">
                        <span>Price(2 items)</span>
                        <span>$4999</span>
                    </div>
                    <div className="cart-aside-list">
                        <span>Discount</span>
                        <span>-$1999</span>
                    </div>
                    <div className="cart-aside-list">
                        <span>Delivery Charges</span>
                        <span>$49</span>
                    </div>
                    <div className="cart-aside-list cart-total-amount">
                        <span>Total Amount</span>
                        <span>$3499</span>
                    </div>
                </div>
            <div className="cart-aside-footer">
                <div className="cart-aside-list">
                    <span>You will save ₹1999 on this order</span>
                    
                </div>
                <button>Place Order</button>
            </div>
            </div> 
        </>
        }
    </div>
  )
}

export default CartPage;