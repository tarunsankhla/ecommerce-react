import {createContext} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AuthContext";
import {CartProvider} from "./CartContext";
import {ProductProvider} from "./ProductContext";
import {WishListProvider} from "./WishListContext";

const Provider = ({children}) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <WishListProvider>
                        <ProductProvider>{children}</ProductProvider>
                    </WishListProvider>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export {
    Provider
};
