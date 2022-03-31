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
    console.log(cartState);
    const AddProductsInCartHandler = async (item) => {
        try {
            console.log(item);
            await axios.post("/api/user/cart", {
                "product": item
            }, {
                headers: {
                    authorization: localStorage.getItem("feetz")
                }
            }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setCartState(res.data.cart);
                }
            }).catch((error) => {
                console.log(error.message);
            });
        } catch (err) {
            console.log("error ", err.message);
        }
    }

    const AddProductsInWishListHandler = async (item) => {
        try {
            console.log(item);
            await axios.post("/api/user/wishlist", {
                "product": item
            }, {
                headers: {
                    authorization: localStorage.getItem("feetz")
                }
            }).then((res) => {
                console.log(res);
                if (res.status === 201) {
                    setWishListState(res.data.wishlist);
                }
            }).catch((error) => {
                console.log(error)
            });
        } catch (err) {
            console.log("error ", err)
        }
    }


    const UpdateCartHandler = async (stateQuantity) => {
        if (holder) {
            holder =false
            console.log(cartState.find((cartitem) => cartitem._id === _id));
            let cartItem = cartState.find((cartitem) => cartitem._id === _id);
            if (stateQuantity === 'increment' && (cartItem?.qty < 4)) {
                setCartState(await UpdateCartService(stateQuantity, _id));
            }

            if (stateQuantity === 'decrement' && (cartItem?.qty >= 2)) {

                setCartState(await UpdateCartService(stateQuantity, _id));
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
                    <div className="card-body">
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
                            cartState.some((cartitem) => cartitem._id === _id) ? <div className='cart-quantity-container'>
                                <span className={
                                        `${handleCartQuantity}`
                                    }
                                    onClick={
                                        () => UpdateCartHandler("increment")
                                }><IcRoundPlus/></span>
                                {
                                {
                                    ...cartState.find((cartitem) => cartitem._id === _id)
                                } ?. qty
                            }
                                <span onClick={
                                    () => UpdateCartHandler("decrement")
                                }><IcRoundMinus/></span>
                            </div> : <span onClick={
                                    () => {
                                        AddProductsInCartHandler(props)
                                    }
                                }
                                className="add-cart-action">
                                <span className='hide'>Add to Cart</span>
                                <span className="material-icons-round icons-style">
                                    add_shopping_cart
                                </span>

                            </span>
                        } </button>
                    </div>
                </div>
                {
                WishListState.find((cartitem) => cartitem._id === _id) ? <></> : <span className="material-icons-round badge topright-badge badge-border"
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
