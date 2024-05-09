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
        <form onSubmit={sumbitHandler}>
            <label>
                Name:
                <input 
                    type="text" 
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
            </label>

            <label>
                Email:
                <input 
                    type="text" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
            </label>

            <label>
                Phone:
                <input 
                    type="text"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                />
            </label>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default Contact