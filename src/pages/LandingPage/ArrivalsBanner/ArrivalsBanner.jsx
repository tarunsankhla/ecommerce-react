import React from 'react';
import "./ArrivalsBanner.css";
import {
    arrivalBanner1,
    arrivalBanner2,
    arrivalBanner3,
    arrivalBanner4,
    arrivalBanner5,
    arrivalBanner6,
    arrivalBanner7
} from "../../../assets/images/Products/Products";
import { useNavigate } from 'react-router';

function ArrivalsBanner() {
    const navigate = useNavigate();
    const redirectToProductList = () => { 
        navigate(`/products`)
    }
    return (
        <div>
             <marquee>
                we have special discount on sneakers</marquee>
            <div className="banner-collection" onClick={redirectToProductList}>
                <div className="banner">
                    <img className="banner-img"
                        src={arrivalBanner1} alt="banner" loading='lazy'/>
                    <div className="banner-container">
                        <div className="banner-tag">NEW ARRIVAL</div>
                        <div className="banner-content">
                            <h1>Summer Collection</h1>
                            <div className="banner-content-desc">Check out our best  collection to stay dope in style this season</div>
                        </div>
                    </div>
                </div>

                <div className="banner"  onClick={redirectToProductList}>
                    <img className="banner-img"
                        src={arrivalBanner3}  alt="banner" loading='lazy'/>
                    <div className="banner-container">
                        <div className="banner-tag">NEW ARRIVAL</div>
                        <div className="banner-content">
                            <h1>Summer Collection</h1>
                            <div className="banner-content-desc">Check out our best  collection to stay dope in style this season</div>
                        </div>
                    </div>
                </div>
                <div className="banner"  onClick={redirectToProductList}>
                    <img className="banner-img"
                        src={arrivalBanner4}  alt="banner" loading='lazy'/>
                    <div className="banner-container">
                        <div className="banner-tag">NEW ARRIVAL</div>
                        <div className="banner-content">
                            <h1>Summer Collection</h1>
                            <div className="banner-content-desc">Check out our best  collection to stay dope in style this season</div>
                        </div>
                    </div>
                </div>


                <div className="banner"   onClick={redirectToProductList}>
                    <img className="banner-img"
                        src={arrivalBanner5}  alt="banner" loading='lazy'/>
                    <div className="banner-container">
                        <div className="banner-tag">NEW ARRIVAL</div>
                        <div className="banner-content">
                            <h1>Summer Collection</h1>
                            <div className="banner-content-desc">Check out our best  collection to stay dope in style this season</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ArrivalsBanner
