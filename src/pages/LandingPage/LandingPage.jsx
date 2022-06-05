import {SlideShow} from "./SlideShow/SlideShow";
import {landingPageHeadImg4webp} from "./../../assets/images/Products/Products";
import {Link} from "react-router-dom";
import DiscoverButton from "../../components/UI/Button/DiscoverButton/DiscoverButton";
import ArrivalsBanner from "./ArrivalsBanner/ArrivalsBanner";
import "./LandingPage.css"

export default function LandingPage() {

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
            <SlideShow />
            <ArrivalsBanner />
           
        </>
    )
}
