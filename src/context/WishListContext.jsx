import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

const WishListProvider =({children})=>{
    const [WishListState,setWishListState] = useState([]);

    return(
    <WishListContext.Provider value={{WishListState,setWishListState}}>
        {children}
    </WishListContext.Provider>)
}

export const useWishList = () => useContext(WishListContext);

export {WishListProvider}