import React from 'react'

function ProductItem({item}) {
  return (
    <div className='flex flex-col items-center py-[1rem]'>
        <h1 className='text-xl italic pb-4'>{item.title}</h1>
        <img className='hover:scale-[1.05] duration-[1.2s] cursor-pointer' src={item.imageUrl}/>
        <div className='flex items-center justify-evenly w-full py-4'>
            <p className='font-bold text-lg'>${item.price}</p>
            <button className='bg-[#2ebff8] px-6 py-1 rounded-md text-white font-bold hover:bg-[#56CCF2]'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductItem;