import React, {useState, useContext} from 'react'
import cartContext from '../store/cart-context'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const {storingUserData} = useContext(cartContext)

    const sumbitHandler = (e)=>{
        e.preventDefault()
        const contactDetails = {name,email,phone}
        storingUserData(contactDetails);
        setName('');
        setEmail('');
        setPhone('');
    }

  return (
    <>
        <form onSubmit={sumbitHandler} className='my-[4rem] flex flex-col items-center justify-center gap-4 py-[8rem] mx-[15rem]'>
            <label className='flex items-center'>
                <p className='pr-2 text-xl font-semibold'>Name:</p>
                <input className='border-2 border-gray-300 px-2 font-medium py-1 hover:border-green-500 text-black'
                    type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </label>

            <label className='flex items-center'>
               <p className='pr-2 text-xl font-semibold'>Email:</p> 
                <input className='border-2 border-gray-300 px-2 font-medium py-1 hover:border-green-500  text-black'
                    type="text" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </label>

            <label className='flex items-center'>
                <p className='pr-2 text-xl font-semibold'>Phone:</p>
                <input className='border-2 border-gray-300 px-2 font-medium py-1 hover:border-green-500 text-black'
                    type="text"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </label>
            <button 
                className='bg-blue-700 hover:bg-blue-900  text-white font-bold px-[5rem] py-2 ml-[4rem]'
                type='submit'
            >Submit</button>
        </form>
    </>
  )
}

export default Contact