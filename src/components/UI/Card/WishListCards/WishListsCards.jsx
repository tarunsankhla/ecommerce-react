import axios from 'axios';
import React from 'react'
import { useCart } from '../../../../context/CartContext';
import { useWishList } from '../../../../context/WishListContext';

function WishListsCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;
    const {WishListState,setWishListState} =useWishList();
    const {cartState,setCartState}= useCart();
    console.log(props);
    const RemoveItemsFromWishListHandler=async(id)=>{
        try{
            console.log(id);
            await axios.delete(`/api/user/wishlist/${id}`,
                    { headers:{authorization:localStorage.getItem("feetz")}})
                        .then((res)=>{
                            console.log(res);
                            if(res.status===200){
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
                            console.log(error.message);
                        });
        }
        catch(err){
            console.log("error ",err.message);
        }
    }
    return (
        <>
            <div className="card cart-card">
                <img className="card-img" src={productImage} alt={author}  loading="lazy" />
            
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
                        <button onClick={()=>{
                            AddProductsInCartHandler(props);
                            RemoveItemsFromWishListHandler(_id)
                        }}>Move to Cart
                        <span className="material-icons-round">
                        shopping_cart
                        </span>

                        </button>
                    </div>
                </div>
                <span className="material-icons-round badge topright-badge ">
                    favorite_border
                    </span>
            </div>
        </>
  )
}

export default WishListsCards