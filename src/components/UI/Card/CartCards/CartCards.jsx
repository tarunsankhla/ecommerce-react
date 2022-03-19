import React from 'react'

function CartCards(props) {
    const { _id, title ,productImage , author,price,discount,discountedPrice } =props;



    // {
    //     "product":{
    //       "_id": "7980eb16-d3c7-4121-9835-06e1c5669717",
    //       "title": "Men Premium Shoe",
    //       "author": "Sneaker",
    //       "price": "5000",
    //       "categoryName": "non-fiction",
    //       "url": "/static/media/product1.9ed97c94.jpg",
    //       "discount": "-30% off",
    //       "discountedPrice": 3000,
    //       "description": "",
    //       "id": "1"}
    //     }
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