import { createContext, useContext, useState } from "react";

const ProductContext = createContext({});

const ProductProvider =({children})=>{
    const [ProductState,setProductState] = useState([]);

    return(
    <ProductContext.Provider value={{ProductState,setProductState}}>
        {children}
    </ProductContext.Provider>)
}

export const useProduct = () => useContext(ProductContext);

export {ProductProvider}