import React, {createContext} from "react"

 const cartContext = createContext({
    cart: [],
    addToCart: (item) =>{},
    removeFromCart: (id) =>{},
    clearCart: () =>{},
})

export default cartContext;

