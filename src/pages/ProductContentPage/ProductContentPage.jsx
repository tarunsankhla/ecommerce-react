import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Alert } from '../../components/UI/Alert/Alert';
import { useCart } from '../../context/CartContext';
import { useWishList } from '../../context/WishListContext';
import { UpdateCartService } from '../../service/CartService';
import { VAR_ENCODE_TOKEN } from '../../utils/Routes';
import IcRoundPlus from '../../components/UI/Icons/IcRoundPlus';
import IcRoundMinus from '../../components/UI/Icons/IcRoundMinus';
import IcTwotoneAddShoppingCart from '../../components/UI/Icons/IcTwotoneAddShoppingCart';
import "./ProductContentPage.css";

function ProductContentPage() {
    const { id } = useParams();
    const [productContent, setProductContent] = useState();
    console.log(id);
    useEffect(() => { 
        try {
			(async () => {
				var res = await axios.get("/api/products");
                console.log(res);
                setProductContent([...res.data.products].find((product) => product._id === id));
                const {
                    _id,
                    title,
                    productImage,
                    author,
                    price,
                    discount,
                    discountedPrice
                } =[...res.data.products].find((product) => product._id === id)
                console.log("product set", [...res.data.products].find((product) => product._id === id));
				// console.log(res.data.products);
				// setProductList(res.data.products);
				// setDefaultProductList(res.data.products);
				// products=res.data.products;
			})();
		} catch (error) {
			console.log("Product list page error", error);
			Alert("error", "Some error occured!! refresh page and try again");
		}
    }, [])
    
    const {cartState, setCartState} = useCart();
    const {WishListState, setWishListState} = useWishList();
    const [handleCartQuantity, setHandleCartQuantity] = useState();
    let holder = true;
    const IncrementCart = "increment";
    const DecrementCart = "decrement";
    console.log(cartState);
    console.log(productContent);
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
            console.log(cartState.find((cartitem) => cartitem._id === id));
            let cartItem = cartState.find((cartitem) => cartitem._id === id);
            if (stateQuantity === IncrementCart && (cartItem?.qty < 4)) {
                setCartState(await UpdateCartService(stateQuantity, id));
            }

            if (stateQuantity === DecrementCart && (cartItem?.qty >= 2)) {

                setCartState(await UpdateCartService(stateQuantity, id));
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
      <div>
          
          <div className="card-footer">
              <img src={productContent?.url} />
              <div className="card-content">
                    <div className="card-body">
                        {productContent?.title} </div>
                    <div className="card-title">
                        <h2>₹{productContent?.price}</h2>
                        <span className="text-grey">
                            {productContent?.discount}</span>
                        <span className="text-linethrough">₹{productContent?.discountedPrice}</span>
                    </div>

                </div>
                    <div className="card-footer-view">
                        <button className='btn-addToCart'>
                            {
                                cartState.some((cartitem) => cartitem._id === id)
                                    ? <div className='cart-quantity-container'>
                                        <span className={ `${handleCartQuantity}`}
                                            onClick={ () => UpdateCartHandler(IncrementCart)}>
                                            <IcRoundPlus />
                                        </span>
                                                {{...cartState.find((cartitem) => cartitem._id === id)}?.qty}
                                        <span onClick={
                                            () => UpdateCartHandler(DecrementCart)}>
                                            <IcRoundMinus />
                                        </span>
                                    </div>
                                    : <span onClick={() => { AddProductsInCartHandler(productContent) } }
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
                !WishListState.find((cartitem) => cartitem._id === id) && <span className="material-icons-round "
                    style={
                        {
                            cursor: WishListState.find((cartitem) => cartitem._id === id) ? 'not-allowed' : 'pointer'
                        }
                    }
                    onClick={
                        () => {
                            AddProductsInWishListHandler(productContent)
                        }
                }>
                    favorite_border
                </span>
            }
    </div>
  )
}

export default ProductContentPage