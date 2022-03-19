import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider =({children})=>{
    const [cartState,setCartState] = useState([]);

    return(<CartContext.Provider value={{cartState,setCartState}}>
        {children}
    </CartContext.Provider>)
}

export const useCart = () => useContext(CartContext);

export {CartProvider}
