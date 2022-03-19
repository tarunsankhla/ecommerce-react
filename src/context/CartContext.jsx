import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider =({children})=>{
    const [cartState,useCartState] = useState();

    return(<CartContext.Provider value={{cartState,useCartState}}>
        {children}
    </CartContext.Provider>)
}

export const useCart = () => useContext(CartContext);

export {CartProvider}
