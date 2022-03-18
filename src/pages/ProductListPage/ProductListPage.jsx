import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCards from '../../components/UI/Card/ProductCards/ProductCards';

import FilterProduct from "./FilterSection/FilterProduct"
import {
  // product1,
  product2,
  // product3,product4,
  // product5,product6,
  // product8,product7,
  // product9,product12,
  //  product10,product13,
  //   product11,product14,product15
} from "./../../../src/assets/images/Products/Products";
import "./ProductListPage.css"
export const ProductListPage = () => {

    const [ProductList,setProductList] = useState([ ]);
    useEffect(()=>{
      try{
        (async() => {
        var res = await axios.get("/api/products");
        console.log(res);
        // console.log(res.data.products);
        setProductList(res.data.products);
       
    })()}
    catch(error){
      console.log("Product list page error",error);
    }
  },[]);
  return (
    <div className='product-page-container'>
      <FilterProduct />
       <main className="main">

          <div className="product-main-list">
            {ProductList?.map((item)=>(
                <ProductCards 
                key={item._id}
                title={item.title}  
                productImage={item.url}   
                author={item.author} 
                price={item.price}
                discount={item.discount}  
                discountedPrice={item.discountedPrice} />
            ))}
          </div>
          </main>
    </div>
  )
}

        // <div className="card cart-card">
        //           <img className="card-img" src={product2} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹2000</h2>
        //                   <span className="text-grey">-30% off</span>
        //                   <span className="text-linethrough">₹3200</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product3} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹2800</h2>
        //                   <span className="text-grey">-15% off</span>
        //                   <span className="text-linethrough">₹4500</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product4} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹3400</h2>
        //                   <span className="text-grey">-18% off</span>
        //                   <span className="text-linethrough">₹5200</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product5} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹2000</h2>
        //                   <span className="text-grey">-30% off</span>
        //                   <span className="text-linethrough">₹3200</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product6} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹3000</h2>
        //                   <span className="text-grey">-12% off</span>
        //                   <span className="text-linethrough">₹4200</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product7} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹2200</h2>
        //                   <span className="text-grey">-25% off</span>
        //                   <span className="text-linethrough">₹3800</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product8} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹8000</h2>
        //                   <span className="text-grey">-8% off</span>
        //                   <span className="text-linethrough">₹10300</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product9} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹5200</h2>
        //                   <span className="text-grey">-35% off</span>
        //                   <span className="text-linethrough">₹8000</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>
        //       <div className="card cart-card">
        //           <img className="card-img" src={product10} alt="Food Image" />
              
        //           <div className="card-content">
        //               <div className="card-body">
        //                   Men Premium Shoe
        //               </div>
        //               <div className="card-title">
        //                   <h2>₹2500</h2>
        //                   <span className="text-grey">-12% off</span>
        //                   <span className="text-linethrough">₹3000</span>
        //               </div>   
                  
        //           </div> 
        //           <div className="card-footer">
        //               <div className="card-footer-view">
        //                   <button>Add to Cart</button>
        //               </div>
        //           </div>
        //           <span className="material-icons-round badge topright-badge ">
        //               favorite_border
        //               </span>
        //       </div>