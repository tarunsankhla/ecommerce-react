import {SlideShow} from "./SlideShow/SlideShow";
import axios from "axios";
import {
    landingPageHeadImg1,
    landingPageHeadImg2,
    landingPageHeadImg3,
    landingPageHeadImg5,
    landingPageHeadImg4,
    landingPageHeadImg6,
    landingPageHeadImg7,
    landingPageHeadImg7webp,
    landingPageHeadImg4webp
} from "./../../assets/images/Products/Products";
import {IcRoundDoubleArrow} from "./../../components/UI/Icons/IcRoundDoubleArrow";

import "./LandingPage.css"
import {Link, NavLink} from "react-router-dom";
import DiscoverButton from "../../components/UI/Button/DiscoverButton/DiscoverButton";
import ArrivalsBanner from "./ArrivalsBanner/ArrivalsBanner";
// import { NavLink } from "react-router-dom";
export function LandingPage() {


    return (
        <>
            <div className="home-container-main-1">
                <div className="landing-page-display">
                    <img className="container-img"
                        src={landingPageHeadImg4webp}
                        alt="Landing page"/>
                </div>
                <div className="landing-page-content">
                    <h1>Be Dope...</h1>
                    <Link to="/products">
                        <DiscoverButton />
                    </Link>
                </div>
            </div>
            <ArrivalsBanner />
            <SlideShow/>
        </>
    )
}
