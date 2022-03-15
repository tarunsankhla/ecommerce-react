import React from 'react';
import "./CartPage.css";
import {
    product1,product2,
    product3,product4,
    product5,product6,
    product8,product7,
    product9,product12,
     product10,product13,
      product11,product14,product15
 } from "../../../assets/images/Products/Products"
function CartPage() {
  return (
    <div className="product-page-container">
       
        <main className="main">

            <div className="product-main-list">
                <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                    <img className="card-img" src={product15} alt="shoe Image" srcset=""/>
                    <div className="cart-card-horizontal-layout">
                        <div className="card-content">
                            <div className="card-body">
                                Men Premium Jacket
                            </div>
                            <div className="card-body">
                                <h3>₹2000</h3>
                                <h4>50% off</h4>
                            </div>   
                            <div className="card-body">
                                Quantity
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div> 
                        <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                            <button>Remove from Cart</button>
                            <button>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                    <img className="card-img" src={product14} alt="shoe Image" srcset=""/>
                    <div className="cart-card-horizontal-layout">
                        <div className="card-content">
                            <div className="card-body">
                                Men Premium Jacket
                            </div>
                            <div className="card-body">
                                <h3>₹2000</h3>
                                <h4>50% off</h4>
                            </div>   
                        
                            <div className="card-body">
                                Quantity
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        </div> 
                        <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                            <button>Remove from Cart</button>
                            <button>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                    <img className="card-img" src={product13} alt="shoe Image" srcset=""/>
                    <div className="cart-card-horizontal-layout">
                        <div className="card-content">
                            <div className="card-body">
                                Men Premium Jacket
                            </div>
                            <div className="card-body">
                                <h3>₹2000</h3>
                                <h4>50% off</h4>
                            </div>   
                            <div className="card-body">
                                Quantity
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        
                        </div> 
                        <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                            <button>Remove from Cart</button>
                            <button>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
                <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                    <img className="card-img" src={product12} alt="shoe Image" srcset=""/>
                    <div className="cart-card-horizontal-layout">
                        <div className="card-content">
                            <div className="card-body">
                                Men Premium Jacket
                            </div>
                            <div className="card-body">
                                <h3>₹2000</h3>
                                <h4>50% off</h4>    
                            </div>   
                            <div className="card-body">
                                Quantity
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                </select>
                            </div>
                        
                        </div> 
                        <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                            <button>Remove from Cart</button>
                            <button>Move to Wishlist</button>
                        </div>
                    </div>
                </div>
            
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
    </div>
  )
}

export default CartPage