import React, {useRef, useState, useContext} from 'react'
import { AuthContext } from '../store/auth-context';

function Form() {
    const [isLogin, setIslogin] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();

    const {login} = useContext(AuthContext)

    const switchAuthHandler = () =>{
        setIslogin((prevState) => !prevState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        let url;

        if(isLogin){
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBY-VIO9nNHjVOKopsMCLbv3MfaZ4clHRI'
        }else{
            url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBY-VIO9nNHjVOKopsMCLbv3MfaZ4clHRI'
        }

        try {
            console.log(url);
          const respone = await fetch(url,{
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!respone.ok){
                const err = await respone.json();
                console.log(err)
            }
            const data = await respone.json();
            login(data.idToken)
        } catch (error) {
            console.log(error.message);
        }
    }

  return (
    <div>
        <h1>{isLogin ? 'Login':'Sign-Up'}</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type="text" 
                    ref={emailRef}
                />
            </label>
            <label>
                Password:
                <input 
                    type="text" 
                    ref={passwordRef}
                />
            </label>
            <button type='submit'>{isLogin ? 'Login':'Sign-Up'}</button>

        </form>
        <button onClick={switchAuthHandler}>{isLogin ? 'Sign-Up With New Account' : 'Login With Exisiting  Account'}</button>

    </div>
  )
}

export default Form