import React from 'react';
import "./WishListPage.css";
import {
    product1,product2,
    product3,product4,
    product5,product6,
    product8,product7,
    product9,product12,
     product10,product13,
      product11,product14,product15
 } from "../../../assets/images/Products/Products"
function WishListPage() {
  return (
    <div className="wishlist-page-container">
        <h1 className="title-wishlist">My WishList (4 items)</h1>
        <main className="main">

            <div className="wishlist-main-list">
                <div className="card cart-card">
                    <img className="card-img" src={product10} alt="Food Image" srcset=""/>
                
                    <div className="card-content">
                        <div className="card-body">
                            Men Premium Shoe
                        </div>
                        <div className="card-title">
                             <h2>₹4000</h2>
                            <span className="text-grey">-20% off</span>
                            <span className="text-linethrough">₹5000</span>
                        </div>   
                    
                    </div> 
                    <div className="card-footer">
                        <div className="card-footer-view">
                            <button>Move to Cart</button>
                        </div>
                    </div>
                    <span className="material-icons-round badge topright-badge ">
                        favorite_border
                        </span>
                </div>
                <div className="card cart-card">
                    <img className="card-img" src={product13} alt="Food Image" srcset=""/>
                
                    <div className="card-content">
                        <div className="card-body">
                            Men Premium Shoe
                        </div>
                        <div className="card-title">
                             <h2>₹4000</h2> <span className="text-grey">-20% off</span>
                            <span className="text-linethrough">₹5000</span>
                        </div>   
                    
                    </div> 
                    <div className="card-footer">
                        <div className="card-footer-view">
                            <button>Move to Cart</button>
                        </div>
                    </div>
                    <span className="material-icons-round badge topright-badge ">
                        favorite_border
                        </span>
                </div>
                <div className="card cart-card">
                    <img className="card-img" src={product1} alt="Food Image" srcset=""/>
                
                    <div className="card-content">
                        <div className="card-body">
                            Men Premium Shoe
                        </div>
                        <div className="card-title">
                             <h2>₹3500</h2>
                            <span className="text-grey">-40% off</span>
                            <span className="text-linethrough">₹6000</span>
                        </div>   
                    
                    </div> 
                    <div className="card-footer">
                        <div className="card-footer-view">
                            <button>Move to Cart</button>
                        </div>
                    </div>
                    <span className="material-icons-round badge topright-badge ">
                        favorite_border
                        </span>
                </div>
                <div className="card cart-card">
                    <img className="card-img" src={product15} alt="Food Image" srcset=""/>
                
                    <div className="card-content">
                        <div className="card-body">
                            Men Premium Shoe
                        </div>
                        <div className="card-title">
                             <h2>₹2800</h2>
                            <span className="text-grey">-15% off</span>
                            <span className="text-linethrough">₹4500</span>
                        </div>   
                    
                    </div> 
                    <div className="card-footer">
                        <div className="card-footer-view">
                            <button>Move to Cart</button>
                        </div>
                    </div>
                    <span classNameName="material-icons-round badge topright-badge ">
                        favorite_border
                        </span>
                </div>
            </div>
        </main>
    </div>
  )
}

export default WishListPage