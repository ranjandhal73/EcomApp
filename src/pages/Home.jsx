import React from 'react'
import tourData from '../tourData'
import TourData from './TourData.jsx'

function Home() {
  return (
    <div className='py-[2rem]'>
        <h1 className='text-center text-4xl font-bold py-[2rem] font-mono'>Tours</h1>
        <div className=''>
            {tourData.map((item)=>(
                <TourData  key={item.id} data={item}/>
            ))}
        </div>
        
    </div>
  )
}

export default Home