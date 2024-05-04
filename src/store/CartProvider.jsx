import React, { useState} from 'react'
import cartContext from './cart-context';

function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) =>{
        setCart((prevCart)=>[...prevCart,{item}])
    }

    const removeFromCart = (id) =>{
        setCart((prev)=>prev.filter(item => item.item.id !== id))
    }

    const clearCart = () =>{
        setCart([]);
    }

    const cartValue = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
    }
  return (
    <cartContext.Provider value={cartValue}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider