import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";

function CartItems({item}) {
  return (
    <div className='flex gap-3 mb-3 items-center bg-white px-3 py-2 shadow-md shadow-gray-500'>
        <div className=''>
            <img src={item.imageUrl} className='w-[25px]' />
        </div>
        <div className='w-[30%] text-sm'>
            {item.title}
        </div>
        <div className='w-[20%]'>
            ${item.price}
        </div>
        <div className='w-[20%]'>
            x {item.quantity}
        </div>
        <div className='w-[10%]'>
            <FaRegTrashAlt />
        </div>
    </div>
  )
}

export default CartItems;