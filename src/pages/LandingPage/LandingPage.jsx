import { SlideShow } from "./SlideShow/SlideShow";
import axios from "axios";
import {   landingPageHeadImg1,
    // landingPageHeadImg2,
    // landingPageHeadImg3
} from "./../../assets/images/Products/Products";

import "./LandingPage.css"
// import { NavLink } from "react-router-dom";
export function LandingPage(){

    
    return(
        <>
        <SlideShow/>
        <div className="home-container-main-1">
            <img className="container-img" src={landingPageHeadImg1} alt="Landing page"/>
            {/* <NavLink to="./src/ProductListPage/productListPage.html" className="btn btn-oultine product-check-navigator">Checkout Products <span className="material-icons-round">
                arrow_forward_ios
                </span></NavLink> */}
        </div>
        </>
    )
}