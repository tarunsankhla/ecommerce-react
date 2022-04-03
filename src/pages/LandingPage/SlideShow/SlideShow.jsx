import "./SlideShow.css"
import {
    product1,product2,
    product3,product4,
    product5,product6,
    product8,product7,
    product9,product12,
     product10,product13,
    product11, product14, product15,
    product17_sportshoe,
  product18_sportshoe,
  product19_sportshoe,
  product20_sportshoe,
  product21_sportshoe,
  product22_sportshoe,
  product23_sportshoe,
  product24_sportshoe,    product25_sportshoe,
    product26_sportshoe,
    product27_slides,
     product28_slides,
     product29_slides,
     product30_slides,
     product31_slides,
     product32_slides,
     arrivalBanner6
 } from "../../../assets/images/Products/Products"
import { useNavigate } from "react-router"

export function SlideShow() {
    const navigate = useNavigate();
    const redirectToCategoryHandler = (name) => { 
        navigate(`/products?CategoryType=${name}`)
    }
    return (
        <div className="slide-show-contatiner">
            <div className="title-handle">Category : </div>
            <ul className="underlist-img-slider">
                <div onClick={()=>redirectToCategoryHandler("Football")} >
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product23_sportshoe} />
                            <span className="overlay-img-slider">Football</span></li>
                        
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product19_sportshoe} />
                            <span className="overlay-img-slider">Football</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product22_sportshoe} />
                            <span className="overlay-img-slider">Football</span></li>
                    </div>
                </div>
                <div onClick={()=>redirectToCategoryHandler("Cricket")}>
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product26_sportshoe} />
                            <span className="overlay-img-slider">Cricket</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product25_sportshoe} />
                            <span className="overlay-img-slider">Cricket</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product26_sportshoe} />
                            <span className="overlay-img-slider">Cricket</span></li>
                    </div>
                </div>
                <div onClick={()=>redirectToCategoryHandler("Running")}>
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product3} />
                            <span className="overlay-img-slider">Running</span></li>
                    
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={product6} />
                                <span className="overlay-img-slider">Running</span></li>
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={arrivalBanner6} />
                            <span className="overlay-img-slider">Running</span></li>
                    </div>
                </div>
                <div onClick={()=>redirectToCategoryHandler("Gym")}>
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product17_sportshoe} />
                            <span className="overlay-img-slider">Gym</span></li>
                            <li className="list-img-slider">
                                <img alt="product-img" className="img-slide" src={product1} />
                                <span className="overlay-img-slider">Gym</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product7} />
                            <span className="overlay-img-slider">Gym</span></li>
                    </div>
                </div>
                <div onClick={()=>redirectToCategoryHandler("Regular")}>
                    <div className="listImgSlide">
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product27_slides} />
                            <span className="overlay-img-slider">Regular</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product32_slides} />
                            <span className="overlay-img-slider">Regular</span></li>
                        <li className="list-img-slider">
                            <img alt="product-img" className="img-slide" src={product10} />
                            <span className="overlay-img-slider">Regular</span></li>
                    </div>
                </div>
            
            </ul>
        </div>
    )
}