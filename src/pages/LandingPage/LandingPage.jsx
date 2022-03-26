import { SlideShow } from "./SlideShow/SlideShow";
import axios from "axios";
import {   landingPageHeadImg1,
    landingPageHeadImg2,
    landingPageHeadImg3,
    landingPageHeadImg5,
    landingPageHeadImg4,
    landingPageHeadImg6,
    landingPageHeadImg7,
    landingPageHeadImg7webp,
    landingPageHeadImg4webp
} from "./../../assets/images/Products/Products";

import "./LandingPage.css"
import {Link, NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
export function LandingPage(){

    
    return(
        <>
           
            
            <div className="home-container-main-1">
                <div className="landing-page-display">
                    <img className="container-img" src={landingPageHeadImg4webp} alt="Landing page" />
                </div>
                <div className="landing-page-content">
                    <h1>Be Dope</h1>
                    <Link to="/products">
                        <NavLink to="/products" >
                            <div className="btn btn-oultine product-check-navigator">
                            Discover
                            <span className="material-icons-round">
                                arrow_forward_ios
                            </span></div>
                            </NavLink>
                    </Link>
                </div>
            </div>
            <SlideShow/>
        </>
    )
}