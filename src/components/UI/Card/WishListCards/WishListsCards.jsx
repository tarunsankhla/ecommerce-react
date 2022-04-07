import axios from 'axios';
import React from 'react'
import {useCart} from '../../../../context/CartContext';
import {useWishList} from '../../../../context/WishListContext';
import IcTwotoneShoppingCartCheckout from '../../Icons/IcTwotoneShoppingCartCheckout';
import IcBaselineCancel from '../../Icons/IcBaselineCancel'
import { VAR_ENCODE_TOKEN } from '../../../../utils/Routes';
import { Alert } from '../../Alert/Alert';
import { Link } from 'react-router-dom';

function WishListsCards(props) {
    const {
        _id,
        title,
        url,
        author,
        price,
        discount,
        discountedPrice
    } = props;
    const {WishListState, setWishListState} = useWishList();
    const { cartState, setCartState } = useCart();
    
    console.log(props);
    const RemoveItemsFromWishListHandler = async (id) => {
        try {
            console.log(id);
            const res = await axios.delete(`/api/user/wishlist/${id}`, {
                headers: {
                    authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                }
            })
            if (res.status === 200) {
                setWishListState(res.data.wishlist);
                Alert("success", "Removed from WishList.");
            }
        } catch (err) {
            Alert("error", "Something went wrong!! try again.");
        }
    }
    const AddProductsInCartHandler = async (item) => {
        try {
            console.log(item);
            const res = await axios.post("/api/user/cart", {
                "product": item
            }, {
                headers: {
                    authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                }
            })
            if (res.status === 201) {
                setCartState(res.data.cart);
                Alert("success", "Added to cart.");
            }
        } catch (err) {
            Alert("error", "Something went wrong!! try again.");
        }
    }
    return (
        <>
            <div className="card cart-card">
            <Link to={`/product/${_id}`}>
                <img className="card-img"
                    src={url}
                    alt={author}
                    loading="lazy"/>

                <div className="card-content">
                    <div className="card-body">
                        {title} </div>
                    <div className="card-title">
                        <h2>₹{price}</h2>
                        <span className="text-grey">
                            {discount}</span>
                        <span className="text-linethrough">₹{discountedPrice}</span>
                    </div>

                    </div>
                    </Link>
                <div className="card-footer">
                    <div className="card-footer-view">
                        <button className='btn-addToCart'
                            onClick={() => {
                                    AddProductsInCartHandler(props);
                                    RemoveItemsFromWishListHandler(_id)
                                }}>Move to Cart
                            <IcTwotoneShoppingCartCheckout/>
                        </button>
                    </div>
                </div>
                <span onClick={() => RemoveItemsFromWishListHandler(_id) }
                    className=" badge topright-badge ">
                    <IcBaselineCancel/>
                </span>

            </div>
        </>
    )
}

export default WishListsCards
