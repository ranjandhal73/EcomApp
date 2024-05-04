import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { cartElements } from "../cartElements";
import CartItems from "../cart/CartItems";

function Navbar() {
  const [showCartItems, setShowCartItems] = useState(false);

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
          className="text-white text-2xl px-[3rem]"
        >
          <GrCart />
        </div>
      </div>
      {showCartItems && cartElements.length > 0 && (
        <div className="fixed right-4 border-2 border-gray-400 px-5 py-3 z-[10]">
          <h1 className="text-center text-2xl font-bold italic">Cart</h1>
          {cartElements.map((item) => (
            <CartItems key={Math.random()} item={item}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
