import "../Navbar/Navbar.css";
import React, { PureComponent } from 'react'
// // import { Link, NavLink } from "react-router-dom";
import { logo as LogoImage} from "../../assets/images/Products/Products";
import { Link, NavLink } from "react-router-dom";

export function Navbar(){
    return (
        <div className="navbar">
            <NavLink className="project-title" to="./">
                <img src={LogoImage}  alt=""  className="title-logo" />
            </NavLink>
            
            <div className="input-icons">
                <span className="material-icons-round icon">
                    search
                    </span>
            <input type="tel" className="input-field"  name="main-search" id="main-search" placeholder="Search...."/>
            
            </div>
            <div className="navbar-action">
                <NavLink className="btn btn-login" to="/login">Login</NavLink>
                <Link to="/wishlist">
                    <NavLink to="/wishlist" className="badge-container">
                            <span className="material-icons-round drawer-icons">
                                favorite_border
                                </span>
                        <div className="badge  badge-warning topright-badge">0</div>            
                            </NavLink>
                </Link>
                <NavLink className="badge-container" to="./src/CartPage/CartPage.html">
                    <span className="material-icons-round drawer-icons">
                        shopping_cart_checkout
                        </span>
                    <div className="badge  badge-warning topright-badge">0</div>            
                </NavLink>
            
            </div>
        </div>
    )
}