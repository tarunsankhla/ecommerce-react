import axios from 'axios';
import React, { useState } from 'react'
import {useCart} from '../../../../context/CartContext';
import {useWishList} from '../../../../context/WishListContext';
import IcTwotoneShoppingCartCheckout from '../../Icons/IcTwotoneShoppingCartCheckout';
import IcBaselineCancel from '../../Icons/IcBaselineCancel'
import { VAR_ENCODE_TOKEN } from '../../../../utils/Routes';
import { Alert } from '../../Alert/Alert';
import { Link } from 'react-router-dom';
import IcRoundPlus from '../../Icons/IcRoundPlus';
import IcRoundMinus from '../../Icons/IcRoundMinus';
import { UpdateCartService } from '../../../../service/CartService';
let holder = true;
const IncrementCart = "increment";
const DecrementCart = "decrement";


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
    const [handleCartQuantity, setHandleCartQuantity] = useState();

    const RemoveItemsFromWishListHandler = async (id) => {
        try {
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

    

    const UpdateCartHandler = async (stateQuantity) => {
        if (holder) {
            holder =false
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
                        {/* <button className='btn-addToCart'
                            onClick={() => {
                                    AddProductsInCartHandler(props);
                                    RemoveItemsFromWishListHandler(_id)
                                }}>Move to Cart
                            <IcTwotoneShoppingCartCheckout/>
                        </button> */}
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
                <span onClick={() => RemoveItemsFromWishListHandler(_id) }
                    className=" badge topright-badge ">
                    <IcBaselineCancel/>
                </span>

            </div>
        </>
    )
}

export default WishListsCards
