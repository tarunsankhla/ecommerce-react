import axios from 'axios';
import React from 'react'
import { useCart } from '../../../../context/CartContext';
import { useWishList } from '../../../../context/WishListContext';

function CartCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;
    const {cartState,setCartState}= useCart();
    const { WishListState, setWishListState } = useWishList();
    
    const RemoveItemsFromCartHandler=async(id)=>{
        try{
            console.log(id);
            await axios.delete(`/api/user/cart/${id}`,
                    { headers:{authorization:localStorage.getItem("feetz")}})
                        .then((res)=>{
                            console.log(res);
                            if(res.status===200){
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

    const addToWishlistHandler = async (item)=>{
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
                            console.log(error.message);
                        });
        }
        catch(err){
            console.log("error ",err.message);
        }
    }
    return (
        <>
            <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                <img className="card-img" src={productImage} alt={author}  loading="lazy" />
                <div className="cart-card-horizontal-layout">
                    <div className="card-content">
                        <div className="card-body">
                            {title}
                        </div>
                        <div className="card-body">
                            <h2>₹{price}</h2>
                    <span className="text-grey">{discount}</span>
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
                        <button onClick={()=>{RemoveItemsFromCartHandler(_id)}}>Remove from Cart<span className="material-icons-round">
                            shopping_cart
                            </span>

                            </button>
                        <button onClick={()=>{addToWishlistHandler(props)}}>Move to Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCards