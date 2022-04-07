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
  import wishListLogoSrc from "./../../assets/images/SVG/wishlist.svg";
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import WishListsCards from '../../components/UI/Card/WishListCards/WishListsCards';
import { useWishList } from '../../context/WishListContext';
import { VAR_ENCODE_TOKEN } from '../../utils/Routes';
import { Alert } from '../../components/UI/Alert/Alert';


function WishListPage() {
    const { login } = useAuth();
    const [WishListProductList,setWishListProductList] = useState([]);
    const { WishListState, setWishListState } = useWishList();
    
    useEffect(  ()=>{
        try{
            ( async() => {
                let res = await axios.get("/api/user/wishlist",
                    {
                        headers: {
                            authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                        }
                    });
                    setWishListProductList(res.data.wishList);
            })();
        }catch(error){
            Alert("error", "Something went wrong!! try again.");
        }
    }, []);
    
    return (
        <div className="wishlist-page-container">
            {
                !login ? 
                    <img src={wishListLogoSrc} className="wishlist-logo" alt='whistlist-logo'/>
                :
                <> 
                    <h1 className="title-wishlist"> WishList Contains {WishListState.length} Items</h1>
                    <main className="main">
                        <div className="wishlist-main-list">
                            {
                                WishListState?.length ===0 ?
                                <img src={wishListLogoSrc} className="wishlist-logo" alt='wishlist-logo' /> :
                                WishListState.map((item)=>(
                                    <WishListsCards 
                                        key={item._id}
                                        _id={item._id}
                                        title={item.title}  
                                        url={item.url}   
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