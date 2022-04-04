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
import IcRoundWishlist from '../../components/UI/Icons/IcRoundWishlist';
import { useProduct } from '../../context/ProductContext';
import ProductCards from '../../components/UI/Card/ProductCards/ProductCards';
import ProductNotFound from "./../../assets/images/SVG/wishlist.svg";
import Button from '../../components/UI/Button/NormalButton/Button';
import { Link } from 'react-router-dom';

function ProductContentPage() {
    const { id } = useParams();
    const [productContent, setProductContent] = useState(false);
    const {ProductState ,setProductState} =useProduct();
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
                    url,
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
            if (!WishListState.some((cartitem) => cartitem._id === id)) {
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
            } else {
                Alert("success", "Product Already in WishList.");
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
            {
                productContent ?
            <div className='productcontent-page-container'>
                <div className='productcontent-header'>
                    <div className="title-handle">
                            {productContent?.title}
                        </div>                        
                </div>
                <div className='productcontent-body-container'>
                    <img src={productContent?.url} alt="productimage"
                        className="productcontent-img" />
                    
                    <div className="product-content">
                        <div className="productcontent-body">
                            Supplier : 
                            <span className='text-dark'>
                                {productContent?.author}
                            </span> 
                        </div>
                        <div className="productcontent-body">
                            Description :
                            <span className="text-dark">
                                {productContent?.description}</span>
                        </div>   
                        <div className="productcontent-body">
                            Price :
                            <span className="text-dark">₹{productContent?.discountedPrice}</span>
                            <span className="text-linethrough" style={{color:"red"}}>
                                ₹{productContent?.price}</span>
                        </div>
                        <div className="productcontent-body">
                            Discount :
                            <span className="text-dark">
                                ₹{productContent?.discount}</span>
                        
                        </div>
                        <div className="productcontent-body">
                            Product Type : <span className="text-dark">
                                {productContent?.productType}</span>
                        </div>
                        <div className="productcontent-body">
                            Feature :<span className="text-dark">
                                {productContent?.feature}</span>
                        </div>
                        <div className="productcontent-body">
                            Category :   <span className="text-dark">
                                {productContent?.categoryName}</span>
                        </div>
                        <div className="productcontent-body">
                            Category Type : <span className="text-dark">
                                {productContent?.categoryType}</span>
                        </div>
                        <div className="productcontent-body">
                            Stock Type :
                            <span className="text-dark">
                                {productContent?.stockType}</span>
                        </div>
                        <div className="productcontent-body">
                            Rating :{
                                Array(productContent?.rating).fill("").map(()=>(
                                <span class="material-icons-round" style={{color :"yellow"}}>
                                    star_rate
                                </span>))
                            }
                        </div>
                    </div>
                </div>
                <div className="productcontent-footer-view">
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
                    <button className='wishlist-btn' onClick={
                        () => {
                            AddProductsInWishListHandler(productContent)
                        }
                    }>Move to Wishlist
                        <IcRoundWishlist />
                    </button>
                </div>
                    </div>
                    :
                    <div className='notfounfd-page'>
                        <img src={ProductNotFound} className="wishlist-logo" alt='404'/>
                            
                        <Link to="/"><Button name={"Go to Home"} /></Link>
                       
                        <div className="title-handle">
                        No Such Product Exists
                    </div>
                </div>
                
            }

            {productContent &&
                <div className='explore-now'>
                    <div className="title-handle">
                        <Link to="/products">Explore More</Link>
                    </div>
                    <div className="product-main-list">
                            
                        {ProductState?.slice(0, 12).map((item) => (
                            <ProductCards
                                key={item._id}
                                _id={item._id}
                                title={item.title}
                                url={item.url}
                                author={item.author}
                                price={item.price}
                                discount={item.discount}
                                discountedPrice={item.discountedPrice}
                                rating={item.rating}
                                productType={item.productType}
                                feature={item.feature}
                                stockType={item.stockType}
                                stock={item.stock}
                                categoryType={item.categoryType}
                            />
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductContentPage