import "../Navbar/Navbar.css";
import React, { PureComponent } from 'react'
// // import { Link, NavLink } from "react-router-dom";
import { logo as LogoImage} from "../../assets/images/Products/Products";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/CartContext";

export function Navbar(){
    const { login, setlogin } = useAuth();
    const { cartState : cartItems,setCartState } =useCart();
    console.log("Auther Login", login, setlogin);
    console.log("card context", cartItems, setCartState);

    const OnSignOut = () =>{
        setlogin(false);
        localStorage.removeItem("feetz");
        localStorage.removeItem("feetzId");
    }
    return (
        <div className="navbar">
            <NavLink className="project-title" to="/">
                <img src={LogoImage}  alt="logo"  className="title-logo" />
            </NavLink>
            
            <div className="input-icons">
                <span className="material-icons-round icon">
                    search
                    </span>
            <input type="tel" className="input-field"  name="main-search" id="main-search" placeholder="Search...."/>
            
            </div>
            <div className="navbar-action">
                
                <Link to="/wishlist">
                    <NavLink to="/wishlist" className="badge-container">
                            <span className="material-icons-round drawer-icons">
                                favorite_border
                                </span>
                        {login && <div className="badge  badge-warning topright-badge">0</div> }           
                            </NavLink>
                </Link>
                <NavLink className="badge-container" to="/cart">
                    <span className="material-icons-round drawer-icons">
                        shopping_cart_checkout
                        </span>
                        {login && <div className="badge  badge-warning topright-badge">{cartItems.length}</div>   }         
                </NavLink>
                <div>
                    {
                        login ? 
                        <button className="signout-btn text-underLine text-bold" onClick={OnSignOut}> Signout</button>
                        :
                        <>
                            <NavLink className="btn-login" to="/login">Login</NavLink>  | 
                            <NavLink className="btn-login" to="/signup">SignUp</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}