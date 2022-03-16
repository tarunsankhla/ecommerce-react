import "../Navbar/Navbar.css";
import React, { PureComponent } from 'react'
import { Link } from "react-router-dom";
import { logo as LogoImage} from "../../assets/images/Products/Products";

export function Navbar(){
    return (
        <div className="navbar">
            <a className="project-title" href="./">
                <img src={LogoImage}  alt="" srcset="" className="title-logo" />
            </a>
            
            <div className="input-icons">
                <span className="material-icons-round icon">
                    search
                    </span>
            <input type="tel" className="input-field"  name="main-search" id="main-search" placeholder="Search...."/>
            
            </div>
            <div className="navbar-action">
                <a className="btn btn-login" href="./src/Login/login.html">Login</a>
                <Link>
                    <a href="./src/WishListPage/wishListPage.html" className="badge-container">
                            <span className="material-icons-round drawer-icons">
                                favorite_border
                                </span>
                        <div className="badge  badge-warning topright-badge">0</div>            
                            </a>
                </Link>
                <a className="badge-container" href="./src/CartPage/CartPage.html">
                    <span className="material-icons-round drawer-icons">
                        shopping_cart_checkout
                        </span>
                    <div className="badge  badge-warning topright-badge">0</div>            
                </a>
            
            </div>
        </div>
    )
}