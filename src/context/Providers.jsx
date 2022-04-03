import {createContext} from "react";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./AuthContext";
import {CartProvider} from "./CartContext";
import {WishListProvider} from "./WishListContext";

const Provider = ({children}) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CartProvider>
                    <WishListProvider> {children} </WishListProvider>
                </CartProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export { Provider };