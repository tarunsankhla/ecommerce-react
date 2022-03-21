import React from 'react'

function FilterProduct() {
  return (
    <aside className="aside">
        {/* <div className="toggler">
            <span className="material-icons-round ">
                cancel
            </span>
        </div> */}
        <div className="aside-header">
            <h3>Filters</h3>
            <a>Clear</a>
        </div>
        <div className='aside-body'>
            <div className="price-container">
                <h4>Price</h4>
                <input type="range" value="50" max="100" min="0" className="price-slider"/>
            </div>
            <div className="product-page-category">
                <h4>Category</h4>
                <div>
                    <input className="checkbox-sneakers" type="checkbox" name="sneakers" value="sneakers"/>
                    <label htmlFor="sneakers">Sneakers</label>
                </div>
                <div>
                    <input className="checkbox-vans" type="checkbox" name="vans" value="vans"/>
                    <label htmlFor="vans">vans</label>
                </div>
                <div>
                    <input className="checkbox-converse" type="checkbox" name="converse" value="converse"/>
                    <label htmlFor="converse">converse</label>
                </div>
                <div>
                    <input className="checkbox-yezzy" type="checkbox" name="yezzy" value="yezzy"/>
                    <label htmlFor="yezzy">yezzy</label>
                </div>
            </div>
            <div className="rating-container">
                <h4>Rating</h4>
                <div>
                    <input type="radio" id="4stars" name="drone" value="4stars"
                        checked/>
                    <label htmlFor="4stars">4 stars and above</label>
                </div>
                
                <div>
                    <input type="radio" id="3stars" name="drone" value="3stars"/>
                    <label htmlFor="3stars">3 stars and above</label>
                </div>
                
                <div>
                    <input type="radio" id="2stars" name="drone" value="2stars"/>
                    <label htmlFor="2stars">2 stars and above</label>
                </div>
                <div>
                    <input type="radio" id="1stars" name="drone" value="1stars"/>
                    <label htmlFor="1stars">1 stars and above</label>
                </div>

            </div>
            <div className="sort-by-conatianer">
                <h4>Sort by</h4>
                <div>
                    <input type="radio" id="lth" name="price" value="lth"
                        checked />
                    <label htmlFor="lth">Price - Low to High </label>
                </div>
                
                <div>
                    <input type="radio" id="htl" name="price" value="htl" />
                    <label htmlFor="htl">Price - High to Low</label>
                </div>
            </div>
        </div>
    </aside>
  )
}

export default FilterProduct