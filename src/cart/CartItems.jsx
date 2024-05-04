import React, {useContext}  from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import cartContext from '../store/cart-context';

function CartItems({item}) {
    const {removeFromCart} = useContext(cartContext)
    const removeHandler = (id) =>{
        removeFromCart(id);
    }

  return (
    <>
        <div className='flex gap-3 mb-3 items-center bg-white px-3 py-2 shadow-md shadow-gray-500'>
            <div className=''>
                <img src={item.imageUrl} className='w-[25px]' />
            </div>
            <div className='w-[50%] text-sm'>
                {item.title}
            </div>
            <div className='w-[30%]'>
                ${item.price}
            </div>
            <div className='w-[20%] text-red-700 cursor-pointer'>
                <FaRegTrashAlt onClick={()=>removeHandler(item.id)}/>
            </div>
        </div>
    </>
  )
}

export default CartItems;