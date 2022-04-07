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
import { VAR_ENCODE_TOKEN } from '../../utils/Routes';
import { Alert } from '../../components/UI/Alert/Alert';


function CartPage() {
    const {login} = useAuth();
    const [CartProductList,setCartProductList] = useState([]);
    const { cartState, setCartState } = useCart();
    let TotalPrice = cartState?.reduce((acc, cur) => acc += Number(cur.price), 0);
    let AllProductInCart = cartState?.map((item) => { 
       return  {name :item.title , price : item.price * item.qty}
    })
    console.log(AllProductInCart);
    let TotalProductQuantity = cartState?.reduce((acc, cur) => acc += cur.qty, 0);
    let FinalPrice = cartState?.reduce((acc, cur) => acc += cur.price * cur.qty, 0) + 49;
    console.log("login auth",login);
    useEffect(()=>{
        try{
            (async () => {
                var res = await axios.get("/api/user/cart",{ headers:{
                    authorization:localStorage.getItem(VAR_ENCODE_TOKEN)}})

                setCartProductList(res.data.cart);               
            })();
        }catch(error){
            Alert("error", "Something went wrong!! try again.");
        }
    }, []);
    
    useEffect(() => { 
        TotalPrice = cartState?.reduce((acc, cur) => acc += cur.price, 0);
        TotalProductQuantity = cartState?.reduce((acc, cur) => acc += cur.qty, 0);
        FinalPrice = cartState?.reduce((acc, cur) => acc += cur.price * cur.qty, 0) + 49;
    },[cartState])


  return (
    <div className="product-page-container">
          {!login
                ?
                    <img src={cartLogoSrc} className="cart-logo" alt='cartlog'/>
                :<>
                    <main className="main">
                        <h3>Total Items in Cart: {cartState.length}</h3>
                        <div className="product-main-list">
                            {cartState.length ===0 ? 
                                <img src={cartLogoSrc} className="cart-logo" alt='cart-logo' />: 
                                cartState?.map((item)=>(
                                    <CartCards 
                                        key={item._id}
                                        _id={item._id}
                                        title={item.title}
                                        url={item.url}
                                        author={item.author}
                                        price={item.price}
                                        discount={item.discount}
                                        discountedPrice={item.discountedPrice}
                                        quantity={item.qty} />
                            ))}
                        </div>
                    </main>
                    <div className="cart-aside">
                        <div className="cart-aside-header">
                            <h3>Price Details</h3>
                        </div>
                        <div className="cart-aside-container">
                            {AllProductInCart.length == 0 ?
                                <div className="cart-aside-list">
                                    <span>(No items)</span>
                                    <span>$0 </span>
                                </div>
                                : AllProductInCart?.map((cartItems) => (
                                    <div className="cart-aside-list">
                                        <span>{ cartItems.name}</span>
                                    <span>$ {cartItems.price} </span>
                                </div>
                                ))
                            }
                            <div className="cart-aside-list">
                                <span>Delivery Charges</span>
                                <span>$49</span>
                            </div>
                            <div className="cart-aside-list cart-total-amount">
                                <span>Total Amount</span>
                                <span>$ { FinalPrice }</span>
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