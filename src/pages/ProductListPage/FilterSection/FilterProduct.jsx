import React from 'react'

function FilterProduct() {
  return (
    <aside class="aside">
        <div class="toggler">
            <span class="material-icons-round ">
                cancel
            </span>
        </div>
        <div class="aside-header">
            <h3>Filters</h3>
            <a>Clear</a>
        </div>
        <div class="price-container">
            <h4>Price</h4>
            <input type="range" value="50" max="100" min="0" class="price-slider"/>
        </div>
        <div class="product-page-category">
            <h4>Category</h4>
            <div>
                <input class="checkbox-sneakers" type="checkbox" name="sneakers" value="sneakers"/>
                <label for="sneakers">Sneakers</label>
            </div>
            <div>
                <input class="checkbox-vans" type="checkbox" name="vans" value="vans"/>
                <label for="vans">vans</label>
            </div>
            <div>
                <input class="checkbox-converse" type="checkbox" name="converse" value="converse"/>
                <label for="converse">converse</label>
            </div>
            <div>
                <input class="checkbox-yezzy" type="checkbox" name="yezzy" value="yezzy"/>
                <label for="yezzy">yezzy</label>
            </div>
        </div>
        <div class="rating-container">
            <h4>Rating</h4>
            <div>
                <input type="radio" id="4stars" name="drone" value="4stars"
                    checked/>
                <label for="4stars">4 stars and above</label>
            </div>
            
            <div>
                <input type="radio" id="3stars" name="drone" value="3stars"/>
                <label for="3stars">3 stars and above</label>
            </div>
            
            <div>
                <input type="radio" id="2stars" name="drone" value="2stars"/>
                <label for="2stars">2 stars and above</label>
            </div>
            <div>
                <input type="radio" id="1stars" name="drone" value="1stars"/>
                <label for="1stars">1 stars and above</label>
            </div>

        </div>
        <div class="sort-by-conatianer">
            <h4>Sort by</h4>
            <div>
                <input type="radio" id="lth" name="price" value="lth"
                    checked />
                <label for="lth">Price - Low to High </label>
            </div>
            
            <div>
                <input type="radio" id="htl" name="price" value="htl" />
                <label for="htl">Price - High to Low</label>
            </div>
        </div>
    </aside>
  )
}

export default FilterProduct