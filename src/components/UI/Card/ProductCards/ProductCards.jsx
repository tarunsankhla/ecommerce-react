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

// rating={item.rating}
// productType={item.productType}
// feature={item.feature}
// stockType={item.stockType}
// stock={item.stock}
// categoryType={item.categoryType}
function ProductCards(props) {
    const {
        _id,
        title,
        productImage,
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
    let holder = true;
    const IncrementCart = "increment";
    const DecrementCart = "decrement";
    console.log(cartState);
    const AddProductsInCartHandler = async (item) => {
        try {
            console.log(item);
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
         
        } catch (err) {
            console.log("error ", err.message);
            Alert("error", "Failed to add product in Cart!! try again.");
        }
    }

    const AddProductsInWishListHandler = async (item) => {
        try {
            console.log(item);
            const res = await axios.post("/api/user/wishlist", {
                product: item
            }, {
                headers: {
                    authorization: localStorage.getItem(VAR_ENCODE_TOKEN)
                }
            })
                console.log(res);
                if (res.status === 201) {
                    setWishListState(res.data.wishlist);
                    Alert("success", "Product added in WishList.");
                }
        } catch (err) {
            console.log("error ", err)
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
                <img className="card-img"
                    src={productImage}
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
                <div className="card-footer">
                    <div className="card-footer-view">
                        <button className='btn-addToCart'>
                            {
                                cartState.some((cartitem) => cartitem._id === _id)
                                    ? <div className='cart-quantity-container'>
                                        <span className={ `${handleCartQuantity}`}
                                            onClick={ () => UpdateCartHandler(IncrementCart)}>
                                            <IcRoundPlus />
                                        </span>
                                                {{...cartState.find((cartitem) => cartitem._id === _id)}?.qty}
                                        <span onClick={
                                            () => UpdateCartHandler(DecrementCart)}>
                                            <IcRoundMinus />
                                        </span>
                                    </div>
                                    : <span onClick={() => { AddProductsInCartHandler(props) } }
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
                !WishListState.find((cartitem) => cartitem._id === _id) && <span className="material-icons-round badge topright-badge badge-border"
                    style={
                        {
                            cursor: WishListState.find((cartitem) => cartitem._id === _id) ? 'not-allowed' : 'pointer'
                        }
                    }
                    onClick={
                        () => {
                            AddProductsInWishListHandler(props)
                        }
                }>
                    favorite_border
                </span>
            } </div>
        </>
    )
}

export default memo(ProductCards);
// {
// "product":{
// "_id": "7980eb16-d3c7-4121-9835-06e1c5669717",
// "title": "Men Premium Shoe",
// "author": "Sneaker",
// "price": "5000",
// "categoryName": "non-fiction",
// "url": "/static/media/product1.9ed97c94.jpg",
// "discount": "-30% off",
// "discountedPrice": 3000,
// "description": "",
// "id": "1"}
//         }
