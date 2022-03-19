import axios from 'axios';
import React from 'react'
import { useCart } from '../../../../context/CartContext';

function CartCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;
    const {cartState,setCartState}= useCart();
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
                            console.log(error)
                        });
        }
        catch(err){
            console.log("error ",err)
        }
    }
    return (
        <>
            <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                <img className="card-img" src={productImage} alt={author} />
                <div className="cart-card-horizontal-layout">
                    <div className="card-content">
                        <div className="card-body">
                            {title}
                        </div>
                        <div className="card-body">
                            <h3>{price}</h3>
                            <h4>{discount}</h4>
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
                        <button onClick={()=>{RemoveItemsFromCartHandler(_id)}}>Remove from Cart</button>
                        <button>Move to Wishlist</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartCards