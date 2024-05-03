import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-center gap-[4rem] cursor-pointer py-4 bg-black text-white text-2xl italic'>
        <div>Home</div>
        <div>Store</div>
        <div>About</div>
    </div>
  )
}

export default Navbar;