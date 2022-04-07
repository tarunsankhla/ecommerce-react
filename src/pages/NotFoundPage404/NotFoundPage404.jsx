import React from 'react';
import Button from '../../components/UI/Button/NormalButton/Button';
import "./NotFoundPage404.css";
import wishListLogoSrc from "./../../assets/images/SVG/notFound.svg";
import { Link } from 'react-router-dom';

function NotFoundPage404({props}) {
  return (
    <div className='notfounfd-page'>
      <img src={wishListLogoSrc} className="wishlist-logo" alt='404'/>
            
      <Link to="/"><Button name={"Go to Home"}/></Link>
  </div>
  )
}

export default NotFoundPage404