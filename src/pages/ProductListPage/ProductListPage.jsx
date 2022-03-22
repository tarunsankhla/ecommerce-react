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
import "./ProductListPage.css";


export const ProductListPage = () => {

    const [ProductList,setProductList] = useState([]);
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
      <FilterProduct props={{ProductList,setProductList}}/>
       <main className="main">

          <div className="product-main-list">
            {ProductList?.map((item)=>(
                <ProductCards 
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
    </div>
  )
}