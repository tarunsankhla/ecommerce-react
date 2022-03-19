import axios from 'axios';
import React from 'react';
import { useCart } from '../../../../context/CartContext';
import { useWishList } from '../../../../context/WishListContext';
import "./ProductsCards.css";


function ProductCards(props) {
    const { title ,productImage , author,price,discount,discountedPrice } =props;
    const {cartState,setCartState}= useCart();
    const {WishListState,setWishListState} =useWishList();
    const AddProductsInCartHandler = async (item)=>{
        try{
            console.log(item);
            await axios.post("/api/user/cart",
                    { "product":item},
                    { headers:{authorization:localStorage.getItem("feetz")}})
                        .then((res)=>{
                            console.log(res);
                            if(res.status===201){
                                setCartState(res.data.cart);
                            }
                        })
                        .catch((error)=>{
                            console.log(error)
                        });
        }
        catch(err){
            console.log("error ",err)
        }
    }
    
    const AddProductsInWishListHandler = async (item)=>{
        try{
            console.log(item);
            await axios.post("/api/user/wishlist",
                    { "product":item},
                    { headers:{authorization:localStorage.getItem("feetz")}})
                        .then((res)=>{
                            console.log(res);
                            if(res.status===201){
                                setWishListState(res.data.wishlist);
                            }
                        })
                        .catch((error)=>{
                            console.log(error)
                        });
        }
        catch(err){
            console.log("error ",err)
        }
    }
//   {
//         "product":{
//           "_id": "7980eb16-d3c7-4121-9835-06e1c5669717",
//           "title": "Men Premium Shoe",
//           "author": "Sneaker",
//           "price": "5000",
//           "categoryName": "non-fiction",
//           "url": "/static/media/product1.9ed97c94.jpg",
//           "discount": "-30% off",
//           "discountedPrice": 3000,
//           "description": "",
//           "id": "1"}
//         }
  return (
    <>
        <div className="card cart-card">
            <img className="card-img" src={productImage} alt={author} />

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
                    <button onClick={()=>{AddProductsInCartHandler(props)}}>Add to Cart</button>
                </div>
            </div>
            <span className="material-icons-round badge topright-badge " onClick={()=>{AddProductsInWishListHandler(props)}}>
                favorite_border
            </span>
        </div>
    </>
  )
}

export default ProductCards