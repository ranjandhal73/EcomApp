import React, {useContext} from 'react'
import cartContext from '../store/cart-context';

function ProductItem({item}) {
  const {addToCart} = useContext(cartContext);
  const cartHandler = (item) =>{
    addToCart(item);
  }
  return (
    <div className='flex flex-wrap flex-col gap-4 items-center py-[1rem] border-2 shadow-lg shadow-gray-400'>
        <h1 className='text-xl italic'>{item.title}</h1>
        <div className='w-max-[1rem] overflow-hidden'>
            <img className='hover:scale-[1.5] hover:brightness-125 duration-[1.2s] cursor-pointer' src={item.imageUrl}/>
        </div>
        
        <div className='flex items-center justify-evenly w-full'>
            <p className='font-bold text-lg'>${item.price}</p>
            <button onClick={()=>cartHandler(item)} className='bg-[#2ebff8] px-6 py-1 rounded-md text-white font-bold hover:bg-[#56CCF2]'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductItem;