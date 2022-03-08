import "../Navbar/Navbar.css"

export function Navbar(){
    return (
        <div className="navbar">
        {/* <!-- <img src="./asset/img/logo.png" className="title-logo"/> --> */}
        <a className="project-title">
            {/* <img /> */}
            <img src="./src/assets/images/logo.png"  alt="" srcset="" />
        </a>
        
        <div className="input-icons">
            <span className="material-icons-round icon">
                search
                </span>
          <input type="tel" className="input-field"  name="main-search" id="main-search" placeholder="Search...."/>
           
        </div>
        <div className="navbar-action">
            <a className="btn btn-login" href="./src/Login/login.html">Login</a>
            <a href="./src/WishListPage/wishListPage.html" className="badge-container">
                    <span className="material-icons-round drawer-icons">
                        favorite_border
                        </span>
                <div className="badge  badge-warning topright-badge">0</div>            
                    </a>
            <a className="badge-container" href="./src/CartPage/CartPage.html">
                <span className="material-icons-round drawer-icons">
                    shopping_cart_checkout
                    </span>
                <div className="badge  badge-warning topright-badge">0</div>            
            </a>
           
            {/* <!-- <a className="btn btn-link">Cart</a> --> */}
        </div>
    </div>
    )
}