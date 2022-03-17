import React from 'react';
import "./ProductsCards.css";


function ProductCards(props) {
    const { title ,productImage , author,price,discount,discountedPrice } =props;
    console.log("image",productImage)
//     title: "Men Premium Shoe",
//     author: "Sneaker",
//     price: "5000",
//     categoryName: "non-fiction",
//     url:{product2},
//     discount:"-30% off",
// discountedPrice:3000,
//     description:""
//   },
  return (
    <>
        <div className="card cart-card">
                  <img className="card-img" src={productImage} alt="Food " />
              
                  <div className="card-content">
                      <div className="card-body">
                         {title}
                      </div>
                      <div className="card-title">
                          <h2>₹{price}</h2>
                          <span className="text-grey">{discount}</span>
                          <span className="text-linethrough">₹{discountedPrice}</span>
                      </div>   
                  
                  </div> 
                  <div className="card-footer">
                      <div className="card-footer-view">
                          <button>Add to Cart</button>
                      </div>
                  </div>
                  <span className="material-icons-round badge topright-badge ">
                      favorite_border
                      </span>
              </div>
    </>
  )
}

export default ProductCards