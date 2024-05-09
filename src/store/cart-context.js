import React, {createContext} from "react"

 const cartContext = createContext({
    cart: [],
    addToCart: (item) =>{},
    removeFromCart: (id) =>{},
    clearCart: () =>{},
    storingUserData: () =>{}
})

export default cartContext;

