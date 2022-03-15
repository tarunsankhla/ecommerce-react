import { SlideShow } from "./SlideShow/SlideShow";
import axios from "axios";
import {   landingPageHeadImg1,
    landingPageHeadImg2,
    landingPageHeadImg3} from "./../../assets/images/Products/Products";

import "./LandingPage.css"
export function LandingPage(){

    (async() => {
        var res = await axios.get("/api/products");
        console.log(res);
    })();
    return(
        <>
        <SlideShow/>
        <div className="home-container-main-1">
            <img className="container-img" src={landingPageHeadImg1} alt="Landing page"/>
            <a href="./src/ProductListPage/productListPage.html" className="btn btn-oultine product-check-navigator">Checkout Products <span className="material-icons-round">
                arrow_forward_ios
                </span></a>
        </div>
        </>
    )
}