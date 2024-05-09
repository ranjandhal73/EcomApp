import React, { useState} from 'react'
import cartContext from './cart-context';

function CartProvider({children}) {
    const URL = 'https://ecom-app-ab8bb-default-rtdb.firebaseio.com/userData.json'
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

    const storingUserData = async (user) =>{
        const response = await fetch(URL,{
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
    }

    const cartValue = {
        cart: cart,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        clearCart: clearCart,
        storingUserData: storingUserData,
        
    }
  return (
    <cartContext.Provider value={cartValue}>
        {children}
    </cartContext.Provider>
  )
}

export default CartProvider