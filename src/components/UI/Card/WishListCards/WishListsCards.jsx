import axios from 'axios';
import React from 'react'
import { useWishList } from '../../../../context/WishListContext';

function WishListsCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;
    const {WishListState,setWishListState} =useWishList();

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
                        <button onClick={()=>RemoveItemsFromWishListHandler(_id)}>Move to Cart</button>
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