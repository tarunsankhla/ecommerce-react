import React from 'react'

function CartCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;
  return (
    <>
         <div className="card cart-card cart-card-horizontal cart-banner-stretch">
                        <img className="card-img" src={productImage} alt={author} />
                        <div className="cart-card-horizontal-layout">
                            <div className="card-content">
                                <div className="card-body">
                                    {title}
                                </div>
                                <div className="card-body">
                                    <h3>{price}</h3>
                                    <h4>{discount}</h4>
                                </div>   
                                <div className="card-body">
                                    Quantity
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </div> 
                            <div className="card-footer-view cart-card-footer cart-card-footer-flex">
                                <button>Remove from Cart</button>
                                <button>Move to Wishlist</button>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default CartCards