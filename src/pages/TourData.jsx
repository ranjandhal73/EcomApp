import React from 'react'

function TourData({data}) {
    
  return (
    <>
      <div className='flex items-center justify-center gap-1 py-2 '>
        <p className='w-[5%]'>{data.date}</p>
        <p className='w-[10%]'>{data.state}</p>
        <p className='w-[20%]'>{data.venue}</p>
        <button className='w-[10%] bg-[#2ebff8] px-6 py-1 rounded-md text-white font-bold hover:bg-[#56CCF2]'>BUY TICKETS</button>
      </div>
         <div className='border-b border-black border-solid ml-[25rem] mr-[25rem]'></div>
      </>
  )
}

export default TourData;