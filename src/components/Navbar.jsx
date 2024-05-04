import React, { useContext, useState } from "react";
import { GrCart } from "react-icons/gr";
import CartItems from "../cart/CartItems";
import cartContext from "../store/cart-context";

function Navbar() {
  const [showCartItems, setShowCartItems] = useState(false);
  const {cart} = useContext(cartContext)
 

  return (
    <div className="sticky top-0 z-[10]">
      <div className="flex items-center justify-between py-4 bg-black">
        <div></div>
        <div className="flex gap-[4rem] cursor-pointer text-white text-2xl italic">
          <div>Home</div>
          <div>Store</div>
          <div>About</div>
        </div>
        <div
          onClick={() => setShowCartItems(true)}
          className="text-white text-2xl px-[3rem] flex"
        >
          <GrCart className=" cursor-pointer"/>
          <p className="absolute top-1 right-[2.2rem] px-2 rounded-md bg-red-800 text-sm animate-bounce">{cart.length}</p>
        </div>
      </div>
      {showCartItems  && (
        <div className="fixed right-4 border-2 bg-white border-gray-400 px-5 py-3 z-[10]">
          <h1 className="text-center text-2xl font-bold italic">Cart</h1>
          <p onClick={()=>setShowCartItems(false)} className="absolute top-0 right-4 text-red-700 font-bold text-xl px-2 bg-gray-200 cursor-pointer">X</p>
           {cart.map((item)=>(
              <CartItems key={item.item.id} item={item.item}/>           
           ))
           } 
          <div className=' text-right'>
            <p className='font-bold'>Total: 0</p>
         </div>
         <div className="text-center my-2">
          <button className='bg-[#2ebff8] px-6 py-1 rounded-md text-white font-bold hover:bg-[#56CCF2]'>PURCHASE</button>
         </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
