import axios from 'axios';
import React from 'react'
import {useCart} from '../../../../context/CartContext';
import {useWishList} from '../../../../context/WishListContext';
import {UpdateCartService} from '../../../../service/CartService';
import IcTwotoneShoppingCartCheckout from '../../Icons/IcTwotoneShoppingCartCheckout';
import IcRoundMinus from '../../Icons/IcRoundMinus';
import IcRoundPlus from '../../Icons/IcRoundPlus';
import "./CartCards.css"
import IcRoundWishlist from '../../Icons/IcRoundWishlist';
import { VAR_ENCODE_TOKEN } from '../../../../utils/Routes';
import { Alert } from '../../Alert/Alert';
import { Link } from 'react-router-dom';

function CartCards(props) {
    const {
        _id,
        title,
        url,
        author,
        price,
        discount,
        discountedPrice,
        quantity
    } = props;
    const {cartState, setCartState} = useCart();
    const { WishListState, setWishListState } = useWishList();
    const IncrementCart = "increment";
    const DecrementCart = "decrement";

    const RemoveItemsFromCartHandler = async (id) => {
        try {
            console.log(id);
            const res = await axios.delete(`/api/user/cart/${id}`, {
                headers: {
                    authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                }
            });
            console.log(res);
            if (res.status === 200) {
                setCartState(res.data.cart);
                Alert("success", "Successfully removed items from cart.");
            }
        } catch (err) {
            console.log("error ", err.message);
            Alert("error", "Something went wrong!! try again.");
        }
    }

    const addToWishlistHandler = async (item) => {
        try {
            console.log(item);
            const res = await axios.post("/api/user/wishlist", {
                "product": item
            }, {
                headers: {
                    authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                }
            })

            if (res.status === 201) {
                setWishListState(res.data.wishlist);
                Alert("success", "Successfully added product in WishList.");
            }
          
        } catch (err) {
            console.log("error ", err.message);
            Alert("error", "Something went wrong!! try again.");
        }
    }

    const UpdateCartHandler = async (stateQuantity) => {
        console.log(cartState.find((cartitem) => cartitem._id === _id));
        let cartItem = cartState.find((cartitem) => cartitem._id === _id);
        if (stateQuantity === IncrementCart && (cartItem?.qty < 4)) {
            setCartState(await UpdateCartService(stateQuantity, _id));
        }
        if (stateQuantity === DecrementCart && (cartItem?.qty >= 2)) {
            setCartState(await UpdateCartService(stateQuantity, _id));
        }
        if (stateQuantity === IncrementCart && (cartItem?.qty === 4)) {
            Alert("info", "Cannot add more then 4 quantity in Cart");
        }
        if (stateQuantity === DecrementCart && (cartItem?.qty === 1)) {
            Alert("info", "Max one Product");
        }
    }
    return (
        <>
            <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                
                <img className="card-img"
                    src={url}
                    alt={author}
                    loading="lazy"/>
                <div className="cart-card-horizontal-layout">
                    <div className="card-content">
                        <div className="card-body">
                            {title} </div>
                        <div className="card-body">
                            <h2>₹{price}</h2>
                            <span className="text-grey">
                                {discount}</span>
                        </div>
                        <div className="card-footer-view">
                            <button className='btn-addToCart'>
                                <div className='cart-quantity-container' >
                                    <span onClick={() => UpdateCartHandler(IncrementCart)}>
                                        <IcRoundPlus />
                                    </span>
                                    {{ ...cartState.find((cartitem) => cartitem._id === _id) }?.qty}
                                    <span onClick={() => UpdateCartHandler(DecrementCart)} >
                                        <IcRoundMinus />
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                        <button onClick={
                            () => {
                                RemoveItemsFromCartHandler(_id)
                            }
                        }>Remove from Cart
                            <IcTwotoneShoppingCartCheckout/> {/* <span className="material-icons-round">
                                                shopping_cart
                                            </span> */} </button>
                        <button onClick={
                            () => {
                                addToWishlistHandler(props)
                            }
                        }>Move to Wishlist
                            <IcRoundWishlist/>
                        </button>
                    </div>
                </div>
            </div>
        </>)
}

export default CartCards
