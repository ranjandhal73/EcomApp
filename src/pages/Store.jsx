import React from 'react'
import {products} from '../products'
import ProductItem from './ProductItem';


function Store() {
  return (
    <div>
        <h1 className='text-center text-4xl font-bold py-[2rem] font-mono'>MUSIC</h1>
        <div className='grid grid-cols-2 px-[15rem] py-[2rem] gap-4 '>
            {products.map((item)=>(
                <ProductItem key={item.id} item={item}/>
            ))}
        </div>
    </div>
  )
}

export default Store;