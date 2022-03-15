import "./SlideShow.css"
import {
    product1,product2,
    product3,product4,
    product5,product6,
    product8,product7,
    product9,product12,
     product10,product13,
      product11,product14,product15
 } from "../../../assets/images/Products/Products"

export function SlideShow(){
    return (
        <>
            <ul className="underlist-img-slider">
                <div >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product1} />
                            <span className="overlay-img-slider">men</span></li>
                        
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product2} />
                            <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product3} />
                            <span className="overlay-img-slider">men</span></li>
                    </div>
                </div>
                <div >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product4} />
                            <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product8} />
                            <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product9} />
                            <span className="overlay-img-slider">men</span></li>
                    </div>
                </div>
                <div >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product2} />
                            <span className="overlay-img-slider">men</span></li>
                    
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={product5} />
                                <span className="overlay-img-slider">men</span></li>
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={product6} />
                            <span className="overlay-img-slider">men</span></li>
                    </div>
                </div>
                <div >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product7} />
                            <span className="overlay-img-slider">men</span></li>
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={product1} />
                                <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product4} />
                            <span className="overlay-img-slider">men</span></li>
                    </div>
                </div>
                <div >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product2} />
                            <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product3} />
                            <span className="overlay-img-slider">men</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product1} />
                            <span className="overlay-img-slider">men</span></li>
                    </div>
                </div>
            
            </ul>
        </>
    )
}