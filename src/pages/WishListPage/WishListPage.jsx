import React, { useEffect, useState }  from 'react';
import "./WishListPage.css";
import {
    product1,
    // product2,
    // product3,product4,
    // product5,product6,
    // product8,product7,
    // product9,product12,
     product10,product13,
    //   product11,product14,
      product15
  } from "./../../../src/assets/images/Products/Products";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import WishListsCards from '../../components/UI/Card/WishListCards/WishListsCards';
import { useWishList } from '../../context/WishListContext';


function WishListPage() {
    const { login } = useAuth();
    const [WishListProductList,setWishListProductList] = useState([]);
    const {WishListState,setWishListState} =useWishList();
    console.log("auth login ",login);
    console.log("login auth",login);
    useEffect(()=>{
        try{
            (() => {
                var res = axios.get("/api/user/wishlist",{ headers:{
                    authorization:localStorage.getItem("feetz")}})
                                .then((res)=>{
                                    console.log(res);
                                    setWishListProductList(res.data.wishList);
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
    console.log("wisj;list",WishListProductList);
    return (
        <div className="wishlist-page-container">
        {   !login ?
            <iframe className='animation-login' src="https://embed.lottiefiles.com/animation/78126" loading='lazy'></iframe> 
            :
            <> 
                <h1 className="title-wishlist">My WishList 4 items</h1>
                <main className="main">
                    <div className="wishlist-main-list">
                        {WishListProductList?.length ===0 ? 
                                "WishList is empty": 
                                WishListProductList?.map((item)=>(
                                    <WishListsCards 
                                        key={item._id}
                                        _id={item._id}
                                        title={item.title}  
                                        productImage={item.url}   
                                        author={item.author} 
                                        price={item.price}
                                        discount={item.discount}  
                                        discountedPrice={item.discountedPrice} />
                        ))}
                        {
                            WishListState.map((item)=>(
                                <WishListsCards 
                                    key={item._id}
                                    _id={item._id}
                                    title={item.title}  
                                    productImage={item.url}   
                                    author={item.author} 
                                    price={item.price}
                                    discount={item.discount}  
                                    discountedPrice={item.discountedPrice} />
                    ))
                        }
                    </div>
                </main> 
            </>
        }
        </div>
    )
}

export default WishListPage;
//  <div className="card cart-card">
//                     <img className="card-img" src={product10} alt="Food Image" />
                
//                     <div className="card-content">
//                         <div className="card-body">
//                             Men Premium Shoe
//                         </div>
//                         <div className="card-title">
//                              <h2>₹4000</h2>
//                             <span className="text-grey">-20% off</span>
//                             <span className="text-linethrough">₹5000</span>
//                         </div>   
                    
//                     </div> 
//                     <div className="card-footer">
//                         <div className="card-footer-view">
//                             <button>Move to Cart</button>
//                         </div>
//                     </div>
//                     <span className="material-icons-round badge topright-badge ">
//                         favorite_border
//                         </span>
//                 </div>
//                 <div className="card cart-card">
//                     <img className="card-img" src={product13} alt="Food Image" />
                
//                     <div className="card-content">
//                         <div className="card-body">
//                             Men Premium Shoe
//                         </div>
//                         <div className="card-title">
//                              <h2>₹4000</h2> <span className="text-grey">-20% off</span>
//                             <span className="text-linethrough">₹5000</span>
//                         </div>   
                    
//                     </div> 
//                     <div className="card-footer">
//                         <div className="card-footer-view">
//                             <button>Move to Cart</button>
//                         </div>
//                     </div>
//                     <span className="material-icons-round badge topright-badge ">
//                         favorite_border
//                         </span>
//                 </div>
//                 <div className="card cart-card">
//                     <img className="card-img" src={product1} alt="Food Image" />
                
//                     <div className="card-content">
//                         <div className="card-body">
//                             Men Premium Shoe
//                         </div>
//                         <div className="card-title">
//                              <h2>₹3500</h2>
//                             <span className="text-grey">-40% off</span>
//                             <span className="text-linethrough">₹6000</span>
//                         </div>   
                    
//                     </div> 
//                     <div className="card-footer">
//                         <div className="card-footer-view">
//                             <button>Move to Cart</button>
//                         </div>
//                     </div>
//                     <span className="material-icons-round badge topright-badge ">
//                         favorite_border
//                         </span>
//                 </div>
//                 <div className="card cart-card">
//                     <img className="card-img" src={product15} alt="Food Image" />
                
//                     <div className="card-content">
//                         <div className="card-body">
//                             Men Premium Shoe
//                         </div>
//                         <div className="card-title">
//                              <h2>₹2800</h2>
//                             <span className="text-grey">-15% off</span>
//                             <span className="text-linethrough">₹4500</span>
//                         </div>   
                    
//                     </div> 
//                     <div className="card-footer">
//                         <div className="card-footer-view">
//                             <button>Move to Cart</button>
//                         </div>
//                     </div>
//                     <span className="material-icons-round badge topright-badge ">
//                         favorite_border
//                         </span>
//                 </div>