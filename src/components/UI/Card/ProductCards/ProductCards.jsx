import axios from 'axios';
import React, {useState} from 'react';
import {useCart} from '../../../../context/CartContext';
import {useWishList} from '../../../../context/WishListContext';
import Palette from "react-palette";
import {arrivalBanner5} from "../../../../assets/images/Products/Products";
import "./ProductsCards.css";
import {IcTwotoneShoppingCart} from "../../Icons/IcTwotoneAddShoppingCart";
import IcRoundPlus from '../../Icons/IcRoundPlus';
import IcRoundMinus from '../../Icons/IcRoundMinus';
import {memo} from "react";
import {UpdateCartService} from '../../../../service/CartService';
import { VAR_ENCODE_TOKEN } from '../../../../utils/Routes';
import { Alert } from '../../Alert/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/AuthContext';

function ProductCards(props) {
    const {
        _id,
        title,
        url,
        author,
        price,
        discount,
        discountedPrice,
        rating,
        productType,
        feature,
        stockType,
        stock,
        categoryType
    } = props;
    const {cartState, setCartState} = useCart();
    const {WishListState, setWishListState} = useWishList();
    const [handleCartQuantity, setHandleCartQuantity] = useState();
    const {login, setlogin} = useAuth()
    let holder = true;
    const IncrementCart = "increment";
    const DecrementCart = "decrement";
    
    const AddProductsInCartHandler = async (item) => {
        try {
            console.log(item);
            if (login) {
                if (!cartState.some((cartitem) => cartitem._id === _id)) {
                    if (holder) {
                        holder = false;
                        const res = await axios.post("/api/user/cart", {
                            product: item
                        }, {
                            headers: {
                                authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                            }
                        })
                        console.log(res);
                        if (res.status === 201) {
                            setCartState(res.data.cart);
                            Alert("success", "Product Added in Cart");
                        }
                        holder = true;
                    }
                }
            } else {
                Alert("error", "You need to Login!!");
            }
        } catch (err) {
            Alert("error", "Failed to add product in Cart!! try again.");
        }
    }

    const AddProductsInWishListHandler = async (item) => {
        try {
            console.log(item);
            if (login) {
                if (!WishListState.some((cartitem) => cartitem._id === _id)) {
                    const res = await axios.post("/api/user/wishlist", {
                        product: item
                    }, {
                        headers: {
                            authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                        }
                    })
                    if (res.status === 201) {
                        setWishListState(res.data.wishlist);
                        Alert("success", "Product added in WishList.");
                    }
                }
                else {
                    try {
                        console.log(_id);
                        const res = await axios.delete(`/api/user/wishlist/${_id}`, {
                            headers: {
                                authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                            }
                        })
                        console.log(res);
                        if (res.status === 200) {
                            setWishListState(res.data.wishlist);
                            Alert("success", "Removed from WishList.");
                        }
                    } catch (err) {
                        Alert("error", "Something went wrong!! try again.");
                    }
                }
            } else {
                Alert("error", "You need to Login!!");
            }
        } catch (err) {
            Alert("error", "Failed to add product, try again.");
        }
    }


    const UpdateCartHandler = async (stateQuantity) => {
        if (holder) {
            holder =false
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
            holder =true
        }
    }
    return (
        <>
            <div className="card cart-card card-bg">
                <Link to={`/product/${_id}`}>
                    <img className="card-img"
                        src={url}
                        alt={author}
                        loading="lazy"/>

                    <div className="card-content card-bg">
                        <div className="card-body elipsis">
                            {title} </div>
                        <div className="card-content-container">
                            <h2>₹{price}</h2>
                            <span className="text-grey">
                                {discount}</span>
                            <span className="text-linethrough discount-price">₹{discountedPrice}</span>
                        </div>
                        </div>
                </Link>
                <div className="card-footer">
                    <div className="card-footer-view">
                        <button className='btn-addToCart'>
                            {
                                cartState.some((cartitem) => cartitem._id === _id)
                                    ?   <div className='cart-quantity-container'>
                                            <span className={ `${handleCartQuantity}`}
                                                onClick={ () => UpdateCartHandler(IncrementCart)}>
                                                <IcRoundPlus />
                                            </span>
                                                    {{...cartState.find((cartitem) => cartitem._id === _id)}?.qty}
                                            <span onClick={() => UpdateCartHandler(DecrementCart)}>
                                                <IcRoundMinus />
                                            </span>
                                        </div>
                                    :   <span onClick={() => { AddProductsInCartHandler(props) } }
                                            className="add-cart-action">
                                                <span className='hide'>Add to Cart</span>
                                                <span className="material-icons-round icons-style">
                                                    add_shopping_cart
                                                </span>

                                        </span>
                            }
                        </button>
                    </div>
                </div>
                {
                    !WishListState.some((cartitem) => cartitem._id === _id)
                        ? <span className="material-icons-round badge topright-badge badge-border"
                                style={{
                                        cursor: WishListState.find((cartitem) => cartitem._id === _id) ? 'not-allowed' : 'pointer'
                                    }}
                                onClick={() => {
                                        AddProductsInWishListHandler(props)
                                    }}>
                                favorite_border
                            </span>
                        :<span className="material-icons-round badge topright-badge badge-border"
                            style={{
                                    backgroundColor:"gray"
                                }}
                            onClick={() => {
                                    AddProductsInWishListHandler(props)
                                }}>
                            favorite_border
                        </span>
                }
            </div>
        </>
    )
}

export default memo(ProductCards);
