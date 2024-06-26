import React, { useContext, useState, useEffect } from "react";
import { GrCart } from "react-icons/gr";
import CartItems from "../cart/CartItems";
import cartContext from "../store/cart-context";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/auth-context";


function Navbar() {
  const [showCartItems, setShowCartItems] = useState(false);
  const {cart} = useContext(cartContext)
  const navigate = useNavigate();
  const {isLoggedIn, logout} = useContext(AuthContext)

  useEffect(() => {
    if (isLoggedIn){
       return navigate("/");
    }
 },[isLoggedIn]);

 
  return (
    <div className="sticky top-0 z-[10]">
      <div className="flex items-center justify-between py-4 bg-black">
        <div></div>
        {/* {isLoggedIn && ()} */}
        <div className="flex gap-[4rem] cursor-pointer text-white text-2xl italic">
          
          <NavLink to='/home' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-white'}`}>
          <div>Home</div>
          </NavLink>
          
          <NavLink to='/' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-white'}`}>
            <div>Store</div>
          </NavLink>
          
          <NavLink to='/about' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-white'}`}>
          <div>About</div>
          </NavLink>

          <NavLink to='/contact' className={({isActive}) => `${isActive ? 'text-orange-700' : 'text-white'}`}>
          <div>Contact</div>
          </NavLink>
          
        </div>
        <div className="flex">
        <div
          onClick={() => setShowCartItems(true)}
          className="text-white text-2xl px-[3rem] flex"
        >
          <GrCart className=" cursor-pointer"/>
          <p className="absolute top-1 right-[8rem] px-2 rounded-md bg-red-800 text-sm">{cart.length}</p>
        </div>
        <div className="mr-[2rem] hover:rounded-lg hover:bg-gray-500">
          {isLoggedIn ? 
          <Link to='/login'><button onClick={()=>logout()}  className="text-white px-4 py-1 rounded">Logout</button> </Link>: 
         <Link to='/login'><button className="text-white px-4 py-1 rounded">Login</button></Link>  }
        </div>
        </div>
        
      </div>

      
    
      {showCartItems && cart.length === 0 && (
        <div className='flex gap-2 absolute right-0 bg-white px-3 py-2 shadow-md shadow-gray-300'>
          <p className="">You Don't have any Items in the Cart</p>
          <p onClick={()=>setShowCartItems(false)} className="text-red-700 font-bold text-xl px-2 bg-gray-200 cursor-pointer">X</p>
        </div>
      )}
      {showCartItems && cart.length > 0 && (
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
