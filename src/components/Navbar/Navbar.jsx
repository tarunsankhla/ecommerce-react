import "../Navbar/Navbar.css";
import React, { PureComponent, useState } from 'react'
// // import { Link, NavLink } from "react-router-dom";
import { logo as LogoImage } from "../../assets/images/Products/Products";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";
import { useWishList } from "../../context/WishListContext";
import { IcTwotoneShoppingCart } from "../../components/UI/Icons/IcTwotoneShoppingCart";
import { IcRoundWishlist } from "../../components/UI/Icons/IcRoundWishlist";
import { ROUTE_PATH_ProfilePage, VAR_ENCODE_TOKEN, VAR_USER_DETAILS, VAR_USER_ID } from "../../utils/Routes";
import { useNavigate} from "react-router-dom";


export function Navbar() {
    const { login, setlogin, userState } = useAuth();
    const { cartState: cartItems, setCartState } = useCart();
    const { WishListState, setWishListState } = useWishList();
    const [ searchQuery, setSearchQuery ] = useState("");
    const navigate = useNavigate();

    const OnSignOut = () => {
        setlogin(false);
        localStorage.removeItem(VAR_ENCODE_TOKEN);
        localStorage.removeItem(VAR_USER_ID);
        localStorage.getItem(VAR_USER_DETAILS);
        setCartState([]);
        setWishListState([]);
    }

    const RedirectSearchQueryHandler = (e) => { 
        e.preventDefault();
        console.log(searchQuery);
        navigate(`/products/search?query=${searchQuery}`,{state : searchQuery});
		setSearchQuery("");
    }
    return (
        <>
            
            <div className="navbar">
                <NavLink className="project-title" to="/">
                    <img src={LogoImage}
                        alt="logo"
                        className="title-logo" />
                </NavLink>

                <div className="input-icons">
                    <form onSubmit={RedirectSearchQueryHandler}>
                        <span className="material-icons-round icon" style={{color:"white"}} onClick={() => { RedirectSearchQueryHandler(); }}>
                            search
                        </span>
                        <input type="tel" className="input-field" name="main-search" id="main-search" placeholder="Search...."
                        onChange={(e)=>setSearchQuery(e.target.value)}/>
                    </form>
                </div>
                <div className="navbar-action">

                    <Link to="/wishlist">
                        <NavLink to="/wishlist" className="badge-container">
                            <IcRoundWishlist />
                            {
                                login && <div className="badge  badge-warning topright-badge">
                                    {
                                        WishListState.length
                                    }</div>
                            } </NavLink>
                    </Link>
                    <NavLink className="badge-container" to="/cart">
                        <IcTwotoneShoppingCart color='red' />
                        {
                            login && <div className="badge  badge-warning topright-badge">
                                {
                                    cartItems.length
                                }</div>
                        } </NavLink>
                    <div> {
                        login ? <button className="btn signout-btn text-underLine text-bold"
                            onClick={OnSignOut}>
                            Signout</button> : <>
                            <NavLink className="btn btn-login" to="/login">Login</NavLink>
                            |
                            <NavLink className="btn btn-login" to="/signup">SignUp</NavLink>
                        </>
                    } </div>
                    <div onClick={() => { navigate(ROUTE_PATH_ProfilePage)}} style={{cursor:"pointer"}}> {
                        login && <div className="profile-initials">
                            {
                                userState?.firstName[0]?.toString().toUpperCase() || ""
                            }
                            {
                                userState?.lastName[0]?.toString().toUpperCase() || ""
                            }</div>
                    } </div>
                </div>
            </div>
        </>
    )
}
